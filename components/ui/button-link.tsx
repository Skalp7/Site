import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300",
        variant === "primary" &&
          "border-accent/20 bg-accent text-white shadow-glow hover:-translate-y-0.5 hover:bg-[#7d5a3d]",
        variant === "secondary" &&
          "border-line bg-white/70 text-ink hover:-translate-y-0.5 hover:border-accent/30 hover:bg-white",
        variant === "ghost" &&
          "border-white/12 bg-white/6 text-white hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10",
        className,
      )}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
