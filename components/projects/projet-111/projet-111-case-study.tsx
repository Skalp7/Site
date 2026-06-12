import Image from "next/image";
import {
  BadgeCheck,
  Boxes,
  Map,
  MapPin,
  Ruler,
  ScanLine,
} from "lucide-react";
import { ReactNode } from "react";

import { ProjectMetadata } from "@/components/projects/project-metadata";
import { Projet111AssetFrame } from "@/components/projects/projet-111/projet-111-asset-frame";
import { Projet111VideoFrame } from "@/components/projects/projet-111/projet-111-video-frame";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Project } from "@/types";

type Projet111CaseStudyProps = {
  project: Project;
};

const assetBase = "/projects/projet-111";

const neighborhoods = [
  { slug: "la-joliette", name: "La Joliette", color: "#0092CD" },
  { slug: "notre-dame-du-mont", name: "Notre-Dame-du-Mont", color: "#C80E0B" },
  { slug: "cinq-avenues", name: "Cinq-Avenues", color: "#003ACD" },
  { slug: "mazargues", name: "Mazargues", color: "#CC6500" },
  { slug: "sainte-anne", name: "Sainte-Anne", color: "#CEAA00" },
  { slug: "soon", name: "Soon", color: "#F2D909" },
];

const colors = [
  { name: "Blue Méditerranée", value: "#0092CD", note: "Mer et horizon marseillais" },
  { name: "Bleu Profond", value: "#003ACD", note: "Identité et ancrage urbain" },
  { name: "Rouge Canebière", value: "#C80E0B", note: "Passion du cœur marseillais" },
  { name: "Orange Terre Cuite", value: "#CC6500", note: "Façades, matière et chaleur" },
  { name: "Or Provençal", value: "#CEAA00", note: "Patrimoine et lumière" },
  { name: "Jaune Soleil", value: "#F2D909", note: "Énergie méditerranéenne" },
];

const alphabet = ["A", "M", "R", "S", "E", "I", "L", "L", "E"];

const systemPrinciples = [
  {
    title: "Cartographier",
    body: "La carte de Marseille relie chaque quartier à un territoire commun.",
    icon: Map,
  },
  {
    title: "Localiser",
    body: "Chaque composition situe précisément le quartier dans la ville.",
    icon: MapPin,
  },
  {
    title: "Archiver",
    body: "Architecture, symboles et détails locaux deviennent une mémoire visuelle.",
    icon: ScanLine,
  },
  {
    title: "Décliner",
    body: "Des règles fixes permettent de produire 111 identités uniques et cohérentes.",
    icon: Boxes,
  },
];

function SectionIntro({
  eyebrow,
  title,
  body,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <AnimatedReveal className={center ? "mx-auto grid max-w-5xl gap-4 text-center" : "grid max-w-5xl gap-4"}>
      <p className={light ? "text-[11px] uppercase tracking-[0.34em] text-white/60" : "text-[11px] uppercase tracking-[0.34em] text-[#003ACD]/65"}>
        {eyebrow}
      </p>
      <h2 className={light ? "font-display text-4xl leading-none text-white sm:text-5xl lg:text-6xl" : "font-display text-4xl leading-none text-[#111111] sm:text-5xl lg:text-6xl"}>
        {title}
      </h2>
      <p className={light ? "max-w-3xl text-base leading-8 text-white/68" : "max-w-3xl text-base leading-8 text-black/62"}>{body}</p>
    </AnimatedReveal>
  );
}

function GuidePanel({
  children,
  className = "",
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden border",
        dark ? "border-white/14 bg-white/[0.04]" : "border-black/12 bg-white",
        "before:absolute before:inset-0 before:opacity-35 before:[background-image:linear-gradient(rgba(0,58,205,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(0,58,205,0.14)_1px,transparent_1px)] before:[background-size:36px_36px]",
        className,
      ].join(" ")}
    >
      <div className="relative">{children}</div>
    </div>
  );
}

