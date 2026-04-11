import { SectionWrapper } from "./ui/SectionWrapper"
import { SectionHeading } from "./ui/SectionHeading"
import { siteContent } from "@/data/content"

export default function WhyDifferentSection() {
  const { whyDifferent } = siteContent

  return (
    <SectionWrapper tone="tinted">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Heading + body */}
        <div>
          <SectionHeading headline={whyDifferent.headline} />
          <p className="text-ga-text-muted text-lg leading-relaxed mt-5">
            {whyDifferent.body}
          </p>
        </div>

        {/* Right: Key points */}
        <ul className="space-y-4 pt-2">
          {whyDifferent.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 p-4 rounded-xl bg-ga-surface"
              style={{ boxShadow: "var(--ga-shadow-card)" }}
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
              <span className="text-ga-text leading-relaxed text-sm">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}
