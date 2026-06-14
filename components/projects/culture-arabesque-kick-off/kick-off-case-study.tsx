import { Captions, CirclePlay, Languages, Radio, Shield, Volume2 } from "lucide-react";
import { ReactNode } from "react";

import { ProjectMetadata } from "@/components/projects/project-metadata";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Project } from "@/types";

type KickOffCaseStudyProps = { project: Project };

const colors = ["#071a18", "#167967", "#f2c94c", "#f5f1e8", "#e85245", "#246e87"];

function SectionIntro({
  index,
  eyebrow,
  title,
  body,
  light = false,
}: {
  index: string;
  eyebrow: string;
  title: string;
  body: string;
  light?: boolean;
}) {
  return (
    <AnimatedReveal className="grid max-w-5xl gap-4">
      <p className={light ? "font-mono text-[9px] uppercase tracking-[0.28em] text-[#f2c94c]" : "font-mono text-[9px] uppercase tracking-[0.28em] text-[#167967]"}>
        {index} / {eyebrow}
      </p>
      <h2 className={light ? "font-display text-4xl leading-none text-white sm:text-5xl lg:text-6xl" : "font-display text-4xl leading-none text-[#071a18] sm:text-5xl lg:text-6xl"}>
        {title}
      </h2>
      <p className={light ? "max-w-3xl text-base leading-8 text-white/65" : "max-w-3xl text-base leading-8 text-[#071a18]/62"}>{body}</p>
    </AnimatedReveal>
  );
}

function SystemFrame({
  label,
  caption,
  children,
  className = "",
  dark = false,
}: {
  label: string;
  caption?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <figure className={`overflow-hidden border ${dark ? "border-white/15 bg-[#071a18]" : "border-[#071a18]/15 bg-white"} ${className}`}>
      <div className="relative min-h-[24rem] overflow-hidden">{children}</div>
      <figcaption className={dark ? "border-t border-white/15 px-5 py-4 text-white" : "border-t border-[#071a18]/12 px-5 py-4 text-[#071a18]"}>
        <p className={dark ? "text-[9px] uppercase tracking-[0.25em] text-[#f2c94c]" : "text-[9px] uppercase tracking-[0.25em] text-[#167967]"}>{label}</p>
        {caption ? <p className={dark ? "mt-2 text-sm leading-6 text-white/58" : "mt-2 text-sm leading-6 text-[#071a18]/58"}>{caption}</p> : null}
      </figcaption>
    </figure>
  );
}

function RibbonMark({ ball = true, muted = false }: { ball?: boolean; muted?: boolean }) {
  return (
    <div className="relative h-64 w-64">
      <div className={`absolute left-1/2 top-[18%] h-32 w-8 -translate-x-1/2 rotate-[-12deg] rounded-full ${muted ? "bg-[#071a18]/28" : "bg-[#071a18]"}`} />
      <div className={`absolute left-[27%] top-[20%] h-8 w-28 -rotate-[28deg] rounded-full ${muted ? "bg-[#071a18]/28" : "bg-[#071a18]"}`} />
      <div className={`absolute right-[25%] top-[18%] h-8 w-28 rotate-[32deg] rounded-full ${muted ? "bg-[#071a18]/28" : "bg-[#071a18]"}`} />
      <div className={`absolute left-1/2 top-[8%] h-24 w-48 -translate-x-1/2 rounded-[50%] border-[14px] ${muted ? "border-[#167967]/30" : "border-[#167967]"} border-b-transparent`} />
      <div className={`absolute left-1/2 top-[25%] h-24 w-48 -translate-x-1/2 rotate-180 rounded-[50%] border-[14px] ${muted ? "border-[#167967]/30" : "border-[#167967]"} border-b-transparent`} />
      {ball ? <div className="absolute right-[12%] top-[7%] grid h-16 w-16 place-items-center rounded-full border-4 border-[#071a18] bg-[#f2c94c] text-[9px] font-bold uppercase tracking-[0.12em]">Ball</div> : null}
    </div>
  );
}

