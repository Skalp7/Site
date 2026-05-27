import { ArrowUpRight, Compass, Globe2, Landmark, Layers3, Sparkles } from "lucide-react";

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
    body: "Une identité construite autour de l’anticipation, de la lecture des signaux et de la prise de décision structurée.",
    icon: Compass,
  },
  {
    title: "Europe / LATAM bridge",
    body: "Le symbole relie deux territoires économiques avec un langage diplomatique, premium et international.",
    icon: Globe2,
  },
  {
    title: "Institutional clarity",
    body: "Une direction visuelle sobre, stable et lisible, pensée pour des interlocuteurs dirigeants.",
    icon: Landmark,
  },
];

const logoVariants = [
  {
    src: `${assetBase}/logo/forsouth-logo-main.svg`,
    label: "Logo principal",
    caption: "Logotype institutionnel et symbole à 12 étoiles.",
    contain: true,
  },
  {
    src: `${assetBase}/logo/forsouth-logo-symbol.svg`,
    label: "Symbole seul",
    caption: "Une constellation structurée qui reprend subtilement la géographie de l’Amérique latine.",
    contain: true,
  },
  {
    src: `${assetBase}/logo/forsouth-logo-white.png`,
    label: "Version premium",
    caption: "Déclinaison claire pensée pour fonds sombres, documents corporate et supports digitaux.",
    contain: true,
  },
];

const digitalApplications = [
  {
    src: `${assetBase}/applications/linkedin-banner-company.jpg`,
    label: "LinkedIn company banner",
    caption: "Une bannière entreprise conçue pour poser le positionnement corporate dès le premier contact.",
  },
  {
    src: `${assetBase}/applications/linkedin-banner-personal.jpg`,
    label: "LinkedIn personal banner",
    caption: "Une extension personnelle de la marque, plus relationnelle mais toujours cohérente.",
  },
];

const businessApplications = [
  {
    src: `${assetBase}/applications/business-card-front.jpg`,
    label: "Business card front",
    caption: "Une carte sobre, institutionnelle, construite autour du symbole et de la hiérarchie de contact.",
  },
  {
    src: `${assetBase}/applications/business-card-back.jpg`,
    label: "Business card back",
    caption: "Un verso plus atmosphérique pour prolonger l’univers constellation.",
  },
  {
    src: `${assetBase}/applications/one-pager.jpg`,
    label: "Strategic one pager",
    caption: "Un document administratif premium, extension directe de la charte et de l’offre.",
  },
];

const websiteScreens = [
  {
    src: `${assetBase}/website/website-home.jpg`,
    label: "Homepage",
    caption: "Une page d’accueil éditoriale pour présenter l’offre avec autorité et clarté.",
    aspect: "wide" as const,
  },
  {
    src: `${assetBase}/website/website-mobile.jpg`,
    label: "Mobile version",
    caption: "Une continuité responsive pensée pour conserver le rythme premium sur petit écran.",
    aspect: "mobile" as const,
  },
  {
    src: `${assetBase}/website/website-about.jpg`,
    label: "About page",
    caption: "Une page de fond pour renforcer la méthode, la crédibilité et la narration stratégique.",
    aspect: "landscape" as const,
  },
];

const constellationImages = [
  `${assetBase}/photography/constellation-01.jpg`,
  `${assetBase}/photography/constellation-02.jpg`,
  `${assetBase}/photography/constellation-03.jpg`,
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
      <p className="text-[11px] uppercase tracking-[0.34em] text-[#c8a36f]">{eyebrow}</p>
      <h2 className="font-display text-4xl leading-none text-white sm:text-5xl lg:text-6xl">{title}</h2>
      <p className="mx-auto max-w-3xl text-base leading-8 text-white/66">{body}</p>
    </AnimatedReveal>
  );
}

