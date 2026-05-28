import { Award, Factory, Flame, Mountain, Pizza, ShieldCheck, Sparkles, Utensils } from "lucide-react";

import { BrannerAssetFrame } from "@/components/projects/branner/branner-asset-frame";
import { ProjectMetadata } from "@/components/projects/project-metadata";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { Project } from "@/types";

type BrannerCaseStudyProps = {
  project: Project;
};

const assetBase = "/projects/branner";

const brandConcept = [
  {
    title: "Feu & cuisson",
    body: "Une identité construite autour de la chaleur, de la pizza au feu de bois et du plaisir produit.",
    icon: Flame,
  },
  {
    title: "Fabrication française",
    body: "Un territoire crédible pour valoriser l’industrie locale, les matériaux et la qualité de conception.",
    icon: Factory,
  },
  {
    title: "Convivialité",
    body: "Une marque qui parle de partage, de cuisine extérieure et de moments familiaux sans perdre son niveau premium.",
    icon: Utensils,
  },
];

const colors = [
  { name: "Orange feu", value: "#ee613b", note: "énergie / chaleur" },
  { name: "Jaune cuisson", value: "#f8a529", note: "convivialité / four" },
  { name: "Noir", value: "#111111", note: "solidité / premium" },
  { name: "Blanc", value: "#ffffff", note: "clarté / supports propres" },
];

const printAssets = [
  {
    src: `${assetBase}/print/branner-kakemono.jpg`,
    label: "Kakémono salon",
    caption: "Un support événementiel vertical pour installer la marque en contexte salon.",
    aspect: "portrait" as const,
  },
  {
    src: `${assetBase}/print/branner-launch-support-01.jpg`,
    label: "Support de lancement 01",
    caption: "Communication de lancement orientée produit, chaleur et crédibilité commerciale.",
    aspect: "landscape" as const,
  },
  {
    src: `${assetBase}/print/branner-launch-support-02.jpg`,
    label: "Support de lancement 02",
    caption: "Déclinaison print pour renforcer la cohérence de marque sur les points de contact.",
    aspect: "landscape" as const,
  },
];

const photography = [
  {
    src: `${assetBase}/photography/branner-photo-01.jpg`,
    label: "Feu de bois",
    caption: "La chaleur comme matière visuelle centrale.",
  },
  {
    src: `${assetBase}/photography/branner-photo-02.jpg`,
    label: "Produit & acier",
    caption: "Une direction photo qui valorise la fabrication et la robustesse.",
  },
  {
    src: `${assetBase}/photography/branner-photo-03.jpg`,
    label: "Pizza & partage",
    caption: "Le produit replacé dans une scène conviviale et accessible.",
  },
  {
    src: `${assetBase}/photography/branner-photo-04.jpg`,
    label: "Atelier",
    caption: "Une ambiance de manufacture française, technique et humaine.",
  },
];

const websiteScreens = [
  {
    src: `${assetBase}/website/branner-home.jpg`,
    label: "Homepage",
    caption: "Un site vitrine centré sur le produit, la chaleur et la preuve de fabrication.",
    aspect: "wide" as const,
  },
  {
    src: `${assetBase}/website/branner-story.jpg`,
    label: "Page Notre Histoire",
    caption: "Une narration éditoriale qui transforme l’histoire de la marque en expérience claire.",
    aspect: "landscape" as const,
  },
  {
    src: `${assetBase}/website/branner-mobile.jpg`,
    label: "Mobile",
    caption: "Une version mobile pensée pour conserver le rythme visuel et la lisibilité produit.",
    aspect: "mobile" as const,
  },
  {
    src: `${assetBase}/website/branner-interface-01.jpg`,
    label: "Interface web",
    caption: "Un système UI cohérent avec les codes couleur et le storytelling produit.",
    aspect: "landscape" as const,
  },
];

const mockups = [
  {
    src: `${assetBase}/mockups/branner-product-mockup.jpg`,
    label: "Product mockup",
    caption: "Projection produit pour donner du poids à la marque et à son univers.",
    aspect: "landscape" as const,
  },
  {
    src: `${assetBase}/mockups/branner-event-mockup.jpg`,
    label: "Event mockup",
    caption: "Mise en situation salon pour valider l’impact des supports événementiels.",
    aspect: "landscape" as const,
  },
  {
    src: `${assetBase}/mockups/branner-web-mockup.jpg`,
    label: "Web mockup",
    caption: "Présentation de l’expérience digitale dans un format plus premium.",
    aspect: "landscape" as const,
  },
];

