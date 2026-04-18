import { SectionWrapper } from "./ui/SectionWrapper"
import { SectionHeading } from "./ui/SectionHeading"
import { siteContent } from "@/data/content"

export default function AudienceFitSection() {
  const { audienceFit } = siteContent

  return (
    <SectionWrapper tone="light">
      <SectionHeading headline={audienceFit.headline} />

      <div className="grid md:grid-cols-2 gap-12 mt-10 items-start">
        {/* Left: Fit bullets */}
        <ul className="space-y-4">
          {audienceFit.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span
                className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: "rgba(49,91,76,0.18)",
                  color: "var(--ga-accent-light)",
                }}
                aria-hidden
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 5l2.2 2.5L8 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-ga-text leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Right: Industry + not-for */}
        <div className="space-y-6">
          <div
            className="p-5 rounded-xl"
            style={{
              backgroundColor: "rgba(49,91,76,0.10)",
              border: "1px solid rgba(49,91,76,0.22)",
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "var(--ga-text)" }}>
              {audienceFit.industryLine}
            </p>
          </div>
          <div
            className="p-5 rounded-xl"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid var(--ga-border)",
            }}
          >
            <p className="text-sm leading-relaxed italic" style={{ color: "var(--ga-text-muted)" }}>
              {audienceFit.notForLine}
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
