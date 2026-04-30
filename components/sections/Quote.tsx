"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { SITE } from "@/lib/constants"

export default function Quote() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-paper overflow-hidden" ref={ref}>
      <div className="max-w-[860px] mx-auto relative">

        {/* Guillemet décoratif */}
        <motion.span
          aria-hidden
          initial={{ opacity: 0, scale: 0.6 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="block font-display text-[9rem] md:text-[12rem] leading-none text-terracotta/10 select-none -mb-12 md:-mb-16"
        >
          "
        </motion.span>

        {/* Citation */}
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative font-display text-[1.6rem] sm:text-[2rem] md:text-[2.4rem] text-ink leading-[1.25] text-center"
        >
          {SITE.quote}
        </motion.blockquote>

        {/* Trait sous la citation */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="mx-auto mt-8 h-px w-16 bg-terracotta origin-center"
        />

        {/* Source */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-4 text-center text-[11px] uppercase tracking-[0.28em] text-ink-soft font-semibold"
        >
          La Main Tendue — Eysines, depuis 1992
        </motion.p>

        {/* Scotch décoratif */}
        <span
          aria-hidden
          className="absolute -top-3 left-1/2 -translate-x-1/2 block h-6 w-20 bg-clay/50 rotate-[1deg]"
        />
      </div>
    </section>
  )
}
