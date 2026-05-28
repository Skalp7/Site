import { BadgeCheck, Camera, FileText, Globe2, Leaf, Package, ShoppingBag, Sparkles } from "lucide-react";

import { ProjectMetadata } from "@/components/projects/project-metadata";
import { PurpleAssetFrame } from "@/components/projects/purple-global-commerce/purple-asset-frame";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { Project } from "@/types";

type PurpleCaseStudyProps = {
  project: Project;
};

const assetBase = "/projects/purple-global-commerce";

const strategyBlocks = [
  {
    title: "Vision générale",
    body: "Renforcer les liens entre différentes cultures à travers l’implémentation de nouveaux produits sur de nouveaux marchés.",
    icon: Globe2,
  },
  {
    title: "Vision 2024",
    body: "Implémenter le Ube en France comme nouveau produit phare de la gastronomie française.",
    icon: Sparkles,
  },
  {
    title: "Valeurs",
    body: "Dynamisme, innovation, professionnalisme, transparence et responsabilité comme base de lecture B2B.",
    icon: BadgeCheck,
  },
];

const colors = [
  { name: "Violet Ube", value: "#8171b8", note: "douceur / premium / produit" },
  { name: "Violet profond", value: "#6a176e", note: "richesse / intensité" },
  { name: "Noir", value: "#000000", note: "contraste / professionnalisme" },
  { name: "Vert naturel", value: "#6eaa37", note: "fraîcheur / produit" },
  { name: "Jaune chaud", value: "#f1bd49", note: "gourmandise / énergie" },
];

const logoAssets = [
  {
    src: `${assetBase}/logo/purple-logo-main.svg`,
    label: "Logo principal",
    caption: "Un signe pensé comme repère et invitation à découvrir un nouveau marché.",
  },
  {
    src: `${assetBase}/logo/purple-logo-variant-01.svg`,
    label: "Variante 01",
    caption: "Exploration autour du violet historique et d’une énergie plus contemporaine.",
  },
  {
    src: `${assetBase}/logo/purple-logo-variant-02.svg`,
    label: "Variante 02",
    caption: "Alternative au pic, plus orientée guide, mouvement et innovation alimentaire.",
  },
  {
    src: `${assetBase}/logo/purple-logo-black.svg`,
    label: "Version noire",
    caption: "Déclinaison B2B sobre pour documents commerciaux et usages premium.",
  },
  {
    src: `${assetBase}/logo/purple-logo-white.png`,
    label: "Version blanche",
    caption: "Version claire pensée pour fonds violets, packshots et supports premium.",
  },
];

const packagingAssets = [
  {
    src: `${assetBase}/packaging/purple-packaging-main.jpg`,
    label: "Packaging principal",
    caption: "Le pack repose sur la force de l’étiquette, claire et attractive.",
    aspect: "landscape" as const,
  },
  {
    src: `${assetBase}/packaging/purple-label-front.jpg`,
    label: "Étiquette recto",
    caption: "Format 4 x 6 pouces : impact, nom produit, couleur Ube et lecture commerciale.",
    aspect: "portrait" as const,
  },
  {
    src: `${assetBase}/packaging/purple-label-back.jpg`,
    label: "Étiquette verso",
    caption: "Format vertical 3 x 7 pouces : informations produit et structure B2B.",
    aspect: "portrait" as const,
  },
  {
    src: `${assetBase}/packaging/purple-packaging-detail-01.jpg`,
    label: "Détail packaging 01",
    caption: "Zoom sur la matière, la couleur et la hiérarchie d’information.",
    aspect: "square" as const,
  },
  {
    src: `${assetBase}/packaging/purple-packaging-detail-02.jpg`,
    label: "Détail packaging 02",
    caption: "Déclinaison du système visuel sur une lecture produit rapprochée.",
    aspect: "square" as const,
  },
];

