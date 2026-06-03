import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notre histoire",
  description:
    "Depuis 1992, La Main Tendue aide les familles d'Eysines. Découvrez l'histoire de l'association, de ses débuts à aujourd'hui, portée par 30 bénévoles.",
}

export default function AProposLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
