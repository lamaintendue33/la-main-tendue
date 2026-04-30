"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { Clock, MapPin, Phone, Calendar, ArrowRight, Package, Wheat, Leaf, Milk, SprayCan, ShoppingBag } from "lucide-react"
import { SITE } from "@/lib/constants"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"

const colisItems = [
  { Icon: Wheat, label: "Épicerie sèche", detail: "Pâtes, riz, conserves, huile, sucre, farine, café" },
  { Icon: Milk, label: "Produits laitiers", detail: "Yaourts, fromage, œufs, lait" },
  { Icon: Leaf, label: "Fruits & légumes frais", detail: "Selon les arrivages de la Banque Alimentaire" },
  { Icon: Package, label: "Viande & poisson", detail: "Frais ou surgelé selon disponibilité" },
  { Icon: ShoppingBag, label: "Produits bébé", detail: "Lait infantile, petits pots, couches (selon besoins)" },
  { Icon: SprayCan, label: "Hygiène & entretien", detail: "Savon, dentifrice, lessive, produits ménagers" },
]

const partners = [
  { name: "Banque Alimentaire de Bordeaux", since: "1992", role: "Produits secs, frais, viande, laitages" },
  { name: "Leclerc Saint-Médard", since: "1998", role: "Invendus alimentaires chaque semaine" },
  { name: "Agence du Don en Nature", since: "2020", role: "Produits d'hygiène et d'entretien" },
  { name: "Agence Don Solidaire", since: "2022", role: "Produits d'hygiène et d'entretien" },
]

const galleryPhotos = [
  { src: "/images/distribution/caisses-legumes.jpg", alt: "Salle de distribution avec caisses bleues remplies de légumes" },
  { src: "/images/distribution/baguettes-caisses.jpg", alt: "Baguettes et pains empilés, caisses bleues en arrière-plan" },
  { src: "/images/distribution/etageres-frais.jpg", alt: "Étagères chargées de produits frais" },
  { src: "/images/distribution/etageres-secs.jpg", alt: "Rayonnage de produits secs — pâtes, riz, conserves" },
]