const brochureAssets = [
  {
    src: `${assetBase}/brochure/purple-commercial-brochure-cover.jpg`,
    label: "Brochure cover",
    caption: "Une couverture pensée comme outil B2B de conviction autour du Ube.",
    aspect: "portrait" as const,
  },
  {
    src: `${assetBase}/brochure/purple-commercial-brochure-spread-01.jpg`,
    label: "Brochure spread 01",
    caption: "Goût, couleur et potentiel gastronomique structurés comme arguments commerciaux.",
    aspect: "landscape" as const,
  },
  {
    src: `${assetBase}/brochure/purple-commercial-brochure-spread-02.jpg`,
    label: "Brochure spread 02",
    caption: "Une analogie subtile avec Paris 2024 pour parler avantage concurrentiel et opportunité.",
    aspect: "landscape" as const,
  },
];

const productPhotos = [
  `${assetBase}/photography/purple-product-raw-01.jpg`,
  `${assetBase}/photography/purple-product-raw-02.jpg`,
  `${assetBase}/photography/purple-product-raw-03.jpg`,
];

const derivedProducts = [
  {
    src: `${assetBase}/derived-products/purple-drink-01.jpg`,
    label: "Boisson Ube",
    caption: "Une application visuelle crémeuse, colorée et immédiatement différenciante.",
    icon: Leaf,
  },
  {
    src: `${assetBase}/derived-products/purple-cake-01.jpg`,
    label: "Gâteau Ube",
    caption: "La couleur du produit devient un levier de désir et de reconnaissance.",
    icon: Sparkles,
  },
  {
    src: `${assetBase}/derived-products/purple-ice-cream-01.jpg`,
    label: "Glace Ube",
    caption: "Un usage dessert qui renforce le potentiel gourmand du produit.",
    icon: ShoppingBag,
  },
  {
    src: `${assetBase}/derived-products/purple-dessert-01.jpg`,
    label: "Dessert Ube",
    caption: "Une projection gastronomique premium, adaptée à plusieurs marchés.",
    icon: Package,
  },
];

const marketingAssets = [
  {
    src: `${assetBase}/marketing/purple-marketing-print-01.jpg`,
    label: "Marketing print",
    caption: "Support imprimé pour accompagner le discours commercial.",
  },
  {
    src: `${assetBase}/marketing/purple-marketing-digital-01.jpg`,
    label: "Marketing digital",
    caption: "Déclinaison digitale pour communiquer l’innovation produit.",
  },
  {
    src: `${assetBase}/marketing/purple-ecommerce-visual-01.jpg`,
    label: "E-commerce visual",
    caption: "Visuel commercial optimisé pour la lecture produit en ligne.",
  },
];

function getProjectSection(project: Project, title: string, fallback: string) {
  return project.sections.find((section) => section.title === title)?.body ?? fallback;
}

function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <AnimatedReveal className="mx-auto grid max-w-5xl gap-4 text-center">
      <p className="text-[11px] uppercase tracking-[0.34em] text-[#f1bd49]">{eyebrow}</p>
      <h2 className="font-display text-4xl leading-none text-white sm:text-5xl lg:text-6xl">{title}</h2>
      <p className="mx-auto max-w-3xl text-base leading-8 text-white/68">{body}</p>
    </AnimatedReveal>
  );
}

