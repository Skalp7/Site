import Image from "next/image";
import { Aperture, Grid3X3, Lightbulb, ScanLine, Waves } from "lucide-react";
import { ReactNode } from "react";

import { DauphinsAssetFrame } from "@/components/projects/dauphins/dauphins-asset-frame";
import { ProjectMetadata } from "@/components/projects/project-metadata";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Project } from "@/types";

type DauphinsCaseStudyProps = { project: Project };

const base = "/projects/dauphins";
const assets = {
  intro: `${base}/mockups/presentation-introduction-a0.jpg`,
  spaces: `${base}/mockups/presentation-restaurant-bassin-exterieur-a0.jpg`,
  light: `${base}/mockups/presentation-intention-plan-lumiere-a1.jpg`,
  plans: `${base}/mockups/architectural_plans-mockup.jpg`,
  axo: `${base}/mockups/presentation-axos-soleil-lune-a4.jpg`,
  technical: `${base}/mockups/presentation-technique-programme-a4.jpg`,
  colors: `${base}/brand/color-palette.jpg`,
};

const pillars = [
  { icon: Grid3X3, title: "Structurer", body: "Hiérarchiser 12 planches et plusieurs formats sans rompre la lecture." },
  { icon: ScanLine, title: "Clarifier", body: "Transformer 15 plans techniques en outils de communication visuelle." },
  { icon: Aperture, title: "Atmosphériser", body: "Retoucher 10 images 3D pour révéler matière, profondeur et ambiance." },
  { icon: Lightbulb, title: "Guider", body: "Utiliser la lumière comme fil narratif entre les espaces." },
];

function SectionIntro({ index, eyebrow, title, body, light = false }: { index: string; eyebrow: string; title: string; body: string; light?: boolean }) {
  return (
    <AnimatedReveal className="grid max-w-5xl gap-4">
      <p className={light ? "font-mono text-[9px] uppercase tracking-[0.28em] text-[#9fc8d5]" : "font-mono text-[9px] uppercase tracking-[0.28em] text-[#557887]"}>
        {index} / {eyebrow}
      </p>
      <h2 className={light ? "font-display text-4xl leading-none text-white sm:text-5xl lg:text-6xl" : "font-display text-4xl leading-none text-[#19333e] sm:text-5xl lg:text-6xl"}>{title}</h2>
      <p className={light ? "max-w-3xl text-base leading-8 text-white/66" : "max-w-3xl text-base leading-8 text-[#19333e]/65"}>{body}</p>
    </AnimatedReveal>
  );
}

