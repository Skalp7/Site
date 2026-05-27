"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

type ForsouthAssetFrameProps = {
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

export function ForsouthAssetFrame({
  src,
  alt,
  label,
  caption,
  aspect = "landscape",
  className,
  contain = false,
}: ForsouthAssetFrameProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101723] shadow-[0_28px_90px_rgba(0,0,0,0.28)]",
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(221,187,132,0.24),transparent_26%),radial-gradient(circle_at_75%_18%,rgba(109,132,166,0.24),transparent_24%),linear-gradient(135deg,#07111d_0%,#17263a_45%,#b78a53_100%)]">
            <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.08)_48%,transparent_70%)]" />
            <div className="absolute left-1/2 top-1/2 grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/16 bg-white/7 text-center backdrop-blur">
              <span className="px-5 font-display text-3xl leading-none text-white">FS</span>
            </div>
            <div className="absolute inset-x-8 bottom-8 h-px bg-white/18" />
          </div>
        )}
      </div>
      <figcaption className="grid gap-2 px-5 py-4">
        <p className="text-[10px] uppercase tracking-[0.28em] text-white/46">{label}</p>
        {caption ? <p className="text-sm leading-6 text-white/68">{caption}</p> : null}
      </figcaption>
    </figure>
  );
}
