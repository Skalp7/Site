import { ProjectCard } from "@/components/projects/project-card";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { ParallaxOrbs } from "@/components/ui/parallax-orbs";
import { SectionHeading } from "@/components/ui/section-heading";
import { Project } from "@/types";

type FeaturedProjectsProps = {
  projects: Project[];
};

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="relative overflow-hidden bg-[#0d121a] py-20 text-white sm:py-24">
      <ParallaxOrbs theme="gold" />
      <div className="absolute inset-0 section-noise opacity-70" />
      <Container className="relative space-y-10">
        <AnimatedReveal variant="rise">
          <SectionHeading
            eyebrow="Projets sélectionnés"
            title="Des projets présentés avec du contexte stratégique, pas seulement des visuels."
            description="Chaque case study est structuré pour rester crédible dans un contexte de recrutement, tout en étant suffisamment premium pour soutenir un positionnement freelance."
            action={<ButtonLink href="/projects" variant="secondary">Voir tous les projets</ButtonLink>}
            tone="dark"
            className="border-white/10"
          />
        </AnimatedReveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedReveal key={project.slug} delay={index * 0.08} variant={index % 2 === 0 ? "left" : "right"}>
              <ProjectCard project={project} />
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
