import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
  rel?: string;
};

export default function Button({
  href = "#oferta",
  children,
  variant = "primary",
  className = "",
  target,
  rel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm sm:text-base font-semibold tracking-tight transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0";

  const styles =
    variant === "primary"
      ? "bg-brass text-background shadow-[0_0_0_1px_rgba(201,162,75,0.4),0_18px_40px_-12px_rgba(201,162,75,0.45)] hover:shadow-[0_0_0_1px_rgba(201,162,75,0.6),0_22px_48px_-10px_rgba(201,162,75,0.6)]"
      : "bg-transparent text-foreground border border-border hover:border-brass/60 hover:text-brass";

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