function Specification({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <div className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-black/15 py-5">
      <p className="font-mono text-xs text-[#003ACD]">{number}</p>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.12em]">{title}</h3>
        <p className="mt-2 text-sm leading-7 text-black/58">{body}</p>
      </div>
    </div>
  );
}

export function Projet111CaseStudy({ project }: Projet111CaseStudyProps) {
  return (
    <article className="overflow-hidden bg-[#f4f1e9] text-[#111111]">
      <section className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-[#0092CD] pb-16 pt-16 text-white">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="absolute -right-20 top-20 font-display text-[28rem] leading-none text-white/[0.08]">111</div>
        <Container className="relative grid min-h-[75vh] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <AnimatedReveal variant="left" className="space-y-8">
            <p className="text-[11px] uppercase tracking-[0.34em] text-white/65">{project.category}</p>
            <div className="space-y-5">
              <Image
                src={`${assetBase}/logo/projet111-logo-white.svg`}
                alt="Projet 111"
                width={680}
                height={300}
                priority
                unoptimized
                className="h-auto w-full max-w-xl"
              />
              <p className="max-w-xl text-2xl font-semibold leading-tight sm:text-3xl">
                Une ville entière traduite en système d’identité.
              </p>
            </div>
            <p className="max-w-xl text-base leading-8 text-white/72">
              111 quartiers, 16 arrondissements et une collection de récits locaux structurés par une seule grammaire visuelle.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/projects" variant="ghost">Retour aux projets</ButtonLink>
              <ButtonLink href="/contact" variant="secondary" className="border-white/20 bg-white text-ink">
                Discuter d’un système de marque
              </ButtonLink>
            </div>
          </AnimatedReveal>
          <AnimatedReveal variant="panel" delay={0.08}>
            <Projet111AssetFrame
              src={`${assetBase}/mockups/111-mockup-la-joliette-back.jpg`}
              alt="T-shirt La Joliette, Project 111"
              label="La Joliette / 02e arrondissement"
              caption="Le vêtement est une application : le véritable projet est le système territorial qui le rend possible."
              aspect="landscape"
              className="border-white/18"
            />
          </AnimatedReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.65fr]">
          <AnimatedReveal variant="left" className="space-y-10">
            <SectionIntro
              eyebrow="01 / Context"
              title="Marseille n’est pas une identité. C’est une collection d’identités."
              body={project.excerpt}
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="border-t-2 border-[#003ACD] pt-4">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-black/45">{metric.label}</p>
                  <p className="mt-3 font-display text-4xl">{metric.value}</p>
                </div>
              ))}
            </div>
            <p className="max-w-4xl font-display text-3xl leading-tight text-[#C80E0B] sm:text-4xl">
              Project 111 transforme les histoires locales, l’architecture et la cartographie en objets graphiques capables de former une archive culturelle cohérente.
            </p>
          </AnimatedReveal>
          <AnimatedReveal variant="right">
            <ProjectMetadata project={project} />
          </AnimatedReveal>
        </Container>
      </section>

      <section className="border-y border-black/10 bg-white py-20 sm:py-28">
        <Container className="space-y-14">
          <SectionIntro
            eyebrow="02 / Concept"
            title="Une grammaire commune. Cent onze récits différents."
            body="L’ambition est de préserver les histoires de quartier sans les uniformiser. Chaque identité conserve ses singularités tout en appartenant immédiatement à Project 111."
            center
          />
          <div className="grid gap-5 lg:grid-cols-4">
            {systemPrinciples.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedReveal key={item.title} delay={index * 0.06} className="border-t border-black/18 py-6">
                  <Icon className="h-6 w-6 text-[#C80E0B]" />
                  <p className="mt-10 font-display text-3xl">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-black/58">{item.body}</p>
                </AnimatedReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[#111111] py-20 text-white sm:py-28">
        <Container className="space-y-14">
          <SectionIntro
            eyebrow="03 / Logo system"
            title="Un signe compact pour représenter une ville plurielle."
            body="Le logotype existe comme marque principale, signature monochrome et label coloré. Sa construction volontairement brute relie système, matière et culture urbaine."
            light
          />
          <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
            <GuidePanel dark className="grid min-h-[30rem] place-items-center p-8">
              <div className="absolute left-8 top-8 h-px w-32 bg-[#0092CD]" />
              <div className="absolute left-8 top-8 h-32 w-px bg-[#0092CD]" />
              <Image
                src={`${assetBase}/logo/projet111-logo-white.svg`}
                alt="Logo principal Project 111"
                width={760}
                height={420}
                unoptimized
                className="h-auto w-full max-w-2xl"
              />
              <p className="absolute bottom-6 left-8 font-mono text-[10px] uppercase tracking-[0.24em] text-white/45">Primary identity / white</p>
            </GuidePanel>
            <div className="grid gap-5">
              <GuidePanel className="grid min-h-56 place-items-center bg-white p-8">
                <Image src={`${assetBase}/logo/projet111-logo-black.svg`} alt="Logo noir Project 111" width={480} height={260} unoptimized className="h-auto w-full max-w-sm" />
              </GuidePanel>
              <div className="grid grid-cols-3 gap-3">
                {["blue1", "red", "yellow1"].map((color) => (
                  <div key={color} className="grid aspect-square place-items-center border border-white/14 bg-white/[0.05] p-4">
                    <Image
                      src={`${assetBase}/labels/projet111-logo-${color}.svg`}
                      alt={`Label Project 111 ${color}`}
                      width={220}
                      height={220}
                      unoptimized
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <AnimatedReveal variant="left" className="space-y-6">
            <SectionIntro
              eyebrow="04 / Grid system"
              title="Le système doit rester lisible avant de devenir expressif."
              body="La construction relie cartographie, repère de quartier, architecture, flèches et typographie dans un format stable. La variation intervient à l’intérieur de règles mesurables."
            />
            <div>
              <Specification number="01" title="Cadre territorial" body="La carte fournit la structure commune à chaque composition." />
              <Specification number="02" title="Zone narrative" body="Les croquis locaux racontent le quartier sans masquer sa position." />
              <Specification number="03" title="Signal 111" body="Trois flèches issues du chiffre 1 organisent direction et rythme." />
            </div>
          </AnimatedReveal>
          <AnimatedReveal variant="right">
            <GuidePanel className="grid min-h-[38rem] place-items-center bg-[#003ACD] p-8">
              <div className="absolute inset-[10%] border border-white/30" />
              <div className="absolute inset-x-[10%] top-1/3 h-px bg-white/30" />
              <div className="absolute inset-y-[10%] left-1/3 w-px bg-white/30" />
              <div className="absolute inset-y-[10%] right-1/3 w-px bg-white/30" />
              <Image
                src={`${assetBase}/back-designs/111-back-cinq-avenues.png`}
                alt="Construction du back design Cinq-Avenues"
                width={720}
                height={980}
                unoptimized
                className="relative max-h-[32rem] w-auto object-contain"
              />
              <Ruler className="absolute bottom-6 right-6 h-6 w-6 text-white/60" />
            </GuidePanel>
          </AnimatedReveal>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container className="space-y-14">
          <SectionIntro
            eyebrow="05 / Typography"
            title="Duct Tape Alphabet : une typographie fabriquée, scannée, imparfaite."
            body="L’alphabet n’imite pas une texture urbaine. Il porte réellement la trace de sa fabrication. Cette matière analogique donne au système sa voix populaire et directe."
          />
          <AnimatedReveal className="overflow-hidden bg-[#111111] px-3 py-8 sm:px-6">
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-9">
              {alphabet.map((letter, index) => (
                <div key={`${letter}-${index}`} className="grid aspect-[3/4] place-items-center border border-white/12 bg-white/[0.03] p-2">
                  <Image
                    src={`${assetBase}/brand/${letter}.png`}
                    alt={`Duct Tape Alphabet ${letter}`}
                    width={220}
                    height={300}
                    unoptimized
                    className="max-h-full w-auto object-contain invert"
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 grid border-y border-white/16 py-6 lg:grid-cols-[1fr_2fr]">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/45">Alphabet specimen / scanned tape</p>
              <p className="mt-5 font-display text-5xl leading-none text-white sm:text-7xl lg:mt-0 lg:text-8xl">Marseille est multiple.</p>
            </div>
          </AnimatedReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-14">
          <SectionIntro
            eyebrow="06 / Color system"
            title="Six couleurs pour raconter Marseille sans la réduire."
            body="La palette puise dans la mer, les rues, les terres cuites, la lumière et les signes populaires. Chaque teinte fonctionne seule, mais gagne en force comme partie d’un système."
          />
          <div className="grid lg:grid-cols-6">
            {colors.map((color, index) => (
              <AnimatedReveal
                key={color.value}
                delay={index * 0.04}
                className="relative isolate flex min-h-[23rem] flex-col justify-between p-5 text-white"
              >
                <div className="absolute inset-0 -z-10" style={{ backgroundColor: color.value }} />
                <p className="font-mono text-xs uppercase">{color.value}</p>
                <div>
                  <p className="font-display text-3xl leading-none">{color.name}</p>
                  <p className="mt-3 text-xs leading-5 text-white/70">{color.note}</p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <Projet111AssetFrame
              src={`${assetBase}/brand/projet111-colors-1-2-3.jpg`}
              alt="Palette Project 111, couleurs 1 à 3"
              label="Mediterranean / Deep / Canebière"
              caption="Les couleurs sont documentées comme des composantes culturelles, pas comme de simples swatches."
              aspect="landscape"
            />
            <Projet111AssetFrame
              src={`${assetBase}/brand/projet111-colors-4-5-6.jpg`}
              alt="Palette Project 111, couleurs 4 à 6"
              label="Terracotta / Provençal / Soleil"
              caption="Une seconde famille plus chaude traduit matière, patrimoine et lumière."
              aspect="landscape"
            />
          </div>
        </Container>
      </section>

      <section className="bg-[#003ACD] py-20 text-white sm:py-28">
        <Container className="space-y-14">
          <SectionIntro
            eyebrow="07 / Graphic language"
            title="La flèche, la carte et le repère deviennent une syntaxe."
            body="Le langage graphique articule direction, localisation et mouvement. Les signes issus du chiffre 1 structurent la page, indiquent un territoire et relient chaque identité au système principal."
            light
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((sign, index) => (
              <AnimatedReveal key={sign} delay={index * 0.05}>
                <GuidePanel dark className="grid aspect-square place-items-center p-10">
                  <Image
                    src={`${assetBase}/brand/sign${sign}.png`}
                    alt={`Signe directionnel ${sign}`}
                    width={320}
                    height={420}
                    unoptimized
                    className="max-h-full w-auto object-contain invert"
                  />
                </GuidePanel>
              </AnimatedReveal>
            ))}
          </div>
          <div className="grid gap-5 border-t border-white/20 pt-7 lg:grid-cols-3">
            {[
              ["Direction", "Les trois 1 deviennent des flèches et organisent la lecture."],
              ["Localisation", "La carte situe le quartier avant même d’en raconter les détails."],
              ["Cohérence", "Une même syntaxe permet aux 111 récits de coexister."],
            ].map(([title, body], index) => (
              <AnimatedReveal key={title} delay={index * 0.06}>
                <p className="font-mono text-[10px] text-white/45">0{index + 1}</p>
                <h3 className="mt-4 font-display text-3xl">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{body}</p>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-14">
          <SectionIntro
            eyebrow="08 / Back design system"
            title="Le cœur du projet : 111 quartiers, 111 compositions."
            body="Chaque dos combine carte, architecture, localisation et signal directionnel. L’enjeu n’est pas de produire une série homogène, mais une collection capable d’accueillir la différence."
          />
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <AnimatedReveal variant="left">
              <Projet111AssetFrame
                src={`${assetBase}/back-designs/111-back-la-joliette.png`}
                alt="Back design La Joliette"
                label="Hero identity / La Joliette"
                caption="Une identité locale construite à partir de l’architecture portuaire et de sa position dans Marseille."
                aspect="portrait"
                contain
              />
            </AnimatedReveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {neighborhoods.slice(1, 5).map((item, index) => (
                <AnimatedReveal key={item.slug} delay={index * 0.05}>
                  <Projet111AssetFrame
                    src={`${assetBase}/back-designs/111-back-${item.slug}.png`}
                    alt={`Back design ${item.name}`}
                    label={item.name}
                    caption="Même grille, architecture différente, récit singulier."
                    aspect="portrait"
                    contain
                  />
                </AnimatedReveal>
              ))}
            </div>
          </div>
          <AnimatedReveal className="grid gap-px bg-black/12 sm:grid-cols-3 lg:grid-cols-6">
            {neighborhoods.map((item, index) => (
              <div key={item.slug} className="bg-white p-5">
                <p className="font-mono text-[10px] text-black/40">0{index + 1} / 111</p>
                <p className="mt-10 font-display text-2xl">{item.name}</p>
                <div className="mt-4 h-1 w-full" style={{ backgroundColor: item.color }} />
              </div>
            ))}
          </AnimatedReveal>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container className="space-y-14">
          <SectionIntro
            eyebrow="09 / Arrondissement system"
            title="Seize repères secondaires pour une lecture immédiate."
            body="Les designs cœur constituent le niveau compact du système. Ils indiquent l’arrondissement, créent l’appartenance et permettent une identification rapide sans répéter le récit complet du dos."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {neighborhoods.map((item, index) => (
              <AnimatedReveal key={item.slug} delay={index * 0.04}>
                <GuidePanel className="grid aspect-[4/3] place-items-center p-8">
                  <Image
                    src={`${assetBase}/heart-designs/111-front-${item.slug}.png`}
                    alt={`Système cœur ${item.name}`}
                    width={480}
                    height={360}
                    unoptimized
                    className="max-h-full w-auto object-contain"
                  />
                  <p className="absolute bottom-4 left-5 text-[10px] uppercase tracking-[0.22em] text-black/45">{item.name}</p>
                </GuidePanel>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#C80E0B] py-20 text-white sm:py-28">
        <Container className="space-y-14">
          <SectionIntro
            eyebrow="10 / Gabian system"
            title="Des symboles de quartier à collectionner."
            body="Les gabians ajoutent une couche de connivence. Chaque personnage cache une référence locale, un easter egg ou un détail culturel qui récompense celles et ceux qui connaissent Marseille."
            light
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {neighborhoods.map((item, index) => (
              <AnimatedReveal key={item.slug} delay={index * 0.04} className="grid min-h-72 place-items-center border border-white/20 bg-white p-5 text-[#111111]">
                <Image
                  src={`${assetBase}/gabians/111-gabian-${item.slug}.png`}
                  alt={`Gabian ${item.name}`}
                  width={360}
                  height={360}
                  unoptimized
                  className="max-h-44 w-auto object-contain"
                />
                <p className="mt-5 text-center text-[10px] uppercase tracking-[0.2em]">{item.name}</p>
              </AnimatedReveal>
            ))}
          </div>
          <p className="max-w-4xl font-display text-3xl leading-tight text-white/90 sm:text-5xl">
            Un système d’identité devient culturel quand il laisse de la place aux détails que seuls les habitants reconnaissent.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <AnimatedReveal variant="left" className="space-y-6">
            <SectionIntro
              eyebrow="11 / Label system"
              title="La signature relie chaque quartier à la collection."
              body="Le label n’est pas un détail décoratif. Il est le point commun stable, la preuve d’appartenance au système Project 111 et le lien entre identité territoriale et objet produit."
            />
            <div className="grid grid-cols-3 gap-3">
              {["blue2", "orange", "yellow2", "red", "blue1", "yellow1"].map((color) => (
                <div key={color} className="grid aspect-square place-items-center border border-black/12 bg-white p-3">
                  <Image src={`${assetBase}/labels/projet111-logo-${color}.svg`} alt={`Label ${color}`} width={200} height={200} unoptimized className="h-full w-full object-contain" />
                </div>
              ))}
            </div>
          </AnimatedReveal>
          <AnimatedReveal variant="right">
            <GuidePanel className="grid min-h-[34rem] place-items-center bg-[#F2D909] p-10">
              <div className="absolute left-[12%] top-[12%] h-px w-[32%] bg-black/35" />
              <div className="absolute left-[12%] top-[12%] h-[32%] w-px bg-black/35" />
              <Image src={`${assetBase}/logo/projet111-logo-black.svg`} alt="Signature Project 111" width={720} height={420} unoptimized className="h-auto w-full max-w-xl" />
              <BadgeCheck className="absolute bottom-7 right-7 h-7 w-7" />
            </GuidePanel>
          </AnimatedReveal>
        </Container>
      </section>

      <section className="border-y border-black/10 bg-white py-20 sm:py-28">
        <Container className="space-y-14">
          <SectionIntro
            eyebrow="12 / Applications"
            title="Le système quitte le guide et entre dans la ville."
            body="Les mockups testent la hiérarchie, l’échelle et la présence des identités dans un contexte réel. Ils montrent surtout qu’un même cadre peut accueillir des quartiers très différents."
          />
          <div className="grid gap-5 lg:grid-cols-12">
            {neighborhoods.map((item, index) => (
              <AnimatedReveal
                key={item.slug}
                delay={index * 0.04}
                className={index === 0 || index === 5 ? "lg:col-span-8" : "lg:col-span-4"}
              >
                <Projet111AssetFrame
                  src={`${assetBase}/mockups/111-mockup-${item.slug}${item.slug === "soon" ? "-front-and-back" : "-back"}.jpg`}
                  alt={`Application ${item.name}`}
                  label={item.name}
                  caption="Le vêtement devient support de mémoire territoriale."
                  aspect="landscape"
                />
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#111111] py-20 text-white sm:py-28">
        <Container className="space-y-14">
          <SectionIntro
            eyebrow="13 / Campaign"
            title="Une campagne pour révéler le système, pas seulement la collection."
            body="Les films de lancement mettent en mouvement les quartiers, les détails graphiques, les gabians et les objets. Le rythme donne à voir l’échelle du projet et sa capacité à fédérer."
            light
            center
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <AnimatedReveal variant="left">
              <Projet111VideoFrame
                src={`${assetBase}/videos/111-brand-film.mp4`}
                title="Brand film"
                caption="Le film de marque expose le langage visuel, les principes de collection et les récits locaux."
              />
            </AnimatedReveal>
            <AnimatedReveal variant="right">
              <Projet111VideoFrame
                src={`${assetBase}/videos/111-launch-film.mp4`}
                title="Launch film"
                caption="Le film de lancement transforme le système en énergie de campagne."
              />
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#0092CD] py-24 text-white sm:py-32">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:44px_44px]" />
        <Container className="relative grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
          <AnimatedReveal variant="left" className="space-y-5">
            <p className="text-[11px] uppercase tracking-[0.34em] text-white/60">14 / Final impact</p>
            <div className="grid grid-cols-3 gap-3">
              <div className="border-t border-white/40 pt-4"><p className="font-display text-5xl">111</p><p className="mt-2 text-xs text-white/65">quartiers</p></div>
              <div className="border-t border-white/40 pt-4"><p className="font-display text-5xl">16</p><p className="mt-2 text-xs text-white/65">arrondissements</p></div>
              <div className="border-t border-white/40 pt-4"><p className="font-display text-5xl">1</p><p className="mt-2 text-xs text-white/65">système</p></div>
            </div>
          </AnimatedReveal>
          <AnimatedReveal variant="right" className="space-y-7">
            <h2 className="font-display text-5xl leading-none sm:text-6xl lg:text-8xl">
              Une archive culturelle capable de représenter une ville entière.
            </h2>
            <p className="max-w-3xl text-base leading-8 text-white/72">{project.impact}</p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/projects" variant="ghost">Voir les autres projets</ButtonLink>
              <ButtonLink href="/contact" variant="secondary" className="border-white/20 bg-white text-ink">
                Construire un système d’identité
              </ButtonLink>
            </div>
          </AnimatedReveal>
        </Container>
      </section>
    </article>
  );
}
