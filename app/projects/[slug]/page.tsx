import { notFound } from "next/navigation";

import { ProjectGallery } from "@/components/projects/project-gallery";
import { ProjectMetadata } from "@/components/projects/project-metadata";
import { ProjectVideo } from "@/components/projects/project-video";
import { PageHero } from "@/components/sections/page-hero";
import { ProjectImpact } from "@/components/sections/project-impact";
import { ProjectOverview } from "@/components/sections/project-overview";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <PageHero eyebrow={project.category} title={project.title} description={project.shortPitch} />

      <section className="bg-ivory py-20 sm:py-24">
        <Container className="grid gap-8 xl:grid-cols-[1.1fr_0.55fr]">
          <ProjectOverview project={project} />
          <div className="grid gap-6">
            <ProjectMetadata project={project} />
            <div className="rounded-[2rem] border border-line/70 bg-white/80 p-6 shadow-panel">
              <p className="text-[11px] uppercase tracking-[0.26em] text-muted">Livrables</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.deliverables.map((item) => (
                  <span key={item} className="rounded-full border border-line bg-[#f5efe7] px-3 py-2 text-sm text-ink">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f4efe8] py-20 sm:py-24">
        <Container className="space-y-8">
          <div className="grid gap-3">
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted">Case study</p>
            <h2 className="font-display text-4xl text-ink sm:text-5xl">Galerie et décryptage créatif</h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {project.sections.map((section) => (
              <div key={section.title} className="rounded-[2rem] border border-line/70 bg-white/70 p-6 shadow-panel">
                <p className="text-[11px] uppercase tracking-[0.26em] text-muted">{section.title}</p>
                <p className="mt-4 text-sm leading-7 text-muted">{section.body}</p>
              </div>
            ))}
          </div>

          <ProjectGallery items={project.gallery} />
        </Container>
      </section>

      {project.video ? (
        <section className="bg-ivory py-20 sm:py-24">
          <Container className="space-y-6">
            <div className="grid gap-3">
              <p className="text-[11px] uppercase tracking-[0.28em] text-muted">Motion</p>
              <h2 className="font-display text-4xl text-ink sm:text-5xl">Intégration vidéo prête pour les reels de campagne et les montages de case study.</h2>
            </div>
            <ProjectVideo video={project.video} />
          </Container>
        </section>
      ) : null}

      <section className="bg-[#111723] py-20 sm:py-24">
        <Container className="space-y-8">
          <ProjectImpact project={project} />
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/projects" variant="ghost">
              Retour aux projets
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" className="border-white/12 bg-white text-ink">
              Contact
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
