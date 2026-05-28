import { Captions, Clapperboard, Film, Globe2, Layers3, Palette, Sparkles, Wand2 } from "lucide-react";

import { CultureAssetFrame } from "@/components/projects/culture-arabesque/culture-asset-frame";
import { ProjectMetadata } from "@/components/projects/project-metadata";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { Project } from "@/types";

type CultureCaseStudyProps = {
  project: Project;
};

const assetBase = "/projects/culture-arabesque";

const brandEvolution = [
  {
    title: "Continuité",
    body: "La refonte part de l’identité existante pour préserver la reconnaissance du festival et éviter une rupture artificielle.",
    icon: Layers3,
  },
  {
    title: "Lisibilité",
    body: "Le signe gagne en clarté pour fonctionner sur affiches, écrans, vidéos, sous-titres et formats sociaux.",
    icon: Sparkles,
  },
  {
    title: "Dialogue",
    body: "Le système visuel porte l’échange franco-allemand avec des accents subtils, sans devenir institutionnel ou patriotique.",
    icon: Globe2,
  },
];

const colors = [
  { name: "Bleu Arabesque", value: "#addae8", note: "culture / légèreté / modernité" },
  { name: "Noir", value: "#000000", note: "contraste / élégance / vidéo" },
  { name: "Blanc", value: "#ffffff", note: "respiration / accessibilité" },
  { name: "France", value: "#0055a4", note: "accent culturel subtil" },
  { name: "Allemagne", value: "#ffce00", note: "accent événementiel discret" },
];

const logoAssets = [
  {
    src: `${assetBase}/logo/culture-arabesque-old-logo.png`,
    label: "Ancien logo",
    caption: "Point de départ de la continuité visuelle : préserver les repères déjà connus.",
    aspect: "square" as const,
  },
  {
    src: `${assetBase}/logo/culture-arabesque-new-logo.svg`,
    label: "Logo refondu",
    caption: "Une réinterprétation contemporaine, plus lisible et plus flexible.",
    aspect: "square" as const,
  },
  {
    src: `${assetBase}/logo/culture-arabesque-logo-black.svg`,
    label: "Version noire",
    caption: "Version sobre pour documents, génériques et supports clairs.",
    aspect: "square" as const,
  },
  {
    src: `${assetBase}/logo/culture-arabesque-logo-white.png`,
    label: "Version blanche",
    caption: "Version pensée pour fonds vidéo, séquences sombres et overlays motion.",
    aspect: "square" as const,
  },
];

const brandBoards = [
  {
    src: `${assetBase}/brand/culture-arabesque-brand-board.jpg`,
    label: "Brand board",
    caption: "Synthèse de l’univers : culture, échange, modernité, bleu identitaire et respiration éditoriale.",
    aspect: "wide" as const,
  },
  {
    src: `${assetBase}/brand/culture-arabesque-graphic-system.jpg`,
    label: "Graphic system",
    caption: "Grilles, hiérarchies, formes et principes d’habillage pour print, digital et vidéo.",
    aspect: "landscape" as const,
  },
];

const motionAssets = [
  {
    src: `${assetBase}/motion/intro-motion.mp4`,
    label: "Intro motion",
    caption: "Une ouverture fluide pour installer le festival et son ambiance culturelle.",
  },
  {
    src: `${assetBase}/motion/transition-motion.mp4`,
    label: "Interview transition",
    caption: "Des transitions sobres pour accompagner le dialogue entre intervenants.",
  },
  {
    src: `${assetBase}/motion/interview-overlay.mp4`,
    label: "Interview overlay",
    caption: "Questions, sous-titrage, traductions et informations intégrés au système graphique.",
  },
  {
    src: `${assetBase}/motion/outro-motion.mp4`,
    label: "Outro motion",
    caption: "Une fermeture élégante, cohérente avec l’identité audiovisuelle du festival.",
  },
];

const videoApplications = [
  {
    src: `${assetBase}/video/festival-video-01.jpg`,
    label: "Video frame 01",
    caption: "Capture pensée pour montrer rythme, habillage et lisibilité des contenus.",
  },
  {
    src: `${assetBase}/video/festival-video-02.jpg`,
    label: "Video frame 02",
    caption: "Une image plus éditoriale pour les séquences interview et dialogue.",
  },
  {
    src: `${assetBase}/video/festival-video-03.jpg`,
    label: "Timeline frame",
    caption: "Projection de montage pour introduire extraits, transitions et inserts traduits.",
  },
];

