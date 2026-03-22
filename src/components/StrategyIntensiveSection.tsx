import { SectionWrapper } from "./ui/SectionWrapper"
import { SectionHeading } from "./ui/SectionHeading"
import { CTAButton } from "./ui/CTAButton"
import { siteContent } from "@/data/content"

export default function StrategyIntensiveSection() {
  const { strategyIntensive } = siteContent

  return (
    <SectionWrapper tone="dark" id="offer" className="section-traced">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Heading + context */}
        <div>
          <SectionHeading
            headline={strategyIntensive.headline}
            subtext={strategyIntensive.subheadline}
            dark
          />
          <p
            className="text-sm leading-relaxed mt-6 italic"
            style={{ color: "rgba(226,232,240,0.6)" }}
          >
            {strategyIntensive.idealFor}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <CTAButton
              label={strategyIntensive.primaryCTA.label}
              href={strategyIntensive.primaryCTA.href}
              variant="primaryDark"
              size="lg"
            />
            <CTAButton
              label={strategyIntensive.secondaryCTA.label}
              href={strategyIntensive.secondaryCTA.href}
              variant="secondaryDark"
              size="lg"
            />
          </div>
        </div>

        {/* Right: Offer card — dark glass */}
        <div className="offer-card-dark card-traced card-traced--dark p-8 rounded-2xl">
          {/* Badge + Price */}
          <div className="flex items-start justify-between mb-6">
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide"
              style={{
                backgroundColor: "var(--ga-accent)",
                color: "#fff",
              }}
            >
              {strategyIntensive.badge}
            </span>
            <div className="text-right">
              <span className="text-3xl font-bold text-white">
                {strategyIntensive.price}
              </span>
              <p className="text-xs mt-0.5" style={{ color: "rgba(148,163,184,0.6)" }}>
                one-time
              </p>
            </div>
          </div>

          {/* Divider */}
          <div
            className="h-px mb-6"
            style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
            aria-hidden
          />

          {/* Deliverables */}
          <p
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: "rgba(148,163,184,0.6)" }}
          >
            What is included
          </p>
          <ul className="space-y-3">
            {strategyIntensive.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "var(--ga-accent)" }}
                  aria-hidden
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M2.5 8l3.5 3.5L13.5 4"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-sm leading-relaxed" style={{ color: "rgba(226,232,240,0.85)" }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}
