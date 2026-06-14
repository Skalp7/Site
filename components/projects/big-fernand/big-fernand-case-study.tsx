import Image from "next/image";
import { CalendarDays, Camera, MapPin, Megaphone, MousePointerClick, Users } from "lucide-react";
import { ReactNode } from "react";

import { BigFernandAssetFrame } from "@/components/projects/big-fernand/big-fernand-asset-frame";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Project } from "@/types";

type BigFernandCaseStudyProps = { project: Project };

const base = "/projects/big-fernand";
const assets = {
  logo: `${base}/brand/logo/big-fernand-text-logo-white.png`,
  hero: `${base}/products/POST TEST v1.jpg`,
  marseille: `${base}/illustrations/BIG Marseille.png`,
  landingReference: `${base}/brand/big-fernand-restaurants-de-burgers-gourmets-landing-page.png`,
  illustrationBoard: `${base}/products/illustrations-candidature.jpg`,
  freshPost: `${base}/products/FRAIS.jpg`,
  verticalPost: `${base}/products/vertical.jpg`,
  bartholome: `${base}/burger/bartholome.png`,
  lucien: `${base}/burger/le lucien.png`,
  fries: `${base}/others/fernadines-gargarines-grenailles-sans-fond.png`,
  bunHeart: `${base}/illustrations/bun-heart-shape.png`,
  opening: `${base}/illustrations/-uverture-homme-en-marche.png`,
  video: `${base}/products/vidéo/candidature-vidéo-15-secondes.mp4`,
};

const contentFamilies = [
  { number: "01", title: "Big ouverture", body: "Compte à rebours, adresse, accès et premiers rendez-vous." },
  { number: "02", title: "Hamburgés stars", body: "Produits signatures, focus ingrédients et gros plans gourmands." },
  { number: "03", title: "Les Fernands", body: "Équipe, gestes métier, coulisses et vie quotidienne de l’atelier." },
  { number: "04", title: "La Canebière", body: "Quartier, voisins, rythme du centre-ville et partenariats locaux." },
  { number: "05", title: "Bons plans", body: "Offres ponctuelles, événements, stories et formats interactifs." },
  { number: "06", title: "Ton local", body: "Humour marseillais léger, direct et jamais forcé." },
];

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
      <p className={light ? "text-[9px] font-bold uppercase tracking-[0.25em] text-[#f0a43a]" : "text-[9px] font-bold uppercase tracking-[0.25em] text-[#1d6fa5]"}>
        {index} / {eyebrow}
      </p>
      <h2 className={light ? "font-display text-4xl leading-none text-white sm:text-5xl lg:text-6xl" : "font-display text-4xl leading-none text-[#111111] sm:text-5xl lg:text-6xl"}>{title}</h2>
      <p className={light ? "max-w-3xl text-base leading-8 text-white/65" : "max-w-3xl text-base leading-8 text-black/60"}>{body}</p>
    </AnimatedReveal>
  );
}

function Label({ children, blue = false }: { children: ReactNode; blue?: boolean }) {
  return <span className={blue ? "inline-flex bg-[#1d6fa5] px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white" : "inline-flex bg-black px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white"}>{children}</span>;
}

