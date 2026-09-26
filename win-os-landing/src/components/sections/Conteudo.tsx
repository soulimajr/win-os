import Image from "next/image";

const grupos = [
  {
    jornada: "Marketing & Vendas",
    image: "/visual-1.jpg",
    modulos: [
      "Calendário de conteúdo e campanhas",
      "Funil de vendas e scripts de abordagem",
      "Propostas comerciais persuasivas",
      "Análise de mercado e posicionamento",
    ],
  },
  {
    jornada: "Financeiro & Controle",
    image: "/visual-2.jpg",
    modulos: [
      "Fluxo de caixa inteligente",
      "Precificação de produtos e serviços",
      "Projeção de lucros e metas",
      "Cobrança e recuperação de clientes",
    ],
  },
  {
    jornada: "Governança & Processos",
    image: "/visual-3.jpg",
    modulos: [
      "Rotinas diárias e checklists operacionais",
      "Padronização de entregas",
      "Gestão da jornada e suporte do cliente",
      "Onboarding de novos colaboradores",
    ],
  },
  {
    jornada: "Gestão Estratégica",
    image: "/folder-structure.jpg",
    modulos: [
      "Diagnóstico e contexto do negócio",
      "Definição de OKRs e métricas principais",
      "Estratégia de crescimento sustentável",
      "Reuniões de alinhamento com a IA",
    ],
  },
];

function numerarGrupos() {
  let contador = 0;
  return grupos.map((grupo) => ({
    ...grupo,
    modulos: grupo.modulos.map((modulo) => {
      contador += 1;
      return { texto: modulo, indice: contador };
    }),
  }));
}

const gruposComIndice = numerarGrupos();

export default function Conteudo() {
  return (
    <section className="border-b border-border px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="sys-kicker justify-center">/ skills.sys</span>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            4 Gerentes Executivos.<br/> 60+ Skills Corporativas.
          </h2>
          <p className="mt-4 text-muted">
            Sua IA assume o papel de líderes experientes, prontos para executar tarefas de alto nível nas 4 áreas vitais do seu negócio.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:gap-16">
          {gruposComIndice.map((grupo) => (
            <div key={grupo.jornada} className="flex flex-col">
              <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-2xl border border-border/50 bg-surface">
                <Image
                  src={grupo.image}
                  alt={grupo.jornada}
                  fill
                  className="object-cover opacity-80 mix-blend-screen transition-opacity hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <h3 className="absolute bottom-4 left-4 font-mono text-xs uppercase tracking-[0.16em] text-brass">
                  {grupo.jornada}
                </h3>
              </div>
              <ol className="space-y-4 px-2">
                {grupo.modulos.map((modulo) => (
                  <li key={modulo.texto} className="flex gap-3 text-sm">
                    <span className="font-mono text-muted">
                      {String(modulo.indice).padStart(2, "0")}
                    </span>
                    <span className="text-foreground/90">{modulo.texto}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
