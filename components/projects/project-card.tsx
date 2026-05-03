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
      className="group relative grid gap-5 overflow-hidden rounded-[2rem] border border-white/10 bg-[#121722] p-4 text-white shadow-[0_28px_90px_rgba(12,17,25,0.28)] transition-all duration-500 hover:-translate-y-2 hover:border-[#c08c61]/35 hover:shadow-[0_30px_110px_rgba(159,108,66,0.22)] sm:p-5"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_34%)]" />
      <GradientVisual tone={project.tone} interactive className="aspect-[16/11] rounded-[1.5rem]" />

      <div className="relative grid gap-3">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.26em] text-white/46">{project.category}</p>
            <h3 className="font-display text-3xl text-white">{project.title}</h3>
          </div>
          <div className="rounded-full border border-white/12 bg-white/6 p-2 text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        <p className="text-sm leading-7 text-white/68">{project.shortPitch}</p>

        <div className="flex flex-wrap gap-2 pt-1">
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
