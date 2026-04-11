import { HeroImage } from "./HeroImage"
import { siteContent } from "@/data/content"
import { assets } from "@/data/assets"
import { CTAButton } from "./ui/CTAButton"
import type { HeroVariant } from "@/data/theme"

interface HeroSectionProps {
  variant?: HeroVariant
}

export default function HeroSection({ variant = "splitImage" }: HeroSectionProps) {
  const { hero } = siteContent
  const showImage = variant === "splitImage" && assets.hero.portrait.path

  return (
    <section className="tone-dark relative overflow-hidden min-h-[92vh] flex items-center pt-20">
      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--ga-gradient-hero)" }}
        aria-hidden
      />

      {/* Subtle bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(13,21,32,0.6))" }}
        aria-hidden
      />

      <div className="section-container section-py-lg relative z-10 w-full">
        <div
          className={`grid gap-12 lg:gap-20 items-center ${
            showImage ? "md:grid-cols-2" : "max-w-3xl"
          }`}
        >
          {/* Left: Copy */}
          <div className={showImage ? "order-2 md:order-1" : ""}>
            {/* Logo mark — subtle teal signal before headline */}
            <div className="flex items-center gap-2.5 mb-5">
              <HeroLogoMark />
            </div>

            {hero.eyebrow && (
              <p className="text-xs font-bold uppercase tracking-widest text-ga-accent mb-5">
                {hero.eyebrow}
              </p>
            )}

            <h1
              className="font-bold text-white leading-tight mb-6"
              style={{
                fontSize: "var(--ga-font-size-hero)",
                lineHeight: "var(--ga-line-height-snug)",
              }}
            >
              {hero.headline}
            </h1>

            <p
              className="text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: "rgba(226,232,240,0.75)" }}
            >
              {hero.subheadline}
            </p>

            {/* CTA Pair */}
            <div className="flex flex-col sm:flex-row gap-4 mb-5">
              <CTAButton
                label={hero.primaryCTA.label}
                href={hero.primaryCTA.href}
                variant="primaryDark"
                size="lg"
              />
              <CTAButton
                label={hero.secondaryCTA.label}
                href={hero.secondaryCTA.href}
                variant="secondaryDark"
                size="lg"
                external={false}
              />
            </div>

            {/* Audit nudge */}
            <p className="text-sm mb-8" style={{ color: "rgba(148,163,184,0.65)" }}>
              Not ready for the full session?{" "}
              <a
                href="/audit"
                className="underline underline-offset-2 transition-opacity hover:opacity-80"
                style={{ color: "rgba(245,158,11,0.90)" }}
              >
                Start with the $97 Revenue Leak Audit
              </a>
            </p>

            {/* Support microcopy */}
            <p className="text-sm tracking-wide" style={{ color: "rgba(148,163,184,0.7)" }}>
              {hero.supportLine}
            </p>
          </div>

          {/* Right: Portrait / Illustration */}
          {showImage ? (
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              {/* Blueprint annotation frame */}
              <div className="relative">
                {/* Top annotation line */}
                <div
                  className="absolute -top-5 left-0 right-0 flex items-center gap-2"
                  aria-hidden
                >
                  <div className="flex-1 h-px" style={{ backgroundColor: "rgba(31,111,120,0.25)" }} />
                  <span
                    className="text-[10px] tracking-widest uppercase"
                    style={{ color: "rgba(31,111,120,0.45)", fontFamily: "monospace" }}
                  >
                    founder
                  </span>
                </div>

                {/* Image container */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: "clamp(240px, 40vw, 420px)",
                    height: "clamp(280px, 48vw, 500px)",
                    borderRadius: "var(--ga-radius-2xl)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
                  }}
                >
                  {/* Accent tint overlay */}
                  <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(160deg, rgba(31,111,120,0.15) 0%, transparent 50%)",
                    }}
                    aria-hidden
                  />
                  {/* Diagonal edge-light — premium product-photography highlight */}
                  <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 40%)",
                    }}
                    aria-hidden
                  />
                  {/* Bottom vignette */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none"
                    style={{
                      background: "linear-gradient(to bottom, transparent, rgba(13,21,32,0.55))",
                    }}
                    aria-hidden
                  />
                  <HeroImage
                    src={assets.hero.portrait.path}
                    alt={assets.hero.portrait.alt}
                    fallback={<ArchitectureGraphic />}
                  />
                </div>

                {/* Bottom annotation line */}
                <div
                  className="absolute -bottom-5 left-0 right-0 flex items-center gap-2"
                  aria-hidden
                >
                  <span
                    className="text-[10px] tracking-widest uppercase"
                    style={{ color: "rgba(31,111,120,0.45)", fontFamily: "monospace" }}
                  >
                    ghost architect
                  </span>
                  <div className="flex-1 h-px" style={{ backgroundColor: "rgba(31,111,120,0.25)" }} />
                </div>
              </div>
            </div>
          ) : variant === "splitIllustration" ? (
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <ArchitectureGraphic />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

/** JL monogram — same V1 mark as Nav, slightly larger for hero context */
function HeroLogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 100 100" fill="none" aria-hidden style={{ color: "rgba(31,111,120,0.70)" }}>
      {/* J */}
      <line x1="21" y1="21" x2="45" y2="21" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" />
      <line x1="33" y1="21" x2="33" y2="68" stroke="currentColor" strokeWidth="3.5" />
      <path d="M 33 68 A 11 11 0 0 1 22 79" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* L */}
      <line x1="51" y1="21" x2="69" y2="21" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" />
      <line x1="59" y1="21" x2="59" y2="79" stroke="currentColor" strokeWidth="3.5" />
      <line x1="59" y1="79" x2="81" y2="79" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" />
      {/* Architectural rule */}
      <line x1="10" y1="44" x2="90" y2="44" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" strokeOpacity="0.45" />
      {/* Center diamond */}
      <path d="M 50 40.5 L 54 44 L 50 47.5 L 46 44 Z" stroke="currentColor" strokeWidth="1.25" strokeOpacity="0.65" fill="none" />
    </svg>
  )
}

