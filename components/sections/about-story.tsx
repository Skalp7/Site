import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { Container } from "@/components/ui/container";
import { ParallaxOrbs } from "@/components/ui/parallax-orbs";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";

export function AboutStory() {
  return (
    <section className="relative overflow-hidden bg-[#151b27] py-20 text-white sm:py-24">
      <ParallaxOrbs theme="blue" className="opacity-80" />
      <Container className="relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <AnimatedReveal variant="left">
          <SectionHeading eyebrow="À propos" title="Un multimedia graphic designer avec une logique de système et un vrai regard visuel." tone="dark" />
        </AnimatedReveal>
        <AnimatedReveal variant="panel" className="space-y-6 rounded-[2rem] border border-white/10 bg-white/6 p-6 text-base leading-8 text-white/68 backdrop-blur-xl sm:p-8">
          <p>{siteConfig.about}</p>
          <p>
            J’apprécie les projets qui demandent un standard visuel clair sur plusieurs supports : identité, campagne, assets
            social media, motion, mise en page éditoriale ou direction d’interface. Le fil conducteur reste le même : produire
            un design précis, intelligent et utile dans son contexte.
          </p>
          <p>
            La structure de ce portfolio est volontairement modulaire, afin que chaque projet puisse ensuite évoluer en case
            study plus riche avec de vraies images, vidéos, métriques et recommandations.
          </p>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
