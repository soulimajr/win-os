import Button from "@/components/ui/Button";

export default function Comunidade() {
  return (
    <section className="border-b border-border px-6 py-24 text-center sm:py-32">
      <div className="mx-auto max-w-2xl">
        <span className="sys-kicker justify-center">/ comunidade.sys</span>

        <p className="mt-6 font-display text-4xl font-medium tracking-tight text-brass sm:text-6xl">
          Ecossistema Win OS
        </p>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-muted">
          Acesso incluso na sua licença vitalícia
        </p>

        <h2 className="mt-10 font-display text-2xl font-medium tracking-tight sm:text-3xl">
          Junte-se a empresários e agências que operam com IA
        </h2>
        <p className="mt-4 text-muted">
          Troque prompts, receba novas skills operacionais, tire dúvidas e acompanhe atualizações contínuas do sistema direto com os criadores.
        </p>

        <div className="mt-8">
          <Button href="#oferta" variant="secondary">
            Garantir meu acesso com comunidade
          </Button>
        </div>
      </div>
    </section>
  );
}
