import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { Container } from "@/components/ui/container";
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
    <section className="bg-[#111723] py-20 text-white sm:py-24">
      <Container className="space-y-10">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Method"
            title="A process built to keep creative work aligned, consistent and production-ready."
            description="The tone stays human and collaborative, but the structure remains rigorous enough for business, brand and delivery constraints."
            className="border-white/10"
          />
        </AnimatedReveal>

        <div className="grid gap-4 lg:grid-cols-4">
          {items.map((item, index) => (
            <AnimatedReveal key={item.step} delay={index * 0.06}>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
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
