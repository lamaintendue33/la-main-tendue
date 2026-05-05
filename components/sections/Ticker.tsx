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
    <section className="relative py-5 border-y border-rule bg-cream-soft overflow-hidden">
      <Marquee
        duration={75}
        items={items.map(({ Icon, label }, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 font-display text-2xl md:text-3xl text-ink/80"
          >
            <Icon size={18} strokeWidth={1.6} className="text-teal" />
            {label}
            <span className="mx-6 text-rule">✦</span>
          </span>
        ))}
      />
    </section>
  )
}
