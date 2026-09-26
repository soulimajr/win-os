const folders = [
  { name: "negócio", files: ["contexto-do-negocio.md", "objetivos.md"] },
  { name: "financeiro", files: ["fluxo-de-caixa.md", "precificacao.md"] },
  { name: "clientes", files: ["base-de-clientes.md", "jornada.md"] },
  { name: "marketing", files: ["calendario.md", "campanhas.md"] },
  { name: "processos", files: ["rotinas.md", "checklists.md"] },
  { name: "propostas", files: ["modelo-proposta.md", "propostas-enviadas.md"] },
];

export default function ProductDemo() {
  return (
    <section className="border-b border-border px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="sys-kicker justify-center">/ negocio.sys</span>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Sua empresa, pronta para a sua IA analisar e executar
          </h2>
          <p className="mt-4 text-muted">
            Cada área do seu negócio vira uma pasta organizada com o contexto perfeito. Basta plugar no seu ChatGPT ou Claude para ter análises precisas.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-2 border-b border-border bg-surface-raised px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-brass/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-3 font-mono text-[11px] tracking-wide text-muted">
              win-os — minha-empresa
            </span>
          </div>

          <div className="flex flex-col sm:flex-row">
            <aside className="w-full border-b border-border p-4 text-sm sm:w-64 sm:border-b-0 sm:border-r">
              <p className="mb-3 px-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                minha-empresa
              </p>
              <ul className="space-y-1">
                {folders.map((folder) => (
                  <li key={folder.name}>
                    <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-foreground/90">
                      <span aria-hidden="true" className="text-brass">
                        ▸
                      </span>
                      <span>{folder.name}</span>
                    </div>
                    <ul className="ml-5 space-y-1 border-l border-border pl-3">
                      {folder.files.map((file) => (
                        <li
                          key={file}
                          className="truncate py-0.5 font-mono text-[11px] text-muted"
                        >
                          {file}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </aside>

            <div className="flex-1 p-6 font-mono text-sm text-muted">
              <p className="text-brass"># contexto-do-negocio.md</p>
              <p className="mt-3 leading-relaxed">
                A IA lê o contexto de cada pasta e cruza as informações — ex.:
                financeiro + clientes — para sugerir a próxima ação da sua
                empresa.
              </p>
              <p className="mt-6 text-brass">→ sugestão da IA</p>
              <p className="mt-1 leading-relaxed">
                &quot;Seu fluxo de caixa cai em 12 dias. Aqui estão 3 clientes
                inativos para reativar antes disso.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
