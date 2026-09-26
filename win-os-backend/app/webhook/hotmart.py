"""Webhook da Hotmart — Parte 3 da sequência de execução.

Formato real do payload (confirmado com testes reais do painel da Hotmart
em 2026-09-12 — a documentação sozinha não deixava isso claro):

    POST /webhook/hotmart?hottok=<token>
    {
      "id": "...",
      "creation_date": 1234567890123,
      "event": "PURCHASE_APPROVED",
      "version": "2.0.0",
      "data": {
        "buyer": {"email": "...", "name": "...", ...vários outros campos},
        "purchase": {"transaction": "HP...", "status": "APPROVED", ...}
      }
    }

IMPORTANTE: o `hottok` NÃO vem dentro do corpo do JSON — ele é enviado
como **query parameter na própria URL**. Isso significa que a URL
cadastrada no painel da Hotmart precisa ser:

    https://app.creativeagenciamkt.com.br/api/webhook/hotmart?hottok=<HOTTOK_REAL>

(não só a URL base sem o `?hottok=...`).

Só o evento `PURCHASE_APPROVED` cria instalação. Outros eventos (reembolso,
chargeback, disputa etc.) são só reconhecidos com 200 por enquanto — tratar
revogação de acesso fica pra quando tivermos a Parte 4 rodando de ponta
a ponta.
"""

import hashlib
import secrets

from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, ConfigDict, EmailStr

from app.core.config import settings
from app.core.supabase_client import get_supabase

router = APIRouter(prefix="/webhook", tags=["webhook"])


class HotmartBuyer(BaseModel):
    model_config = ConfigDict(extra="ignore")

    email: EmailStr
    name: str | None = None


class HotmartPurchase(BaseModel):
    model_config = ConfigDict(extra="ignore")

    transaction: str
    status: str


class HotmartData(BaseModel):
    model_config = ConfigDict(extra="ignore")

    buyer: HotmartBuyer
    purchase: HotmartPurchase


class HotmartWebhookPayload(BaseModel):
    model_config = ConfigDict(extra="ignore")

    event: str
    data: HotmartData


def _generate_install_token() -> tuple[str, str]:
    """Gera o token de instalação e o hash que fica guardado no banco.

    O token em si (que vai pro cliente, dentro do comando de instalação)
    NUNCA é guardado em texto puro no Supabase — só o hash. Isso segue o
    mesmo princípio de nunca guardar segredo em texto puro que já usamos
    pra API key da IA do cliente (Fernet) — aqui é hash porque o token
    só precisa ser *comparado*, nunca *decifrado* de volta.
    """
    token = secrets.token_urlsafe(32)
    token_hash = hashlib.sha256(token.encode()).hexdigest()
    return token, token_hash


@router.post("/hotmart", status_code=status.HTTP_200_OK)
def hotmart_webhook(payload: HotmartWebhookPayload, hottok: str) -> dict[str, str]:
    if hottok != settings.hotmart_hottok:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="hottok inválido")

    if payload.event != "PURCHASE_APPROVED":
        # Reconhece mas não processa — reembolso/chargeback/etc. tratados
        # futuramente (revogar `installations.status`).
        return {"status": "ignored", "event": payload.event}

    supabase = get_supabase()

    existing = (
        supabase.table("installations")
        .select("id")
        .eq("hotmart_transaction_id", payload.data.purchase.transaction)
        .execute()
    )
    if existing.data:
        # Hotmart pode reenviar o mesmo webhook (retry) — não duplicar instalação.
        return {"status": "already_processed"}

    token, token_hash = _generate_install_token()

    supabase.table("installations").insert(
        {
            "email": payload.data.buyer.email,
            "token_hash": token_hash,
            "hotmart_transaction_id": payload.data.purchase.transaction,
            "status": "active",
        }
    ).execute()

    # TODO (Parte 8, dashboard): entregar o `token` de verdade pro cliente
    # (hoje a Hotmart já manda e-mail de acesso próprio; decidir se a gente
    # complementa com e-mail próprio ou só mostra no /conta após login).
    # Por enquanto o retorno inclui o token só pra facilitar teste manual —
    # isso PRECISA sair antes de ir pra produção com pagamento real.
    return {"status": "created", "install_token": token}
