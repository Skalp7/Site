import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { Container } from "@/components/ui/container";
import { ParallaxOrbs } from "@/components/ui/parallax-orbs";
import { SectionHeading } from "@/components/ui/section-heading";

const placeholders = [
  "Prêt à accueillir des recommandations de recruteurs, managers ou parties prenantes.",
  "Un bon emplacement pour intégrer des retours clients dès que les missions réelles sont documentées.",
];

export function TestimonialsPlaceholder() {
  return (
    <section className="relative overflow-hidden bg-[#0f141d] py-20 text-white sm:py-24">
      <ParallaxOrbs theme="blue" className="opacity-90" />
      <Container className="relative space-y-10">
        <AnimatedReveal variant="rise">
          <SectionHeading
            eyebrow="Recommandations"
            title="Une structure propre déjà prête pour de futurs témoignages."
            description="Pour l’instant, la section garde la mise en page crédible et scalable, sans dépendre de faux widgets d’avis."
            tone="dark"
            className="border-white/10"
          />
        </AnimatedReveal>

        <div className="grid gap-4 lg:grid-cols-2">
          {placeholders.map((text, index) => (
            <AnimatedReveal key={text} delay={index * 0.08} variant="panel">
              <div className="rounded-[2rem] border border-dashed border-white/14 bg-white/6 p-6 backdrop-blur-xl">
                <p className="text-sm leading-7 text-white/68">{text}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
