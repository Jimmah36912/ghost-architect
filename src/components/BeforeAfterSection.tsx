import { SectionWrapper } from "./ui/SectionWrapper"
import { SectionHeading } from "./ui/SectionHeading"
import { siteContent } from "@/data/content"

export default function BeforeAfterSection() {
  const { beforeAfter } = siteContent

  return (
    <SectionWrapper tone="dark" className="section-traced">
      <SectionHeading headline={beforeAfter.headline} dark accentLine />

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {/* Before — static, no trace (problem state should feel inert) */}
        <div className="before-card-dark p-8 rounded-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
              style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}
            >
              ✗
            </span>
            <h3 className="font-semibold text-white/60 text-sm uppercase tracking-widest">
              Before
            </h3>
          </div>
          <ul className="space-y-4">
            {beforeAfter.before.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.25)" }}
                  aria-hidden
                />
                <span className="text-white/55 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* After — traced border (resolved state, accent-positive) */}
        <div className="after-card-dark card-traced card-traced--dark p-8 rounded-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
              style={{ backgroundColor: "rgba(122,92,58,0.3)", color: "var(--ga-accent-light)" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M2 7l3.5 3.5L12 4"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h3 className="font-semibold text-sm uppercase tracking-widest" style={{ color: "var(--ga-accent-light)" }}>
              After
            </h3>
          </div>
          <ul className="space-y-4">
            {beforeAfter.after.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "var(--ga-accent)" }}
                  aria-hidden
                />
                <span className="text-white/85 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}
