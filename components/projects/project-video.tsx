import { PlayCircle } from "lucide-react";

import { ProjectVideo as ProjectVideoType } from "@/types";

type ProjectVideoProps = {
  video: ProjectVideoType;
};

export function ProjectVideo({ video }: ProjectVideoProps) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-line/70 bg-[#111723] p-3 shadow-panel">
      <div className="aspect-video overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
        <iframe
          className="h-full w-full"
          src={video.embedUrl}
          title={video.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="flex items-start gap-3 px-2 pb-2 pt-5 text-white">
        <PlayCircle className="mt-1 h-5 w-5 text-white/70" />
        <div className="space-y-2">
          <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">{video.title}</p>
          <p className="text-sm leading-7 text-white/72">{video.note}</p>
        </div>
      </div>
    </div>
  );
}
