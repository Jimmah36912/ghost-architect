"use client"

import { useRef, useEffect, useState } from "react"
import { SectionWrapper } from "./ui/SectionWrapper"
import { SectionHeading } from "./ui/SectionHeading"
import { siteContent } from "@/data/content"

// Resting colors for each step index
// Step 0 uses a slightly stronger accent tint as the natural "first" indicator
const RESTING_COLOR = (i: number) =>
  i === 0 ? "rgba(122,92,58,0.55)" : "rgba(122,92,58,0.28)"

const RESTING_COLOR_MOBILE = (i: number) =>
  i === 0 ? "rgba(122,92,58,0.60)" : "rgba(122,92,58,0.30)"

// Lit state values
const LIT_COLOR      = "var(--ga-accent)"
const LIT_SHADOW     = "0 0 32px rgba(122,92,58,0.30), 0 0 64px rgba(122,92,58,0.12)"
// Match layer count so CSS can interpolate shadow smoothly (never use "none")
const RESTING_SHADOW = "0 0 0px rgba(122,92,58,0), 0 0 0px rgba(122,92,58,0)"

// Sequence timing (ms)
const GLOW_DURATION = 650   // how long each numeral stays lit
const STEP_GAP      = 700   // gap between each step's light-on moment

export default function ProcessSection() {
  const { process } = siteContent
  const contentRef = useRef<HTMLDivElement>(null)
  const timersRef  = useRef<ReturnType<typeof setTimeout>[]>([])
  const [litStep, setLitStep] = useState<number | null>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const clearTimers = () => {
      timersRef.current.forEach(clearTimeout)
      timersRef.current = []
    }

    const runSequence = () => {
      clearTimers()
      const count = process.steps.length
      for (let i = 0; i < count; i++) {
        const onTimer  = setTimeout(() => setLitStep(i),    i * STEP_GAP)
        const offTimer = setTimeout(() => setLitStep(null), i * STEP_GAP + GLOW_DURATION)
        timersRef.current.push(onTimer, offTimer)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runSequence()
          } else {
            clearTimers()
            setLitStep(null)
          }
        })
      },
      { threshold: 0.25 }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      clearTimers()
    }
  }, [process.steps.length])

  const numeralStyle = (i: number, mobile = false): React.CSSProperties => {
    const isLit = litStep === i
    return {
      fontSize:    mobile ? "2.25rem" : "4.5rem",
      lineHeight:  1,
      color:       isLit ? LIT_COLOR : (mobile ? RESTING_COLOR_MOBILE(i) : RESTING_COLOR(i)),
      textShadow:  isLit ? LIT_SHADOW : RESTING_SHADOW,
      letterSpacing: "-0.02em",
    }
  }

  return (
    <SectionWrapper tone="white" id="process">
      <div ref={contentRef}>
        <SectionHeading headline={process.headline} align="center" />

        {/* Desktop: three-row blueprint layout */}
        <div className="hidden md:block mt-16">
          {/* Row 1: Ghost numerals */}
          <div className="grid grid-cols-5 gap-8 mb-2">
            {process.steps.map((step, i) => (
              <div key={step.number} className="flex justify-center">
                <span
                  className="font-bold select-none process-numeral"
                  style={numeralStyle(i)}
                  aria-hidden
                >
                  {step.number}
                </span>
              </div>
            ))}
          </div>

          {/* Row 2: Dashed connector line + dots */}
          <div className="relative grid grid-cols-5 gap-8 my-3">
            {/* Full-width dashed connector behind dots */}
            <div
              className="absolute top-1/2 left-[10%] right-[10%] -translate-y-1/2 h-px"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to right, var(--ga-border) 0, var(--ga-border) 6px, transparent 6px, transparent 14px)",
              }}
              aria-hidden
            />
            {process.steps.map((step, i) => (
              <div key={step.number} className="flex justify-center relative z-10">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: i === 0 ? "var(--ga-accent)" : "var(--ga-border)",
                    boxShadow:       i === 0 ? "0 0 0 4px rgba(122,92,58,0.15)" : "none",
                  }}
                  aria-hidden
                />
              </div>
            ))}
          </div>

          {/* Row 3: Title + body */}
          <div className="grid grid-cols-5 gap-8 mt-5">
            {process.steps.map((step, i) => (
              <div key={step.number} className="text-center">
                <h3
                  className="font-semibold mb-2 text-base leading-snug"
                  style={{ color: i === 0 ? "var(--ga-accent)" : "var(--ga-text)" }}
                >
                  {step.title}
                </h3>
                <p className="text-ga-text-muted text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stack with dashed connector */}
        <div className="md:hidden mt-10 space-y-0">
          {process.steps.map((step, i) => (
            <div key={step.number} className="flex gap-6">
              {/* Left: numeral + dashed connector */}
              <div className="flex flex-col items-center" style={{ minWidth: "3rem" }}>
                <span
                  className="font-bold leading-none select-none process-numeral"
                  style={numeralStyle(i, true)}
                  aria-hidden
                >
                  {step.number}
                </span>
                {i < process.steps.length - 1 && (
                  <div
                    className="flex-1 my-2"
                    style={{
                      width: "1px",
                      backgroundImage:
                        "repeating-linear-gradient(to bottom, var(--ga-border) 0, var(--ga-border) 6px, transparent 6px, transparent 14px)",
                      minHeight: "2rem",
                    }}
                    aria-hidden
                  />
                )}
              </div>

              {/* Right: content */}
              <div className="pb-8 pt-1">
                <h3
                  className="font-semibold mb-2"
                  style={{ color: i === 0 ? "var(--ga-accent)" : "var(--ga-text)" }}
                >
                  {step.title}
                </h3>
                <p className="text-ga-text-muted text-sm leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
