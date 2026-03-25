import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type SkillsToolsSectionProps = {
  skills: string[];
  tools: string[];
};

export function SkillsToolsSection({ skills, tools }: SkillsToolsSectionProps) {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills and tools presented as a practical working stack."
          description="The goal is to communicate versatility while keeping the selection focused on the tools and competencies that matter to employers and premium clients."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-line/70 bg-white/80 p-6 shadow-panel">
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted">Skills</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-line bg-[#f5efe7] px-4 py-2 text-sm text-ink">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-line/70 bg-white/80 p-6 shadow-panel">
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted">Tools</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span key={tool} className="rounded-full border border-line bg-[#f5efe7] px-4 py-2 text-sm text-ink">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
