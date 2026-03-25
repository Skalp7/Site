import { ContactSection } from "@/components/sections/contact-section";
import { CtaBand } from "@/components/sections/cta-band";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeIntro } from "@/components/sections/home-intro";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SkillsToolsSection } from "@/components/sections/skills-tools-section";
import { TestimonialsPlaceholder } from "@/components/sections/testimonials-placeholder";
import { featuredProjects } from "@/data/projects";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeIntro />
      <FeaturedProjects projects={featuredProjects} />
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
