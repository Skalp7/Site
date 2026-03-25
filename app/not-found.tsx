import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-[#0c1119] py-20 text-white">
      <Container className="grid gap-8 text-center">
        <p className="text-[11px] uppercase tracking-[0.32em] text-white/44">404</p>
        <div className="space-y-5">
          <h1 className="font-display text-5xl sm:text-6xl">This page is outside the portfolio grid.</h1>
          <p className="mx-auto max-w-2xl text-base leading-8 text-white/64">
            The page may have moved, the project slug may be missing or the content has not been added yet.
          </p>
        </div>
        <div className="flex justify-center">
          <ButtonLink href="/" variant="ghost">
            Return home
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
