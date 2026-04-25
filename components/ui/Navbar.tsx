"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"
import { SITE } from "@/lib/constants"

const links = [
  { href: "/", label: "Accueil" },
  { href: "/distribution", label: "Distribution" },
  { href: "/aider", label: "Aider" },
  { href: "/mission", label: "Mission" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/95 backdrop-blur-md border-b border-rule"
          : "bg-paper border-b border-rule/50"
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-4 md:px-8 h-16 md:h-18 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden">
            <Image
              src="/images/logo.png"
              alt="La Main Tendue"
              fill
              sizes="40px"
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-[1.15]">
            <div className="font-display text-xl text-ink">La Main Tendue</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-ink-soft font-semibold">
              Aide alimentaire · Eysines
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                  active ? "text-terracotta" : "text-ink-soft hover:text-ink"
                }`}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-terracotta"
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* CTA téléphone */}
        <a
          href={SITE.phoneHref}
          className="hidden md:inline-flex items-center gap-2 bg-terracotta text-paper px-5 py-2.5 text-[12px] tracking-[0.18em] uppercase font-bold hover:bg-terracotta-soft transition-colors"
        >
          <Phone size={12} strokeWidth={2} />
          {SITE.phone}
        </a>

        {/* Mobile burger */}
        <button
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className="md:hidden p-2 text-ink"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} strokeWidth={1.8} /> : <Menu size={22} strokeWidth={1.8} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-paper border-t border-rule overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`py-3 border-b border-rule text-[14px] font-semibold uppercase tracking-[0.14em] ${
                    pathname === l.href ? "text-terracotta" : "text-ink-soft"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={SITE.phoneHref}
                className="mt-4 flex items-center justify-center gap-2 bg-terracotta text-paper px-4 py-3 text-[13px] tracking-[0.2em] uppercase font-bold"
              >
                <Phone size={13} strokeWidth={2} />
                {SITE.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
