import type { Metadata } from "next"
import Nav from "@/components/Nav"

export const metadata: Metadata = {
  title: "Terms of Service | Jimmy Long",
  description: "Terms of Service for Jimmy Long consulting services.",
}

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="text-sm mb-10" style={{ color: "var(--ga-text-muted)" }}>
            Last updated: April 2026
          </p>

          <div className="space-y-10 text-base leading-relaxed" style={{ color: "var(--ga-text-muted)" }}>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--ga-text)" }}>1. Acceptance of Terms</h2>
              <p>
                By accessing this website or engaging with the consulting services of Long Fulfillment LLC,
                operating as Jimmy Long ("we," "us," or "our"), you agree to be bound by these Terms of
                Service. If you do not agree to these
                terms, please do not use this website or our services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--ga-text)" }}>2. Services</h2>
              <p className="mb-3">
                Jimmy Long provides revenue recovery and client flow consulting services to small and
                mid-sized businesses. Services may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Revenue Leak Audit — a focused assessment of a specific area of your business where revenue may be lost</li>
                <li>Revenue Recovery Intensive — a structured consulting engagement to identify and fix client flow and operational gaps</li>
                <li>Monthly Advisory — ongoing consulting support and accountability</li>
                <li>Related consulting, strategy, and infrastructure guidance</li>
              </ul>
              <p className="mt-3">
                The specific scope, deliverables, timeline, and pricing for each engagement are defined at
                the time of booking or in a separate agreement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--ga-text)" }}>3. SMS / Text Message Communications</h2>
              <p className="mb-3">
                By providing your phone number through any form on this website, you expressly consent to
                receive SMS text messages from Jimmy Long. These messages may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responses to your inquiry</li>
                <li>Appointment confirmations and reminders</li>
                <li>Follow-up communications related to your consultation or services</li>
                <li>Service updates and relevant information</li>
              </ul>
              <div
                className="mt-5 p-5 rounded-xl text-sm space-y-2"
                style={{ backgroundColor: "var(--ga-surface)", border: "1px solid var(--ga-border)" }}
              >
                <p><strong style={{ color: "var(--ga-text)" }}>Message frequency:</strong> Varies based on your engagement. You will not receive unsolicited promotional messages.</p>
                <p><strong style={{ color: "var(--ga-text)" }}>Message and data rates:</strong> Standard message and data rates may apply depending on your mobile carrier.</p>
                <p><strong style={{ color: "var(--ga-text)" }}>To opt out:</strong> Reply <strong style={{ color: "var(--ga-text)" }}>STOP</strong> to any SMS message at any time. You will receive a confirmation and no further messages will be sent.</p>
                <p><strong style={{ color: "var(--ga-text)" }}>For help:</strong> Reply <strong style={{ color: "var(--ga-text)" }}>HELP</strong> or email jimmy@jimmy-long.com.</p>
                <p><strong style={{ color: "var(--ga-text)" }}>No third-party sharing:</strong> Your phone number will not be shared with or sold to any third party for marketing purposes.</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--ga-text)" }}>4. Payment Terms</h2>
              <p className="mb-3">
                Fees for services are disclosed at the time of purchase or proposal. All payments are
                processed securely through Stripe. By completing a payment, you agree to the applicable
                fee for the service selected.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The $97 Revenue Leak Audit fee is non-refundable once the audit has been delivered</li>
                <li>Fees for the Revenue Recovery Intensive and Monthly Advisory are defined at time of agreement</li>
                <li>All fees are in USD unless otherwise stated</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--ga-text)" }}>5. Refund Policy</h2>
              <p>
                Due to the nature of consulting and the time invested in preparing and delivering
                recommendations, refunds are not guaranteed. If you have a concern about a service
                delivered, contact us at jimmy@jimmy-long.com within 7 days and we will work to
                address it in good faith.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--ga-text)" }}>6. No Guarantee of Results</h2>
              <p>
                Consulting advice and recommendations are based on information provided by the client and
                general business experience. We do not guarantee specific revenue outcomes, business
                results, or financial performance. Results depend on many factors outside our control,
                including implementation by the client.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--ga-text)" }}>7. Confidentiality</h2>
              <p>
                We treat all information shared during consultations as confidential and will not disclose
                it to third parties without your consent, except as required by law. We expect the same
                in return — any proprietary methods, frameworks, or materials we share are for your
                use only and may not be resold or redistributed.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--ga-text)" }}>8. Intellectual Property</h2>
              <p>
                All content on this website — including text, graphics, frameworks, and materials — is
                the property of Jimmy Long. You may not reproduce, distribute, or use it for commercial
                purposes without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--ga-text)" }}>9. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Jimmy Long shall not be liable for any indirect,
                incidental, consequential, or punitive damages arising from your use of this website or
                our services. Our total liability in any matter shall not exceed the amount paid by you
                for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--ga-text)" }}>10. Website Use</h2>
              <p>
                You agree to use this website only for lawful purposes and in a manner that does not
                infringe the rights of others. We reserve the right to suspend access to the site for
                any misuse or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--ga-text)" }}>11. Governing Law</h2>
              <p>
                These Terms of Service are governed by the laws of the United States. Any disputes
                shall be resolved through good-faith negotiation before pursuing formal legal remedies.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--ga-text)" }}>12. Changes to These Terms</h2>
              <p>
                We may update these Terms of Service at any time. Changes will be posted on this page
                with an updated effective date. Continued use of our services after changes are posted
                constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--ga-text)" }}>13. Contact</h2>
              <p>Questions about these Terms of Service? Reach us at:</p>
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
