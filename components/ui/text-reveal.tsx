"use client"

// Adapté depuis 21st.dev — TextRevealByWord
// Chaque mot s'illumine progressivement en fonction du scroll

import { useRef, type FC, type ReactNode } from "react"
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"
import { cn } from "@/lib/utils"

interface TextRevealByWordProps {
  text: string
  className?: string
  wordClassName?: string
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
  wordClassName,
}) => {
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.8", "end 0.3"],
  })

  const words = text.split(" ")

  return (
    <div ref={targetRef} className={cn("relative", className)}>
      <p className="flex flex-wrap gap-x-2 gap-y-1">
        {words.map((word, i) => {
          const start = i / words.length
          const end   = start + 1 / words.length
          return (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[start, end]}
              className={wordClassName}
            >
              {word}
            </Word>
          )
        })}
      </p>
    </div>
  )
}

interface WordProps {
  children: ReactNode
  progress: MotionValue<number>
  range: [number, number]
  className?: string
}

const Word: FC<WordProps> = ({ children, progress, range, className }) => {
  const opacity = useTransform(progress, range, [0.15, 1])
  const y       = useTransform(progress, range, [6, 0])

  return (
    <span className="relative inline-block">
      <span className="absolute opacity-10 select-none">{children}</span>
      <motion.span
        style={{ opacity, y }}
        className={cn("relative", className)}
      >
        {children}
      </motion.span>
    </span>
  )
}
