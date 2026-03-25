import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-[#0c1119] py-20 text-white">
      <Container className="grid gap-8 text-center">
        <p className="text-[11px] uppercase tracking-[0.32em] text-white/44">404</p>
        <div className="space-y-5">
          <h1 className="font-display text-5xl sm:text-6xl">Cette page est sortie de la grille du portfolio.</h1>
          <p className="mx-auto max-w-2xl text-base leading-8 text-white/64">
            La page a peut-être été déplacée, le slug du projet est absent ou le contenu n’a pas encore été ajouté.
          </p>
        </div>
        <div className="flex justify-center">
          <ButtonLink href="/" variant="ghost">
            Retour à l’accueil
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
