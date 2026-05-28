"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

type Projet111AssetFrameProps = {
  src: string;
  alt: string;
  label: string;
  caption?: string;
  aspect?: "wide" | "landscape" | "portrait" | "square" | "mobile";
  className?: string;
  contain?: boolean;
};

const aspectMap = {
  wide: "aspect-[16/8]",
  landscape: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  mobile: "aspect-[9/16]",
};

export function Projet111AssetFrame({
  src,
  alt,
  label,
  caption,
  aspect = "landscape",
  className,
  contain = false,
}: Projet111AssetFrameProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#f6f1e8] shadow-[0_26px_80px_rgba(10,15,20,0.18)]",
        className,
      )}
    >
      <div className={cn("relative overflow-hidden", aspectMap[aspect])}>
        {!failed ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            unoptimized
            onError={() => setFailed(true)}
            className={cn(
              "h-full w-full transition duration-700 group-hover:scale-[1.025]",
              contain ? "object-contain p-8" : "object-cover",
            )}
          />
        ) : (
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f3efe7_38%,#3e92cf_38%,#3e92cf_52%,#b90000_52%,#b90000_66%,#be6400_66%,#c7a900_100%)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.72),transparent_18%),linear-gradient(90deg,rgba(0,0,0,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:auto,42px_42px,42px_42px]" />
            <div className="absolute left-1/2 top-1/2 grid h-40 w-40 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-black/12 bg-white/88 text-center shadow-2xl">
              <span className="font-display text-6xl leading-none text-[#111827]">111</span>
            </div>
          </div>
        )}
      </div>
      <figcaption className="grid gap-2 px-5 py-4">
        <p className="text-[10px] uppercase tracking-[0.28em] text-[#223cd0]/70">{label}</p>
        {caption ? <p className="text-sm leading-6 text-[#222]/72">{caption}</p> : null}
      </figcaption>
    </figure>
  );
}
