"use client"

import { useState, useEffect } from "react"
import { siteContent } from "@/data/content"

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const { nav } = siteContent

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ga-dark/95 backdrop-blur-md border-b border-ga-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <nav
          className="flex items-center justify-between h-16 md:h-20"
          aria-label="Main navigation"
        >
          {/* Brand wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-80"
          >
            <LogoMark />
            <span className="font-semibold text-base tracking-tight text-white">
              {nav.brand}
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-ga-text-muted transition-colors duration-300 hover:text-ga-accent"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA + mobile hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={nav.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                scrolled
                  ? "bg-ga-accent text-ga-dark hover:bg-ga-accent-dark"
                  : "bg-white/10 text-white border border-white/30 hover:bg-white/20"
              }`}
            >
              {nav.cta.label}
            </a>

            <button
              className="md:hidden p-2 rounded-lg transition-colors text-white"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <IconX /> : <IconMenu />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-ga-dark border-t border-ga-border-dark">
          <div className="section-container py-5 flex flex-col gap-4">
            {nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/75 py-1.5"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={nav.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-ga-accent text-white text-sm font-semibold mt-2"
              onClick={() => setMenuOpen(false)}
            >
              {nav.cta.label}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

/*
 * JL Monogram — 3 variations. Change LOGO_VARIANT to switch.
 * V1: Architectural Serif (default) — bracket serifs, crossbar + diamond
 * V2: Pure Geometry — no serifs, minimal crossbar
 * V3: Compact + Terminals — tighter spacing, crossbar with tick ends
 */
const LOGO_VARIANT: 1 | 2 | 3 = 1

function LogoMark() {
  const color = "var(--ga-accent-light)"
  if (LOGO_VARIANT === 2) return <LogoMarkV2 color={color} />
  if (LOGO_VARIANT === 3) return <LogoMarkV3 color={color} />
  return <LogoMarkV1 color={color} />
}

function LogoMarkV1({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 100 100" fill="none" aria-hidden style={{ color, flexShrink: 0 }}>
      {/* J — serif bracket + stem + hook */}
      <line x1="21" y1="21" x2="45" y2="21" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" />
      <line x1="33" y1="21" x2="33" y2="68" stroke="currentColor" strokeWidth="3.5" />
      <path d="M 33 68 A 11 11 0 0 1 22 79" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* L — serif bracket + stem + foot */}
      <line x1="51" y1="21" x2="69" y2="21" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" />
      <line x1="59" y1="21" x2="59" y2="79" stroke="currentColor" strokeWidth="3.5" />
      <line x1="59" y1="79" x2="81" y2="79" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" />
      {/* Architectural rule */}
      <line x1="10" y1="44" x2="90" y2="44" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" strokeOpacity="0.45" />
      {/* Center diamond */}
      <path d="M 50 40.5 L 54 44 L 50 47.5 L 46 44 Z" stroke="currentColor" strokeWidth="1.25" strokeOpacity="0.65" fill="none" />
    </svg>
  )
}

function LogoMarkV2({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 100 100" fill="none" aria-hidden style={{ color, flexShrink: 0 }}>
      {/* J — stem + hook (no serifs) */}
      <line x1="33" y1="19" x2="33" y2="68" stroke="currentColor" strokeWidth="4.5" strokeLinecap="square" />
      <path d="M 33 68 A 11 11 0 0 1 22 79" stroke="currentColor" strokeWidth="4.5" strokeLinecap="square" fill="none" />
      {/* L — stem + foot (no serifs) */}
      <line x1="60" y1="19" x2="60" y2="81" stroke="currentColor" strokeWidth="4.5" strokeLinecap="square" />
      <line x1="60" y1="81" x2="80" y2="81" stroke="currentColor" strokeWidth="4.5" strokeLinecap="square" />
      {/* Architectural rule */}
      <line x1="10" y1="44" x2="90" y2="44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeOpacity="0.4" />
    </svg>
  )
}

function LogoMarkV3({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 100 100" fill="none" aria-hidden style={{ color, flexShrink: 0 }}>
      {/* J — serif bracket + stem + hook */}
      <line x1="23" y1="21" x2="43" y2="21" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" />
      <line x1="33" y1="21" x2="33" y2="67" stroke="currentColor" strokeWidth="3.5" />
      <path d="M 33 67 A 10 10 0 0 1 23 77" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* L — serif bracket + stem + foot */}
      <line x1="53" y1="21" x2="69" y2="21" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" />
      <line x1="61" y1="21" x2="61" y2="79" stroke="currentColor" strokeWidth="3.5" />
      <line x1="61" y1="79" x2="79" y2="79" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" />
      {/* Architectural rule with terminal ticks */}
      <line x1="13" y1="45" x2="87" y2="45" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" strokeOpacity="0.5" />
      <line x1="13" y1="42" x2="13" y2="48" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" strokeOpacity="0.5" />
      <line x1="87" y1="42" x2="87" y2="48" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" strokeOpacity="0.5" />
    </svg>
  )
}

function IconMenu() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconX() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
