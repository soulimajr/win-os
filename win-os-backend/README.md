# Win OS Backend

Backend do Win OS — acumula 3 responsabilidades (ver plano completo em `C:\Users\ELIELETRO\.claude\plans\crie-um-projeto-completo-precious-gem.md`):

1. **Webhook da Hotmart** (`POST /webhook/hotmart`) — na compra aprovada, cria a conta do cliente + token de instalação único.
2. **Proxy de instalação** (`GET /install/<token>`) — entrega o pacote do repositório privado `soulimajr/win-os` pro instalador do cliente, sem expor credencial do GitHub da Creative.
3. **Validação de update** (`GET /update/<token>`) — usado pelo updater em background do Win OS instalado.

## Status atual

Só o esqueleto (Parte 1 da sequência de execução) — sobe com `/health`, sem lógica de negócio ainda.

## Rodar localmente

```bash
uv sync
cp .env.example .env   # preencher antes de implementar as próximas partes
uv run uvicorn app.main:app --reload
```

## Stack

FastAPI + `uv`, Supabase (projeto próprio, separado do Broker Ads), mesmo padrão de deploy do resto do VPS da Creative (Docker Compose + Traefik).
