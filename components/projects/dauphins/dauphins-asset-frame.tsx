"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

type DauphinsAssetFrameProps = {
  src: string;
  alt: string;
  label?: string;
  caption?: string;
  aspect?: "wide" | "landscape" | "portrait" | "square";
  position?: string;
  className?: string;
  priority?: boolean;
};

const aspectMap = {
  wide: "aspect-[16/8]",
  landscape: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
};

export function DauphinsAssetFrame({
  src,
  alt,
  label,
  caption,
  aspect = "landscape",
  position = "center",
  className,
  priority = false,
}: DauphinsAssetFrameProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={cn("group overflow-hidden border border-[#7894a2]/20 bg-[#edf2f2] shadow-[0_24px_70px_rgba(16,35,43,0.14)]", className)}>
      <div className={cn("relative overflow-hidden", aspectMap[aspect])}>
        {!failed ? (
          <Image
            src={src}
            alt={alt}
            fill
            unoptimized
            priority={priority}
            sizes="(min-width: 1024px) 60vw, 100vw"
            onError={() => setFailed(true)}
            className="object-cover transition duration-1000 group-hover:scale-[1.018]"
            style={{ objectPosition: position }}
          />
        ) : (
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#edf2f2,#8eb8c8,#19333e)]" />
        )}
      </div>
      {label || caption ? (
        <figcaption className="grid gap-2 border-t border-[#7894a2]/15 bg-white/86 px-5 py-4">
          {label ? <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-[#557887]">{label}</p> : null}
          {caption ? <p className="text-sm leading-6 text-[#19333e]/65">{caption}</p> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