function EditorialPanel({ children, className = "", dark = false }: { children: ReactNode; className?: string; dark?: boolean }) {
  return (
    <div className={`relative overflow-hidden border ${dark ? "border-white/14 bg-white/[0.04]" : "border-[#7894a2]/20 bg-white"} ${className}`}>
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(85,120,135,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(85,120,135,0.16)_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="relative min-h-[inherit]">{children}</div>
    </div>
  );
}

function Note({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <div className="grid grid-cols-[3rem_1fr] gap-3 border-t border-[#7894a2]/25 py-5">
      <p className="font-mono text-[9px] text-[#557887]">{number}</p>
      <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#19333e]">{title}</p><p className="mt-2 text-sm leading-7 text-[#19333e]/58">{body}</p></div>
    </div>
  );
}

export function DauphinsCaseStudy({ project }: DauphinsCaseStudyProps) {
  return (
    <article className="overflow-hidden bg-[#f1f4f3] text-[#19333e]">
      <section className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-[#dfe8e9] py-16">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(151,190,203,0.38),rgba(20,48,59,0.16))]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(85,120,135,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(85,120,135,0.14)_1px,transparent_1px)] [background-size:52px_52px]" />
        <Container className="relative grid min-h-[74vh] gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <AnimatedReveal variant="left" className="space-y-8">
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#557887]">{project.category}</p>
            <div className="space-y-5">
              <h1 className="font-display text-[clamp(4rem,8vw,8.5rem)] leading-[0.84] text-[#19333e]">Cercle des Dauphins</h1>
              <p className="max-w-2xl text-xl font-semibold leading-tight text-[#557887] sm:text-2xl">
                Conception graphique et valorisation visuelle d’un projet de rénovation intérieure inspiré par la mer, la lumière et la matérialité.
              </p>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#19333e]/66">
              Une intervention éditoriale et visuelle au service d’un projet architectural conçu par une étudiante en architecture intérieure à l’École de Condé.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/projects" variant="secondary">Retour aux projets</ButtonLink>
              <ButtonLink href="/contact">Discuter d’un projet éditorial</ButtonLink>
            </div>
          </AnimatedReveal>
          <AnimatedReveal variant="panel" delay={0.08}>
            <DauphinsAssetFrame src={assets.intro} alt="Planche d’introduction Cercle des Dauphins" label="Hero / planche d’introduction A0" caption="La planche installe immédiatement le dialogue entre bâtiment, mer, lumière et territoire." aspect="landscape" priority />
          </AnimatedReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.08fr_0.62fr]">
          <AnimatedReveal variant="left" className="space-y-10">
            <SectionIntro index="01" eyebrow="Project overview" title="Rendre un projet architectural complexe lisible, sensible et immersif." body={project.excerpt} />
            <div className="grid gap-4 sm:grid-cols-3">
              {project.metrics.map((metric) => <div key={metric.label} className="border-t border-[#557887] pt-4"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#557887]">{metric.label}</p><p className="mt-3 font-display text-5xl">{metric.value}</p></div>)}
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((item, index) => { const Icon = item.icon; return <div key={item.title} className="border border-[#7894a2]/20 bg-white p-5"><Icon className="h-5 w-5 text-[#557887]" /><p className="mt-8 font-display text-2xl">{item.title}</p><p className="mt-3 text-xs leading-6 text-[#19333e]/58">{item.body}</p><p className="mt-5 font-mono text-[8px] text-[#7894a2]">0{index + 1}</p></div>; })}
            </div>
          </AnimatedReveal>
          <AnimatedReveal variant="right"><ProjectMetadata project={project} /></AnimatedReveal>
        </Container>
      </section>

      <section className="border-y border-[#7894a2]/20 bg-white py-20 sm:py-28">
        <Container className="space-y-14">
          <SectionIntro index="02" eyebrow="Editorial layout system" title="Une grille calme pour articuler image, plan, texte et respiration." body="Les formats A0, A1 et A4 partagent une logique éditoriale commune : grandes zones atmosphériques, détails techniques cadrés, typographie discrète et rythmes verticaux qui guident le regard." />
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <div><Note number="01" title="Hiérarchie" body="Une lecture immédiate, puis des niveaux de détail destinés à l’analyse." /><Note number="02" title="Formats" body="La grille s’adapte aux planches A0, A1 et A4 sans perdre son rythme." /><Note number="03" title="Relations" body="Plans, rendus et textes se répondent plutôt que de fonctionner isolément." /></div>
            <EditorialPanel className="min-h-[32rem] p-8">
              <div className="absolute inset-[8%] border border-[#557887]/30" /><div className="absolute inset-y-[8%] left-1/3 w-px bg-[#557887]/25" /><div className="absolute inset-y-[8%] right-1/3 w-px bg-[#557887]/25" /><div className="absolute inset-x-[8%] top-1/2 h-px bg-[#557887]/25" />
              <Image src={assets.intro} alt="Grille éditoriale de la planche A0" fill unoptimized className="object-cover opacity-78 mix-blend-multiply" />
              <p className="absolute bottom-5 left-5 font-mono text-[8px] uppercase tracking-[0.2em] text-[#557887]">A0 / modular editorial grid</p>
            </EditorialPanel>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-14">
          <SectionIntro index="03" eyebrow="Presentation boards" title="Douze planches conçues comme une publication d’architecture." body="Les planches finales forment une séquence cohérente : contexte, intentions, spatialités, plans techniques et lumière construisent progressivement la compréhension du projet." />
          <DauphinsAssetFrame src={assets.spaces} alt="Planches restaurant bassin et extérieur" label="Séquence A0 / expériences spatiales" caption="Une vue d’ensemble qui montre le rythme entre images 3D, axonométries, coupes, textes et matières." aspect="wide" />
          <div className="grid gap-5 lg:grid-cols-3">
            <DauphinsAssetFrame src={assets.intro} alt="Planche introduction" label="Introduction" aspect="portrait" position="center" />
            <DauphinsAssetFrame src={assets.light} alt="Planches lumière" label="Intention + plan lumière" aspect="portrait" position="center" />
            <DauphinsAssetFrame src={assets.technical} alt="Planches techniques" label="Programme + technique" aspect="portrait" position="center" />
          </div>
        </Container>
      </section>

      <section className="bg-[#19333e] py-20 text-white sm:py-28">
        <Container className="space-y-14">
          <SectionIntro index="04" eyebrow="Architectural drawings" title="Les plans deviennent des instruments de lecture." body="Les quinze plans, coupes et axonométries sont harmonisés pour rendre visibles circulations, programmes, relations spatiales et dialogue avec le paysage." light />
          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <DauphinsAssetFrame src={assets.plans} alt="Plans architecturaux valorisés" label="Plan composition / visual clarity" caption="Le bleu maritime hiérarchise les zones et allège la lecture technique." aspect="landscape" />
            <div className="grid gap-5">
              <DauphinsAssetFrame src={assets.axo} alt="Axonométries soleil lune" label="Axonométrie / temporalité" aspect="square" position="center" />
              <div className="border border-white/15 p-5"><p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#9fc8d5]">Drawing protocol</p><p className="mt-5 font-display text-3xl">15 plans reliés par une même hiérarchie visuelle.</p><p className="mt-4 text-sm leading-7 text-white/58">Traits, aplats, cartouches et recadrages facilitent le passage entre lecture technique et projection sensible.</p></div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-14">
          <SectionIntro index="05" eyebrow="3D visualization" title="Traiter les rendus comme des photographies d’architecture." body="Les images 3D sont composées, retouchées et intégrées pour restituer lumière naturelle, profondeur, matérialité et vues croisées vers la mer." />
          <div className="grid gap-5 lg:grid-cols-12">
            <DauphinsAssetFrame src={assets.spaces} alt="Restaurant ouvert sur la mer" label="Restaurant / lumière naturelle" caption="Bois chauds, lin blanc cassé et vues vers la mer." aspect="landscape" position="18% 16%" className="lg:col-span-8" />
            <DauphinsAssetFrame src={assets.spaces} alt="Bassin intérieur" label="Bassin / lumière comme matière" caption="Mosaïque, mur perforé et reflets." aspect="portrait" position="50% 18%" className="lg:col-span-4" />
            <DauphinsAssetFrame src={assets.light} alt="Vestiaire et couloir" label="Transition / profondeur marine" caption="Un espace sombre guidé par une lumière rare." aspect="landscape" position="22% 30%" className="lg:col-span-5" />
            <DauphinsAssetFrame src={assets.light} alt="Ambiance restaurant nocturne" label="Ambiance / lumière artificielle" caption="La lumière révèle les volumes et les matières." aspect="landscape" position="80% 80%" className="lg:col-span-7" />
          </div>
        </Container>
      </section>

      <section className="border-y border-[#7894a2]/20 bg-white py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <AnimatedReveal variant="left" className="space-y-7">
            <SectionIntro index="06" eyebrow="Image retouching" title="Harmoniser pour transformer une image en atmosphère." body="La retouche corrige, équilibre et relie les rendus : température, lumière, végétation, profondeur et matières sont travaillées pour produire un langage visuel cohérent." />
            <Note number="01" title="Correction" body="Équilibrage des contrastes, couleurs et valeurs lumineuses." /><Note number="02" title="Intégration" body="Ajout de végétation, textures et détails pour renforcer la crédibilité." /><Note number="03" title="Cohérence" body="Harmonisation des rendus afin qu’ils appartiennent au même récit." />
          </AnimatedReveal>
          <AnimatedReveal variant="right">
            <EditorialPanel className="min-h-[36rem]">
              <Image src={assets.intro} alt="Détail retouche et intégration" fill unoptimized className="object-cover" style={{ objectPosition: "50% 40%" }} />
              <div className="absolute inset-y-0 left-1/2 w-px bg-white/80" /><p className="absolute left-5 top-5 bg-white/80 px-3 py-2 font-mono text-[8px] uppercase tracking-[0.2em]">atmosphere / integration / balance</p>
            </EditorialPanel>
          </AnimatedReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-14">
          <SectionIntro index="07" eyebrow="Materials & textures" title="Construire une bibliothèque matérielle inspirée du paysage maritime." body="Bois chauds, lin blanc cassé, mosaïque, roche, surfaces minérales et reflets aquatiques donnent au projet une identité élégante, accueillante et subtilement marine." />
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <DauphinsAssetFrame src={assets.colors} alt="Palette matières Cercle des Dauphins" label="Material palette" caption="Une palette calme entre bleus maritimes, sable, minéral et végétal." aspect="landscape" />
            <div className="grid grid-cols-2 gap-3">
              {["#dbe9ed", "#8eb8c8", "#e8ddcd", "#947f68", "#18323d", "#758f75"].map((color, index) => <div key={color} className="flex aspect-square flex-col justify-between p-4" style={{ backgroundColor: color }}><span className="font-mono text-[8px] uppercase text-white/70">M-0{index + 1}</span><span className="text-xs text-white/80">{["Reflet", "Mer", "Lin", "Bois", "Profondeur", "Végétal"][index]}</span></div>)}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#e1e8e8] py-20 sm:py-28">
        <Container className="space-y-14">
          <SectionIntro index="08" eyebrow="Custom furniture" title="Le mobilier participe à la narration spatiale." body="Les pièces dessinées et visualisées prolongent le vocabulaire du projet : lignes souples, présence sculpturale, détails marins et intégration précise dans les rendus." />
          <div className="grid gap-5 lg:grid-cols-3">
            <DauphinsAssetFrame src={assets.spaces} alt="Bar sculptural" label="Bar / inspiration coquillage" aspect="portrait" position="18% 18%" />
            <DauphinsAssetFrame src={assets.technical} alt="Mobilier du club" label="Mobilier / intégration technique" aspect="portrait" position="50% 50%" />
            <DauphinsAssetFrame src={assets.spaces} alt="Mobilier restaurant" label="Restaurant / expérience de partage" aspect="portrait" position="24% 14%" />
          </div>
        </Container>
      </section>

      <section className="bg-[#121d22] py-20 text-white sm:py-28">
        <Container className="space-y-14">
          <SectionIntro index="09" eyebrow="Lighting design" title="La lumière devient une matière et un outil de parcours." body="L’intention lumière et le plan lumière traduisent deux régimes complémentaires : lumière naturelle ouverte sur la mer et lumière artificielle plus rare, précieuse et enveloppante." light />
          <DauphinsAssetFrame src={assets.light} alt="Intention et plan lumière" label="A1 / intention + plan lumière" caption="La planche articule ambiance, intention et lecture technique dans une même séquence." aspect="wide" />
          <div className="grid gap-5 lg:grid-cols-3">
            {["Lumière naturelle", "Lumière guidée", "Lumière matière"].map((title, index) => <div key={title} className="border-t border-white/25 pt-5"><p className="font-mono text-[8px] text-[#9fc8d5]">0{index + 1}</p><p className="mt-4 font-display text-3xl">{title}</p><p className="mt-3 text-sm leading-7 text-white/58">{["Ouvre les espaces vers la mer et accompagne le temps.", "Oriente les transitions et rend le parcours sensible.", "Révèle textures, mosaïque, roche et volumes."][index]}</p></div>)}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-16">
          <SectionIntro index="10" eyebrow="Spatial experiences" title="Trois atmosphères, une même relation à la mer et à la lumière." body="Le récit visuel accompagne le passage entre ouverture, profondeur et contemplation." />
          {[
            { title: "Restaurant", text: "Ouvert sur la mer, le restaurant associe lumière naturelle, bois chauds, lin blanc cassé et tables plus profondes. Le bar sculptural évoque le coquillage tandis que les textures reflètent subtilement l’eau.", src: assets.spaces, pos: "18% 14%" },
            { title: "Vestiaire / couloir", text: "Plus sombre et enveloppant, cet espace s’inspire des profondeurs marines. Une lumière rare guide la transition et installe un contraste immersif avec les espaces ouverts.", src: assets.light, pos: "18% 24%" },
            { title: "Bassin", text: "Cœur du bâtiment, le bassin est structuré par la lumière naturelle, les ouvertures géométriques du plafond, la mosaïque, le mur perforé et la roche conservée comme ancrage au paysage.", src: assets.spaces, pos: "50% 18%" },
          ].map((space, index) => <div key={space.title} className="grid gap-8 border-t border-[#7894a2]/25 pt-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-center"><AnimatedReveal variant="left"><p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#557887]">Experience 0{index + 1}</p><h3 className="mt-4 font-display text-5xl">{space.title}</h3><p className="mt-5 max-w-xl text-sm leading-8 text-[#19333e]/62">{space.text}</p></AnimatedReveal><AnimatedReveal variant="right"><DauphinsAssetFrame src={space.src} alt={space.title} aspect="landscape" position={space.pos} /></AnimatedReveal></div>)}
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#8eb8c8] py-24 text-white sm:py-32">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:48px_48px]" />
        <Container className="relative grid gap-10 lg:grid-cols-[0.5fr_1.5fr] lg:items-end">
          <AnimatedReveal variant="left"><Waves className="h-10 w-10" /><p className="mt-8 font-mono text-[9px] uppercase tracking-[0.25em] text-white/65">11 / Final impact</p></AnimatedReveal>
          <AnimatedReveal variant="right" className="space-y-7"><h2 className="font-display text-5xl leading-none sm:text-6xl lg:text-8xl">Le graphisme transforme le projet architectural en expérience éditoriale.</h2><p className="max-w-3xl text-base leading-8 text-white/72">{project.impact}</p><div className="flex flex-wrap gap-3"><ButtonLink href="/projects" variant="ghost">Voir les autres projets</ButtonLink><ButtonLink href="/contact" variant="secondary" className="border-white/20 bg-white text-ink">Construire un récit visuel</ButtonLink></div></AnimatedReveal>
        </Container>
      </section>
    </article>
  );
}
