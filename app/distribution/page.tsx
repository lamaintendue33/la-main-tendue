"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Package,
  Wheat,
  Snowflake,
  Baby,
  SprayCan,
  Coffee,
  Clock,
  MapPin,
  Phone,
} from "lucide-react"
import { HOURS_DISTRIBUTION, SITE } from "@/lib/constants"
import ShineSweep from "@/components/ui/ShineSweep"

type Category = {
  Icon: typeof Package
  num: string
  label: string
  desc: string
  stock: string
  tone: "sage" | "paper" | "cream" | "terracotta"
  size: "xl" | "lg" | "md"
}

const categories: Category[] = [
  {
    Icon: Package,
    num: "01",
    label: "Colis hebdo",
    desc: "Un colis personnalisé selon la composition de chaque foyer, remis dans la dignité chaque semaine.",
    stock: "400+ bénéficiaires",
    tone: "sage",
    size: "xl",
  },
  {
    Icon: Wheat,
    num: "02",
    label: "Denrées de base",
    desc: "Pâtes, riz, conserves, huile, sucre, farine, lait longue conservation.",
    stock: "Socle nutritionnel",
    tone: "cream",
    size: "lg",
  },
  {
    Icon: Snowflake,
    num: "03",
    label: "Frais & surgelé",
    desc: "Produits laitiers, viande, légumes frais selon les arrivages.",
    stock: "Chaîne du froid",
    tone: "paper",
    size: "md",
  },
  {
    Icon: Baby,
    num: "04",
    label: "Produits bébé",
    desc: "Lait infantile, petits pots, couches, soins adaptés aux tout-petits.",
    stock: "Selon besoins",
    tone: "paper",
    size: "md",
  },
  {
    Icon: SprayCan,
    num: "05",
    label: "Hygiène & entretien",
    desc: "Savon, dentifrice, lessive, produits ménagers du quotidien.",
    stock: "Collectes régulières",
    tone: "terracotta",
    size: "lg",
  },
  {
    Icon: Coffee,
    num: "06",
    label: "Moments partagés",
    desc: "Café, thé, biscuits, chocolat — un peu de douceur dans la semaine.",
    stock: "Petits plaisirs",
    tone: "cream",
    size: "lg",
  },
]

const toneStyles: Record<Category["tone"], { bg: string; text: string; num: string; iconBg: string; iconColor: string; accent: string }> = {
  sage: {
    bg: "bg-sage paper-texture",
    text: "text-paper",
    num: "text-paper/15",
    iconBg: "bg-terracotta",
    iconColor: "text-paper",
    accent: "text-terracotta-soft",
  },
  paper: {
    bg: "bg-paper",
    text: "text-ink",
    num: "text-sage/10",
    iconBg: "bg-sage",
    iconColor: "text-paper",
    accent: "text-terracotta",
  },
  cream: {
    bg: "bg-cream-soft",
    text: "text-ink",
    num: "text-sage/15",
    iconBg: "bg-sage",
    iconColor: "text-paper",
    accent: "text-terracotta",
  },
  terracotta: {
    bg: "bg-terracotta paper-texture",
    text: "text-paper",
    num: "text-paper/15",
    iconBg: "bg-paper",
    iconColor: "text-terracotta",
    accent: "text-paper",
  },
}

const sizeClasses: Record<Category["size"], string> = {
  xl: "md:col-span-2 md:row-span-2 rounded-tl-[80px] rounded-br-[80px] min-h-[380px]",
  lg: "md:col-span-2 rounded-tl-[60px] rounded-br-[60px] min-h-[220px]",
  md: "md:col-span-1 rounded-tl-[40px] rounded-br-[40px] min-h-[220px]",
}

