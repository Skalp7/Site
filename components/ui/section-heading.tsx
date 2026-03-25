import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className,
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
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted">{eyebrow}</p>
        ) : null}
        <h2 className="max-w-4xl font-display text-4xl leading-none text-ink sm:text-5xl lg:text-6xl">{title}</h2>
        {description ? <p className="max-w-2xl text-base leading-7 text-muted">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
