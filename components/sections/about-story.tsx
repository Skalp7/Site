import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";

export function AboutStory() {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow="About" title="A multimedia graphic designer with a systems mindset and a visual point of view." />
        <div className="space-y-6 text-base leading-8 text-muted">
          <p>{siteConfig.about}</p>
          <p>
            I enjoy projects that need a clear visual standard across multiple outputs: identity, campaign design, social assets,
            motion, editorial layouts or interface directions. The common thread is always the same: make the work feel precise,
            intelligent and useful in context.
          </p>
          <p>
            This portfolio structure is intentionally modular, so each project can later evolve into a richer case study with real
            images, videos, metrics and recommendations.
          </p>
        </div>
      </Container>
    </section>
  );
}
