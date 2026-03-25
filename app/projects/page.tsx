import { ProjectCard } from "@/components/projects/project-card";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projets"
        title="Un portfolio curaté couvrant branding, print, motion, contenu digital et UI."
        description="Les case studies sont volontairement variés pour présenter un profil hybride tout en gardant un ton crédible, structuré et premium."
      />

      <section className="bg-ivory py-20 sm:py-24">
        <Container className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedReveal key={project.slug} delay={index * 0.04}>
              <ProjectCard project={project} />
            </AnimatedReveal>
          ))}
        </Container>
      </section>
    </>
  );
}
