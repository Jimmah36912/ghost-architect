import { SectionWrapper } from "./ui/SectionWrapper"
import { SectionHeading } from "./ui/SectionHeading"
import { Card } from "./ui/Card"
import { CTAButton } from "./ui/CTAButton"
import { siteContent } from "@/data/content"
import type { CardVariant } from "@/data/theme"

interface CapabilitiesSectionProps {
  cardVariant?: CardVariant
}

const capabilityIcons = [
  // Reduce admin
  <svg key="admin" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
    <rect x="2" y="5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 9h8M7 13h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  // Follow-up
  <svg key="followup" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
    <path d="M20 4L11 13M20 4H14M20 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 4H4a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  // Communication
  <svg key="comm" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
    <path d="M3 4h16a1 1 0 011 1v10a1 1 0 01-1 1H6l-4 3V5a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>,
  // Team support
  <svg key="team" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
    <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="15" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 18c0-3.314 2.686-6 6-6h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 14c0-1.1.9-2 2-2h2a3 3 0 013 3v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  // Workflow
  <svg key="workflow" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
    <rect x="2" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="14" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="8" y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 8v4h12V8M11 14V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  // Owner dependency
  <svg key="owner" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
    <circle cx="11" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 18c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M15 11l2 2-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
]

export default function CapabilitiesSection({ cardVariant = "default" }: CapabilitiesSectionProps) {
  const { capabilities } = siteContent

  return (
    <SectionWrapper tone="white">
      <SectionHeading headline={capabilities.headline} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {capabilities.cards.map((card, i) => (
          <Card key={card.title} variant={cardVariant}>
            <div
              className="w-10 h-10 flex items-center justify-center rounded-lg mb-4"
              style={{
                backgroundColor: "var(--ga-accent-light)",
                color: "var(--ga-accent)",
              }}
            >
              {capabilityIcons[i]}
            </div>
            <h3 className="font-semibold text-ga-text mb-2">{card.title}</h3>
            <p className="text-ga-text-muted text-sm leading-relaxed">{card.body}</p>
          </Card>
        ))}
      </div>

      {/* Mid-page CTA */}
      <div className="mt-12 text-center">
        <CTAButton
          label={capabilities.midCTA.label}
          href={capabilities.midCTA.href}
          variant="primary"
          size="lg"
        />
      </div>
    </SectionWrapper>
  )
}
