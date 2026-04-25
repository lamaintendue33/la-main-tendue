"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { STATS } from "@/lib/constants"

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-20%" })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = 16
    const increment = (target / duration) * step
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count.toLocaleString("fr-FR")}</span>
}

export default function Stats() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-sage">
      <div className="max-w-[1100px] mx-auto">

        {/* Titre section */}
        <div className="mb-14 text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-paper/50 font-semibold mb-3">
            Notre impact
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-paper leading-[1.0]">
            Trente ans aux côtés d'Eysines.
          </h2>
        </div>

        {/* Grille stats style cahier */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-paper/15 border border-paper/15">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center py-10 px-4 text-center border-b md:border-b-0 border-paper/15 last:border-b-0 [&:nth-child(2)]:border-b md:[&:nth-child(2)]:border-b-0"
            >
              {/* Grand chiffre en Caveat */}
              <span className="font-display text-6xl md:text-7xl text-terracotta leading-none tabular-nums">
                <Counter target={s.value} />
              </span>

              {/* Unité */}
              <span className="mt-2 font-display text-2xl text-paper/60">
                {s.unit}
              </span>

              {/* Séparateur */}
              <span className="block w-8 h-px bg-terracotta/50 my-4" />

              {/* Label */}
              <span className="text-[12px] uppercase tracking-[0.2em] text-paper/55 font-medium leading-snug">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Signature */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 text-center font-display text-2xl text-paper/40 italic"
        >
          Chaque geste compte. Chaque colis partagé tisse un peu plus le lien.
        </motion.p>
      </div>
    </section>
  )
}
