import { SectionWrapper } from "./ui/SectionWrapper"
import { SectionHeading } from "./ui/SectionHeading"
import { Card } from "./ui/Card"
import { siteContent } from "@/data/content"
import type { CardVariant } from "@/data/theme"

interface PainPointsSectionProps {
  cardVariant?: CardVariant
}

export default function PainPointsSection({ cardVariant = "outlined" }: PainPointsSectionProps) {
  const { painPoints } = siteContent

  return (
    <SectionWrapper tone="white">
      <SectionHeading headline={painPoints.headline} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {painPoints.cards.map((card) => (
          <Card key={card.title} variant={cardVariant} className="card-traced card-traced--light">
            <h3 className="font-semibold text-ga-text mb-2 text-base">{card.title}</h3>
            <p className="text-ga-text-muted text-sm leading-relaxed">{card.body}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
