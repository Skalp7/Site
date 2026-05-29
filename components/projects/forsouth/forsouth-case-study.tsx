import { ArrowUpRight, Compass, Globe2, Landmark, Layers3, Sparkles } from "lucide-react";
import { ReactNode } from "react";

import { ForsouthAssetFrame } from "@/components/projects/forsouth/forsouth-asset-frame";
import { ProjectMetadata } from "@/components/projects/project-metadata";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { Project } from "@/types";

type ForsouthCaseStudyProps = {
  project: Project;
};

const assetBase = "/projects/forsouth-advisory";

const brandPillars = [
  {
    title: "Strategic foresight",
    body: "Une marque de conseil qui doit rendre l’anticipation visible, crédible et immédiatement lisible pour des décideurs internationaux.",
    icon: Compass,
  },
  {
    title: "Europe / LATAM bridge",
    body: "Le symbole relie deux territoires économiques avec un langage diplomatique, premium et structuré.",
    icon: Globe2,
  },
  {
    title: "Institutional clarity",
    body: "Chaque choix visuel privilégie la stabilité, la hiérarchie et la précision plutôt que l’effet décoratif.",
    icon: Landmark,
  },
];

const logoSystem = [
  {
    src: `${assetBase}/logo/forsouth-logo-main.svg`,
    label: "Primary lockup",
    caption: "Logo principal : symbole à 12 étoiles et logotype institutionnel.",
  },
  {
    src: `${assetBase}/logo/forsouth-logo-symbol.svg`,
    label: "Symbol isolation",
    caption: "Le symbole seul devient une constellation stratégique et un repère de navigation.",
  },
  {
    src: `${assetBase}/logo/forsouth-logo-black.svg`,
    label: "Monochrome system",
    caption: "Version noire pour documents administratifs, print et usages très sobres.",
  },
  {
    src: `${assetBase}/logo/forsouth-logo-white.svg`,
    label: "Reversed system",
    caption: "Version claire pour fonds constellation, supports digitaux et moments premium.",
  },
];

const constellationImages = [
  {
    src: `${assetBase}/photography/constellation-01.jpg`,
    label: "Navigation field",
    caption: "Une photographie atmosphérique pour évoquer lecture des signaux et orientation.",
  },
  {
    src: `${assetBase}/photography/constellation-02.jpg`,
    label: "Strategic sky",
    caption: "Un moment cinématique qui installe la notion de projection internationale.",
  },
  {
    src: `${assetBase}/photography/constellation-03.jpg`,
    label: "Signal reading",
    caption: "La constellation devient langage de prévoyance, pas simple ambiance.",
  },
  {
    src: `${assetBase}/photography/constellation-04.jpg`,
    label: "Expansion path",
    caption: "Un champ visuel sombre pour relier trajectoire, méthode et expansion.",
  },
];

const applications = [
  {
    src: `${assetBase}/applications/linkedin-banner-company.jpg`,
    label: "Company LinkedIn banner",
    caption: "Une présence corporate immédiate, structurée pour le premier contact digital.",
    aspect: "wide" as const,
  },
  {
    src: `${assetBase}/applications/linkedin-banner-personal.jpg`,
    label: "Personal LinkedIn banner",
    caption: "Une extension plus relationnelle, cohérente avec l’univers de marque.",
    aspect: "wide" as const,
  },
  {
    src: `${assetBase}/applications/business-card-front.jpg`,
    label: "Business card front",
    caption: "Carte frontale : information, rythme et signe institutionnel au service de la crédibilité.",
    aspect: "landscape" as const,
  },
  {
    src: `${assetBase}/applications/business-card-back.jpg`,
    label: "Business card back",
    caption: "Verso plus atmosphérique : la constellation prolonge le territoire stratégique.",
    aspect: "landscape" as const,
  },
  {
    src: `${assetBase}/applications/one-pager.jpg`,
    label: "Strategic one pager",
    caption: "Un document éditorial premium, traité comme un livrable de conseil.",
    aspect: "portrait" as const,
  },
];

