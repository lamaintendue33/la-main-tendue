"use client"

import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Heart, Clock, MapPin, Phone, Mail } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { SITE } from "@/lib/constants"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"

const ShaderBackground = dynamic(
  () => import("@/components/ui/hero").then((m) => m.ShaderBackground),
  { ssr: false }
)
const ShaderPulse = dynamic(
  () => import("@/components/ui/hero").then((m) => m.ShaderPulse),
  { ssr: false }
)

function TapeStrip({ className }: { className?: string }) {
  return (
    <motion.span
      aria-hidden
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
      className={`absolute block h-7 bg-clay/55 origin-left ${className ?? ""}`}
    />
  )
}

function ScribbleLine({ className }: { className?: string }) {
  return (
    <svg aria-hidden width="90" height="14" viewBox="0 0 90 14" fill="none" className={className}>
      <motion.path
        d="M2 9 Q22 3 45 9 Q68 15 88 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
      />
    </svg>
  )
}

const rotatingVerbs = ["Nourrir", "Écouter", "Soutenir", "Partager", "Fédérer"]

const INFO_ROWS = [
  {
    Icon: Clock,
    label: "Distribution",
    lines: ["Mercredi 11h00 – 12h00", "Mercredi 13h30 – 17h00"],
  },
  {
    Icon: MapPin,
    label: "Adresse",
    lines: [SITE.address],
  },
  {
    Icon: Phone,
    label: "Téléphone",
    lines: [SITE.phone],
    href: SITE.phoneHref,
  },
  {
    Icon: Mail,
    label: "Email",
    lines: [SITE.email],
    href: SITE.emailHref,
  },
]

