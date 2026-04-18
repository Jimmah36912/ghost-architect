import { SectionWrapper } from "./ui/SectionWrapper"
import { siteContent } from "@/data/content"

export default function PainPointsSection() {
  const { marketReframe } = siteContent

  return (
    <SectionWrapper tone="white">
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="font-bold leading-tight mb-6"
          style={{
            fontSize: "var(--ga-font-size-section)",
            color: "var(--ga-text)",
          }}
        >
          {marketReframe.headline}
        </h2>
        <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--ga-text-muted)" }}>
          {marketReframe.body}
        </p>
        <p
          className="text-lg leading-relaxed font-semibold"
          style={{ color: "var(--ga-text)" }}
        >
          {marketReframe.emphasis}
        </p>
      </div>
    </SectionWrapper>
  )
}
