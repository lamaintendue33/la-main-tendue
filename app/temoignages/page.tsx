"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { Heart, Users, Building2, Quote } from "lucide-react"

const categories = [
  {
    key: "benevoles",
    label: "Bénévoles",
    Icon: Heart,
    desc: "Celles et ceux qui donnent de leur temps chaque semaine.",
    testimonials: [
      { initials: "M.L.", role: "Bénévole depuis 8 ans", quote: "Témoignage à venir — nous collectons actuellement les paroles de nos bénévoles." },
      { initials: "P.R.", role: "Bénévole depuis 3 ans", quote: "Témoignage à venir — nous collectons actuellement les paroles de nos bénévoles." },
    ],
  },
  {
    key: "beneficiaires",
    label: "Bénéficiaires",
    Icon: Users,
    desc: "Les familles et personnes que nous accompagnons chaque semaine.",
    testimonials: [
      { initials: "A.K.", role: "Bénéficiaire", quote: "Témoignage à venir — nous respectons l'anonymat de nos bénéficiaires." },
      { initials: "F.D.", role: "Bénéficiaire", quote: "Témoignage à venir — nous respectons l'anonymat de nos bénéficiaires." },
    ],
  },
  {
    key: "partenaires",
    label: "Partenaires",
    Icon: Building2,
    desc: "Les organisations qui nous font confiance depuis des années.",
    testimonials: [
      { initials: "B.A.", role: "Banque Alimentaire de Bordeaux", quote: "Témoignage à venir — nos partenaires témoigneront prochainement." },
    ],
  },
]

const rotations = [-1.5, 1.2, -0.8]

export default function TemoignagesPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <main className="bg-paper pt-14 md:pt-16">

      {/* ── Hero ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-sage paper-texture">
        <div className="max-w-[900px] mx-auto" ref={heroRef}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} className="mb-3">
            <AnimatedShinyText shimmerWidth={130} className="text-[11px] uppercase tracking-[0.35em] text-paper/60 via-white/90 font-semibold max-w-none mx-0">
              Ils témoignent
            </AnimatedShinyText>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={heroInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl sm:text-6xl md:text-7xl text-paper leading-[1.0] mb-6"
            >
              Que dit-on<br />de nous ?
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[15px] text-paper/70 leading-relaxed max-w-xl"
          >
            Bénévoles, bénéficiaires, partenaires — ils partagent leur expérience
            avec La Main Tendue. Ces témoignages sont la plus belle récompense
            de notre engagement.
          </motion.p>
        </div>
      </section>

      {/* ── Sections témoignages ── */}
      {categories.map((cat, catIdx) => {
        const Icon = cat.Icon
        return (
          <section
            key={cat.key}
            className={`py-20 md:py-24 px-4 md:px-8 ${catIdx % 2 === 0 ? "bg-paper" : "bg-cream-soft"}`}
          >
            <div className="max-w-[1000px] mx-auto">
              {/* En-tête catégorie */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-12"
              >
                <div className="w-12 h-12 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center">
                  <Icon size={20} strokeWidth={1.8} className="text-teal" />
                </div>
                <div>
                  <h2 className="font-display text-3xl text-ink">{cat.label}</h2>
                  <p className="text-[13px] text-ink-soft">{cat.desc}</p>
                </div>
              </motion.div>

              {/* Cartes témoignages — style post-it */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {cat.testimonials.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30, rotate: rotations[i % rotations.length] - 2 }}
                    whileInView={{ opacity: 1, y: 0, rotate: rotations[i % rotations.length] }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ type: "spring", stiffness: 90, damping: 14, delay: i * 0.15 }}
                    whileHover={{ rotate: 0, scale: 1.02, zIndex: 10 }}
                    className="relative bg-white p-7 pb-9 shadow-[4px_8px_24px_rgba(28,18,9,0.11)]"
                  >
                    {/* Scotch */}
                    <span aria-hidden className="absolute -top-3.5 left-8 block h-6 w-16 bg-clay/55 rotate-[-2deg]" />

                    {/* Icône citation */}
                    <Quote size={28} strokeWidth={1.3} className="text-terracotta/25 mb-4" />

                    {/* Texte */}
                    <p className="font-display text-xl text-ink/80 leading-relaxed mb-6 italic">
                      "{t.quote}"
                    </p>

                    {/* Séparateur */}
                    <div className="h-px w-10 bg-terracotta mb-4" />

                    {/* Identité */}
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-sage/10 border border-sage/20 flex items-center justify-center">
                        <span className="text-[11px] font-bold text-sage">{t.initials}</span>
                      </div>
                      <span className="text-[12px] text-ink-soft font-semibold">{t.role}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* ── Appel à témoigner ── */}
      <section className="py-16 px-4 md:px-8 bg-sage paper-texture text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-3xl md:text-4xl text-paper mb-4">
            Vous souhaitez témoigner ?
          </p>
          <p className="text-[14px] text-paper/70 mb-8 max-w-sm mx-auto">
            Votre parole compte. Contactez-nous pour partager votre expérience
            avec La Main Tendue.
          </p>
          <a
            href="mailto:lamaintendue33@gmail.com"
            className="inline-flex items-center gap-2 bg-terracotta text-paper px-8 py-3.5 text-[12px] uppercase tracking-[0.14em] font-bold hover:bg-terracotta-soft transition-colors"
          >
            Nous écrire
          </a>
        </motion.div>
      </section>
    </main>
  )
}
