"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { SITE } from "@/lib/constants"

type SubLink = { href: string; label: string }
type NavLink  = { href: string; label: string; dropdown?: SubLink[] }

const links: NavLink[] = [
  { href: "/", label: "Accueil" },
  {
    href: "/a-propos",
    label: "À propos",
    dropdown: [
      { href: "/a-propos",    label: "Notre histoire"   },
      { href: "/valeurs",      label: "Vision et valeurs" },
      { href: "/activites",   label: "Nos activités"    },
      { href: "/partenaires", label: "Nos partenaires"  },
    ],
  },
  { href: "/temoignages", label: "Témoignages" },
  { href: "/don",         label: "Faire un don" },
  { href: "/contact",     label: "Contact" },
]

export default function Navbar() {
  const [open,           setOpen]           = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [hovered,        setHovered]        = useState<string | null>(null)
  const [scrolled,       setScrolled]       = useState(false)
  const pathname = usePathname()

  useEffect(() => { setOpen(false); setMobileExpanded(null) }, [pathname])

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
      <div className="max-w-[1300px] mx-auto px-4 md:px-8 h-28 md:h-32 flex items-center justify-between gap-4">

        {/* ── Logo ─────────────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-24 h-24 shrink-0">
            <Image
              src="/images/logo.png"
              alt="La Main Tendue"
              fill sizes="96px"
              className="object-contain mix-blend-multiply"
              priority
            />
          </div>
          <div className="leading-[1.15]">
            <div className="font-display text-xl text-ink whitespace-nowrap">La Main Tendue</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-ink-soft font-semibold whitespace-nowrap">
              Aide alimentaire · Eysines
            </div>
          </div>
        </Link>

        {/* ── Desktop nav ──────────────────────────────────── */}
        <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
          {links.map((l) => {
            const isActive = pathname === l.href ||
              (l.dropdown?.some(d => pathname === d.href) ?? false)

            if (l.dropdown) {
              return (
                <div
                  key={l.href}
                  className="relative"
                  onMouseEnter={() => setHovered(l.href)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Trigger */}
                  <Link
                    href={l.href}
                    className={`relative inline-flex items-center gap-1 px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                      isActive ? "text-terracotta" : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    {l.label}
                    <ChevronDown
                      size={10}
                      strokeWidth={2.8}
                      className={`transition-transform duration-200 ${hovered === l.href ? "rotate-180" : ""}`}
                    />
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-terracotta"
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {hovered === l.href && (
                      <motion.div
                        initial={{ opacity: 0, y: -4, scaleY: 0.96 }}
                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                        exit={{ opacity: 0, y: -4, scaleY: 0.96 }}
                        transition={{ duration: 0.16, ease: "easeOut" }}
                        style={{ transformOrigin: "top" }}
                        className="absolute top-full left-0 w-52 bg-paper border border-rule shadow-[0_8px_28px_rgba(28,18,9,0.12)] py-1.5 z-50"
                      >
                        {l.dropdown.map((sub, i) => (
                          <motion.div
                            key={sub.label}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.04 }}
                          >
                            <Link
                              href={sub.href}
                              className={`block px-5 py-2.5 text-[12px] uppercase tracking-[0.12em] font-semibold border-l-2 transition-colors hover:bg-cream-soft hover:text-terracotta hover:border-terracotta ${
                                pathname === sub.href
                                  ? "text-terracotta border-terracotta bg-cream-soft"
                                  : "text-ink-soft border-transparent"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                  isActive ? "text-terracotta" : "text-ink-soft hover:text-ink"
                }`}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-terracotta"
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* ── CTA téléphone ─────────────────────────────── */}
        <a
          href={SITE.phoneHref}
          className="hidden md:inline-flex items-center gap-2 bg-terracotta text-paper px-5 py-2.5 text-[12px] tracking-[0.18em] uppercase font-bold hover:bg-terracotta-soft transition-colors shrink-0"
        >
          <Phone size={12} strokeWidth={2} />
          {SITE.phone}
        </a>

        {/* ── Mobile burger ─────────────────────────────── */}
        <button
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className="md:hidden p-2 text-ink"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} strokeWidth={1.8} /> : <Menu size={22} strokeWidth={1.8} />}
        </button>
      </div>

      {/* ── Mobile menu ───────────────────────────────────── */}
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
                <div key={l.href}>
                  {l.dropdown ? (
                    <>
                      {/* Accordion trigger */}
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === l.href ? null : l.href)}
                        className={`w-full flex items-center justify-between py-3 border-b border-rule text-[14px] font-semibold uppercase tracking-[0.14em] ${
                          pathname === l.href || l.dropdown.some(d => pathname === d.href)
                            ? "text-terracotta"
                            : "text-ink-soft"
                        }`}
                      >
                        {l.label}
                        <ChevronDown
                          size={14}
                          strokeWidth={2.2}
                          className={`transition-transform duration-200 ${mobileExpanded === l.href ? "rotate-180" : ""}`}
                        />
                      </button>

                      {/* Sous-liens */}
                      <AnimatePresence>
                        {mobileExpanded === l.href && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22 }}
                            className="overflow-hidden"
                          >
                            <div className="bg-cream-soft pl-4 py-1 border-b border-rule">
                              {l.dropdown.map((sub) => (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  onClick={() => setOpen(false)}
                                  className={`block py-2.5 text-[12px] uppercase tracking-[0.14em] font-semibold ${
                                    pathname === sub.href ? "text-terracotta" : "text-ink-soft"
                                  }`}
                                >
                                  → {sub.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`block py-3 border-b border-rule text-[14px] font-semibold uppercase tracking-[0.14em] ${
                        pathname === l.href ? "text-terracotta" : "text-ink-soft"
                      }`}
                    >
                      {l.label}
                    </Link>
                  )}
                </div>
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
