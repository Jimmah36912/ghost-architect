"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import { SectionWrapper } from "./ui/SectionWrapper"
import { SectionHeading } from "./ui/SectionHeading"
import { siteContent } from "@/data/content"

// ── Timing ────────────────────────────────────────────────────────────────────
const DWELL_MS   = 1800   // how long each step holds active
const TRANS_MS   = 320    // cross-fade duration for content panel
const GAP_MS     = 80     // pause between steps

// ── Colors ────────────────────────────────────────────────────────────────────
const C_INACTIVE  = "var(--ga-border)"
const C_COMPLETE  = "var(--ga-accent-light)"   // deep evergreen
const C_ACTIVE    = "var(--ga-accent)"          // burnished copper

// ── Rail ──────────────────────────────────────────────────────────────────────
function RailDesktop({
  steps,
  activeStep,
}: {
  steps: typeof siteContent.process.steps
  activeStep: number
}) {
  const count = steps.length

  return (
    <div className="relative flex items-center justify-between" style={{ padding: "0 2rem" }}>
      {/* Connector track */}
      <div
        className="absolute top-1/2 -translate-y-1/2"
        style={{
          left:    "2rem",
          right:   "2rem",
          height:  "1px",
          backgroundColor: C_INACTIVE,
        }}
        aria-hidden
      />

      {/* Fill overlay — scales from left */}
      <div
        className="absolute top-1/2 -translate-y-1/2"
        style={{
          left:       "2rem",
          right:      "2rem",
          height:     "1px",
          backgroundColor: C_COMPLETE,
          transformOrigin: "left center",
          transform:  `scaleX(${activeStep / (count - 1)})`,
          transition: `transform ${TRANS_MS}ms ease`,
        }}
        aria-hidden
      />

      {/* Nodes */}
      {steps.map((step, i) => {
        const isDone   = i < activeStep
        const isActive = i === activeStep
        return (
          <div key={step.number} className="relative z-10 flex flex-col items-center gap-3">
            {/* Step number above */}
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{
                color: isActive ? C_ACTIVE : isDone ? C_COMPLETE : "var(--ga-text-muted)",
                opacity: isDone || isActive ? 1 : 0.45,
                transition: `color ${TRANS_MS}ms ease, opacity ${TRANS_MS}ms ease`,
              }}
            >
              {step.number}
            </span>

            {/* Node dot */}
            <div
              style={{
                width:           isActive ? "1rem" : "0.625rem",
                height:          isActive ? "1rem" : "0.625rem",
                borderRadius:    "50%",
                backgroundColor: isActive ? C_ACTIVE : isDone ? C_COMPLETE : "transparent",
                border:          isActive ? `2px solid ${C_ACTIVE}` : isDone ? `2px solid ${C_COMPLETE}` : `1.5px solid var(--ga-text-muted)`,
                boxShadow:       isActive ? `0 0 0 4px rgba(185,106,46,0.18)` : "none",
                transition:      `all ${TRANS_MS}ms ease`,
              }}
              aria-hidden
            />
          </div>
        )
      })}
    </div>
  )
}

