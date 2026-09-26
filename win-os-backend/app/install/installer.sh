#!/usr/bin/env bash
# Instalador do Win OS — Parte 5 da sequência de execução.
#
# Este é o script que roda quando o cliente cola o comando de instalação
# (gerado depois que o pagamento na Hotmart é confirmado) no terminal ou
# no CLI de IA que ele já usa (Claude Code, etc.):
#
#   curl -fsSL https://app.creativeagenciamkt.com.br/api/installer.sh | bash -s -- <TOKEN>
#
# O que ele faz:
#   1. Baixa o pacote do Win OS chamando GET /install/<token> no backend
#      (o backend valida o token e serve o conteúdo do repo privado —
#      o cliente nunca precisa de credencial do GitHub).
#   2. Extrai numa pasta local (./win-os por padrão, ou o nome que o
#      cliente passar como segundo argumento).
#   3. Mostra o próximo passo: abrir a pasta na IA e pedir pra ler
#      `coordenador/papel.md`, que dispara a entrevista de instalação
#      guiada (a mesma lógica de onboarding que o Nexus já usa).
#
# Não sobrescreve nada — se a pasta de destino já existir e não estiver
# vazia, para e avisa, em vez de arriscar apagar dado do cliente.

set -euo pipefail

BASE_URL="${WIN_OS_BASE_URL:-https://app.creativeagenciamkt.com.br/api}"
TOKEN="${1:-}"
DEST="${2:-win-os}"

if [ -z "$TOKEN" ]; then
  echo "Erro: faltou o token de instalação." >&2
  echo "Uso: curl -fsSL $BASE_URL/installer.sh | bash -s -- <TOKEN> [pasta-destino]" >&2
  exit 1
fi

if [ -e "$DEST" ] && [ -n "$(ls -A "$DEST" 2>/dev/null)" ]; then
  echo "Erro: a pasta '$DEST' já existe e não está vazia." >&2
  echo "Escolha outro nome de pasta: curl ... | bash -s -- <TOKEN> outra-pasta" >&2
  exit 1
fi

TMP_TAR="$(mktemp -t win-os-XXXXXX.tar.gz)"
cleanup() { rm -f "$TMP_TAR"; }
trap cleanup EXIT

echo "Baixando o Win OS..."
HTTP_CODE=$(curl -sS -w '%{http_code}' -o "$TMP_TAR" "$BASE_URL/install/$TOKEN")

if [ "$HTTP_CODE" != "200" ]; then
  echo "Erro: não foi possível baixar o pacote (HTTP $HTTP_CODE)." >&2
  echo "Verifique se o token está correto ou fale com o suporte." >&2
  exit 1
fi

echo "Extraindo em ./$DEST ..."
mkdir -p "$DEST"
# O tarball do GitHub vem com um diretório raiz tipo
# "soulimajr-win-os-<hash>/" — --strip-components=1 remove essa camada
# e joga o conteúdo real direto dentro de $DEST.
tar -xzf "$TMP_TAR" -C "$DEST" --strip-components=1

echo ""
echo "Win OS instalado em ./$DEST"
echo ""
echo "Próximo passo:"
echo "  1. Abra a pasta '$DEST' na sua IA (Claude Code, VS Code + Claude Code, etc.)."
echo "  2. Peça pra ela ler 'coordenador/papel.md' e começar a entrevista de instalação."
echo ""
