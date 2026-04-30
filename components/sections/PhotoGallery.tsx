"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const photos = [
  {
    src: "/images/distribution/baguettes-caisses.jpg",
    alt: "Baguettes empilées prêtes pour la distribution, caisses bleues en arrière-plan",
    caption: "Préparation des colis",
    rotate: "-1.5deg",
    delay: 0,
  },
  {
    src: "/images/distribution/caisses-legumes.jpg",
    alt: "Salle remplie de caisses bleues chargées de légumes frais",
    caption: "Jour de distribution",
    rotate: "1.8deg",
    delay: 0.1,
  },
  {
    src: "/images/distribution/etageres-frais.jpg",
    alt: "Étagères avec yaourts, jus de fruits et produits frais",
    caption: "Nos réserves",
    rotate: "-0.8deg",
    delay: 0.2,
  },
  {
    src: "/images/distribution/etageres-secs.jpg",
    alt: "Étagères de produits secs — pâtes, riz, conserves",
    caption: "Produits secs",
    rotate: "2.2deg",
    delay: 0.3,
  },
  {
    src: "/images/distribution/caisses-legumes-2.jpg",
    alt: "Rangée de caisses bleues remplies de légumes et champignons frais",
    caption: "Fruits & légumes frais",
    rotate: "-1.2deg",
    delay: 0.4,
  },
]

function PolaroidPhoto({
  src,
  alt,
  caption,
  rotate,
  delay,
}: (typeof photos)[number]) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotate: 0 }}
      animate={inView ? { opacity: 1, y: 0, rotate } : {}}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 14,
        delay,
      }}
      whileHover={{
        scale: 1.04,
        rotate: "0deg",
        zIndex: 20,
        boxShadow: "8px 16px 40px rgba(28,18,9,0.22)",
        transition: { type: "spring", stiffness: 260, damping: 20 },
      }}
      className="relative bg-white p-3 pb-10 shadow-[4px_8px_24px_rgba(28,18,9,0.14)] cursor-default"
    >
      {/* Scotch */}
      <span
        aria-hidden
        className="absolute -top-3.5 left-1/2 -translate-x-1/2 block h-6 w-16 bg-clay/55 rotate-[1deg] z-10"
      />

      {/* Photo */}
      <div className="relative w-full aspect-square overflow-hidden bg-stone/20">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 40vw, 260px"
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
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-cream overflow-hidden">
      <div className="max-w-[1200px] mx-auto">

        {/* En-tête */}
        <div className="mb-14 md:mb-20" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[11px] uppercase tracking-[0.35em] text-ink-soft font-semibold mb-3"
          >
            En images
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl md:text-5xl text-ink"
            >
              Le quotidien de l'association
            </motion.h2>
          </div>
        </div>

        {/* Grille polaroids */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 items-start">
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className={i === 1 ? "mt-6" : i === 3 ? "mt-10" : i === 4 ? "mt-4" : ""}
            >
              <PolaroidPhoto {...photo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
