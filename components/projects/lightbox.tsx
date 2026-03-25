"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { GradientVisual } from "@/components/ui/gradient-visual";
import { ProjectGalleryItem } from "@/types";

type LightboxProps = {
  item: ProjectGalleryItem | null;
  onClose: () => void;
};

export function Lightbox({ item, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#0a0d14]/90 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.28 }}
            className="relative w-full max-w-5xl rounded-[2rem] border border-white/12 bg-[#111723] p-4 text-white shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white"
              aria-label="Close visual"
            >
              <X className="h-5 w-5" />
            </button>

            <GradientVisual tone={item.tone} className="aspect-[16/10] min-h-[360px] rounded-[1.6rem]" />

            <div className="grid gap-2 px-2 pb-2 pt-6 sm:px-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">{item.title}</p>
              <p className="max-w-3xl text-sm leading-7 text-white/76">{item.caption}</p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
