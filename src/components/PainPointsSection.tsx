"use client"

import { useRef, useEffect, useState } from "react"
import { SectionWrapper } from "./ui/SectionWrapper"
import { siteContent } from "@/data/content"

// ── Icons ─────────────────────────────────────────────────────────────────────
function IconFollowUp() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M2 4h16v10a2 2 0 01-2 2H4a2 2 0 01-2-2V4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M2 4l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 13l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconEstimates() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="3" y="2" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 7h6M7 10h6M7 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 15l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconResponse() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 5.5V10l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconBottleneck() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="10" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 17c0-2.761 2.239-5 5-5s5 2.239 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 10v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 13h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconCommunication() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v6a2 2 0 01-2 2H7l-4 3V5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7 8h6M7 11h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

const ICON_MAP = {
  "follow-up":     <IconFollowUp />,
  "estimates":     <IconEstimates />,
  "response":      <IconResponse />,
  "bottleneck":    <IconBottleneck />,
  "communication": <IconCommunication />,
} as const

// ── Card ──────────────────────────────────────────────────────────────────────
function ProblemCard({
  card,
  index,
  visible,
}: {
  card: (typeof siteContent.marketReframe.problemCards)[number]
  index: number
  visible: boolean
}) {
  return (
    <div
      style={{
        backgroundColor: "var(--ga-surface)",
        border:          "1px solid var(--ga-border)",
        borderRadius:    "var(--ga-radius-lg)",
        padding:         "1.25rem 1.375rem",
        opacity:          visible ? 1 : 0,
        transform:        visible ? "translateY(0)" : "translateY(18px)",
        transition:      `opacity 420ms ease ${index * 80}ms, transform 420ms ease ${index * 80}ms`,
      }}
    >
      {/* Icon */}
      <div
        className="mb-3 inline-flex items-center justify-center rounded-md"
        style={{
          width:           "2.25rem",
          height:          "2.25rem",
          backgroundColor: "rgba(185,106,46,0.10)",
          color:           "var(--ga-accent)",
        }}
      >
        {ICON_MAP[card.icon]}
      </div>

      {/* Title */}
      <h3
        className="font-semibold text-sm leading-snug mb-1.5"
        style={{ color: "var(--ga-text)" }}
      >
        {card.title}
      </h3>

      {/* Body */}
      <p className="text-sm leading-relaxed" style={{ color: "var(--ga-text-muted)" }}>
        {card.body}
      </p>
    </div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function PainPointsSection() {
  const { marketReframe } = siteContent
  const cardsRef  = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = cardsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <SectionWrapper tone="white">
      {/* Intro copy — unchanged */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2
          className="font-bold leading-tight mb-6"
          style={{
            fontSize: "var(--ga-font-size-section)",
            color:    "var(--ga-text)",
          }}
        >
          {marketReframe.headline}
        </h2>
        <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--ga-text-muted)" }}>
          {marketReframe.body}
        </p>
        <p
          className="text-lg leading-relaxed font-semibold"
          style={{ color: "var(--ga-text)" }}
        >
          {marketReframe.emphasis}
        </p>
      </div>

      {/* Problem cards — 3 + 2 on desktop */}
      <div ref={cardsRef}>
        {/* Row 1: 3 cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-4">
          {marketReframe.problemCards.slice(0, 3).map((card, i) => (
            <ProblemCard key={card.title} card={card} index={i} visible={visible} />
          ))}
        </div>
        {/* Row 2: 2 cards centered */}
        <div className="grid sm:grid-cols-2 gap-4 sm:max-w-[66%] mx-auto">
          {marketReframe.problemCards.slice(3).map((card, i) => (
            <ProblemCard key={card.title} card={card} index={i + 3} visible={visible} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
