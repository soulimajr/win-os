# Como instalar — passo a passo

Guia para quem recebeu o link do repositório no GitHub e quer instalar essa estrutura na própria máquina, pra usar com o Claude Code (ou a IA de sua preferência).

Não precisa saber programar. São só 4 passos: **copiar o link → baixar os arquivos → abrir no VS Code → abrir o Claude Code**.

---

## Passo 1 — Copiar o link do repositório

1. Abra a página do repositório no GitHub (o link que te passaram).
2. Clique no botão verde **"Code"** (perto do topo da página, do lado direito).
3. Copie o link que aparece em **HTTPS** — algo como:
   `https://github.com/<usuario>/<nome-do-repositorio>.git`

Guarde esse link. Você vai usar ele no próximo passo.

## Passo 2 — Baixar os arquivos

Tem dois jeitos. Escolha o que for mais fácil pra você:

### Opção A — Sem instalar nada (mais simples)
1. Na mesma página do botão "Code", clique em **"Download ZIP"**.
2. Extraia (descompacte) o arquivo `.zip` baixado numa pasta do seu computador.
3. Pronto — essa pasta extraída é o seu projeto.

### Opção B — Com Git instalado (recomendado se for atualizar depois)
1. Abra o terminal (ou o Git Bash, no Windows).
2. Rode o comando abaixo, colando o link que você copiou no Passo 1:
   ```
   git clone https://github.com/<usuario>/<nome-do-repositorio>.git
   ```
3. Isso cria uma pasta com o projeto completo. Com Git, fica fácil buscar atualizações depois (`git pull`).

## Passo 3 — Abrir a pasta no VS Code

1. Abra o **VS Code** ([código aqui](https://code.visualstudio.com/), se ainda não tiver instalado).
2. Vá em **File → Open Folder...** e selecione a pasta que você baixou/clonou no Passo 2.
3. O VS Code vai mostrar toda a estrutura de pastas (`memoria/`, `coordenador/`, `marketing/`, etc.) no painel lateral.

## Passo 4 — Abrir o Claude Code e começar a usar

1. Se ainda não tiver, instale a extensão **Claude Code** no VS Code (ou o Claude Code no terminal — veja [claude.com/claude-code](https://claude.com/claude-code)).
2. Com a pasta do projeto aberta, abra o Claude Code dentro dela.
3. Peça pra ele ler o `coordenador/papel.md` (o Squad Coordenador, "Nexus") — a partir daí ele já entende toda a estrutura.

## Passo 5 — Fazer a entrevista do seu negócio

Este repositório vem **zerado de propósito** — sem dado nenhum de negócio real, só templates em branco. Isso é o ponto de partida pra você montar a sua própria empresa em cima da estrutura.

1. Pra cada arquivo `.example.md` abaixo, copie ele removendo o `.example` do nome (ex: `memoria/negocio.example.md` → `memoria/negocio.md`):
   - `memoria/negocio.example.md`
   - `memoria/tom-de-voz.example.md`
   - `memoria/foco-da-semana.example.md`
   - `identidade/visual.example.md`
   - `marketing/contexto.example.md`
   - `comercial/contexto.example.md`
   - `financeiro/contexto.example.md`
   - `administracao/contexto.example.md`
2. Peça pro Claude Code (ou Nexus, o Squad Coordenador) fazer a entrevista com você e preencher esses arquivos copiados com as respostas do seu negócio — ou preencha você mesmo direto, se preferir.
3. Esses arquivos com seus dados reais ficam só no seu computador (já estão no `.gitignore`) — não vão pro GitHub, mesmo que você faça push depois.

> **Quer usar outra IA em vez do Claude Code?** A estrutura é só arquivos de texto (`.md`) e skills em `.claude/skills/` — dá pra abrir a mesma pasta em qualquer outra ferramenta de IA que leia arquivos do projeto. O passo a passo de preenchimento (Passo 5 acima) é o mesmo, só muda a ferramenta.

---

Dúvidas ou travou em algum passo? É só perguntar direto pro Claude Code com a pasta aberta, explicando em que passo parou.
