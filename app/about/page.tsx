import { AboutStory } from "@/components/sections/about-story";
import { ContactSection } from "@/components/sections/contact-section";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSection } from "@/components/sections/process-section";
import { SkillsToolsSection } from "@/components/sections/skills-tools-section";
import { siteConfig } from "@/data/site";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Un profil premium et polyvalent conçu pour des équipes design modernes et un freelance sélectif."
        description="Cette page donne plus d’espace au positionnement, à la méthode et aux compétences derrière le portfolio."
      />
      <AboutStory />
      <ProcessSection items={siteConfig.process} />
      <SkillsToolsSection skills={siteConfig.skills} tools={siteConfig.tools} />
      <ContactSection />
    </>
  );
}
