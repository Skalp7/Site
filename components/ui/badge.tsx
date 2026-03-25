import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/12 bg-white/7 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-white/72 backdrop-blur",
        className,
      )}
    >
      {children}
    </span>
  );
}
