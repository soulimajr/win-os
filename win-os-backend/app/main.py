"""Win OS backend — Fase 2A da sequência de execução.

Responsabilidades deste serviço:
  1. Webhook da Hotmart -> cria conta + token de instalação (Parte 3, feito)
  2. Proxy de download do pacote privado do GitHub (Parte 4, feito)
  3. Validação de token no updater em background (Fase 2B, futuro)
"""

from fastapi import FastAPI

from app.install.routes import router as install_router
from app.webhook.hotmart import router as hotmart_router

app = FastAPI(title="Win OS Backend", version="0.1.0")
app.include_router(hotmart_router)
app.include_router(install_router)


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}
