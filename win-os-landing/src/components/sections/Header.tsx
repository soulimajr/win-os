import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-w.png"
            alt="Win OS"
            width={32}
            height={32}
            className="rounded-lg object-contain shadow-[0_0_15px_rgba(201,162,75,0.3)]"
          />
          <span className="font-display text-lg tracking-tight">Win OS</span>
        </div>
        <Button href="#oferta" className="px-5 py-2.5 text-xs sm:text-sm">
          Acessar o sistema
        </Button>
      </div>
    </header>
  );
}
