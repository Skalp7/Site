import { Project } from "@/types";

type ProjectMetadataProps = {
  project: Project;
};

export function ProjectMetadata({ project }: ProjectMetadataProps) {
  const items = [
    { label: "Client", value: project.client },
    { label: "Year", value: project.year },
    { label: "Role", value: project.role },
    { label: "Tools", value: project.tools.join(", ") },
  ];

  return (
    <div className="grid gap-4 rounded-[2rem] border border-line/70 bg-white/80 p-6 shadow-panel">
      {items.map((item) => (
        <div key={item.label} className="grid gap-1 border-b border-line/60 pb-4 last:border-none last:pb-0">
          <span className="text-[11px] uppercase tracking-[0.26em] text-muted">{item.label}</span>
          <p className="text-sm leading-7 text-ink">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
