import { SectionWrapper } from "./ui/SectionWrapper"
import { SectionHeading } from "./ui/SectionHeading"
import { siteContent } from "@/data/content"

export default function AudienceFitSection() {
  const { audienceFit } = siteContent

  return (
    <SectionWrapper tone="light">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Heading + intro */}
        <div>
          <SectionHeading headline={audienceFit.headline} />
          <p className="text-ga-text-muted leading-relaxed mt-6 text-lg">
            {audienceFit.intro}
          </p>
        </div>

        {/* Right: Bullets */}
        <ul className="space-y-4 pt-1">
          {audienceFit.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span
                className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: "var(--ga-accent-light)",
                  color: "var(--ga-accent)",
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
      </div>
    </SectionWrapper>
  )
}
