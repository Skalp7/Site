"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function AnimatedReveal({ children, delay = 0, className }: AnimatedRevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
