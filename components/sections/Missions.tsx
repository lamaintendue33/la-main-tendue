"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { HeartHandshake, Users, Sparkles } from "lucide-react"
import { MISSIONS } from "@/lib/constants"

const icons = { HeartHandshake, Users, Sparkles } as const

const tapeAngles = ["rotate-[-3deg]", "rotate-[2deg]", "rotate-[-1.5deg]"]

function MissionCard({
  mission,
  index,
}: {
  mission: (typeof MISSIONS)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10%" })
  const Icon = icons[mission.iconKey as keyof typeof icons]

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-white border border-rule p-7 md:p-9 shadow-[4px_6px_0_0_rgba(28,18,9,0.07)] group hover:-translate-y-1 hover:shadow-[4px_10px_0_0_rgba(184,58,42,0.12)] transition-all duration-300"
    >
      {/* Scotch en haut de carte */}
      <span
        aria-hidden
        className={`absolute -top-3.5 left-8 block h-6 w-20 bg-clay/55 ${tapeAngles[index]}`}
      />

      {/* Trait gauche terracotta */}
      <span className="absolute top-0 left-0 bottom-0 w-1 bg-terracotta" />

      {/* Icône */}
      <div className="w-12 h-12 rounded-full bg-terracotta/10 border border-terracotta/20 flex items-center justify-center mb-5 group-hover:bg-terracotta group-hover:border-terracotta transition-colors duration-300">
        <Icon
          size={20}
          strokeWidth={1.8}
          className="text-terracotta group-hover:text-white transition-colors duration-300"
        />
      </div>

      {/* Numéro fantôme */}
      <div className="font-display text-6xl text-ink/8 leading-none mb-1 select-none">
        {mission.num}
      </div>

      <h3 className="font-display text-3xl text-ink leading-tight mb-3">
        {mission.title}
      </h3>

      <span className="block h-px w-10 bg-terracotta mb-4" />

      <p className="text-[14px] text-ink-soft leading-relaxed">
        {mission.description}
      </p>
    </motion.article>
  )
}

export default function Missions() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-paper">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-14">
          <p className="text-[11px] uppercase tracking-[0.35em] text-ink-soft/70 font-semibold mb-3">
            Notre mission
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-ink leading-[1.0]">
            Nourrir, écouter,<br />fédérer.
          </h2>
          <p className="mt-5 text-[15px] text-ink-soft leading-relaxed max-w-xl">
            Depuis 30 ans, nous tendons la main à celles et ceux que la précarité alimentaire frappe.
            Trois engagements guident nos gestes du quotidien.
          </p>
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
