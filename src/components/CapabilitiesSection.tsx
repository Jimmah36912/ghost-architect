import { SectionWrapper } from "./ui/SectionWrapper"
import { siteContent } from "@/data/content"

export default function CapabilitiesSection() {
  const { revenueSequencing } = siteContent

  return (
    <SectionWrapper tone="white">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Headline + body */}
        <div>
          <span className="accent-line" aria-hidden />
          <h2
            className="font-bold leading-tight mb-6"
            style={{
              fontSize: "var(--ga-font-size-section)",
              color: "var(--ga-text)",
            }}
          >
            {revenueSequencing.headline}
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--ga-text-muted)" }}>
            {revenueSequencing.body}
          </p>
        </div>

        {/* Right: Bullets */}
        <ul className="space-y-4 pt-2">
          {revenueSequencing.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-3 p-4 rounded-xl"
              style={{
                backgroundColor: "var(--ga-surface)",
                border: "1px solid var(--ga-border)",
              }}
            >
              <span
                className="flex-shrink-0 mt-0.5"
                style={{ color: "var(--ga-accent)" }}
                aria-hidden
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M3 9l4.5 4.5L15 5"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-ga-text leading-relaxed text-sm">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}
