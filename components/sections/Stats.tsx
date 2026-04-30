"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { STATS } from "@/lib/constants"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { TextRevealByWord } from "@/components/ui/text-reveal"

export default function Stats() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-sage">
      <div className="max-w-[1100px] mx-auto">

        {/* En-tête */}
        <div className="mb-14 text-center" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[11px] uppercase tracking-[0.35em] text-paper/75 font-semibold mb-3"
          >
            Notre impact
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl text-paper leading-[1.0]"
            >
              Trente ans aux côtés d'Eysines.
            </motion.h2>
          </div>
        </div>

        {/* Grille stats — AnimatedCounter 21st.dev */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-paper/15 border border-paper/15">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.65, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              className="flex flex-col items-center justify-center py-10 px-4 text-center border-b md:border-b-0 border-paper/15 [&:nth-child(2)]:border-b md:[&:nth-child(2)]:border-b-0 last:border-b-0 cursor-default"
            >
              {/* Compteur slot-machine 21st.dev */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="flex items-end gap-0.5 text-terracotta leading-none"
              >
                <AnimatedCounter
                  value={s.value}
                  className="text-terracotta"
                  fontSize={52}
                />
                {s.value >= 100 && (
                  <span className="font-display text-4xl text-terracotta/70 pb-0.5">+</span>
                )}
              </motion.div>

              <span className="mt-1 font-display text-xl sm:text-2xl text-paper/75">
                {s.unit}
              </span>

              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.14 + 0.4 }}
                className="block w-8 h-px bg-terracotta/50 my-3 origin-center"
              />

              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-paper/70 font-medium leading-snug">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Citation TextReveal 21st.dev — se révèle mot par mot au scroll */}
        <div className="mt-14">
          <TextRevealByWord
            text="Chaque geste compte. Chaque colis partagé tisse un peu plus le lien entre ceux qui donnent et ceux qui reçoivent."
            className="text-center"
            wordClassName="font-display text-xl sm:text-2xl text-paper/80 italic"
          />
        </div>

      </div>
    </section>
  )
}
