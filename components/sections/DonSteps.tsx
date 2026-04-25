"use client"

import { motion, useInView } from "framer-motion"
import { Phone, Package, CheckCircle2, Utensils } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { DON_STEPS, SITE } from "@/lib/constants"

const stepIcons = [Phone, Package, CheckCircle2, Utensils]

export default function DonSteps() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-cream-soft">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="mb-14" ref={ref}>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[11px] uppercase tracking-[0.35em] text-ink-soft/70 font-semibold mb-3"
          >
            Comment aider
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl text-ink leading-[1.0]"
            >
              Simple comme<br />un coup de fil.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 text-[15px] text-ink-soft leading-relaxed max-w-xl"
          >
            En quatre étapes, vos dons rejoignent les familles que nous accompagnons.
          </motion.p>
        </div>

        {/* Étapes */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-4">
          {/* Ligne de liaison desktop */}
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.4, ease: "easeInOut" }}
            className="hidden md:block absolute top-[38px] left-[14%] right-[14%] h-px bg-rule origin-left"
          />

          {DON_STEPS.map((step, i) => {
            const Icon = stepIcons[i]
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, boxShadow: "4px 10px 0 0 rgba(28,18,9,0.09)" }}
                whileTap={{ scale: 0.97 }}
                className="relative bg-white border border-rule p-6 text-center shadow-[3px_4px_0_0_rgba(28,18,9,0.06)] transition-shadow duration-200 cursor-default"
              >
                {/* Cercle numéroté */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 250, damping: 16, delay: i * 0.13 + 0.2 }}
                  className="relative w-16 h-16 mx-auto mb-5 rounded-full bg-paper border-2 border-rule flex items-center justify-center"
                >
                  <span className="font-display text-2xl text-terracotta leading-none">{step.step}</span>
                  <motion.span
                    initial={{ scale: 0, rotate: -30 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, delay: i * 0.13 + 0.4 }}
                    className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-terracotta flex items-center justify-center"
                  >
                    <Icon size={12} strokeWidth={2} className="text-white" />
                  </motion.span>
                </motion.div>

                <h3 className="font-display text-2xl text-ink mb-2">{step.title}</h3>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.13 + 0.5 }}
                  className="block w-6 h-px bg-terracotta mx-auto mb-3 origin-center"
                />
                <p className="text-[13px] text-ink-soft leading-relaxed">{step.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA brun */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mt-14 bg-sage p-8 md:p-12 text-center border border-sage overflow-hidden paper-texture"
        >
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="absolute -top-3 left-1/2 -translate-x-1/2 block h-6 w-28 bg-clay/55 rotate-[-1deg] origin-center"
          />
          <h3 className="relative font-display text-4xl md:text-5xl text-paper">
            Prêt à tendre la main ?
          </h3>
          <p className="relative mt-4 text-paper/75 text-[15px]">
            Un appel suffit —{" "}
            <a href={SITE.phoneHref} className="text-paper font-semibold underline underline-offset-4 decoration-paper/50 hover:decoration-paper">
              {SITE.phone}
            </a>
          </p>
          <motion.div
            className="relative mt-8 flex flex-col sm:flex-row justify-center gap-3"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/aider" className="inline-block bg-paper text-sage-deep px-8 py-3 text-[13px] uppercase tracking-[0.22em] font-bold hover:bg-cream transition-colors">
                Devenir bénévole
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" className="inline-block border border-paper/40 text-paper px-8 py-3 text-[13px] uppercase tracking-[0.22em] font-bold hover:border-paper hover:bg-paper/10 transition-colors">
                Nous contacter
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
