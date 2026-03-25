import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";

export function HomeIntro() {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <AnimatedReveal>
          <SectionHeading eyebrow="Profil" title="Un designer à la croisée de la marque, du motion et du design digital." />
        </AnimatedReveal>
        <AnimatedReveal delay={0.1} className="space-y-6">
          <p className="text-lg leading-8 text-muted">{siteConfig.intro}</p>
          <p className="text-base leading-8 text-muted">
            Le portfolio est structuré pour aider recruteurs et clients à comprendre non seulement les visuels finaux, mais
            aussi la réflexion, la méthode et la qualité d’exécution derrière chaque projet.
          </p>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
