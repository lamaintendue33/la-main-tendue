import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nos activités",
  description:
    "Distribution de colis alimentaires, vestiaire et hygiène : les activités de La Main Tendue à Eysines, chaque mercredi de 11h à 17h pour 500 bénéficiaires.",
}

export default function ActivitesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
