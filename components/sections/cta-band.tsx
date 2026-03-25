import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

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
    <section className="bg-ivory py-20 sm:py-24">
      <Container>
        <div className="rounded-[2.25rem] border border-line bg-[#111723] px-6 py-10 text-white shadow-2xl sm:px-10 lg:flex lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/44">Opportunities</p>
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
      </Container>
    </section>
  );
}
