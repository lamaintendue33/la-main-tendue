import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez La Main Tendue à Eysines — téléphone, email, formulaire, accès et horaires. Nous répondons rapidement à vos questions.",
  openGraph: {
    title: "Contact · La Main Tendue",
    description:
      "Contactez La Main Tendue à Eysines — téléphone, email, horaires et accès.",
    images: [{ url: "/images/logo.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/contact" },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
