import Image from "next/image";
import Button from "@/components/ui/Button";
import DotNetworkBackground from "@/components/ui/DotNetworkBackground";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <DotNetworkBackground />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center sm:py-40">
        <Image
          src="/logo-w.png"
          alt="Win OS"
          width={96}
          height={96}
          className="mb-8 rounded-full shadow-[0_0_50px_rgba(201,162,75,0.35)] ring-1 ring-brass/30 object-contain"
          priority
        />

        <span className="sys-kicker mb-8">
          A Estrutura Definitiva // Sua Empresa
        </span>

        <h1 className="font-display text-5xl font-medium leading-[1.08] tracking-tight sm:text-7xl">
          Sua empresa pronta para
          <br />
          <span className="text-brass">a sua IA favorita trabalhar.</span>
        </h1>

        <p className="mt-8 max-w-xl text-balance text-lg text-muted sm:text-xl">
          O Win OS não é mais uma IA solta. É a estrutura de pastas, processos e dezenas de skills prontas para você conectar no ChatGPT, Claude ou Gemini e ter uma diretoria completa trabalhando pelo seu negócio.
        </p>

        <div className="mt-12">
          <Button href="#oferta">Quero organizar minha empresa</Button>
        </div>

        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted/70">
          A nova evolução do empreendedorismo, para negócios reais
        </p>
      </div>
    </section>
  );
}
