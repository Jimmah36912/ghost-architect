import { SectionWrapper } from "./ui/SectionWrapper"

/**
 * Lightweight mid-page bridge to the $97 Revenue Leak Audit.
 * Appears after the problem framing sections to offer a low-commitment entry point
 * before the reader reaches the full Strategy Intensive offer.
 */
export default function AuditNudge() {
  return (
    <SectionWrapper tone="tinted">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-sm font-semibold mb-2" style={{ color: "var(--ga-text-muted)" }}>
          Not ready for the full session?
        </p>
        <a
          href="/audit"
          className="inline-flex items-center gap-2 font-semibold transition-opacity hover:opacity-80"
          style={{ color: "var(--ga-accent)" }}
        >
          Start with the $97 Revenue Leak Audit →
        </a>
        <p className="text-xs mt-3 leading-relaxed" style={{ color: "var(--ga-text-muted)" }}>
          Pick one area where money is leaking. Get a clear fix and action plan.
          Credited toward the Intensive if you continue.
        </p>
      </div>
    </SectionWrapper>
  )
}
