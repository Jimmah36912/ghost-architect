import { SectionWrapper } from "./ui/SectionWrapper"
import { SectionHeading } from "./ui/SectionHeading"
import { siteContent } from "@/data/content"

export default function TriedAlreadySection() {
  const { triedAlready } = siteContent

  return (
    <SectionWrapper tone="white">
      <div className="max-w-3xl">
        <SectionHeading headline={triedAlready.headline} />
        <p className="text-ga-text-muted text-lg leading-relaxed mt-4 mb-10">
          {triedAlready.intro}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {triedAlready.items.map((item) => (
          <div
            key={item.label}
            className="flex gap-4 p-5 rounded-xl"
            style={{
              backgroundColor: "var(--ga-surface)",
              border: "1px solid var(--ga-border)",
            }}
          >
            <span
              className="flex-shrink-0 mt-0.5 w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold"
              style={{
                backgroundColor: "rgba(30,41,59,0.05)",
                color: "#94A3B8",
              }}
              aria-hidden
            >
              ✗
            </span>
            <div>
              <p className="font-semibold text-ga-text text-sm mb-1">{item.label}</p>
              <p className="text-ga-text-muted text-sm leading-relaxed">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
