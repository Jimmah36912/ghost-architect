import Nav from "@/components/Nav"
import HeroSection from "@/components/HeroSection"
import AudienceFitSection from "@/components/AudienceFitSection"
import PainPointsSection from "@/components/PainPointsSection"
import TriedAlreadySection from "@/components/TriedAlreadySection"
import AuditNudge from "@/components/AuditNudge"
import WhyDifferentSection from "@/components/WhyDifferentSection"
import CapabilitiesSection from "@/components/CapabilitiesSection"
import BeforeAfterSection from "@/components/BeforeAfterSection"
import ProcessSection from "@/components/ProcessSection"
import StrategyIntensiveSection from "@/components/StrategyIntensiveSection"
import WhyStartHereSection from "@/components/WhyStartHereSection"
import MonthlyAdvisorySection from "@/components/MonthlyAdvisorySection"
import TrustSection from "@/components/TrustSection"
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
        {/* 1. Hero — dark, full-height */}
        <HeroSection variant="splitImage" />

        {/* 2. Who This Is For */}
        <AudienceFitSection />

        {/* 3. What's Breaking Down */}
        <PainPointsSection cardVariant="outlined" />

        {/* 4. What You've Tried */}
        <TriedAlreadySection />

        {/* 4.5. Revenue Leak Audit nudge — low-commitment bridge after problem framing */}
        <AuditNudge />

        {/* 5. Why AI Advice Misses */}
        <WhyDifferentSection />

        {/* 6. What We Help With + mid CTA */}
        <CapabilitiesSection cardVariant="default" />

        {/* 7. Before / After — dark */}
        <BeforeAfterSection />

        {/* 8. Process */}
        <ProcessSection />

        {/* 9. Strategy Intensive — primary offer */}
        <StrategyIntensiveSection />

        {/* 10. Why Start Here */}
        <WhyStartHereSection />

        {/* 11. Monthly Advisory — secondary offer */}
        <MonthlyAdvisorySection />

        {/* 12. Trust — dark */}
        <TrustSection />

        {/* 13. FAQ */}
        <FAQSection />

        {/* 14. Bottleneck Audit — bridge offer */}
        <BottleneckAuditSection />

        {/* 15. Final CTA — dark */}
        <FinalCTASection />

        {/* 15. Contact form (secondary fallback) */}
        <ContactFormSection />
      </main>
      <Footer />
    </>
  )
}
