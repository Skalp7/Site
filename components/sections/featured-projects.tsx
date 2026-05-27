import { ProjectCard } from "@/components/projects/project-card";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { ParallaxOrbs } from "@/components/ui/parallax-orbs";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { Project } from "@/types";

type FeaturedProjectsProps = {
  projects: Project[];
  eyebrow?: string;
  title?: string;
  description?: string;
  variant?: "featured" | "compact" | "tailored";
  showAction?: boolean;
};

export function FeaturedProjects({
  projects,
  eyebrow = "Featured Projects",
  title = "Des case studies premium, structurés pour montrer le raisonnement autant que l’exécution.",
  description = "Les projets principaux mettent en avant des systèmes visuels complets, crédibles pour le recrutement et assez solides pour soutenir une ouverture freelance.",
  variant = "featured",
  showAction = true,
}: FeaturedProjectsProps) {
  const isFeatured = variant === "featured";

  return (
    <section className="relative overflow-hidden bg-[#0d121a] py-20 text-white sm:py-24">
      <ParallaxOrbs theme="gold" />
      <div className="absolute inset-0 section-noise opacity-70" />
      <Container className="relative space-y-10">
        <AnimatedReveal variant="rise">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            action={showAction ? <ButtonLink href="/projects" variant="secondary">Voir tous les projets</ButtonLink> : null}
            tone="dark"
            className="border-white/10"
          />
        </AnimatedReveal>

        <div className={cn("grid gap-5", isFeatured ? "lg:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3")}>
          {projects.map((project, index) => (
            <AnimatedReveal key={project.slug} delay={index * 0.08} variant={index % 2 === 0 ? "left" : "right"}>
              <ProjectCard project={project} variant={variant} />
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
