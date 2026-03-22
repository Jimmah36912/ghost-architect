import { siteContent } from "@/data/content"

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const socialIcons = {
  facebook: <FacebookIcon />,
  linkedin: <LinkedInIcon />,
}

export default function Footer() {
  const { footer } = siteContent
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-12 border-t"
      style={{
        backgroundColor: "var(--ga-dark)",
        borderColor: "var(--ga-border-dark)",
        color: "var(--ga-text-muted-on-dark)",
      }}
    >
      <div className="section-container">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-semibold text-white text-base mb-1">{footer.brand}</p>
            <p className="text-sm" style={{ color: "rgba(148,163,184,0.6)" }}>
              {footer.tagline}
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(148,163,184,0.5)" }}>
              Contact
            </p>
            <a
              href={`mailto:${footer.email}`}
              className="text-sm hover:text-white transition-colors block mb-1"
              style={{ color: "rgba(226,232,240,0.7)" }}
            >
              {footer.email}
            </a>
            {footer.phone && (
              <a
                href={`tel:${footer.phone}`}
                className="text-sm hover:text-white transition-colors block"
                style={{ color: "rgba(226,232,240,0.7)" }}
              >
                {footer.phone}
              </a>
            )}
            {!footer.phone && (
              <p className="text-xs" style={{ color: "rgba(148,163,184,0.3)" }}>
                {/* TODO: Add phone number to content.ts */}
              </p>
            )}
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(148,163,184,0.5)" }}>
              Connect
            </p>
            <div className="flex gap-3">
              {footer.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:text-white"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.06)",
                    color: "rgba(148,163,184,0.7)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {socialIcons[s.icon]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-6"
          style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
          aria-hidden
        />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "rgba(148,163,184,0.4)" }}>
            © {year} {footer.brand}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {footer.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs transition-colors hover:text-white"
                style={{ color: "rgba(148,163,184,0.4)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Ghost Architect flavor microcopy */}
          <p
            className="text-xs font-mono"
            style={{ color: "rgba(122,92,58,0.4)" }}
            title="Ghost Architect"
          >
            {footer.flavor}
          </p>
        </div>
      </div>
    </footer>
  )
}
