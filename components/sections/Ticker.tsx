"use client"

import { HeartHandshake, Users, Utensils, Gift, Sparkles, Heart } from "lucide-react"
import Marquee from "@/components/ui/Marquee"
import { TICKER } from "@/lib/constants"

const iconCycle = [HeartHandshake, Users, Utensils, Gift, Sparkles, Heart] as const

export default function Ticker() {
  const items = TICKER.map((label, i) => ({
    Icon: iconCycle[i % iconCycle.length],
    label,
  }))

  return (
    <section className="relative py-6 border-y-2 border-ink/10 bg-paper overflow-hidden">
      <Marquee
        duration={45}
        items={items.map(({ Icon, label }, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-sage-deep font-display text-xl md:text-2xl"
          >
            <Icon size={18} strokeWidth={1.6} className="text-terracotta" />
            {label}
            <span className="mx-6 text-rule">✦</span>
          </span>
        ))}
      />
    </section>
  )
}
