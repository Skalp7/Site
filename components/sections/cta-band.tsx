import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { ParallaxOrbs } from "@/components/ui/parallax-orbs";

type CtaBandProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export function CtaBand({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-[#d8c7b5] py-20 sm:py-24">
      <ParallaxOrbs theme="gold" />
      <Container className="relative">
        <AnimatedReveal variant="panel">
          <div className="rounded-[2.25rem] border border-[#1c2230] bg-[#0c1119] px-6 py-10 text-white shadow-[0_30px_120px_rgba(16,19,26,0.22)] sm:px-10 lg:flex lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/44">Opportunités</p>
              <h2 className="font-display text-4xl leading-none sm:text-5xl">{title}</h2>
              <p className="text-base leading-8 text-white/64">{description}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 lg:mt-0 lg:justify-end">
              <ButtonLink href={primaryHref} variant="ghost">
                {primaryLabel}
              </ButtonLink>
              <ButtonLink href={secondaryHref} variant="secondary" className="border-white/12 bg-white text-ink">
                {secondaryLabel}
              </ButtonLink>
            </div>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
