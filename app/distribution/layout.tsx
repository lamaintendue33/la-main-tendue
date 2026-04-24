import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Distribution alimentaire",
  description:
    "Distribution hebdomadaire de colis alimentaires à Eysines — denrées de base, produits frais, hygiène et articles bébé pour plus de 400 personnes chaque semaine.",
  openGraph: {
    title: "Distribution alimentaire · La Main Tendue",
    description:
      "Distribution hebdomadaire de colis alimentaires à Eysines pour plus de 400 personnes.",
    images: [{ url: "/images/hero.jpeg", width: 1200, height: 630 }],
  },
}

export default function DistributionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
