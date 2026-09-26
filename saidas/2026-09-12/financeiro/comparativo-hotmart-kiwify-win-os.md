# Comparativo Hotmart vs Kiwify — plataforma de venda do Win OS

**Pedido:** CEO solicitou pesquisa pra decidir qual plataforma usar na venda do Win OS (produto digital, pagamento único vitalício), considerando taxas, webhook de confirmação de pagamento, nota fiscal e reputação.

**Setor responsável:** Financeiro (precificação/aquisição de plataforma de venda).

## 1. Taxas (levantado em 01/09/2026, conferir na data da decisão — taxas mudam)

| | Kiwify | Hotmart |
|---|---|---|
| Taxa de tabela | 8,99% + R$ 2,49/venda | 9,9% + R$ 1,00/venda (**sobe pra R$ 2,49 a partir de 21/09/2026**) |
| Efetiva em ticket baixo (ex. R$ 27) | ~18,21% | ~13,60% |
| Efetiva em ticket alto (ex. R$ 997) | ~9,24% | ~10,00% |
| Custo anual estimado (R$5.000/mês de faturamento) | ~R$ 5.394/ano | ~R$ 5.940/ano |

**Leitura pro Win OS:** o preço do Win OS ainda está "Em breve" na landing (não definido). Isso importa porque a relação entre as duas se inverte conforme o ticket:
- Se o preço final ficar **baixo/médio** (produto de entrada, tipo até R$200–300): **Hotmart tende a sair mais barata** (taxa fixa menor até 20/09; depois de 21/09 as fixas empatam em R$2,49, e aí a Kiwify passa a ganhar por ter % menor).
- Se o preço final ficar **alto** (produto premium, ticket alto tipo R$997+): **Kiwify tende a ganhar**, por ter percentual menor que compensa a taxa fixa.

## 2. Webhook de confirmação de pagamento (crítico pro fluxo de instalação do Win OS)

Ambas suportam webhook nativo, formato JSON, configurável direto no painel:
- **Kiwify**: painel → Apps → Webhooks → "Criar Webhook", escolhe produto e eventos. Também tem API própria com API Key gerada no painel (Apps → API), documentação em `docs.kiwify.com.br`.
- **Hotmart**: painel → Ferramentas → Ver todas → Webhook (API e notificações) → "Cadastrar Webhook", escolhe eventos (venda aprovada, reembolso, assinatura cancelada etc.) e a URL de destino. Documentação completa em `developers.hotmart.com`.

**Leitura pro Win OS:** as duas atendem o requisito técnico (disparar o backend da Creative na confirmação de pagamento pra gerar o token/link de instalação). Não há diferença de peso aqui — é implementação equivalente nas duas.

## 3. Nota fiscal

**Nenhuma das duas emite nota fiscal automaticamente** — em ambas, a responsabilidade de emitir é do produtor (Creative), não da plataforma. Isso vale igual pras duas, não é critério de desempate.
- Existem serviços de terceiros (ex. eNotas, Spedy) que se integram a qualquer uma das duas pra automatizar a emissão — então isso é uma peça extra a montar de qualquer forma, independente da escolha.

## 4. Reputação/confiabilidade

Ambas têm presença forte e consolidada no mercado brasileiro de produtos digitais, com reputação alta no Reclame Aqui (~9,1, categoria RA1000, resposta a ~98% das reclamações). Reclamações mais comuns em ambas são sobre nota fiscal (ver item 3, responsabilidade do produtor) — não é um problema estrutural de uma em relação à outra.

## 5. Estrutura de plataforma (checkout, área de membros pra aulas/arquivos, dashboard, estabilidade)

| | Kiwify | Hotmart |
|---|---|---|
| Checkout | Reconhecido como o mais rápido/otimizado do mercado BR — menos etapas, mais conversão | Mais completo mas com mais etapas; marca Hotmart aparece no checkout |
| Área de membros (aulas/arquivos) | Própria, moderna, responsiva — mas **menos recursos de gamificação/comunidade** | **Sparkle** — área nativa com apps mobile próprios, gamificação e comunidade embutida |
| Dashboard do produtor | Painel limpo, criação de produto em poucos cliques, curva de aprendizado baixa | Mais recursos, mas curva de aprendizado maior |
| Estabilidade em lançamentos grandes | Reclamações de instabilidade existem, mas menos frequentes | Maior histórico de resiliência em lançamentos grandes no Brasil, embora também tenha reclamações de instabilidade pontual |
| Branding | Canal mais "próprio" do produtor | Aluno acessa via app oficial Hotmart; branding do produtor mais limitado |
| Reclamação mais comum | Demora pra cancelar conta/assinatura (>17 dias de resposta) | Conta bloqueada com saldo retido (cláusula genérica) |

**Leitura pro Win OS especificamente**: como o roadmap do Win OS já prevê **comunidade, ensino (aulas), troca de ideias e cultura** como a monetização real de longo prazo (não o produto em si) — a **área de membros com gamificação e comunidade nativa da Hotmart (Sparkle)** é estruturalmente mais alinhada com esse plano do que a área mais simples da Kiwify. Se o objetivo é usar a própria plataforma pra hospedar aulas + arquivos + criar senso de comunidade, a Hotmart tem vantagem estrutural aqui — mesmo custando um pouco mais em taxa a partir de 21/09/2026.

## 6. Outras plataformas consideradas (2026-09-12): Kirvano, Hubla, Eduzz

