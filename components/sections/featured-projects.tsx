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
            eyebrow="Selected work"
            title="Projects presented with strategic context, not just visuals."
            description="Each case study is structured to feel credible in a hiring context while staying polished enough for premium freelance positioning."
            action={<ButtonLink href="/projects" variant="secondary">See all projects</ButtonLink>}
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
