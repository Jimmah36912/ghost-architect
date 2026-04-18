/**
 * Jimmy Long — Site Copy
 * ─────────────────────────────────────────────────────────────────────────
 * All page copy lives here. Edit this file to update text without touching
 * any component files. Section order matches the page flow top to bottom.
 */

const BOOKING_URL = "https://calendar.app.google/nZLxNEPADvUKwN9w7"

export const siteContent = {

  // ── Metadata ─────────────────────────────────────────────────────────────
  meta: {
    title: "Revenue Recovery Systems for Service Businesses | Jimmy Long",
    description:
      "Jimmy Long identifies where revenue is leaking, fixes the highest-value problems in the right order, and installs the systems that turn more existing demand into booked work.",
  },

  // ── Navigation ────────────────────────────────────────────────────────────
  nav: {
    brand: "Jimmy Long",
    links: [
      { label: "How It Works", href: "/#process"   },
      { label: "Who It's For", href: "/#audience"  },
      { label: "Diagnostic",   href: "/audit"      },
    ],
    cta: { label: "Book a Call", href: BOOKING_URL },
  },

  // ── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    eyebrow:     "Revenue Recovery Systems for Service Businesses",
    headline:    "Stop Losing Revenue From Demand You Already Have",
    subheadline:
      "Most service businesses do not need more leads first. They need to recover more revenue from the calls, inquiries, estimates, consult requests, and opportunities they are already generating. Jimmy Long identifies where revenue is leaking, fixes the highest-value problems in the right order, and installs the systems that help more existing demand turn into booked work.",
    supportLine:
      "Built for service businesses that are already generating demand — but know too much of it is dying before it turns into revenue.",
    primaryCTA:   { label: "Book Revenue Leak Exposure",      href: "/audit"   },
    secondaryCTA: { label: "See How Revenue Recovery Works",  href: "#process" },
    bullets: [
      "Recover missed opportunities",
      "Fix inconsistent follow-up",
      "Reduce response gaps",
      "Remove owner bottlenecks",
      "Improve conversion from existing demand",
    ],
  },

  // ── Market Reframe ────────────────────────────────────────────────────────
  marketReframe: {
    headline: "You Probably Don't Have a Lead Problem First",
    body:
      "Most service businesses assume the answer is more traffic, more ads, more SEO, or another new tool. But if calls are missed, follow-up is inconsistent, estimates go cold, consult requests stall, and communication changes depending on who responds, more demand usually just creates more waste.",
    emphasis:
      "That is why the real problem is often not lead generation first. It is revenue leakage after interest already exists.",
    problemCards: [
      {
        icon:  "follow-up" as const,
        title: "Missed Follow-Up",
        body:  "Interested inquiries go cold because nobody follows up with structure or speed.",
      },
      {
        icon:  "estimates" as const,
        title: "Cold Estimates",
        body:  "Estimates get sent, then go quiet until the revenue disappears.",
      },
      {
        icon:  "response" as const,
        title: "Response Delays",
        body:  "Slow response kills urgency and sends prospects to whoever replies first.",
      },
      {
        icon:  "bottleneck" as const,
        title: "Owner Bottlenecks",
        body:  "Too much still depends on the owner, so opportunities stall when they get busy.",
      },
      {
        icon:  "communication" as const,
        title: "Inconsistent Communication",
        body:  "Different people handle inquiries differently, creating trust gaps that cost booked work.",
      },
    ],
  },

  // ── Why Typical Solutions Underperform ───────────────────────────────────
  whyTypicalFails: {
    headline: "More Activity Does Not Fix a Leaking System",
    columns: [
      {
        label: "Most Agencies Sell",
        items: [
          "more traffic",
          "more campaigns",
          "more content",
          "more channels",
          "more monthly activity",
        ],
      },
      {
        label: "Most Software Sells",
        items: [
          "more features",
          "more dashboards",
          "more inboxes",
          "more automations",
          "more complexity",
        ],
      },
      {
        label: "What Jimmy Long Builds",
        items: [
          "diagnosis",
          "prioritization",
          "sequencing",
          "selective implementation",
          "recovered revenue",
        ],
        highlight: true,
      },
    ],
    bottomStatement:
      "You do not need more disconnected tactics. You need to know where money is being lost, what is costing the most, what must be fixed first, and what system will actually improve conversion.",
  },

  // ── Purple Ocean Positioning ──────────────────────────────────────────────
  whyDifferent: {
    headline: "Not Another Agency. Not Just Another Tool.",
    body:
      "Jimmy Long sits in the gap between marketing promises and operational chaos. This is not generic lead generation. This is not a software demo. This is not another automation-first pitch. It is revenue recovery infrastructure for service businesses that already have opportunities coming in — but are losing too many of them through slow follow-up, weak handoffs, inconsistent communication, owner dependency, and broken conversion paths.",
    positioningLine:
      "We do not sell more noise. We recover more revenue from what already exists.",
  },

  // ── Revenue Recovery Sequencing™ ─────────────────────────────────────────
  revenueSequencing: {
    headline: "Revenue Recovery Sequencing™",
    body:
      "This is the core mechanism behind the work. Instead of prescribing random tactics, Jimmy Long first identifies where revenue is leaking, then ranks those problems by impact, then fixes them in the order most likely to create the fastest lift in booked jobs, appointments, consults, and signed clients. That means you do not waste time solving the wrong problem first.",
    bullets: [
      "Exposes hidden revenue leaks",
      "Identifies what is costing the most",
      "Determines what should be fixed first",
      "Turns disconnected effort into a recovery system",
    ],
  },

  // ── Process ───────────────────────────────────────────────────────────────
  process: {
    headline: "How Revenue Recovery Works",
    steps: [
      {
        number: "01",
        title:  "Revenue Leak Exposure",
        body:
          "A focused diagnostic that shows where revenue is being lost across inquiry handling, follow-up, estimates, consult requests, communication, handoffs, and owner dependency.",
      },
      {
        number: "02",
        title:  "Revenue Recovery Sequencing™",
        body:
          "A clear priority map that determines what to fix first, what to fix next, and what can wait — based on impact, not guesswork.",
      },
      {
        number: "03",
        title:  "Ghost Architect Installation",
        body:
          "Selective implementation of the highest-value recovery systems needed to improve response, follow-up, consistency, and conversion.",
      },
      {
        number: "04",
        title:  "Recovery Stabilization",
        body:
          "A structured checkpoint to verify recovered revenue is holding, close any remaining gaps, and confirm the system is running without owner dependency.",
      },
      {
        number: "05",
        title:  "Revenue Control & Expansion",
        body:
          "Ongoing refinement that protects recovered revenue, tightens execution, and strengthens the business before further scale.",
      },
    ],
    timeline: {
      headline: "Expected Timeline",
      phases: [
        {
          period: "Days 1–7",
          body:   "Clarity on where revenue is leaking and which breakdowns matter most.",
        },
        {
          period: "Days 8–30",
          body:   "Quick wins begin through the first recovery fixes: response speed, follow-up consistency, stale opportunity recovery, communication alignment.",
        },
        {
          period: "Days 30–90",
          body:   "More meaningful improvement as the system stabilizes and the highest-value leaks are addressed.",
        },
      ],
      expectation:
        "Most clients should expect early clarity and measurable momentum quickly, with more visible improvement typically showing between 30 and 90 days depending on access, responsiveness, and implementation speed.",
    },
  },

  // ── Before / After ────────────────────────────────────────────────────────
  beforeAfter: {
    headline: "What Changes When the Leaks Get Fixed",
    before: [
      "Opportunities slip through the cracks",
      "Follow-up depends on memory and busy staff",
      "Revenue feels noisy and under-converted",
      "The owner has to hold too much together",
      "Communication varies from person to person",
      "Marketing spend feeds a weak system",
    ],
    after: [
      "More existing demand turns into revenue",
      "Follow-up becomes structured and consistent",
      "Revenue becomes cleaner and more predictable",
      "The business runs with more control and less heroics",
      "Customer experience feels more aligned and professional",
      "Demand converts through a stronger system",
    ],
  },

  // ── Who This Is For ───────────────────────────────────────────────────────
  audienceFit: {
    headline: "Built for Service Businesses That Already Have Demand",
    bullets: [
      "You are already getting calls, inquiries, consult requests, estimates, or inbound opportunities",
      "You feel like you should be converting more of that demand than you are",
      "Follow-up is inconsistent or delayed",
      "Too much depends on the owner or a few key people to keep things moving",
      "You know money is slipping through the cracks, but do not have a clean diagnosis of where",
      "You are tired of buying more marketing before the current system is fixed",
    ],
    industryLine:
      "This works especially well for home services, legal, med spas, dental, medical, and other appointment- or consultation-driven businesses.",
    notForLine:
      "This is not for companies looking for a generic SEO package, ad management only, or a cheap software install.",
  },

  // ── Why Choose Jimmy Long ─────────────────────────────────────────────────
  trust: {
    headline: "Why Buyers Choose This Over Agencies, Software, and Random Fixes",
    points: [
      {
        title: "Diagnosis before prescription",
        body:  "You are not pushed into a solution before the real problem is clear.",
      },
      {
        title: "Revenue-first focus",
        body:  "The work is anchored to recovered revenue, booked business, and conversion improvement — not vanity metrics.",
      },
      {
        title: "Sequence over scattered tactics",
        body:  "Fixing the wrong thing first wastes time and money. The order matters.",
      },
      {
        title: "Strategy plus implementation",
        body:  "You get premium diagnosis and prioritization, plus selective done-for-you execution where it creates the most leverage.",
      },
      {
        title: "A stronger system before more scale",
        body:  "The goal is not to pour more demand into chaos. The goal is to make the business convert better first.",
      },
    ],
  },

  // ── Ways to Work Together ─────────────────────────────────────────────────
  waysToWork: {
    headline: "Ways to Work Together",
    offers: [
      {
        title:       "Revenue Leak Exposure",
        body:        "A focused diagnostic that shows where jobs, appointments, consults, and clients are being lost.",
        pricing:     "Starting at $197",
        pricingNote: "public offer",
        cta:         { label: "Start the Diagnostic", href: "/audit" },
      },
      {
        title:       "Revenue Recovery Install",
        body:        "We fix the highest-value problems in the right order and install the systems that improve conversion.",
        pricing:     "Custom scope after diagnosis",
        pricingNote: "scoped after exposure",
        cta:         { label: "Book a Call", href: BOOKING_URL },
      },
      {
        title:       "Revenue Control & Expansion",
        body:        "Ongoing optimization to protect recovered revenue and improve performance over time.",
        pricing:     "Available after implementation",
        pricingNote: "ongoing engagement",
        cta:         { label: "Book a Call", href: BOOKING_URL },
      },
    ],
  },

  // ── FAQ ───────────────────────────────────────────────────────────────────
  faq: {
    headline: "Common Questions",
    items: [
      {
        q: "Is this a fit for my business?",
        a: "If you run a service business with steady inbound demand and you feel like you should be converting more of it — yes. The specific industry matters less than the operational situation.",
      },
      {
        q: "Do I need to be technical?",
        a: "No. The goal is to fix the systems that handle follow-up, communication, and conversion — not to layer on technical complexity. If you can use email and basic business software, you can work with what we build.",
      },
      {
        q: "What if this is not the real problem?",
        a: "That is one of the things the Revenue Leak Exposure uncovers. If the underlying issue is something different, we will tell you — and explain why.",
      },
      {
        q: "Will this add more complexity?",
        a: "That is the right instinct. We do not recommend tools for the sake of it. The goal is to improve conversion from existing demand, not to add another dashboard to manage.",
      },
      {
        q: "Will this replace my team?",
        a: "No. The focus is on removing inconsistency, slow follow-up, and owner dependency — so your team can focus on higher-value work. Systems are meant to support the team, not replace it.",
      },
      {
        q: "How long before I see results?",
        a: "Most clients see early clarity within the first week and measurable momentum within 30 days. More meaningful improvement typically shows between 30 and 90 days depending on access, responsiveness, and implementation speed.",
      },
      {
        q: "What does Revenue Leak Exposure include?",
        a: "A focused diagnostic covering inquiry-to-conversion flow, follow-up breakdown, communication gaps, missed opportunity mapping, and prioritized recovery actions — starting at $197.",
      },
      {
        q: "What happens after the diagnostic?",
        a: "You leave with a clear picture of where revenue is leaking and what to fix first. If you move forward into implementation, your diagnostic fee is credited toward the build.",
      },
      {
        q: "Do I need ongoing support?",
        a: "No. Most clients start with the Revenue Leak Exposure and decide from there. There is no pressure to commit to anything beyond the diagnostic.",
      },
      {
        q: "What if I am not ready to start yet?",
        a: "Book a call. We can talk through what you are seeing in your business and whether this is the right fit before any commitment.",
      },
    ],
  },

  // ── Revenue Leak Exposure (Entry Offer) ───────────────────────────────────
  revenueLeakExposure: {
    eyebrow:   "Start Here",
    headline:  "Start With Revenue Leak Exposure",
    body:
      "A focused diagnostic built to show you where jobs, appointments, consults, and clients are being lost before you spend more on traffic, ads, tools, or guesswork.",
    badge:     "Entry Offer",
    price:     "$197",
    deliverables: [
      "Inquiry-to-conversion breakdown review",
      "Follow-up breakdown analysis",
      "Communication gap findings",
      "Missed opportunity mapping",
      "Prioritized recovery actions",
    ],
    creditLine:
      "If you move forward into implementation, your diagnostic is credited toward the build.",
    guarantee: {
      headline: "Conditional Momentum Guarantee",
      body:
        "If you provide timely access, approvals, and participation, the highest-value recovery opportunities will be addressed and the work will continue until measurable momentum is created.",
    },
    cta: { label: "Start the Diagnostic", href: "/audit" },
  },

  // ── Final CTA ─────────────────────────────────────────────────────────────
  finalCTA: {
    headline:
      "If demand already exists but too much of it dies before it turns into revenue, start here.",
    body:     "",
    cta:       { label: "Book Your Revenue Leak Exposure", href: "/audit" },
    trustLine: "Diagnosis before prescription. Revenue before noise.",
  },

  // ── Contact Form (secondary fallback) ─────────────────────────────────────
  contact: {
    headline: "Prefer to Reach Out First?",
    body:     "Send a message and I will follow up within one business day.",
    submitLabel: "Send a Message",
    formAction: "#",
  },

  // ── Footer ────────────────────────────────────────────────────────────────
  footer: {
    brand:   "Jimmy Long",
    tagline: "Revenue Recovery Systems",
    flavor:  "Diagnosis before prescription.",
    email:   "jimmy@jimmy-long.com",
    phone:   null as string | null,
    social: [
      {
        label: "Facebook",
        href:  "https://www.facebook.com/james.long.602375",
        icon:  "facebook" as const,
      },
      {
        label: "LinkedIn",
        href:  "https://www.linkedin.com/in/jimmy-long-4b5575393/",
        icon:  "linkedin" as const,
      },
    ],
    legal: [
      { label: "Privacy Policy",   href: "/privacy" },
      { label: "Terms of Service", href: "/terms"   },
    ],
  },

} as const
