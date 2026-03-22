import { SectionWrapper } from "./ui/SectionWrapper"
import { SectionHeading } from "./ui/SectionHeading"
import { siteContent } from "@/data/content"

export default function WhyStartHereSection() {
  const { whyStartHere } = siteContent

  return (
    <SectionWrapper tone="white">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <SectionHeading headline={whyStartHere.headline} />
          <p className="text-ga-text-muted text-lg leading-relaxed mt-5">
            {whyStartHere.body}
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-ga-text-muted mb-5">
            Most owners do not know:
          </p>
          {whyStartHere.points.map((point) => (
            <div
              key={point}
              className="flex items-start gap-4 p-5 rounded-xl"
              style={{
                backgroundColor: "var(--ga-accent-light)",
                border: "1px solid rgba(122,92,58,0.12)",
              }}
            >
              <span
                className="flex-shrink-0 mt-0.5"
                style={{ color: "var(--ga-accent)" }}
                aria-hidden
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="7" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.25" />
                  <path d="M6 9l2.5 2.5L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-ga-text text-sm leading-relaxed">{point}</span>
            </div>
          ))}

          <p
            className="text-sm leading-relaxed pt-2 font-medium"
            style={{ color: "var(--ga-accent-dark)" }}
          >
            {whyStartHere.closing}
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
