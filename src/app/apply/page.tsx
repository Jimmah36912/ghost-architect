"use client"

// ─────────────────────────────────────────────────────────────────────────────
// Ghost Architect — /apply
// AI Strategy Call intake form.
// Replace YOUR_FORM_ID with your Formspree form ID to activate submissions.
// ─────────────────────────────────────────────────────────────────────────────

const FORMSPREE_URL = "https://formspree.io/f/xojkzgok"

import { useState } from "react"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

// ── Field state shape ─────────────────────────────────────────────────────────

const EMPTY_FORM = {
  name:                "",
  email:               "",
  phone:               "",
  used_ai:             "",
  ai_knowledge:        "",
  company_description: "",
  website:             "",
  ideal_market:        "",
  challenges:          "",
  marketing_support:   "",
  referral_source:     "",
  ai_goals:            "",
}

type FormData = typeof EMPTY_FORM

// ── Shared input style helpers ────────────────────────────────────────────────

const inputBase: React.CSSProperties = {
  backgroundColor: "var(--ga-surface)",
  border:          "1px solid var(--ga-border)",
  outline:         "none",
}

function onFocus(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = "var(--ga-accent)"
}
function onBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = "var(--ga-border)"
}

const inputClass = "w-full px-4 py-3 rounded-lg text-ga-text text-sm"
const labelClass = "block text-xs font-semibold uppercase tracking-wide mb-1.5"

// ─────────────────────────────────────────────────────────────────────────────