// ── Content Panel ─────────────────────────────────────────────────────────────
function ContentPanel({
  step,
  visible,
}: {
  step: typeof siteContent.process.steps[number]
  visible: boolean
}) {
  return (
    <div
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "translateY(0)" : "translateY(6px)",
        transition: `opacity ${TRANS_MS}ms ease, transform ${TRANS_MS}ms ease`,
        minHeight:  "5rem",
      }}
    >
      <h3
        className="font-semibold text-lg leading-snug mb-2"
        style={{ color: "var(--ga-text)" }}
      >
        {step.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--ga-text-muted)" }}>
        {step.body}
      </p>
    </div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function ProcessSection() {
  const { process } = siteContent
  const sectionRef  = useRef<HTMLDivElement>(null)
  const timersRef   = useRef<ReturnType<typeof setTimeout>[]>([])

  const [activeStep,    setActiveStep]    = useState(0)
  const [panelVisible,  setPanelVisible]  = useState(true)
  const [displayedStep, setDisplayedStep] = useState(0)
  const [hasStarted,    setHasStarted]    = useState(false)

  const count = process.steps.length

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }, [])

  // Cross-fade to a new step
  const transitionTo = useCallback((index: number) => {
    setPanelVisible(false)
    const t = setTimeout(() => {
      setDisplayedStep(index)
      setActiveStep(index)
      setPanelVisible(true)
    }, TRANS_MS)
    timersRef.current.push(t)
  }, [])

  const runSequence = useCallback(() => {
    clearTimers()
    setActiveStep(0)
    setDisplayedStep(0)
    setPanelVisible(true)
    setHasStarted(true)

    for (let i = 1; i < count; i++) {
      const t = setTimeout(() => transitionTo(i), i * (DWELL_MS + GAP_MS))
      timersRef.current.push(t)
    }
  }, [count, clearTimers, transitionTo])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          runSequence()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      clearTimers()
    }
  }, [hasStarted, runSequence, clearTimers])

  const { timeline } = process

  return (
    <SectionWrapper tone="white" id="process">
      <div ref={sectionRef}>
        <SectionHeading headline={process.headline} align="center" />

        {/* ── Desktop Rail ── */}
        <div className="hidden md:block mt-16">
          <RailDesktop steps={process.steps} activeStep={activeStep} />

          {/* Content panel */}
          <div
            className="mt-10 mx-auto max-w-xl text-center"
            aria-live="polite"
            aria-atomic="true"
          >
            <ContentPanel step={process.steps[displayedStep]} visible={panelVisible} />
          </div>

          {/* Step titles row — always visible, muted unless active */}
          <div
            className="grid gap-4 mt-8"
            style={{ gridTemplateColumns: `repeat(${count}, 1fr)` }}
          >
            {process.steps.map((step, i) => (
              <button
                key={step.number}
                onClick={() => { clearTimers(); transitionTo(i) }}
                className="text-center text-xs font-medium leading-snug transition-colors duration-200 cursor-pointer bg-transparent border-0 p-0"
                style={{
                  color:   i === activeStep ? "var(--ga-accent)" : i < activeStep ? C_COMPLETE : "var(--ga-text-muted)",
                  opacity: i === activeStep ? 1 : i < activeStep ? 0.8 : 0.4,
                }}
              >
                {step.title}
              </button>
            ))}
          </div>
        </div>

        {/* ── Mobile: vertical stack ── */}
        <div className="md:hidden mt-10 space-y-0">
          {process.steps.map((step, i) => {
            const isDone   = i < activeStep
            const isActive = i === activeStep
            return (
              <div key={step.number} className="flex gap-5">
                {/* Left column: node + connector */}
                <div className="flex flex-col items-center" style={{ minWidth: "2.5rem" }}>
                  <div
                    style={{
                      width:           isActive ? "0.875rem" : "0.625rem",
                      height:          isActive ? "0.875rem" : "0.625rem",
                      borderRadius:    "50%",
                      marginTop:       "0.25rem",
                      flexShrink:      0,
                      backgroundColor: isActive ? C_ACTIVE : isDone ? C_COMPLETE : "transparent",
                      border:          isActive ? `2px solid ${C_ACTIVE}` : isDone ? `2px solid ${C_COMPLETE}` : `1.5px solid var(--ga-text-muted)`,
                      boxShadow:       isActive ? `0 0 0 4px rgba(185,106,46,0.18)` : "none",
                      transition:      `all ${TRANS_MS}ms ease`,
                    }}
                    aria-hidden
                  />
                  {i < count - 1 && (
                    <div
                      className="flex-1 my-1.5"
                      style={{
                        width:           "1px",
                        backgroundColor: isDone ? C_COMPLETE : C_INACTIVE,
                        minHeight:       "2rem",
                        transition:      `background-color ${TRANS_MS}ms ease`,
                      }}
                      aria-hidden
                    />
                  )}
                </div>

                {/* Right column: step content */}
                <div className="pb-8 pt-0">
                  <span
                    className="text-xs font-bold tracking-widest uppercase block mb-1"
                    style={{
                      color:   isActive ? C_ACTIVE : isDone ? C_COMPLETE : "var(--ga-text-muted)",
                      opacity: isDone || isActive ? 1 : 0.5,
                      transition: `color ${TRANS_MS}ms ease`,
                    }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="font-semibold mb-1.5 text-sm"
                    style={{
                      color:   isActive ? "var(--ga-text)" : "var(--ga-text-muted)",
                      transition: `color ${TRANS_MS}ms ease`,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--ga-text-muted)", opacity: isActive || isDone ? 1 : 0.6 }}>
                    {step.body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Timeline ── */}
      <div className="mt-16 pt-12" style={{ borderTop: "1px solid var(--ga-border)" }}>
        <h3
          className="font-semibold text-center mb-8 text-lg"
          style={{ color: "var(--ga-text-muted)" }}
        >
          {timeline.headline}
        </h3>
        <div className="grid sm:grid-cols-3 gap-6">
          {timeline.phases.map((phase) => (
            <div
              key={phase.period}
              className="rounded-xl p-5"
              style={{
                backgroundColor: "var(--ga-surface)",
                border:          "1px solid var(--ga-border)",
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: "var(--ga-accent)" }}
              >
                {phase.period}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--ga-text-muted)" }}>
                {phase.body}
              </p>
            </div>
          ))}
        </div>
        <p
          className="text-sm leading-relaxed text-center mt-6 max-w-2xl mx-auto"
          style={{ color: "var(--ga-text-muted)" }}
        >
          {timeline.expectation}
        </p>
      </div>
    </SectionWrapper>
  )
}
