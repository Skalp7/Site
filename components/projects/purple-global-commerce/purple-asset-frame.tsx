"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

type PurpleAssetFrameProps = {
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

function getFallbackKind(src: string, label: string) {
  const value = `${src} ${label}`.toLowerCase();

  if (value.includes("logo")) return "logo";
  if (value.includes("brochure")) return "brochure";
  if (value.includes("label-front") || value.includes("front")) return "front-label";
  if (value.includes("label-back") || value.includes("back")) return "back-label";
  if (value.includes("color")) return "colors";
  if (value.includes("packaging")) return "packaging";
  if (value.includes("photography") || value.includes("raw")) return "photography";
  if (value.includes("drink") || value.includes("cake") || value.includes("ice") || value.includes("dessert")) return "derived";
  if (value.includes("marketing") || value.includes("e-commerce")) return "marketing";

  return "brand";
}

export function PurpleAssetFrame({
  src,
  alt,
  label,
  caption,
  aspect = "landscape",
  className,
  contain = false,
}: PurpleAssetFrameProps) {
  const [failed, setFailed] = useState(false);
  const fallbackKind = getFallbackKind(src, label);

  return (
    <figure
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#170b1d] text-white shadow-[0_28px_90px_rgba(23,11,29,0.24)]",
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
          <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_22%_18%,rgba(241,189,73,0.28),transparent_19%),radial-gradient(circle_at_82%_16%,rgba(110,170,55,0.2),transparent_18%),linear-gradient(135deg,#170b1d_0%,#42124c_42%,#8171b8_76%,#f1bd49_100%)]">
            <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.14)_48%,transparent_68%)]" />
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:32px_32px]" />

            {fallbackKind === "logo" ? (
              <div className="absolute left-1/2 top-1/2 grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/18 bg-black/28 text-center shadow-2xl backdrop-blur">
                <span className="font-display text-5xl leading-none text-white">PGC</span>
                <span className="absolute bottom-9 text-[9px] uppercase tracking-[0.28em] text-[#f1bd49]">Ube trade</span>
              </div>
            ) : null}

            {fallbackKind === "front-label" || fallbackKind === "back-label" ? (
              <div
                className={cn(
                  "absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 content-between rounded-[1.35rem] border border-white/24 bg-[#f7f1e8] p-5 text-[#111111] shadow-2xl",
                  fallbackKind === "front-label" ? "h-[72%] w-[46%]" : "h-[82%] w-[34%]",
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-display text-4xl leading-none text-[#6a176e]">Ube</span>
                  <span className="rounded-full bg-[#6eaa37] px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-white">PGC</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full rounded-full bg-[#8171b8]" />
                  <div className="h-2 w-3/4 rounded-full bg-[#6a176e]" />
                  <div className="h-2 w-1/2 rounded-full bg-[#f1bd49]" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#000000]/55">
                  {fallbackKind === "front-label" ? "Front label 4x6 in" : "Back label 3x7 in"}
                </p>
              </div>
            ) : null}

            {fallbackKind === "packaging" ? (
              <div className="absolute inset-x-[12%] bottom-[14%] flex items-end justify-center gap-4">
                {[0, 1, 2].map((item) => (
                  <div key={item} className="relative h-44 w-28 rounded-b-[1.5rem] rounded-t-[0.7rem] border border-white/18 bg-white/14 shadow-2xl backdrop-blur">
                    <div className="absolute inset-x-4 bottom-5 rounded-xl bg-[#f7f1e8] p-3 text-[#111111]">
                      <p className="font-display text-2xl text-[#6a176e]">Ube</p>
                      <div className="mt-3 h-2 rounded-full bg-[#8171b8]" />
                      <div className="mt-2 h-2 w-2/3 rounded-full bg-[#f1bd49]" />
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            {fallbackKind === "brochure" || fallbackKind === "marketing" ? (
              <div className="absolute left-1/2 top-1/2 grid w-[72%] -translate-x-1/2 -translate-y-1/2 grid-cols-2 gap-3 rounded-[1.5rem] border border-white/20 bg-white/12 p-4 shadow-2xl backdrop-blur">
                <div className="rounded-[1rem] bg-[#f7f1e8] p-4 text-[#111111]">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#6a176e]">B2B</p>
                  <p className="mt-4 font-display text-4xl leading-none text-[#6a176e]">Ube</p>
                  <div className="mt-5 h-2 rounded-full bg-[#8171b8]" />
                  <div className="mt-2 h-2 w-3/5 rounded-full bg-[#f1bd49]" />
                </div>
                <div className="grid gap-3">
                  <div className="rounded-[1rem] bg-[#6eaa37]" />
                  <div className="rounded-[1rem] bg-[#8171b8]" />
                </div>
              </div>
            ) : null}

            {fallbackKind === "colors" ? (
              <div className="absolute inset-x-[8%] top-1/2 grid -translate-y-1/2 grid-cols-5 overflow-hidden rounded-[1.5rem] border border-white/18 shadow-2xl">
                {["#8171b8", "#6a176e", "#000000", "#6eaa37", "#f1bd49"].map((color) => (
                  <div key={color} className="h-52" style={{ backgroundColor: color }} />
                ))}
              </div>
            ) : null}

            {fallbackKind === "photography" || fallbackKind === "derived" ? (
              <div className="absolute left-1/2 top-1/2 grid h-52 w-52 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#8171b8] shadow-2xl">
                <div className="h-32 w-32 rounded-full bg-[#6a176e] shadow-inner" />
                <div className="absolute right-8 top-10 h-12 w-12 rounded-full bg-[#f1bd49]" />
                <div className="absolute bottom-10 left-8 h-10 w-10 rounded-full bg-[#6eaa37]" />
              </div>
            ) : null}

            {fallbackKind === "brand" ? (
              <div className="absolute left-1/2 top-1/2 grid h-40 w-40 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/16 bg-black/24 text-center backdrop-blur">
                <span className="font-display text-5xl leading-none text-white">PGC</span>
              </div>
            ) : null}
          </div>
        )}
      </div>
      <figcaption className="grid gap-2 px-5 py-4">
        <p className="text-[10px] uppercase tracking-[0.28em] text-[#f1bd49]/82">{label}</p>
        {caption ? <p className="text-sm leading-6 text-white/68">{caption}</p> : null}
      </figcaption>
    </figure>
  );
}
