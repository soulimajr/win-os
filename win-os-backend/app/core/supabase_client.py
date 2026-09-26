"""Cliente Supabase único (service role) reaproveitado pelos routers.

Sempre usa a service_role key — este backend nunca atua "como usuário
final", só como serviço de confiança que cria/lê instalações.
"""

from functools import lru_cache

from supabase import Client, create_client

from app.core.config import settings


@lru_cache
def get_supabase() -> Client:
    return create_client(settings.supabase_url, settings.supabase_service_key)
