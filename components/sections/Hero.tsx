"use client"

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Heart } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { SITE } from "@/lib/constants"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"

/* ─── Verbes rotatifs ──────────────────────────────────────────── */
const VERBS = ["Nourrir", "Écouter", "Soutenir", "Partager", "Fédérer"]

/* ─── Stats barre du bas ───────────────────────────────────────── */
const STATS = [
  { value: "500+", label: "personnes / semaine" },
  { value: "160",  label: "colis / mercredi" },
  { value: "30",   label: "ans de solidarité" },
  { value: "30",   label: "bénévoles" },
]

/* ─── Titre mot par mot ────────────────────────────────────────── */
const TITLE_WORDS = ["La", "Main", "Tendue"]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  /* Parallax photo — la photo scroll 40% plus lentement que le contenu */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const rawY    = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const parallaxY = useSpring(rawY, { stiffness: 60, damping: 20 })

  /* Scale léger de la photo à l'entrée */
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.06, 1])

  /* Fondu de l'overlay en scrollant — la photo reste visible */
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.78, 0.92])
  const overlayBg = useMotionTemplate`rgba(26,58,92,${overlayOpacity})`

  /* Verbe rotatif */
  const [verbIdx, setVerbIdx] = useState(0)
  useEffect(() => {
    const id = setTimeout(() => setVerbIdx(i => (i + 1) % VERBS.length), 2400)
    return () => clearTimeout(id)
  }, [verbIdx])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col overflow-hidden bg-sage"
    >
      {/* ── Photo plein fond avec parallax ────────────────── */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: parallaxY, scale: imageScale }}
      >
        <Image
          src="/images/distribution/salle-distribution.jpg"
          alt="Salle de distribution de La Main Tendue — caisses bleues remplies de légumes frais"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* ── Overlay directionnel animé ─────────────────────── */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(105deg, rgba(26,58,92,0.97) 0%, rgba(26,58,92,0.82) 45%, rgba(26,58,92,0.28) 100%)`,
        }}
      />
      {/* Vignette bas pour les stats */}
      <div className="absolute inset-0 bg-gradient-to-t from-sage/95 via-transparent to-transparent" />
      {/* Grain texture */}
      <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none" />

      {/* ── Contenu principal ──────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 pt-24 pb-10 max-w-[1300px] mx-auto w-full">

        {/* Eyebrow animé — AnimatedShinyText 21st.dev */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <AnimatedShinyText
            shimmerWidth={220}
            className="text-[10px] sm:text-[11px] uppercase tracking-[0.38em] text-paper/65 via-white/90 font-semibold max-w-none mx-0"
          >
            Aide alimentaire · Eysines · Depuis 1992
          </AnimatedShinyText>
        </motion.div>

        {/* Titre massif — chaque mot entre par le bas */}
        <h1 className="font-display leading-[0.82] mb-5">
          {TITLE_WORDS.map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <motion.span
                className="block text-[5.5rem] sm:text-[7.5rem] md:text-[10rem] lg:text-[11.5rem] text-paper"
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + i * 0.14,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Verbe rotatif slot-machine */}
        <div
          className="relative h-[3rem] sm:h-[4rem] md:h-[5rem] overflow-hidden mb-8 md:mb-10"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="sr-only">{VERBS[verbIdx]}</span>
          {VERBS.map((verb, i) => (
            <motion.span
              key={verb}
              aria-hidden
              className="absolute left-0 font-display text-[2.4rem] sm:text-[3.2rem] md:text-[4rem] font-semibold leading-none text-terracotta"
              initial={{ opacity: 0, y: 70 }}
              animate={
                verbIdx === i
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: verbIdx > i ? -70 : 70 }
              }
              transition={{ type: "spring", stiffness: 75, damping: 14 }}
            >
              {verb}
            </motion.span>
          ))}
        </div>

        {/* Citation + CTAs */}
        <div className="max-w-lg md:max-w-xl">
          <motion.blockquote
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[1.15rem] sm:text-[1.3rem] md:text-[1.45rem] text-paper/75 leading-[1.38] italic mb-9"
          >
            "{SITE.quote}"
          </motion.blockquote>

          {/* Boutons avec hover magnétique */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <MagneticButton href="/don" variant="primary">
              <Heart size={13} strokeWidth={2.5} />
              Faire un don
            </MagneticButton>
            <MagneticButton href="/activites" variant="outline">
              Nos activités
              <ArrowRight size={13} strokeWidth={2.2} />
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* ── Barre de stats en bas ─────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.3 }}
        className="relative z-10 border-t border-paper/15 bg-sage/55 backdrop-blur-md"
      >
        <div className="max-w-[1300px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-paper/15">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 + i * 0.08 }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.06)" }}
              className="flex flex-col items-center justify-center py-4 md:py-5 px-3 text-center cursor-default transition-colors"
            >
              <motion.span
                className="font-display text-2xl sm:text-3xl md:text-4xl text-terracotta leading-none"
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                {stat.value}
              </motion.span>
              <span className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-paper/50 font-medium leading-snug">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

/* ─── Bouton avec effet magnétique au survol ───────────────────── */
function MagneticButton({
  href,
  variant,
  children,
}: {
  href: string
  variant: "primary" | "outline"
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useSpring(0, { stiffness: 200, damping: 20 })
  const y = useSpring(0, { stiffness: 200, damping: 20 })

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * 0.25)
    y.set((e.clientY - cy) * 0.25)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const base = "inline-flex items-center justify-center gap-2 px-7 py-4 text-[12px] sm:text-[13px] uppercase tracking-[0.14em] font-bold transition-colors w-full sm:w-auto whitespace-nowrap"
  const styles =
    variant === "primary"
      ? `${base} bg-terracotta text-paper hover:bg-terracotta-soft`
      : `${base} border border-paper/40 text-paper hover:border-paper hover:bg-paper/10`

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.96 }}
    >
      <Link href={href} className={styles}>
        {children}
      </Link>
    </motion.div>
  )
}
