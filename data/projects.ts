import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "aurelium-brand-system",
    title: "Aurelium",
    category: "Brand identity / Campaign",
    year: "2025",
    client: "Aurelium Hospitality",
    featured: true,
    shortPitch: "A hospitality brand system designed to feel composed, tactile and quietly luxurious.",
    excerpt:
      "Identity, launch kit and digital content direction for a boutique hospitality concept positioned between business elegance and destination warmth.",
    role: "Lead designer across identity, campaign rollout and motion direction.",
    tools: ["Illustrator", "InDesign", "After Effects", "Figma"],
    services: ["Identity", "Print", "Motion", "Social content"],
    tone: {
      name: "Burnished Sand",
      background: "from-[#f8f2ea] via-[#ede0cf] to-[#d7b592]",
      accent: "#9d6f4a",
    },
    context:
      "The brand needed a launch identity credible enough for partnerships while still carrying a subtle emotional signature.",
    objective:
      "Create a premium system spanning stationery, launch presentation, room collateral and digital teasers.",
    approach:
      "A restrained typographic system and warm mineral palette were used to balance corporate confidence with sensory appeal.",
    solution:
      "The project combined editorial layouts, tactile print finishes and a motion language built around elegant reveals and pacing.",
    impact:
      "The resulting toolkit gave the client a coherent identity that scaled from investor decks to guest-facing touchpoints.",
    metrics: [
      { label: "Assets delivered", value: "42" },
      { label: "Formats designed", value: "11" },
      { label: "Launch timeline", value: "6 weeks" },
    ],
    deliverables: ["Logo suite", "Launch deck", "Social templates", "Print collateral"],
    sections: [
      {
        title: "Context",
        body: "Aurelium required a launch-ready identity capable of speaking to investors, partners and end customers without fragmenting the brand tone.",
      },
      {
        title: "Creative angle",
        body: "The design language focused on calm contrast, refined typography and a tactile visual rhythm inspired by premium editorial layouts.",
      },
      {
        title: "Execution",
        body: "Every deliverable was built as part of a reusable system, ensuring consistency across print production, digital campaigns and presentation material.",
      },
    ],
    gallery: [
      {
        id: "aur-1",
        title: "Identity board",
        caption: "Typography, palette and brand tension condensed into a clean visual board.",
        aspect: "landscape",
        tone: { name: "Sand", background: "from-[#f7efe6] via-[#eadbca] to-[#c9a27b]", accent: "#9d6f4a" },
      },
      {
        id: "aur-2",
        title: "Stationery suite",
        caption: "Printed pieces with generous margins and material-inspired contrasts.",
        aspect: "portrait",
        tone: { name: "Stone", background: "from-[#efe5d8] via-[#d9c1a8] to-[#6d5747]", accent: "#6d5747" },
      },
      {
        id: "aur-3",
        title: "Launch social pack",
        caption: "A modular content kit designed for premium social rollout.",
        aspect: "square",
        tone: { name: "Copper", background: "from-[#1d1c1a] via-[#5a4334] to-[#b27b56]", accent: "#d9b28f" },
      },
    ],
    video: {
      title: "Launch motion teaser",
      embedUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
      note: "Placeholder embed for motion direction. Replace with final reel or case-study cut.",
    },
  },
  {
    slug: "northstar-social-system",
    title: "Northstar",
    category: "Digital / Social media",
    year: "2025",
    client: "Northstar Advisory",
    featured: true,
    shortPitch: "A content system that made financial thought leadership feel clearer, sharper and more human.",
    excerpt:
      "Template architecture and visual storytelling system for a consulting brand needing stronger consistency across LinkedIn, carousels and launch announcements.",
    role: "Visual designer for content strategy translation and rollout.",
    tools: ["Figma", "Illustrator", "Photoshop"],
    services: ["Social design", "Templates", "Art direction"],
    tone: {
      name: "Slate Blue",
      background: "from-[#eef3ff] via-[#dce5fb] to-[#96a9d6]",
      accent: "#35508a",
    },
    context:
      "The company published strong ideas but lacked a visual structure capable of elevating perception and consistency.",
    objective:
      "Create a modular system for recurring posts, insights and campaign moments without making the brand feel formulaic.",
    approach:
      "The system used disciplined grids, a calm blue spectrum and selective accents to preserve credibility while improving readability.",
    solution:
      "Carousel templates, static posts and quote formats were designed with clear pacing and reusable editorial logic.",
    impact:
      "The client gained a repeatable publishing framework that felt premium instead of templated.",
    metrics: [
      { label: "Content modules", value: "18" },
      { label: "Core formats", value: "6" },
      { label: "Team adoption", value: "Immediate" },
    ],
    deliverables: ["Carousel templates", "Social guidelines", "Launch assets"],
    sections: [
      { title: "Problem", body: "The content felt fragmented, with each post solving the same communication issue from scratch." },
      { title: "System", body: "A set of reusable layout patterns created coherence while leaving enough room for nuance across topics." },
      { title: "Outcome", body: "The new format library accelerated production and increased the brand's perceived maturity." },
    ],
    gallery: [
      {
        id: "nor-1",
        title: "Insight carousel",
        caption: "A restrained editorial card system for high-value ideas.",
        aspect: "portrait",
        tone: { name: "Ice", background: "from-[#f3f7ff] via-[#c8d6f4] to-[#7e95c6]", accent: "#35508a" },
      },
      {
        id: "nor-2",
        title: "Campaign series",
        caption: "Series logic designed for continuity across multiple release waves.",
        aspect: "landscape",
        tone: { name: "Ink Blue", background: "from-[#10203d] via-[#27487b] to-[#98aed5]", accent: "#d6e1fb" },
      },
    ],
  },
  {
    slug: "atelier-nova-editorial",
    title: "Atelier Nova",
    category: "Print / Editorial",
    year: "2024",
    client: "Atelier Nova",
    featured: true,
    shortPitch: "Editorial design for a cultural annual blending typographic discipline and visual breathing room.",
    excerpt:
      "A print-first system for a cultural publication requiring careful structure, strong image pacing and contemporary sophistication.",
    role: "Editorial designer and production lead.",
    tools: ["InDesign", "Photoshop", "Illustrator"],
    services: ["Editorial design", "Print", "Art direction"],
    tone: {
      name: "Ivory Black",
      background: "from-[#fbf8f3] via-[#ddd6ca] to-[#47413a]",
      accent: "#1f1f1f",
    },
    context:
      "The annual review needed to look cultural and premium without becoming overly experimental or hard to read.",
    objective:
      "Build a publication system with rhythm, hierarchy and visual restraint.",
    approach:
      "The project relied on strong margins, measured type scales and image sequencing inspired by gallery catalogues.",
    solution:
      "A modular editorial grid enabled the publication to alternate between dense information, quiet spreads and visual chapters.",
    impact:
      "The publication gained a more mature tone and a clearer visual cadence from cover to index.",
    metrics: [
      { label: "Pages", value: "116" },
      { label: "Grid variants", value: "5" },
      { label: "Print run", value: "2,000" },
    ],
    deliverables: ["Cover design", "Editorial grid", "Print-ready files"],
    sections: [
      { title: "Editorial intent", body: "Give long-form content a visual structure that felt authoritative, calm and readable." },
      { title: "Design system", body: "Typography and white space worked together to maintain tension without visual excess." },
      { title: "Production", body: "The layout system was optimized for image-heavy sections and complex text flows alike." },
    ],
    gallery: [
      {
        id: "nov-1",
        title: "Cover concept",
        caption: "Quiet contrast with strong typographic anchoring.",
        aspect: "portrait",
        tone: { name: "Ash", background: "from-[#faf6f0] via-[#dad2c7] to-[#59524a]", accent: "#252525" },
      },
      {
        id: "nov-2",
        title: "Chapter opener",
        caption: "Large editorial rhythm designed to reset attention.",
        aspect: "wide",
        tone: { name: "Charcoal", background: "from-[#fffaf2] via-[#d6cfbf] to-[#242320]", accent: "#111111" },
      },
    ],
  },
  {
    slug: "sillage-motion-campaign",
    title: "Sillage",
    category: "Video / Motion design",
    year: "2024",
    client: "Sillage Beauty",
    featured: true,
    shortPitch: "Motion-first launch assets designed to extend a beauty brand into cinematic digital touchpoints.",
    excerpt:
      "A campaign language balancing typographic poise, product sensuality and concise motion for premium performance ads and launch teasers.",
    role: "Motion designer and visual systems lead.",
    tools: ["After Effects", "Premiere Pro", "Photoshop"],
    services: ["Motion design", "Video", "Campaign direction"],
    tone: {
      name: "Rose Smoke",
      background: "from-[#fff2f2] via-[#e3c9cf] to-[#9d7b87]",
      accent: "#694d57",
    },
    context:
      "The beauty launch needed digital motion assets that looked elevated rather than aggressively commercial.",
    objective:
      "Create a concise, premium motion kit for hero launch moments and social amplification.",
    approach:
      "Movement was kept minimal and directional, with focus on transitions, pacing and text-image balance.",
    solution:
      "A set of teaser cuts, loopable motion frames and launch stories created a cohesive moving language.",
    impact:
      "The motion system allowed the brand to scale campaign communication while preserving elegance.",
    metrics: [
      { label: "Video assets", value: "14" },
      { label: "Cutdowns", value: "9" },
      { label: "Aspect ratios", value: "4" },
    ],
    deliverables: ["Teasers", "Stories", "Motion kit", "Campaign frames"],
    sections: [
      { title: "Visual pacing", body: "The challenge was to keep the motion refined, never frantic, while still capturing attention quickly." },
      { title: "Systemization", body: "Transitions and text timings were built as a repeatable language across multiple ad lengths." },
      { title: "Brand effect", body: "The result gave the launch a cinematic polish without distancing it from product clarity." },
    ],
    gallery: [
      {
        id: "sil-1",
        title: "Motion frames",
        caption: "Soft gradients and layered typography built for animated reveals.",
        aspect: "landscape",
        tone: { name: "Rose", background: "from-[#fff2f5] via-[#dcb7c1] to-[#875f6e]", accent: "#694d57" },
      },
      {
        id: "sil-2",
        title: "Story format",
        caption: "Full-screen mobile compositions with calm, premium timing.",
        aspect: "portrait",
        tone: { name: "Plum Smoke", background: "from-[#2d1d23] via-[#6f4754] to-[#caa8b4]", accent: "#f6e3e8" },
      },
    ],
    video: {
      title: "Campaign motion excerpt",
      embedUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
      note: "Swap this placeholder with your final reel, ad cut or Vimeo case-study embed.",
    },
  },
  {
    slug: "meridian-interface-refresh",
    title: "Meridian",
    category: "UI / Web design",
    year: "2025",
    client: "Meridian Capital",
    featured: false,
    shortPitch: "A high-trust interface refresh for a finance brand seeking warmth without losing precision.",
    excerpt:
      "UI concept and landing page system designed to translate a conservative brand into a more refined and user-friendly digital presence.",
    role: "UI designer with brand alignment responsibility.",
    tools: ["Figma", "Photoshop"],
    services: ["UI design", "Design systems", "Web direction"],
    tone: {
      name: "Graphite Gold",
      background: "from-[#f7f5f1] via-[#d3cdc0] to-[#6d624e]",
      accent: "#7c6845",
    },
    context:
      "Meridian needed a more premium web presence without adopting startup-style visuals that would undermine trust.",
    objective:
      "Modernize hierarchy, rhythm and responsiveness across key landing pages.",
    approach:
      "The design mixed quiet luxury cues with strict information architecture and business-friendly restraint.",
    solution:
      "New page templates introduced stronger modularity, cleaner typography and more persuasive calls to action.",
    impact:
      "The concept created a bridge between the brand's institutional reputation and a more current digital expression.",
    metrics: [
      { label: "Core templates", value: "7" },
      { label: "Components", value: "26" },
      { label: "Breakpoints", value: "4" },
    ],
    deliverables: ["Landing pages", "Component library", "Responsive rules"],
    sections: [
      { title: "Trust by design", body: "A premium financial interface depends on hierarchy, clarity and subtle cues rather than decorative complexity." },
      { title: "Responsive logic", body: "Layouts were adapted for tablet and mobile with a focus on pacing and scannability, not just shrinking content." },
      { title: "System outcome", body: "The proposed UI established a scalable basis for future product and marketing pages." },
    ],
    gallery: [
      {
        id: "mer-1",
        title: "Desktop hero",
        caption: "Structured density and quiet luxury tones.",
        aspect: "wide",
        tone: { name: "Gold Mist", background: "from-[#fcfaf6] via-[#d8d1c5] to-[#85765c]", accent: "#7c6845" },
      },
      {
        id: "mer-2",
        title: "Responsive stack",
        caption: "Mobile hierarchy designed for clarity and confidence.",
        aspect: "portrait",
        tone: { name: "Steel", background: "from-[#f7f3ed] via-[#cfc7b7] to-[#55514a]", accent: "#51442d" },
      },
    ],
  },
  {
    slug: "parhelion-hybrid-launch",
    title: "Parhelion",
    category: "Hybrid / Full campaign",
    year: "2023",
    client: "Parhelion Studio",
    featured: false,
    shortPitch: "A hybrid campaign ecosystem spanning identity, event collateral, motion and digital launch assets.",
    excerpt:
      "Cross-channel creative direction for a studio launch that needed coherence across physical and digital touchpoints.",
    role: "Multidisciplinary designer across print, motion and digital coordination.",
    tools: ["Illustrator", "InDesign", "After Effects", "Figma"],
    services: ["Campaign design", "Print", "Motion", "Digital"],
    tone: {
      name: "Olive Bronze",
      background: "from-[#f3f0e9] via-[#d3c5ae] to-[#66715a]",
      accent: "#526046",
    },
    context:
      "Parhelion wanted a launch campaign that felt cohesive from invitation to social reveal to post-event recap.",
    objective:
      "Develop one art direction able to stretch across formats, scales and production contexts.",
    approach:
      "A flexible grid and a bold serif signature created recognizability while allowing each asset type to breathe differently.",
    solution:
      "The work linked event visuals, printed matter, screen graphics and launch content into a unified campaign system.",
    impact:
      "The studio gained a recognizable launch language that remained practical during rapid production phases.",
    metrics: [
      { label: "Channels", value: "5" },
      { label: "Deliverables", value: "30+" },
      { label: "Production phases", value: "3" },
    ],
    deliverables: ["Event visuals", "Invitations", "Motion assets", "Social rollout"],
    sections: [
      { title: "Campaign coherence", body: "The project required one visual language to travel across event, print and digital with no visible disconnect." },
      { title: "Operational clarity", body: "Template logic and file organization were designed to support quick iteration during launch week." },
      { title: "Perception", body: "The final campaign gave the young studio a more established and premium first impression." },
    ],
    gallery: [
      {
        id: "par-1",
        title: "Launch invitation",
        caption: "Print-led layout with a distinctive serif anchor.",
        aspect: "square",
        tone: { name: "Bronze", background: "from-[#faf6ef] via-[#cab89a] to-[#5d694f]", accent: "#44553f" },
      },
      {
        id: "par-2",
        title: "Event signage",
        caption: "Scalable system adapted for physical space and screen capture.",
        aspect: "landscape",
        tone: { name: "Olive Night", background: "from-[#17221a] via-[#56614b] to-[#c7bea9]", accent: "#f2ecde" },
      },
    ],
  },
  {
    slug: "signal-lab-explorations",
    title: "Signal Lab",
    category: "Personal / Creative exploration",
    year: "2025",
    client: "Self-initiated",
    featured: false,
    shortPitch: "A personal series exploring type, motion and graphic compositions for future commissions.",
    excerpt:
      "Research-led visual experiments built to expand aesthetic range while keeping execution grounded in real design systems thinking.",
    role: "Concept, art direction and execution.",
    tools: ["After Effects", "Illustrator", "Photoshop", "Figma"],
    services: ["Creative direction", "Motion", "Experimental graphics"],
    tone: {
      name: "Monochrome Pulse",
      background: "from-[#f4f4f2] via-[#bbbbbb] to-[#1d1d1d]",
      accent: "#1d1d1d",
    },
    context:
      "These explorations were created to test new visual tensions without client constraints.",
    objective:
      "Develop new compositional ideas and motion signatures that could later inform commercial work.",
    approach:
      "Each study focused on one strong graphic idea, then pushed it through multiple formats and timings.",
    solution:
      "The series produced a library of reusable principles around contrast, type framing and temporal pacing.",
    impact:
      "This body of work functions both as research and as a proof of taste, range and experimentation discipline.",
    metrics: [
      { label: "Studies", value: "12" },
      { label: "Formats", value: "3" },
      { label: "Weeks", value: "4" },
    ],
    deliverables: ["Visual studies", "Motion loops", "Poster series"],
    sections: [
      { title: "Exploration logic", body: "The goal was not decorative novelty, but controlled experimentation with clear compositional intent." },
      { title: "Transfer value", body: "Many of the resulting devices can be translated into brand campaigns, teaser reels or premium social assets." },
      { title: "Signature building", body: "Personal projects help define a point of view, not just showcase aesthetic variety." },
    ],
    gallery: [
      {
        id: "sig-1",
        title: "Poster system",
        caption: "Monochrome contrast and sharp editorial structures.",
        aspect: "portrait",
        tone: { name: "Mono", background: "from-[#ffffff] via-[#bfbfbf] to-[#191919]", accent: "#111111" },
      },
      {
        id: "sig-2",
        title: "Loop study",
        caption: "Motion research focused on tension and cadence.",
        aspect: "landscape",
        tone: { name: "Pulse", background: "from-[#efefef] via-[#a2a2a2] to-[#202020]", accent: "#202020" },
      },
    ],
    video: {
      title: "Exploration loop",
      embedUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
      note: "Use this slot for personal motion loops, montage edits or experimental reels.",
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
