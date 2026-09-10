# Creative IOE — Estrutura Organizacional com Claude Code

Uma estrutura de pastas e skills pra usar o [Claude Code](https://claude.com/claude-code) como uma equipe de agência/empresa: **CEO → Squad Coordenador → Gerentes de setor → Funcionários (skills)**.

Construída originalmente pela Creative Marketing (agência de marketing digital), mas todas as skills são **genéricas de nicho** — quem baixar escolhe o próprio segmento de negócio.

## Filosofia

Cada skill é tratada como um **manual de procedimento** a ser seguido à risca, não como uma sugestão. Nenhuma camada da hierarquia toma decisão final sozinha — tudo é organizado, sugerido e rascunhado pra revisão humana do CEO antes de qualquer ação real (publicar, enviar, cobrar, comprometer orçamento).

```
CEO (você)
└── Nexus — Squad Coordenador  [coordenador/papel.md]
    ├── Gerente Marketing      → skill: marketing-gerente
    ├── Gerente Comercial      → skill: comercial-gerente
    ├── Gerente Financeiro     → skill: financeiro-gerente
    └── Gerente Administração  → skill: administracao-gerente
```

Cada Gerente comanda **funcionários** (skills) do próprio setor — algumas são sub-orquestradoras de área (ex: Tráfego Pago, Social Media) que por sua vez comandam seus próprios funcionários. Veja a árvore completa em [`coordenador/organograma.md`](coordenador/organograma.md).

## Estrutura de pastas

```
/memoria          → negocio.md, tom-de-voz.md, foco-da-semana.md (lidos por tudo)
/identidade        → visual.md (identidade visual da marca)
/coordenador        → papel.md (Squad Coordenador) + organograma.md
/marketing          → contexto.md, gerente.md (ponteiro), referencia-skills.md
/comercial          → idem
/financeiro         → idem
/administracao      → idem
/saidas             → tudo que as skills geram, organizado por AAAA-MM-DD/<setor>/
/.claude/skills     → as skills de verdade (Gerentes, sub-orquestradoras, funcionários)
```

## Como usar

> Nunca usou GitHub ou não sabe por onde começar? Siga o [passo a passo de instalação](INSTALACAO.md) primeiro.

1. Clone este repositório (ou baixe como base pro seu próprio negócio).
2. Preencha `/memoria/negocio.md`, `/memoria/tom-de-voz.md` e `/identidade/visual.md` com as informações do seu negócio e nicho.
3. Preencha `/<setor>/contexto.md` de cada setor que for usar.
4. Abra o Claude Code nesta pasta e converse com o **Squad** (peça pra ler `coordenador/papel.md`) ou direto com um **Gerente** (ex: "lê o marketing/gerente.md e me ajuda com X").
5. Atualize `/memoria/foco-da-semana.md` toda semana com as prioridades por setor.

## Regras que valem pra toda a hierarquia

- Nenhum Gerente ou funcionário toma decisão financeira, comercial ou administrativa final — apenas organiza, sugere e rascunha.
- Nenhuma skill publica, envia mensagem real, cria campanha paga real, ou faz commit/push sem aprovação explícita do CEO a cada vez.
- Toda skill segue seu procedimento fixo — sem pular etapas nem reinterpretar o objetivo.

## Skills

43 skills no total, organizadas em `.claude/skills/`. Veja `referencia-skills.md` em cada pasta de setor pra lista completa com descrição.

| Setor | Skills |
|---|---|
| Marketing | 26 (Tráfego Pago, Social Media, Site & Google Meu Negócio, Vídeo/Criativos) |
| Comercial | 7 (Jornada do Cliente: prospecção → qualificação → proposta → onboarding → retenção) |
| Financeiro | 5 (fluxo de caixa, precificação, relatório, cobrança) |
| Administração | 5 (documentos, processos, comunicação interna, logística de eventos) |
