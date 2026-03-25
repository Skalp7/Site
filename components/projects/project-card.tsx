import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { GradientVisual } from "@/components/ui/gradient-visual";
import { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group grid gap-5 rounded-[2rem] border border-line/70 bg-white/70 p-4 shadow-panel transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow sm:p-5"
    >
      <GradientVisual tone={project.tone} interactive className="aspect-[16/11] rounded-[1.5rem]" />

      <div className="grid gap-3">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.26em] text-muted">{project.category}</p>
            <h3 className="font-display text-3xl text-ink">{project.title}</h3>
          </div>
          <div className="rounded-full border border-line p-2 text-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        <p className="text-sm leading-7 text-muted">{project.shortPitch}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.services.map((service) => (
            <span
              key={service}
              className="rounded-full border border-line bg-[#f7f2eb] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-muted"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
