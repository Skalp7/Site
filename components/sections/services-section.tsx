import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type ServicesSectionProps = {
  services: {
    title: string;
    description: string;
  }[];
};

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <Container className="space-y-10">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Services"
            title="A versatile practice designed for premium brand and content needs."
            description="The site is ready to support job applications, but its service framing also helps position the work for selective freelance engagements."
          />
        </AnimatedReveal>

        <div className="grid gap-4 lg:grid-cols-2">
          {services.map((service, index) => (
            <AnimatedReveal key={service.title} delay={index * 0.05}>
              <div className="rounded-[2rem] border border-line/70 bg-white/75 p-6 shadow-panel">
                <p className="text-[11px] uppercase tracking-[0.28em] text-muted">Service</p>
                <h3 className="mt-4 font-display text-3xl text-ink">{service.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-muted">{service.description}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
