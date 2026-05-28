"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

type CultureAssetFrameProps = {
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

  if (value.includes("old-logo")) return "old-logo";
  if (value.includes("logo")) return "logo";
  if (value.includes("color")) return "colors";
  if (value.includes("motion") || value.includes(".mp4") || value.includes("overlay")) return "motion";
  if (value.includes("timeline") || value.includes("video")) return "video";
  if (value.includes("poster") || value.includes("social") || value.includes("banner")) return "application";
  if (value.includes("mockup") || value.includes("screen")) return "mockup";

  return "brand";
}

export function CultureAssetFrame({
  src,
  alt,
  label,
  caption,
  aspect = "landscape",
  className,
  contain = false,
}: CultureAssetFrameProps) {
  const [failed, setFailed] = useState(false);
  const fallbackKind = getFallbackKind(src, label);

  return (
    <figure
      className={cn(
        "group relative overflow-hidden rounded-[1.5rem] border border-black/10 bg-[#f4fbff] text-[#101216] shadow-[0_28px_90px_rgba(5,7,10,0.13)]",
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
          <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_18%_14%,rgba(0,35,149,0.13),transparent_18%),radial-gradient(circle_at_82%_12%,rgba(255,206,0,0.18),transparent_18%),linear-gradient(135deg,#ffffff_0%,#addae8_48%,#05070a_100%)]">
            <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(5,7,10,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(5,7,10,0.06)_1px,transparent_1px)] [background-size:34px_34px]" />
            <div className="absolute left-8 top-8 flex gap-2">
              {["#0055a4", "#ffffff", "#ef4135", "#000000", "#dd0000", "#ffce00"].map((color) => (
                <span key={color} className="h-2 w-8 rounded-full border border-black/10" style={{ backgroundColor: color }} />
              ))}
            </div>

            {fallbackKind === "old-logo" ? (
              <div className="absolute left-1/2 top-1/2 grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-black/12 bg-white/70 text-center backdrop-blur">
                <span className="font-display text-4xl leading-none text-[#111111]">CA</span>
                <span className="absolute bottom-9 text-[9px] uppercase tracking-[0.24em] text-black/45">old mark</span>
              </div>
            ) : null}

            {fallbackKind === "logo" ? (
              <div className="absolute left-1/2 top-1/2 grid h-52 w-52 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[2rem] border border-black/12 bg-white/82 text-center shadow-2xl backdrop-blur">
                <span className="font-display text-6xl leading-none text-[#05070a]">CA</span>
                <span className="absolute bottom-10 text-[9px] uppercase tracking-[0.3em] text-[#0055a4]">Culture Arabesque</span>
              </div>
            ) : null}

            {fallbackKind === "colors" ? (
              <div className="absolute inset-x-[8%] top-1/2 grid -translate-y-1/2 grid-cols-6 overflow-hidden rounded-[1.25rem] border border-black/12 shadow-2xl">
                {["#addae8", "#000000", "#ffffff", "#0055a4", "#ef4135", "#ffce00"].map((color) => (
                  <div key={color} className="h-52 border-r border-black/10 last:border-r-0" style={{ backgroundColor: color }} />
                ))}
              </div>
            ) : null}

            {fallbackKind === "motion" || fallbackKind === "video" ? (
              <div className="absolute inset-x-[10%] top-1/2 -translate-y-1/2 rounded-[1.5rem] border border-white/28 bg-[#05070a]/88 p-5 text-white shadow-2xl">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="text-[10px] uppercase tracking-[0.28em] text-[#addae8]">motion system</span>
                  <span className="h-2 w-2 rounded-full bg-[#ef4135]" />
                </div>
                <div className="grid gap-3">
                  <div className="h-24 rounded-[1rem] bg-[linear-gradient(90deg,#addae8_0%,#ffffff_42%,#ffce00_100%)]" />
                  <div className="grid grid-cols-4 gap-2">
                    {[0, 1, 2, 3].map((item) => (
                      <div key={item} className="h-10 rounded-lg bg-white/14" />
                    ))}
                  </div>
                </div>
                <div className="mt-5 h-1 rounded-full bg-white/18">
                  <div className="h-full w-2/3 rounded-full bg-[#addae8]" />
                </div>
              </div>
            ) : null}

            {fallbackKind === "application" || fallbackKind === "mockup" ? (
              <div className="absolute left-1/2 top-1/2 grid w-[70%] -translate-x-1/2 -translate-y-1/2 gap-3 rounded-[1.5rem] border border-black/10 bg-white/78 p-4 shadow-2xl backdrop-blur">
                <div className="h-24 rounded-[1rem] bg-[#addae8]" />
                <div className="grid grid-cols-[1fr_0.55fr] gap-3">
                  <div className="space-y-2">
                    <div className="h-3 rounded-full bg-black" />
                    <div className="h-3 w-2/3 rounded-full bg-[#0055a4]" />
                    <div className="h-3 w-1/2 rounded-full bg-[#ef4135]" />
                  </div>
                  <div className="rounded-[1rem] bg-[#ffce00]" />
                </div>
              </div>
            ) : null}

            {fallbackKind === "brand" ? (
              <div className="absolute left-1/2 top-1/2 grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-black/12 bg-white/70 text-center backdrop-blur">
                <span className="font-display text-5xl leading-none text-[#05070a]">CA</span>
              </div>
            ) : null}
          </div>
        )}
      </div>
      <figcaption className="grid gap-2 bg-white/78 px-5 py-4 backdrop-blur">
        <p className="text-[10px] uppercase tracking-[0.28em] text-[#0055a4]">{label}</p>
        {caption ? <p className="text-sm leading-6 text-[#101216]/66">{caption}</p> : null}
      </figcaption>
    </figure>
  );
}
