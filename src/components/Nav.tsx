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
          ? "bg-white/96 backdrop-blur-md border-b border-ga-border shadow-sm"
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
            className={`font-semibold text-base tracking-tight transition-colors duration-300 ${
              scrolled ? "text-ga-text" : "text-white"
            }`}
          >
            {nav.brand}
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-ga-accent ${
                  scrolled ? "text-ga-text-muted" : "text-white/75 hover:text-white"
                }`}
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
                  ? "bg-ga-accent text-white hover:bg-ga-accent-dark"
                  : "bg-white/10 text-white border border-white/30 hover:bg-white/20"
              }`}
            >
              {nav.cta.label}
            </a>

            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-ga-text" : "text-white"
              }`}
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
