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
        title="Recruitment, freelance enquiries and creative conversations."
        description="A simple contact page designed to feel polished, direct and professional, with room for a future form or Supabase-powered lead capture."
      />

      <section className="bg-ivory py-20 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-line/70 bg-white/80 p-6 shadow-panel sm:p-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted">Get in touch</p>
            <h2 className="mt-5 font-display text-4xl text-ink sm:text-5xl">Let’s discuss the role, the brief or the visual direction.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted">{siteConfig.availability}</p>

            <div className="mt-8 grid gap-5 text-sm">
              <div className="border-b border-line pb-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-muted">Email</p>
                <Link href={`mailto:${siteConfig.email}`} className="mt-2 block text-lg text-ink hover:text-accent">
                  {siteConfig.email}
                </Link>
              </div>
              <div className="border-b border-line pb-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-muted">Phone</p>
                <p className="mt-2 text-lg text-ink">{siteConfig.phone}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-muted">Location</p>
                <p className="mt-2 text-lg text-ink">{siteConfig.location}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-line/70 bg-[#111723] p-6 text-white shadow-panel sm:p-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/42">Suggested use</p>
            <div className="mt-5 space-y-5 text-sm leading-7 text-white/68">
              <p>Use this page for direct recruitment contact, freelance opportunities or a future integrated form.</p>
              <p>
                If you later want to store enquiries, Supabase can be added cleanly without changing the core portfolio structure.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${siteConfig.email}`} variant="ghost">
                Email directly
              </ButtonLink>
              <ButtonLink href="/projects" variant="secondary" className="border-white/12 bg-white text-ink">
                Review projects
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
