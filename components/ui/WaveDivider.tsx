"use client"

import { motion } from "framer-motion"

type Variant = "gentle" | "choppy" | "organic"

type Props = {
  top?: string
  bottom?: string
  flip?: boolean
  variant?: Variant
  className?: string
}

const paths: Record<Variant, string> = {
  gentle:  "M0,0 L1440,0 L1440,44 C1200,76 960,20 720,44 C480,68 240,20 0,44 Z",
  choppy:  "M0,0 L1440,0 L1440,28 C1320,58 1200,12 1080,32 C960,54 840,8 720,32 C600,56 480,10 360,30 C240,52 120,12 0,32 Z",
  organic: "M0,0 L1440,0 L1440,52 C1100,82 850,8 580,46 C340,78 160,14 0,52 Z",
}

export default function WaveDivider({
  top = "text-paper",
  bottom = "bg-cream-soft",
  flip = false,
  variant = "gentle",
  className = "",
}: Props) {
  return (
    <div className={`${bottom} overflow-hidden ${className}`} aria-hidden>
      <motion.svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={`block w-full h-[48px] md:h-[80px] ${top} ${flip ? "scale-y-[-1]" : ""}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <path d={paths[variant]} fill="currentColor" />
      </motion.svg>
    </div>
  )
}
