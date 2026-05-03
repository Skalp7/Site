import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { Container } from "@/components/ui/container";
import { ParallaxOrbs } from "@/components/ui/parallax-orbs";
import { SectionHeading } from "@/components/ui/section-heading";

type ProcessSectionProps = {
  items: {
    step: string;
    title: string;
    description: string;
  }[];
};

export function ProcessSection({ items }: ProcessSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#090d15] py-20 text-white sm:py-24">
      <ParallaxOrbs theme="blue" />
      <div className="absolute inset-0 section-noise opacity-60" />
      <Container className="relative space-y-10">
        <AnimatedReveal variant="rise">
          <SectionHeading
            eyebrow="Méthode"
            title="Un process conçu pour garder le travail créatif aligné, cohérent et prêt pour la production."
            description="Le ton reste humain et collaboratif, mais la structure demeure suffisamment rigoureuse pour les enjeux business, de marque et de livraison."
            className="border-white/10"
            tone="dark"
          />
        </AnimatedReveal>

        <div className="grid gap-4 lg:grid-cols-4">
          {items.map((item, index) => (
            <AnimatedReveal key={item.step} delay={index * 0.08} variant="panel">
              <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.11),rgba(255,255,255,0.04))] p-6 backdrop-blur">
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">{item.step}</p>
                <h3 className="mt-6 font-display text-3xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/64">{item.description}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
