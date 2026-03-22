"use client"

import { useState } from "react"
import { SectionWrapper } from "./ui/SectionWrapper"
import { SectionHeading } from "./ui/SectionHeading"
import { siteContent } from "@/data/content"

export default function FAQSection() {
  const { faq } = siteContent
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i))

  return (
    <SectionWrapper tone="white">
      <SectionHeading headline={faq.headline} align="center" />

      <div className="max-w-2xl mx-auto mt-12 space-y-3">
        {faq.items.map((item, i) => {
          const isOpen = open === i
          return (
            <div
              key={item.q}
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid var(--ga-border)" }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors"
                style={{
                  backgroundColor: isOpen ? "var(--ga-accent-light)" : "var(--ga-surface)",
                }}
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span
                  className="font-medium text-ga-text text-sm leading-relaxed"
                  style={{ color: isOpen ? "var(--ga-accent-dark)" : "var(--ga-text)" }}
                >
                  {item.q}
                </span>
                <span
                  className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full transition-transform duration-200"
                  style={{
                    color: "var(--ga-accent)",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                  aria-hidden
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  </svg>
                </span>
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className="px-6 pb-5"
                  style={{ backgroundColor: "var(--ga-accent-light)" }}
                >
                  <p className="text-sm leading-relaxed" style={{ color: "var(--ga-text-muted)" }}>
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
