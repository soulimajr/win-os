# Organograma — Creative Marketing

> Consolidado em 2026-09-05. Reflete a estrutura real de skills já construída. Atualizar sempre que uma skill nova for criada ou um setor mudar.

```
CEO (Lima Junior)
│
└── SQUAD COORDENADOR  [coordenador/papel.md]
    │  (direciona o pedido do CEO pro Gerente certo quando o setor não é indicado)
    │
    ├── GERENTE MARKETING  → skill: marketing-gerente
    │   │
    │   ├── Tráfego Pago (ADS)  → skill: marketing-trafego-pago
    │   │   ├── marketing-trafego-pago-estrutura-campanha
    │   │   ├── marketing-trafego-pago-copy-anuncio
    │   │   ├── marketing-trafego-pago-otimizacao
    │   │   └── marketing-trafego-pago-relatorio
    │   │
    │   ├── Social Media  → skill: marketing-social-media
    │   │   ├── marketing-social-media-pesquisa-conteudo
    │   │   ├── marketing-social-media-pauta
    │   │   ├── marketing-social-media-design
    │   │   ├── marketing-social-media-legenda
    │   │   └── marketing-social-media-gmn-post
    │   │
    │   ├── Site & Google Meu Negócio  → skill: marketing-site-gmn
    │   │   ├── marketing-site-gmn-criacao-site
    │   │   ├── marketing-site-gmn-frontend
    │   │   ├── marketing-site-gmn-manutencao-site
    │   │   ├── marketing-site-gmn-perfil-gmn
    │   │   └── marketing-site-gmn-otimizacao-gmn
    │   │
    │   └── Vídeo/Filmmaker & Criação de Criativos  → skill: marketing-video-criativos
    │       ├── marketing-video-criativos-briefing
    │       ├── marketing-video-criativos-video
    │       ├── marketing-video-criativos-imagem
    │       └── marketing-video-criativos-adaptacao-trafego
    │
    ├── GERENTE COMERCIAL  → skill: comercial-gerente
    │   │
    │   └── Jornada do Cliente  → skill: comercial-jornada-cliente
    │       ├── comercial-jornada-cliente-prospeccao
    │       ├── comercial-jornada-cliente-qualificacao
    │       ├── comercial-jornada-cliente-proposta
    │       ├── comercial-jornada-cliente-onboarding
    │       └── comercial-jornada-cliente-retencao
    │
    ├── GERENTE FINANCEIRO  → skill: financeiro-gerente
    │   ├── financeiro-fluxo-caixa
    │   ├── financeiro-precificacao
    │   ├── financeiro-relatorio
    │   └── financeiro-cobranca
    │
    └── GERENTE ADMINISTRAÇÃO  → skill: administracao-gerente
        ├── administracao-documentos
        ├── administracao-processos
        ├── administracao-comunicacao-interna
        └── administracao-logistica-eventos
```

## Contagem
| Setor | Gerente | Áreas (sub-orquestradoras) | Funcionários (folha) | Total |
|---|---|---|---|---|
| Marketing | 1 | 4 | 21 | 26 |
| Comercial | 1 | 1 | 5 | 7 |
| Financeiro | 1 | 0 | 4 | 5 |
| Administração | 1 | 0 | 4 | 5 |
| **Geral** | **4** | **5** | **34** | **43** |

## Como funciona na prática
1. O CEO pede algo ao Squad (ou já sabe o setor e pede direto pro Gerente).
2. O Squad lê `/memoria/negocio.md` e `/memoria/foco-da-semana.md`, decide o setor, e aciona a skill `<setor>-gerente`.
3. O Gerente lê o `contexto.md` do setor e decide qual funcionário (ou sub-orquestradora de área) aciona.
4. Sub-orquestradoras de área (Tráfego Pago, Social Media, Site & GMN, Vídeo/Criativos, Jornada do Cliente) fazem a mesma coisa num nível abaixo, decidindo entre seus próprios funcionários.
5. O funcionário executa o procedimento fixo da skill, sempre pedindo aprovação do CEO antes de qualquer ação irreversível (publicar, enviar, cobrar, comprometer orçamento).
6. Tudo que é gerado vai para `/saidas/AAAA-MM-DD/<setor>/`.

## Nicho
Todas as skills são **genéricas de nicho** — o negócio real da Creative hoje é focado em imóveis (`/memoria/negocio.md`), mas as skills tratam o nicho do cliente como uma variável (confirmada em `/<setor>/contexto.md` ou perguntada ao CEO), pensando na publicação futura no GitHub pra qualquer pessoa montar sua própria empresa em cima dessa estrutura.
