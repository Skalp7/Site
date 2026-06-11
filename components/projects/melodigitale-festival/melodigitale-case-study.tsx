import { Eye, Grid3X3, Leaf, Music2, RadioTower, Sparkles, Trees } from "lucide-react";

import { MelodigitaleAssetFrame } from "@/components/projects/melodigitale-festival/melodigitale-asset-frame";
import { ProjectMetadata } from "@/components/projects/project-metadata";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Project } from "@/types";

type MelodigitaleCaseStudyProps = {
  project: Project;
};

const assetBase = "/projects/melodigitale-festival";

const colors = [
  { name: "Solar Moss", value: "#ad7f15", note: "énergie / lumière / croissance" },
  { name: "Digital Rose", value: "#99706e", note: "sensible / culturel / numérique" },
  { name: "Organic Clay", value: "#805052", note: "matière / rythme / chaleur" },
  { name: "Urban Earth", value: "#5f3835", note: "ville / ancrage / profondeur" },
  { name: "Deep Flora", value: "#172d30", note: "végétal / immersion / contraste" },
  { name: "Night Signal", value: "#0e1311", note: "scène / technologie / précision" },
];

const conceptPillars = [
  {
    title: "Art digital",
    body: "Installations interactives et création numérique deviennent des outils de perception du vivant.",
    icon: Sparkles,
  },
  {
    title: "Musique électronique",
    body: "Le rythme sonore guide l’identité, ses répétitions, ses pulsations et son expérience collective.",
    icon: Music2,
  },
  {
    title: "Refloraison urbaine",
    body: "Le festival invite Marseille à regarder autrement sa biodiversité et ses espaces à végétaliser.",
    icon: Trees,
  },
];

const visualLanguage = [
  { title: "Croissance", body: "Des modules évolutifs inspirés des feuilles et de la floraison.", icon: Leaf },
  { title: "Observation", body: "Des yeux illustrés rendent visible l’attention portée à l’environnement.", icon: Eye },
  { title: "Signal", body: "Des répétitions géométriques évoquent ondes, scène et communication.", icon: RadioTower },
  { title: "Structure", body: "Une grille relie symbole, composition éditoriale et signalétique.", icon: Grid3X3 },
];

const communicationAssets = [
  {
    src: `${assetBase}/posters/main-poster.jpg`,
    label: "Affiche manifeste",
    caption: "Le symbole floral devient un signal urbain pour annoncer le festival.",
    aspect: "portrait" as const,
  },
  {
    src: `${assetBase}/editorial/festival-program.jpg`,
    label: "Programme éditorial",
    caption: "Une hiérarchie souple organise concerts, conférences, galeries et installations.",
    aspect: "portrait" as const,
  },
  {
    src: `${assetBase}/applications/signage.jpg`,
    label: "Signalétique",
    caption: "Le langage modulaire accompagne les visiteurs dans l’espace événementiel.",
    aspect: "portrait" as const,
  },
];

function getProjectSection(project: Project, title: string, fallback: string) {
  return project.sections.find((section) => section.title === title)?.body ?? fallback;
}

function SectionIntro({
  eyebrow,
  title,
  body,
  align = "left",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <AnimatedReveal className={align === "center" ? "mx-auto grid max-w-4xl gap-4 text-center" : "grid max-w-4xl gap-4"}>
      <p className="text-[11px] uppercase tracking-[0.34em] text-[#ad7f15]">{eyebrow}</p>
      <h2 className={dark ? "font-display text-4xl leading-none text-[#0e1311] sm:text-5xl lg:text-6xl" : "font-display text-4xl leading-none text-white sm:text-5xl lg:text-6xl"}>
        {title}
      </h2>
      <p className={dark ? "max-w-3xl text-base leading-8 text-[#0e1311]/68" : "max-w-3xl text-base leading-8 text-white/68"}>{body}</p>
    </AnimatedReveal>
  );
}

