import { ProjectCard } from "@/components/projects/project-card";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { featuredProjects, selectedProjects, tailoredApplicationProjects } from "@/data/projects";

export default function ProjectsPage() {
  const groups = [
    {
      eyebrow: "Featured Projects",
      title: "Projets principaux",
      description: "Des case studies complets, pensés comme les piliers du portfolio.",
      projects: featuredProjects,
      variant: "featured" as const,
      gridClassName: "lg:grid-cols-2",
    },
    {
      eyebrow: "Selected Works",
      title: "Travaux sélectionnés",
      description: "Des projets plus compacts qui montrent la variété des formats, secteurs et niveaux d’intervention.",
      projects: selectedProjects,
      variant: "compact" as const,
      gridClassName: "md:grid-cols-2 xl:grid-cols-3",
    },
    {
      eyebrow: "Tailored Applications",
      title: "Candidatures personnalisées & adaptations motion",
      description: "Des propositions spéculatives clairement signalées, conçues pour montrer l’adaptation à une marque et un contexte précis.",
      projects: tailoredApplicationProjects,
      variant: "tailored" as const,
      gridClassName: "md:grid-cols-2 xl:grid-cols-3",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Projets"
        title="Un portfolio curaté couvrant branding, print, motion, contenu digital et UI."
        description="Les case studies sont volontairement variés pour présenter un profil hybride tout en gardant un ton crédible, structuré et premium."
      />

      <section className="bg-[#0d121a] py-20 text-white sm:py-24">
        <Container className="space-y-16">
          {groups.map((group) => (
            <div key={group.eyebrow} className="space-y-8">
              <AnimatedReveal>
                <div className="grid gap-3 border-b border-white/10 pb-6">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-white/44">{group.eyebrow}</p>
                  <h2 className="font-display text-4xl leading-none text-white sm:text-5xl">{group.title}</h2>
                  <p className="max-w-2xl text-sm leading-7 text-white/64">{group.description}</p>
                </div>
              </AnimatedReveal>

              <div className={`grid gap-5 ${group.gridClassName}`}>
                {group.projects.map((project, index) => (
                  <AnimatedReveal key={project.slug} delay={index * 0.04}>
                    <ProjectCard project={project} variant={group.variant} />
                  </AnimatedReveal>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
