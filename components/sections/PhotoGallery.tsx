"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

// Images exclusives à l'accueil (pas utilisées sur /activites)
const photos = [
  {
    src: "/images/distribution/salle-distribution.jpg",
    alt: "Vue d'ensemble de la salle de distribution — caisses bleues remplies de légumes frais",
    caption: "Salle de distribution",
    rotate: "-1.8deg",
    delay: 0,
  },
  {
    src: "/images/distribution/preparation.jpg",
    alt: "Bénévoles en train de préparer les colis alimentaires",
    caption: "Préparation des colis",
    rotate: "1.5deg",
    delay: 0.1,
  },
  {
    src: "/images/distribution/colis-prepares.jpg",
    alt: "Colis alimentaires préparés et prêts à être distribués",
    caption: "Colis prêts",
    rotate: "-0.6deg",
    delay: 0.2,
  },
  {
    src: "/images/distribution/etageres-frais-2.jpg",
    alt: "Étagères garnies de produits frais pour la distribution",
    caption: "Produits frais",
    rotate: "2.0deg",
    delay: 0.3,
  },
]

function PolaroidPhoto({
  src,
  alt,
  caption,
  rotate,
  delay,
  index,
}: (typeof photos)[number] & { index: number }) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  // Décalage vertical alterné pour un effet naturel
  const offsets = [0, 28, 8, 20]

  return (
    <motion.div
      ref={ref}
      style={{ marginTop: offsets[index] }}
      initial={{ opacity: 0, y: 50, rotate: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, rotate, scale: 1 } : {}}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 14,
        delay,
      }}
      whileHover={{
        scale: 1.05,
        rotate: "0deg",
        zIndex: 20,
        boxShadow: "10px 18px 48px rgba(28,18,9,0.25)",
        transition: { type: "spring", stiffness: 240, damping: 18 },
      }}
      className="relative bg-white p-3 pb-10 shadow-[4px_8px_24px_rgba(28,18,9,0.14)] cursor-default"
    >
      {/* Scotch */}
      <span
        aria-hidden
        className="absolute -top-3.5 left-1/2 -translate-x-1/2 block h-6 w-16 bg-clay/55 rotate-[1deg] z-10"
      />

      {/* Photo */}
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 40vw, 280px"
        />
      </div>

      {/* Légende */}
      <p className="mt-2 text-center font-display text-lg text-ink/70">
        {caption} ✦
      </p>
    </motion.div>
  )
}

export default function PhotoGallery() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headRef    = useRef<HTMLDivElement>(null)
  const inView     = useInView(headRef, { once: true, amount: 0.1 })

  // Parallax léger sur le titre au scroll
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 md:px-8 bg-cream overflow-hidden">
      <div className="max-w-[1100px] mx-auto">

        {/* En-tête */}
        <div className="mb-14 md:mb-20" ref={headRef}>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[11px] uppercase tracking-[0.35em] text-ink-soft font-semibold mb-3"
          >
            En images
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              style={{ y: titleY }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl md:text-5xl text-ink"
            >
              Le quotidien de l'association
            </motion.h2>
          </div>
        </div>

        {/* Grille 4 polaroids */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 items-start">
          {photos.map((photo, i) => (
            <PolaroidPhoto key={photo.src} {...photo} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
