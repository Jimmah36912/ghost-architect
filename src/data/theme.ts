/**
 * Ghost Architect — Visual Theme Token Reference
 * ─────────────────────────────────────────────────────────────────────────
 * This file documents the design token system for tooling and type safety.
 * The source of truth for visual values is globals.css (:root).
 *
 * To change a color sitewide:
 *   1. Edit the CSS custom property in globals.css (:root)
 *   2. Update the matching value here to keep types accurate
 *
 * The design lab (/design-lab) uses these types to validate
 * live CSS variable overrides.
 */

export const theme = {

  /**
   * Brand color palette.
   * Mirror of the :root CSS custom properties in globals.css.
   */
  colors: {
    bg:                "#F3F1EC",
    surface:           "#FCFBF8",
    dark:              "#12171D",
    darkSecondary:     "#1B232C",
    text:              "#202833",
    textMuted:         "#66605A",
    textOnDark:        "#E2E8F0",
    textMutedOnDark:   "#94A3B8",
    accent:            "#7A5C3A",
    accentDark:        "#4B3927",
    accentLight:       "#EDE8E2",
    border:            "#D4CFC9",
    borderDark:        "rgba(255,255,255,0.10)",
  },

  /**
   * CSS custom property names for runtime manipulation in the design lab.
   * Usage: document.documentElement.style.setProperty(varName, value)
   */
  cssVars: {
    bg:               "--ga-bg",
    surface:          "--ga-surface",
    dark:             "--ga-dark",
    darkSecondary:    "--ga-dark-secondary",
    text:             "--ga-text",
    textMuted:        "--ga-text-muted",
    accent:           "--ga-accent",
    accentDark:       "--ga-accent-dark",
    accentLight:      "--ga-accent-light",
    border:           "--ga-border",
  } as const,

  /**
   * Pre-built gradient definitions (referenced by CSS vars).
   */
  gradients: {
    heroRadial:  "radial-gradient(ellipse at 80% 10%, rgba(122,92,58,0.18) 0%, transparent 60%)",
    darkSection: "linear-gradient(135deg, #12171D 0%, #1B232C 100%)",
  },

  /**
   * Box shadow tokens.
   */
  shadows: {
    card:        "0 1px 3px rgba(0,0,0,0.07), 0 1px 2px -1px rgba(0,0,0,0.05)",
    cardHover:   "0 8px 24px rgba(0,0,0,0.10)",
    cardAccent:  "0 0 0 1px rgba(122,92,58,0.18)",
    cardDark:    "0 0 0 1px rgba(255,255,255,0.07)",
  },

  /**
   * Border radius scale.
   */
  radii: {
    sm:   "4px",
    md:   "8px",
    lg:   "12px",
    xl:   "16px",
    "2xl": "24px",
    full: "9999px",
  },

  /**
   * Spacing / layout tokens.
   */
  spacing: {
    sectionPy:   "5rem",
    sectionPyLg: "7rem",
    containerMax: "72rem",
    containerPad: "1.5rem",
  },

  /**
   * Button variant descriptors.
   * See globals.css for .btn-* implementation.
   */
  buttons: {
    primary:       { cssClass: "btn btn-primary",        description: "Primary CTA — light backgrounds" },
    primaryDark:   { cssClass: "btn btn-primary-dark",   description: "Primary CTA — dark backgrounds" },
    secondary:     { cssClass: "btn btn-secondary",      description: "Outlined CTA — light backgrounds" },
    secondaryDark: { cssClass: "btn btn-secondary-dark", description: "Outlined CTA — dark backgrounds" },
    ghost:         { cssClass: "btn btn-ghost",          description: "Text-only — tertiary actions" },
  } as const,

  /**
   * Section tone presets.
   * Used by SectionWrapper to control background/text color.
   * See globals.css for .tone-* implementation.
   */
  sectionTones: {
    light:          { cssClass: "tone-light",          bg: "#F3F1EC", description: "Default page background" },
    white:          { cssClass: "tone-white",          bg: "#FCFBF8", description: "Clean warm-white surface" },
    tinted:         { cssClass: "tone-tinted",         bg: "#EDE8E2", description: "Accent-light tinted" },
    dark:           { cssClass: "tone-dark",           bg: "#12171D", description: "Primary dark (hero, final CTA)" },
    darkSecondary:  { cssClass: "tone-dark-secondary", bg: "#1B232C", description: "Secondary dark" },
  } as const,

  /**
   * Card style variants.
   * Used by the Card component.
   * See globals.css for .card-* implementation.
   */
  cardVariants: {
    default:   { cssClass: "card-default",  description: "White with subtle shadow" },
    outlined:  { cssClass: "card-outlined", description: "Transparent with border, hover accent" },
    elevated:  { cssClass: "card-elevated", description: "White with stronger shadow" },
    tinted:    { cssClass: "card-tinted",   description: "Accent-light background" },
    dark:      { cssClass: "card-dark",     description: "Dark background, light text" },
  } as const,

  /**
   * Hero layout variants.
   * Used by HeroSection to switch between visual treatments.
   */
  heroVariants: {
    splitImage:        { description: "Left copy, right founder portrait" },
    splitIllustration: { description: "Left copy, right abstract SVG" },
    centered:          { description: "Centered copy, no image, full-width" },
  } as const,

} as const

// ── Derived Types ─────────────────────────────────────────────────────────────

export type ButtonVariant   = keyof typeof theme.buttons
export type SectionTone     = keyof typeof theme.sectionTones
export type CardVariant     = keyof typeof theme.cardVariants
export type HeroVariant     = keyof typeof theme.heroVariants
export type ThemeCssVar     = keyof typeof theme.cssVars
