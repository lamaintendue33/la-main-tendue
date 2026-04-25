"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { HeartHandshake, Users, Sparkles } from "lucide-react"
import { MISSIONS } from "@/lib/constants"

const icons = { HeartHandshake, Users, Sparkles } as const
const tapeAngles = ["rotate-[-3deg]", "rotate-[2deg]", "rotate-[-1.5deg]"]
const slideX = [-30, 0, 30] // alternating slide direction

function MissionCard({ mission, index }: { mission: (typeof MISSIONS)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.12 })
  const Icon = icons[mission.iconKey as keyof typeof icons]

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 36, x: slideX[index] }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, boxShadow: "6px 14px 0 0 rgba(184,58,42,0.13)" }}
      whileTap={{ scale: 0.98 }}
      className="relative bg-white border border-rule p-7 md:p-9 shadow-[4px_6px_0_0_rgba(28,18,9,0.07)] transition-shadow duration-300 cursor-default"
    >
      {/* Scotch */}
      <motion.span
        aria-hidden
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.14 + 0.3 }}
        className={`absolute -top-3.5 left-8 block h-6 w-20 bg-clay/55 origin-left ${tapeAngles[index]}`}
      />

      {/* Trait gauche */}
      <motion.span
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.14 + 0.2, ease: "easeOut" }}
        className="absolute top-0 left-0 bottom-0 w-1 bg-terracotta origin-top"
      />

      {/* Icône */}
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={inView ? { scale: 1, rotate: 0 } : {}}
        transition={{ type: "spring", stiffness: 220, damping: 14, delay: index * 0.14 + 0.35 }}
        whileHover={{ rotate: 12, scale: 1.1 }}
        className="w-12 h-12 rounded-full bg-terracotta/10 border border-terracotta/20 flex items-center justify-center mb-5"
      >
        <Icon size={20} strokeWidth={1.8} className="text-terracotta" />
      </motion.div>

      {/* Numéro fantôme */}
      <div className="font-display text-6xl text-ink/8 leading-none mb-1 select-none">
        {mission.num}
      </div>

      <h3 className="font-display text-3xl text-ink leading-tight mb-3">{mission.title}</h3>

      <motion.span
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.14 + 0.5 }}
        className="block h-px w-10 bg-terracotta mb-4 origin-left"
      />

      <p className="text-[14px] text-ink-soft leading-relaxed">{mission.description}</p>
    </motion.article>
  )
}

export default function Missions() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-paper">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-14" ref={ref}>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[11px] uppercase tracking-[0.35em] text-ink-soft/70 font-semibold mb-3"
          >
            Notre mission
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl text-ink leading-[1.0]"
            >
              Nourrir, écouter,<br />fédérer.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 text-[15px] text-ink-soft leading-relaxed max-w-xl"
          >
            Depuis 30 ans, nous tendons la main à celles et ceux que la précarité alimentaire frappe.
            Trois engagements guident nos gestes du quotidien.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {MISSIONS.map((m, i) => (
            <MissionCard key={m.title} mission={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
