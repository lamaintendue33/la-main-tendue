import type { Metadata } from "next"
import { Inter, Lora } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/ui/Navbar"
import Footer from "@/components/ui/Footer"
import PageTransition from "@/components/ui/PageTransition"
import CookieBanner from "@/components/ui/CookieBanner"
import ScrollProgress from "@/components/ui/ScrollProgress"
import JsonLd from "@/components/ui/JsonLd"
import { SITE } from "@/lib/constants"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://lamaintendue33.fr"
  ),
  title: {
    default: "La Main Tendue — Aide alimentaire et vestiaire à Eysines",
    template: `%s · La Main Tendue`,
  },
  description: `Association d'aide alimentaire et vestiaire à Eysines (33320), en Gironde. Distribution de colis à plus de 500 personnes chaque semaine.`,
  keywords: [
    "aide alimentaire", "Eysines", "Gironde", "33320", "colis alimentaire",
    "association", "bénévolat", "solidarité", "Banque Alimentaire",
    "La Main Tendue", "précarité alimentaire", "distribution alimentaire",
    "Bordeaux Métropole",
  ],
  openGraph: {
    title: SITE.fullName,
    description: `${SITE.slogan} — Aide alimentaire associative à Eysines depuis 1995.`,
    url: "/",
    siteName: SITE.name,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "La Main Tendue — Aide alimentaire et vestimentaire solidaire",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.fullName,
    description: `${SITE.slogan} — Aide alimentaire associative à Eysines depuis 1995.`,
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.png?v=3",
  },
  verification: {
    google: "gxyBtrmvuQKMzWRwfxAJxZBF_jefUOcYTYwoIEJ4_N4",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${lora.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-paper text-ink">
        <JsonLd />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
