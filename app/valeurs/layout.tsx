import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vision et valeurs",
  description:
    "Respect, équité, partage : les valeurs qui guident La Main Tendue à Eysines. Une association solidaire au service de 500 personnes chaque semaine en Gironde.",
}

export default function ValeursLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
