"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { STATS } from "@/lib/constants"

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0 })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = 16
    const increment = (target / duration) * step
    const timer = setInterval(() => {
      start += increment
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, step)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count.toLocaleString("fr-FR")}</span>
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-sage">
      <div className="max-w-[1100px] mx-auto">

        <div className="mb-14 text-center" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[11px] uppercase tracking-[0.35em] text-paper/50 font-semibold mb-3"
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

        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-paper/15 border border-paper/15">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              className="flex flex-col items-center justify-center py-10 px-3 text-center border-b md:border-b-0 border-paper/15 [&:nth-child(2)]:border-b md:[&:nth-child(2)]:border-b-0 last:border-b-0 cursor-default"
            >
              <motion.span
                className="font-display text-5xl sm:text-6xl md:text-7xl text-terracotta leading-none tabular-nums"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Counter target={s.value} />
              </motion.span>
              <span className="mt-1 font-display text-xl sm:text-2xl text-paper/55">{s.unit}</span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.12 + 0.4 }}
                className="block w-8 h-px bg-terracotta/50 my-3 origin-center"
              />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-paper/50 font-medium leading-snug">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 text-center font-display text-xl sm:text-2xl text-paper/35 italic"
        >
          Chaque geste compte. Chaque colis partagé tisse un peu plus le lien.
        </motion.p>
      </div>
    </section>
  )
}
