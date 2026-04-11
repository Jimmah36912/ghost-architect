"use client"

import { useState } from "react"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

const FORMSPREE_URL      = "https://formspree.io/f/xdawrozy"
const STRIPE_PAYMENT_URL = "https://book.stripe.com/cNi3cwdiq3Hf1dV0Is9Ve00"

interface Fields {
  name: string
  email: string
  phone: string
  business_name: string
  website: string
  business_description: string
  ideal_customer: string
  biggest_bottleneck: string
  lead_process: string
  lead_source: string
  lead_volume: string
  audit_focus: string
  referral_source: string
}

const EMPTY: Fields = {
  name: "",
  email: "",
  phone: "",
  business_name: "",
  website: "",
  business_description: "",
  ideal_customer: "",
  biggest_bottleneck: "",
  lead_process: "",
  lead_source: "",
  lead_volume: "",
  audit_focus: "",
  referral_source: "",
}

export default function AuditPage() {
  const [fields, setFields]       = useState<Fields>(EMPTY)
  const [loading, setLoading]     = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError]         = useState(false)

  function set(key: keyof Fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFields((f) => ({ ...f, [key]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      const res = await fetch(FORMSPREE_URL, {
        method:  "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body:    JSON.stringify(fields),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    backgroundColor: "var(--ga-surface)",
    border:          "1px solid var(--ga-border)",
    outline:         "none",
  }

  const focusSwap = {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      (e.target.style.borderColor = "var(--ga-accent)"),
    onBlur:  (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      (e.target.style.borderColor = "var(--ga-border)"),
  }

  const labelClass = "block text-xs font-semibold text-ga-text-muted uppercase tracking-wide mb-1.5"
  const inputClass  = "w-full px-4 py-3 rounded-lg text-ga-text text-sm"

  return (
    <>
      <Nav />

      {/* Dark header */}
      <section className="tone-dark pt-28 pb-14">
        <div className="section-container max-w-2xl">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-80"
            style={{ color: "rgba(148,163,184,0.6)" }}
          >
            ← Back to home
          </a>
          <span className="accent-line" aria-hidden />
          <h1
            className="font-bold text-white mb-4 leading-tight"
            style={{ fontSize: "var(--ga-font-size-section)" }}
          >
            Get the $97 Revenue Leak Audit
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(226,232,240,0.70)" }}>
            Answer a few quick questions so I can review the right parts of your business before the
            audit. Once submitted, continue to payment to lock in your spot.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="tone-light section-py">
        <div className="section-container max-w-2xl">

          {submitted ? (
            /* ── Success state ── */
            <div
              className="p-10 rounded-2xl text-center"
              style={{ backgroundColor: "var(--ga-surface)", border: "1px solid var(--ga-border)" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ backgroundColor: "var(--ga-accent)", color: "#fff" }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                  <path
                    d="M4.5 11l4.5 4.5L17.5 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="font-bold text-ga-text text-xl mb-3">Application received.</h2>
              <p className="text-ga-text-muted leading-relaxed mb-8">
                To finalize your $97 Revenue Leak Audit, continue to secure payment below.
              </p>
              <a
                href={STRIPE_PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Continue to Payment
              </a>
            </div>
          ) : (
            /* ── Form card ── */
            <div
              className="p-8 rounded-2xl"
              style={{ backgroundColor: "var(--ga-surface)", border: "1px solid var(--ga-border)" }}
            >
              <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>

                {/* Row: Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass} htmlFor="audit-name">Full Name</label>
                    <input
                      id="audit-name"
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      value={fields.name}
                      onChange={set("name")}
                      className={inputClass}
                      style={inputStyle}
                      {...focusSwap}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="audit-email">Email Address</label>
                    <input
                      id="audit-email"
                      type="email"
                      name="email"
                      required
                      placeholder="you@yourcompany.com"
                      value={fields.email}
                      onChange={set("email")}
                      className={inputClass}
                      style={inputStyle}
                      {...focusSwap}
                    />
                  </div>
                </div>

                {/* Row: Phone + Business Name */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass} htmlFor="audit-phone">Phone Number <span className="normal-case font-normal">(optional)</span></label>
                    <input
                      id="audit-phone"
                      type="tel"
                      name="phone"
                      placeholder="(555) 000-0000"
                      value={fields.phone}
                      onChange={set("phone")}
                      className={inputClass}
                      style={inputStyle}
                      {...focusSwap}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="audit-business-name">Business Name</label>
                    <input
                      id="audit-business-name"
                      type="text"
                      name="business_name"
                      required
                      placeholder="Your business"
                      value={fields.business_name}
                      onChange={set("business_name")}
                      className={inputClass}
                      style={inputStyle}
                      {...focusSwap}
                    />
                  </div>
                </div>

                {/* Website */}
                <div>
                  <label className={labelClass} htmlFor="audit-website">Website / URL <span className="normal-case font-normal">(optional)</span></label>
                  <input
                    id="audit-website"
                    type="url"
                    name="website"
                    placeholder="https://yoursite.com"
                    value={fields.website}
                    onChange={set("website")}
                    className={inputClass}
                    style={inputStyle}
                    {...focusSwap}
                  />
                </div>

                {/* What does your business do? */}
                <div>
                  <label className={labelClass} htmlFor="audit-biz-desc">What does your business do?</label>
                  <textarea
                    id="audit-biz-desc"
                    name="business_description"
                    required
                    rows={3}
                    placeholder="Describe what your business does and who it serves…"
                    value={fields.business_description}
                    onChange={set("business_description")}
                    className={`${inputClass} resize-none`}
                    style={inputStyle}
                    {...focusSwap}
                  />
                </div>

                {/* Ideal customer */}
                <div>
                  <label className={labelClass} htmlFor="audit-ideal">Who is your ideal customer?</label>
                  <textarea
                    id="audit-ideal"
                    name="ideal_customer"
                    required
                    rows={3}
                    placeholder="Describe your best-fit customer or client…"
                    value={fields.ideal_customer}
                    onChange={set("ideal_customer")}
                    className={`${inputClass} resize-none`}
                    style={inputStyle}
                    {...focusSwap}
                  />
                </div>

                {/* Biggest bottleneck */}
                <div>
                  <label className={labelClass} htmlFor="audit-bottleneck">
                    Where is the biggest revenue leak in your business right now?
                  </label>
                  <textarea
                    id="audit-bottleneck"
                    name="biggest_bottleneck"
                    required
                    rows={3}
                    placeholder="Where do leads or deals most often stall or fall off?…"
                    value={fields.biggest_bottleneck}
                    onChange={set("biggest_bottleneck")}
                    className={`${inputClass} resize-none`}
                    style={inputStyle}
                    {...focusSwap}
                  />
                </div>

                {/* Lead process */}
                <div>
                  <label className={labelClass} htmlFor="audit-lead-process">What happens to new leads today?</label>
                  <textarea
                    id="audit-lead-process"
                    name="lead_process"
                    required
                    rows={3}
                    placeholder="Walk me through what happens from the moment a lead comes in…"
                    value={fields.lead_process}
                    onChange={set("lead_process")}
                    className={`${inputClass} resize-none`}
                    style={inputStyle}
                    {...focusSwap}
                  />
                </div>

                {/* Lead source + lead volume */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass} htmlFor="audit-lead-source">Where are most of your leads coming from?</label>
                    <input
                      id="audit-lead-source"
                      type="text"
                      name="lead_source"
                      required
                      placeholder="e.g. referrals, Facebook, Google…"
                      value={fields.lead_source}
                      onChange={set("lead_source")}
                      className={inputClass}
                      style={inputStyle}
                      {...focusSwap}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="audit-lead-volume">Leads per month (approx.)</label>
                    <select
                      id="audit-lead-volume"
                      name="lead_volume"
                      required
                      value={fields.lead_volume}
                      onChange={set("lead_volume")}
                      className={inputClass}
                      style={inputStyle}
                      {...focusSwap}
                    >
                      <option value="" disabled>Select a range</option>
                      <option value="0–10">0–10</option>
                      <option value="11–25">11–25</option>
                      <option value="26–50">26–50</option>
                      <option value="51–100">51–100</option>
                      <option value="100+">100+</option>
                    </select>
                  </div>
                </div>

                {/* Audit focus */}
                <div>
                  <label className={labelClass} htmlFor="audit-focus">What specifically would you like me to look at in this audit?</label>
                  <textarea
                    id="audit-focus"
                    name="audit_focus"
                    required
                    rows={4}
                    placeholder="Be as specific as you'd like — the more detail, the more useful the audit…"
                    value={fields.audit_focus}
                    onChange={set("audit_focus")}
                    className={`${inputClass} resize-none`}
                    style={inputStyle}
                    {...focusSwap}
                  />
                </div>

                {/* Referral source */}
                <div>
                  <label className={labelClass} htmlFor="audit-referral">How did you hear about us? <span className="normal-case font-normal">(optional)</span></label>
                  <input
                    id="audit-referral"
                    type="text"
                    name="referral_source"
                    placeholder="e.g. Facebook, a friend, Google…"
                    value={fields.referral_source}
                    onChange={set("referral_source")}
                    className={inputClass}
                    style={inputStyle}
                    {...focusSwap}
                  />
                </div>

                {/* Error message */}
                {error && (
                  <p className="text-sm" style={{ color: "#b91c1c" }}>
                    Something went wrong. Please email{" "}
                    <a href="mailto:jimmy@jimmy-long.com" style={{ color: "#b91c1c", textDecoration: "underline" }}>
                      jimmy@jimmy-long.com
                    </a>{" "}
                    directly.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn btn-primary btn-lg"
                  style={loading ? { opacity: 0.65, cursor: "not-allowed" } : {}}
                >
                  {loading ? "Sending…" : "Submit Application"}
                </button>

              </form>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
