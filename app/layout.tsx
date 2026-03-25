import type { Metadata } from "next";

import "./globals.css";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.title}`,
  description: siteConfig.seoDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={
          {
            ["--font-sans" as string]:
              '"Avenir Next", "Manrope", "Suisse Intl", "Neue Haas Grotesk Text", "Helvetica Neue", sans-serif',
            ["--font-display" as string]:
              '"IvyPresto Display", "Canela", "Cormorant Garamond", "Baskerville", "Times New Roman", serif',
          } as React.CSSProperties
        }
      >
        <CustomCursor />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