function DigitalFlower({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "relative h-44 w-44" : "relative h-72 w-72 sm:h-96 sm:w-96"}>
      <div className="absolute inset-[5%] rotate-45 border border-[#ad7f15]/45" />
      <div className="absolute inset-[18%] rotate-45 border border-white/20" />
      <div className="absolute left-1/2 top-1/2 h-[52%] w-[27%] -translate-x-1/2 -translate-y-[58%] rounded-[50%_50%_18%_18%] border border-[#ad7f15]/70 bg-[#99706e]/75 shadow-[0_0_60px_rgba(173,127,21,0.2)]" />
      <div className="absolute bottom-[12%] left-1/2 h-[30%] w-px -translate-x-1/2 bg-[#ad7f15]/80" />
      <div className="absolute inset-x-[8%] top-1/2 h-px bg-white/20" />
      <div className="absolute inset-y-[8%] left-1/2 w-px bg-white/20" />
      <div className="absolute left-[12%] top-[12%] h-2 w-2 rounded-full bg-[#ad7f15]" />
      <div className="absolute bottom-[12%] right-[12%] h-2 w-2 rounded-full bg-[#99706e]" />
    </div>
  );
}

export function MelodigitaleCaseStudy({ project }: MelodigitaleCaseStudyProps) {
  const sectionBody = (title: string, fallback: string) => getProjectSection(project, title, fallback);

  return (
    <article className="overflow-hidden bg-[#0e1311] text-white">
      <section className="relative overflow-hidden pb-16 pt-16 sm:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(173,127,21,0.26),transparent_22%),radial-gradient(circle_at_78%_22%,rgba(153,112,110,0.28),transparent_24%),linear-gradient(145deg,#0e1311_0%,#172d30_53%,#5f3835_100%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0e1311] to-transparent" />

        <Container className="relative grid min-h-[78vh] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <AnimatedReveal variant="left" className="space-y-8">
            <div className="space-y-5">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#ad7f15]">{project.category}</p>
              <h1 className="max-w-4xl font-display text-[clamp(4rem,8vw,8.5rem)] leading-[0.84] text-white">
                Melodigitale Festival
              </h1>
              <p className="font-display text-3xl text-[#ad7f15] sm:text-4xl">Quand la musique effleure.</p>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/70">
              An experimental festival identity exploring the intersection between digital art, electronic music and urban biodiversity.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/projects" variant="ghost">Retour aux projets</ButtonLink>
              <ButtonLink href="/contact" variant="secondary" className="border-white/12 bg-white text-ink">
                Discuter d’une direction artistique
              </ButtonLink>
            </div>
          </AnimatedReveal>

          <AnimatedReveal variant="panel" delay={0.08} className="relative">
            <MelodigitaleAssetFrame
              src={`${assetBase}/posters/main-poster.jpg`}
              alt="Affiche principale du Melodigitale Festival"
              label="Festival identity / Marseille"
              caption="Une identité événementielle où technologie et nature composent un même écosystème."
              aspect="portrait"
              className="mx-auto max-w-xl"
            />
          </AnimatedReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.65fr]">
          <AnimatedReveal variant="left" className="space-y-8">
            <SectionIntro
              eyebrow="Project overview"
              title="Une direction artistique conçue comme un véritable festival."
              body={project.excerpt}
            />
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { title: "Contexte", body: project.context },
                { title: "Objectif", body: project.objective },
                { title: "Approche", body: project.approach },
              ].map((item) => (
                <div key={item.title} className="border-t border-[#ad7f15]/45 pt-5">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#ad7f15]">{item.title}</p>
                  <p className="mt-4 text-sm leading-7 text-white/62">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/42">{metric.label}</p>
                  <p className="mt-3 font-display text-3xl text-[#ad7f15]">{metric.value}</p>
                </div>
              ))}
            </div>
          </AnimatedReveal>
          <AnimatedReveal variant="right">
            <ProjectMetadata project={project} />
          </AnimatedReveal>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-[#172d30] py-20 sm:py-28">
        <Container className="space-y-14">
          <SectionIntro
            eyebrow="Festival concept"
            title="La technologie comme outil de reconnexion au vivant."
            body={sectionBody("Festival concept", "Melodigitale réunit art numérique, musique et écologie dans une expérience culturelle commune.")}
            align="center"
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {conceptPillars.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedReveal key={item.title} delay={index * 0.08} className="border-t border-white/16 py-7">
                  <Icon className="h-7 w-7 text-[#ad7f15]" />
                  <h3 className="mt-8 font-display text-3xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/60">{item.body}</p>
                </AnimatedReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[#ece6de] py-20 text-[#0e1311] sm:py-28">
        <Container className="space-y-14">
          <SectionIntro
            eyebrow="Logo development"
            title="Observer la fleur. Réduire. Géométriser. Signaler."
            body={sectionBody("Logo development", "Le symbole naît de l’observation de la plante Digitale et de sa transformation progressive en signe numérique.")}
            dark
          />
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <MelodigitaleAssetFrame
              src={`${assetBase}/logo/digitale-plant-study.jpg`}
              alt="Étude de la plante Digitale"
              label="01 / Observation botanique"
              caption="La silhouette, la croissance verticale et la forme de la fleur constituent le point de départ."
              aspect="portrait"
            />
            <div className="grid gap-6">
              <MelodigitaleAssetFrame
                src={`${assetBase}/logo/logo-development.jpg`}
                alt="Développement géométrique du logo Melodigitale"
                label="02 / Simplification numérique"
                caption="La partie haute disparaît, la forme se compacte et gagne une présence de signal."
                aspect="landscape"
              />
              <div className="grid gap-5 border-l border-[#ad7f15] pl-6 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#5f3835]">Nature</p>
                  <p className="mt-3 text-sm leading-7 text-[#0e1311]/68">Une forme issue du vivant, conservant l’élan et la sensibilité de la plante Digitale.</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#5f3835]">Technologie</p>
                  <p className="mt-3 text-sm leading-7 text-[#0e1311]/68">L’influence Ethereum intervient uniquement par sa géométrie construite et son esthétique digitale.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(173,127,21,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(173,127,21,0.2)_1px,transparent_1px)] [background-size:48px_48px]" />
        <Container className="relative grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <AnimatedReveal variant="left" className="space-y-7">
            <SectionIntro
              eyebrow="Grid system"
              title="Un symbole construit pour devenir système."
              body={sectionBody("Grid system", "Axes, proportions et guides rendent visible la logique modulaire du symbole.")}
            />
            <p className="max-w-xl text-sm leading-7 text-white/58">
              La grille ne sert pas de décor. Elle organise les proportions du logo, les alignements éditoriaux, les motifs et les rythmes de signalétique.
            </p>
          </AnimatedReveal>
          <AnimatedReveal variant="right" className="grid min-h-[28rem] place-items-center rounded-[1.5rem] border border-[#ad7f15]/25 bg-[#172d30]/55">
            <DigitalFlower />
          </AnimatedReveal>
        </Container>
      </section>

      <section className="bg-[#5f3835] py-20 sm:py-28">
        <Container className="space-y-14">
          <SectionIntro
            eyebrow="Visual language"
            title="Un vocabulaire graphique vivant, modulaire et rythmé."
            body={sectionBody("Visual language", "Formes végétales, yeux, fragments et symboles de croissance composent un langage événementiel cohérent.")}
            align="center"
          />
          <MelodigitaleAssetFrame
            src={`${assetBase}/brand/visual-language.jpg`}
            alt="Système graphique du Melodigitale Festival"
            label="Modular visual language"
            caption="Une famille de formes pensée pour évoluer entre affiche, programme, réseaux sociaux et espace urbain."
            aspect="wide"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visualLanguage.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedReveal key={item.title} delay={index * 0.06} className="rounded-[1.25rem] border border-white/14 bg-[#0e1311]/20 p-5">
                  <Icon className="h-6 w-6 text-[#ad7f15]" />
                  <h3 className="mt-8 font-display text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">{item.body}</p>
                </AnimatedReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[#ece6de] py-20 text-[#0e1311] sm:py-28">
        <Container className="space-y-14">
          <SectionIntro
            eyebrow="Color system"
            title="Une palette méditerranéenne entre chaleur organique et nuit numérique."
            body={sectionBody("Color system", "La palette oppose chaleur organique, profondeur végétale et précision numérique.")}
            dark
          />
          <div className="grid gap-3 lg:grid-cols-6">
            {colors.map((color, index) => (
              <AnimatedReveal
                key={color.value}
                delay={index * 0.05}
                className="group relative isolate flex min-h-64 flex-col justify-between rounded-[1.25rem] p-5 shadow-[0_20px_55px_rgba(14,19,17,0.12)]"
              >
                <div className="absolute inset-0 -z-10 rounded-[1.25rem]" style={{ backgroundColor: color.value }} />
                <p className="font-mono text-xs uppercase text-white/70">{color.value}</p>
                <div>
                  <p className="font-display text-2xl text-white">{color.name}</p>
                  <p className="mt-2 text-xs leading-5 text-white/60">{color.note}</p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-14">
          <SectionIntro
            eyebrow="Event communication"
            title="Une identité capable d’occuper la ville."
            body={sectionBody("Event communication", "Affiches, programme, signalétique et formats sociaux prolongent le système dans un langage cohérent.")}
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {communicationAssets.map((asset, index) => (
              <AnimatedReveal key={asset.src} delay={index * 0.08}>
                <MelodigitaleAssetFrame {...asset} alt={asset.label} />
              </AnimatedReveal>
            ))}
          </div>
          <MelodigitaleAssetFrame
            src={`${assetBase}/applications/social-system.jpg`}
            alt="Déclinaisons sociales du Melodigitale Festival"
            label="Social and promotional system"
            caption="Le système conserve son rythme et sa reconnaissance sur les formats de communication digitale."
            aspect="wide"
          />
        </Container>
      </section>

      <section className="bg-[#172d30] py-20 sm:py-28">
        <Container className="space-y-14">
          <SectionIntro
            eyebrow="Festival experience"
            title="Un parcours culturel où le numérique rapproche du vivant."
            body={sectionBody("Festival experience", "Concerts, galeries, conférences et parcours immersifs composent une expérience collective et sensible.")}
            align="center"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { src: `${assetBase}/experience/concert.jpg`, label: "Concerts", caption: "La musique électronique comme pulsation collective." },
              { src: `${assetBase}/experience/gallery.jpg`, label: "Galeries", caption: "L’art digital comme nouvelle manière d’observer le vivant." },
              { src: `${assetBase}/experience/conference.jpg`, label: "Conférences", caption: "Des échanges pour relier création, ville et biodiversité." },
            ].map((asset, index) => (
              <AnimatedReveal key={asset.src} delay={index * 0.08}>
                <MelodigitaleAssetFrame {...asset} alt={asset.label} aspect="portrait" />
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(173,127,21,0.22),transparent_30%),linear-gradient(135deg,#0e1311,#5f3835)]" />
        <Container className="relative grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <AnimatedReveal className="grid place-items-center">
            <DigitalFlower compact />
          </AnimatedReveal>
          <AnimatedReveal variant="right" className="space-y-7">
            <p className="text-[11px] uppercase tracking-[0.34em] text-[#ad7f15]">Final impact</p>
            <h2 className="max-w-4xl font-display text-5xl leading-none sm:text-6xl lg:text-7xl">
              Une identité événementielle complète, pensée pour croître.
            </h2>
            <p className="max-w-3xl text-base leading-8 text-white/68">
              {sectionBody("Final impact", project.impact)}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.deliverables.map((item) => (
                <span key={item} className="rounded-full border border-white/14 bg-white/[0.05] px-4 py-2 text-xs text-white/68">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-3">
              <ButtonLink href="/projects" variant="ghost">Découvrir les autres projets</ButtonLink>
              <ButtonLink href="/contact" variant="secondary" className="border-white/12 bg-white text-ink">
                Démarrer un projet
              </ButtonLink>
            </div>
          </AnimatedReveal>
        </Container>
      </section>
    </article>
  );
}