export default function DistributionPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })
  const colisRef = useRef<HTMLDivElement>(null)
  const colisInView = useInView(colisRef, { once: true, amount: 0.1 })
  const partnerRef = useRef<HTMLDivElement>(null)
  const partnerInView = useInView(partnerRef, { once: true, amount: 0.1 })

  return (
    <main className="bg-paper pt-14 md:pt-16">

      {/* ── Hero ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-sage paper-texture">
        <div className="max-w-[1100px] mx-auto" ref={heroRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                className="mb-3"
              >
                <AnimatedShinyText
                  shimmerWidth={140}
                  className="text-[11px] uppercase tracking-[0.35em] text-paper/60 via-white/90 font-semibold max-w-none mx-0"
                >
                  La distribution
                </AnimatedShinyText>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={heroInView ? { y: 0 } : {}}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-5xl sm:text-6xl text-paper leading-[1.0] mb-6"
                >
                  Un colis,<br />chaque mercredi.
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[15px] text-paper/75 leading-relaxed mb-8"
              >
                Chaque semaine, 160 colis alimentaires équilibrés sont distribués
                à plus de 500 personnes du bassin eysinais. Pour respecter la
                dignité de chacun, une participation financière symbolique peut
                être demandée selon les ressources du foyer.
              </motion.p>

              {/* Horaires */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="bg-white/10 border border-paper/20 p-5 space-y-3"
              >
                <div className="flex items-center gap-3 text-paper">
                  <Clock size={16} strokeWidth={1.8} className="text-terracotta shrink-0" />
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-paper/60 font-semibold mb-0.5">Horaires</p>
                    <p className="text-[14px] font-semibold">Mercredi 11h00 – 12h00</p>
                    <p className="text-[14px] font-semibold">Mercredi 13h30 – 17h00</p>
                  </div>
                </div>
                <div className="h-px bg-paper/15" />
                <div className="flex items-start gap-3 text-paper">
                  <MapPin size={16} strokeWidth={1.8} className="text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-paper/60 font-semibold mb-0.5">Adresse</p>
                    <p className="text-[14px]">{SITE.address}</p>
                  </div>
                </div>
                <div className="h-px bg-paper/15" />
                <div className="flex items-center gap-3 text-paper">
                  <Phone size={16} strokeWidth={1.8} className="text-terracotta shrink-0" />
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-paper/60 font-semibold mb-0.5">Contact</p>
                    <a href={SITE.phoneHref} className="text-[14px] hover:text-terracotta transition-colors">
                      {SITE.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Photo hero */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden shadow-[6px_10px_40px_rgba(0,0,0,0.3)]">
                <Image
                  src="/images/distribution/caisses-legumes-2.jpg"
                  alt="Caisses bleues remplies de légumes frais prêtes pour la distribution"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Badge flottant */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ type: "spring", delay: 0.6, stiffness: 180 }}
                className="absolute -bottom-5 -left-5 bg-terracotta text-paper px-5 py-3 shadow-lg"
              >
                <p className="font-display text-3xl leading-none">160</p>
                <p className="text-[10px] uppercase tracking-[0.2em] font-semibold">colis / semaine</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Contenu d'un colis ── */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-paper">
        <div className="max-w-[1000px] mx-auto" ref={colisRef}>
          <div className="mb-14">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={colisInView ? { opacity: 1, y: 0 } : {}}
              className="mb-3"
            >
              <span className="text-[11px] uppercase tracking-[0.35em] text-ink-soft font-semibold">
                Ce qu'il y a dans un colis
              </span>
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={colisInView ? { y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-4xl md:text-5xl text-ink"
              >
                Un panier équilibré<br />pour chaque famille.
              </motion.h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {colisItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                animate={colisInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-rule p-5 shadow-[3px_4px_0_0_rgba(28,18,9,0.06)]"
              >
                <div className="w-9 h-9 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center mb-4">
                  <item.Icon size={16} strokeWidth={1.8} className="text-teal" />
                </div>
                <h3 className="font-semibold text-ink text-[14px] mb-1">{item.label}</h3>
                <p className="text-[12px] text-ink-soft leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Galerie ── */}
      <section className="py-12 px-4 md:px-8 bg-cream-soft overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {galleryPhotos.map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02, zIndex: 10 }}
                className={`relative overflow-hidden ${i === 0 ? "aspect-[3/4]" : "aspect-square"}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Collecte annuelle ── */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-paper">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="border border-rule p-8 md:p-10 relative"
          >
            <span aria-hidden className="absolute -top-3 left-8 block h-6 w-16 bg-clay/55 rotate-[-2deg]" />
            <div className="flex items-start gap-4">
              <Calendar size={22} strokeWidth={1.6} className="text-terracotta shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-2xl text-ink mb-2">Collecte nationale — Banque Alimentaire</h3>
                <p className="text-[14px] text-ink-soft leading-relaxed mb-3">
                  Chaque dernier week-end de novembre, La Main Tendue participe à
                  la collecte nationale de la Banque Alimentaire. Notre partenaire
                  pour la récolte est le <strong className="text-ink">Super U d'Eysines</strong>.
                </p>
                <p className="text-[13px] text-ink-soft">
                  Un moment fort où chacun peut contribuer directement en déposant
                  des denrées non-périssables en caisse.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Partenaires approvisionnement ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-sage paper-texture" ref={partnerRef}>
        <div className="max-w-[900px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={partnerInView ? { opacity: 1, y: 0 } : {}}
            className="mb-12"
          >
            <AnimatedShinyText
              shimmerWidth={120}
              className="text-[11px] uppercase tracking-[0.35em] text-paper/60 via-white/90 font-semibold max-w-none mx-0 mb-3"
            >
              Ils nous soutiennent
            </AnimatedShinyText>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={partnerInView ? { y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-4xl text-paper"
              >
                Nos partenaires<br />d'approvisionnement
              </motion.h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                animate={partnerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-white/10 border border-paper/20 p-5"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-semibold text-paper text-[14px] leading-snug">{p.name}</h3>
                  <span className="text-[10px] text-terracotta font-semibold uppercase tracking-wider shrink-0 mt-0.5">
                    depuis {p.since}
                  </span>
                </div>
                <p className="text-[12px] text-paper/60 leading-relaxed">{p.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA bénéficiaires ── */}
      <section className="py-16 px-4 md:px-8 bg-paper text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-3xl md:text-4xl text-ink mb-3">
            Vous avez besoin d'aide ?
          </p>
          <p className="text-[14px] text-ink-soft mb-6 max-w-sm mx-auto">
            Contactez-nous ou présentez-vous directement le mercredi. Un entretien
            permettra d'étudier votre situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-terracotta text-paper px-7 py-3.5 text-[12px] uppercase tracking-[0.14em] font-bold hover:bg-terracotta-soft transition-colors"
            >
              Nous contacter
              <ArrowRight size={14} strokeWidth={2.2} />
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 border border-rule text-ink px-7 py-3.5 text-[12px] uppercase tracking-[0.14em] font-bold hover:bg-cream transition-colors"
            >
              <Phone size={14} strokeWidth={2} />
              {SITE.phone}
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
