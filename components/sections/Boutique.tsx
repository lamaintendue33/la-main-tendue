"use client"

import { motion } from "framer-motion"
import { Clock, ArrowRight } from "lucide-react"
import { ITEMS, HOURS_DISTRIBUTION } from "@/lib/constants"
import Link from "next/link"

export default function BoutiqueSection() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-paper">
      <div className="max-w-[1300px] mx-auto">

        <div className="relative grid grid-cols-1 lg:grid-cols-2 border border-rule overflow-hidden shadow-[6px_8px_0_0_rgba(28,18,9,0.07)]">

          {/* Gauche — image placeholder */}
          <motion.div
            className="relative min-h-[280px] sm:min-h-[340px] bg-stone/20 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span aria-hidden className="pointer-events-none absolute inset-0 opacity-30 notebook-lines" />
            <motion.div
              className="relative z-10"
              initial={{ rotate: -2, scale: 0.92 }}
              whileInView={{ rotate: 2, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.9, delay: 0.2, type: "spring", stiffness: 100, damping: 14 }}
            >
              <span aria-hidden className="absolute -top-3.5 left-1/2 -translate-x-1/2 block h-6 w-20 bg-clay/55 rotate-[-1deg]" />
              <div className="bg-white p-3 pb-10 w-56 shadow-[4px_8px_30px_rgba(28,18,9,0.15)]">
                <div className="w-full aspect-square bg-stone/30 flex flex-col items-center justify-center gap-2">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" className="text-ink-soft/40">
                    <rect x="4" y="8" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="22" cy="22" r="7" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span className="text-[11px] text-ink-soft/50 font-medium uppercase tracking-wider">Photo à venir</span>
                </div>
                <p className="mt-3 text-center font-display text-xl text-ink/60">
                  La distribution ✦
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Droite — contenu */}
          <motion.div
            className="bg-paper p-8 md:p-12 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] tracking-[0.35em] uppercase text-ink-soft font-semibold mb-4">
              La Distribution
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display text-4xl md:text-5xl text-ink leading-[1.05]"
            >
              Notre distribution<br />hebdomadaire.
            </motion.h2>

            <p className="mt-5 text-[14px] text-ink-soft leading-relaxed max-w-md">
              Chaque semaine, plus de 400 personnes reçoivent un colis alimentaire équilibré.
              L'accueil se fait dans la dignité, au 31 rue du Breteil à Eysines.
            </p>

            {/* Horaires */}
            <motion.div
              className="mt-7 border border-rule p-5 max-w-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-ink-soft font-semibold mb-3">
                <Clock size={12} strokeWidth={1.8} />
                Horaires distribution
              </div>
              {HOURS_DISTRIBUTION.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.06 }}
                  className="flex justify-between items-baseline text-[13px] py-1.5 border-b border-rule last:border-0"
                >
                  <span className="text-ink-soft">{h.days}</span>
                  <span className={`tabular-nums font-medium ${h.hours === "Fermé" ? "text-terracotta italic" : "text-ink"}`}>
                    {h.hours}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href="/distribution"
                className="mt-7 inline-flex items-center gap-2 border border-ink text-ink px-6 py-3 text-[12px] uppercase tracking-[0.2em] font-bold hover:bg-ink hover:text-paper transition-colors self-start"
              >
                Voir la distribution
                <ArrowRight size={13} strokeWidth={2.2} />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Chips */}
        <div className="mt-16 text-center">
          <motion.div
            className="inline-flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <span aria-hidden className="h-px w-10 bg-terracotta/50" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-ink-soft font-semibold">
              Ce que contiennent nos colis
            </span>
            <span aria-hidden className="h-px w-10 bg-terracotta/50" />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {ITEMS.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.85, y: 8 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 text-[13px] border border-rule bg-white text-ink-soft hover:border-terracotta hover:text-terracotta transition-colors cursor-default"
              >
                <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-terracotta/40" />
                {item}
              </motion.span>
            ))}
          </div>

          <p className="mt-6 text-[13px] text-ink-soft italic">
            … et d'autres denrées selon les collectes et partenariats.
          </p>
        </div>
      </div>
    </section>
  )
}
