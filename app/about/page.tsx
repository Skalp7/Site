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
        eyebrow="About"
        title="A premium, versatile profile built for modern design teams and selective freelance work."
        description="This page gives more room to the positioning, method and capabilities behind the portfolio."
      />
      <AboutStory />
      <ProcessSection items={siteConfig.process} />
      <SkillsToolsSection skills={siteConfig.skills} tools={siteConfig.tools} />
      <ContactSection />
    </>
  );
}