const history = [
  {
    date: "Printemps / été 2000",
    title: "Une passion familiale",
    body: "Le père de Wilson est pizzaiolo. Les soirées pizzas nourrissent une culture du partage, de la cuisson et de la convivialité.",
    icon: Pizza,
  },
  {
    date: "Hiver 2012",
    title: "L’intuition produit",
    body: "Wilson questionne l’usage domestique : pourquoi les soirées pizzas ne sont-elles pas aussi simples et répandues que les barbecues ?",
    icon: Sparkles,
  },
  {
    date: "Été 2015",
    title: "Industrie & rencontre",
    body: "Son intérêt pour l’industrie métallique se précise. Il rencontre Sandra, avec qui il partage une passion pour la cuisine extérieure.",
    icon: Factory,
  },
  {
    date: "2017–2019",
    title: "L’expérience pizzaiolo",
    body: "Le travail en pizzeria révèle l’intérêt des fours professionnels, notamment la gestion du bois sur le côté.",
    icon: Flame,
  },
  {
    date: "Janvier 2020",
    title: "L’idée Branner",
    body: "Wilson et Sandra imaginent un four à bois grand public aussi pratique qu’un four professionnel, accompagné de contenus pédagogiques.",
    icon: Utensils,
  },
  {
    date: "Mars 2020",
    title: "La conception commence",
    body: "L’objectif est clair : créer le four à pizza à bois le plus simple à utiliser du marché.",
    icon: Mountain,
  },
  {
    date: "Août 2022",
    title: "Industrialisation française",
    body: "Après plusieurs prototypes, le four est prêt à être industrialisé en France. Branner devient une manufacture française pionnière.",
    icon: Factory,
  },
  {
    date: "Septembre 2022",
    title: "Protection de la marque",
    body: "Dépôt des brevets, protection du modèle et dépôt de la marque Branner.",
    icon: ShieldCheck,
  },
  {
    date: "Avril 2023",
    title: "Commercialisation",
    body: "Le lancement commercial confirme l’intérêt du marché pour un four pratique, français et innovant.",
    icon: Sparkles,
  },
  {
    date: "Mai 2024",
    title: "Concours Lépine",
    body: "Branner remporte la médaille d’argent grâce à son système de combustion innovant.",
    icon: Award,
  },
  {
    date: "Juillet 2024",
    title: "Origine France Garantie",
    body: "La certification valorise fabrication locale, matériaux de qualité, partenaires français et savoir-faire industriel.",
    icon: ShieldCheck,
  },
  {
    date: "Mars 2025",
    title: "Création de l’atelier",
    body: "Une étape clé vers l’indépendance industrielle et la démocratisation de la vraie pizza au feu de bois fabriquée en France.",
    icon: Factory,
  },
];

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
      <p className="text-[11px] uppercase tracking-[0.34em] text-[#ee613b]">{eyebrow}</p>
      <h2 className="font-display text-4xl leading-none text-white sm:text-5xl lg:text-6xl">{title}</h2>
      <p className="mx-auto max-w-3xl text-base leading-8 text-white/68">{body}</p>
    </AnimatedReveal>
  );
}