export function ForsouthCaseStudy({ project }: ForsouthCaseStudyProps) {
  return (
    <article className="bg-[#070c13] text-white">
      <section className="relative min-h-[calc(100vh-88px)] overflow-hidden pb-20 pt-16">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#070c13_0%,#111d2c_42%,#7e5a35_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.12),transparent_18%),radial-gradient(circle_at_82%_28%,rgba(200,163,111,0.22),transparent_24%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#070c13] to-transparent" />

        <Container className="relative grid min-h-[72vh] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <AnimatedReveal variant="left" className="space-y-8">
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.34em] text-white/48">{project.category}</p>
              <h1 className="max-w-4xl font-display text-[clamp(4rem,8vw,8.8rem)] leading-[0.84] text-white">
                Forsouth. Advisory
              </h1>
              <p className="font-display text-3xl text-[#d6b27b] sm:text-4xl">Forsight for the South</p>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/72">
              Une identité de conseil stratégique premium pour accompagner l’entrée des entreprises européennes sur les marchés latino-américains.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/projects" variant="ghost">Retour aux projets</ButtonLink>
              <ButtonLink href="/contact" variant="secondary" className="border-white/12 bg-white text-ink">
                Discuter d’un projet
              </ButtonLink>
            </div>
          </AnimatedReveal>

          <AnimatedReveal variant="panel" delay={0.08}>
            <ForsouthAssetFrame
              src={`${assetBase}/logo/forsouth-logo-white.png`}
              alt="Forsouth Advisory logo"
              label="Hero identity"
              caption="Logo, symbole et univers constellation préparés pour accueillir les assets finaux."
              aspect="square"
              contain
            />
          </AnimatedReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.65fr]">
          <AnimatedReveal variant="left" className="space-y-8">
            <div className="space-y-5">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#c8a36f]">Brand overview</p>
              <h2 className="font-display text-4xl leading-none sm:text-5xl lg:text-6xl">
                Une marque pensée pour rendre l’expansion internationale plus lisible.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-white/68">{project.excerpt}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {brandPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                    <Icon className="h-5 w-5 text-[#c8a36f]" />
                    <h3 className="mt-5 font-display text-2xl">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/62">{pillar.body}</p>
                  </div>
                );
              })}
            </div>
          </AnimatedReveal>
          <AnimatedReveal variant="right">
            <ProjectMetadata project={project} />
          </AnimatedReveal>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-[#0c121c] py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Logo system"
            title="12 étoiles comme système de guidance entre Europe et Amérique latine."
            body="Le symbole reprend subtilement la forme géographique de l’Amérique latine, tout en dialoguant avec les 12 étoiles du drapeau européen. Il devient un signe de connexion, de prévoyance et d’expansion structurée."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {logoVariants.map((asset, index) => (
              <AnimatedReveal key={asset.label} delay={index * 0.06} variant="panel">
                <ForsouthAssetFrame
                  src={asset.src}
                  alt={asset.label}
                  label={asset.label}
                  caption={asset.caption}
                  aspect="square"
                  contain={asset.contain}
                />
              </AnimatedReveal>
            ))}
          </div>

          <AnimatedReveal variant="rise">
            <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 lg:grid-cols-[0.8fr_1.2fr] lg:p-8">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#c8a36f]">Construction logic</p>
                <h3 className="mt-4 font-display text-4xl">Europe, LATAM, prévoyance.</h3>
              </div>
              <p className="text-base leading-8 text-white/66">
                Les étoiles ne sont pas décoratives : elles organisent le symbole comme une constellation stratégique. La marque évoque une trajectoire, une lecture du terrain et une méthode d’entrée de marché maîtrisée.
              </p>
            </div>
          </AnimatedReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Typography system"
            title="Trajan Pro 3 et TheMix : héritage, stabilité et lisibilité contemporaine."
            body="Le logotype s’appuie sur Trajan Pro 3 pour son autorité institutionnelle et son élégance classique. TheMix structure les textes et supports avec une lisibilité plus contemporaine, adaptée au conseil, au web et aux documents corporate."
          />

          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <AnimatedReveal variant="left">
              <ForsouthAssetFrame
                src={`${assetBase}/brand/forsouth-typography.jpg`}
                alt="Forsouth typography system"
                label="Typography board"
                caption="Une section prête à accueillir le board typographique final avec Trajan Pro 3 et TheMix."
                aspect="wide"
              />
            </AnimatedReveal>
            <AnimatedReveal variant="right" className="grid gap-5">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#c8a36f]">Trajan Pro 3</p>
                <p className="mt-6 font-display text-6xl leading-none">Foresight</p>
                <p className="mt-5 text-sm leading-7 text-white/62">Une typographie de logotype qui apporte héritage, verticalité et autorité sans rigidifier la marque.</p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#c8a36f]">TheMix</p>
                <p className="mt-6 text-3xl font-semibold leading-tight">Strategic diagnostics. Partner intelligence. Structured development.</p>
                <p className="mt-5 text-sm leading-7 text-white/62">Une famille de texte stable et lisible, conçue pour la précision des supports corporate.</p>
              </div>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#101723] py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Color & photography direction"
            title="Un univers constellation pour traduire prévoyance, orientation et projection."
            body="La direction photo utilise les constellations comme respiration visuelle : sobre, spatiale, institutionnelle, sans perdre le contrôle corporate de la marque."
          />

          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <AnimatedReveal variant="left">
              <ForsouthAssetFrame
                src={`${assetBase}/brand/forsouth-colors.jpg`}
                alt="Forsouth color palette"
                label="Color palette"
                caption="Palette sobre et internationale : bleu nuit, ivoire institutionnel, or discret et tons minéraux."
                aspect="portrait"
              />
            </AnimatedReveal>
            <div className="grid gap-5 md:grid-cols-3">
              {constellationImages.map((src, index) => (
                <AnimatedReveal key={src} delay={index * 0.06} variant="panel">
                  <ForsouthAssetFrame
                    src={src}
                    alt={`Constellation direction ${index + 1}`}
                    label={`Constellation 0${index + 1}`}
                    caption="Image de direction photo prévue pour renforcer l’idée d’orientation stratégique."
                    aspect="portrait"
                  />
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Iconography"
            title="Une iconographie précise, construite à partir de l’étoile et du langage corporate."
            body="Le système d’icônes reste simple, fonctionnel et cohérent avec l’univers du symbole. Il sert la lecture des offres, des marchés et des étapes de diagnostic."
          />

          <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
            <AnimatedReveal variant="left">
              <ForsouthAssetFrame
                src={`${assetBase}/brand/forsouth-icons.jpg`}
                alt="Forsouth iconography system"
                label="Icon system"
                caption="Icônes basiques, déclinaison de l’étoile et règles de cohérence visuelle."
                aspect="landscape"
              />
            </AnimatedReveal>
            <AnimatedReveal variant="right">
              <div className="grid h-full gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                {[Sparkles, Layers3, Globe2, ArrowUpRight].map((Icon, index) => (
                  <div key={index} className="flex items-center gap-4 border-b border-white/10 pb-4 last:border-none last:pb-0">
                    <div className="grid h-12 w-12 place-items-center rounded-full border border-[#c8a36f]/30 bg-[#c8a36f]/10">
                      <Icon className="h-5 w-5 text-[#d7b57e]" />
                    </div>
                    <p className="text-sm leading-7 text-white/66">Élément iconographique conçu pour rester précis, corporate et international.</p>
                  </div>
                ))}
              </div>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#0c121c] py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Digital applications"
            title="Une identité LinkedIn cohérente pour l’entreprise et les profils dirigeants."
            body="Les bannières digitales prolongent la marque sans surjouer l’effet graphique : elles installent une présence sobre, claire et premium sur les points de contact professionnels."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {digitalApplications.map((asset, index) => (
              <AnimatedReveal key={asset.label} delay={index * 0.06} variant={index === 0 ? "left" : "right"}>
                <ForsouthAssetFrame src={asset.src} alt={asset.label} label={asset.label} caption={asset.caption} aspect="landscape" />
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Business applications"
            title="Des supports institutionnels pensés comme extensions directes de la charte."
            body="Carte de visite, verso, one pager administratif : chaque support garde le même niveau de retenue, de hiérarchie et de crédibilité corporate."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {businessApplications.map((asset, index) => (
              <AnimatedReveal key={asset.label} delay={index * 0.06} variant="panel">
                <ForsouthAssetFrame
                  src={asset.src}
                  alt={asset.label}
                  label={asset.label}
                  caption={asset.caption}
                  aspect={index === 2 ? "portrait" : "landscape"}
                />
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#101723] py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Website design"
            title="Une expérience web éditoriale pour rendre l’offre immédiatement crédible."
            body="Le site prolonge la charte dans un environnement digital fluide : homepage, mobile, page about, hiérarchie claire et continuité de marque."
          />
          <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
            <AnimatedReveal variant="left">
              <ForsouthAssetFrame
                src={websiteScreens[0].src}
                alt={websiteScreens[0].label}
                label={websiteScreens[0].label}
                caption={websiteScreens[0].caption}
                aspect={websiteScreens[0].aspect}
              />
            </AnimatedReveal>
            <div className="grid gap-5">
              {websiteScreens.slice(1).map((asset, index) => (
                <AnimatedReveal key={asset.label} delay={index * 0.06} variant="panel">
                  <ForsouthAssetFrame src={asset.src} alt={asset.label} label={asset.label} caption={asset.caption} aspect={asset.aspect} />
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <AnimatedReveal variant="panel">
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 text-center lg:p-12">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#c8a36f]">Final impact</p>
              <h2 className="mx-auto mt-5 max-w-5xl font-display text-4xl leading-none sm:text-5xl lg:text-6xl">
                Une identité transversale, institutionnelle et internationale.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/68">
                Forsouth. Advisory devient un système visuel complet : un pont Europe / LATAM, une marque de conseil structurée et un langage corporate capable de vivre sur le web, les réseaux professionnels, les documents stratégiques et les supports business.
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
