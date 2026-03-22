import { SectionWrapper } from "./ui/SectionWrapper"
import { CTAButton } from "./ui/CTAButton"
import { siteContent } from "@/data/content"

export default function BottleneckAuditSection() {
  const { bottleneckAudit } = siteContent

  return (
    <SectionWrapper tone="light" id="audit">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-ga-text-muted mb-3">
            {bottleneckAudit.eyebrow}
          </p>
          <h2
            className="font-bold text-ga-text mb-4"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)" }}
          >
            {bottleneckAudit.headline}
          </h2>
          <p className="text-ga-text-muted leading-relaxed">
            {bottleneckAudit.body}
          </p>
        </div>

        {/* Offer card — secondary style, matching Monthly Advisory weight */}
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
                backgroundColor: "var(--ga-accent-light)",
                color: "var(--ga-accent)",
              }}
            >
              {bottleneckAudit.badge}
            </span>
            <span className="text-2xl font-bold text-ga-text">
              {bottleneckAudit.price}
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
            {bottleneckAudit.deliverables.map((item) => (
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

          {/* Credit-forward line */}
          <p
            className="text-sm leading-relaxed italic mb-8"
            style={{ color: "var(--ga-accent)" }}
          >
            {bottleneckAudit.creditLine}
          </p>

          {/* CTA */}
          <div className="flex justify-center">
            <CTAButton
              label={bottleneckAudit.cta.label}
              href={bottleneckAudit.cta.href}
              variant="secondary"
              size="md"
            />
          </div>
        </div>

      </div>
    </SectionWrapper>
  )
}