export function BrannerCaseStudy({ project }: BrannerCaseStudyProps) {
  return (
    <article className="bg-[#100904] text-white">
      <section className="relative overflow-hidden pb-20 pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_16%,rgba(248,165,41,0.24),transparent_22%),linear-gradient(135deg,#100904_0%,#21110a_46%,#7a2a16_76%,#ee613b_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#100904] to-transparent" />
        <Container className="relative grid min-h-[74vh] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <AnimatedReveal variant="left" className="space-y-8">
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.34em] text-white/52">{project.category}</p>
              <h1 className="font-display text-6xl leading-none text-white sm:text-7xl lg:text-8xl">Branner</h1>
              <p className="max-w-3xl text-2xl font-semibold leading-tight text-[#f8a529] sm:text-3xl">
                Brand identity and digital presence for a French home pizza oven manufacture.
              </p>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/74">
              Une marque produit chaude, industrielle et conviviale, pensée pour rendre la pizza au feu de bois plus accessible à la maison.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/projects" variant="ghost">Retour aux projets</ButtonLink>
              <ButtonLink href="/contact" variant="secondary" className="border-white/12 bg-white text-ink">
                Discuter d’une marque produit
              </ButtonLink>
            </div>
          </AnimatedReveal>

          <AnimatedReveal variant="panel" delay={0.08}>
            <BrannerAssetFrame
              src={`${assetBase}/mockups/branner-product-mockup.jpg`}
              alt="Branner product mockup"
              label="Hero product mockup"
              caption="Une présence produit chaude et premium, prête à accueillir les visuels finaux."
              aspect="landscape"
            />
          </AnimatedReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.65fr]">
          <AnimatedReveal variant="left" className="space-y-8">
            <div className="space-y-5">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#ee613b]">Project overview</p>
              <h2 className="font-display text-4xl leading-none sm:text-5xl lg:text-6xl">
                Une identité produit pour une manufacture française pionnière.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-white/70">{project.excerpt}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#f8a529]/70">{metric.label}</p>
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

      <section className="border-y border-white/10 bg-[#180d07] py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Brand concept"
            title="Feu, fabrication française et convivialité comme territoire de marque."
            body="Branner devait se positionner comme une marque produit crédible : assez chaude pour parler de pizza, assez industrielle pour parler de fabrication, assez premium pour soutenir l’innovation."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {brandConcept.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedReveal key={item.title} delay={index * 0.06} variant="panel">
                  <div className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-6">
                    <Icon className="h-6 w-6 text-[#f8a529]" />
                    <h3 className="mt-5 font-display text-3xl">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/64">{item.body}</p>
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
            eyebrow="Logo system"
            title="Un signe emblématique entre flamme, montagne et typographie fusionnée."
            body="Le logo Branner associe chaleur, cuisson, robustesse et territoire. La silhouette de flamme rejoint une silhouette de montagne pour construire un symbole à la fois produit, artisanal et mémorisable."
          />
          <div className="grid gap-5 lg:grid-cols-4">
            {[
              { src: `${assetBase}/logo/branner-logo-main.svg`, label: "Logo officiel", aspect: "landscape" as const },
              { src: `${assetBase}/logo/branner-symbol.svg`, label: "Symbole", aspect: "square" as const },
              { src: `${assetBase}/logo/branner-logo-black.svg`, label: "Version noire", aspect: "landscape" as const },
              { src: `${assetBase}/logo/branner-logo-white.png`, label: "Version blanche", aspect: "landscape" as const },
            ].map((asset, index) => (
              <AnimatedReveal key={asset.label} delay={index * 0.05} variant="panel">
                <BrannerAssetFrame
                  src={asset.src}
                  alt={asset.label}
                  label={asset.label}
                  caption="Déclinaison préparée pour les supports print, web et événementiels."
                  aspect={asset.aspect}
                  contain
                />
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f8efe4] py-20 text-[#111111] sm:py-28">
        <Container className="space-y-12">
          <AnimatedReveal className="mx-auto grid max-w-5xl gap-4 text-center">
            <p className="text-[11px] uppercase tracking-[0.34em] text-[#ee613b]">Color system</p>
            <h2 className="font-display text-4xl leading-none sm:text-5xl lg:text-6xl">Une palette directe : feu, cuisson, contraste et clarté.</h2>
            <p className="mx-auto max-w-3xl text-base leading-8 text-[#222]/70">
              Le système couleur reste simple, impactant et facilement déclinable sur print, web et supports salon.
            </p>
          </AnimatedReveal>
          <div className="grid gap-4 lg:grid-cols-4">
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
            <BrannerAssetFrame
              src={`${assetBase}/brand/branner-colors.jpg`}
              alt="Branner color system"
              label="Brand color board"
              caption="Board préparé pour accueillir la palette et les règles d’usage finales."
              aspect="wide"
            />
          </AnimatedReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Visual language"
            title="Chaleur, matière, feu, pizza et acier comme langage visuel."
            body="La direction photo et graphique relie la convivialité de la pizza à la précision d’un produit fabriqué en France. L’univers reste accessible, mais toujours tenu."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {photography.map((asset, index) => (
              <AnimatedReveal key={asset.label} delay={index * 0.05} variant="panel">
                <BrannerAssetFrame src={asset.src} alt={asset.label} label={asset.label} caption={asset.caption} aspect="portrait" />
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#180d07] py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Print & event applications"
            title="Des supports de lancement conçus pour salons, vente et crédibilité produit."
            body="Le kakémono, les documents commerciaux et les supports de lancement prolongent le langage de marque dans des contextes concrets : salon, démonstration, contact commercial."
          />
          <div className="grid gap-5 lg:grid-cols-[0.65fr_1fr_1fr]">
            {printAssets.map((asset, index) => (
              <AnimatedReveal key={asset.label} delay={index * 0.06} variant="panel">
                <BrannerAssetFrame src={asset.src} alt={asset.label} label={asset.label} caption={asset.caption} aspect={asset.aspect} />
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Notre Histoire"
            title="Une timeline éditoriale pour transformer l’origine produit en récit de marque."
            body="L’histoire de Branner est structurée comme une progression : passion familiale, intuition produit, conception, industrialisation française, reconnaissance et atelier."
          />
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-[#ee613b] via-[#f8a529] to-transparent md:block" />
            <div className="grid gap-5">
              {history.map((item, index) => {
                const Icon = item.icon;
                return (
                  <AnimatedReveal key={`${item.date}-${item.title}`} delay={index * 0.035} variant={index % 2 === 0 ? "left" : "right"}>
                    <div className="relative grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5 md:ml-12 md:grid-cols-[0.32fr_1fr]">
                      <div className="absolute -left-[3.2rem] top-6 hidden h-9 w-9 place-items-center rounded-full border border-[#f8a529]/40 bg-[#180d07] md:grid">
                        <Icon className="h-4 w-4 text-[#f8a529]" />
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.24em] text-[#f8a529]">{item.date}</p>
                        <h3 className="mt-2 font-display text-3xl">{item.title}</h3>
                      </div>
                      <p className="text-sm leading-7 text-white/66">{item.body}</p>
                    </div>
                  </AnimatedReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f8efe4] py-20 text-[#111111] sm:py-28">
        <Container className="space-y-12">
          <AnimatedReveal className="mx-auto grid max-w-5xl gap-4 text-center">
            <p className="text-[11px] uppercase tracking-[0.34em] text-[#ee613b]">Website design</p>
            <h2 className="font-display text-4xl leading-none sm:text-5xl lg:text-6xl">Une présence digitale qui relie produit, histoire et preuve de fabrication.</h2>
            <p className="mx-auto max-w-3xl text-base leading-8 text-[#222]/70">
              Le site vitrine intègre la charte dans une expérience claire : homepage, page histoire, version mobile, interface produit et défilement photo.
            </p>
          </AnimatedReveal>
          <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
            <AnimatedReveal variant="left">
              <BrannerAssetFrame
                src={websiteScreens[0].src}
                alt={websiteScreens[0].label}
                label={websiteScreens[0].label}
                caption={websiteScreens[0].caption}
                aspect={websiteScreens[0].aspect}
              />
            </AnimatedReveal>
            <div className="grid gap-5">
              {websiteScreens.slice(1).map((asset, index) => (
                <AnimatedReveal key={asset.label} delay={index * 0.05} variant="panel">
                  <BrannerAssetFrame src={asset.src} alt={asset.label} label={asset.label} caption={asset.caption} aspect={asset.aspect} />
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Mockups"
            title="Des projections propres pour valider l’identité en contexte produit, salon et web."
            body="Les mockups permettent de vérifier la cohérence du système sur les points de contact les plus importants : produit, événement, digital."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {mockups.map((asset, index) => (
              <AnimatedReveal key={asset.label} delay={index * 0.05} variant="panel">
                <BrannerAssetFrame src={asset.src} alt={asset.label} label={asset.label} caption={asset.caption} aspect={asset.aspect} />
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#180d07] py-20 sm:py-28">
        <Container>
          <AnimatedReveal variant="panel">
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(238,97,59,0.18),rgba(255,255,255,0.04))] p-8 text-center lg:p-12">
              <Flame className="mx-auto h-8 w-8 text-[#f8a529]" />
              <p className="mt-6 text-[11px] uppercase tracking-[0.34em] text-[#f8a529]">Final impact</p>
              <h2 className="mx-auto mt-5 max-w-5xl font-display text-4xl leading-none sm:text-5xl lg:text-6xl">
                Une marque produit complète, chaude et crédible.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/68">
                Branner relie identité visuelle, product storytelling, supports événementiels, page histoire et expérience web dans un système cohérent qui valorise l’innovation, la fabrication française et la convivialité.
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
