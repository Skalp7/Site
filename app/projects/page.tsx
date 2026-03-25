import { ProjectCard } from "@/components/projects/project-card";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="A curated portfolio spanning branding, print, motion, digital content and UI."
        description="The case studies are intentionally varied to present a hybrid profile while keeping the tone credible, structured and premium."
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
