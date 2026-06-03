"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { ArrowRight, Heart, Package, Truck, ExternalLink, Shirt } from "lucide-react"
import Link from "next/link"
import { SITE, ITEMS } from "@/lib/constants"

const donTypes = [
  {
    Icon: Heart,
    title: "Don financier",
    desc: "Soutenez notre action sociale via HelloAsso. Chaque euro compte pour assurer nos distributions.",
    cta: "Soutenez notre action sociale",
    href: SITE.helloasso,
    external: true,
    highlight: true,
  },
  {
    Icon: Package,
    title: "Don alimentaire",
    desc: "Déposez des denrées non-périssables, des produits d'hygiène ou des articles bébé directement au 31 rue du Bréteil le mercredi.",
    cta: "Voir ce dont nous avons besoin",
    href: "/activites",
    external: false,
    highlight: false,
  },
  {
    Icon: Shirt,
    title: "Don vestimentaire",
    desc: "Vêtements et chaussures propres et en bon état acceptés. Déposez-les au 31 rue du Bréteil le mercredi, ils seront redistribués à ceux qui en ont besoin.",
    cta: "Nous contacter",
    href: "/contact",
    external: false,
    highlight: false,
  },
  {
    Icon: Truck,
    title: "Devenir bénévole",
    desc: "Rejoignez notre équipe de bénévoles pour participer à la collecte, au transport des marchandises, au tri, à la préparation et à la distribution des colis.",
    cta: "Nous contacter",
    href: "/contact",
    external: false,
    highlight: false,
  },
]

export default function DonPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })
  const itemsRef = useRef<HTMLDivElement>(null)
  const itemsInView = useInView(itemsRef, { once: true, amount: 0.1 })

  return (
    <main className="bg-paper pt-14 md:pt-16">

      {/* ── Hero ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-sage paper-texture">
        <div className="max-w-[900px] mx-auto" ref={heroRef}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} className="mb-3">
            <AnimatedShinyText shimmerWidth={120} className="text-[11px] uppercase tracking-[0.35em] text-paper/60 via-white/90 font-semibold max-w-none mx-0">
              Agir avec nous
            </AnimatedShinyText>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={heroInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl sm:text-6xl md:text-7xl text-paper leading-[1.0] mb-6"
            >
              Faire un don.
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[15px] text-paper/70 leading-relaxed max-w-xl"
          >
            Votre soutien nous permet de distribuer 160 colis alimentaires
            chaque semaine à plus de 500 personnes. Chaque geste, petit ou grand,
            fait une vraie différence.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 text-[13px] text-paper/50"
          >
            Ils l'ont fait —{" "}
            <Link href="/temoignages" className="underline underline-offset-4 decoration-paper/30 hover:text-paper hover:decoration-paper transition-colors font-medium">
              lire leurs témoignages
            </Link>
          </motion.p>
        </div>
      </section>

      {/* ── Bandeau don financier ── */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-terracotta paper-texture">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl text-paper leading-tight mb-5">
              Soutenez notre action sociale.
            </h2>
            <p className="text-[14px] text-paper/80 leading-relaxed mb-8 max-w-lg mx-auto">
              Chaque don nous permet de continuer à distribuer 160 colis alimentaires
              chaque semaine à plus de 500 personnes en Gironde.
            </p>
            <motion.a
              href={SITE.helloasso}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-paper text-terracotta px-8 py-4 text-[13px] uppercase tracking-[0.14em] font-bold hover:bg-cream transition-colors"
            >
              Faire un don sur HelloAsso
              <ExternalLink size={14} strokeWidth={2.2} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── Les 3 façons d'aider ── */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-paper">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="font-display text-4xl md:text-5xl text-ink">
              Comment nous aider ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {donTypes.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative border p-7 shadow-[3px_5px_0_0_rgba(28,18,9,0.07)] ${
                  type.highlight
                    ? "bg-sage border-sage text-paper"
                    : "bg-white border-rule"
                }`}
              >
                {type.highlight && (
                  <span aria-hidden className="absolute -top-3 left-6 block h-6 w-14 bg-clay/60 rotate-[-2deg]" />
                )}
                <div className={`w-11 h-11 rounded-full flex items-center justify-center mb-5 ${
                  type.highlight
                    ? "bg-white/15 border border-white/20"
                    : "bg-teal/10 border border-teal/20"
                }`}>
                  <type.Icon size={18} strokeWidth={1.8} className={type.highlight ? "text-teal-soft" : "text-teal"} />
                </div>
                <h3 className={`font-display text-2xl mb-3 ${type.highlight ? "text-paper" : "text-ink"}`}>
                  {type.title}
                </h3>
                <p className={`text-[13px] leading-relaxed mb-6 ${type.highlight ? "text-paper/75" : "text-ink-soft"}`}>
                  {type.desc}
                </p>
                {type.external ? (
                  <a
                    href={type.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] font-bold text-terracotta-soft hover:text-paper transition-colors"
                  >
                    {type.cta} <ExternalLink size={11} />
                  </a>
                ) : (
                  <Link
                    href={type.href}
                    className={`inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] font-bold transition-colors ${
                      type.highlight ? "text-terracotta-soft hover:text-paper" : "text-terracotta hover:text-terracotta-soft"
                    }`}
                  >
                    {type.cta} <ArrowRight size={11} />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ce dont nous avons besoin ── */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-cream-soft" ref={itemsRef}>
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={itemsInView ? { opacity: 1, y: 0 } : {}}
            className="mb-10"
          >
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-2">
              Ce dont nous avons besoin
            </h2>
            <p className="text-[14px] text-ink-soft">
              Articles non-périssables acceptés en dépôt le mercredi.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-2.5">
            {ITEMS.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={itemsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="inline-flex items-center px-4 py-2 border border-rule bg-white text-[12px] font-semibold text-ink-soft uppercase tracking-[0.12em]"
              >
                {item}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={itemsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-10 p-6 border border-rule bg-white"
          >
            <p className="text-[13px] text-ink-soft leading-relaxed">
              <strong className="text-ink">Dépôt :</strong> 31 rue du Bréteil, 33320 Eysines —
              le mercredi de 11h à 17h.<br />Pour tout autre arrangement,
              appelez-nous au{" "}
              <a href={SITE.phoneHref} className="text-terracotta font-semibold hover:underline">
                {SITE.phone}
              </a>.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
