import Button from "@/components/ui/Button";

export default function Footer() {
  return (
    <footer className="px-6 pt-24 pb-32 text-center sm:py-32">
      <div className="mx-auto max-w-xl">
        <span className="sys-kicker justify-center">/ encerramento.sys</span>
        <h2 className="mt-4 font-display text-2xl font-medium tracking-tight sm:text-3xl">
          Pronto para organizar sua empresa com IA?
        </h2>
        <div className="mt-8">
          <Button
            href="https://www.asaas.com/c/r9h97zyqehrnk5s0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero acessar o Win OS por R$47
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-3xl border-t border-border pt-8 font-mono text-xs text-muted">
        <p>Win OS — Sistema Operacional de IA para Negócios Reais</p>
        <p className="mt-1">
          Desenvolvido por Creative Agência e Tecnologia
        </p>
        <p className="mt-4 text-muted/70">
          © {new Date().getFullYear()} Win OS · Creative Marketing. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
