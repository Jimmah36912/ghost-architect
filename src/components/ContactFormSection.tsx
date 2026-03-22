"use client"

import { useState } from "react"
import { SectionWrapper } from "./ui/SectionWrapper"
import { siteContent } from "@/data/content"

export default function ContactFormSection() {
  const { contact } = siteContent
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: Replace with real form submission (Formspree, Resend, etc.)
    setSubmitted(true)
  }

  return (
    <SectionWrapper tone="tinted" id="contact">
      <div className="max-w-xl mx-auto">
        {/* Header card */}
        <div
          className="text-center p-8 rounded-2xl mb-6"
          style={{
            backgroundColor: "var(--ga-surface)",
            border: "1px solid rgba(122,92,58,0.15)",
          }}
        >
          {/* Accent line */}
          <div
            className="w-10 h-0.5 rounded-full mx-auto mb-5"
            style={{ backgroundColor: "var(--ga-accent)" }}
            aria-hidden
          />
          <h2
            className="font-bold text-ga-text mb-3"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)" }}
          >
            {contact.headline}
          </h2>
          <p className="text-ga-text-muted">{contact.body}</p>
        </div>

        {/* Form card */}
        <div
          className="p-8 rounded-2xl"
          style={{
            backgroundColor: "var(--ga-surface)",
            border: "1px solid var(--ga-border)",
          }}
        >
          {submitted ? (
            <div className="text-center py-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "var(--ga-accent)", color: "#fff" }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path d="M4 10l4.5 4.5L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="font-semibold text-ga-text mb-1">Message received.</p>
              <p className="text-ga-text-muted text-sm">I will follow up within one business day.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              // TODO: Set action to your form handler endpoint
              action={contact.formAction}
              method="POST"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-ga-text-muted uppercase tracking-wide mb-1.5" htmlFor="contact-name">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg text-ga-text text-sm"
                    style={{
                      backgroundColor: "var(--ga-surface)",
                      border: "1px solid var(--ga-border)",
                      outline: "none",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--ga-accent)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--ga-border)")}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ga-text-muted uppercase tracking-wide mb-1.5" htmlFor="contact-email">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@yourcompany.com"
                    className="w-full px-4 py-3 rounded-lg text-ga-text text-sm"
                    style={{
                      backgroundColor: "var(--ga-surface)",
                      border: "1px solid var(--ga-border)",
                      outline: "none",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--ga-accent)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--ga-border)")}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-ga-text-muted uppercase tracking-wide mb-1.5" htmlFor="contact-business">
                  Business Name
                </label>
                <input
                  id="contact-business"
                  name="business"
                  type="text"
                  placeholder="Your business"
                  className="w-full px-4 py-3 rounded-lg text-ga-text text-sm"
                  style={{
                    backgroundColor: "var(--ga-surface)",
                    border: "1px solid var(--ga-border)",
                    outline: "none",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--ga-accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--ga-border)")}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-ga-text-muted uppercase tracking-wide mb-1.5" htmlFor="contact-message">
                  What would you most like to improve?
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Describe what is breaking down, taking too much time, or where you feel the most pressure..."
                  className="w-full px-4 py-3 rounded-lg text-ga-text text-sm resize-none"
                  style={{
                    backgroundColor: "var(--ga-surface)",
                    border: "1px solid var(--ga-border)",
                    outline: "none",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--ga-accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--ga-border)")}
                />
              </div>

              <button
                type="submit"
                className="w-full btn btn-primary btn-lg"
              >
                {contact.submitLabel}
              </button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  )
}
