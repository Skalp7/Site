"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "rise" | "left" | "right" | "zoom" | "panel";
};

const variants = {
  rise: { opacity: 0, y: 72, scale: 0.96, filter: "blur(10px)" },
  left: { opacity: 0, x: -72, scale: 0.96, filter: "blur(10px)" },
  right: { opacity: 0, x: 72, scale: 0.96, filter: "blur(10px)" },
  zoom: { opacity: 0, y: 24, scale: 0.88, filter: "blur(12px)" },
  panel: { opacity: 0, y: 90, scale: 0.92, rotateX: 8, filter: "blur(12px)" },
};

export function AnimatedReveal({ children, delay = 0, className, variant = "rise" }: AnimatedRevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={{ transformStyle: "preserve-3d" }}
      initial={reducedMotion ? false : variants[variant]}
      whileInView={reducedMotion ? {} : { opacity: 1, x: 0, y: 0, scale: 1, rotateX: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
