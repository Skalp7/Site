import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "aurelium-brand-system",
    title: "Aurelium",
    category: "Identité visuelle / Campagne",
    year: "2025",
    client: "Aurelium Hospitality",
    featured: true,
    shortPitch: "Un système de marque hospitality pensé pour être à la fois posé, tactile et subtilement luxueux.",
    excerpt:
      "Identité, kit de lancement et direction des contenus digitaux pour un concept d’hospitality premium situé entre élégance business et chaleur de destination.",
    role: "Designer principal sur l’identité, le déploiement de campagne et la direction motion.",
    tools: ["Illustrator", "InDesign", "After Effects", "Figma"],
    services: ["Identité", "Print", "Motion", "Contenu social media"],
    tone: {
      name: "Sable patiné",
      background: "from-[#f8f2ea] via-[#ede0cf] to-[#d7b592]",
      accent: "#9d6f4a",
    },
    context:
      "La marque avait besoin d’une identité de lancement suffisamment crédible pour des partenaires, tout en conservant une signature sensible et distinctive.",
    objective:
      "Créer un système premium couvrant la papeterie, la présentation de lancement, les supports sur site et les teasers digitaux.",
    approach:
      "Un système typographique maîtrisé et une palette minérale chaleureuse ont permis d’équilibrer assurance corporate et dimension sensorielle.",
    solution:
      "Le projet a combiné mises en page éditoriales, finitions print tactiles et langage motion construit autour de révélations élégantes et d’un rythme mesuré.",
    impact:
      "Le toolkit final a donné au client une identité cohérente, capable de fonctionner du deck investisseur jusqu’aux points de contact clients.",
    metrics: [
      { label: "Assets livrés", value: "42" },
      { label: "Formats conçus", value: "11" },
      { label: "Temps de lancement", value: "6 semaines" },
    ],
    deliverables: ["Suite de logos", "Deck de lancement", "Templates social media", "Supports imprimés"],
    sections: [
      {
        title: "Contexte",
        body: "Aurelium avait besoin d’une identité immédiatement exploitable, capable de s’adresser aux investisseurs, partenaires et clients finaux sans fragmenter le ton de marque.",
      },
      {
        title: "Angle créatif",
        body: "Le langage visuel s’est construit autour d’un contraste calme, d’une typographie raffinée et d’un rythme tactile inspiré des layouts éditoriaux premium.",
      },
      {
        title: "Exécution",
        body: "Chaque livrable a été pensé comme une brique d’un système réutilisable, assurant la cohérence entre production print, campagnes digitales et supports de présentation.",
      },
    ],
    gallery: [
      {
        id: "aur-1",
        title: "Board identité",
        caption: "Typographie, palette et tension de marque réunies dans une composition claire et structurée.",
        aspect: "landscape",
        tone: { name: "Sable", background: "from-[#f7efe6] via-[#eadbca] to-[#c9a27b]", accent: "#9d6f4a" },
      },
      {
        id: "aur-2",
        title: "Suite papeterie",
        caption: "Supports imprimés aux marges généreuses et aux contrastes inspirés de la matière.",
        aspect: "portrait",
        tone: { name: "Pierre", background: "from-[#efe5d8] via-[#d9c1a8] to-[#6d5747]", accent: "#6d5747" },
      },
      {
        id: "aur-3",
        title: "Pack social de lancement",
        caption: "Un kit de contenus modulaire pensé pour un déploiement social premium.",
        aspect: "square",
        tone: { name: "Cuivre", background: "from-[#1d1c1a] via-[#5a4334] to-[#b27b56]", accent: "#d9b28f" },
      },
    ],
    video: {
      title: "Teaser motion de lancement",
      embedUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
      note: "Embed temporaire pour illustrer la direction motion. À remplacer par le reel ou le montage final du projet.",
    },
  },
  {
    slug: "northstar-social-system",
    title: "Northstar",
    category: "Digital / Réseaux sociaux",
    year: "2025",
    client: "Northstar Advisory",
    featured: true,
    shortPitch: "Un système de contenus qui rend la prise de parole financière plus claire, plus nette et plus humaine.",
    excerpt:
      "Architecture de templates et système de storytelling visuel pour une marque de conseil qui avait besoin de plus de cohérence sur LinkedIn, les carrousels et les annonces.",
    role: "Designer visuel en charge de la traduction de la stratégie de contenu et de son déploiement.",
    tools: ["Figma", "Illustrator", "Photoshop"],
    services: ["Design social media", "Templates", "Direction artistique"],
    tone: {
      name: "Bleu ardoise",
      background: "from-[#eef3ff] via-[#dce5fb] to-[#96a9d6]",
      accent: "#35508a",
    },
    context:
      "L’entreprise publiait des idées solides, mais manquait d’une structure visuelle capable d’élever la perception de marque et la cohérence.",
    objective:
      "Créer un système modulaire pour les publications récurrentes, les insights et les temps forts de campagne, sans rendre la marque mécanique.",
    approach:
      "Le système s’appuie sur des grilles rigoureuses, une gamme de bleus calme et des accents ciblés pour préserver la crédibilité tout en améliorant la lisibilité.",
    solution:
      "Des templates de carrousels, posts statiques et formats citation ont été conçus avec un rythme clair et une logique éditoriale réutilisable.",
    impact:
      "Le client a obtenu un cadre de publication répétable qui conserve une perception premium au lieu d’un rendu trop template.",
    metrics: [
      { label: "Modules de contenu", value: "18" },
      { label: "Formats clés", value: "6" },
      { label: "Adoption équipe", value: "Immédiate" },
    ],
    deliverables: ["Templates carrousel", "Guide social media", "Assets de lancement"],
    sections: [
      { title: "Problème", body: "Le contenu paraissait fragmenté, chaque post recommençant à zéro pour résoudre les mêmes enjeux de communication." },
      { title: "Système", body: "Un ensemble de patterns de mise en page réutilisables a créé de la cohérence tout en laissant assez de souplesse selon les sujets." },
      { title: "Résultat", body: "La nouvelle bibliothèque de formats a accéléré la production et renforcé la maturité perçue de la marque." },
    ],
    gallery: [
      {
        id: "nor-1",
        title: "Carrousel insight",
        caption: "Un système de cartes éditoriales maîtrisé pour valoriser des idées à forte valeur.",
        aspect: "portrait",
        tone: { name: "Glace", background: "from-[#f3f7ff] via-[#c8d6f4] to-[#7e95c6]", accent: "#35508a" },
      },
      {
        id: "nor-2",
        title: "Série de campagne",
        caption: "Une logique sérielle pensée pour assurer la continuité à travers plusieurs vagues de publication.",
        aspect: "landscape",
        tone: { name: "Bleu encre", background: "from-[#10203d] via-[#27487b] to-[#98aed5]", accent: "#d6e1fb" },
      },
    ],
  },
  {
    slug: "atelier-nova-editorial",
    title: "Atelier Nova",
    category: "Print / Éditorial",
    year: "2024",
    client: "Atelier Nova",
    featured: true,
    shortPitch: "Un design éditorial pour une publication culturelle annuelle, mêlant rigueur typographique et respiration visuelle.",
    excerpt:
      "Un système print-first pour une publication culturelle nécessitant structure, rythme visuel fort et sophistication contemporaine.",
    role: "Designer éditorial et responsable de production.",
    tools: ["InDesign", "Photoshop", "Illustrator"],
    services: ["Design éditorial", "Print", "Direction artistique"],
    tone: {
      name: "Ivoire noir",
      background: "from-[#fbf8f3] via-[#ddd6ca] to-[#47413a]",
      accent: "#1f1f1f",
    },
    context:
      "La revue annuelle devait paraître culturelle et premium sans devenir trop expérimentale ni difficile à lire.",
    objective:
      "Construire un système éditorial avec rythme, hiérarchie et retenue visuelle.",
    approach:
      "Le projet s’appuie sur des marges fortes, des échelles typographiques mesurées et un séquençage d’images inspiré des catalogues d’exposition.",
    solution:
      "Une grille éditoriale modulaire permet à la publication d’alterner entre densité informative, doubles pages calmes et respirations visuelles.",
    impact:
      "La publication a gagné en maturité et en cadence visuelle, de la couverture jusqu’à l’index.",
    metrics: [
      { label: "Pages", value: "116" },
      { label: "Variantes de grille", value: "5" },
      { label: "Tirage", value: "2 000" },
    ],
    deliverables: ["Design de couverture", "Grille éditoriale", "Fichiers prêts pour impression"],
    sections: [
      { title: "Intention éditoriale", body: "Donner aux contenus longs une structure visuelle à la fois autoritaire, calme et lisible." },
      { title: "Système de design", body: "La typographie et l’espace blanc travaillent ensemble pour maintenir une tension juste, sans excès visuel." },
      { title: "Production", body: "Le système de mise en page a été optimisé aussi bien pour les sections très visuelles que pour les flux de texte complexes." },
    ],
    gallery: [
      {
        id: "nov-1",
        title: "Concept couverture",
        caption: "Un contraste calme porté par un ancrage typographique fort.",
        aspect: "portrait",
        tone: { name: "Cendre", background: "from-[#faf6f0] via-[#dad2c7] to-[#59524a]", accent: "#252525" },
      },
      {
        id: "nov-2",
        title: "Ouverture de chapitre",
        caption: "Un grand rythme éditorial pensé pour relancer l’attention.",
        aspect: "wide",
        tone: { name: "Charbon", background: "from-[#fffaf2] via-[#d6cfbf] to-[#242320]", accent: "#111111" },
      },
    ],
  },
  {
    slug: "sillage-motion-campaign",
    title: "Sillage",
    category: "Vidéo / Motion",
    year: "2024",
    client: "Sillage Beauty",
    featured: true,
    shortPitch: "Des assets de lancement motion-first conçus pour prolonger une marque beauté dans des points de contact digitaux plus cinématographiques.",
    excerpt:
      "Un langage de campagne qui équilibre maîtrise typographique, sensualité produit et motion concise pour des ads premium et des teasers de lancement.",
    role: "Designer motion et responsable du système visuel.",
    tools: ["After Effects", "Premiere Pro", "Photoshop"],
    services: ["Motion", "Vidéo", "Direction de campagne"],
    tone: {
      name: "Rose fumé",
      background: "from-[#fff2f2] via-[#e3c9cf] to-[#9d7b87]",
      accent: "#694d57",
    },
    context:
      "Le lancement beauté nécessitait des assets motion digitaux plus élégants qu’agressivement commerciaux.",
    objective:
      "Créer un kit motion concis et premium pour les moments forts du lancement et leur amplification sociale.",
    approach:
      "Le mouvement a été gardé minimal et intentionnel, avec une attention particulière aux transitions, au rythme et à l’équilibre texte-image.",
    solution:
      "Un ensemble de teasers, de frames animées en boucle et de stories a créé un langage motion cohérent.",
    impact:
      "Le système motion a permis à la marque de déployer sa campagne tout en conservant une impression d’élégance.",
    metrics: [
      { label: "Assets vidéo", value: "14" },
      { label: "Déclinaisons", value: "9" },
      { label: "Ratios", value: "4" },
    ],
    deliverables: ["Teasers", "Stories", "Kit motion", "Frames de campagne"],
    sections: [
      { title: "Rythme visuel", body: "L’enjeu était de garder un motion raffiné, jamais nerveux, tout en captant rapidement l’attention." },
      { title: "Systémisation", body: "Les transitions et timings texte ont été pensés comme un langage répétable sur plusieurs durées d’annonce." },
      { title: "Effet de marque", body: "Le résultat donne au lancement une finition cinématographique sans éloigner la communication de la clarté produit." },
    ],
    gallery: [
      {
        id: "sil-1",
        title: "Frames motion",
        caption: "Des dégradés doux et une typographie en strates conçus pour des révélations animées.",
        aspect: "landscape",
        tone: { name: "Rose", background: "from-[#fff2f5] via-[#dcb7c1] to-[#875f6e]", accent: "#694d57" },
      },
      {
        id: "sil-2",
        title: "Format story",
        caption: "Des compositions mobile plein écran avec un timing calme et premium.",
        aspect: "portrait",
        tone: { name: "Prune fumée", background: "from-[#2d1d23] via-[#6f4754] to-[#caa8b4]", accent: "#f6e3e8" },
      },
    ],
    video: {
      title: "Extrait motion de campagne",
      embedUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
      note: "À remplacer par le reel final, une coupe publicitaire ou un embed Vimeo du case study.",
    },
  },
  {
    slug: "meridian-interface-refresh",
    title: "Meridian",
    category: "UI / Web design",
    year: "2025",
    client: "Meridian Capital",
    featured: false,
    shortPitch: "Un refresh d’interface à forte dimension de confiance pour une marque finance voulant gagner en chaleur sans perdre en précision.",
    excerpt:
      "Concept UI et système de landing pages conçus pour traduire une marque conservatrice vers une présence digitale plus raffinée et plus agréable à utiliser.",
    role: "Designer UI en charge de l’alignement avec la marque.",
    tools: ["Figma", "Photoshop"],
    services: ["UI design", "Design systems", "Direction web"],
    tone: {
      name: "Graphite doré",
      background: "from-[#f7f5f1] via-[#d3cdc0] to-[#6d624e]",
      accent: "#7c6845",
    },
    context:
      "Meridian avait besoin d’une présence web plus premium sans adopter des codes trop startup qui auraient affaibli la confiance.",
    objective:
      "Moderniser la hiérarchie, le rythme et le responsive sur les landing pages clés.",
    approach:
      "Le design mélange des codes de luxe discret avec une architecture de l’information rigoureuse et une retenue compatible avec l’univers business.",
    solution:
      "Les nouveaux templates ont introduit davantage de modularité, une typographie plus propre et des appels à l’action plus convaincants.",
    impact:
      "Le concept crée un pont entre la réputation institutionnelle de la marque et une expression digitale plus actuelle.",
    metrics: [
      { label: "Templates clés", value: "7" },
      { label: "Composants", value: "26" },
      { label: "Breakpoints", value: "4" },
    ],
    deliverables: ["Pages d’atterrissage", "Bibliothèque de composants", "Règles responsive"],
    sections: [
      { title: "Confiance par le design", body: "Une interface financière premium repose sur la hiérarchie, la clarté et des signaux subtils, pas sur une complexité décorative." },
      { title: "Logique responsive", body: "Les layouts ont été adaptés pour tablette et mobile avec un vrai travail sur le rythme et la scannabilité, pas seulement une réduction du contenu." },
      { title: "Résultat système", body: "L’UI proposée pose une base scalable pour les futures pages produit et marketing." },
    ],
    gallery: [
      {
        id: "mer-1",
        title: "Hero bureau",
        caption: "Une densité structurée et des tonalités de luxe discret.",
        aspect: "wide",
        tone: { name: "Brume dorée", background: "from-[#fcfaf6] via-[#d8d1c5] to-[#85765c]", accent: "#7c6845" },
      },
      {
        id: "mer-2",
        title: "Version responsive",
        caption: "Une hiérarchie mobile pensée pour la clarté et la confiance.",
        aspect: "portrait",
        tone: { name: "Acier", background: "from-[#f7f3ed] via-[#cfc7b7] to-[#55514a]", accent: "#51442d" },
      },
    ],
  },
  {
    slug: "parhelion-hybrid-launch",
    title: "Parhelion",
    category: "Hybride / Campagne complète",
    year: "2023",
    client: "Parhelion Studio",
    featured: false,
    shortPitch: "Un écosystème de campagne hybride couvrant identité, supports événementiels, motion et assets digitaux de lancement.",
    excerpt:
      "Direction créative cross-canal pour le lancement d’un studio qui devait rester cohérent entre supports physiques et digitaux.",
    role: "Designer pluridisciplinaire sur le print, le motion et la coordination digitale.",
    tools: ["Illustrator", "InDesign", "After Effects", "Figma"],
    services: ["Design de campagne", "Print", "Motion", "Digital"],
    tone: {
      name: "Bronze olive",
      background: "from-[#f3f0e9] via-[#d3c5ae] to-[#66715a]",
      accent: "#526046",
    },
    context:
      "Parhelion voulait une campagne de lancement cohérente de l’invitation jusqu’aux reveals social media et au recap post-événement.",
    objective:
      "Développer une direction artistique capable de s’étendre sur des formats, échelles et contextes de production variés.",
    approach:
      "Une grille flexible et une signature serif affirmée ont créé de la reconnaissance tout en laissant chaque type d’asset respirer différemment.",
    solution:
      "Le travail relie visuels événementiels, imprimés, graphismes écran et contenus de lancement dans un système de campagne unifié.",
    impact:
      "Le studio a obtenu un langage de lancement identifiable, tout en restant pratique pendant les phases de production rapide.",
    metrics: [
      { label: "Canaux", value: "5" },
      { label: "Livrables", value: "30+" },
      { label: "Phases de production", value: "3" },
    ],
    deliverables: ["Visuels événementiels", "Invitations", "Assets motion", "Déploiement social media"],
    sections: [
      { title: "Cohérence de campagne", body: "Le projet exigeait un langage visuel unique capable de circuler entre événement, print et digital sans rupture perceptible." },
      { title: "Clarté opérationnelle", body: "La logique de templates et l’organisation des fichiers ont été pensées pour faciliter les itérations rapides pendant la semaine de lancement." },
      { title: "Perception", body: "La campagne finale a donné au jeune studio une première impression plus installée et plus premium." },
    ],
    gallery: [
      {
        id: "par-1",
        title: "Invitation de lancement",
        caption: "Une mise en page guidée par le print avec un ancrage serif distinctif.",
        aspect: "square",
        tone: { name: "Bronze", background: "from-[#faf6ef] via-[#cab89a] to-[#5d694f]", accent: "#44553f" },
      },
      {
        id: "par-2",
        title: "Signalétique événement",
        caption: "Un système scalable adapté à l’espace physique comme à la captation écran.",
        aspect: "landscape",
        tone: { name: "Olive nuit", background: "from-[#17221a] via-[#56614b] to-[#c7bea9]", accent: "#f2ecde" },
      },
    ],
  },
  {
    slug: "signal-lab-explorations",
    title: "Signal Lab",
    category: "Personnel / Exploration créative",
    year: "2025",
    client: "Projet personnel",
    featured: false,
    shortPitch: "Une série personnelle qui explore la typographie, le motion et les compositions graphiques pour nourrir de futurs projets.",
    excerpt:
      "Des expérimentations visuelles guidées par la recherche pour élargir le spectre esthétique tout en restant ancrées dans une vraie logique de système.",
    role: "Concept, direction artistique et exécution.",
    tools: ["After Effects", "Illustrator", "Photoshop", "Figma"],
    services: ["Direction créative", "Motion", "Graphisme expérimental"],
    tone: {
      name: "Pulse monochrome",
      background: "from-[#f4f4f2] via-[#bbbbbb] to-[#1d1d1d]",
      accent: "#1d1d1d",
    },
    context:
      "Ces explorations ont été créées pour tester de nouvelles tensions visuelles sans contrainte client.",
    objective:
      "Développer de nouvelles idées de composition et des signatures motion pouvant ensuite nourrir des projets commerciaux.",
    approach:
      "Chaque étude se concentre sur une idée graphique forte, ensuite déclinée à travers plusieurs formats et temporalités.",
    solution:
      "La série a produit une bibliothèque de principes réutilisables autour du contraste, du cadrage typographique et du rythme temporel.",
    impact:
      "Cet ensemble fonctionne à la fois comme terrain de recherche et comme preuve de goût, d’amplitude visuelle et de discipline dans l’expérimentation.",
    metrics: [
      { label: "Études", value: "12" },
      { label: "Formats", value: "3" },
      { label: "Semaines", value: "4" },
    ],
    deliverables: ["Études visuelles", "Boucles motion", "Série d’affiches"],
    sections: [
      { title: "Logique d’exploration", body: "L’objectif n’était pas la nouveauté décorative, mais une expérimentation maîtrisée avec une intention de composition claire." },
      { title: "Valeur de transfert", body: "Beaucoup des dispositifs obtenus peuvent être transposés dans des campagnes de marque, des reels teaser ou des assets social media premium." },
      { title: "Construction de signature", body: "Les projets personnels servent à affirmer un point de vue, pas seulement à montrer de la variété esthétique." },
    ],
    gallery: [
      {
        id: "sig-1",
        title: "Système d’affiches",
        caption: "Des contrastes monochromes et des structures éditoriales nettes.",
        aspect: "portrait",
        tone: { name: "Mono", background: "from-[#ffffff] via-[#bfbfbf] to-[#191919]", accent: "#111111" },
      },
      {
        id: "sig-2",
        title: "Étude de boucle",
        caption: "Une recherche motion centrée sur la tension et la cadence.",
        aspect: "landscape",
        tone: { name: "Pulse", background: "from-[#efefef] via-[#a2a2a2] to-[#202020]", accent: "#202020" },
      },
    ],
    video: {
      title: "Boucle d’exploration",
      embedUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
      note: "Utiliser cet emplacement pour des boucles motion personnelles, des montages ou des reels expérimentaux.",
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