export default function DistributionPage() {
  return (
    <>
      {/* Hero de page */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-10 px-4 md:px-8 bg-paper overflow-x-clip">
        <div className="max-w-[1300px] mx-auto">
          <div className="spotlight relative bg-sage paper-texture border-2 border-ink/10 p-8 sm:p-10 md:p-16 text-center rounded-tl-[60px] sm:rounded-tl-[100px] rounded-br-[60px] sm:rounded-br-[100px] overflow-hidden">
            <ShineSweep />
            <div className="relative z-10">
              <div className="text-[11px] tracking-[0.3em] uppercase text-paper/80 font-semibold">
                La Distribution
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-4 font-display font-medium text-4xl md:text-6xl text-paper leading-[1.05]"
              >
                Notre distribution
                <br />
                hebdomadaire.
              </motion.h1>
              <p className="mt-6 max-w-xl mx-auto text-paper/85 text-[15px] leading-relaxed">
                Chaque mardi, jeudi et samedi matin, plus de 400 personnes
                reçoivent un colis composé avec soin. Un accueil chaleureux,
                toujours dans le respect et la dignité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bannière photo à venir */}
      <section className="px-4 md:px-8 bg-paper">
        <div className="max-w-[1300px] mx-auto">
          <div className="relative aspect-[16/6] border border-rule bg-cream-soft flex items-center justify-center notebook-lines">
            <div className="text-center z-10">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto mb-3 text-ink-soft/30">
                <rect x="4" y="8" width="40" height="32" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="37" cy="14" r="2.5" fill="currentColor" opacity="0.5"/>
              </svg>
              <p className="font-display text-2xl text-ink-soft/40">Photos à venir</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catégories — bento grid asymétrique */}
      <section className="relative py-24 md:py-32 px-4 md:px-8 bg-paper overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-16 -right-16 font-display font-bold text-[14rem] md:text-[22rem] text-sage/[0.03] leading-none select-none">
          06
        </div>

        <div className="relative max-w-[1200px] mx-auto">
          <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-4"
              >
                <span aria-hidden className="h-px w-12 bg-terracotta" />
                <span className="text-[11px] tracking-[0.3em] uppercase text-sage-deep font-semibold">
                  Ce que nous distribuons
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display font-medium text-4xl md:text-6xl text-sage-deep leading-[1]"
              >
                Six catégories,
                <br />
                <span className="italic text-terracotta">un même soin.</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="max-w-sm text-[14px] text-ink-soft leading-relaxed md:text-right"
            >
              Des colis équilibrés, adaptés à chaque famille, complétés selon les arrivages et les partenariats locaux.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 auto-rows-fr">
            {categories.map((cat, i) => {
              const t = toneStyles[cat.tone]
              const isXL = cat.size === "xl"
              return (
                <motion.article
                  key={cat.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  className={`spotlight group relative border-2 border-ink/10 hover:border-terracotta p-6 md:p-8 cursor-default overflow-hidden transition-[border-color,box-shadow] duration-500 hover:shadow-[0_20px_40px_-15px_rgba(239,95,23,0.3)] ${sizeClasses[cat.size]} ${t.bg} ${t.text}`}
                >
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute font-display font-bold leading-none select-none transition-all duration-700 group-hover:scale-110 ${t.num} ${
                      isXL
                        ? "text-[14rem] md:text-[20rem] -bottom-12 -right-8"
                        : "text-[10rem] -bottom-8 -right-4"
                    }`}
                  >
                    {cat.num}
                  </span>

                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-paper/25 to-transparent skew-x-[-18deg] group-hover:left-[150%] transition-[left] duration-[1400ms] ease-out"
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-5">
                      <span
                        className={`text-[10px] tracking-[0.3em] uppercase font-bold ${t.accent}`}
                      >
                        Catégorie · {cat.num}
                      </span>
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.12 }}
                        transition={{ type: "spring", stiffness: 260, damping: 16 }}
                        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm ${t.iconBg}`}
                      >
                        <cat.Icon size={20} strokeWidth={1.6} className={t.iconColor} />
                      </motion.div>
                    </div>

                    <h3
                      className={`font-display font-semibold leading-tight mb-3 ${
                        isXL ? "text-3xl md:text-5xl" : "text-2xl md:text-[1.75rem]"
                      }`}
                    >
                      {cat.label}
                    </h3>

                    <p
                      className={`leading-relaxed mb-6 ${
                        isXL ? "text-[15px] max-w-md" : "text-[13px]"
                      } ${cat.tone === "sage" || cat.tone === "terracotta" ? "text-paper/85" : "text-ink-soft"}`}
                    >
                      {cat.desc}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-current/15">
                      <span
                        className={`text-[11px] tracking-[0.15em] uppercase font-semibold ${
                          cat.tone === "sage" || cat.tone === "terracotta"
                            ? "text-paper/70"
                            : "text-ink-soft"
                        }`}
                      >
                        {cat.stock}
                      </span>
                      <motion.span
                        aria-hidden
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 group-hover:translate-x-1 ${
                          cat.tone === "sage" || cat.tone === "terracotta"
                            ? "bg-paper/10 group-hover:bg-paper text-paper group-hover:text-ink"
                            : "bg-sage/10 group-hover:bg-terracotta text-sage group-hover:text-paper"
                        }`}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2 6h8m0 0L6 2m4 4L6 10"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </motion.span>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 text-center text-[13px] text-ink-soft italic"
          >
            La composition varie selon les collectes, la Banque Alimentaire et les partenariats avec les enseignes locales.
          </motion.p>
        </div>
      </section>

      {/* Galerie photos */}
      <section className="py-24 md:py-28 px-4 md:px-8 bg-cream-soft">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <div className="text-[11px] tracking-[0.3em] uppercase text-sage-deep font-semibold">
              En images
            </div>
            <h2 className="mt-4 font-display font-medium text-3xl md:text-5xl text-sage-deep leading-[1.1]">
              Notre quotidien.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Notre local", caption: "31 rue du Breteil, Eysines" },
              { label: "Nos bénévoles", caption: "Une quarantaine d'engagés" },
              { label: "Les colis", caption: "Composés avec soin" },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`relative border border-rule bg-cream-soft notebook-lines flex flex-col items-center justify-center py-16 px-8 text-center ${i === 0 ? "md:row-span-2" : ""}`}
              >
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" className="text-ink-soft/30 mb-3">
                  <rect x="4" y="8" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="22" cy="22" r="7" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <p className="font-display text-xl text-ink-soft/50">{item.label}</p>
                <p className="text-[12px] text-ink-soft/40 mt-1">{item.caption}</p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-ink-soft/30">Photo à venir</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horaires + adresse */}
      <section className="py-16 px-4 md:px-8 bg-cream-soft">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="group relative bg-paper border-2 border-ink/10 hover:border-terracotta/40 rounded-tl-[40px] rounded-br-[40px] p-8 cursor-default overflow-hidden transition-colors"
          >
            <span aria-hidden className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(260px_circle_at_center,rgba(25,20,101,0.15),transparent_65%)]" />
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-sage-deep font-semibold mb-5">
              <Clock size={13} strokeWidth={1.8} />
              Horaires distribution
            </div>
            <div className="space-y-3">
              {HOURS_DISTRIBUTION.map((h, i) => (
                <div
                  key={i}
                  className="flex justify-between items-baseline text-[15px] pb-2 border-b border-rule/40 last:border-0"
                >
                  <span className="text-ink-soft">{h.days}</span>
                  <span
                    className={`tabular-nums ${
                      h.hours === "Fermé" ? "text-terracotta italic" : "text-ink font-semibold"
                    }`}
                  >
                    {h.hours}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            whileHover={{ y: -4 }}
            className="group relative bg-sage paper-texture border-2 border-ink/10 hover:border-terracotta-soft/60 rounded-tl-[40px] rounded-br-[40px] p-8 cursor-default overflow-hidden transition-colors"
          >
            <span aria-hidden className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(260px_circle_at_center,rgba(255,255,255,0.18),transparent_65%)]" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-paper/80 font-semibold mb-5">
                <MapPin size={13} strokeWidth={1.8} />
                Nous trouver
              </div>
              <p className="font-display text-2xl text-paper leading-snug mb-6">
                {SITE.address}
              </p>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 bg-paper text-sage-deep px-6 py-2.5 text-[12px] tracking-[0.22em] uppercase font-bold rounded-full hover:bg-cream transition-colors"
              >
                <Phone size={13} strokeWidth={2} />
                {SITE.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-8 bg-paper">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="spotlight relative bg-sage paper-texture border-2 border-ink/10 p-10 md:p-16 text-center rounded-tl-[60px] md:rounded-tl-[80px] rounded-br-[60px] md:rounded-br-[80px] overflow-hidden"
          >
            <ShineSweep delay={0.3} />
            <div className="relative z-10">
              <div className="text-[11px] tracking-[0.3em] uppercase text-paper/70 font-semibold mb-5">
                Besoin d'aide ?
              </div>
              <h2 className="font-display font-medium text-4xl md:text-5xl text-paper leading-[1.05]">
                Contactez-nous.
              </h2>
              <p className="mt-5 text-paper/85 text-[15px] max-w-md mx-auto leading-relaxed">
                Si vous ou un proche traversez une période difficile, n'hésitez pas. L'écoute est gratuite, la démarche confidentielle.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-paper text-sage-deep px-7 py-3.5 text-[13px] tracking-[0.22em] uppercase font-bold rounded-full hover:bg-cream transition-colors"
                >
                  Nous contacter
                </Link>
                <Link
                  href="/aider"
                  className="inline-flex items-center gap-2 border-2 border-paper/70 text-paper px-7 py-3.5 text-[13px] tracking-[0.22em] uppercase font-bold rounded-full hover:border-paper transition-colors"
                >
                  Nous aider
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
