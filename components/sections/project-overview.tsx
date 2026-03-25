import { Project } from "@/types";

type ProjectOverviewProps = {
  project: Project;
};

export function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <div className="grid gap-6 rounded-[2rem] border border-line/70 bg-white/80 p-6 shadow-panel">
      <div className="grid gap-2">
        <p className="text-[11px] uppercase tracking-[0.26em] text-muted">Vue d’ensemble</p>
        <p className="text-base leading-8 text-muted">{project.excerpt}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {[
          { title: "Contexte", body: project.context },
          { title: "Objectif", body: project.objective },
          { title: "Approche", body: project.approach },
          { title: "Solution", body: project.solution },
        ].map((item) => (
          <div key={item.title} className="rounded-[1.5rem] border border-line/70 bg-[#f8f3ec] p-5">
            <p className="text-[11px] uppercase tracking-[0.26em] text-muted">{item.title}</p>
            <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
