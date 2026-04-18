import { SectionWrapper } from "./ui/SectionWrapper"
import { SectionHeading } from "./ui/SectionHeading"
import { CTAButton } from "./ui/CTAButton"
import { siteContent } from "@/data/content"

export default function WaysToWorkSection() {
  const { waysToWork } = siteContent

  return (
    <SectionWrapper tone="dark" id="offer" className="section-traced">
      <SectionHeading headline={waysToWork.headline} align="center" dark />

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {waysToWork.offers.map((offer, i) => (
          <div
            key={offer.title}
            className={`offer-card-dark rounded-2xl p-7 flex flex-col${i === 0 ? " card-traced card-traced--dark" : ""}`}
          >
            {/* Title */}
            <h3 className="font-bold text-white text-lg mb-3 leading-snug">
              {offer.title}
            </h3>

            {/* Body */}
            <p
              className="text-sm leading-relaxed mb-6 flex-1"
              style={{ color: "rgba(215,210,195,0.80)" }}
            >
              {offer.body}
            </p>

            {/* Divider */}
            <div
              className="h-px mb-5"
              style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              aria-hidden
            />

            {/* Pricing */}
            <div className="mb-6">
              <p
                className="font-bold text-base"
                style={{ color: i === 0 ? "var(--ga-accent)" : "var(--ga-text)" }}
              >
                {offer.pricing}
              </p>
              <p
                className="text-xs mt-0.5 uppercase tracking-widest font-medium"
                style={{ color: "rgba(148,163,184,0.55)" }}
              >
                {offer.pricingNote}
              </p>
            </div>

            {/* CTA */}
            <CTAButton
              label={offer.cta.label}
              href={offer.cta.href}
              variant={i === 0 ? "primaryDark" : "secondaryDark"}
              size="md"
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
