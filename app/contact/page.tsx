import Link from "next/link";

import { PageHero } from "@/components/sections/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Recrutement, demandes freelance et échanges créatifs."
        description="Une page contact simple, directe et professionnelle, avec de la place pour un futur formulaire ou une collecte de leads connectée à Supabase."
      />

      <section className="bg-ivory py-20 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-line/70 bg-white/80 p-6 shadow-panel sm:p-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted">Prendre contact</p>
            <h2 className="mt-5 font-display text-4xl text-ink sm:text-5xl">Parlons du poste, du brief ou de la direction visuelle.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted">{siteConfig.availability}</p>

            <div className="mt-8 grid gap-5 text-sm">
              <div className="border-b border-line pb-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-muted">Email</p>
                <Link href={`mailto:${siteConfig.email}`} className="mt-2 block text-lg text-ink hover:text-accent">
                  {siteConfig.email}
                </Link>
              </div>
              <div className="border-b border-line pb-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-muted">Téléphone</p>
                <p className="mt-2 text-lg text-ink">{siteConfig.phone}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-muted">Localisation</p>
                <p className="mt-2 text-lg text-ink">{siteConfig.location}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-line/70 bg-[#111723] p-6 text-white shadow-panel sm:p-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/42">Usage conseillé</p>
            <div className="mt-5 space-y-5 text-sm leading-7 text-white/68">
              <p>Utilise cette page pour le contact direct en recrutement, les opportunités freelance ou un futur formulaire intégré.</p>
              <p>
                Si tu veux plus tard stocker les demandes, Supabase peut être ajouté proprement sans modifier la structure du portfolio.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${siteConfig.email}`} variant="ghost">
                Envoyer un email
              </ButtonLink>
              <ButtonLink href="/projects" variant="secondary" className="border-white/12 bg-white text-ink">
                Voir les projets
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
