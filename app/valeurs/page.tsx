"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { VALUES } from "@/lib/constants"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { Heart, Scale, HandHeart, ArrowLeft } from "lucide-react"
import Link from "next/link"

const valueIcons = { RESPECT: Scale, ÉQUITÉ: Heart, PARTAGE: HandHeart }

export default function ValeursPage() {
  const heroRef    = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })
  const visionRef  = useRef<HTMLDivElement>(null)
  const visionInView = useInView(visionRef, { once: true, amount: 0.2 })
  const valuesRef  = useRef<HTMLDivElement>(null)
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.1 })

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
              Notre vision
            </AnimatedShinyText>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={heroInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl sm:text-6xl md:text-7xl text-paper leading-[1.0] mb-6"
            >
              Agir avec cœur,<br />servir avec respect.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[15px] text-paper/70 leading-relaxed max-w-xl"
          >
            Portés par des valeurs d'engagement, de solidarité et de compassion,
            nous accompagnons les personnes fragilisées avec bienveillance.
          </motion.p>
        </div>
      </section>

      {/* ── Vision ── */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-cream-soft">
        <div className="max-w-[800px] mx-auto" ref={visionRef}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            className="text-[11px] uppercase tracking-[0.35em] text-ink-soft font-semibold mb-6"
          >
            Notre vision
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[15px] md:text-[16px] text-ink-soft leading-relaxed mb-5"
          >
            Portés par des valeurs d'engagement, de solidarité et de compassion,
            nous souhaitons venir en aide aux personnes fragilisées en répondant
            à leurs besoins au travers d'une aide alimentaire, d'un vestiaire et
            d'un accompagnement personnalisé.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[15px] md:text-[16px] text-ink-soft leading-relaxed"
          >
            Nous souhaitons ainsi rompre l'isolement, créer du lien social et
            promouvoir le plein épanouissement de la personne en lui redonnant
            sa dignité. La Main Tendue est une association fondée par l'Église
            Protestante Évangélique d'Eysines, née du désir de tendre la main
            aux plus fragiles de notre société.
          </motion.p>
        </div>
      </section>

      {/* ── Valeurs ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-sage paper-texture">
        <div className="max-w-[1000px] mx-auto" ref={valuesRef}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            className="mb-12 text-center"
          >
            <AnimatedShinyText
              shimmerWidth={100}
              className="text-[11px] uppercase tracking-[0.35em] text-paper/60 via-white/90 font-semibold max-w-none mx-0"
            >
              Nos valeurs
            </AnimatedShinyText>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {VALUES.map((val, i) => {
              const Icon = valueIcons[val.key as keyof typeof valueIcons] ?? Heart
              return (
                <motion.div
                  key={val.key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                  className="bg-white/10 border border-paper/20 p-7 text-paper"
                >
                  <div className="w-10 h-10 rounded-full bg-teal/20 border border-teal/30 flex items-center justify-center mb-5">
                    <Icon size={18} strokeWidth={1.8} className="text-teal-soft" />
                  </div>
                  <h3 className="font-display text-2xl text-terracotta mb-3">{val.key}</h3>
                  <p className="text-[13px] text-paper/70 leading-relaxed">{val.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Retour ── */}
      <section className="py-12 px-4 md:px-8 bg-paper text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/a-propos"
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] font-semibold text-ink-soft hover:text-terracotta transition-colors"
          >
            <ArrowLeft size={13} strokeWidth={2.2} />
            Notre histoire
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
