import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notre mission",
  description:
    "Nourrir dignement, créer du lien, fédérer autour de la solidarité. Découvrez l'histoire et les engagements de La Main Tendue à Eysines depuis 1995.",
  openGraph: {
    title: "Notre mission · La Main Tendue",
    description:
      "Nourrir dignement, écouter, fédérer — l'histoire et les engagements de l'association depuis 1995.",
    images: [{ url: "/images/logo.png", width: 1200, height: 630 }],
  },
}

export default function MissionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
