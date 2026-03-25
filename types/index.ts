export type VisualTone = {
  name: string;
  background: string;
  accent: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectSection = {
  title: string;
  body: string;
};

export type ProjectGalleryItem = {
  id: string;
  title: string;
  caption: string;
  aspect: "landscape" | "portrait" | "square" | "wide";
  tone: VisualTone;
};

export type ProjectVideo = {
  title: string;
  embedUrl: string;
  note: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  featured: boolean;
  shortPitch: string;
  excerpt: string;
  role: string;
  tools: string[];
  services: string[];
  tone: VisualTone;
  context: string;
  objective: string;
  approach: string;
  solution: string;
  impact: string;
  metrics: ProjectMetric[];
  gallery: ProjectGalleryItem[];
  deliverables: string[];
  sections: ProjectSection[];
  video?: ProjectVideo;
  externalUrl?: string;
};
