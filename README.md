# Premium Multimedia Graphic Designer Portfolio

Portfolio multi-pages conçu avec `Next.js`, `React`, `TypeScript` et `Tailwind CSS`.

Le projet a été pensé pour :

- soutenir des candidatures en poste de `Graphic Designer / Multimedia Graphic Designer`
- présenter un profil hybride `design graphique + vidéo + contenu digital`
- rester crédible pour du freelance premium sans changer d’ADN

## Stack

- `Next.js` App Router
- `React 19`
- `TypeScript`
- `Tailwind CSS`
- `Framer Motion`

## Lancer le projet

```bash
npm install
npm run dev
```

Le site sera disponible sur [http://localhost:3000](http://localhost:3000).

Pour un build de production :

```bash
npm run build
npm run start
```

## Structure

```text
app/
  about/
  contact/
  projects/
    [slug]/
components/
  layout/
  projects/
  sections/
  ui/
data/
  projects.ts
  services.ts
  site.ts
lib/
types/
```

## Modifier les contenus

Les contenus sont centralisés pour rester faciles à éditer.

- Informations globales du site : [data/site.ts](/Users/pascalmaraval/Documents/Site/data/site.ts)
- Services : [data/services.ts](/Users/pascalmaraval/Documents/Site/data/services.ts)
- Projets : [data/projects.ts](/Users/pascalmaraval/Documents/Site/data/projects.ts)

### Modifier l’identité du portfolio

Dans [data/site.ts](/Users/pascalmaraval/Documents/Site/data/site.ts), vous pouvez changer :

- nom
- titre principal
- email
- localisation
- intro
- CTA recrutement / freelance
- skills
- tools
- process

### Modifier un projet

Chaque projet est défini comme un objet dans [data/projects.ts](/Users/pascalmaraval/Documents/Site/data/projects.ts).

Vous pouvez y éditer :

- `slug`
- `title`
- `category`
- `shortPitch`
- `excerpt`
- `context`
- `objective`
- `approach`
- `solution`
- `impact`
- `metrics`
- `deliverables`
- `sections`
- `gallery`
- `video`

## Ajouter un nouveau projet

1. Dupliquez un objet existant dans [data/projects.ts](/Users/pascalmaraval/Documents/Site/data/projects.ts)
2. Donnez-lui un `slug` unique
3. Renseignez les champs de contenu
4. Ajoutez `featured: true` si vous voulez l’afficher sur la home
5. Remplacez les textes mockés et les visuels placeholder par vos contenus réels

La page détail est générée automatiquement via `app/projects/[slug]/page.tsx`.

## Gestion des visuels

Le prototype utilise actuellement des visuels graphiques simulés via gradients et compositions CSS, afin d’avoir un rendu premium même sans assets finaux.

Pour passer en version réelle, vous pouvez :

- ajouter des images dans `public/`
- remplacer la logique de `GradientVisual` par des images `next/image`
- conserver la lightbox existante pour les ouvrir en plein écran

Fichier principal concerné :

- [components/ui/gradient-visual.tsx](/Users/pascalmaraval/Documents/Site/components/ui/gradient-visual.tsx)

## Vidéo

Les projets vidéo utilisent un champ `embedUrl` dans [data/projects.ts](/Users/pascalmaraval/Documents/Site/data/projects.ts).

Vous pouvez y mettre :

- un embed YouTube
- un embed Vimeo
- plus tard, un lecteur local ou une intégration CMS

Le composant concerné est :

- [components/projects/project-video.tsx](/Users/pascalmaraval/Documents/Site/components/projects/project-video.tsx)

## Design system rapide

Le site repose sur :

- une base sombre maîtrisée pour les hero et sections premium
- une base ivoire claire pour la lisibilité éditoriale
- un accent brun chaud discret pour éviter un rendu trop froid
- une hiérarchie typo pensée pour un rendu corporate premium avec une nuance éditoriale

Les variables globales sont dans :

- [app/globals.css](/Users/pascalmaraval/Documents/Site/app/globals.css)

## Déploiement

### Vercel

Le projet est compatible immédiatement.

### Cloudflare Pages

Pour un déploiement Cloudflare :

1. poussez le repo sur GitHub
2. créez un projet sur Cloudflare Pages
3. connectez le dépôt
4. utilisez la commande de build :

```bash
npm run build
```

5. utilisez comme dossier de sortie l’adaptateur/configuration recommandée par votre setup Next.js Cloudflare du moment

Si vous souhaitez un déploiement Cloudflare plus avancé ensuite, vous pourrez ajouter :

- `@cloudflare/next-on-pages` ou la stratégie officielle recommandée à ce moment-là
- variables d’environnement
- analytics
- formulaire connecté à Supabase

## Extensions possibles

- remplacer les placeholders par de vrais assets image/vidéo
- ajouter un formulaire connecté à Supabase
- créer une mini interface admin
- ajouter des témoignages réels
- enrichir chaque projet avec plus de métriques et de livrables
- brancher une source CMS plus tard sans refondre la structure

## Vérification effectuée

Build validé localement avec :

```bash
npm run build
```