export function PurpleCaseStudy({ project }: PurpleCaseStudyProps) {
  const sectionBody = (title: string, fallback: string) => getProjectSection(project, title, fallback);

  return (
    <article className="overflow-hidden bg-[#130918] text-white">
      <section className="relative overflow-hidden pb-20 pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_16%,rgba(241,189,73,0.18),transparent_20%),radial-gradient(circle_at_78%_20%,rgba(110,170,55,0.18),transparent_18%),linear-gradient(135deg,#130918_0%,#35113f_42%,#6a176e_70%,#8171b8_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#130918] to-transparent" />
        <Container className="relative grid min-h-[74vh] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <AnimatedReveal variant="left" className="space-y-8">
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.34em] text-white/52">{project.category}</p>
              <h1 className="font-display text-6xl leading-none text-white sm:text-7xl lg:text-8xl">Purple Global Commerce</h1>
              <p className="max-w-3xl text-2xl font-semibold leading-tight text-[#f1bd49] sm:text-3xl">{project.shortPitch}</p>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/74">
              Une identité commerciale complète, pensée pour rendre un produit émergent lisible, désirable et crédible dans un contexte B2B.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/projects" variant="ghost">Retour aux projets</ButtonLink>
              <ButtonLink href="/contact" variant="secondary" className="border-white/12 bg-white text-ink">
                Discuter d’un projet B2B
              </ButtonLink>
            </div>
          </AnimatedReveal>

          <AnimatedReveal variant="panel" delay={0.08}>
            <PurpleAssetFrame
              src={`${assetBase}/packaging/purple-packaging-main.jpg`}
              alt="Purple Global Commerce packaging mockup"
              label="Hero packaging"
              caption="Packaging, étiquette et couleur Ube comme premier signal de marque."
              aspect="landscape"
            />
          </AnimatedReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.65fr]">
          <AnimatedReveal variant="left" className="space-y-8">
            <div className="space-y-5">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#f1bd49]">Project overview</p>
              <h2 className="font-display text-4xl leading-none sm:text-5xl lg:text-6xl">
                Structurer l’arrivée du Ube sur le marché français.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-white/70">{project.excerpt}</p>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {[
                { title: "Contexte", body: project.context },
                { title: "Ambition", body: project.objective },
                { title: "Système", body: project.solution },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#f1bd49]/70">{item.title}</p>
                  <p className="mt-4 text-sm leading-7 text-white/64">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#f1bd49]/70">{metric.label}</p>
                  <p className="mt-4 font-display text-3xl">{metric.value}</p>
                </div>
              ))}
            </div>
          </AnimatedReveal>
          <AnimatedReveal variant="right">
            <ProjectMetadata project={project} />
          </AnimatedReveal>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-[#1a0d22] py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Brand strategy"
            title="Une marque B2B jeune, dynamique et crédible autour d’un produit à fort potentiel."
            body={sectionBody(
              "Brand strategy",
              "Purple Global Commerce is positioned as a young international commerce company with France and Philippines presence, bringing Ube to the French market through innovation, professionalism, transparency and responsibility.",
            )}
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {strategyBlocks.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedReveal key={item.title} delay={index * 0.06} variant="panel">
                  <div className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-6">
                    <Icon className="h-6 w-6 text-[#f1bd49]" />
                    <h3 className="mt-5 font-display text-3xl">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/64">{item.body}</p>
                  </div>
                </AnimatedReveal>
              );
            })}
          </div>
          <AnimatedReveal variant="rise">
            <PurpleAssetFrame
              src={`${assetBase}/brand/purple-brand-board.jpg`}
              alt="Purple Global Commerce brand board"
              label="Brand board"
              caption="Synthèse visuelle de l’univers : Ube, confiance B2B, ouverture internationale et énergie commerciale."
              aspect="wide"
            />
          </AnimatedReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Logo exploration"
            title="Un signe d’orientation pour guider un nouveau produit vers un nouveau marché."
            body={sectionBody(
              "Logo exploration",
              "The logo exploration balances a premium B2B communication tone with a clear product story, creating a mark that feels international, confident and accessible.",
            )}
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {logoAssets.map((asset, index) => (
              <AnimatedReveal key={asset.label} delay={index * 0.05} variant="panel">
                <PurpleAssetFrame
                  src={asset.src}
                  alt={asset.label}
                  label={asset.label}
                  caption={asset.caption}
                  aspect="square"
                  contain
                />
              </AnimatedReveal>
            ))}
          </div>
          <AnimatedReveal variant="rise">
            <PurpleAssetFrame
              src={`${assetBase}/brand/purple-logo-exploration.jpg`}
              alt="Purple Global Commerce logo exploration"
              label="Logo exploration board"
              caption="Board de recherche pour accueillir les pistes autour du guide, du violet et de l’équilibre entre énergie et confiance."
              aspect="wide"
            />
          </AnimatedReveal>
        </Container>
      </section>

      <section className="bg-[#f7f1e8] py-20 text-[#111111] sm:py-28">
        <Container className="space-y-12">
          <AnimatedReveal className="mx-auto grid max-w-5xl gap-4 text-center">
            <p className="text-[11px] uppercase tracking-[0.34em] text-[#6a176e]">Color system</p>
            <h2 className="font-display text-4xl leading-none sm:text-5xl lg:text-6xl">Une palette Ube expressive, contrôlée et crédible en B2B.</h2>
            <p className="mx-auto max-w-3xl text-base leading-8 text-[#222]/70">
              {sectionBody(
                "Color system",
                "The palette combines #8171b8, #6a176e, #000000, #6eaa37 and #f1bd49 to express Ube richness, freshness, contrast, natural origin and commercial warmth.",
              )}
            </p>
          </AnimatedReveal>
          <div className="grid gap-4 lg:grid-cols-5">
            {colors.map((color, index) => (
              <AnimatedReveal key={color.value} delay={index * 0.04} variant="panel">
                <div className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-white">
                  <div className="h-36" style={{ backgroundColor: color.value }} />
                  <div className="grid gap-2 p-5">
                    <p className="font-display text-2xl">{color.name}</p>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#222]/52">{color.value}</p>
                    <p className="text-sm leading-6 text-[#222]/62">{color.note}</p>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
          <AnimatedReveal variant="rise">
            <PurpleAssetFrame
              src={`${assetBase}/brand/purple-colors.jpg`}
              alt="Purple Global Commerce color system"
              label="Color board"
              caption="Palette inspirée du Ube, pensée pour packaging, brochure et supports digitaux."
              aspect="wide"
            />
          </AnimatedReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Packaging system"
            title="L’étiquette porte toute l’identité produit."
            body={sectionBody(
              "Packaging system",
              "The packaging system structures a front label at 4x6 inches and a vertical back label at 3x7 inches, designed for clarity, shelf impact and regulatory confidence.",
            )}
          />
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.55fr_0.55fr]">
            {packagingAssets.slice(0, 3).map((asset, index) => (
              <AnimatedReveal key={asset.label} delay={index * 0.06} variant="panel">
                <PurpleAssetFrame src={asset.src} alt={asset.label} label={asset.label} caption={asset.caption} aspect={asset.aspect} />
              </AnimatedReveal>
            ))}
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {packagingAssets.slice(3).map((asset, index) => (
              <AnimatedReveal key={asset.label} delay={index * 0.06} variant={index === 0 ? "left" : "right"}>
                <PurpleAssetFrame src={asset.src} alt={asset.label} label={asset.label} caption={asset.caption} aspect={asset.aspect} />
              </AnimatedReveal>
            ))}
          </div>
          <AnimatedReveal variant="rise">
            <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 md:grid-cols-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#f1bd49]">Recto</p>
                <p className="mt-3 font-display text-3xl">4 x 6 pouces</p>
                <p className="mt-2 text-sm text-white/62">10,16 cm x 15,24 cm</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#f1bd49]">Verso</p>
                <p className="mt-3 font-display text-3xl">3 x 7 pouces</p>
                <p className="mt-2 text-sm text-white/62">7,62 cm x 17,78 cm, format vertical</p>
              </div>
            </div>
          </AnimatedReveal>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-[#1a0d22] py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Commercial brochure"
            title="Une plaquette B2B pour transformer la couleur et le goût du Ube en opportunité de marché."
            body={sectionBody(
              "Commercial brochure",
              "The brochure presents Ube as an innovative ingredient for French buyers, combining origin, uses, product benefits and B2B arguments in a concise premium format.",
            )}
          />
          <div className="grid gap-5 lg:grid-cols-[0.65fr_1fr_1fr]">
            {brochureAssets.map((asset, index) => (
              <AnimatedReveal key={asset.label} delay={index * 0.06} variant="panel">
                <PurpleAssetFrame src={asset.src} alt={asset.label} label={asset.label} caption={asset.caption} aspect={asset.aspect} />
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Product photography"
            title="Montrer la matière du Ube : couleur, texture et potentiel gourmand."
            body={sectionBody(
              "Product photography",
              "Product photography reinforces professionalism and transparency through clean compositions, precise color rendering and appetite-focused visual details.",
            )}
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {productPhotos.map((src, index) => (
              <AnimatedReveal key={src} delay={index * 0.05} variant="panel">
                <PurpleAssetFrame
                  src={src}
                  alt={`Purple product raw ${index + 1}`}
                  label={`Photo produit 0${index + 1}`}
                  caption="Texture, couleur et matière comme base de product storytelling."
                  aspect="portrait"
                />
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f7f1e8] py-20 text-[#111111] sm:py-28">
        <Container className="space-y-12">
          <AnimatedReveal className="mx-auto grid max-w-5xl gap-4 text-center">
            <p className="text-[11px] uppercase tracking-[0.34em] text-[#6a176e]">Derived product visuals</p>
            <h2 className="font-display text-4xl leading-none sm:text-5xl lg:text-6xl">Boissons, gâteaux, glaces : le Ube comme territoire gastronomique extensible.</h2>
            <p className="mx-auto max-w-3xl text-base leading-8 text-[#222]/70">
              {sectionBody(
                "Derived products",
                "Derived product visuals show how Ube can extend into culinary applications, helping buyers understand its value beyond the raw ingredient.",
              )}
            </p>
          </AnimatedReveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {derivedProducts.map((asset, index) => {
              const Icon = asset.icon;
              return (
                <AnimatedReveal key={asset.label} delay={index * 0.05} variant="panel">
                  <div className="rounded-[2rem] border border-black/10 bg-white p-3 shadow-[0_24px_70px_rgba(23,11,29,0.12)]">
                    <PurpleAssetFrame src={asset.src} alt={asset.label} label={asset.label} caption={asset.caption} aspect="square" />
                    <div className="flex items-center gap-3 px-2 py-4">
                      <Icon className="h-5 w-5 text-[#6eaa37]" />
                      <p className="text-sm font-medium text-[#222]/72">{asset.label}</p>
                    </div>
                  </div>
                </AnimatedReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Marketing & digital applications"
            title="Des supports commerciaux pour relier packaging, B2B et e-commerce."
            body={sectionBody(
              "Marketing applications",
              "Marketing applications translate the identity into print and digital assets, supporting responsible communication, market education and commercial launch needs.",
            )}
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {marketingAssets.map((asset, index) => (
              <AnimatedReveal key={asset.label} delay={index * 0.05} variant="panel">
                <PurpleAssetFrame src={asset.src} alt={asset.label} label={asset.label} caption={asset.caption} aspect="landscape" />
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#1a0d22] py-20 sm:py-28">
        <Container>
          <AnimatedReveal variant="panel">
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(129,113,184,0.22),rgba(255,255,255,0.04))] p-8 text-center lg:p-12">
              <Package className="mx-auto h-8 w-8 text-[#f1bd49]" />
              <p className="mt-6 text-[11px] uppercase tracking-[0.34em] text-[#f1bd49]">Final impact</p>
              <h2 className="mx-auto mt-5 max-w-5xl font-display text-4xl leading-none sm:text-5xl lg:text-6xl">
                Une identité commerciale complète pour un produit émergent.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/68">
                {sectionBody(
                  "Final impact",
                  "The final system gives Purple Global Commerce a credible premium presence for introducing Ube in France while honoring its link with the Philippines.",
                )}
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