export function BigFernandCaseStudy({ project }: BigFernandCaseStudyProps) {
  return (
    <article className="overflow-hidden bg-[#f5ecdc] text-[#111111]">
      <section className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-black text-white">
        <Image src={assets.hero} alt="Proposition visuelle Big Fernand Marseille Canebière" fill priority unoptimized className="object-cover opacity-62" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/15" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        <Container className="relative grid min-h-[calc(100vh-88px)] items-end gap-10 pb-16 pt-20 lg:grid-cols-[1.2fr_0.6fr]">
          <AnimatedReveal variant="left" className="space-y-7">
            <div className="flex flex-wrap gap-2"><Label>Proposition de collaboration</Label><Label blue>Candidature non officielle</Label></div>
            <Image src={assets.logo} alt="Big Fernand" width={310} height={100} unoptimized className="h-auto w-52 object-contain sm:w-72" />
            <h1 className="max-w-5xl font-display text-[clamp(3.6rem,8vw,8.6rem)] leading-[0.84]">Marseille — Canebière</h1>
            <p className="max-w-2xl text-xl font-semibold leading-tight text-[#f0a43a] sm:text-2xl">Faire de l’atelier Canebière une adresse locale visible, vivante et reconnaissable.</p>
            <div className="flex flex-wrap gap-3"><ButtonLink href="/contact" variant="secondary">Discutons d’une collaboration</ButtonLink><ButtonLink href="#proposition" variant="ghost">Voir la proposition</ButtonLink></div>
          </AnimatedReveal>
          <AnimatedReveal variant="right" className="border-l border-white/25 pl-6">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#f0a43a]">Intention</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/65">Conserver l’identité Big Fernand, puis lui donner une couleur marseillaise à travers une landing page locale et une communication Instagram régulière.</p>
          </AnimatedReveal>
        </Container>
      </section>

      <section id="proposition" className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.6fr]">
          <SectionIntro index="01" eyebrow="Contexte de la candidature" title="Une Big ouverture est aussi une occasion de créer une adresse locale." body={project.excerpt} />
          <AnimatedReveal variant="right" className="space-y-6 border-t-2 border-black pt-5">
            {project.metrics.map((metric) => <div key={metric.label} className="border-b border-black/15 pb-5"><p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#1d6fa5]">{metric.label}</p><p className="mt-2 font-display text-2xl">{metric.value}</p></div>)}
          </AnimatedReveal>
        </Container>
      </section>

      <section className="border-y border-black/15 bg-white py-20 sm:py-28">
        <Container className="space-y-14">
          <SectionIntro index="02" eyebrow="Opportunity / insight" title="Une marque nationale forte. Une adresse locale à faire vivre." body="Le site national maîtrise déjà l’univers, la carte, la commande et les actualités. Une présence locale complémentaire peut renforcer la découverte de l’atelier, son référencement et le lien quotidien avec les Marseillais." />
          <div className="grid gap-5 lg:grid-cols-4">
            {[
              { icon: MapPin, title: "Être trouvé", body: "Adresse, horaires, accès et repères Canebière réunis clairement." },
              { icon: Megaphone, title: "Installer l’ouverture", body: "Créer une séquence de lancement avant, pendant et après l’ouverture." },
              { icon: Users, title: "Incarner l’atelier", body: "Présenter les Fernands, le lieu et la vie réelle de l’adresse." },
              { icon: CalendarDays, title: "Rester vivant", body: "Mettre en place un rythme simple de contenus locaux." },
            ].map((item) => { const Icon = item.icon; return <AnimatedReveal key={item.title} className="border-t-2 border-black pt-5"><Icon className="h-5 w-5 text-[#1d6fa5]" /><h3 className="mt-8 font-display text-3xl">{item.title}</h3><p className="mt-3 text-sm leading-7 text-black/55">{item.body}</p></AnimatedReveal>; })}
          </div>
        </Container>
      </section>

      <section className="bg-[#111111] py-20 text-white sm:py-28">
        <Container className="space-y-14">
          <SectionIntro index="03" eyebrow="Landing page concept" title="Une porte d’entrée locale, complémentaire au site officiel." body="La page locale ne remplace pas l’écosystème Big Fernand. Elle oriente rapidement vers la commande, la réservation et la carte, tout en donnant à l’atelier Canebière un espace pour raconter son adresse, son équipe et ses actualités." light />
          <AnimatedReveal variant="panel" className="overflow-hidden border border-white/15 bg-[#f5ecdc] text-black">
            <div className="flex items-center justify-between border-b border-black/15 bg-white px-4 py-3">
              <div className="flex gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#e04d38]" /><span className="h-2.5 w-2.5 rounded-full bg-[#f0a43a]" /><span className="h-2.5 w-2.5 rounded-full bg-[#1d6fa5]" /></div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/45">Concept / atelier Canebière</p>
            </div>
            <div className="relative grid min-h-[32rem] lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-[24rem]"><Image src={assets.bartholome} alt="Le Bartholomé" fill unoptimized className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" /><p className="absolute bottom-7 left-7 max-w-lg font-display text-5xl leading-none text-white sm:text-6xl">Droit au Bartholomé, sur la Canebière.</p></div>
              <div className="grid content-between gap-8 p-7 sm:p-10">
                <div><Label blue>Atelier Marseille</Label><h3 className="mt-6 font-display text-5xl leading-none">8, La Canebière<br />13001 Marseille</h3><p className="mt-5 max-w-md text-sm leading-7 text-black/58">Sur place, à emporter ou en livraison. Une page directe pour choisir son Hamburgé et trouver l’atelier.</p></div>
                <div className="grid grid-cols-2 gap-3"><div className="bg-black px-4 py-4 text-center text-xs font-bold uppercase text-white">Commander</div><div className="border border-black px-4 py-4 text-center text-xs font-bold uppercase">Voir la carte</div></div>
              </div>
            </div>
            <div className="grid border-t border-black/15 sm:grid-cols-4">{["L’atelier", "La carte", "Horaires & accès", "Actus locales"].map((item) => <div key={item} className="border-b border-black/15 px-5 py-6 text-center text-xs font-bold uppercase sm:border-b-0 sm:border-r">{item}</div>)}</div>
          </AnimatedReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-14">
          <SectionIntro index="04" eyebrow="Visual direction" title="Une mini-charte pensée pour être utilisée, pas seulement regardée." body="Noir franc, crème chaleureux, photographie gourmande, typographie expressive et illustrations décalées forment le socle. Le bleu méditerranéen et une chaleur solaire ajoutent une présence locale sans transformer Marseille en cliché." />
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <BigFernandAssetFrame src={assets.illustrationBoard} alt="Illustrations de candidature Big Fernand" label="Illustrations / tonalité humaine" caption="Un vocabulaire dessiné, vivant et légèrement décalé." aspect="landscape" />
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-black/15 bg-black/15 sm:grid-cols-3">
              {[["#111111", "Atelier"], ["#f5ecdc", "Crème"], ["#e04d38", "Appétit"], ["#1d6fa5", "Méditerranée"], ["#f0a43a", "Soleil"], ["#ffffff", "Respiration"]].map(([color, name]) => <div key={color} className="flex aspect-square flex-col justify-between p-4" style={{ backgroundColor: color }}><p className={color === "#f5ecdc" || color === "#ffffff" ? "text-[8px] font-bold uppercase text-black/50" : "text-[8px] font-bold uppercase text-white/60"}>{color}</p><p className={color === "#f5ecdc" || color === "#ffffff" ? "font-display text-2xl text-black" : "font-display text-2xl text-white"}>{name}</p></div>)}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-black/15 bg-[#1d6fa5] py-20 text-white sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:items-center">
          <SectionIntro index="05" eyebrow="Marseille local adaptation" title="Donner une couleur marseillaise, sans forcer l’accent." body="La Canebière, le soleil, l’énergie du centre-ville et la culture populaire deviennent des repères subtils. L’humour reste direct, le produit reste central et l’identité Big Fernand reste immédiatement reconnaissable." light />
          <AnimatedReveal variant="right" className="grid gap-5 sm:grid-cols-[0.72fr_1.28fr]">
            <BigFernandAssetFrame src={assets.marseille} alt="Illustration Big Fernand Marseille" aspect="portrait" contain label="Marseille / illustration locale" />
            <BigFernandAssetFrame src={assets.hero} alt="Proposition visuelle locale Big Fernand" aspect="portrait" position="center top" label="Canebière / proposition d’ouverture" />
          </AnimatedReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="space-y-14">
          <SectionIntro index="06" eyebrow="Instagram role" title="Faire du compte local le journal vivant de l’atelier." body="L’objectif n’est pas de publier pour publier. Il s’agit de créer un rythme reconnaissable, humain et léger : produits, équipe, coulisses, quartier, annonces et rendez-vous qui donnent envie de passer la porte." />
          <div className="grid gap-5 lg:grid-cols-3">
            <BigFernandAssetFrame src={assets.freshPost} alt="Post Instagram produit frais" label="Post / produit" aspect="square" />
            <BigFernandAssetFrame src={assets.verticalPost} alt="Story verticale Big Fernand" label="Story / activation" aspect="story" position="center top" className="lg:translate-y-10" />
            <BigFernandAssetFrame src={assets.lucien} alt="Hamburgé Le Lucien" label="Cover reel / Hamburgé star" aspect="square" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[{ icon: Camera, title: "Photos retouchées" }, { icon: MousePointerClick, title: "Stories interactives" }, { icon: Megaphone, title: "Visuels d’ouverture" }, { icon: CalendarDays, title: "Calendrier léger" }].map((item) => { const Icon = item.icon; return <div key={item.title} className="border-t-2 border-black pt-5"><Icon className="h-5 w-5 text-[#e04d38]" /><p className="mt-6 font-display text-2xl">{item.title}</p></div>; })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container className="space-y-14">
          <SectionIntro index="07" eyebrow="Content system" title="Six familles simples pour rester régulier sans devenir robotique." body="Le système donne un cadre suffisamment clair pour tenir dans le temps, tout en laissant à l’équipe locale la liberté de raconter ce qui se passe réellement dans l’atelier." />
          <div className="grid gap-px overflow-hidden border border-black/15 bg-black/15 md:grid-cols-2 lg:grid-cols-3">
            {contentFamilies.map((item) => <AnimatedReveal key={item.number} className="min-h-56 bg-[#f5ecdc] p-6"><p className="text-[9px] font-bold tracking-[0.2em] text-[#1d6fa5]">{item.number}</p><h3 className="mt-12 font-display text-3xl">{item.title}</h3><p className="mt-3 text-sm leading-7 text-black/55">{item.body}</p></AnimatedReveal>)}
          </div>
        </Container>
      </section>

      <section className="bg-[#111111] py-20 text-white sm:py-28">
        <Container className="space-y-14">
          <SectionIntro index="08" eyebrow="Sample posts & motion" title="Des formats déjà activables pour lancer la conversation." body="Les assets existants servent ici à montrer une intention de composition. En cas de collaboration, le système pourra être alimenté avec les photographies, informations et éléments officiels de l’atelier." light />
          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <BigFernandAssetFrame src={assets.opening} alt="Illustration d’ouverture Big Fernand" label="Visuel d’ouverture" aspect="square" contain />
            <div className="overflow-hidden border border-white/15 bg-black">
              <video src={assets.video} controls muted loop playsInline preload="metadata" className="aspect-video h-full w-full object-cover" />
              <div className="border-t border-white/15 px-5 py-4"><p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#f0a43a]">Candidature / vidéo 15 secondes</p><p className="mt-2 text-sm leading-6 text-white/58">Un format court pour présenter l’intention et amorcer une campagne locale.</p></div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:items-end">
          <SectionIntro index="09" eyebrow="Candidature / collaboration" title="Une proposition souple, pensée pour aider concrètement." body="Cette page est une proposition de collaboration conçue pour accompagner l’ouverture de Big Fernand Marseille — Canebière. Elle montre comment je pourrais intervenir sur la communication visuelle locale, les contenus Instagram et une landing page dédiée, dans le respect de l’univers Big Fernand." />
          <AnimatedReveal variant="right" className="grid gap-3 sm:grid-cols-2">
            {["Stage", "Mission courte", "Création de contenus", "Renfort communication"].map((item) => <div key={item} className="border border-black/15 bg-white px-5 py-6 font-display text-2xl">{item}</div>)}
          </AnimatedReveal>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#e04d38] py-24 text-white sm:py-32">
        <Image src={assets.bunHeart} alt="" fill unoptimized className="object-contain object-right opacity-20" />
        <Container className="relative grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
          <AnimatedReveal variant="left" className="space-y-7"><p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/60">Une idée à servir bien chaude</p><h2 className="font-display text-5xl leading-none sm:text-6xl lg:text-8xl">Et si on faisait vivre la Canebière à la sauce Fernand ?</h2><ButtonLink href="/contact" variant="secondary">Discutons d’une collaboration</ButtonLink></AnimatedReveal>
          <AnimatedReveal variant="right" className="border-l border-white/25 pl-6"><p className="text-xs leading-6 text-white/65">Projet de candidature créative non officiel. Les visuels et éléments de marque utilisés servent uniquement à présenter une intention de collaboration. Big Fernand et ses éléments de marque restent la propriété de leurs ayants droit.</p></AnimatedReveal>
        </Container>
      </section>
    </article>
  );
}
