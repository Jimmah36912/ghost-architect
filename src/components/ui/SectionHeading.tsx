interface SectionHeadingProps {
  headline: string
  subtext?: string
  align?: "left" | "center"
  dark?: boolean
  accentLine?: boolean
  eyebrow?: string
}

export function SectionHeading({
  headline,
  subtext,
  align = "left",
  dark = false,
  accentLine = true,
  eyebrow,
}: SectionHeadingProps) {
  const center = align === "center"
  return (
    <div className={center ? "text-center" : ""}>
      {accentLine && (
        <span
          className={center ? "accent-line-centered" : "accent-line"}
          aria-hidden
        />
      )}
      {eyebrow && (
        <p
          className={`text-xs font-bold uppercase tracking-widest mb-3 ${
            dark ? "text-ga-accent" : "text-ga-accent"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-bold leading-tight mb-4 ${dark ? "text-white" : "text-ga-text"}`}
        style={{ fontSize: "var(--ga-font-size-section)" }}
      >
        {headline}
      </h2>
      {subtext && (
        <p
          className={`text-lg leading-relaxed max-w-2xl ${
            center ? "mx-auto" : ""
          } ${dark ? "text-white/65" : "text-ga-text-muted"}`}
        >
          {subtext}
        </p>
      )}
    </div>
  )
}
