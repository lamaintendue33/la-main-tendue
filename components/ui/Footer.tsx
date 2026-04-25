"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import { SITE, HOURS_DISTRIBUTION } from "@/lib/constants"

function FacebookIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  )
}

const navLinks = [
  ["Accueil", "/"],
  ["Distribution", "/distribution"],
  ["Aider", "/aider"],
  ["Mission", "/mission"],
  ["Contact", "/contact"],
] as const

export default function Footer() {
  return (
    <footer className="relative bg-sage text-paper border-t-2 border-terracotta paper-texture">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8 pt-14 md:pt-18 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="La Main Tendue"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div className="leading-tight">
                <div className="font-display text-xl text-paper">La Main Tendue</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-paper/55 font-semibold">
                  Aide alimentaire
                </div>
              </div>
            </div>
            <p className="text-[13px] leading-relaxed text-paper/70 max-w-xs">
              {SITE.slogan}.
            </p>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] font-semibold text-paper/60 hover:text-paper transition-colors border-b border-paper/20 pb-1"
            >
              <FacebookIcon size={13} />
              Facebook
            </a>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-paper/50 font-semibold mb-4">
              Navigation
            </div>
            <div className="space-y-2.5">
              {navLinks.map(([label, href]) => (
                <div key={href}>
                  <Link
                    href={href}
                    className="block text-[13px] text-paper/70 hover:text-paper transition-colors"
                  >
                    {label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Horaires */}
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-paper/50 font-semibold mb-4">
              Horaires distribution
            </div>
            <div className="space-y-2">
              {HOURS_DISTRIBUTION.map((h, i) => (
                <div
                  key={i}
                  className="flex justify-between text-[12px] pb-1.5 border-b border-paper/10 last:border-0"
                >
                  <span className="text-paper/60">{h.days}</span>
                  <span
                    className={`tabular-nums ${
                      h.hours === "Fermé"
                        ? "text-terracotta-soft italic"
                        : "text-paper/85 font-medium"
                    }`}
                  >
                    {h.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-paper/50 font-semibold mb-4">
              Contact
            </div>
            <div className="flex items-start gap-2 text-[13px] text-paper/70 mb-3">
              <MapPin size={13} strokeWidth={1.5} className="mt-0.5 shrink-0 text-terracotta-soft" />
              <span>{SITE.address}</span>
            </div>
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 text-[13px] text-paper/70 hover:text-paper transition-colors mb-2"
            >
              <Phone size={13} strokeWidth={1.5} className="text-terracotta-soft shrink-0" />
              {SITE.phone}
            </a>
            <a
              href={SITE.emailHref}
              className="flex items-center gap-2 text-[13px] text-paper/70 hover:text-paper transition-colors break-all"
            >
              <Mail size={13} strokeWidth={1.5} className="text-terracotta-soft shrink-0" />
              {SITE.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-paper/10 flex flex-col md:flex-row justify-between gap-2 text-[10px] uppercase tracking-[0.18em] text-paper/35">
          <div>© {new Date().getFullYear()} {SITE.fullName}</div>
          <div>Association loi 1901 — Préfecture de la Gironde</div>
          <div>Fondée en {SITE.founded}</div>
        </div>
      </div>
    </footer>
  )
}
