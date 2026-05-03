import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { Container } from "@/components/ui/container";
import { ParallaxOrbs } from "@/components/ui/parallax-orbs";
import { SectionHeading } from "@/components/ui/section-heading";

type SkillsToolsSectionProps = {
  skills: string[];
  tools: string[];
};

export function SkillsToolsSection({ skills, tools }: SkillsToolsSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#d8c7b5] py-20 sm:py-24">
      <ParallaxOrbs theme="mixed" className="opacity-80" />
      <Container className="relative space-y-10">
        <AnimatedReveal variant="rise">
          <SectionHeading
            eyebrow="Compétences"
            title="Compétences et outils présentés comme un stack de travail concret."
            description="L’objectif est de communiquer la polyvalence tout en gardant une sélection focalisée sur les outils et savoir-faire utiles aux recruteurs et clients premium."
          />
        </AnimatedReveal>

        <div className="grid gap-5 lg:grid-cols-2">
          <AnimatedReveal variant="left">
            <div className="rounded-[2rem] border border-white/10 bg-[#111723] p-6 text-white shadow-[0_24px_70px_rgba(16,19,26,0.18)]">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/44">Compétences</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white/76">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedReveal>

          <AnimatedReveal variant="right" delay={0.08}>
            <div className="rounded-[2rem] border border-white/10 bg-[#151b27] p-6 text-white shadow-[0_24px_70px_rgba(16,19,26,0.18)]">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/44">Outils</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white/76">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
}
