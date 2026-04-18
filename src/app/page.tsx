import Nav from "@/components/Nav"
import HeroSection from "@/components/HeroSection"
import PainPointsSection from "@/components/PainPointsSection"
import TriedAlreadySection from "@/components/TriedAlreadySection"
import WhyDifferentSection from "@/components/WhyDifferentSection"
import CapabilitiesSection from "@/components/CapabilitiesSection"
import ProcessSection from "@/components/ProcessSection"
import BeforeAfterSection from "@/components/BeforeAfterSection"
import AudienceFitSection from "@/components/AudienceFitSection"
import TrustSection from "@/components/TrustSection"
import WaysToWorkSection from "@/components/WaysToWorkSection"
import FAQSection from "@/components/FAQSection"
import BottleneckAuditSection from "@/components/BottleneckAuditSection"
import FinalCTASection from "@/components/FinalCTASection"
import ContactFormSection from "@/components/ContactFormSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* 1. Hero */}
        <HeroSection variant="splitImage" />

        {/* 2. Market Reframe — you don't have a lead problem first */}
        <PainPointsSection />

        {/* 3. Why typical solutions underperform — 3-column comparison */}
        <TriedAlreadySection />

        {/* 4. Purple Ocean positioning */}
        <WhyDifferentSection />

        {/* 5. Revenue Recovery Sequencing™ mechanism */}
        <CapabilitiesSection />

        {/* 6. How It Works — 4-step process + timeline */}
        <ProcessSection />

        {/* 7. Before / After */}
        <BeforeAfterSection />

        {/* 8. Who This Is For */}
        <AudienceFitSection />

        {/* 9. Why Choose Jimmy Long — 5 reasons */}
        <TrustSection />

        {/* 10. Ways to Work Together — 3-offer section */}
        <WaysToWorkSection />

        {/* 11. FAQ */}
        <FAQSection />

        {/* 12. Revenue Leak Exposure — $197 entry offer */}
        <BottleneckAuditSection />

        {/* 13. Final CTA */}
        <FinalCTASection />

        {/* 14. Contact form (secondary fallback) */}
        <ContactFormSection />
      </main>
      <Footer />
    </>
  )
}
