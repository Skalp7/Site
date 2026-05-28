"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

type BrannerAssetFrameProps = {
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

export function BrannerAssetFrame({
  src,
  alt,
  label,
  caption,
  aspect = "landscape",
  className,
  contain = false,
}: BrannerAssetFrameProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#160d08] text-white shadow-[0_28px_90px_rgba(22,13,8,0.24)]",
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_24%,rgba(248,165,41,0.35),transparent_22%),linear-gradient(135deg,#100904_0%,#7b2a12_45%,#ee613b_72%,#f8a529_100%)]">
            <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.13)_48%,transparent_68%)]" />
            <div className="absolute left-1/2 top-1/2 grid h-40 w-40 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/16 bg-black/28 text-center backdrop-blur">
              <span className="font-display text-5xl leading-none text-white">BR</span>
            </div>
            <div className="absolute inset-x-8 bottom-8 h-px bg-white/24" />
          </div>
        )}
      </div>
      <figcaption className="grid gap-2 px-5 py-4">
        <p className="text-[10px] uppercase tracking-[0.28em] text-[#f8a529]/78">{label}</p>
        {caption ? <p className="text-sm leading-6 text-white/68">{caption}</p> : null}
      </figcaption>
    </figure>
  );
}
