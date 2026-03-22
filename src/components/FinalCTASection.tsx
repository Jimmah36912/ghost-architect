import { SectionWrapper } from "./ui/SectionWrapper"
import { CTAButton } from "./ui/CTAButton"
import { siteContent } from "@/data/content"

export default function FinalCTASection() {
  const { finalCTA } = siteContent

  return (
    <SectionWrapper tone="dark" size="lg">
      <div className="max-w-2xl mx-auto text-center">
        <span className="accent-line-centered" aria-hidden />

        <h2
          className="font-bold text-white mb-6 leading-tight"
          style={{
            fontSize: "var(--ga-font-size-section)",
            lineHeight: "var(--ga-line-height-snug)",
          }}
        >
          {finalCTA.headline}
        </h2>

        <p
          className="text-lg leading-relaxed mb-10"
          style={{ color: "rgba(226,232,240,0.7)" }}
        >
          {finalCTA.body}
        </p>

        <CTAButton
          label={finalCTA.cta.label}
          href={finalCTA.cta.href}
          variant="primaryDark"
          size="lg"
        />

        <p
          className="mt-6 text-sm"
          style={{ color: "rgba(148,163,184,0.65)" }}
        >
          {finalCTA.trustLine}
        </p>
      </div>
    </SectionWrapper>
  )
}
