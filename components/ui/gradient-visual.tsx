import { cn } from "@/lib/utils";
import { VisualTone } from "@/types";

type GradientVisualProps = {
  tone: VisualTone;
  className?: string;
  interactive?: boolean;
};

export function GradientVisual({ tone, className, interactive = false }: GradientVisualProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-white/12 bg-gradient-to-br",
        tone.background,
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.42),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.2),transparent_32%)]" />
      <div
        className={cn(
          "absolute inset-0 opacity-70 mix-blend-soft-light [background-image:linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.45)_50%,transparent_80%)]",
          interactive && "animate-[shimmer_5s_linear_infinite]",
        )}
      />
      <div
        className={cn(
          "absolute -right-10 top-8 h-28 w-28 rounded-full border border-white/20 bg-white/15 backdrop-blur-xl",
          interactive && "transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2",
        )}
      />
      <div
        className={cn(
          "absolute bottom-0 left-0 h-40 w-40 translate-x-[-15%] translate-y-[25%] rounded-full bg-black/15 blur-3xl",
          interactive && "transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2",
        )}
      />
      <div className="absolute bottom-6 left-6">
        <span
          className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white/88 backdrop-blur"
          style={{ boxShadow: `0 0 40px ${tone.accent}22` }}
        >
          {tone.name}
        </span>
      </div>
    </div>
  );
}