const iconCards = [
  { title: "Market entry", icon: ArrowUpRight },
  { title: "Partner intelligence", icon: Layers3 },
  { title: "Strategic foresight", icon: Sparkles },
  { title: "Cross-market bridge", icon: Globe2 },
];

function SectionIntro({
  eyebrow,
  title,
  body,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  body: string;
  align?: "center" | "left";
}) {
  return (
    <AnimatedReveal className={align === "center" ? "mx-auto grid max-w-5xl gap-4 text-center" : "grid max-w-4xl gap-4"}>
      <p className="text-[11px] uppercase tracking-[0.34em] text-[#e0b12b]">{eyebrow}</p>
      <h2 className="font-display text-4xl leading-none text-white sm:text-5xl lg:text-6xl">{title}</h2>
      <p className="max-w-3xl text-base leading-8 text-white/66">{body}</p>
    </AnimatedReveal>
  );
}

function GridPanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045]",
        "before:absolute before:inset-0 before:opacity-35 before:[background-image:linear-gradient(rgba(224,177,43,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(224,177,43,0.16)_1px,transparent_1px)] before:[background-size:38px_38px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="relative">{children}</div>
    </div>
  );
}

export function ForsouthCaseStudy({ project }: ForsouthCaseStudyProps) {
  return (
    <article className="overflow-hidden bg-[#080b12] text-white">
      <section className="relative min-h-[calc(100vh-88px)] overflow-hidden pb-20 pt-16">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#080b12_0%,#11131b_46%,#2c3443_72%,#e0b12b_140%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(224,177,43,0.18),transparent_24%),radial-gradient(circle_at_78%_22%,rgba(255,255,255,0.09),transparent_22%)]" />
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:54px_54px]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#080b12] to-transparent" />

        <Container className="relative grid min-h-[72vh] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <AnimatedReveal variant="left" className="space-y-8">
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.34em] text-white/48">{project.category}</p>
              <h1 className="max-w-4xl font-display text-[clamp(4rem,8vw,8.8rem)] leading-[0.84] text-white">Forsouth. Advisory</h1>
              <p className="font-display text-3xl text-[#e0b12b] sm:text-4xl">Forsight for the South</p>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/72">
              Une identité stratégique pensée comme un système de navigation entre Europe et LATAM : signe, typographie, couleur, photographie et supports business travaillent ensemble.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/projects" variant="ghost">Retour aux projets</ButtonLink>
              <ButtonLink href="/contact" variant="secondary" className="border-white/12 bg-white text-ink">
                Discuter d’un projet
              </ButtonLink>
            </div>
          </AnimatedReveal>

          <AnimatedReveal variant="panel" delay={0.08}>
            <GridPanel className="p-7">
              <div className="absolute left-7 top-7 h-28 w-px bg-[#e0b12b]/35" />
              <div className="absolute left-7 top-7 h-px w-40 bg-[#e0b12b]/35" />
              <ForsouthAssetFrame
                src={`${assetBase}/logo/forsouth-logo-white.svg`}
                alt="Forsouth Advisory logo"
                label="Hero identity system"
                caption="Le logo est présenté dans un environnement de construction pour rendre visible la précision du système."
                aspect="square"
                contain
              />
            </GridPanel>
          </AnimatedReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.65fr]">
          <AnimatedReveal variant="left" className="space-y-8">
            <div className="space-y-5">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#e0b12b]">Strategic foundation</p>
              <h2 className="font-display text-4xl leading-none sm:text-5xl lg:text-6xl">Une marque pensée comme outil d’orientation.</h2>
              <p className="max-w-3xl text-base leading-8 text-white/68">{project.excerpt}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {brandPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <AnimatedReveal key={pillar.title} delay={index * 0.05} variant="panel">
                    <div className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                      <Icon className="h-5 w-5 text-[#e0b12b]" />
                      <h3 className="mt-5 font-display text-2xl">{pillar.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/62">{pillar.body}</p>
                    </div>
                  </AnimatedReveal>
                );
              })}
            </div>
            <AnimatedReveal variant="rise">
              <ForsouthAssetFrame
                src={`${assetBase}/brand/forsouth-brand-board.jpg`}
                alt="Forsouth Advisory brand board"
                label="Brand system overview"
                caption="Le brand board réel relie logo, typographie, couleurs, iconographie et direction d’applications dans une lecture d’ensemble."
                aspect="wide"
              />
            </AnimatedReveal>
          </AnimatedReveal>
          <AnimatedReveal variant="right">
            <ProjectMetadata project={project} />
          </AnimatedReveal>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-[#0d111a] py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Logo as system"
            title="Le symbole devient une constellation stratégique, construite et mesurable."
            body="La marque ne se limite pas à un signe : elle organise la relation entre symbole, logotype, clear space, versions monochromes et grille d’alignement. Les étoiles fonctionnent comme un outil de lecture, de guidance et de projection."
          />

          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <AnimatedReveal variant="left">
              <GridPanel className="p-6 lg:p-8">
                <div className="absolute inset-x-8 top-1/2 h-px bg-[#e0b12b]/30" />
                <div className="absolute left-1/2 top-8 h-[calc(100%-4rem)] w-px bg-[#e0b12b]/25" />
                <ForsouthAssetFrame
                  src={`${assetBase}/logo/forsouth-logo-main.svg`}
                  alt="Forsouth Advisory primary logo"
                  label="Primary logo construction"
                  caption="Le lockup principal est traité comme une pièce centrale du système de marque."
                  aspect="wide"
                  contain
                />
              </GridPanel>
            </AnimatedReveal>
            <AnimatedReveal variant="right">
              <GridPanel className="grid h-full content-between gap-8 p-8">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#e0b12b]">Clear space</p>
                  <h3 className="mt-5 font-display text-5xl leading-none">12 stars, one route.</h3>
                  <p className="mt-5 text-sm leading-7 text-white/62">
                    La construction oppose la rigueur institutionnelle du logotype à une constellation qui évoque mouvement, distance et expansion.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[0, 1, 2, 3, 4, 5].map((item) => (
                    <span key={item} className="h-12 rounded-full border border-[#e0b12b]/30 bg-[#e0b12b]/10" />
                  ))}
                </div>
              </GridPanel>
            </AnimatedReveal>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {logoSystem.map((asset, index) => (
              <AnimatedReveal key={asset.label} delay={index * 0.05} variant="panel">
                <ForsouthAssetFrame src={asset.src} alt={asset.label} label={asset.label} caption={asset.caption} aspect="square" contain />
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Typography exhibit"
            title="Trajan Pro 3 et TheMix structurent un langage d’autorité contemporaine."
            body="La typographie devient un outil de perception : Trajan installe une verticalité institutionnelle, TheMix apporte rythme, précision et lisibilité pour les supports de conseil."
          />

          <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
            <AnimatedReveal variant="left">
              <GridPanel className="p-8">
                <p className="text-[11px] uppercase tracking-[0.32em] text-[#e0b12b]">Trajan Pro 3</p>
                <p className="mt-8 font-display text-[clamp(4rem,10vw,9rem)] leading-[0.78] text-white">Fore<br />sight</p>
                <div className="mt-8 grid grid-cols-4 gap-2 text-[10px] uppercase tracking-[0.18em] text-white/42">
                  <span>North</span>
                  <span>South</span>
                  <span>Europe</span>
                  <span>LATAM</span>
                </div>
              </GridPanel>
            </AnimatedReveal>
            <AnimatedReveal variant="right">
              <GridPanel className="p-8">
                <p className="text-[11px] uppercase tracking-[0.32em] text-[#e0b12b]">TheMix</p>
                <div className="mt-8 space-y-6">
                  <p className="text-4xl font-semibold leading-tight">Strategic diagnostics for market entry.</p>
                  <p className="max-w-lg text-base leading-8 text-white/64">
                    Partner intelligence, structured development, cross-market coherence and institutional communication.
                  </p>
                  <div className="grid gap-2 text-xs uppercase tracking-[0.2em] text-white/45">
                    <span>Baseline grid / 8 pt rhythm</span>
                    <span>Executive readability</span>
                    <span>Editorial density</span>
                  </div>
                </div>
              </GridPanel>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#e0b12b] py-20 text-[#11131b] sm:py-28">
        <Container className="space-y-10">
          <AnimatedReveal className="grid gap-4 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#11131b]/62">Color narrative</p>
              <h2 className="mt-4 font-display text-5xl leading-none sm:text-6xl lg:text-7xl">Gold to Deep Blue.</h2>
            </div>
            <p className="max-w-3xl text-base leading-8 text-[#11131b]/72">
              La transition entre Forsouth Gold #e0b12b et Forsouth Deep Blue #11131b devient une métaphore visuelle : passer d’un signal à une carte, d’une intuition à une stratégie, de l’Europe vers LATAM.
            </p>
          </AnimatedReveal>
          <AnimatedReveal variant="rise">
            <div className="grid min-h-[24rem] overflow-hidden rounded-[2rem] border border-[#11131b]/15 bg-[linear-gradient(125deg,#e0b12b_0%,#b88735_28%,#34445b_62%,#11131b_100%)] p-8 shadow-[0_28px_90px_rgba(17,19,27,0.22)] lg:grid-cols-3">
              <div className="self-start">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#11131b]/58">Forsouth Gold</p>
                <p className="mt-3 font-display text-5xl">#e0b12b</p>
              </div>
              <div className="self-center text-center text-white">
                <p className="font-display text-6xl leading-none">Navigation</p>
                <p className="mt-4 text-sm uppercase tracking-[0.24em] text-white/58">foresight / bridge / expansion</p>
              </div>
              <div className="self-end text-right text-white">
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/58">Forsouth Deep Blue</p>
                <p className="mt-3 font-display text-5xl">#11131b</p>
              </div>
            </div>
          </AnimatedReveal>
          <AnimatedReveal variant="rise">
            <ForsouthAssetFrame
              src={`${assetBase}/brand/forsouth-colors.jpg`}
              alt="Forsouth color system"
              label="Color system board"
              caption="Le board couleur réel complète la narration : tonalités corporate, or stratégique et profondeur institutionnelle."
              aspect="wide"
            />
          </AnimatedReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Photography atmosphere"
            title="La constellation devient un espace de prévoyance."
            body="Les images ne sont pas traitées comme une galerie. Elles créent des respirations cinématiques qui évoquent navigation, lecture des signaux et expansion internationale."
          />
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <AnimatedReveal variant="left">
              <ForsouthAssetFrame src={constellationImages[0].src} alt={constellationImages[0].label} label={constellationImages[0].label} caption={constellationImages[0].caption} aspect="wide" />
            </AnimatedReveal>
            <AnimatedReveal variant="right" className="grid gap-5">
              {constellationImages.slice(1, 3).map((asset) => (
                <ForsouthAssetFrame key={asset.src} src={asset.src} alt={asset.label} label={asset.label} caption={asset.caption} aspect="landscape" />
              ))}
            </AnimatedReveal>
          </div>
          <AnimatedReveal variant="rise">
            <ForsouthAssetFrame src={constellationImages[3].src} alt={constellationImages[3].label} label={constellationImages[3].label} caption={constellationImages[3].caption} aspect="wide" />
          </AnimatedReveal>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-[#0d111a] py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Iconography system"
            title="Une iconographie documentée comme un manuel de marque."
            body="Les icônes traduisent les offres et les étapes de conseil avec un niveau de précision cohérent : même grille, même poids visuel, même retenue corporate."
          />
          <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
            <AnimatedReveal variant="left">
              <ForsouthAssetFrame
                src={`${assetBase}/brand/forsouth-icons.jpg`}
                alt="Forsouth iconography system"
                label="Iconography board"
                caption="Le board réel montre la logique d’icônes et la continuité avec l’étoile."
                aspect="landscape"
              />
            </AnimatedReveal>
            <AnimatedReveal variant="right">
              <GridPanel className="grid h-full gap-4 p-6 sm:grid-cols-2">
                {iconCards.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-[1rem] border border-white/10 bg-[#11131b]/60 p-5">
                      <div className="grid h-12 w-12 place-items-center rounded-full border border-[#e0b12b]/30 bg-[#e0b12b]/10">
                        <Icon className="h-5 w-5 text-[#e0b12b]" />
                      </div>
                      <p className="mt-5 text-sm uppercase tracking-[0.2em] text-white/62">{item.title}</p>
                    </div>
                  );
                })}
              </GridPanel>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Applications"
            title="Des supports business composés comme des preuves de système."
            body="LinkedIn, cartes et one pager ne sont pas empilés : ils montrent comment l’identité organise les points de contact, du premier signal digital au document stratégique."
          />
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <AnimatedReveal variant="left">
              <ForsouthAssetFrame src={applications[0].src} alt={applications[0].label} label={applications[0].label} caption={applications[0].caption} aspect={applications[0].aspect} />
            </AnimatedReveal>
            <AnimatedReveal variant="right">
              <ForsouthAssetFrame src={applications[1].src} alt={applications[1].label} label={applications[1].label} caption={applications[1].caption} aspect={applications[1].aspect} />
            </AnimatedReveal>
          </div>
          <div className="grid gap-5 lg:grid-cols-[0.8fr_0.8fr_1.1fr]">
            {applications.slice(2).map((asset, index) => (
              <AnimatedReveal key={asset.label} delay={index * 0.05} variant="panel">
                <ForsouthAssetFrame src={asset.src} alt={asset.label} label={asset.label} caption={asset.caption} aspect={asset.aspect} />
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#101723] py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Website culmination"
            title="Le site devient la continuité éditoriale du système."
            body="L’expérience web reprend la structure du conseil : hiérarchie dense mais claire, typographie stable, contraste premium, et une direction visuelle qui fait le lien entre stratégie et présence digitale."
          />
          <AnimatedReveal variant="panel">
            <GridPanel className="p-4 sm:p-6 lg:p-8">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#05070a] p-3 shadow-2xl">
                <div className="mb-3 flex gap-2 px-2">
                  <span className="h-3 w-3 rounded-full bg-[#e0b12b]" />
                  <span className="h-3 w-3 rounded-full bg-white/28" />
                  <span className="h-3 w-3 rounded-full bg-white/18" />
                </div>
                <ForsouthAssetFrame
                  src={`${assetBase}/website/website-landing-page.jpg`}
                  alt="Forsouth Advisory website landing page"
                  label="Website landing page"
                  caption="La landing page réelle est présentée comme l’aboutissement digital de l’identité."
                  aspect="wide"
                />
              </div>
            </GridPanel>
          </AnimatedReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <AnimatedReveal variant="panel">
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(224,177,43,0.16),rgba(255,255,255,0.035))] p-8 text-center lg:p-12">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#e0b12b]">Final impact</p>
              <h2 className="mx-auto mt-5 max-w-5xl font-display text-4xl leading-none sm:text-5xl lg:text-6xl">
                Une identité stratégique, construite pour créer de la confiance avant même le premier échange.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/68">
                Forsouth. Advisory devient un système éditorial complet : logo, typographie, couleur, photographie, iconographie, business assets et website se répondent pour exprimer méthode, guidance et expansion internationale.
              </p>
              <div className="mt-8 flex justify-center">
                <ButtonLink href="/projects" variant="ghost">Voir les autres projets</ButtonLink>
              </div>
            </div>
          </AnimatedReveal>
        </Container>
      </section>
    </article>
  );
}
