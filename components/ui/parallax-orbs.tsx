"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";

type ParallaxOrbsProps = {
  className?: string;
  theme?: "gold" | "blue" | "mixed";
};

const themeClasses = {
  gold: {
    first: "from-[#c08c61]/40 via-[#9b6847]/18 to-transparent",
    second: "from-[#f0d0a7]/28 via-[#ad7c53]/14 to-transparent",
  },
  blue: {
    first: "from-[#7e96ca]/36 via-[#45639a]/20 to-transparent",
    second: "from-[#ced8f6]/20 via-[#6b82b6]/12 to-transparent",
  },
  mixed: {
    first: "from-[#c08c61]/36 via-[#2f4d82]/18 to-transparent",
    second: "from-[#d7c0a1]/18 via-[#8fa4d5]/16 to-transparent",
  },
};

export function ParallaxOrbs({ className, theme = "mixed" }: ParallaxOrbsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yPrimary = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [60, -60]);
  const ySecondary = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [-40, 80]);
  const rotate = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [-8, 12]);

  return (
    <div ref={ref} className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <motion.div
        style={{ y: yPrimary, rotate }}
        className={cn(
          "absolute -left-24 top-12 h-[22rem] w-[22rem] rounded-full bg-gradient-to-br blur-3xl",
          themeClasses[theme].first,
        )}
      />
      <motion.div
        style={{ y: ySecondary, rotate }}
        className={cn(
          "absolute -right-28 bottom-0 h-[26rem] w-[26rem] rounded-full bg-gradient-to-br blur-3xl",
          themeClasses[theme].second,
        )}
      />
    </div>
  );
}
