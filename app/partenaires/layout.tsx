import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nos partenaires",
  description:
    "Banque Alimentaire, Mairie d'Eysines, Leclerc, Le Chaînon Manquant… Découvrez les partenaires qui rendent possible la mission de La Main Tendue en Gironde.",
  alternates: { canonical: "/partenaires" },
}

export default function PartenairesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