export default function ApplyPage() {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)
  const [error,     setError]     = useState("")

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const res = await fetch(FORMSPREE_URL, {
        method:  "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body:    JSON.stringify(formData),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError("Something went wrong. Please email jimmy@jimmy-long.com directly.")
      }
    } catch {
      setError("Something went wrong. Please email jimmy@jimmy-long.com directly.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Nav />

      <main>
        {/* ── Dark header ───────────────────────────────────────────────── */}
        <section className="tone-dark pt-24 pb-14">
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center">
              <span className="accent-line-centered" aria-hidden />
              <h1
                className="font-bold text-white mb-5 leading-tight"
                style={{
                  fontSize:   "var(--ga-font-size-section)",
                  lineHeight: "var(--ga-line-height-snug)",
                }}
              >
                Apply for an AI Strategy Call
              </h1>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "rgba(226,232,240,0.70)" }}
              >
                Tell me a bit about your business, your current challenges, and how
                you&rsquo;re using AI today. This helps me understand fit before
                recommending a next step.
              </p>
            </div>
          </div>
        </section>

        {/* ── Form section ──────────────────────────────────────────────── */}
        <section className="tone-light section-py">
          <div className="section-container">
            <div className="max-w-2xl mx-auto">

              {submitted ? (
                /* ── Success state ──────────────────────────────────────── */
                <div
                  className="p-10 rounded-2xl text-center"
                  style={{
                    backgroundColor: "var(--ga-surface)",
                    border: "1px solid var(--ga-border)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: "var(--ga-accent)", color: "#fff" }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M5 12l5 5L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h2 className="font-bold text-ga-text mb-3 text-xl">
                    Thanks — your application was received.
                  </h2>
                  <p className="text-ga-text-muted leading-relaxed">
                    I&rsquo;ll review your answers and follow up with the best next
                    step if it looks like a fit.
                  </p>
                </div>

              ) : (
                /* ── Form card ──────────────────────────────────────────── */
                <div
                  className="p-8 rounded-2xl"
                  style={{
                    backgroundColor: "var(--ga-surface)",
                    border: "1px solid var(--ga-border)",
                  }}
                >
                  <form onSubmit={handleSubmit} noValidate className="space-y-7">

                    {/* Name / Email / Phone ───────────────────────────── */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="apply-name"
                          className={labelClass}
                          style={{ color: "var(--ga-text-muted)" }}
                        >
                          Full Name <Required />
                        </label>
                        <input
                          id="apply-name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={onFocus}
                          onBlur={onBlur}
                          className={inputClass}
                          style={inputBase}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="apply-email"
                          className={labelClass}
                          style={{ color: "var(--ga-text-muted)" }}
                        >
                          Email Address <Required />
                        </label>
                        <input
                          id="apply-email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@yourcompany.com"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={onFocus}
                          onBlur={onBlur}
                          className={inputClass}
                          style={inputBase}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="apply-phone"
                        className={labelClass}
                        style={{ color: "var(--ga-text-muted)" }}
                      >
                        Phone Number <Required />
                      </label>
                      <input
                        id="apply-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        className={inputClass}
                        style={inputBase}
                      />
                    </div>

                    {/* Divider ────────────────────────────────────────── */}
                    <hr style={{ borderColor: "var(--ga-border)" }} />

                    {/* AI experience — Yes / No ───────────────────────── */}
                    <fieldset>
                      <legend
                        className={`${labelClass} text-ga-text mb-3`}
                        style={{ color: "var(--ga-text)" }}
                      >
                        Have you used OpenAI or any AI platform in the past?{" "}
                        <Required />
                      </legend>
                      <div className="flex gap-6">
                        {(["Yes", "No"] as const).map((opt) => (
                          <label
                            key={opt}
                            className="flex items-center gap-2 cursor-pointer text-sm text-ga-text"
                          >
                            <input
                              type="radio"
                              name="used_ai"
                              value={opt}
                              required
                              checked={formData.used_ai === opt}
                              onChange={handleChange}
                              className="accent-[var(--ga-accent)]"
                            />
                            {opt}
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    {/* AI knowledge scale 1–5 ─────────────────────────── */}
                    <fieldset>
                      <legend
                        className={`${labelClass} text-ga-text mb-1`}
                        style={{ color: "var(--ga-text)" }}
                      >
                        On a scale of 1–5, how would you rate your knowledge using
                        AI? <Required />
                      </legend>
                      <p
                        className="text-xs mb-3"
                        style={{ color: "var(--ga-text-muted)" }}
                      >
                        1 = Newbie &nbsp;·&nbsp; 5 = Use it daily
                      </p>
                      <div className="flex gap-5">
                        {([1, 2, 3, 4, 5] as const).map((n) => (
                          <label
                            key={n}
                            className="flex flex-col items-center gap-1.5 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="ai_knowledge"
                              value={String(n)}
                              required
                              checked={formData.ai_knowledge === String(n)}
                              onChange={handleChange}
                              className="accent-[var(--ga-accent)]"
                            />
                            <span
                              className="text-sm font-semibold"
                              style={{ color: "var(--ga-text-muted)" }}
                            >
                              {n}
                            </span>
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    {/* Divider ────────────────────────────────────────── */}
                    <hr style={{ borderColor: "var(--ga-border)" }} />

                    {/* Company description ────────────────────────────── */}
                    <div>
                      <label
                        htmlFor="apply-company"
                        className={labelClass}
                        style={{ color: "var(--ga-text-muted)" }}
                      >
                        What is your company and what does it do? <Required />
                      </label>
                      <textarea
                        id="apply-company"
                        name="company_description"
                        rows={3}
                        required
                        placeholder="Brief description of your business…"
                        value={formData.company_description}
                        onChange={handleChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        className={`${inputClass} resize-none`}
                        style={inputBase}
                      />
                    </div>

                    {/* Website (optional) ─────────────────────────────── */}
                    <div>
                      <label
                        htmlFor="apply-website"
                        className={labelClass}
                        style={{ color: "var(--ga-text-muted)" }}
                      >
                        Company Website{" "}
                        <span className="normal-case font-normal tracking-normal">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="apply-website"
                        name="website"
                        type="url"
                        placeholder="https://yourcompany.com"
                        value={formData.website}
                        onChange={handleChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        className={inputClass}
                        style={inputBase}
                      />
                    </div>

                    {/* Ideal market ───────────────────────────────────── */}
                    <div>
                      <label
                        htmlFor="apply-market"
                        className={labelClass}
                        style={{ color: "var(--ga-text-muted)" }}
                      >
                        Who is your ideal market / customer? <Required />
                      </label>
                      <textarea
                        id="apply-market"
                        name="ideal_market"
                        rows={2}
                        required
                        placeholder="Describe who you typically serve…"
                        value={formData.ideal_market}
                        onChange={handleChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        className={`${inputClass} resize-none`}
                        style={inputBase}
                      />
                    </div>

                    {/* Day-to-day challenges ──────────────────────────── */}
                    <div>
                      <label
                        htmlFor="apply-challenges"
                        className={labelClass}
                        style={{ color: "var(--ga-text-muted)" }}
                      >
                        What are your day-to-day challenges in your business?{" "}
                        <Required />
                      </label>
                      <textarea
                        id="apply-challenges"
                        name="challenges"
                        rows={3}
                        required
                        placeholder="What eats your time, falls through the cracks, or slows the team down…"
                        value={formData.challenges}
                        onChange={handleChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        className={`${inputClass} resize-none`}
                        style={inputBase}
                      />
                    </div>

                    {/* Marketing support ──────────────────────────────── */}
                    <div>
                      <label
                        htmlFor="apply-marketing"
                        className={labelClass}
                        style={{ color: "var(--ga-text-muted)" }}
                      >
                        Do you currently have a copywriter, marketer, or social
                        media support in-house or contracted? <Required />
                      </label>
                      <textarea
                        id="apply-marketing"
                        name="marketing_support"
                        rows={2}
                        required
                        placeholder="Yes / No — and any relevant detail…"
                        value={formData.marketing_support}
                        onChange={handleChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        className={`${inputClass} resize-none`}
                        style={inputBase}
                      />
                    </div>

                    {/* Referral source ────────────────────────────────── */}
                    <div>
                      <label
                        htmlFor="apply-referral"
                        className={labelClass}
                        style={{ color: "var(--ga-text-muted)" }}
                      >
                        How did you hear about us? <Required />
                      </label>
                      <select
                        id="apply-referral"
                        name="referral_source"
                        required
                        value={formData.referral_source}
                        onChange={handleChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        className={inputClass}
                        style={inputBase}
                      >
                        <option value="">Select one…</option>
                        <option>Facebook</option>
                        <option>Instagram</option>
                        <option>LinkedIn</option>
                        <option>Email Newsletter</option>
                        <option>Training</option>
                        <option>Referral</option>
                        <option>Other</option>
                      </select>
                    </div>

                    {/* AI goals ───────────────────────────────────────── */}
                    <div>
                      <label
                        htmlFor="apply-goals"
                        className={labelClass}
                        style={{ color: "var(--ga-text-muted)" }}
                      >
                        What are you hoping AI can help improve in your business
                        right now? <Required />
                      </label>
                      <textarea
                        id="apply-goals"
                        name="ai_goals"
                        rows={3}
                        required
                        placeholder="Be as specific as you like…"
                        value={formData.ai_goals}
                        onChange={handleChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        className={`${inputClass} resize-none`}
                        style={inputBase}
                      />
                    </div>

                    {/* Error message ──────────────────────────────────── */}
                    {error && (
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "#B91C1C" }}
                        role="alert"
                      >
                        {error}
                      </p>
                    )}

                    {/* Submit ─────────────────────────────────────────── */}
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

// ── Small required asterisk ───────────────────────────────────────────────────
function Required() {
  return (
    <span style={{ color: "var(--ga-accent)" }} aria-hidden>
      *
    </span>
  )
}
