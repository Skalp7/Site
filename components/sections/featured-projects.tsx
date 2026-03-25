import { ProjectCard } from "@/components/projects/project-card";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Project } from "@/types";

type FeaturedProjectsProps = {
  projects: Project[];
};

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="bg-[#f4efe8] py-20 sm:py-24">
      <Container className="space-y-10">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Projets sélectionnés"
            title="Des projets présentés avec du contexte stratégique, pas seulement des visuels."
            description="Chaque case study est structuré pour rester crédible dans un contexte de recrutement, tout en étant suffisamment premium pour soutenir un positionnement freelance."
            action={<ButtonLink href="/projects" variant="secondary">Voir tous les projets</ButtonLink>}
          />
        </AnimatedReveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedReveal key={project.slug} delay={index * 0.06}>
              <ProjectCard project={project} />
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
