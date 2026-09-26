"""Proxy de instalação — Parte 4 da sequência de execução.

`GET /install/{token}`: o comando de instalação que o cliente cola no CLI de
IA dele chama esse endpoint. O fluxo:

  1. Recebe o token de instalação (o mesmo devolvido pelo webhook da Hotmart
     em `/webhook/hotmart` — ver `app/webhook/hotmart.py`).
  2. Faz o hash (sha256) do token recebido e busca em `installations` por
     `token_hash` igual, com `status = "active"`. O token em texto puro
     NUNCA fica salvo no banco — só o hash (mesmo princípio já usado no
     webhook).
  3. Se não achar (token errado, revogado por reembolso/chargeback, etc.):
     404 — sem detalhar o motivo pro chamador, pra não vazar informação
     sobre quais tokens existem.
  4. Se achar: baixa o tarball do repositório privado `soulimajr/win-os`
     via GitHub API, usando o `GITHUB_PAT` da Creative (nunca exposto ao
     cliente) e devolve o conteúdo em streaming pro instalador extrair.

O cliente nunca vê nem precisa de credencial do GitHub — só o token de
instalação dele, que já está embutido no comando que o dashboard/Hotmart
gera pra ele.
"""

import hashlib
from pathlib import Path

import httpx
from fastapi import APIRouter, HTTPException, status
from fastapi.responses import PlainTextResponse, StreamingResponse

from app.core.config import settings
from app.core.supabase_client import get_supabase

router = APIRouter(tags=["install"])

_INSTALLER_SCRIPT_PATH = Path(__file__).parent / "installer.sh"


@router.get("/installer.sh", response_class=PlainTextResponse)
def installer_script() -> str:
    """Serve o script instalador (Parte 5) — é o que o comando

        curl -fsSL .../api/installer.sh | bash -s -- <TOKEN>

    baixa e executa. Servido como texto puro pra funcionar direto com curl|bash.
    """
    return _INSTALLER_SCRIPT_PATH.read_text(encoding="utf-8")


@router.get("/install/{token}")
async def install(token: str) -> StreamingResponse:
    token_hash = hashlib.sha256(token.encode()).hexdigest()

    supabase = get_supabase()
    result = (
        supabase.table("installations")
        .select("id")
        .eq("token_hash", token_hash)
        .eq("status", "active")
        .execute()
    )
    if not result.data:
        # Não diferenciar "não existe" de "existe mas está revogado" na
        # resposta — informação nenhuma sobre tokens vaza pro chamador.
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="token inválido")

    # Endpoint da GitHub API que gera um tarball do branch default do repo.
    # Usa a API oficial (não o codeload.github.com direto) porque só a API
    # aceita o header de autenticação do PAT pra repositório privado.
    url = f"https://api.github.com/repos/{settings.github_repo}/tarball"
    headers = {
        "Authorization": f"Bearer {settings.github_pat}",
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
    }

    # A API do GitHub responde com 302 pra codeload.github.com (com um token
    # assinado próprio na URL de redirecionamento) em vez de servir o
    # tarball direto — precisa seguir o redirect.
    client = httpx.AsyncClient(follow_redirects=True)
    req = client.build_request("GET", url, headers=headers)
    upstream = await client.send(req, stream=True)

    if upstream.status_code != status.HTTP_200_OK:
        await upstream.aclose()
        await client.aclose()
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail="não foi possível baixar o pacote do Win OS agora",
        )

    async def stream_and_cleanup():
        try:
            async for chunk in upstream.aiter_bytes():
                yield chunk
        finally:
            await upstream.aclose()
            await client.aclose()

    return StreamingResponse(
        stream_and_cleanup(),
        media_type="application/gzip",
        headers={"Content-Disposition": "attachment; filename=win-os.tar.gz"},
    )