export default function Hero() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  const [verbIndex, setVerbIndex] = useState(0)
  useEffect(() => {
    const id = setTimeout(() => setVerbIndex((i) => (i + 1) % rotatingVerbs.length), 2200)
    return () => clearTimeout(id)
  }, [verbIndex])

  return (
    <section className="pt-14 md:pt-16 pb-4 px-4 md:px-8 bg-paper">
      <div className="max-w-[1300px] mx-auto" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-[55%_45%] border border-rule overflow-hidden shadow-[6px_8px_0_0_rgba(28,18,9,0.08)]">

          {/* ── Gauche — Poétique ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative bg-sage text-paper flex flex-col justify-center px-7 sm:px-12 md:px-16 py-10 md:py-16 overflow-hidden paper-texture"
          >
            <ShaderBackground />
            <span aria-hidden className="pointer-events-none absolute inset-0 opacity-10 notebook-lines" />
            <TapeStrip className="top-5 -left-2 w-24 rotate-[-8deg]" />

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mb-5"
            >
              <AnimatedShinyText
                shimmerWidth={160}
                className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-paper/80 via-white/90 font-semibold max-w-none mx-0"
              >
                Aide alimentaire · Eysines · Depuis 1992
              </AnimatedShinyText>
            </motion.div>

            {/* Titre — une seule ligne */}
            <div className="overflow-hidden">
              <motion.h1
                className="relative font-display text-[2.8rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.6rem] text-paper leading-none whitespace-nowrap"
                initial={{ y: "110%", opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                La Main Tendue
              </motion.h1>
            </div>

            {/* Verbe rotatif */}
            <div className="relative mt-3 h-[3.2rem] overflow-hidden" aria-live="polite" aria-atomic="true">
              <span className="sr-only">{rotatingVerbs[verbIndex]}</span>
              {rotatingVerbs.map((verb, i) => (
                <motion.span
                  key={verb}
                  aria-hidden
                  className="absolute left-0 font-display text-[2.6rem] sm:text-[3.2rem] font-semibold leading-none text-terracotta"
                  initial={{ opacity: 0, y: 60 }}
                  animate={
                    verbIndex === i
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: verbIndex > i ? -60 : 60 }
                  }
                  transition={{ type: "spring", stiffness: 80, damping: 16 }}
                >
                  {verb}
                </motion.span>
              ))}
            </div>

            <ScribbleLine className="relative mt-2 text-terracotta/90" />

            {/* Citation poétique — remplace la description factuelle */}
            <motion.blockquote
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="relative mt-6 font-display text-[1.05rem] sm:text-[1.15rem] text-paper/80 leading-[1.45] italic max-w-sm"
            >
              "{SITE.quote}"
            </motion.blockquote>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.95 }}
              className="relative mt-8 flex flex-col sm:flex-row gap-3"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/don"
                  className="inline-flex items-center justify-center gap-2 bg-terracotta text-paper px-6 py-3.5 text-[12px] sm:text-[13px] uppercase tracking-[0.14em] font-bold hover:bg-terracotta-soft transition-colors w-full sm:w-auto whitespace-nowrap"
                >
                  <Heart size={13} strokeWidth={2.5} />
                  Faire un don
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/activites"
                  className="inline-flex items-center justify-center gap-2 border border-paper/40 text-paper px-6 py-3.5 text-[12px] sm:text-[13px] uppercase tracking-[0.2em] font-bold hover:border-paper hover:bg-paper/10 transition-colors w-full sm:w-auto"
                >
                  Nos activités
                  <ArrowRight size={13} strokeWidth={2.2} />
                </Link>
              </motion.div>
            </motion.div>

            <ShaderPulse
              className="absolute bottom-5 right-6 opacity-80"
              style={{ width: "52px", height: "52px", borderRadius: "50%" }}
            />
          </motion.div>

          {/* ── Droite — Informations pratiques ───────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative bg-cream-soft hidden sm:flex flex-col justify-center px-10 md:px-12 py-10 md:py-14 overflow-hidden min-h-[320px]"
          >
            {/* Lignes de cahier */}
            <span aria-hidden className="pointer-events-none absolute inset-0 opacity-30 notebook-lines" />

            {/* Scotch en haut */}
            <motion.span
              aria-hidden
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="absolute top-5 left-1/2 -translate-x-1/2 block h-6 w-20 bg-clay/50 rotate-[1.5deg] origin-left"
            />

            {/* Titre section */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative text-[10px] uppercase tracking-[0.3em] text-ink-soft/70 font-semibold mb-5"
            >
              Venir nous voir
            </motion.p>

            {/* Lignes d'info */}
            <div className="relative flex flex-col gap-4">
              {INFO_ROWS.map(({ Icon, label, lines, href }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  {/* Icône */}
                  <div className="shrink-0 w-8 h-8 bg-sage/10 border border-sage/20 flex items-center justify-center mt-0.5">
                    <Icon size={14} strokeWidth={1.8} className="text-sage" />
                  </div>

                  {/* Texte */}
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-ink-soft/60 font-semibold mb-0.5">
                      {label}
                    </p>
                    {lines.map((line) =>
                      href ? (
                        <a
                          key={line}
                          href={href}
                          className="block text-[13px] text-ink font-medium hover:text-terracotta transition-colors"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={line} className="text-[13px] text-ink font-medium leading-snug">
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Séparateur + note accès */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="relative mt-6 pt-5 border-t border-rule/60"
            >
              <p className="text-[11px] text-ink-soft/60 leading-relaxed">
                🚌 Bus 2, 38, 76 · 🚃 Tram · Parking devant l'association
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Stats rapides ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="grid grid-cols-3 border-x border-b border-rule bg-cream"
        >
          {[
            { value: "500+", label: "personnes / semaine" },
            { value: "30 ans", label: "d'engagement" },
            { value: "160", label: "colis / mercredi" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center justify-center py-4 sm:py-5 px-2 text-center border-r border-rule last:border-r-0"
              whileHover={{ backgroundColor: "rgba(237,229,206,0.6)" }}
              transition={{ duration: 0.2 }}
            >
              <span className="font-display text-2xl sm:text-3xl md:text-4xl text-terracotta leading-none">
                {stat.value}
              </span>
              <span className="mt-1 text-[9px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.18em] text-ink-soft font-medium leading-snug">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