/** Abstract architectural placeholder — used when no portrait is available */
function ArchitectureGraphic() {
  return (
    <div
      className="relative"
      style={{
        width: "clamp(240px, 40vw, 420px)",
        height: "clamp(280px, 48vw, 500px)",
      }}
    >
      <svg
        viewBox="0 0 420 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-40"
      >
        {/* Architectural grid lines */}
        <rect x="40" y="40" width="340" height="420" rx="8" stroke="rgba(122,92,58,0.4)" strokeWidth="1" />
        <line x1="40" y1="120" x2="380" y2="120" stroke="rgba(122,92,58,0.2)" strokeWidth="1" />
        <line x1="40" y1="200" x2="380" y2="200" stroke="rgba(122,92,58,0.2)" strokeWidth="1" />
        <line x1="40" y1="280" x2="380" y2="280" stroke="rgba(122,92,58,0.2)" strokeWidth="1" />
        <line x1="40" y1="360" x2="380" y2="360" stroke="rgba(122,92,58,0.2)" strokeWidth="1" />
        <line x1="140" y1="40" x2="140" y2="460" stroke="rgba(122,92,58,0.2)" strokeWidth="1" />
        <line x1="240" y1="40" x2="240" y2="460" stroke="rgba(122,92,58,0.2)" strokeWidth="1" />
        {/* Nodes */}
        <circle cx="140" cy="120" r="5" fill="rgba(122,92,58,0.7)" />
        <circle cx="240" cy="200" r="5" fill="rgba(122,92,58,0.7)" />
        <circle cx="140" cy="280" r="5" fill="rgba(122,92,58,0.7)" />
        <circle cx="320" cy="360" r="5" fill="rgba(122,92,58,0.7)" />
        {/* Connection lines */}
        <path d="M140 120 L240 200 L140 280 L320 360" stroke="rgba(122,92,58,0.5)" strokeWidth="1.5" strokeLinecap="round" />
        {/* Label blocks */}
        <rect x="160" y="108" width="60" height="24" rx="4" fill="rgba(122,92,58,0.15)" />
        <rect x="60" y="268" width="60" height="24" rx="4" fill="rgba(122,92,58,0.15)" />
        <rect x="260" y="348" width="50" height="24" rx="4" fill="rgba(122,92,58,0.15)" />
      </svg>
    </div>
  )
}
