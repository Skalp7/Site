import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { ArrowDownRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { ParallaxOrbs } from "@/components/ui/parallax-orbs";
import { siteConfig } from "@/data/site";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#090d15] pb-16 pt-8 text-white sm:pb-20 lg:pb-28">
      <ParallaxOrbs theme="mixed" />
      <div className="absolute inset-0 section-noise" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,181,146,0.28),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(95,115,148,0.32),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 h-[520px] bg-grid bg-[size:42px_42px] opacity-[0.07]" />
      <Container className="relative grid gap-14 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-12">
        <AnimatedReveal variant="left" className="space-y-8">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/52">{siteConfig.heroEyebrow}</p>
          <div className="space-y-6">
            <h1 className="max-w-5xl bg-[linear-gradient(180deg,#ffffff_0%,#e0d4c7_100%)] bg-clip-text font-display text-[clamp(3.5rem,8vw,8rem)] leading-[0.88] tracking-[-0.04em] text-transparent">
              {siteConfig.title}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/70 sm:text-lg">{siteConfig.heroIntro}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/projects" variant="ghost">
              Voir les projets
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" className="border-white/12 bg-white text-ink">
              Entrer en contact
            </ButtonLink>
          </div>
        </AnimatedReveal>

        <AnimatedReveal variant="panel" delay={0.08} className="grid gap-4">
          <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/8 p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/44">Positionnement</p>
              <ArrowDownRight className="h-5 w-5 text-white/44" />
            </div>
            <div className="grid gap-4 text-sm leading-7 text-white/72">
              <p>Une clarté corporate avec une signature de studio personnel.</p>
              <p>Un site pensé pour soutenir le recrutement, le freelance premium et l’évolution future en vrais case studies.</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Focus", value: "Branding, vidéo, contenu digital" },
              { label: "Approche", value: "Des systèmes précis avec une sensibilité éditoriale" },
            ].map((item) => (
              <div key={item.label} className="rounded-[1.75rem] border border-white/10 bg-white/8 p-5 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1">
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/44">{item.label}</p>
                <p className="mt-3 max-w-xs text-sm leading-7 text-white/74">{item.value}</p>
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
