const jornadas = [
  {
    modulo: "MODULO.01",
    icon: "🚀",
    titulo: "Iniciar",
    frase: "Comece sua empresa do zero, com estrutura pronta desde o primeiro dia.",
  },
  {
    modulo: "MODULO.02",
    icon: "🗂️",
    titulo: "Organizar",
    frase: "Coloque ordem no que já existe: finanças, clientes e processos num só lugar.",
  },
  {
    modulo: "MODULO.03",
    icon: "💻",
    titulo: "Digitalizar",
    frase: "Transforme um negócio físico ou tradicional em uma operação digital.",
  },
];

export default function Jornadas() {
  return (
    <section className="border-b border-border px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="sys-kicker justify-center">/ jornadas.sys</span>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Qual é a sua jornada?
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {jornadas.map((j) => (
            <div
              key={j.titulo}
              className="group rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-brass/40"
            >
              <div className="flex items-center justify-between">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-brass/30 bg-brass-soft text-lg"
                >
                  {j.icon}
                </span>
                <span className="font-mono text-[11px] tracking-widest text-muted">
                  {j.modulo}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-medium">
                {j.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {j.frase}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
