import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export function ContactSection() {
  return (
    <section className="bg-[#0c1119] py-20 text-white sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <p className="text-[11px] uppercase tracking-[0.28em] text-white/42">Contact</p>
          <h2 className="font-display text-4xl leading-none sm:text-5xl lg:text-6xl">Open to design roles and selected freelance missions.</h2>
          <p className="max-w-2xl text-base leading-8 text-white/64">
            The portfolio is designed to help conversations start quickly, whether the need is an in-house graphic designer profile or a premium project-based collaboration.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${siteConfig.email}`} variant="ghost">
              Email me
            </ButtonLink>
            <ButtonLink href="/about" variant="secondary" className="border-white/12 bg-white text-ink">
              Learn more
            </ButtonLink>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-xl">
          <div className="grid gap-4 text-sm">
            <div className="border-b border-white/10 pb-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/42">Email</p>
              <Link href={`mailto:${siteConfig.email}`} className="mt-2 block text-white/78 hover:text-white">
                {siteConfig.email}
              </Link>
            </div>
            <div className="border-b border-white/10 pb-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/42">Location</p>
              <p className="mt-2 text-white/78">{siteConfig.location}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/42">Social</p>
              <div className="mt-2 flex flex-wrap gap-4 text-white/78">
                {siteConfig.socialLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