const communicationAssets = [
  {
    src: `${assetBase}/applications/festival-poster.jpg`,
    label: "Festival poster",
    caption: "Un support événementiel respirant, culturel et directement identifiable.",
    aspect: "portrait" as const,
  },
  {
    src: `${assetBase}/applications/social-post-01.jpg`,
    label: "Social post 01",
    caption: "Déclinaison digitale pour annoncer les contenus du festival.",
    aspect: "square" as const,
  },
  {
    src: `${assetBase}/applications/social-post-02.jpg`,
    label: "Social post 02",
    caption: "Variation sociale pour maintenir une présence visuelle cohérente.",
    aspect: "square" as const,
  },
  {
    src: `${assetBase}/applications/event-banner.jpg`,
    label: "Event banner",
    caption: "Bannière pensée pour les communications événementielles et plateformes partenaires.",
    aspect: "landscape" as const,
  },
];

const mockups = [
  {
    src: `${assetBase}/mockups/motion-mockup-01.jpg`,
    label: "Motion mockup 01",
    caption: "Mise en situation d’une séquence animée dans un player immersif.",
  },
  {
    src: `${assetBase}/mockups/motion-mockup-02.jpg`,
    label: "Motion mockup 02",
    caption: "Projection d’un habillage interview et de ses transitions graphiques.",
  },
  {
    src: `${assetBase}/mockups/festival-screen-mockup.jpg`,
    label: "Festival screen",
    caption: "Écran événementiel pour montrer l’adaptation de l’identité au contexte festival.",
  },
];

function getProjectSection(project: Project, title: string, fallback: string) {
  return project.sections.find((section) => section.title === title)?.body ?? fallback;
}

function SectionIntro({
  eyebrow,
  title,
  body,
  light = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  light?: boolean;
}) {
  return (
    <AnimatedReveal className="mx-auto grid max-w-5xl gap-4 text-center">
      <p className={light ? "text-[11px] uppercase tracking-[0.34em] text-[#0055a4]" : "text-[11px] uppercase tracking-[0.34em] text-[#addae8]"}>
        {eyebrow}
      </p>
      <h2 className={light ? "font-display text-4xl leading-none text-[#101216] sm:text-5xl lg:text-6xl" : "font-display text-4xl leading-none text-white sm:text-5xl lg:text-6xl"}>
        {title}
      </h2>
      <p className={light ? "mx-auto max-w-3xl text-base leading-8 text-[#101216]/68" : "mx-auto max-w-3xl text-base leading-8 text-white/68"}>{body}</p>
    </AnimatedReveal>
  );
}