| | Taxa | Área de membros / comunidade | Observações |
|---|---|---|---|
| **Kirvano** | Competitiva (citada como "bem melhor" por usuários) | Webhook simples de configurar | **Vários relatos no Reclame Aqui**: bugs de webhook (data de próxima cobrança errada), área de membros ficando inacessível por longos períodos, suporte muito lento (>2 meses sem resposta) — risco operacional real pra um produto que depende de acesso confiável. |
| **Hubla** | 8,9% + R$2,49 (parecida com Kiwify); +R$0,99 se usar grupo de WhatsApp/Telegram | **Especializada em monetizar comunidade** — cria grupos de WhatsApp/Telegram nativos vinculados ao produto, pensada pra "criadores que vivem de comunidade" | É a única das cinco **construída em cima do conceito de comunidade paga**, não só curso/produto — encaixe direto com o plano do Win OS de monetizar via comunidade/ensino/cultura depois. |
| **Eduzz** | 4,90% + R$1 (mais barata de todas) | Área de membros considerada fraca por usuários ("pessima" segundo relato) | Taxa mais baixa do mercado, mas não é adequada se aulas/arquivos/comunidade são prioridade — a economia de taxa não compensa a experiência pior de entrega de conteúdo. |

**Leitura**: Kirvano tem risco operacional demais pra recomendar (webhook com bug documentado + área de membros instável é inaceitável pra um produto cujo próprio mecanismo de instalação depende do webhook funcionar direito). Eduzz é a mais barata, mas com a pior área de membros do grupo — não serve o objetivo de aulas/comunidade. **Hubla é a novidade real**: taxa parecida com Kiwify/Hotmart, mas construída especificamente pra monetizar comunidade (grupos pagos) — o que é literalmente o plano de longo prazo do Win OS.

## Recomendação

**Atualização 2026-09-12** — preço definido pelo CEO: **R$47** ("preço de pizza", ver `precificacao-win-os.md`). Nesse ticket, a taxa isolada pende pra Hotmart antes de 21/09/2026 e pra Kiwify depois — mas a diferença é de ~R$1 por venda, marginal.

**O critério que decide de fato é a estrutura de plataforma (item 5 acima), não a taxa.** Como o Win OS pretende monetizar via comunidade/aulas/cultura (não pelo preço do produto), a área de membros com gamificação e comunidade nativa da **Hotmart (Sparkle)** é mais alinhada com esse plano de longo prazo do que a Kiwify.

**Atualização com Kirvano/Hubla/Eduzz (item 6):** entre as 5 plataformas pesquisadas, **Kirvano fica eliminada** (risco operacional documentado: bugs de webhook, área de membros instável, suporte lentíssimo — inaceitável pra um fluxo que depende do webhook funcionar pra liberar a instalação). **Eduzz** é a mais barata mas com a pior área de membros — não serve o plano de aulas/comunidade.

Fica entre **Hotmart** e **Hubla**:
- **Hotmart** — área de membros robusta (Sparkle: gamificação, apps mobile, comunidade), maior histórico de estabilidade em lançamentos grandes no Brasil.
- **Hubla** — construída especificamente pra **monetizar comunidade paga** (grupos de WhatsApp/Telegram nativos), taxa parecida com Kiwify (8,9%+R$2,49, +R$0,99 se usar grupo).

**Recomendação final: Hotmart pro lançamento inicial do produto (R$47), com Hubla como forte candidata pra quando a fase de comunidade/ensino entrar** (que é onde o CEO disse que está a monetização real). Não precisa ser a mesma plataforma pra sempre — o produto (R$47, via Hotmart) e a comunidade paga futura (via Hubla, se fizer sentido) podem ser coisas distintas, inclusive.

**Decisão final de preço e de plataforma continua com o CEO** — este documento é recomendação, não decisão.

## Fontes
- [Kiwify ou Hotmart: comparativo de taxas 2026 — Greenn](https://greenn.com.br/comparativos/kiwify-vs-hotmart/)
- [Hotmart ou Kiwify? O Guia Definitivo para Escolher em 2026 — Negócios Rápido](https://negociosrapido.com.br/hotmart-ou-kiwify/)
- [Hotmart vs Kiwify (2026) — LearnBase](https://uselearnbase.com/pt/compare/hotmart-vs-kiwify)
- [Como funcionam os webhooks? — Ajuda Kiwify](https://ajuda.kiwify.com.br/pt-br/article/como-funcionam-os-webhooks-2ydtgl/)
- [Como funciona a API da Kiwify? — Ajuda Kiwify](https://ajuda.kiwify.com.br/pt-br/article/como-funciona-a-api-da-kiwify-1iosjhu/)
- [Usando Webhooks — Hotmart Developers](https://developers.hotmart.com/docs/pt-BR/1.0.0/webhook/using-webhook/)
- [Como configurar a API do meu produto usando o Webhook (Postback) — Central de Ajuda Hotmart](https://help.hotmart.com/pt-br/article/360001491352/como-configurar-a-api-do-meu-produto-usando-o-webhook-postback-)
- [eNotas: Emissão Automática de NFS-e e NF-e para Hotmart, Kiwify e Outros Canais](https://enotass.com.br/)
- [Emissão de nota fiscal — Hotmart, Reclame Aqui](https://www.reclameaqui.com.br/hotmart/emissao-de-nota-fiscal_LqMclwHcwmBzLI3-/)
