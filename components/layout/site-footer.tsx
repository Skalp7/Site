import Link from "next/link";

import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/70 bg-[#0c1018] text-white">
      <Container className="grid gap-10 py-12 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <div className="space-y-4">
          <p className="text-[11px] uppercase tracking-[0.28em] text-white/42">Portfolio</p>
          <h2 className="max-w-2xl font-display text-3xl sm:text-4xl">{siteConfig.title}</h2>
          <p className="max-w-2xl text-sm leading-7 text-white/64">{siteConfig.availability}</p>
        </div>

        <div className="flex flex-col gap-4 text-sm text-white/68 sm:items-end">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
            {siteConfig.email}
          </a>
          <div className="flex flex-wrap gap-4">
            {siteConfig.socialLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <p>{siteConfig.location}</p>
        </div>
      </Container>
    </footer>
  );
}
