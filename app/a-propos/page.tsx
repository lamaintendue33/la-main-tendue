"use client"

import { motion, useInView, useScroll } from "framer-motion"
import { useRef } from "react"
import type React from "react"
import { TIMELINE } from "@/lib/constants"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

function TimelineItem({
  item,
  index,
  isLast,
}: {
  item: (typeof TIMELINE)[number]
  index: number
  isLast: boolean
}) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const isLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`relative w-full md:w-[calc(50%-2rem)] bg-white border border-rule p-6 shadow-[3px_5px_0_0_rgba(28,18,9,0.07)] ${isLeft ? "md:mr-8" : "md:ml-8"}`}
      >
        <span aria-hidden className="absolute -top-3 left-6 block h-6 w-14 bg-clay/55 rotate-[-2deg]" />
        <span className={`absolute top-0 bottom-0 w-1 bg-terracotta ${isLeft ? "right-0" : "left-0"}`} />
        <span className="inline-block font-display text-5xl text-terracotta/20 leading-none -mb-1 select-none">
          {item.year}
        </span>
        <h3 className="font-display text-2xl text-ink mt-1 mb-2">{item.title}</h3>
        <p className="text-[13px] text-ink-soft leading-relaxed">{item.desc}</p>
      </motion.div>

      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.2 }}
          className="w-4 h-4 rounded-full bg-terracotta border-2 border-paper shadow-md z-10"
        />
        {!isLast && <div className="w-px flex-1 bg-rule min-h-[60px]" />}
      </div>
    </div>
  )
}

function AnimatedTimelineLine({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"],
  })

  return (
    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 pointer-events-none">
      <div className="absolute inset-0 bg-sage/15" />
      <motion.div
        style={{ scaleY: scrollYProgress, originY: 0 }}
        className="absolute inset-0 bg-sage"
      />
    </div>
  )
}

export default function HistoirePage() {
  const heroRef     = useRef<HTMLDivElement>(null)
  const heroInView  = useInView(heroRef, { once: true })
  const timelineRef = useRef<HTMLDivElement>(null)

  return (
    <main className="bg-paper pt-14 md:pt-16">

      {/* ── Hero ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-sage paper-texture overflow-hidden">
        <div className="max-w-[900px] mx-auto" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            className="mb-3"
          >
            <AnimatedShinyText
              shimmerWidth={120}
              className="text-[11px] uppercase tracking-[0.35em] text-paper/60 via-white/90 font-semibold max-w-none mx-0"
            >
              Notre histoire
            </AnimatedShinyText>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={heroInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl sm:text-6xl md:text-7xl text-paper leading-[1.0] mb-6"
            >
              Plus de 30 ans<br />de solidarité.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[15px] text-paper/70 leading-relaxed max-w-xl"
          >
            Tout a commencé en 1992 avec une vieille AX, un garage et 8 familles.
            Aujourd'hui, La Main Tendue distribue 160 colis alimentaires chaque
            semaine à plus de 500 personnes sur la commune d'Eysines.
          </motion.p>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[860px] mx-auto relative" ref={timelineRef}>
          <AnimatedTimelineLine containerRef={timelineRef} />
          <div className="flex flex-col gap-10 md:gap-0 relative">
            {/* Ligne mobile — bleue et fine */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-sage/40 md:hidden" />
            {TIMELINE.map((item, i) => (
              <TimelineItem
                key={item.year}
                item={item}
                index={i}
                isLast={i === TIMELINE.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA → Vision & Valeurs ── */}
      <section className="py-16 px-4 md:px-8 bg-cream-soft text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-2xl md:text-3xl text-ink mb-3">
            Découvrez notre vision et nos valeurs
          </p>
          <p className="text-[14px] text-ink-soft mb-6 max-w-sm mx-auto">
            Les principes qui guident notre engagement au quotidien depuis 30 ans.
          </p>
          <Link
            href="/valeurs"
            className="inline-flex items-center gap-2 bg-sage text-paper px-8 py-3.5 text-[12px] uppercase tracking-[0.14em] font-bold hover:bg-sage/90 transition-colors"
          >
            Vision et valeurs
            <ArrowRight size={14} strokeWidth={2.2} />
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
