import { ContactSection } from "@/components/sections/contact-section";
import { CtaBand } from "@/components/sections/cta-band";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeIntro } from "@/components/sections/home-intro";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SkillsToolsSection } from "@/components/sections/skills-tools-section";
import { TestimonialsPlaceholder } from "@/components/sections/testimonials-placeholder";
import { featuredProjects, selectedProjects, tailoredApplicationProjects } from "@/data/projects";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeIntro />
      <FeaturedProjects projects={featuredProjects} />
      <FeaturedProjects
        projects={selectedProjects}
        eyebrow="Selected Works"
        title="Des projets plus courts pour montrer la polyvalence graphique."
        description="Une sélection de travaux plus compacts : identité, print, food branding, poster design et micro-projets professionnels."
        variant="compact"
        showAction={false}
      />
      <FeaturedProjects
        projects={tailoredApplicationProjects}
        eyebrow="Tailored Applications / Motion Adaptations"
        title="Des adaptations de marque pensées comme candidatures personnalisées."
        description="Ces projets ne sont pas présentés comme des mandats clients : ils montrent une capacité à lire une marque, adapter son langage et produire une proposition motion crédible."
        variant="tailored"
        showAction={false}
      />
      <ServicesSection services={services} />
      <ProcessSection items={siteConfig.process} />
      <SkillsToolsSection skills={siteConfig.skills} tools={siteConfig.tools} />
      <TestimonialsPlaceholder />
      <CtaBand
        title="Conçu pour soutenir des échanges de recrutement et des opportunités freelance premium."
        description="Le contenu et la structure sont prêts à être adaptés avec tes textes finaux, tes visuels, tes reels motion et tes recommandations."
        primaryHref="/contact"
        primaryLabel="Parler d’un poste"
        secondaryHref="/projects"
        secondaryLabel="Voir tous les projets"
      />
      <ContactSection />
    </>
  );
}
