import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { GradientVisual } from "@/components/ui/gradient-visual";
import { cn } from "@/lib/utils";
import { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  variant?: "featured" | "compact" | "tailored";
};

export function ProjectCard({ project, variant = "featured" }: ProjectCardProps) {
  const isCompact = variant !== "featured";
  const isTailored = variant === "tailored";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group relative grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#121722] text-white shadow-[0_28px_90px_rgba(12,17,25,0.28)] transition-all duration-500 hover:-translate-y-2 hover:border-[#c08c61]/35 hover:shadow-[0_30px_110px_rgba(159,108,66,0.22)]",
        isCompact ? "gap-4 p-4" : "gap-5 p-4 sm:p-5",
        isTailored && "border-[#8fa4d5]/20 bg-[#101827]",
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_34%)]" />
      <GradientVisual
        tone={project.tone}
        interactive
        className={cn("rounded-[1.5rem]", isCompact ? "aspect-[16/10]" : "aspect-[16/11]")}
      />

      <div className="relative grid gap-3">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            {project.statusLabel ? (
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#9fb4e8]">{project.statusLabel}</p>
            ) : null}
            <p className="text-[11px] uppercase tracking-[0.26em] text-white/46">{project.category}</p>
            <h3 className={cn("font-display text-white", isCompact ? "text-2xl" : "text-3xl")}>{project.title}</h3>
          </div>
          <div className="rounded-full border border-white/12 bg-white/6 p-2 text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        <p className={cn("text-sm text-white/68", isCompact ? "leading-6" : "leading-7")}>{project.shortPitch}</p>

        <div className={cn("flex flex-wrap gap-2 pt-1", isCompact && "hidden sm:flex")}>
          {project.services.map((service) => (
            <span
              key={service}
              className="rounded-full border border-white/12 bg-white/7 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/66"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
