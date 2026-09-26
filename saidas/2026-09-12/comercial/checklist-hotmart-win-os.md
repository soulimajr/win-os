# Checklist — criar conta e produto Win OS na Hotmart

## Resumo do Win OS (pra você usar na descrição do produto)

**O que é**: Win OS é um sistema operacional de IA pra empresa — organiza negócio, financeiro, clientes, marketing, processos e propostas em pastas conectadas por IA. Roda local, no computador do próprio cliente, dentro do CLI de IA que ele já usa (de preferência Win OS/Claude).

**Pra quem serve** (as 3 jornadas):
1. **Iniciar** — quem está começando uma empresa do zero.
2. **Organizar** — quem já tem empresa, mas bagunçada.
3. **Digitalizar** — quem tem negócio físico/tradicional e quer virar digital.

**Posicionamento central**: ajudar as pessoas a aumentarem sua capacidade produtiva — e, por trás disso, aumentar o empreendedorismo.

**Preço**: **R$47**, pagamento único, vitalício — de propósito baixo ("preço de pizza") pra tirar a barreira de entrada de todo mundo. A monetização de verdade vem depois: comunidade, ensino, cultura, outros serviços — não do preço do produto em si.

**Como entrega**: não é curso em vídeo — é um sistema/template que se instala via comando no CLI de IA do cliente. Isso é diferente do formato usual de infoproduto (aula gravada), então na hora de cadastrar o produto na Hotmart, escolher o formato mais parecido com "software"/"e-book"/"arquivo pra download", não "curso online" tradicional.

## Passo a passo na Hotmart

### 1. Criar a conta
- Cadastro em [hotmart.com](https://app.hotmart.com) como **produtor**.
- Vai pedir dados da empresa/CPF-CNPJ pra recebimento — usar os dados reais da Creative (ou seus, se for pessoa física por enquanto).

### 2. Cadastrar o produto
- Painel → **Produtos** → **Adicionar produto**.
- **Nome**: Win OS
- **Categoria**: o mais próximo de "Software"/"Ferramentas" — se não tiver essa opção específica, usar "Empreendedorismo" ou "Educação > Negócios" (é o que mais combina com o posicionamento).
- **Tipo de produto**: produto digital / "arquivo" (não é "curso" tradicional — não vai ter aulas em vídeo dentro da Hotmart nesse primeiro momento).
- **Preço**: R$47,00
- **Tipo de cobrança**: **pagamento único** (não assinatura/recorrência) — confirmar essa opção especificamente, é fácil a Hotmart sugerir "assinatura" por padrão em alguns fluxos.
- **Descrição**: usar o resumo acima (o que é, as 3 jornadas, o posicionamento de produtividade/empreendedorismo).

### 3. Configurar o Hottok (token de segurança do webhook)
- Painel → **Ferramentas** → **Ver todas** → **Webhook (API e notificações)**.
- Lá a Hotmart gera um **Hottok** único da sua conta (ou por produto, dependendo do plano) — **copie esse valor**, vou precisar dele pra colar no `.env` do backend (`HOTMART_HOTTOK`), substituindo o valor de teste que está lá hoje.

### 4. Configurar o Webhook (⚠️ isso ainda NÃO dá pra fazer hoje)
- Mesmo lugar do passo 3 → **+ Cadastrar Webhook**.
- **Evento a monitorar**: `Compra aprovada` (PURCHASE_APPROVED).
- **URL de destino**: aqui é onde entra o endereço do nosso `win-os-backend` — **mas o backend ainda só roda localmente na minha máquina, não está publicado no VPS ainda** (isso é a Parte 7 da nossa sequência de construção). Deixa esse campo em aberto por enquanto; eu aviso assim que o backend estiver no ar com uma URL real pra você colar aqui.

### 5. Nota fiscal
- A Hotmart **não emite nota fiscal automaticamente** — isso é responsabilidade do produtor (você/Creative). Se quiser automatizar, dá pra usar um serviço tipo eNotas depois (não é bloqueante pra lançar).

### 6. Página de "obrigado" (thank-you page)
- Configurável no cadastro do produto — pra onde o cliente vai depois de pagar.
- Sugestão: por enquanto, apontar pra `app.creativeagenciamkt.com.br` (a landing) até termos o dashboard (`/conta`) no ar (Fase 2B da nossa sequência).

## O que eu preciso de você depois que criar

1. O **Hottok** (passo 3) — pra eu trocar no `.env` do backend.
2. Confirmar se ficou como **pagamento único**, não assinatura (a Hotmart às vezes empurra pra recorrência).
3. Quando o backend estiver publicado (Parte 7), eu te aviso a URL exata pra colar no passo 4.

## Não esquecer
- O modelo de negócio aqui é diferente de um curso — é a entrega de um **link/comando de instalação personalizado** gerado automaticamente pelo nosso backend quando o Hottok confirma a compra. A Hotmart cuida do pagamento e do "aviso de compra aprovada" pra gente; a entrega real do produto (o Win OS instalado) é o nosso backend que faz.
