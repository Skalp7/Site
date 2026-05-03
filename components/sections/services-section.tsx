import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { Container } from "@/components/ui/container";
import { ParallaxOrbs } from "@/components/ui/parallax-orbs";
import { SectionHeading } from "@/components/ui/section-heading";

type ServicesSectionProps = {
  services: {
    title: string;
    description: string;
  }[];
};

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#e6d8ca] py-20 sm:py-24">
      <ParallaxOrbs theme="gold" className="opacity-70" />
      <Container className="relative space-y-10">
        <AnimatedReveal variant="rise">
          <SectionHeading
            eyebrow="Services"
            title="Une pratique polyvalente pensée pour des besoins de marque et de contenu premium."
            description="Le site est conçu pour les candidatures, mais sa présentation des services aide aussi à positionner le travail sur des missions freelance plus sélectives."
          />
        </AnimatedReveal>

        <div className="grid gap-4 lg:grid-cols-2">
          {services.map((service, index) => (
            <AnimatedReveal key={service.title} delay={index * 0.08} variant="panel">
              <div className="rounded-[2rem] border border-[#9f6c42]/12 bg-[#141923] p-6 text-white shadow-[0_26px_80px_rgba(16,19,26,0.2)]">
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/44">Service</p>
                <h3 className="mt-4 font-display text-3xl text-white">{service.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/68">{service.description}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
