"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { HeartHandshake, Users, Sparkles } from "lucide-react"
import { MISSIONS } from "@/lib/constants"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"

const icons = { HeartHandshake, Users, Sparkles } as const

// Couleurs post-it légèrement différenciées dans la palette kraft
const postItColors = ["#faf7f0", "#f5efe0", "#ede5ce"]
// Rotations permanentes — chaque note légèrement de travers
const finalRotations = [-2.8, 1.6, -1.0]
// Scotch : angle + position unique par note
const tapeProps = [
  { angle: "rotate-[-5deg]", x: "left-8" },
  { angle: "rotate-[4deg]",  x: "left-1/2 -translate-x-1/2" },
  { angle: "rotate-[-3deg]", x: "right-10" },
]

function PostIt({
  mission,
  index,
}: {
  mission: (typeof MISSIONS)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const Icon = icons[mission.iconKey as keyof typeof icons]

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: -80, rotate: finalRotations[index] - 4 }}
      animate={inView ? { opacity: 1, y: 0, rotate: finalRotations[index] } : {}}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 13,
        delay: index * 0.18,
      }}
      whileHover={{
        rotate: 0,
        y: -10,
        scale: 1.03,
        zIndex: 10,
        boxShadow: "8px 20px 48px rgba(28,18,9,0.22)",
        transition: { type: "spring", stiffness: 260, damping: 20 },
      }}
      style={{
        backgroundColor: postItColors[index],
        position: "relative",
      }}
      className="relative p-7 pb-10 shadow-[4px_10px_28px_rgba(28,18,9,0.13)] cursor-default"
    >
      {/* Scotch tape */}
      <motion.span
        aria-hidden
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.35, delay: index * 0.18 + 0.25 }}
        className={`absolute -top-4 ${tapeProps[index].x} block h-7 w-20 bg-clay/60 origin-center ${tapeProps[index].angle}`}
        style={{ backdropFilter: "blur(1px)" }}
      />

      {/* Lede — petite étiquette catégorie */}
      <span className="inline-block mb-4 text-[9px] uppercase tracking-[0.28em] font-semibold text-ink-soft/70 border border-rule px-2 py-0.5">
        {mission.lede}
      </span>

      {/* Icône */}
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={inView ? { scale: 1, rotate: 0 } : {}}
        transition={{ type: "spring", stiffness: 220, damping: 14, delay: index * 0.18 + 0.35 }}
        className="w-11 h-11 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center mb-5"
      >
        <Icon size={20} strokeWidth={1.8} className="text-teal" />
      </motion.div>

      {/* Numéro fantôme */}
      <div className="font-display text-7xl text-ink/[0.07] leading-none select-none -mb-2">
        {mission.num}
      </div>

      {/* Titre */}
      <h3 className="font-display text-[2rem] text-ink leading-tight mb-2">
        {mission.title}
      </h3>

      {/* Trait gribouillé manuscrit */}
      <svg
        aria-hidden
        width="56"
        height="8"
        viewBox="0 0 56 8"
        fill="none"
        className="mb-4 text-terracotta/50"
      >
        <path
          d="M2 5 Q14 2 28 5 Q42 8 54 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Description */}
      <p className="text-[13px] sm:text-[14px] text-ink/65 leading-relaxed">
        {mission.description}
      </p>

      {/* Coin plié en bas à droite */}
      <span
        aria-hidden
        className="absolute bottom-0 right-0 w-8 h-8"
        style={{
          background: `linear-gradient(225deg, rgba(180,160,120,0.18) 50%, transparent 50%)`,
        }}
      />
    </motion.article>
  )
}

export default function Missions() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-cream-soft">
      {/* Texture fond liège subtil */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #6b4e2a 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="max-w-[1100px] mx-auto">
        {/* En-tête */}
        <div className="mb-20 md:mb-24 text-center" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block mb-3"
          >
            <AnimatedShinyText
              shimmerWidth={90}
              className="text-[11px] uppercase tracking-[0.35em] text-ink-soft via-ink/80 font-semibold max-w-none mx-0"
            >
              Notre mission
            </AnimatedShinyText>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl text-ink leading-[1.0]"
            >
              Nourrir, écouter,
              <br />
              fédérer.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 text-[15px] text-ink-soft leading-relaxed max-w-xl mx-auto"
          >
            Depuis 30 ans, nous tendons la main à celles et ceux que la
            précarité alimentaire frappe. Trois engagements guident nos gestes
            du quotidien.
          </motion.p>
        </div>

        {/* Post-its — décalés verticalement sur desktop pour l'effet tableau */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8 md:items-start">
          {MISSIONS.map((m, i) => (
            <div
              key={m.title}
              className={
                i === 1 ? "md:mt-10" : i === 2 ? "md:mt-4" : ""
              }
            >
              <PostIt mission={m} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
