import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";

export function HomeIntro() {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <AnimatedReveal>
          <SectionHeading eyebrow="Profile" title="A designer bridging brand, motion and digital craft." />
        </AnimatedReveal>
        <AnimatedReveal delay={0.1} className="space-y-6">
          <p className="text-lg leading-8 text-muted">{siteConfig.intro}</p>
          <p className="text-base leading-8 text-muted">
            The portfolio is structured to help recruiters and clients understand not only the final visuals, but also the
            reasoning, process and execution quality behind each project.
          </p>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
