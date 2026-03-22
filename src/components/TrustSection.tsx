import { SectionWrapper } from "./ui/SectionWrapper"
import { SectionHeading } from "./ui/SectionHeading"
import { siteContent } from "@/data/content"

export default function TrustSection() {
  const { trust } = siteContent

  return (
    <SectionWrapper tone="dark" className="section-traced">
      <SectionHeading headline={trust.headline} dark align="center" />

      <div className="grid sm:grid-cols-2 gap-6 mt-12">
        {trust.points.map((point) => (
          <div
            key={point.title}
            className="trust-point-card card-traced card-traced--dark p-8 rounded-xl"
          >
            {/* Accent accent-line top */}
            <div
              className="w-10 h-0.5 rounded-full mb-4"
              style={{ backgroundColor: "var(--ga-accent)" }}
              aria-hidden
            />
            <h3 className="font-semibold text-white mb-2">{point.title}</h3>
            <p className="text-base leading-relaxed" style={{ color: "rgba(226,232,240,0.6)" }}>
              {point.body}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
