/**
 * Ghost Architect — Asset Slot Registry
 * ─────────────────────────────────────────────────────────────────────────
 * Centralizes all media asset references so components never hard-code paths.
 * To swap an asset: change the path here — no component edits needed.
 *
 * Null values signal a component to render a tasteful placeholder instead.
 */

export const assets = {

  /**
   * Brand logo.
   * imagePath: null → components fall back to the text wordmark.
   * Set to '/logo.svg' or '/logo.png' once a logo asset exists.
   */
  logo: {
    imagePath: null as string | null, // TODO: Add logo asset path (e.g. '/logo.svg')
    altText: "Ghost Architect",
  },

  /**
   * Hero section portrait / main visual.
   * Drop Ghost_Architect.png into the /public directory.
   */
  hero: {
    portrait: {
      path: "/Ghost_Architect.png",
      alt: "Jimmy Long — Ghost Architect",
      width: 600,
      height: 700,
    },
  },

  /**
   * Favicon.
   * TODO: Replace /favicon.ico with a custom Ghost Architect favicon.
   */
  favicon: {
    path: "/favicon.ico",
  },

  /**
   * CSS-generated textures — no file needed.
   * To use a custom texture image, set the path and reference it in the
   * relevant component via a style prop or className.
   */
  textures: {
    gridOverlay:   null as string | null, // CSS-only (see --ga-grid-pattern in globals.css)
    blueprint:     null as string | null, // TODO: Optional blueprint PNG/SVG overlay
  },

  /**
   * Optional supplemental graphics.
   * Components check for null and render structured placeholders if absent.
   */
  graphics: {
    processIllustration: null as string | null, // TODO: Process flow diagram
    architectureGraphic: null as string | null, // TODO: System architecture illustration
    ogImage:             null as string | null, // TODO: Open Graph image (1200×630)
  },

}

export type AssetKey = keyof typeof assets
