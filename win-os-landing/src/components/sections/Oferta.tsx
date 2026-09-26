import Button from "@/components/ui/Button";

const incluso = [
  { title: "Estrutura Completa de Diretórios Win OS", value: "R$ 297" },
  { title: "60+ Skills Corporativas e Prompts Prontos", value: "R$ 497" },
  { title: "Framework de 4 Gerentes Executivos", value: "R$ 297" },
  { title: "Acesso Vitalício + Atualizações", value: "R$ 197" },
];

export default function Oferta() {
  return (
    <section id="oferta" className="border-b border-border px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-lg">
        <div className="relative overflow-hidden rounded-3xl border border-brass/25 bg-surface p-10 text-center shadow-[0_0_0_1px_rgba(201,162,75,0.08),0_40px_90px_-40px_rgba(201,162,75,0.35)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/60 to-transparent" />

          <span className="sys-kicker justify-center">acesso.sys</span>

          <div className="mt-6 flex flex-col items-center justify-center">
            <span className="text-sm font-medium text-muted/70 line-through">
              Contratar uma diretoria: R$ 25.000/mês
            </span>
            <span className="text-sm font-medium text-muted/70 line-through mt-1">
              Pagar 12 ferramentas soltas: R$ 1.500/mês
            </span>
            <p className="mt-4 font-display text-5xl font-medium tracking-tight text-brass">
              R$ 47
            </p>
          </div>
          <p className="mt-3 text-sm text-muted">
            Pagamento único. Acesso vitalício. O sistema completo.
          </p>

          <div className="mt-10">
            <p className="mb-4 text-left font-mono text-xs uppercase tracking-wider text-muted">O que você leva hoje:</p>
            <ul className="space-y-3 text-left text-sm">
              {incluso.map((item) => (
                <li key={item.title} className="flex items-center justify-between border-b border-border/50 pb-2">
                  <div className="flex items-start gap-2.5">
                    <span aria-hidden="true" className="text-brass">✓</span>
                    <span className="text-foreground">{item.title}</span>
                  </div>
                  <span className="font-mono text-xs text-muted/60 line-through whitespace-nowrap ml-4">{item.value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between border-b border-border pb-2">
              <span className="font-medium text-foreground">Valor Total do Sistema:</span>
              <span className="font-mono text-sm text-muted/60 line-through">R$ 1.288</span>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="font-medium text-brass">Hoje você paga apenas:</span>
              <span className="font-display text-xl font-bold text-brass">R$ 47</span>
            </div>
          </div>

          <div className="mt-8">
            <Button
              href="https://pay.kiwify.com.br/lYkLOmo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              Quero acessar o Win OS por R$47
            </Button>
          </div>

          <p className="mt-4 text-xs text-muted">
            Pagamento seguro via Pix ou Cartão. Acesso imediato ao sistema.
          </p>

          <div className="mt-8 rounded-2xl border border-border/80 bg-background/50 p-4 text-left">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brass/15 text-sm text-brass">
                🛡️
              </span>
              <span className="font-display text-sm font-medium text-foreground">
                Garantia Incondicional de 7 Dias
              </span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              Experimente o Win OS por 7 dias. Se por qualquer motivo achar que não valeu a pena, basta pedir o reembolso e devolvemos 100% do seu dinheiro, sem perguntas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
