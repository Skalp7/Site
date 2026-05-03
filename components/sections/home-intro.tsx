import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { Container } from "@/components/ui/container";
import { ParallaxOrbs } from "@/components/ui/parallax-orbs";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";

export function HomeIntro() {
  return (
    <section className="relative overflow-hidden bg-[#111722] py-20 text-white sm:py-24">
      <ParallaxOrbs theme="blue" className="opacity-75" />
      <Container className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <AnimatedReveal variant="left">
          <SectionHeading eyebrow="Profil" title="Un designer à la croisée de la marque, du motion et du design digital." tone="dark" />
        </AnimatedReveal>
        <AnimatedReveal delay={0.1} variant="panel" className="space-y-6 rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-xl sm:p-8">
          <p className="text-lg leading-8 text-white/72">{siteConfig.intro}</p>
          <p className="text-base leading-8 text-white/64">
            Le portfolio est structuré pour aider recruteurs et clients à comprendre non seulement les visuels finaux, mais
            aussi la réflexion, la méthode et la qualité d’exécution derrière chaque projet.
          </p>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
