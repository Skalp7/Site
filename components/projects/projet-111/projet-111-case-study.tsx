import { BadgeCheck, Map, MapPin, Shirt, Sparkles } from "lucide-react";

import { ProjectMetadata } from "@/components/projects/project-metadata";
import { Projet111AssetFrame } from "@/components/projects/projet-111/projet-111-asset-frame";
import { Projet111VideoFrame } from "@/components/projects/projet-111/projet-111-video-frame";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { Project } from "@/types";

type Projet111CaseStudyProps = {
  project: Project;
};

const assetBase = "/projects/projet-111";

const backDesigns = Array.from({ length: 6 }, (_, index) => ({
  src: `${assetBase}/back-designs/back-design-0${index + 1}.jpg`,
  label: `Back design 0${index + 1}`,
  caption: "Sélection représentative du système dos : carte, quartier localisé, croquis et flèches directionnelles.",
}));

const heartDesigns = Array.from({ length: 4 }, (_, index) => ({
  src: `${assetBase}/heart-designs/heart-arrondissement-0${index + 1}.jpg`,
  label: `Arrondissement 0${index + 1}`,
  caption: "Déclinaison cœur pensée comme repère d’appartenance territorial.",
}));

const gabians = Array.from({ length: 6 }, (_, index) => ({
  src: `${assetBase}/gabians/gabian-0${index + 1}.jpg`,
  label: `Gabian 0${index + 1}`,
  caption: "Un détail local, symbole ou easter egg associé à un quartier.",
}));

const mockups = [
  {
    src: `${assetBase}/mockups/tshirt-front.jpg`,
    label: "T-shirt front",
    caption: "Lecture avant avec système cœur et posture produit.",
    aspect: "portrait" as const,
  },
  {
    src: `${assetBase}/mockups/tshirt-back.jpg`,
    label: "T-shirt back",
    caption: "Le dos comme visuel principal de la collection.",
    aspect: "portrait" as const,
  },
  {
    src: `${assetBase}/mockups/tshirt-detail-heart.jpg`,
    label: "Heart detail",
    caption: "Zoom sur le repère d’arrondissement.",
    aspect: "square" as const,
  },
  {
    src: `${assetBase}/mockups/tshirt-detail-label.jpg`,
    label: "Label detail",
    caption: "Le label 111 comme signature textile récurrente.",
    aspect: "square" as const,
  },
  {
    src: `${assetBase}/mockups/tshirt-worn.jpg`,
    label: "Worn mockup",
    caption: "Projection portée pour ancrer le projet dans un usage réel.",
    aspect: "landscape" as const,
  },
];

const systemBlocks = [
  {
    title: "111 visuels dos",
    body: "Le dos porte la narration principale : carte de Marseille, croquis du quartier, repère géographique et trois flèches issues de la forme du chiffre 1.",
    icon: Map,
  },
  {
    title: "16 visuels cœur",
    body: "Le cœur fonctionne comme un code territorial plus synthétique, décliné selon les 16 arrondissements.",
    icon: MapPin,
  },
  {
    title: "Label 111",
    body: "Un détail textile placé en bas du t-shirt, conçu comme signature de collection et élément de cohérence.",
    icon: BadgeCheck,
  },
  {
    title: "111 gabians",
    body: "Un système illustratif parallèle, plus local et narratif, qui ajoute une connivence propre à Marseille.",
    icon: Sparkles,
  },
];

const palette = [
  { name: "Nouveau bleu OM", value: "#3e92cf" },
  { name: "Bleu profond", value: "#223cd0" },
  { name: "Rouge", value: "#b90000" },
  { name: "Orange", value: "#be6400" },
  { name: "Jaune doré", value: "#c7a900" },
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
      <p className="text-[11px] uppercase tracking-[0.34em] text-[#3e92cf]">{eyebrow}</p>
      <h2 className="font-display text-4xl leading-none text-[#111827] sm:text-5xl lg:text-6xl">{title}</h2>
      <p className="mx-auto max-w-3xl text-base leading-8 text-[#222]/70">{body}</p>
    </AnimatedReveal>
  );
}

