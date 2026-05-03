import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className,
  tone = "light",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 border-b border-line/70 pb-8 md:flex-row md:items-end md:justify-between",
        align === "center" && "mx-auto max-w-3xl text-center md:flex-col md:items-center",
        className,
      )}
    >
      <div className={cn("max-w-3xl space-y-4", align === "center" && "text-center")}>
        {eyebrow ? (
          <p className={cn("text-[11px] font-medium uppercase tracking-[0.32em]", tone === "dark" ? "text-white/48" : "text-muted")}>{eyebrow}</p>
        ) : null}
        <h2 className={cn("max-w-4xl font-display text-4xl leading-none sm:text-5xl lg:text-6xl", tone === "dark" ? "text-white" : "text-ink")}>{title}</h2>
        {description ? (
          <p className={cn("max-w-2xl text-base leading-7", tone === "dark" ? "text-white/68" : "text-muted")}>{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
