"""Configuração central via variáveis de ambiente.

Nada aqui tem valor real ainda — só os nomes que os próximos passos
(webhook Hotmart, Supabase, proxy do GitHub) vão precisar. Ver
`.env.example` pro que precisa ser preenchido antes de rodar de verdade.
"""

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    # Supabase (projeto próprio do Win OS, separado do Broker Ads)
    supabase_url: str = ""
    supabase_service_key: str = ""

    # Hotmart — validação de webhook (Hottok)
    hotmart_hottok: str = ""

    # GitHub — acesso ao repositório privado do pacote win-os
    github_pat: str = ""
    github_repo: str = "soulimajr/win-os"

    # Criptografia da API key da IA do cliente em repouso
    fernet_key: str = ""


settings = Settings()
