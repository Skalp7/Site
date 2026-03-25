import { Container } from "@/components/ui/container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0c1119] pb-14 pt-10 text-white sm:pb-18 lg:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,181,146,0.2),transparent_25%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_30%)]" />
      <Container className="relative pt-14">
        <p className="text-[11px] uppercase tracking-[0.32em] text-white/44">{eyebrow}</p>
        <div className="mt-6 grid gap-5 lg:max-w-4xl">
          <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.92] tracking-[-0.04em]">{title}</h1>
          <p className="max-w-2xl text-base leading-8 text-white/66 sm:text-lg">{description}</p>
        </div>
      </Container>
    </section>
  );
}
