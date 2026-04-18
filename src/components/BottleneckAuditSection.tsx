import { SectionWrapper } from "./ui/SectionWrapper"
import { CTAButton } from "./ui/CTAButton"
import { siteContent } from "@/data/content"

export default function BottleneckAuditSection() {
  const { revenueLeakExposure } = siteContent

  return (
    <SectionWrapper tone="light" id="audit">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-ga-text-muted mb-3">
            {revenueLeakExposure.eyebrow}
          </p>
          <h2
            className="font-bold text-ga-text mb-4"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)" }}
          >
            {revenueLeakExposure.headline}
          </h2>
          <p className="text-ga-text-muted leading-relaxed">
            {revenueLeakExposure.body}
          </p>
        </div>

        {/* Offer card */}
        <div
          className="p-8 rounded-2xl"
          style={{
            backgroundColor: "var(--ga-surface)",
            border: "1px solid var(--ga-border)",
          }}
        >
          {/* Badge + Price */}
          <div className="flex items-center justify-between mb-6">
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide"
              style={{
                backgroundColor: "rgba(49,91,76,0.20)",
                color: "var(--ga-accent-light)",
              }}
            >
              {revenueLeakExposure.badge}
            </span>
            <span className="text-2xl font-bold text-ga-text">
              {revenueLeakExposure.price}
            </span>
          </div>

          {/* Divider */}
          <div
            className="h-px mb-6"
            style={{ backgroundColor: "var(--ga-border)" }}
            aria-hidden
          />

          {/* Deliverables */}
          <p className="text-xs font-bold uppercase tracking-widest text-ga-text-muted mb-4">
            What is included
          </p>
          <ul className="space-y-3 mb-6">
            {revenueLeakExposure.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "var(--ga-accent)" }}
                  aria-hidden
                >
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path
                      d="M2 7.5l3 3L13 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-ga-text text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          {/* Credit line */}
          <p
            className="text-sm leading-relaxed italic mb-6"
            style={{ color: "var(--ga-accent)" }}
          >
            {revenueLeakExposure.creditLine}
          </p>

          {/* Guarantee */}
          <div
            className="rounded-xl p-4 mb-8"
            style={{
              backgroundColor: "rgba(49,91,76,0.08)",
              border: "1px solid rgba(49,91,76,0.20)",
            }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "var(--ga-accent-light)" }}
            >
              {revenueLeakExposure.guarantee.headline}
            </p>
            <p className="text-sm leading-relaxed text-ga-text-muted">
              {revenueLeakExposure.guarantee.body}
            </p>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <CTAButton
              label={revenueLeakExposure.cta.label}
              href={revenueLeakExposure.cta.href}
              variant="primary"
              size="lg"
            />
          </div>
        </div>

      </div>
    </SectionWrapper>
  )
}
