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
    title: "Revenue Recovery and Client Flow Consulting | Jimmy Long",
    description:
      "Jimmy Long helps small businesses recover revenue by fixing client flow, follow-up, and operational infrastructure — without adding complexity.",
  },

  // ── Navigation ────────────────────────────────────────────────────────────
  nav: {
    brand: "Jimmy Long",
    links: [
      { label: "How It Works", href: "/#process" },
      { label: "The Offer",    href: "/#offer"   },
    ],
    cta: { label: "Book a Call", href: BOOKING_URL },
  },

  // ── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    eyebrow:     "",
    headline:    "Recover the Revenue Your Business Is Already Losing",
    subheadline:
      "Most businesses don't have a lead problem. They have a recovery problem. You already have interest coming in. The issue is what happens to it — inconsistent follow-up, missed opportunities, and a client flow that breaks under pressure.",
    supportLine: "Quiet systems. Captured revenue. Stronger client flow.",
    primaryCTA:  { label: "Book a Discovery Call",     href: BOOKING_URL },
    secondaryCTA:{ label: "See How the Process Works", href: "#process"  },
  },

  // ── Who This Is For ───────────────────────────────────────────────────────
  audienceFit: {
    headline:
      "This Is for Businesses That Are Growing, but Still Losing Revenue in the Gaps",
    intro:
      "Follow-up is inconsistent. Opportunities slip through. Client flow breaks under volume. If that is your business, you are in the right place.",
    bullets: [
      "Established business with steady demand and a team in place",
      "Too much still depends on the owner to keep things moving",
      "Operations are active but not consistently converting",
      "Follow-up and communication break down under volume",
      "Opportunities are missed, delayed, or not fully handled",
      "You want clarity and structure — not more complexity",
    ],
  },

  // ── Pain Points ───────────────────────────────────────────────────────────
  painPoints: {
    headline:
      "The Problem Is Not Effort. It Is Revenue Leaks Inside the Business.",
    cards: [
      {
        title: "Uncaptured Opportunities",
        body:  "Inbound interest that is missed, ignored, or not properly tracked.",
      },
      {
        title: "Inconsistent Follow-Up",
        body:  "Prospects go cold because timing and persistence are unreliable.",
      },
      {
        title: "Communication Delays",
        body:  "Slow responses reduce conversion before a decision is made.",
      },
      {
        title: "Dropped Handoffs",
        body:  "Breakdowns between inquiry, response, and close that cost deals.",
      },
      {
        title: "Owner Bottlenecks",
        body:  "Too many decisions flowing through one person slows everything.",
      },
      {
        title: "Unstable Client Flow",
        body:  "Processes that hold sometimes, then fail under pressure.",
      },
      {
        title: "Manual Operational Load",
        body:  "Repetitive work consuming time without improving revenue.",
      },
      {
        title: "Patchwork Fixes",
        body:  "Temporary solutions that never address the underlying gaps.",
      },
    ],
  },

  // ── What You've Already Tried ─────────────────────────────────────────────
  triedAlready: {
    headline: "You Have Probably Already Tried to Fix This",
    intro:
      "Most business owners we work with have already made real efforts. The issue was not effort — it was missing infrastructure.",
    items: [
      {
        label: "Handling everything manually",
        body:  "Relying on memory and effort to keep follow-up running — and watching it slip anyway.",
      },
      {
        label: "Using basic tools",
        body:  "Partial fixes that never addressed the full client flow.",
      },
      {
        label: "Trying AI casually",
        body:  "Disconnected use without integration into operations.",
      },
      {
        label: "Adding more software",
        body:  "Increasing complexity without improving results.",
      },
      {
        label: "Pushing the team harder",
        body:  "Expecting consistency without system support.",
      },
      {
        label: "Experimenting without direction",
        body:  "No clear prioritization or measurement of impact.",
      },
    ],
  },

  // ── Why Most Advice Misses ────────────────────────────────────────────────
  whyDifferent: {
    headline:
      "Most Advice Starts in the Wrong Place",
    body:
      "If five leads a month go cold without follow-up — at $500 per conversion — that is $30,000 a year walking out the door. Most businesses are not short on demand. They are short on recovery. We fix the infrastructure first.",
    points: [
      "Identify where revenue is actually leaking",
      "Understand how client flow breaks down",
      "Prioritize the highest-impact fixes first",
      "Install systems that support real operations",
      "Reduce friction instead of adding complexity",
    ],
  },

  // ── Capabilities ──────────────────────────────────────────────────────────
  capabilities: {
    headline: "We Recover Revenue by Fixing Client Flow and Infrastructure",
    midCTA:   { label: "Book a Discovery Call", href: BOOKING_URL },
    cards: [
      {
        title: "Capture More Opportunities",
        body:  "Inbound leads, calls, and inquiries consistently tracked and handled.",
      },
      {
        title: "Strengthen Follow-Up",
        body:  "Reliable conversion coordination that removes dependency on memory.",
      },
      {
        title: "Improve Communication Timing",
        body:  "Faster, more consistent responses that improve conversion rates.",
      },
      {
        title: "Stabilize Client Flow",
        body:  "Structured, repeatable processes that hold under pressure and volume.",
      },
      {
        title: "Support the Team with Infrastructure",
        body:  "Simple systems that make execution consistent for everyone.",
      },
      {
        title: "Reduce Owner Dependency",
        body:  "Move key actions and decisions into reliable systems.",
      },
    ],
  },

  // ── Before / After ────────────────────────────────────────────────────────
  beforeAfter: {
    headline: "Before and After Revenue Recovery",
    before: [
      "Revenue leaks hidden inside daily operations",
      "Opportunities missed or inconsistently handled",
      "Follow-up dependent on people, not systems",
      "Client flow breaks under pressure",
      "Owner carries too much operational load",
      "No visibility into what is actually costing revenue",
    ],
    after: [
      "Opportunities consistently captured and tracked",
      "Follow-up runs with structure and reliability",
      "Faster responses improve conversion rates",
      "Client flow holds under volume and pressure",
      "Owner dependency reduced",
      "Clear visibility into where revenue is gained or lost",
    ],
  },

  // ── Process ───────────────────────────────────────────────────────────────
  process: {
    headline: "How the Process Works",
    steps: [
      {
        number: "01",
        title:  "Audit Revenue Leaks",
        body:
          "Map where capture, follow-up, and conversion are failing in your business.",
      },
      {
        number: "02",
        title:  "Identify Highest-Impact Fixes",
        body:
          "Pinpoint what to fix first. Not everything — just the changes that move money.",
      },
      {
        number: "03",
        title:  "Build the Recovery Plan",
        body:
          "You leave with a prioritized roadmap and clear next steps. No guesswork.",
      },
      {
        number: "04",
        title:  "Install the Infrastructure",
        body:
          "Build the systems. Simple, structured, and designed for how you actually operate.",
      },
      {
        number: "05",
        title:  "Lock In the Gains",
        body:
          "Refine what is working. Expand on what is proven. Nothing new until what is built holds.",
      },
    ],
  },

  // ── Strategy Intensive (Primary Offer) ───────────────────────────────────
  strategyIntensive: {
    headline:    "Start With the Revenue Recovery Intensive",
    subheadline:
      "Find out exactly where you are losing revenue — and what to fix first.",
    badge:       "Best First Step",
    price:       "$1,500",
    deliverables: [
      "One 90-minute strategy session",
      "Review of client flow, team capacity, and revenue leaks",
      "Custom Revenue Recovery Audit",
      "Prioritized action plan",
      "Recommended infrastructure and tools",
      "90-day implementation roadmap",
      "30 days of follow-up support",
    ],
    idealFor:
      "For owners who want fast clarity, not more study. We identify the leaks, build the plan, and get you moving.",
    primaryCTA:   { label: "Apply for the Intensive",       href: "/apply"    },
    secondaryCTA: { label: "Book a Discovery Call First",   href: BOOKING_URL },
  },

  // ── Why Start Here ────────────────────────────────────────────────────────
  whyStartHere: {
    headline: "Why Most Clients Start Here",
    body:
      "Every week without fixed infrastructure is revenue walking away. The Intensive ends the guesswork fast — and gives you a clear path before more opportunities slip through.",
    points: [
      "Where opportunities are slipping through",
      "Which part of client flow is costing the most",
      "What to fix first for real impact",
      "How to improve without adding complexity",
    ],
    closing:
      "You leave with a clear picture and a plan. Not a list of ideas — a real next step.",
  },

  // ── Monthly Advisory (Secondary Offer) ───────────────────────────────────
  monthlyAdvisory: {
    headline:    "Need Continued Support?",
    subheadline: "Monthly Advisory",
    body:
      "For businesses that want help implementing and refining their revenue systems over time.",
    price: "$1,000 / month",
    deliverables: [
      "One 60-minute advisory session each month",
      "Ongoing review of revenue leaks and priorities",
      "Guidance on client flow and team execution",
      "Recommendations to improve capture and conversion",
      "Email and text support between sessions",
    ],
    note:
      "Most clients begin with the Intensive, then continue as needed.",
    cta: { label: "Ask About Monthly Advisory", href: BOOKING_URL },
  },

  // ── Trust ─────────────────────────────────────────────────────────────────
  trust: {
    headline: "Why Clients Work With Me",
    points: [
      {
        title: "Revenue-First Thinking",
        body:  "Every decision is based on impact — where money is gained or lost.",
      },
      {
        title: "Clarity Before Infrastructure",
        body:  "We identify the real problem before building anything.",
      },
      {
        title: "Low-Pressure Approach",
        body:  "No hype, no inflated promises — just honest assessment.",
      },
      {
        title: "Built for Real Operations",
        body:  "Systems are designed for how your business actually runs.",
      },
      {
        title: "Quiet, Reliable Infrastructure",
        body:  "The best systems run in the background and improve consistency.",
      },
      {
        title: "Operator Mindset",
        body:  "Focused on how businesses actually function day-to-day.",
      },
    ],
  },

  // ── FAQ ───────────────────────────────────────────────────────────────────
  faq: {
    headline: "Common Questions",
    items: [
      {
        q: "Is this a fit for my business?",
        a: "If you run an owner-led business with a team and you are experiencing bottlenecks, inconsistent follow-up, or repetitive work that eats up time — yes. The specific industry matters less than the operational situation.",
      },
      {
        q: "Do I need to be technical?",
        a: "No. The goal is to make AI practical and accessible — not to layer on technical complexity. If you can use email and basic business software, you can work with the systems we build.",
      },
      {
        q: "What if this is not the real problem?",
        a: "That is one of the things we figure out in the Intensive. If the underlying issue is something different, we will tell you — and explain why.",
      },
      {
        q: "Will this add more complexity?",
        a: "That is the right instinct. We do not recommend tools for the sake of it. The goal is to simplify operations, not to add another dashboard to manage.",
      },
      {
        q: "What if systems fail or break?",
        a: "We account for that in how we design systems. Everything is built with human review in mind — especially early on. We do not recommend full automation in high-stakes areas without appropriate checkpoints.",
      },
      {
        q: "Will this replace my team?",
        a: "No. The focus is on reducing repetitive, low-value work so your team can spend time on higher-value tasks. Infrastructure is meant to help your team, not replace it.",
      },
      {
        q: "Will my team resist it?",
        a: "Sometimes. That is why we think about adoption from the start. We recommend beginning with simple, low-friction wins that help the team before pushing anything complex or disruptive.",
      },
      {
        q: "Will this disrupt operations?",
        a: "Not if we approach it correctly. Stability comes first. We prioritize changes that fit into how the business already works before introducing anything that requires significant adjustment.",
      },
      {
        q: "Do I need ongoing support?",
        a: "No. Most clients start with the Intensive and decide later if ongoing advisory makes sense. There is no pressure to commit to anything beyond the first step.",
      },
      {
        q: "What happens after I start?",
        a: "After applying, you will receive a short intake form to help me understand your business before we meet. From there, we schedule your 90-minute session and get to work.",
      },
    ],
  },

  // ── Revenue Leak Audit (Bridge Offer) ────────────────────────────────────
  bottleneckAudit: {
    eyebrow:  "Not Ready for the Full Intensive?",
    headline: "Start With the Revenue Leak Audit",
    body:
      "Pick one area where money is leaking. I review it, identify the fix, and hand you a clear action plan.",
    badge:    "Focused First Step",
    price:    "$97",
    deliverables: [
      "One workflow, follow-up gap, or revenue leak reviewed",
      "Three priority fixes",
      "Short action plan or Loom walkthrough",
      "Clear next-step recommendation",
    ],
    creditLine:
      "If you move forward with the Intensive, this is credited.",
    cta: { label: "Start the $97 Revenue Leak Audit", href: "/audit" },
  },

  // ── Final CTA ─────────────────────────────────────────────────────────────
  finalCTA: {
    headline:
      "If You Know Revenue Is Slipping Through the Cracks, Start Here",
    body:
      "We help businesses recover what they are already losing — by fixing client flow, follow-up, and operational infrastructure.",
    cta:       { label: "Book a Discovery Call", href: BOOKING_URL },
    trustLine: "Practical guidance. Clear priorities. No noise.",
  },

  // ── Contact Form (secondary fallback) ─────────────────────────────────────
  contact: {
    headline: "Prefer to Reach Out First?",
    body:     "Send a message and I will follow up within one business day.",
    submitLabel: "Send a Message",
    // TODO: Replace '#' with your form handler endpoint (Formspree, Resend, etc.)
    formAction: "#",
  },

  // ── Footer ────────────────────────────────────────────────────────────────
  footer: {
    brand:   "Jimmy Long",
    tagline: "The Silent Infrastructure",
    flavor:  "I Speak Fluent Latency",
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
      { label: "Privacy Policy",   href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },

} as const
