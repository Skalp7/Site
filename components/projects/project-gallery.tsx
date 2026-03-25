"use client";

import { useState } from "react";

import { GradientVisual } from "@/components/ui/gradient-visual";
import { cn } from "@/lib/utils";
import { ProjectGalleryItem } from "@/types";
import { Lightbox } from "@/components/projects/lightbox";

type ProjectGalleryProps = {
  items: ProjectGalleryItem[];
};

const aspectClassMap: Record<ProjectGalleryItem["aspect"], string> = {
  landscape: "aspect-[16/11]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  wide: "aspect-[16/8]",
};

export function ProjectGallery({ items }: ProjectGalleryProps) {
  const [activeItem, setActiveItem] = useState<ProjectGalleryItem | null>(null);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveItem(item)}
            className={cn(
              "group overflow-hidden rounded-[2rem] border border-line/70 bg-white/80 p-3 text-left shadow-panel transition-transform duration-500 hover:-translate-y-1",
              index % 3 === 0 && "md:col-span-2",
            )}
          >
            <GradientVisual tone={item.tone} className={cn("rounded-[1.5rem]", aspectClassMap[item.aspect])} interactive />
            <div className="grid gap-2 px-2 pb-2 pt-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-muted">{item.title}</p>
              <p className="text-sm leading-7 text-muted">{item.caption}</p>
            </div>
          </button>
        ))}
      </div>

      <Lightbox item={activeItem} onClose={() => setActiveItem(null)} />
    </>
  );
}
