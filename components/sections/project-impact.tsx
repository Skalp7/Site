import { Project } from "@/types";

type ProjectImpactProps = {
  project: Project;
};

export function ProjectImpact({ project }: ProjectImpactProps) {
  return (
    <div className="grid gap-5 rounded-[2rem] border border-line/70 bg-[#111723] p-6 text-white shadow-panel">
      <div className="grid gap-2">
        <p className="text-[11px] uppercase tracking-[0.26em] text-white/42">Result</p>
        <p className="max-w-3xl text-base leading-8 text-white/72">{project.impact}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {project.metrics.map((metric) => (
          <div key={metric.label} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
            <p className="text-[11px] uppercase tracking-[0.26em] text-white/42">{metric.label}</p>
            <p className="mt-3 font-display text-4xl">{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
