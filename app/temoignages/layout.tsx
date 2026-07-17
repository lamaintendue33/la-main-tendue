import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Témoignages",
  description:
    "Ce que disent bénéficiaires et bénévoles de La Main Tendue à Eysines. Des témoignages vrais sur l'aide alimentaire et vestimentaire solidaire en Gironde.",
  alternates: { canonical: "/temoignages" },
}

export default function TemoignagesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
