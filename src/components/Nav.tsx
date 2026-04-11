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

function LogoMark() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      style={{ color: "var(--ga-accent-light)", flexShrink: 0 }}
    >
      {/* Outer architectural frame */}
      <rect x="1.5" y="1.5" width="17" height="17" rx="3" stroke="currentColor" strokeWidth="1.5" />
      {/* Inner cross lines — blueprint grid motif */}
      <line x1="1.5" y1="7" x2="18.5" y2="7" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.5" />
      <line x1="1.5" y1="13" x2="18.5" y2="13" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.5" />
      <line x1="7" y1="1.5" x2="7" y2="18.5" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.5" />
      <line x1="13" y1="1.5" x2="13" y2="18.5" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.5" />
      {/* Center accent node */}
      <circle cx="10" cy="10" r="1.75" fill="currentColor" />
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
