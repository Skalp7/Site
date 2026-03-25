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
        title="Built to support recruitment conversations and premium freelance opportunities."
        description="The content and structure are ready to be adapted with your final copy, visuals, motion reels and recommendations."
        primaryHref="/contact"
        primaryLabel="Discuss a role"
        secondaryHref="/projects"
        secondaryLabel="Browse all projects"
      />
      <ContactSection />
    </>
  );
}
