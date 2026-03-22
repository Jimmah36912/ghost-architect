import type { SectionTone } from "@/data/theme"

interface SectionWrapperProps {
  children: React.ReactNode
  tone?: SectionTone
  id?: string
  className?: string
  size?: "default" | "lg"
}

const toneClass: Record<SectionTone, string> = {
  light:         "tone-light",
  white:         "tone-white",
  tinted:        "tone-tinted",
  dark:          "tone-dark",
  darkSecondary: "tone-dark-secondary",
}

export function SectionWrapper({
  children,
  tone = "white",
  id,
  className = "",
  size = "default",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${toneClass[tone]} ${size === "lg" ? "section-py-lg" : "section-py"} ${className}`}
    >
      <div className="section-container">{children}</div>
    </section>
  )
}
