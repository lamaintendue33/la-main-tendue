"use client"

// Adapté depuis 21st.dev — Animated Counter (slot-machine par chiffre)
// Utilise framer-motion useSpring + useTransform pour l'animation fluide

import { useEffect, useRef } from "react"
import { motion, useSpring, useTransform, useInView, type MotionValue } from "framer-motion"
import { cn } from "@/lib/utils"

const FONT_SIZE = 52
const PADDING  = 10
const HEIGHT   = FONT_SIZE + PADDING

interface AnimatedCounterProps {
  value: number
  className?: string
  fontSize?: number
}

export function AnimatedCounter({ value, className, fontSize = FONT_SIZE }: AnimatedCounterProps) {
  const ref   = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  const springValue = useSpring(0, { stiffness: 60, damping: 18, restDelta: 0.5 })

  useEffect(() => {
    if (inView) springValue.set(value)
  }, [inView, value, springValue])

  const h = fontSize + PADDING

  return (
    <div
      ref={ref}
      style={{ fontSize, lineHeight: 1 }}
      className={cn("flex overflow-hidden tabular-nums font-display", className)}
    >
      {value >= 10000 && <Digit place={10000} mv={springValue} h={h} />}
      {value >= 1000  && <Digit place={1000}  mv={springValue} h={h} />}
      {value >= 100   && <Digit place={100}   mv={springValue} h={h} />}
      {value >= 10    && <Digit place={10}    mv={springValue} h={h} />}
      <Digit place={1} mv={springValue} h={h} />
    </div>
  )
}

function Digit({ place, mv, h }: { place: number; mv: MotionValue<number>; h: number }) {
  const valueForPlace = useTransform(mv, v => Math.floor(v / place) % 10)
  const animatedDigit = useSpring(valueForPlace, { stiffness: 80, damping: 16 })

  return (
    <div style={{ height: h }} className="relative w-[0.62em] overflow-hidden">
      {[...Array(10)].map((_, i) => (
        <DigitNumber key={i} mv={animatedDigit} number={i} h={h} />
      ))}
    </div>
  )
}

function DigitNumber({ mv, number, h }: { mv: MotionValue<number>; number: number; h: number }) {
  const y = useTransform(mv, (latest) => {
    const offset = (10 + number - (latest % 10)) % 10
    let memo = offset * h
    if (offset > 5) memo -= 10 * h
    return memo
  })

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {number}
    </motion.span>
  )
}
