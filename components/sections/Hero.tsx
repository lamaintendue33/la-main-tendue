"use client"

import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Heart } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { SITE } from "@/lib/constants"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"

// Chargement client-side uniquement (WebGL ne tourne pas côté serveur)
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

function StarDoodle({ className }: { className?: string }) {
  return (
    <motion.svg
      aria-hidden
      width="32" height="32" viewBox="0 0 32 32" fill="none"
      className={className}
      initial={{ opacity: 0, scale: 0, rotate: -30 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 200 }}
    >
      <path
        d="M16 3l2.8 8.6H28l-7.4 5.4 2.8 8.6L16 20.2l-7.4 5.4 2.8-8.6L4 11.6h9.2z"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
      />
    </motion.svg>
  )
}

const words = ["La", "Main", "Tendue"]

const rotatingVerbs = ["Nourrir", "Écouter", "Soutenir", "Partager", "Fédérer"]

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  const [verbIndex, setVerbIndex] = useState(0)
  useEffect(() => {
    const id = setTimeout(() => {
      setVerbIndex((i) => (i + 1) % rotatingVerbs.length)
    }, 2200)
    return () => clearTimeout(id)
  }, [verbIndex])

  return (
    <section className="pt-14 md:pt-16 pb-4 px-4 md:px-8 bg-paper">
      <div className="max-w-[1300px] mx-auto" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-[55%_45%] border border-rule overflow-hidden shadow-[6px_8px_0_0_rgba(28,18,9,0.08)]">

          {/* Gauche — Texte */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative bg-sage text-paper flex flex-col justify-center px-7 sm:px-12 md:px-16 py-10 md:py-16 overflow-hidden paper-texture"
          >
            {/* Shader mesh gradient — s'affiche par dessus bg-sage (fallback SSR) */}
            <ShaderBackground />

            {/* Lignes cahier — texture par dessus le shader */}
            <span aria-hidden className="pointer-events-none absolute inset-0 opacity-10 notebook-lines" />

            {/* Scotch */}
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

            {/* Titre — mot par mot */}
            <h1 className="relative font-display leading-[0.92]">
              {words.map((word, i) => (
                <span key={word} className="block overflow-hidden">
                  <motion.span
                    className="block text-[3.25rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[5.5rem] text-paper"
                    initial={{ y: "110%", opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.7, delay: 0.35 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Verbe rotatif — slot machine vertical */}
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

            {/* Trait gribouillé */}
            <ScribbleLine className="relative mt-2 text-terracotta/90" />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="relative mt-6 text-[14px] sm:text-[15px] text-paper/80 leading-relaxed max-w-sm"
            >
              Depuis 1992, nous distribuons chaque semaine des colis alimentaires
              à plus de{" "}
              <strong className="text-paper font-semibold">500 personnes</strong>{" "}
              grâce à une trentaine de bénévoles engagés.
            </motion.p>

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

            {/* PulsingBorder décoratif */}
            <ShaderPulse
              className="absolute bottom-5 right-6 opacity-80"
              style={{ width: "52px", height: "52px", borderRadius: "50%" }}
            />
          </motion.div>

          {/* Droite — Citation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative bg-cream-soft hidden sm:flex items-center justify-center px-10 md:px-14 py-12 md:py-16 overflow-hidden min-h-[300px]"
          >
            {/* Fond ligné */}
            <span aria-hidden className="pointer-events-none absolute inset-0 opacity-35 notebook-lines" />

            {/* Scotch en haut */}
            <motion.span
              aria-hidden
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="absolute top-6 left-1/2 -translate-x-1/2 block h-7 w-24 bg-clay/55 rotate-[1deg] origin-left"
            />

            {/* Contenu de la note */}
            <div className="relative z-10 max-w-xs md:max-w-sm">
              {/* Grand guillemet décoratif */}
              <motion.span
                aria-hidden
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                className="block font-display text-[6rem] leading-none text-terracotta/20 select-none -mb-6 -ml-2"
              >
                "
              </motion.span>

              {/* Citation */}
              <motion.blockquote
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[1.35rem] md:text-[1.5rem] text-ink leading-[1.35]"
              >
                {SITE.quote}
              </motion.blockquote>

              {/* Trait gribouillé */}
              <motion.svg
                aria-hidden
                width="60" height="8" viewBox="0 0 60 8" fill="none"
                className="mt-5 text-terracotta/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                <path d="M2 5 Q15 2 30 5 Q45 8 58 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              </motion.svg>

              {/* Attribution */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="mt-3 text-[10px] uppercase tracking-[0.25em] text-ink-soft/70 font-semibold"
              >
                La Main Tendue · Eysines
              </motion.p>
            </div>

            {/* Étoile déco coin */}
            <StarDoodle className="absolute bottom-6 right-6 text-ink/15" />
          </motion.div>
        </div>

        {/* Stats rapides */}
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
          ].map((stat, i) => (
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
