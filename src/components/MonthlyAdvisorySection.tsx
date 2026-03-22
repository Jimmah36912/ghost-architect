import { SectionWrapper } from "./ui/SectionWrapper"
import { CTAButton } from "./ui/CTAButton"
import { siteContent } from "@/data/content"

export default function MonthlyAdvisorySection() {
  const { monthlyAdvisory } = siteContent

  return (
    <SectionWrapper tone="light">
      {/* Visually secondary — narrower, less prominent than Strategy Intensive */}
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-ga-text-muted mb-3">
          {monthlyAdvisory.headline}
        </p>
        <h2
          className="font-bold text-ga-text mb-4"
          style={{ fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)" }}
        >
          {monthlyAdvisory.subheadline}
        </h2>
        <p className="text-ga-text-muted leading-relaxed mb-8">
          {monthlyAdvisory.body}
        </p>
      </div>

      {/* Offer card — secondary style */}
      <div
        className="max-w-2xl mx-auto p-8 rounded-2xl"
        style={{
          backgroundColor: "var(--ga-surface)",
          border: "1px solid var(--ga-border)",
        }}
      >
        <div className="flex items-start justify-between mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-ga-text-muted">
            What is included
          </p>
          <div className="text-right">
            <span className="text-2xl font-bold text-ga-text">{monthlyAdvisory.price}</span>
          </div>
        </div>

        <ul className="space-y-3 mb-8">
          {monthlyAdvisory.deliverables.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                className="flex-shrink-0 mt-0.5"
                style={{ color: "var(--ga-accent)" }}
                aria-hidden
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M2 7.5l3 3L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-ga-text text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-xs text-ga-text-muted leading-relaxed mb-6 italic">
          {monthlyAdvisory.note}
        </p>

        <div className="flex justify-center">
          <CTAButton
            label={monthlyAdvisory.cta.label}
            href={monthlyAdvisory.cta.href}
            variant="secondary"
            size="md"
          />
        </div>
      </div>
    </SectionWrapper>
  )
}
