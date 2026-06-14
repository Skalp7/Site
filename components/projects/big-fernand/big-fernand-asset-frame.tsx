"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

type BigFernandAssetFrameProps = {
  src: string;
  alt: string;
  label?: string;
  caption?: string;
  aspect?: "wide" | "landscape" | "portrait" | "square" | "story";
  className?: string;
  contain?: boolean;
  position?: string;
  priority?: boolean;
};

const aspectMap = {
  wide: "aspect-[16/8]",
  landscape: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  story: "aspect-[9/16]",
};

export function BigFernandAssetFrame({
  src,
  alt,
  label,
  caption,
  aspect = "landscape",
  className,
  contain = false,
  position = "center",
  priority = false,
}: BigFernandAssetFrameProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={cn("group overflow-hidden border border-black/15 bg-[#f5ecdc] text-[#111111]", className)}>
      <div className={cn("relative overflow-hidden", aspectMap[aspect])}>
        {!failed ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 50vw, 100vw"
            unoptimized
            onError={() => setFailed(true)}
            className={cn("transition duration-700 group-hover:scale-[1.02]", contain ? "object-contain p-6" : "object-cover")}
            style={{ objectPosition: position }}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-[#f5ecdc] p-8 text-center">
            <div className="grid h-40 w-40 place-items-center rounded-full border-2 border-black bg-[#e04d38] text-white">
              <span className="font-display text-4xl leading-none">BF<br />MRS</span>
            </div>
          </div>
        )}
      </div>
      {label || caption ? (
        <figcaption className="border-t border-black/15 px-5 py-4">
          {label ? <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#1d6fa5]">{label}</p> : null}
          {caption ? <p className="mt-2 text-sm leading-6 text-black/58">{caption}</p> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
