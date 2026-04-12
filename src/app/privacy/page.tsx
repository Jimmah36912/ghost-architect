import type { Metadata } from "next"
import Nav from "@/components/Nav"

export const metadata: Metadata = {
  title: "Privacy Policy | Jimmy Long",
  description: "Privacy Policy for Jimmy Long consulting services.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <main
        className="min-h-screen pt-28 pb-20"
        style={{ backgroundColor: "var(--ga-bg)", color: "var(--ga-text)" }}
      >
        <div className="section-container max-w-3xl">
          <h1
            className="text-3xl font-bold mb-2"
            style={{ color: "var(--ga-text)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm mb-10" style={{ color: "var(--ga-text-muted)" }}>
            Last updated: April 2026
          </p>

          <div className="space-y-10 text-base leading-relaxed" style={{ color: "var(--ga-text-muted)" }}>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--ga-text)" }}>1. Overview</h2>
              <p>
                Jimmy Long, a brand of Long Fulfillment LLC ("we," "us," or "our"), is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal
                information when you visit our website or engage with our consulting services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--ga-text)" }}>2. Information We Collect</h2>
              <p className="mb-3">We may collect the following types of information when you submit a form, book a call, or contact us:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business name and website</li>
                <li>Information about your business needs, revenue, and goals as provided voluntarily</li>
              </ul>
              <p className="mt-3">
                We also collect standard technical data through our website hosting provider, including IP address,
                browser type, and pages visited, for security and analytics purposes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--ga-text)" }}>3. How We Use Your Information</h2>
              <p className="mb-3">We use the information you provide to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and schedule consultations</li>
                <li>Deliver the consulting services you have requested</li>
                <li>Send you relevant follow-up communications about your engagement</li>
                <li>Send SMS text messages and/or email communications related to your inquiry or services (see Section 4)</li>
                <li>Improve our website and service offerings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--ga-text)" }}>4. SMS / Text Message Communications</h2>
              <p className="mb-3">
                By providing your phone number and submitting a form on this website, you consent to receive
                SMS text messages from Jimmy Long regarding your inquiry, appointment confirmations, follow-ups,
                and service-related updates.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong style={{ color: "var(--ga-text)" }}>Message frequency:</strong> Message frequency varies depending on your engagement with our services.</li>
                <li><strong style={{ color: "var(--ga-text)" }}>Message and data rates:</strong> Standard message and data rates may apply depending on your carrier plan.</li>
                <li><strong style={{ color: "var(--ga-text)" }}>Opt-out:</strong> You may opt out of SMS communications at any time by replying <strong style={{ color: "var(--ga-text)" }}>STOP</strong> to any message you receive from us. You will receive a confirmation and no further messages will be sent.</li>
                <li><strong style={{ color: "var(--ga-text)" }}>Help:</strong> Reply <strong style={{ color: "var(--ga-text)" }}>HELP</strong> to any message for assistance, or contact us at jimmy@jimmy-long.com.</li>
                <li><strong style={{ color: "var(--ga-text)" }}>No third-party sharing:</strong> Your phone number and personal information will not be shared with third parties for their own marketing purposes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--ga-text)" }}>5. Information Sharing</h2>
              <p className="mb-3">
                We do not sell, trade, or rent your personal information to third parties. We may share your
                information only in the following limited circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With service providers who assist us in operating our website and delivering services (such as scheduling platforms, CRM, and payment processors), who are bound by confidentiality obligations</li>
                <li>When required by law or to protect our legal rights</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--ga-text)" }}>6. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to deliver services and fulfill
                the purposes described in this policy, or as required by law. You may request deletion of your
                data at any time by contacting us at the email below.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--ga-text)" }}>7. Cookies and Tracking</h2>
              <p>
                Our website may use cookies and similar tracking technologies for analytics and functionality.
                You can control cookie settings through your browser. Disabling cookies may affect certain
                features of the site.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--ga-text)" }}>8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites (such as Calendly, Stripe, or social
                media platforms). We are not responsible for the privacy practices of those sites and encourage
                you to review their policies separately.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--ga-text)" }}>9. Security</h2>
              <p>
                We implement reasonable administrative, technical, and physical safeguards to protect your
                personal information from unauthorized access or disclosure. No method of transmission over
                the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--ga-text)" }}>10. Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt out of SMS or email communications at any time</li>
              </ul>
              <p className="mt-3">To exercise any of these rights, contact us at jimmy@jimmy-long.com.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--ga-text)" }}>11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with
                an updated effective date. Continued use of our services after any changes constitutes
                acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--ga-text)" }}>12. Contact</h2>
              <p>
                If you have questions about this Privacy Policy or how we handle your data, contact us at:
              </p>
              <div
                className="mt-4 p-5 rounded-xl text-sm"
                style={{ backgroundColor: "var(--ga-surface)", border: "1px solid var(--ga-border)" }}
              >
                <p className="font-semibold mb-1" style={{ color: "var(--ga-text)" }}>Long Fulfillment LLC (Jimmy Long)</p>
                <p>Email: <a href="mailto:jimmy@jimmy-long.com" className="hover:opacity-80 underline" style={{ color: "var(--ga-accent)" }}>jimmy@jimmy-long.com</a></p>
              </div>
            </section>

          </div>

          <div className="mt-12 pt-8" style={{ borderTop: "1px solid var(--ga-border)" }}>
            <a
              href="/"
              className="text-sm hover:opacity-80 transition-opacity"
              style={{ color: "var(--ga-text-muted)" }}
            >
              ← Back to home
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
