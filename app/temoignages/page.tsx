"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { Quote, Star } from "lucide-react"

const GOOGLE_REVIEWS = [
  {
    name: "Jessica Lecuyer",
    initials: "J.L.",
    date: "il y a 3 ans",
    quote: "Une grande qualité de produits, un régal ! Merci sincèrement, vous êtes les meilleurs et une chaleur humaine inégalable.",
    rating: 5,
  },
  {
    name: "Laetitia Rossi",
    initials: "L.R.",
    date: "il y a 3 ans",
    quote: "Accueil et bénévoles très gentils, colis très correct. Vestiaire et vente de produits d'hygiène à petits prix. Bus 2, 38, 76 et tram pour s'y rendre, parking devant l'association.",
    rating: 5,
  },
  {
    name: "Malo Malaury",
    initials: "M.M.",
    date: "il y a 4 ans",
    quote: "J'ai un grand respect pour toute l'équipe. Ils me permettent d'offrir un équilibre alimentaire à mes enfants.",
    rating: 5,
  },
  {
    name: "Karen Khachatryan",
    initials: "K.K.",
    date: "il y a 4 ans",
    quote: "Très bon accueil, très gentil personnel. Une aide qui soulage vraiment nos difficultés financières.",
    rating: 5,
  },
  {
    name: "Hyacinthe Brandao",
    initials: "H.B.",
    date: "il y a un an",
    quote: "Des personnes bienveillantes qui accueillent avec respect. Toujours un petit mot gentil.",
    rating: 5,
  },
  {
    name: "François Roux",
    initials: "F.R.",
    date: "il y a 6 mois",
    quote: "Je conseille vivement cette association, engagée au service des personnes dans le besoin.",
    rating: 5,
  },
]

const rotations = [-1.5, 1.2, -0.8, 1.6, -1.0, 0.8]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} étoiles sur 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={13}
          strokeWidth={1.5}
          className={n <= rating ? "fill-terracotta text-terracotta" : "text-ink/20"}
        />
      ))}
    </div>
  )
}

function GoogleBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-[0.18em] font-semibold text-ink-soft/50 border border-rule px-2 py-0.5">
      <svg width="10" height="10" viewBox="0 0 24 24" aria-hidden>
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      Avis Google
    </span>
  )
}

export default function TemoignagesPage() {
  const heroRef    = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <main className="bg-paper pt-14 md:pt-16">

      {/* ── Hero ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-sage paper-texture">
        <div className="max-w-[900px] mx-auto" ref={heroRef}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} className="mb-3">
            <AnimatedShinyText shimmerWidth={130} className="text-[11px] uppercase tracking-[0.35em] text-paper/60 via-white/90 font-semibold max-w-none mx-0">
              Ils témoignent
            </AnimatedShinyText>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={heroInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl sm:text-6xl md:text-7xl text-paper leading-[1.0] mb-6"
            >
              Que dit-on<br />de nous ?
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-[15px] text-paper/70 leading-relaxed max-w-xl mb-4">
              Ce que nos bénéficiaires et visiteurs disent de nous sur Google Maps.
            </p>
            {/* Note globale */}
            <div className="inline-flex items-center gap-3 bg-white/10 border border-paper/20 px-4 py-2">
              <StarRating rating={5} />
              <span className="font-display text-xl text-terracotta font-semibold">5.0</span>
              <span className="text-[11px] text-paper/50 uppercase tracking-[0.15em]">· {GOOGLE_REVIEWS.length} avis</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Grille des avis ── */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-paper">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {GOOGLE_REVIEWS.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 40, rotate: rotations[i] - 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: rotations[i] }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ type: "spring", stiffness: 85, damping: 13, delay: i * 0.08 }}
                whileHover={{ rotate: 0, scale: 1.025, zIndex: 10 }}
                className="relative bg-white p-6 pb-8 shadow-[4px_8px_28px_rgba(28,18,9,0.11)] cursor-default"
              >
                {/* Scotch */}
                <span aria-hidden className="absolute -top-3 left-6 block h-6 w-14 bg-clay/50 rotate-[-2deg]" />

                {/* Étoiles + badge */}
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={review.rating} />
                  <GoogleBadge />
                </div>

                {/* Guillemet déco */}
                <Quote size={22} strokeWidth={1.3} className="text-terracotta/25 mb-3" />

                {/* Texte */}
                <p className="font-display text-[1rem] sm:text-[1.05rem] text-ink/80 leading-relaxed mb-5 italic">
                  "{review.quote}"
                </p>

                {/* Séparateur */}
                <div className="h-px w-8 bg-terracotta mb-4" />

                {/* Identité */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-sage/10 border border-sage/20 flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold text-sage">{review.initials}</span>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-ink">{review.name}</p>
                    <p className="text-[10px] text-ink-soft/60">{review.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Appel à témoigner ── */}
      <section className="py-16 px-4 md:px-8 bg-sage paper-texture text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-3xl md:text-4xl text-paper mb-4">
            Vous souhaitez témoigner ?
          </p>
          <p className="text-[14px] text-paper/70 mb-8 max-w-sm mx-auto">
            Votre parole compte. Contactez-nous pour partager votre expérience
            avec La Main Tendue.
          </p>
          <a
            href="mailto:lamaintendue33@gmail.com"
            className="inline-flex items-center gap-2 bg-terracotta text-paper px-8 py-3.5 text-[12px] uppercase tracking-[0.14em] font-bold hover:bg-terracotta-soft transition-colors"
          >
            Nous écrire
          </a>
        </motion.div>
      </section>

      {/* ── JSON-LD AggregateRating ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NGO",
            "name": "La Main Tendue",
            "description": "Association d'aide alimentaire et vestimentaire solidaire à Eysines (Gironde).",
            "url": "https://la-main-tendue.vercel.app",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": 5,
              "bestRating": 5,
              "worstRating": 1,
              "reviewCount": GOOGLE_REVIEWS.length,
            },
          }),
        }}
      />
    </main>
  )
}
