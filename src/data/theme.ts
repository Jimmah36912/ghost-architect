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
    bg:                "#0B1120",
    surface:           "#1A1F2B",
    dark:              "#0B1120",
    darkSecondary:     "#131923",
    text:              "#F8FAFC",
    textMuted:         "#94A3B8",
    textOnDark:        "#F8FAFC",
    textMutedOnDark:   "#94A3B8",
    accent:            "#F59E0B",
    accentDark:        "#D97706",
    accentLight:       "#1F6F78",
    border:            "rgba(255,255,255,0.10)",
    borderDark:        "rgba(255,255,255,0.08)",
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
    heroRadial:  "radial-gradient(ellipse at 80% 10%, rgba(31,111,120,0.18) 0%, transparent 60%)",
    darkSection: "linear-gradient(135deg, #0B1120 0%, #131923 100%)",
  },

  /**
   * Box shadow tokens.
   */
  shadows: {
    card:        "0 1px 3px rgba(0,0,0,0.20), 0 1px 2px -1px rgba(0,0,0,0.15)",
    cardHover:   "0 8px 24px rgba(0,0,0,0.35)",
    cardAccent:  "0 0 0 1px rgba(31,111,120,0.18)",
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
    light:          { cssClass: "tone-light",          bg: "#131923", description: "Lighter dark (alternate sections)" },
    white:          { cssClass: "tone-white",          bg: "#1A1F2B", description: "Charcoal surface (cleanest dark)" },
    tinted:         { cssClass: "tone-tinted",         bg: "#0F1E28", description: "Teal-tinted dark surface" },
    dark:           { cssClass: "tone-dark",           bg: "#0B1120", description: "Deep navy (hero, final CTA)" },
    darkSecondary:  { cssClass: "tone-dark-secondary", bg: "#131923", description: "Secondary dark" },
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
