import { SectionWrapper } from "./ui/SectionWrapper"
import { siteContent } from "@/data/content"

export default function WhyDifferentSection() {
  const { whyDifferent } = siteContent

  return (
    <SectionWrapper tone="tinted">
      <div className="max-w-3xl">
        <h2
          className="font-bold leading-tight mb-6"
          style={{
            fontSize: "var(--ga-font-size-section)",
            color: "var(--ga-text)",
          }}
        >
          {whyDifferent.headline}
        </h2>
        <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--ga-text-muted)" }}>
          {whyDifferent.body}
        </p>
        <p
          className="text-lg font-semibold leading-snug"
          style={{ color: "var(--ga-accent)" }}
        >
          {whyDifferent.positioningLine}
        </p>
      </div>
    </SectionWrapper>
  )
}
