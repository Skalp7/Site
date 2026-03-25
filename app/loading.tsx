export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center bg-[#0c1119] text-white">
      <div className="space-y-4 text-center">
        <div className="mx-auto h-12 w-12 animate-pulse rounded-full border border-white/12 bg-white/8" />
        <p className="text-[11px] uppercase tracking-[0.32em] text-white/48">Chargement du portfolio</p>
      </div>
    </div>
  );
}
