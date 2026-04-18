import { SectionWrapper } from "./ui/SectionWrapper"
import { SectionHeading } from "./ui/SectionHeading"
import { siteContent } from "@/data/content"

export default function TriedAlreadySection() {
  const { whyTypicalFails } = siteContent

  return (
    <SectionWrapper tone="light">
      <SectionHeading headline={whyTypicalFails.headline} />

      <div className="grid sm:grid-cols-3 gap-6 mt-12">
        {whyTypicalFails.columns.map((col) => (
          <div
            key={col.label}
            className="rounded-xl p-6"
            style={{
              backgroundColor: ('highlight' in col && col.highlight)
                ? "rgba(49,91,76,0.12)"
                : "rgba(255,255,255,0.04)",
              border: ('highlight' in col && col.highlight)
                ? "1px solid rgba(49,91,76,0.30)"
                : "1px solid var(--ga-border)",
            }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{
                color: ('highlight' in col && col.highlight) ? "var(--ga-accent-light)" : "var(--ga-text-muted)",
              }}
            >
              {col.label}
            </p>
            <ul className="space-y-3">
              {col.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    className="flex-shrink-0 mt-1"
                    style={{ color: ('highlight' in col && col.highlight) ? "var(--ga-accent)" : "var(--ga-text-muted)" }}
                    aria-hidden
                  >
                    {('highlight' in col && col.highlight) ? (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7l3 3L12 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    )}
                  </span>
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: ('highlight' in col && col.highlight) ? "var(--ga-text)" : "var(--ga-text-muted)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className="mt-10 rounded-xl p-6 text-center max-w-2xl mx-auto"
        style={{
          backgroundColor: "rgba(255,255,255,0.03)",
          border: "1px solid var(--ga-border)",
        }}
      >
        <p className="text-base leading-relaxed" style={{ color: "var(--ga-text)" }}>
          {whyTypicalFails.bottomStatement}
        </p>
      </div>
    </SectionWrapper>
  )
}
