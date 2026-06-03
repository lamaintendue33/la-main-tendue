"use client"

import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react"
import type { CSSProperties } from "react"

/**
 * Fond animé mesh gradient — couleurs du logo La Main Tendue
 * Bleu marine + Teal + Orange, vitesse douce pour ne pas distraire
 */
export function ShaderBackground() {
  return (
    <MeshGradient
      className="absolute inset-0 w-full h-full"
      colors={["#1a3a5c", "#3a8c8c", "#0f2840", "#c87028", "#2b5f8e"]}
      speed={0.22}
    />
  )
}

/**
 * Anneau pulsant décoratif — teal + orange du logo
 * Utilisé comme élément décoratif dans le hero
 */
export function ShaderPulse({
  className,
  style,
}: {
  className?: string
  style?: CSSProperties
}) {
  return (
    <PulsingBorder
      colors={["#3a8c8c", "#2b5f8e", "#c87028", "#5aacac", "#d98c3e"]}
      colorBack="#00000000"
      speed={1.2}
      roundness={1}
      thickness={0.08}
      softness={0.22}
      intensity={4}
      spots={4}
      spotSize={0.1}
      pulse={0.12}
      smoke={0.4}
      smokeSize={3}
      scale={0.65}
      rotation={0}
      style={style ?? { width: "52px", height: "52px", borderRadius: "50%" }}
      className={className}
    />
  )
}
