import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Faire un don",
  description:
    "Soutenez La Main Tendue à Eysines : don financier, alimentaire, vestimentaire ou bénévolat. Chaque geste aide 500 personnes chaque semaine en Gironde.",
}

export default function DonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
