import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";

export function AboutStory() {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow="À propos" title="Un multimedia graphic designer avec une logique de système et un vrai regard visuel." />
        <div className="space-y-6 text-base leading-8 text-muted">
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
        </div>
      </Container>
    </section>
  );
}
