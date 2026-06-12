"use client";

import { Film } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

type Projet111VideoFrameProps = {
  src: string;
  title: string;
  caption: string;
  className?: string;
};

export function Projet111VideoFrame({ src, title, caption, className }: Projet111VideoFrameProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-[0.5rem] border border-white/14 bg-[#111111] text-white shadow-[0_26px_80px_rgba(10,15,20,0.22)]",
        className,
      )}
    >
      <div className="relative aspect-video overflow-hidden">
        {!failed ? (
          <video
            src={src}
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => setFailed(true)}
            className="h-full w-full bg-black object-cover"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-[linear-gradient(135deg,#111827_0%,#223cd0_42%,#be6400_100%)]">
            <div className="grid gap-4 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-white/18 bg-white/10">
                <Film className="h-7 w-7 text-white" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/60">Placeholder vidéo</p>
            </div>
          </div>
        )}
      </div>
      <figcaption className="grid gap-2 px-5 py-4">
        <p className="text-[10px] uppercase tracking-[0.28em] text-white/44">{title}</p>
        <p className="text-sm leading-6 text-white/68">{caption}</p>
      </figcaption>
    </figure>
  );
}
