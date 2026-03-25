import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const placeholders = [
  "Prêt à accueillir des recommandations de recruteurs, managers ou parties prenantes.",
  "Un bon emplacement pour intégrer des retours clients dès que les missions réelles sont documentées.",
];

export function TestimonialsPlaceholder() {
  return (
    <section className="bg-[#f4efe8] py-20 sm:py-24">
      <Container className="space-y-10">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Recommandations"
            title="Une structure propre déjà prête pour de futurs témoignages."
            description="Pour l’instant, la section garde la mise en page crédible et scalable, sans dépendre de faux widgets d’avis."
          />
        </AnimatedReveal>

        <div className="grid gap-4 lg:grid-cols-2">
          {placeholders.map((text, index) => (
            <AnimatedReveal key={text} delay={index * 0.06}>
              <div className="rounded-[2rem] border border-dashed border-line bg-white/60 p-6">
                <p className="text-sm leading-7 text-muted">{text}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
