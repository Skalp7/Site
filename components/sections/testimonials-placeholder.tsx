import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const placeholders = [
  "Ready for hiring manager recommendations or stakeholder quotes.",
  "A good place to add client feedback once real missions are documented.",
];

export function TestimonialsPlaceholder() {
  return (
    <section className="bg-[#f4efe8] py-20 sm:py-24">
      <Container className="space-y-10">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Recommendations"
            title="A clean structure already prepared for future testimonials."
            description="For now, the section keeps the layout credible and scalable without relying on empty review widgets."
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
