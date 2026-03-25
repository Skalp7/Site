"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 22, stiffness: 180, mass: 0.4 });
  const springY = useSpring(y, { damping: 22, stiffness: 180, mass: 0.4 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      x.set(event.clientX - 10);
      y.set(event.clientY - 10);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-5 w-5 rounded-full border border-accent/40 bg-accent/10 backdrop-blur-sm md:block"
      style={{ x: springX, y: springY }}
    />
  );
}
