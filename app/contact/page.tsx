"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Check, Mail } from "lucide-react"
import { SITE, HOURS_DISTRIBUTION } from "@/lib/constants"
import ShineSweep from "@/components/ui/ShineSweep"


export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      {/* Hero */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-10 px-4 md:px-8 bg-paper overflow-x-clip">
        <div className="max-w-[1300px] mx-auto">
          <div className="spotlight relative bg-sage paper-texture border-2 border-ink/10 p-8 sm:p-10 md:p-16 text-center rounded-tl-[60px] sm:rounded-tl-[100px] rounded-br-[60px] sm:rounded-br-[100px] overflow-hidden">
            <ShineSweep />
            <div className="relative z-10">
              <div className="text-[11px] tracking-[0.3em] uppercase text-paper/80 font-semibold">
                Contact
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-4 font-display font-medium text-4xl md:text-6xl text-paper leading-[1.05]"
              >
                À votre écoute.
              </motion.h1>
              <p className="mt-6 max-w-xl mx-auto text-paper/85 text-[15px] leading-relaxed">
                Une question, un besoin d'aide, un projet de don ou de bénévolat ?<br />
                Écrivez-nous ou appelez directement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid contact */}
      <section className="py-20 md:py-24 px-4 md:px-8 bg-paper">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Infos + carte */}
          <div className="space-y-5">
            <motion.a
              href={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, x: 2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex gap-5 p-6 bg-cream-soft hover:bg-paper border-2 border-ink/10 hover:border-terracotta/40 rounded-tl-[32px] rounded-br-[32px] transition-colors overflow-hidden"
            >
              <span aria-hidden className="pointer-events-none absolute top-0 left-0 right-0 h-0.5 bg-terracotta origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <span aria-hidden className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(240px_circle_at_center,rgba(25,20,101,0.15),transparent_65%)]" />
              <motion.div
                whileHover={{ rotate: 15, scale: 1.12 }}
                transition={{ type: "spring", stiffness: 260, damping: 16 }}
                className="relative w-12 h-12 rounded-full bg-sage flex items-center justify-center shrink-0 shadow-sm"
              >
                <MapPin size={18} strokeWidth={1.6} className="text-paper" />
              </motion.div>
              <div className="relative">
                <div className="text-[11px] uppercase tracking-[0.25em] text-sage-deep font-semibold">
                  Adresse
                </div>
                <div className="font-display text-lg mt-1">{SITE.address}</div>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative flex gap-5 p-6 bg-cream-soft border-2 border-ink/10 rounded-tl-[32px] rounded-br-[32px] overflow-hidden"
            >
              <span aria-hidden className="pointer-events-none absolute top-0 left-0 right-0 h-0.5 bg-terracotta origin-left" />
              <div className="relative w-12 h-12 rounded-full bg-terracotta flex items-center justify-center shrink-0 shadow-sm">
                <Phone size={18} strokeWidth={1.6} className="text-paper" />
              </div>
              <div className="relative">
                <div className="text-[11px] uppercase tracking-[0.25em] text-sage-deep font-semibold">
                  Téléphone
                </div>
                <a href={SITE.phoneHref} className="font-display text-lg mt-1 block hover:text-terracotta transition-colors">
                  {SITE.phone}
                </a>
              </div>
            </motion.div>

            <motion.a
              href={SITE.emailHref}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              whileHover={{ y: -4, x: 2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex gap-5 p-6 bg-cream-soft hover:bg-paper border-2 border-ink/10 hover:border-terracotta/40 rounded-tl-[32px] rounded-br-[32px] transition-colors overflow-hidden"
            >
              <span aria-hidden className="pointer-events-none absolute top-0 left-0 right-0 h-0.5 bg-terracotta origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <span aria-hidden className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(240px_circle_at_center,rgba(25,20,101,0.15),transparent_65%)]" />
              <motion.div
                whileHover={{ rotate: 15, scale: 1.12 }}
                transition={{ type: "spring", stiffness: 260, damping: 16 }}
                className="relative w-12 h-12 rounded-full bg-sage flex items-center justify-center shrink-0 shadow-sm"
              >
                <Mail size={18} strokeWidth={1.6} className="text-paper" />
              </motion.div>
              <div className="relative">
                <div className="text-[11px] uppercase tracking-[0.25em] text-sage-deep font-semibold">
                  Email
                </div>
                <div className="font-display text-lg mt-1 break-all">{SITE.email}</div>
              </div>
            </motion.a>

            {/* Horaires */}
            <div className="spotlight p-6 bg-sage paper-texture border-2 border-ink/10 relative rounded-tl-[40px] rounded-br-[40px] overflow-hidden">
              <ShineSweep delay={0.5} />
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-paper/80 font-semibold mb-4">
                  <Clock size={13} strokeWidth={1.8} />
                  Horaires distribution
                </div>
                <div className="space-y-2">
                  {HOURS_DISTRIBUTION.map((h, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-baseline text-[14px] pb-2 border-b border-paper/20 last:border-0"
                    >
                      <span className="text-paper/75">{h.days}</span>
                      <span
                        className={`tabular-nums ${
                          h.hours === "Fermé" ? "text-terracotta-soft italic" : "text-paper font-semibold"
                        }`}
                      >
                        {h.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Carte */}
            <div className="overflow-hidden border-2 border-ink/10 rounded-tl-[32px] rounded-br-[32px]">
              <iframe
                title="Localisation — 31 rue Bréteil, Eysines"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.6520%2C44.8742%2C-0.6400%2C44.8800&layer=mapnik&marker=44.8771598%2C-0.6459198"
                className="w-full h-64"
                loading="lazy"
              />
            </div>
          </div>

          {/* Formulaire */}
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-sage-deep font-semibold mb-4">
              Envoyer un message
            </div>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-sage-deep leading-tight mb-8">
              On vous répond vite.
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-cream-soft border-2 border-ink/10 rounded-tl-[40px] rounded-br-[40px] p-10 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-sage mx-auto flex items-center justify-center mb-5">
                  <Check size={22} strokeWidth={2} className="text-paper" />
                </div>
                <h3 className="font-display font-semibold text-2xl mb-2">Presque terminé !</h3>
                <p className="text-ink-soft text-[14px]">
                  Votre messagerie s'est ouverte avec votre message pré-rempli.
                  Il ne reste plus qu'à cliquer sur envoyer.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.currentTarget as HTMLFormElement
                  // Honeypot : si le champ caché est rempli, c'est un bot
                  if ((form.elements.namedItem("website") as HTMLInputElement)?.value) return

                  const data = new FormData(form)
                  const nom = data.get("nom") as string
                  const email = data.get("email") as string
                  const sujet = (data.get("sujet") as string) || "Message depuis le site"
                  const message = data.get("message") as string

                  const corps = `Nom : ${nom}\nEmail : ${email}\n\n${message}`
                  const lien = `mailto:${SITE.email}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`
                  window.location.href = lien
                  setSubmitted(true)
                }}
                className="space-y-5 bg-cream-soft border-2 border-ink/10 rounded-tl-[40px] rounded-br-[40px] p-6 md:p-8"
              >
                {/* Honeypot anti-bot : caché aux humains, rempli par les bots */}
                <input
                  type="text"
                  name="website"
                  autoComplete="off"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="absolute opacity-0 pointer-events-none w-0 h-0 overflow-hidden"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.25em] text-sage-deep font-semibold mb-2">
                      Nom et prénom
                    </label>
                    <input
                      required
                      type="text"
                      name="nom"
                      className="w-full bg-paper border-2 border-ink/15 focus:border-sage rounded-xl px-4 py-3 text-[15px] outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.25em] text-sage-deep font-semibold mb-2">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      className="w-full bg-paper border-2 border-ink/15 focus:border-sage rounded-xl px-4 py-3 text-[15px] outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.25em] text-sage-deep font-semibold mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    name="sujet"
                    placeholder="Ex: Question sur les dons"
                    className="w-full bg-paper border-2 border-ink/15 focus:border-sage rounded-xl px-4 py-3 text-[15px] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.25em] text-sage-deep font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    name="message"
                    className="w-full bg-paper border-2 border-ink/15 focus:border-sage rounded-xl px-4 py-3 text-[15px] outline-none resize-none transition-colors"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-sage text-paper px-6 py-4 text-[13px] tracking-[0.25em] uppercase font-bold rounded-full hover:bg-sage-deep transition-colors"
                >
                  Envoyer le message
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
