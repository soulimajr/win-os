const casos = [
  {
    titulo: "Agências & Produtores de Conteúdo",
    cenario: "Centralização de skills de marketing, criativos, tráfego e copy.",
    impacto: "O que levava dias de planejamento de campanhas e briefings agora é estruturado em minutos com as orientações do Squad.",
    setor: "Marketing & Criação",
  },
  {
    titulo: "Prestadores de Serviços & Consultores",
    cenario: "Geração ágil de propostas e qualificação de clientes.",
    impacto: "Propostas personalizadas criadas com o contexto real da empresa, acelerando o tempo de resposta e fechamento comercial.",
    setor: "Comercial & Vendas",
  },
  {
    titulo: "Pequenas Empresas & Negócios Locais",
    cenario: "Organização do fluxo de caixa e padronização de processos.",
    impacto: "Visão clara das finanças, rotinas de cobrança estruturadas e documentação do negócio sem burocracia ou planilhas perdidas.",
    setor: "Financeiro & Operações",
  },
  {
    titulo: "Autônomos & Novos Empreendedores",
    cenario: "Jornada do zero para organizar e acelerar o negócio.",
    impacto: "Suporte diário de gerentes de inteligência para tomar decisões estratégicas com segurança e foco no que gera receita.",
    setor: "Gestão & Estratégia",
  },
];

export default function ProvaSocial() {
  return (
    <section className="border-b border-border px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="sys-kicker justify-center">/ aplicacao.sys</span>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Como o Win OS opera na prática
          </h2>
          <p className="mt-4 text-sm text-muted">
            Soluções estruturadas para resolver os principais gargalos de quem precisa produzir mais com menos tempo.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {casos.map((caso) => (
            <div
              key={caso.titulo}
              className="flex flex-col justify-between rounded-2xl border border-border/70 bg-surface/60 p-6 transition-all hover:border-brass/40"
            >
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-brass">
                  {caso.setor}
                </span>
                <h3 className="mt-2 font-display text-lg font-medium text-foreground">
                  {caso.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {caso.impacto}
                </p>
              </div>
              <div className="mt-5 border-t border-border/50 pt-3">
                <p className="font-mono text-[11px] text-muted/80">
                  🎯 Foco: {caso.cenario}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
