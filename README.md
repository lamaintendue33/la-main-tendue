# La Main Tendue

Site vitrine de **La Main Tendue**, association d'aide alimentaire à Eysines (Gironde) depuis 1995.

> Tendre la main, partager l'essentiel.

## Stack

- Next.js 15 (App Router)
- React 19, TypeScript strict
- Tailwind CSS v4
- Framer Motion

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Structure

- `app/` — routes App Router (`/`, `/distribution`, `/aider`, `/mission`, `/contact`)
- `components/sections/` — sections riches de la home
- `components/ui/` — composants réutilisables (Navbar, Footer, animations…)
- `lib/constants.ts` — source de vérité pour les infos de l'asso
- `public/images/` — assets (logo, photos)

## Déploiement

Prévu pour Vercel. Variable d'environnement utile :

- `NEXT_PUBLIC_BASE_URL` (ex : `https://lamaintendue.vercel.app`)
