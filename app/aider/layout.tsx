import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nous aider",
  description:
    "Trois façons de soutenir La Main Tendue à Eysines : dons alimentaires et de produits d'hygiène, bénévolat, adhésion. Chaque geste compte.",
  openGraph: {
    title: "Nous aider · La Main Tendue",
    description:
      "Dons, bénévolat, adhésion — rejoignez l'aventure de La Main Tendue à Eysines.",
    images: [{ url: "/images/hero.jpeg", width: 1200, height: 630 }],
  },
}

export default function AiderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