function MotionTimeline() {
  return (
    <div className="absolute inset-[8%] flex flex-col justify-between rounded-[1.25rem] border border-white/18 bg-[#06120f]/88 p-5 text-white shadow-2xl">
      <div className="flex items-center justify-between">
        <p className="text-[9px] uppercase tracking-[0.24em] text-[#f2c94c]">Kick off Insta / edit 01</p>
        <div className="flex gap-2"><span className="h-2 w-2 rounded-full bg-[#e85245]" /><span className="h-2 w-2 rounded-full bg-[#f2c94c]" /></div>
      </div>
      <div className="grid place-items-center"><CirclePlay className="h-16 w-16 text-white/90" /></div>
      <div className="space-y-2">
        {["bg-[#167967]", "bg-[#f2c94c]", "bg-[#246e87]", "bg-white/20"].map((color, index) => (
          <div key={color} className="grid grid-cols-[4rem_1fr] items-center gap-3">
            <span className="font-mono text-[8px] text-white/40">0{index + 1}:0{index * 3}</span>
            <div className="grid h-3 grid-cols-6 gap-1">{Array.from({ length: 6 }).map((_, item) => <span key={item} className={`${color} rounded-sm ${item === 4 ? "opacity-50" : "opacity-100"}`} />)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function KickOffCaseStudy({ project }: KickOffCaseStudyProps) {
  return (
    <article className="overflow-hidden bg-[#f5f1e8] text-[#071a18]">
      <section className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-[#071a18] py-16 text-white">
        <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(242,201,76,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(242,201,76,0.12)_1px,transparent_1px)] [background-size:52px_52px]" />
        <div className="absolute -right-24 top-1/3 h-[34rem] w-[34rem] rounded-full border-[70px] border-[#167967]/40" />
        <Container className="relative grid min-h-[75vh] gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <AnimatedReveal variant="left" className="space-y-8">
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#f2c94c]">{project.category}</p>
            <div className="space-y-5">
              <h1 className="font-display text-[clamp(3.8rem,8vw,8.4rem)] leading-[0.84]">Kick off Insta</h1>
              <p className="max-w-2xl text-xl font-semibold leading-tight text-[#f2c94c] sm:text-2xl">Culture Arabesque — Film & Foot</p>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/64">{project.shortPitch}</p>
            <div className="flex flex-wrap gap-3"><ButtonLink href="/projects" variant="ghost">Retour aux projets</ButtonLink><ButtonLink href="/contact" variant="secondary">Parler motion design</ButtonLink></div>
          </AnimatedReveal>
          <AnimatedReveal variant="panel" delay={0.08}>
            <SystemFrame dark label="Event identity / motion-ready mark" caption="Un geste historique adapté à l’énergie du football et au dialogue interculturel.">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(242,201,76,0.28),transparent_20%),linear-gradient(135deg,#167967,#071a18_62%)]" />
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:36px_36px]" />
              <div className="relative grid min-h-[24rem] place-items-center"><RibbonMark /></div>
            </SystemFrame>
          </AnimatedReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.08fr_0.62fr]">
          <AnimatedReveal variant="left" className="space-y-10">
            <SectionIntro index="01" eyebrow="Project overview" title="Le football comme langage commun entre Marseille et Hambourg." body={project.excerpt} />
            <div className="grid gap-4 sm:grid-cols-3">{project.metrics.map((metric) => <div key={metric.label} className="border-t border-[#167967] pt-4"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#167967]">{metric.label}</p><p className="mt-3 font-display text-3xl sm:text-4xl">{metric.value}</p></div>)}</div>
          </AnimatedReveal>
          <AnimatedReveal variant="right"><ProjectMetadata project={project} /></AnimatedReveal>
        </Container>
      </section>

      <section className="border-y border-[#071a18]/12 bg-white py-20 sm:py-28">
        <Container className="space-y-14">
          <SectionIntro index="02" eyebrow="Context & objectives" title="Maintenir le lien à distance, sans perdre l’énergie de la rencontre." body="Pendant la pandémie, Kick off Insta prolonge la Coupe arabesques sous forme numérique. Vidéos, ateliers et challenges deviennent un terrain d’échange autour du fair-play, de l’identité, de l’Europe, de la démocratie et du climat." />
          <div className="grid gap-4 lg:grid-cols-3">
            {[{ icon: Languages, title: "Dialogue", body: "Une circulation claire entre français et allemand." }, { icon: Shield, title: "Collectif", body: "Le sport comme point de rencontre et d’appartenance." }, { icon: Radio, title: "Numérique", body: "Une présence audiovisuelle conçue pour maintenir le lien." }].map((item) => { const Icon = item.icon; return <AnimatedReveal key={item.title} className="border border-[#071a18]/12 p-6"><Icon className="h-6 w-6 text-[#167967]" /><h3 className="mt-10 font-display text-3xl">{item.title}</h3><p className="mt-3 text-sm leading-7 text-[#071a18]/58">{item.body}</p></AnimatedReveal>; })}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-14">
          <SectionIntro index="03" eyebrow="Logo redesign" title="Faire entrer le ballon dans le geste, sans casser l’identité d’origine." body="La silhouette et son ruban restent le point de départ. En dupliquant le ruban en symétrie au-dessus du personnage, le ballon s’inscrit naturellement dans une trajectoire qui transforme aussi le geste en arrêt de gardien." />
          <div className="grid gap-5 lg:grid-cols-2">
            <SystemFrame label="01 / Existing visual logic" caption="Silhouette, mouvement et ruban : les codes conservés."><div className="absolute inset-0 bg-[#edf1eb]" /><div className="absolute inset-0 opacity-35 [background-image:linear-gradient(#16796733_1px,transparent_1px),linear-gradient(90deg,#16796733_1px,transparent_1px)] [background-size:32px_32px]" /><div className="relative grid min-h-[24rem] place-items-center"><RibbonMark ball={false} muted /></div></SystemFrame>
            <SystemFrame label="02 / Event transformation" caption="Ruban symétrique, ballon intégré et nouvelle lecture sportive."><div className="absolute inset-0 bg-[#f2c94c]" /><div className="absolute left-1/2 top-0 h-full w-px bg-[#071a18]/25" /><div className="absolute left-0 top-1/2 h-px w-full bg-[#071a18]/25" /><div className="relative grid min-h-[24rem] place-items-center"><RibbonMark /></div></SystemFrame>
          </div>
          <div className="grid gap-5 md:grid-cols-3">{["Conserver l’énergie", "Créer une trajectoire", "Évoquer le gardien"].map((title, index) => <div key={title} className="border-t border-[#071a18]/20 pt-5"><p className="font-mono text-[9px] text-[#167967]">0{index + 1}</p><p className="mt-4 font-display text-3xl">{title}</p></div>)}</div>
        </Container>
      </section>

      <section className="bg-[#246e87] py-20 text-white sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <SectionIntro index="04" eyebrow="Team identity" title="Un orque stylisé comme emblème collectif." body="L’identité secondaire transforme l’orque en signe sportif compact : une silhouette franche, jeune et immédiatement reconnaissable qui donne au groupe son propre territoire dans le système." light />
          <AnimatedReveal variant="right">
            <SystemFrame dark label="Orca team mark / primary + mono" caption="Un symbole d’équipe pensé pour les écrans, les transitions et les applications sportives.">
              <div className="absolute inset-0 bg-[#f5f1e8]" />
              <div className="absolute left-[15%] top-1/2 h-40 w-72 -translate-y-1/2 -rotate-6 rounded-[70%_35%_65%_30%] bg-[#071a18]" />
              <div className="absolute left-[30%] top-[38%] h-16 w-28 -rotate-6 rounded-[70%_30%] bg-white" />
              <div className="absolute right-[19%] top-[34%] h-28 w-20 rotate-[35deg] bg-[#071a18] [clip-path:polygon(0_0,100%_50%,0_100%)]" />
              <div className="absolute left-[28%] top-[31%] h-5 w-5 rounded-full bg-[#f2c94c]" />
            </SystemFrame>
          </AnimatedReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-14">
          <SectionIntro index="05" eyebrow="Visual system" title="Des trajectoires, des repères et une palette conçus pour bouger." body="Le système associe lignes de mouvement, cadres vidéo, ballon, identité d’équipe et repères bilingues. Chaque élément peut vivre seul, puis se reconnecter au rythme global." />
          <div className="grid overflow-hidden border border-[#071a18]/15 sm:grid-cols-3 lg:grid-cols-6">{colors.map((color, index) => <div key={color} className="flex min-h-44 flex-col justify-between p-4" style={{ backgroundColor: color }}><span className="font-mono text-[8px] uppercase text-white/65">SYS 0{index + 1}</span><span className="font-mono text-[9px] text-white/80">{color}</span></div>)}</div>
        </Container>
      </section>

      <section className="bg-[#071a18] py-20 text-white sm:py-28">
        <Container className="space-y-14">
          <SectionIntro index="06" eyebrow="Motion design system" title="Un langage animé pour relier sport, culture et prise de parole." body="L’intro, les transitions, inserts et habillages d’interviews partagent les mêmes trajectoires, codes couleur et repères bilingues. Le mouvement structure le contenu avant de chercher l’effet." light />
          <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
            <SystemFrame dark label="Motion timeline / system overview" caption="Une architecture de montage prévue pour accueillir les rushs et médias finaux."><MotionTimeline /></SystemFrame>
            <div className="grid gap-5">
              {[{ icon: Captions, title: "FR / DE overlays", body: "Une hiérarchie bilingue claire pour les interviews." }, { icon: CirclePlay, title: "Match rhythm", body: "Des transitions guidées par le geste et la trajectoire." }, { icon: Volume2, title: "Sound cues", body: "Des ponctuations sonores au service du rythme." }].map((item) => { const Icon = item.icon; return <div key={item.title} className="border border-white/15 p-5"><Icon className="h-5 w-5 text-[#f2c94c]" /><p className="mt-7 font-display text-2xl">{item.title}</p><p className="mt-2 text-xs leading-6 text-white/52">{item.body}</p></div>; })}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-16">
          <SectionIntro index="07" eyebrow="Video editing & rhythm" title="Construire une narration à partir de l’énergie réelle du match." body="Le montage alterne action, présentation, interviews et respiration. Les effets sonores soutiennent les changements de séquence tandis que les transitions maintiennent une continuité entre les voix." />
          <div className="grid gap-5 lg:grid-cols-3">{["Intro / installer l’énergie", "Interviews / clarifier les voix", "Transitions / maintenir le lien"].map((title, index) => <SystemFrame key={title} label={`Sequence 0${index + 1}`} caption={title}><div className={`absolute inset-0 ${["bg-[#167967]", "bg-[#f2c94c]", "bg-[#246e87]"][index]}`} /><div className="absolute inset-[10%] border border-white/40" /><div className="absolute bottom-[16%] left-[10%] right-[10%] flex items-end justify-between text-white"><p className="font-display text-4xl">0{index + 1}</p><p className="font-mono text-[8px] uppercase tracking-[0.2em]">FR / DE / 00:0{index * 4}</p></div></SystemFrame>)}</div>
        </Container>
      </section>

      <section className="border-y border-[#071a18]/12 bg-white py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <SectionIntro index="08" eyebrow="Intercultural communication" title="Faire circuler les idées aussi clairement que le ballon." body="Le football devient un prétexte vivant pour parler de fair-play, participation sociale, démocratie, identité, Europe et climat. Le design rend ces échanges accessibles, chaleureux et immédiatement lisibles." />
          <AnimatedReveal variant="right" className="grid grid-cols-2 gap-px overflow-hidden border border-[#071a18]/15 bg-[#071a18]/15">
            {["Marseille", "Hamburg", "Fair-play", "Dialogue", "Europe", "Climate"].map((word, index) => <div key={word} className="grid aspect-[4/3] place-items-center bg-[#f5f1e8] p-4 text-center"><span className={index % 2 ? "font-display text-3xl text-[#246e87]" : "font-display text-3xl text-[#167967]"}>{word}</span></div>)}
          </AnimatedReveal>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#f2c94c] py-24 sm:py-32">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(#071a18_1px,transparent_1px),linear-gradient(90deg,#071a18_1px,transparent_1px)] [background-size:48px_48px]" />
        <Container className="relative grid gap-10 lg:grid-cols-[0.42fr_1.58fr] lg:items-end">
          <AnimatedReveal variant="left"><p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#071a18]/55">09 / Final impact</p></AnimatedReveal>
          <AnimatedReveal variant="right" className="space-y-7"><h2 className="font-display text-5xl leading-none sm:text-6xl lg:text-8xl">Une identité existante devient un terrain de jeu visuel, animé et interculturel.</h2><p className="max-w-3xl text-base leading-8 text-[#071a18]/65">{project.impact}</p><div className="flex flex-wrap gap-3"><ButtonLink href="/projects" variant="secondary">Voir les autres projets</ButtonLink><ButtonLink href="/contact">Construire un système motion</ButtonLink></div></AnimatedReveal>
        </Container>
      </section>
    </article>
  );
}
