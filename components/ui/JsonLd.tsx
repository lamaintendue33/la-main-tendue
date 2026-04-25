import { SITE } from "@/lib/constants"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://lamaintendue.vercel.app"

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
    description: `${SITE.slogan}. Association d'aide alimentaire à Eysines (Gironde) depuis 1995. Distribution hebdomadaire de colis alimentaires à plus de 400 personnes, portée par 40 bénévoles.`,
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo.png`,
    image: `${BASE_URL}/images/logo.png`,
    telephone: SITE.phone,
    email: SITE.email,
    foundingDate: "1995-01-01",
    address: {
      "@type": "PostalAddress",
      streetAddress: "31 rue du Breteil",
      addressLocality: "Eysines",
      postalCode: "33320",
      addressRegion: "Nouvelle-Aquitaine",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.8862,
      longitude: -0.6498,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Thursday", "Saturday"],
        opens: "09:00",
        closes: "12:00",
      },
    ],
    sameAs: [SITE.facebook, SITE.blog],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 44.8862,
        longitude: -0.6498,
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