export function Projet111CaseStudy({ project }: Projet111CaseStudyProps) {
  return (
    <article className="bg-[#f7f2e9] text-[#111827]">
      <section className="relative overflow-hidden bg-[#fbf8f1] pb-20 pt-16">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,24,39,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(17,24,39,0.05)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#f7f2e9] to-transparent" />
        <Container className="relative grid min-h-[74vh] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <AnimatedReveal variant="left" className="space-y-8">
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#223cd0]/70">{project.category}</p>
              <h1 className="font-display text-6xl leading-none text-[#111827] sm:text-7xl lg:text-8xl">Projet 111</h1>
              <p className="max-w-3xl text-2xl font-semibold leading-tight text-[#b90000] sm:text-3xl">
                111 quartiers. 111 designs. Une cartographie graphique de Marseille.
              </p>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[#222]/72">
              Une collection textile pensée comme un système complet : dos cartographique, cœur par arrondissement, label de collection et gabians illustrés.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/projects" variant="secondary">Retour aux projets</ButtonLink>
              <ButtonLink href="/contact">Discuter d’un projet textile</ButtonLink>
            </div>
          </AnimatedReveal>

          <AnimatedReveal variant="panel" delay={0.08}>
            <Projet111AssetFrame
              src={`${assetBase}/mockups/tshirt-back.jpg`}
              alt="Projet 111 t-shirt back mockup"
              label="Hero mockup"
              caption="Le dos comme surface principale de narration territoriale."
              aspect="portrait"
            />
          </AnimatedReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.65fr]">
          <AnimatedReveal variant="left" className="space-y-8">
            <div className="space-y-5">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#3e92cf]">Project overview</p>
              <h2 className="font-display text-4xl leading-none sm:text-5xl lg:text-6xl">
                Une ville transformée en collection visuelle.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-[#222]/70">{project.excerpt}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-[1.5rem] border border-black/10 bg-white/70 p-5">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#223cd0]/65">{metric.label}</p>
                  <p className="mt-4 font-display text-4xl">{metric.value}</p>
                </div>
              ))}
            </div>
          </AnimatedReveal>
          <AnimatedReveal variant="right">
            <ProjectMetadata project={project} />
          </AnimatedReveal>
        </Container>
      </section>

      <section className="border-y border-black/10 bg-white py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Brand / collection system"
            title="Un système textile, pas une galerie d’illustrations."
            body="Projet 111 repose sur des règles précises : un dos principal en 111 déclinaisons, un cœur en 16 déclinaisons, un label récurrent, une série de gabians et une charte pensée pour l’impression textile."
          />
          <div className="grid gap-4 lg:grid-cols-4">
            {systemBlocks.map((block, index) => {
              const Icon = block.icon;
              return (
                <AnimatedReveal key={block.title} delay={index * 0.05} variant="panel">
                  <div className="h-full rounded-[1.5rem] border border-black/10 bg-[#f7f2e9] p-5">
                    <Icon className="h-6 w-6 text-[#b90000]" />
                    <h3 className="mt-5 font-display text-3xl">{block.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#222]/68">{block.body}</p>
                  </div>
                </AnimatedReveal>
              );
            })}
          </div>
          <AnimatedReveal variant="rise">
            <Projet111AssetFrame
              src={`${assetBase}/brand/projet-111-system.jpg`}
              alt="Projet 111 graphic system"
              label="System overview"
              caption="Une vue synthétique du langage de collection : dos, cœur, label, gabians, couleurs et règles de déclinaison."
              aspect="wide"
            />
          </AnimatedReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Back design system"
            title="Le dos comme carte, récit et signature graphique."
            body="Chaque design comprend une carte de Marseille, des croquis de monuments ou constructions du quartier, le quartier positionné sur la carte et trois flèches issues de la forme du chiffre 1."
          />
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <AnimatedReveal variant="left">
              <Projet111AssetFrame
                src={`${assetBase}/back-designs/back-design-01.jpg`}
                alt="Projet 111 main back design"
                label="Main back system"
                caption="Les trois flèches transforment le chiffre 1 en outil directionnel : repérage, signature et lien direct avec le nom 111."
                aspect="portrait"
              />
            </AnimatedReveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {backDesigns.slice(1).map((asset, index) => (
                <AnimatedReveal key={asset.label} delay={index * 0.04} variant="panel">
                  <Projet111AssetFrame src={asset.src} alt={asset.label} label={asset.label} caption={asset.caption} aspect="square" />
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#111827] py-20 text-white sm:py-28">
        <Container className="space-y-12">
          <AnimatedReveal className="mx-auto grid max-w-5xl gap-4 text-center">
            <p className="text-[11px] uppercase tracking-[0.34em] text-[#c7a900]">Heart design system</p>
            <h2 className="font-display text-4xl leading-none sm:text-5xl lg:text-6xl">16 cœurs pour les 16 arrondissements.</h2>
            <p className="mx-auto max-w-3xl text-base leading-8 text-white/66">
              Le cœur agit comme un système secondaire : plus compact, plus immédiat, il indique l’arrondissement et donne au t-shirt un repère d’appartenance.
            </p>
          </AnimatedReveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {heartDesigns.map((asset, index) => (
              <AnimatedReveal key={asset.label} delay={index * 0.05} variant="panel">
                <Projet111AssetFrame src={asset.src} alt={asset.label} label={asset.label} caption={asset.caption} aspect="square" />
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <AnimatedReveal variant="left" className="space-y-5">
            <p className="text-[11px] uppercase tracking-[0.34em] text-[#3e92cf]">Label 111</p>
            <h2 className="font-display text-4xl leading-none sm:text-5xl">Un détail textile qui signe toute la collection.</h2>
            <p className="text-base leading-8 text-[#222]/70">
              Placé en bas du t-shirt, le label 111 fonctionne comme un élément de marque récurrent. Il relie chaque quartier à une collection commune et donne au projet une logique produit.
            </p>
          </AnimatedReveal>
          <AnimatedReveal variant="right">
            <Projet111AssetFrame
              src={`${assetBase}/logo/projet-111-label.svg`}
              alt="Projet 111 label"
              label="Collection label"
              caption="Un label simple, textile, répétable, conçu comme signature de collection."
              aspect="landscape"
              contain
            />
          </AnimatedReveal>
        </Container>
      </section>

      <section className="border-y border-black/10 bg-white py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Gabian series"
            title="111 gabians comme détails locaux, symboles et easter eggs."
            body="Chaque quartier possède aussi son gabian : un système illustratif parallèle, plus narratif, qui ajoute une connivence marseillaise à la collection."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {gabians.map((asset, index) => (
              <AnimatedReveal key={asset.label} delay={index * 0.04} variant="panel">
                <Projet111AssetFrame src={asset.src} alt={asset.label} label={asset.label} caption={asset.caption} aspect="square" />
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Typography & color system"
            title="Une typographie brute et une palette unie, pensée pour le textile."
            body="Duct Tape Alphabet Font Scan apporte une énergie populaire, urbaine et spontanée. La palette reste simple, directe et imprimable, sur base t-shirt blanc et impression DTF."
          />
          <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
            <AnimatedReveal variant="left">
              <Projet111AssetFrame
                src={`${assetBase}/brand/projet-111-typography.jpg`}
                alt="Projet 111 typography"
                label="Duct Tape Alphabet Font Scan"
                caption="Une typographie brute, expressive et cohérente avec l’énergie de Marseille."
                aspect="landscape"
              />
            </AnimatedReveal>
            <AnimatedReveal variant="right" className="rounded-[2rem] border border-black/10 bg-white p-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#223cd0]/65">Palette textile</p>
              <div className="mt-6 grid gap-3">
                {palette.map((color) => (
                  <div key={color.value} className="flex items-center justify-between gap-4 border-b border-black/10 pb-3 last:border-none last:pb-0">
                    <div className="flex items-center gap-3">
                      <span className="h-10 w-10 rounded-full border border-black/10" style={{ backgroundColor: color.value }} />
                      <span className="text-sm font-medium">{color.name}</span>
                    </div>
                    <span className="text-xs uppercase tracking-[0.18em] text-[#222]/54">{color.value}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-[#222]/64">
                Le système privilégie des aplats francs pour conserver lisibilité, impact visuel et faisabilité en impression DTF.
              </p>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#fdfaf2] py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionIntro
            eyebrow="Mockups & textile applications"
            title="Une collection pensée comme marque textile, pas comme simple exercice graphique."
            body="Les mockups permettent de vérifier les placements, la lisibilité du dos, l’échelle du cœur, la présence du label et la cohérence produit."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {mockups.map((asset, index) => (
              <AnimatedReveal key={asset.label} delay={index * 0.04} variant="panel" className={index === 4 ? "lg:col-span-2" : undefined}>
                <Projet111AssetFrame src={asset.src} alt={asset.label} label={asset.label} caption={asset.caption} aspect={asset.aspect} />
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#111827] py-20 text-white sm:py-28">
        <Container className="space-y-12">
          <AnimatedReveal className="mx-auto grid max-w-5xl gap-4 text-center">
            <p className="text-[11px] uppercase tracking-[0.34em] text-[#c7a900]">Promotional videos</p>
            <h2 className="font-display text-4xl leading-none sm:text-5xl lg:text-6xl">Deux emplacements vidéo pour présenter la collection en mouvement.</h2>
            <p className="mx-auto max-w-3xl text-base leading-8 text-white/66">
              Les vidéos doivent pouvoir montrer la logique de collection, les détails textile, les variantes et l’énergie urbaine du projet.
            </p>
          </AnimatedReveal>
          <div className="grid gap-5 lg:grid-cols-2">
            <AnimatedReveal variant="left">
              <Projet111VideoFrame
                src={`${assetBase}/videos/projet-111-promo-01.mp4`}
                title="promo-video-01"
                caption="Vidéo de présentation générale : concept, collection, système dos et mockups."
              />
            </AnimatedReveal>
            <AnimatedReveal variant="right">
              <Projet111VideoFrame
                src={`${assetBase}/videos/projet-111-promo-02.mp4`}
                title="promo-video-02"
                caption="Vidéo plus rythmée pour social media : détails, gabians, cœur et identité textile."
              />
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <AnimatedReveal variant="panel">
            <div className="rounded-[2rem] border border-black/10 bg-white p-8 text-center shadow-[0_26px_80px_rgba(10,15,20,0.12)] lg:p-12">
              <Shirt className="mx-auto h-8 w-8 text-[#b90000]" />
              <p className="mt-6 text-[11px] uppercase tracking-[0.34em] text-[#223cd0]/65">Final impact</p>
              <h2 className="mx-auto mt-5 max-w-5xl font-display text-4xl leading-none sm:text-5xl lg:text-6xl">
                Un système culturel capable de transformer Marseille en marque textile.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#222]/68">
                Projet 111 démontre une capacité à penser une collection à grande échelle, à structurer une identité déclinable et à faire dialoguer cartographie, illustration, culture populaire et design textile.
              </p>
              <div className="mt-8 flex justify-center">
                <ButtonLink href="/projects" variant="secondary">Voir les autres projets</ButtonLink>
              </div>
            </div>
          </AnimatedReveal>
        </Container>
      </section>
    </article>
  );
}
