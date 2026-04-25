"use client"

import { motion } from "framer-motion"
import { Phone, Package, CheckCircle2, Utensils } from "lucide-react"
import Link from "next/link"
import { DON_STEPS, SITE } from "@/lib/constants"

const stepIcons = [Phone, Package, CheckCircle2, Utensils]

export default function DonSteps() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-cream-soft">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="text-[11px] uppercase tracking-[0.35em] text-ink-soft/70 font-semibold mb-3">
            Comment aider
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-ink leading-[1.0]">
            Simple comme<br />un coup de fil.
          </h2>
          <p className="mt-5 text-[15px] text-ink-soft leading-relaxed max-w-xl">
            En quatre étapes, vos dons rejoignent les familles que nous accompagnons.
          </p>
        </div>

        {/* Étapes */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
          {/* Ligne de liaison desktop */}
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="hidden md:block absolute top-[38px] left-[14%] right-[14%] h-px bg-rule origin-left"
          />

          {DON_STEPS.map((step, i) => {
            const Icon = stepIcons[i]
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative bg-white border border-rule p-6 text-center shadow-[3px_4px_0_0_rgba(28,18,9,0.06)] hover:-translate-y-1 transition-transform duration-200"
              >
                {/* Numéro étape — cercle */}
                <div className="relative w-16 h-16 mx-auto mb-5 rounded-full bg-paper border-2 border-rule flex items-center justify-center">
                  <span className="font-display text-2xl text-terracotta leading-none">{step.step}</span>
                  {/* Icône petite en coin */}
                  <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-terracotta flex items-center justify-center">
                    <Icon size={12} strokeWidth={2} className="text-white" />
                  </span>
                </div>

                <h3 className="font-display text-2xl text-ink mb-2">{step.title}</h3>
                <span className="block w-6 h-px bg-terracotta mx-auto mb-3" />
                <p className="text-[13px] text-ink-soft leading-relaxed">{step.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA encre */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mt-14 bg-sage p-8 md:p-12 text-center border border-sage overflow-hidden paper-texture"
        >
          {/* Scotch décoratif */}
          <span
            aria-hidden
            className="absolute -top-3 left-1/2 -translate-x-1/2 block h-6 w-28 bg-clay/55 rotate-[-1deg]"
          />

          <h3 className="relative font-display text-4xl md:text-5xl text-paper">
            Prêt à tendre la main ?
          </h3>
          <p className="relative mt-4 text-paper/75 text-[15px]">
            Un appel suffit —{" "}
            <a
              href={SITE.phoneHref}
              className="text-paper font-semibold underline underline-offset-4 decoration-paper/50 hover:decoration-paper"
            >
              {SITE.phone}
            </a>
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/aider"
              className="inline-block bg-paper text-sage-deep px-8 py-3 text-[13px] uppercase tracking-[0.22em] font-bold hover:bg-cream transition-colors"
            >
              Devenir bénévole
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-paper/40 text-paper px-8 py-3 text-[13px] uppercase tracking-[0.22em] font-bold hover:border-paper hover:bg-paper/10 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
