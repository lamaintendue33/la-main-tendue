"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SITE } from "@/lib/constants"

function TapeStrip({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`absolute block h-7 bg-clay/55 ${className ?? ""}`}
    />
  )
}

function StarDoodle({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className={className}
    >
      <path
        d="M16 3l2.8 8.6H28l-7.4 5.4 2.8 8.6L16 20.2l-7.4 5.4 2.8-8.6L4 11.6h9.2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ScribbleLine({ className }: { className?: string }) {
  return (
    <svg aria-hidden width="80" height="12" viewBox="0 0 80 12" fill="none" className={className}>
      <path d="M2 8 Q20 2 40 8 Q60 14 78 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="pt-20 md:pt-24 pb-10 px-4 md:px-8 bg-paper">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[55%_45%] border border-rule overflow-hidden shadow-[6px_8px_0_0_rgba(28,18,9,0.08)]">

          {/* Gauche — Texte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative bg-sage text-paper flex flex-col justify-center px-8 sm:px-12 md:px-16 py-16 md:py-24 overflow-hidden paper-texture"
          >
            {/* Lignes de carnet derrière */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-10 notebook-lines"
            />

            {/* Scotch coin haut-gauche */}
            <TapeStrip className="top-6 -left-2 w-24 rotate-[-8deg]" />

            {/* Eyebrow */}
            <p className="relative text-[11px] uppercase tracking-[0.35em] text-paper/55 font-semibold mb-6">
              Aide alimentaire · Eysines · Depuis 1995
            </p>

            {/* Titre manuscrit */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative font-display text-[4rem] sm:text-[5rem] md:text-[5.5rem] leading-[0.95] text-paper"
            >
              La Main<br />Tendue
            </motion.h1>

            {/* Trait gribouillé sous le titre */}
            <ScribbleLine className="relative mt-3 text-terracotta/80" />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="relative mt-7 text-[15px] text-paper/80 leading-relaxed max-w-sm"
            >
              {SITE.slogan}. Depuis 1995, nous distribuons chaque semaine des
              colis alimentaires à plus de{" "}
              <strong className="text-paper font-semibold">400 personnes</strong>{" "}
              grâce à 40 bénévoles engagés.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="relative mt-10 flex flex-wrap gap-3"
            >
              <Link
                href="/aider"
                className="inline-flex items-center gap-2 bg-terracotta text-paper px-7 py-3 text-[13px] uppercase tracking-[0.2em] font-bold hover:bg-terracotta-soft transition-colors"
              >
                Nous rejoindre
                <ArrowRight size={14} strokeWidth={2.2} />
              </Link>
              <Link
                href="/distribution"
                className="inline-flex items-center gap-2 border border-paper/40 text-paper px-7 py-3 text-[13px] uppercase tracking-[0.2em] font-bold hover:border-paper hover:bg-paper/10 transition-colors"
              >
                La distribution
              </Link>
            </motion.div>

            {/* Doodle étoile */}
            <StarDoodle className="absolute bottom-8 right-8 text-paper/15" />
          </motion.div>

          {/* Droite — Photo placeholder style polaroid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative bg-cream-soft flex items-center justify-center px-8 py-16 md:py-20 overflow-hidden min-h-[380px]"
          >
            {/* Fond ligné cahier */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40 notebook-lines"
            />

            {/* Polaroid principal */}
            <div className="relative z-10">
              <div className="relative rotate-[-2.5deg] shadow-[6px_10px_40px_rgba(28,18,9,0.2)]">
                {/* Scotch du polaroid */}
                <TapeStrip className="-top-3.5 left-1/2 -translate-x-1/2 w-20 rotate-[1deg] z-20" />

                {/* Carte polaroid */}
                <div className="bg-white p-3 pb-10 w-56 sm:w-64 border border-stone/40">
                  {/* Zone photo */}
                  <div className="w-full aspect-square bg-stone/30 flex flex-col items-center justify-center gap-2">
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      className="text-ink-soft/40"
                    >
                      <rect x="4" y="8" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="22" cy="22" r="7" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="34" cy="13" r="2" fill="currentColor" opacity="0.5" />
                    </svg>
                    <span className="text-[11px] text-ink-soft/50 font-medium uppercase tracking-wider">
                      Photo à venir
                    </span>
                  </div>
                  {/* Légende polaroid */}
                  <p className="mt-3 text-center font-display text-xl text-ink/70">
                    Nos bénévoles ✦
                  </p>
                </div>
              </div>

              {/* Petit polaroid en arrière-plan décalé */}
              <div className="absolute -bottom-4 -right-8 rotate-[5deg] shadow-md z-0">
                <div className="bg-white p-2 pb-6 w-32 border border-stone/30 opacity-70">
                  <div className="w-full aspect-square bg-stone/20" />
                </div>
              </div>
            </div>

            {/* Doodles */}
            <StarDoodle className="absolute top-6 right-6 text-ink/20" />
            <StarDoodle className="absolute bottom-10 left-6 text-terracotta/35 scale-75" />
          </motion.div>
        </div>

        {/* Bandeau stats rapides sous le hero */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="grid grid-cols-3 border-x border-b border-rule bg-cream"
        >
          {[
            { value: "400+", label: "personnes aidées / semaine" },
            { value: "30 ans", label: "d'engagement local" },
            { value: "40", label: "bénévoles actifs" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-5 px-4 text-center border-r border-rule last:border-r-0"
            >
              <span className="font-display text-3xl md:text-4xl text-terracotta">
                {stat.value}
              </span>
              <span className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-ink-soft font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
