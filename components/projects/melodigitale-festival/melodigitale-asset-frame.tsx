"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

type MelodigitaleAssetFrameProps = {
  src: string;
  alt: string;
  label: string;
  caption?: string;
  aspect?: "wide" | "landscape" | "portrait" | "square";
  className?: string;
  contain?: boolean;
};

const aspectMap = {
  wide: "aspect-[16/8]",
  landscape: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
};

function getFallbackKind(src: string, label: string) {
  const value = `${src} ${label}`.toLowerCase();

  if (value.includes("poster")) return "poster";
  if (value.includes("logo") || value.includes("symbol")) return "logo";
  if (value.includes("grid") || value.includes("construction")) return "grid";
  if (value.includes("color")) return "colors";
  if (value.includes("program") || value.includes("editorial")) return "editorial";
  if (value.includes("social") || value.includes("signage")) return "application";
  if (value.includes("experience") || value.includes("concert") || value.includes("gallery")) return "experience";

  return "system";
}

export function MelodigitaleAssetFrame({
  src,
  alt,
  label,
  caption,
  aspect = "landscape",
  className,
  contain = false,
}: MelodigitaleAssetFrameProps) {
  const [failed, setFailed] = useState(false);
  const fallbackKind = getFallbackKind(src, label);

  return (
    <figure
      className={cn(
        "group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0e1311] text-white shadow-[0_28px_90px_rgba(14,19,17,0.3)]",
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
          <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_20%_18%,rgba(173,127,21,0.3),transparent_20%),radial-gradient(circle_at_82%_16%,rgba(153,112,110,0.28),transparent_20%),linear-gradient(135deg,#0e1311_0%,#172d30_48%,#5f3835_100%)]">
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />

            {fallbackKind === "logo" || fallbackKind === "grid" ? (
              <div className="absolute left-1/2 top-1/2 grid h-52 w-52 -translate-x-1/2 -translate-y-1/2 place-items-center">
                <div className="absolute inset-0 rotate-45 border border-[#ad7f15]/45" />
                <div className="absolute inset-8 rotate-45 border border-white/20" />
                <div className="absolute h-36 w-20 rounded-[50%_50%_20%_20%] border border-[#99706e] bg-[#805052]/70" />
                <div className="absolute bottom-3 h-20 w-px bg-[#ad7f15]" />
                <span className="absolute -bottom-8 text-[9px] uppercase tracking-[0.28em] text-white/55">
                  digital flora
                </span>
              </div>
            ) : null}

            {fallbackKind === "poster" ? (
              <div className="absolute left-1/2 top-1/2 grid h-[78%] w-[58%] -translate-x-1/2 -translate-y-1/2 content-between border border-white/18 bg-[#ad7f15] p-5 text-[#0e1311] shadow-2xl">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em]">Marseille / Art digital</p>
                  <p className="mt-4 font-display text-4xl leading-none">Melo<br />digitale</p>
                </div>
                <div className="grid place-items-center">
                  <div className="h-24 w-14 rounded-[50%_50%_20%_20%] bg-[#172d30]" />
                </div>
                <p className="text-xs font-semibold">Quand la musique effleure.</p>
              </div>
            ) : null}

            {fallbackKind === "colors" ? (
              <div className="absolute inset-x-[8%] top-1/2 grid -translate-y-1/2 grid-cols-6 overflow-hidden rounded-[1.25rem] border border-white/18 shadow-2xl">
                {["#ad7f15", "#99706e", "#805052", "#5f3835", "#172d30", "#0e1311"].map((color) => (
                  <div key={color} className="h-52" style={{ backgroundColor: color }} />
                ))}
              </div>
            ) : null}

            {fallbackKind === "editorial" || fallbackKind === "application" ? (
              <div className="absolute left-1/2 top-1/2 grid w-[72%] -translate-x-1/2 -translate-y-1/2 grid-cols-[0.85fr_1.15fr] gap-3 rounded-[1.25rem] border border-white/16 bg-[#0e1311]/82 p-4 shadow-2xl">
                <div className="rounded-[0.8rem] bg-[#99706e] p-4">
                  <p className="font-display text-3xl leading-none">Melo<br />digitale</p>
                  <div className="mt-8 h-2 rounded-full bg-[#ad7f15]" />
                  <div className="mt-2 h-2 w-2/3 rounded-full bg-white/50" />
                </div>
                <div className="grid gap-3">
                  <div className="rounded-[0.8rem] bg-[#172d30]" />
                  <div className="grid grid-cols-3 gap-2">
                    <div className="rounded-lg bg-[#ad7f15]" />
                    <div className="rounded-lg bg-[#805052]" />
                    <div className="rounded-lg bg-white/70" />
                  </div>
                </div>
              </div>
            ) : null}

            {fallbackKind === "experience" ? (
              <div className="absolute inset-x-[10%] bottom-[14%] grid h-[62%] grid-cols-3 items-end gap-3">
                {[0, 1, 2].map((item) => (
                  <div key={item} className="relative h-full overflow-hidden rounded-t-full border border-white/14 bg-white/[0.06] backdrop-blur">
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(to_top,#ad7f15,transparent)] opacity-70" />
                    <div className="absolute bottom-5 left-1/2 h-16 w-8 -translate-x-1/2 rounded-t-full bg-[#99706e]" />
                  </div>
                ))}
              </div>
            ) : null}

            {fallbackKind === "system" ? (
              <div className="absolute inset-0 grid grid-cols-3 place-items-center gap-5 p-12">
                {[0, 1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className="h-16 w-10 rounded-[50%_50%_20%_20%] border border-white/18"
                    style={{ backgroundColor: item % 2 === 0 ? "#99706e" : "#ad7f15" }}
                  />
                ))}
              </div>
            ) : null}
          </div>
        )}
      </div>
      <figcaption className="grid gap-2 px-5 py-4">
        <p className="text-[10px] uppercase tracking-[0.28em] text-[#ad7f15]">{label}</p>
        {caption ? <p className="text-sm leading-6 text-white/66">{caption}</p> : null}
      </figcaption>
    </figure>
  );
}