export function CultureCaseStudy({ project }: CultureCaseStudyProps) {
  const sectionBody = (title: string, fallback: string) => getProjectSection(project, title, fallback);

  return (
    <article className="overflow-hidden bg-[#05070a] text-white">
      <section className="relative overflow-hidden pb-20 pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(173,218,232,0.34),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(255,206,0,0.13),transparent_20%),linear-gradient(135deg,#05070a_0%,#101820_44%,#addae8_100%)]" />
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#05070a] to-transparent" />

        <Container className="relative grid min-h-[74vh] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <AnimatedReveal variant="left" className="space-y-8">
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.34em] text-white/56">{project.category}</p>
              <h1 className="max-w-4xl font-display text-[clamp(4rem,8vw,8.6rem)] leading-[0.86] text-white">Culture Arabesque</h1>
              <p className="max-w-3xl text-2xl font-semibold leading-tight text-[#addae8] sm:text-3xl">{project.shortPitch}</p>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/72">
              Visual identity redesign and motion design system for a Franco-German cultural festival.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/projects" variant="ghost">Retour aux projets</ButtonLink>
              <ButtonLink href="/contact" variant="secondary" className="border-white/12 bg-white text-ink">
                Discuter d’un projet culturel
              </ButtonLink>
            </div>
          </AnimatedReveal>

          <AnimatedReveal variant="panel" delay={0.08}>
            <CultureAssetFrame
              src={`${assetBase}/mockups/festival-screen-mockup.jpg`}
              alt="Culture Arabesque motion screen mockup"
              label="Hero motion identity"
              caption="Logo, rythme vidéo et bleu culturel comme socle d’une identité audiovisuelle."
              aspect="landscape"
            />
          </AnimatedReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.65fr]">
          <AnimatedReveal variant="left" className="space-y-8">
            <div className="space-y-5">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#addae8]">Project overview</p>
              <h2 className="font-display text-4xl leading-none sm:text-5xl lg:text-6xl">Moderniser un festival sans effacer son héritage.</h2>
              <p className="max-w-3xl text-base leading-8 text-white/70">{project.excerpt}</p>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {[
                { title: "Contexte", body: project.context },
                { title: "Objectif", body: project.objective },
                { title: "Solution", body: project.solution },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#addae8]/75">{item.title}</p>
                  <p className="mt-4 text-sm leading-7 text-white/64">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#addae8]/75">{metric.label}</p>
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

      <section className="border-y border-white/10 bg-[#0b1117] py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Brand evolution"
            title="Une évolution respectueuse, pas une rupture."
            body={sectionBody(
              "Brand evolution",
              "La refonte est pensée comme une évolution : préserver les repères culturels existants tout en rendant l’identité plus lisible, contemporaine et adaptée aux usages digitaux.",
            )}
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {brandEvolution.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedReveal key={item.title} delay={index * 0.06} variant="panel">
                  <div className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-6">
                    <Icon className="h-6 w-6 text-[#addae8]" />
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
            eyebrow="Logo redesign"
            title="Un logo plus clair, plus flexible, prêt pour l’image animée."
            body={sectionBody(
              "Logo redesign",
              "Le logo devient une réinterprétation plus flexible et plus claire, capable de fonctionner en print, en digital et dans un système de motion design.",
            )}
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {logoAssets.map((asset, index) => (
              <AnimatedReveal key={asset.label} delay={index * 0.05} variant="panel">
                <CultureAssetFrame src={asset.src} alt={asset.label} label={asset.label} caption={asset.caption} aspect={asset.aspect} contain />
              </AnimatedReveal>
            ))}
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {brandBoards.map((asset, index) => (
              <AnimatedReveal key={asset.label} delay={index * 0.05} variant={index === 0 ? "left" : "right"}>
                <CultureAssetFrame src={asset.src} alt={asset.label} label={asset.label} caption={asset.caption} aspect={asset.aspect} />
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f6fbfd] py-20 text-[#101216] sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Color system"
            title="Un bleu culturel comme respiration principale."
            body={sectionBody(
              "Color system",
              "Le bleu #addae8 devient le liant identitaire principal, accompagné du noir, du blanc et d’accents franco-allemands utilisés avec subtilité.",
            )}
            light
          />
          <div className="grid gap-4 lg:grid-cols-5">
            {colors.map((color, index) => (
              <AnimatedReveal key={color.name} delay={index * 0.04} variant="panel">
                <div className="overflow-hidden rounded-[1.25rem] border border-black/10 bg-white shadow-[0_24px_70px_rgba(5,7,10,0.08)]">
                  <div className="h-36" style={{ backgroundColor: color.value }} />
                  <div className="grid gap-2 p-5">
                    <p className="font-display text-2xl">{color.name}</p>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#101216]/52">{color.value}</p>
                    <p className="text-sm leading-6 text-[#101216]/62">{color.note}</p>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
          <AnimatedReveal variant="rise">
            <CultureAssetFrame
              src={`${assetBase}/brand/culture-arabesque-colors.jpg`}
              alt="Culture Arabesque color system"
              label="Color board"
              caption="Bleu principal, noir, blanc et accents franco-allemands comme ponctuation subtile."
              aspect="wide"
            />
          </AnimatedReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Typographic & graphic language"
            title="Une grammaire éditoriale conçue pour bouger."
            body={sectionBody(
              "Typographic & graphic language",
              "La hiérarchie graphique, les grilles, les formes et les éléments d’interface créent une continuité visuelle entre supports éditoriaux, vidéo et événementiels.",
            )}
          />
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <AnimatedReveal variant="left">
              <div className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-6">
                <Palette className="h-6 w-6 text-[#addae8]" />
                <h3 className="mt-6 font-display text-4xl leading-none">Hiérarchie claire, rythme léger.</h3>
                <p className="mt-5 text-sm leading-7 text-white/64">
                  Le système repose sur des plans lisibles, des respirations généreuses et des éléments graphiques assez simples pour être animés avec fluidité.
                </p>
              </div>
            </AnimatedReveal>
            <AnimatedReveal variant="right">
              <CultureAssetFrame
                src={`${assetBase}/brand/culture-arabesque-graphic-system.jpg`}
                alt="Culture Arabesque graphic language"
                label="Graphic language"
                caption="Un vocabulaire visuel pensé pour passer naturellement du print au motion."
                aspect="wide"
              />
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-[#0b1117] py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Motion design system"
            title="Un véritable système graphique animé, pas une simple collection d’effets."
            body={sectionBody(
              "Motion design system",
              "Le système animé structure intros, transitions, questions interview, outro, sous-titrage, traductions et overlays dans un langage fluide, sobre et vivant.",
            )}
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {motionAssets.map((asset, index) => (
              <AnimatedReveal key={asset.label} delay={index * 0.05} variant="panel">
                <CultureAssetFrame src={asset.src} alt={asset.label} label={asset.label} caption={asset.caption} aspect="landscape" />
              </AnimatedReveal>
            ))}
          </div>
          <AnimatedReveal variant="rise">
            <div className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-6 md:grid-cols-4">
              {[
                { label: "Intro", icon: Film },
                { label: "Transitions", icon: Wand2 },
                { label: "Traductions", icon: Captions },
                { label: "Outro", icon: Clapperboard },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-[1rem] border border-white/10 bg-black/18 p-5">
                    <Icon className="h-5 w-5 text-[#addae8]" />
                    <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/58">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </AnimatedReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Video applications"
            title="Des emplacements vidéo prêts pour les extraits du festival."
            body={sectionBody(
              "Video applications",
              "Les applications vidéo prévoient des mockups, players immersifs, captures de timeline et extraits pour montrer le rythme audiovisuel du festival.",
            )}
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {videoApplications.map((asset, index) => (
              <AnimatedReveal key={asset.label} delay={index * 0.05} variant="panel">
                <CultureAssetFrame src={asset.src} alt={asset.label} label={asset.label} caption={asset.caption} aspect="landscape" />
              </AnimatedReveal>
            ))}
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {mockups.map((asset, index) => (
              <AnimatedReveal key={asset.label} delay={index * 0.05} variant="panel">
                <CultureAssetFrame src={asset.src} alt={asset.label} label={asset.label} caption={asset.caption} aspect="landscape" />
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f6fbfd] py-20 text-[#101216] sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Festival communication"
            title="Une identité événementielle complète, fluide et accessible."
            body={sectionBody(
              "Festival communication",
              "Les supports événementiels, affiches, formats sociaux et bannières prolongent la refonte avec une présence culturelle cohérente et accessible.",
            )}
            light
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {communicationAssets.map((asset, index) => (
              <AnimatedReveal key={asset.label} delay={index * 0.05} variant="panel">
                <CultureAssetFrame src={asset.src} alt={asset.label} label={asset.label} caption={asset.caption} aspect={asset.aspect} />
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#0b1117] py-20 sm:py-28">
        <Container>
          <AnimatedReveal variant="panel">
            <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(173,218,232,0.18),rgba(255,255,255,0.04))] p-8 text-center lg:p-12">
              <Clapperboard className="mx-auto h-8 w-8 text-[#addae8]" />
              <p className="mt-6 text-[11px] uppercase tracking-[0.34em] text-[#addae8]">Final impact</p>
              <h2 className="mx-auto mt-5 max-w-5xl font-display text-4xl leading-none sm:text-5xl lg:text-6xl">
                Une modernisation culturelle pensée pour les usages audiovisuels contemporains.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/68">
                {sectionBody(
                  "Final impact",
                  "Culture Arabesque gagne une image modernisée, plus fluide et plus audiovisuelle, tout en conservant l’équilibre entre héritage culturel et contemporanéité.",
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
