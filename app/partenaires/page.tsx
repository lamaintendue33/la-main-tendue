"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { PARTNERS, SITE } from "@/lib/constants"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { ArrowRight, ArrowLeft, Building2, ShoppingCart, Truck, HandHeart } from "lucide-react"
import Link from "next/link"

const partnerIcons = [Building2, Truck, ShoppingCart, HandHeart, HandHeart, HandHeart, ShoppingCart]

export default function PartenairesPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })
  const gridRef = useRef<HTMLDivElement>(null)
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 })

  return (
    <main className="bg-paper pt-14 md:pt-16">

      {/* ── Hero ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-sage paper-texture">
        <div className="max-w-[900px] mx-auto" ref={heroRef}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} className="mb-3">
            <AnimatedShinyText shimmerWidth={120} className="text-[11px] uppercase tracking-[0.35em] text-paper/60 via-white/90 font-semibold max-w-none mx-0">
              Ils nous soutiennent
            </AnimatedShinyText>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={heroInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl sm:text-6xl md:text-7xl text-paper leading-[1.0] mb-6"
            >
              Nos partenaires.
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[15px] text-paper/70 leading-relaxed max-w-xl"
          >
            La Main Tendue n'agit pas seule. Depuis plus de 30 ans, des partenaires
            fidèles nous fournissent denrées, matériel et soutien logistique pour
            que chaque colis puisse être distribué chaque mercredi.
          </motion.p>
        </div>
      </section>

      {/* ── Grille partenaires ── */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-paper" ref={gridRef}>
        <div className="max-w-[1000px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[15px] md:text-[16px] text-ink-soft leading-relaxed max-w-[700px] mb-14"
          >
            Implantée à Eysines depuis 1992, La Main Tendue s'appuie sur un
            réseau local solide pour mener sa mission d'aide alimentaire et
            vestimentaire en Gironde. Collectivités, grandes surfaces,
            associations anti-gaspi : chaque partenaire contribue à rendre
            possible la distribution hebdomadaire de colis alimentaires à plus
            de 500 personnes chaque mercredi.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PARTNERS.map((partner, i) => {
              const Icon = partnerIcons[i] ?? Building2
              return (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 28 }}
                  animate={gridInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, boxShadow: "4px 10px_0_0_rgba(184,58,42,0.10)" }}
                  className="relative bg-white border border-rule p-7 shadow-[3px_5px_0_0_rgba(28,18,9,0.07)]"
                >
                  {/* Trait latéral coloré */}
                  <span className="absolute top-0 left-0 bottom-0 w-1 bg-terracotta" />

                  {/* Scotch */}
                  <span aria-hidden className="absolute -top-3 left-6 block h-5 w-14 bg-clay/50 rotate-[-1.5deg]" />

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center shrink-0">
                      <Icon size={16} strokeWidth={1.8} className="text-teal" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-display text-xl text-ink leading-tight">{partner.name}</h3>
                        {partner.since !== "—" && (
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-terracotta shrink-0">
                            depuis {partner.since}
                          </span>
                        )}
                      </div>
                      <p className="text-[13px] text-ink-soft leading-relaxed">{partner.role}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Devenir partenaire ── */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-cream-soft">
        <div className="max-w-[700px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-display text-3xl md:text-4xl text-ink mb-4">
              Vous souhaitez nous soutenir ?
            </p>
            <p className="text-[14px] text-ink-soft leading-relaxed mb-8 max-w-md mx-auto">
              Entreprise, commerce, association — contactez-nous pour discuter
              d'un partenariat adapté à vos possibilités.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-terracotta text-paper px-8 py-3.5 text-[12px] uppercase tracking-[0.14em] font-bold hover:bg-terracotta-soft transition-colors"
            >
              Nous contacter
              <ArrowRight size={14} strokeWidth={2.2} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Navigation ── */}
      <section className="py-12 px-4 md:px-8 bg-paper">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[1100px] mx-auto flex items-center justify-between"
        >
          <Link
            href="/activites"
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] font-semibold text-ink-soft hover:text-terracotta transition-colors"
          >
            <ArrowLeft size={13} strokeWidth={2.2} />
            Nos activités
          </Link>
          <span />
        </motion.div>
      </section>
    </main>
  )
}
