import { SITE } from "@/lib/constants"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://la-main-tendue.vercel.app"

/**
 * Données structurées Schema.org pour Google.
 * Permet à Google d'afficher l'adresse, les horaires et le téléphone
 * directement dans les résultats de recherche (Knowledge Panel).
 */
export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["NGO", "LocalBusiness"],
    name: SITE.name,
    alternateName: SITE.fullName,
    description: `${SITE.slogan}. Association d'aide alimentaire et vestimentaire solidaire à Eysines (Gironde) depuis 1995. Distribution hebdomadaire de 160 colis alimentaires à plus de 500 personnes, portée par 30 bénévoles.`,
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo.png`,
    image: `${BASE_URL}/images/logo.png`,
    telephone: SITE.phone,
    email: SITE.email,
    foundingDate: "1995-01-01",
    address: {
      "@type": "PostalAddress",
      streetAddress: "31 rue du Bréteil",
      addressLocality: "Eysines",
      postalCode: "33320",
      addressRegion: "Nouvelle-Aquitaine",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.8771598,
      longitude: -0.6459198,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Wednesday"],
        opens: "11:00",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Wednesday"],
        opens: "13:30",
        closes: "17:00",
      },
    ],
    sameAs: [`https://lamaintendue33.fr`],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 44.8771598,
        longitude: -0.6459198,
      },
      geoRadius: "15000",
      name: "Eysines et bassin eysinais",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
