/**
 * Ghost Architect — Site Copy
 * ─────────────────────────────────────────────────────────────────────────
 * All page copy lives here. Edit this file to update text without touching
 * any component files. Section order matches the page flow top to bottom.
 */

const BOOKING_URL = "https://calendar.app.google/nZLxNEPADvUKwN9w7"

export const siteContent = {

  // ── Metadata ─────────────────────────────────────────────────────────────
  meta: {
    title: "Practical AI Consulting for Small Businesses | Ghost Architect",
    description:
      "Practical AI consulting for owner-led businesses that want less chaos, better follow-up, smoother operations, and a clear path for using AI without unnecessary complexity.",
  },

  // ── Navigation ────────────────────────────────────────────────────────────
  nav: {
    brand: "Ghost Architect",
    links: [
      { label: "How It Works", href: "#process" },
      { label: "The Offer",    href: "#offer"   },
    ],
    cta: { label: "Book a Call", href: BOOKING_URL },
  },

  // ── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    eyebrow:     "Ghost Architect",
    headline:    "Practical AI Support for Businesses That Need Less Chaos and More Capacity",
    subheadline:
      "You do not need more noise, more tools, or more guesswork. You need clearer priorities, smoother follow-up, and practical AI support that helps the business run better.",
    supportLine: "Quiet systems. Clear priorities. Less noise. More signal.",
    primaryCTA:  { label: "Book an AI Discovery Call",    href: BOOKING_URL },
    secondaryCTA:{ label: "See How the Process Works",   href: "#process"  },
  },

  // ── Who This Is For ───────────────────────────────────────────────────────
  audienceFit: {
    headline:
      "This Is for Businesses That Are Growing, but Still Too Dependent on the Owner",
    intro:
      "If your business has a team but too much still runs through you — follow-up is inconsistent, repetitive work eats up time, and you are not sure where AI fits — you are in the right place.",
    bullets: [
      "Established small business with a team already in place",
      "Too much still depends on the owner to run smoothly",
      "Operations are busy but not always organized or consistent",
      "Follow-up and communication fall through the cracks regularly",
      "AI feels relevant but the path forward is unclear or risky",
      "You want practical support — not more complexity",
    ],
  },

  // ── Pain Points ───────────────────────────────────────────────────────────
  painPoints: {
    headline:
      "The Problem Usually Is Not Effort. It Is Lack of Support Around the Work That Keeps Breaking Down.",
    cards: [
      {
        title: "Repetitive Admin Work",
        body:  "Manual tasks that eat time and energy every week without adding strategic value to the business.",
      },
      {
        title: "Inconsistent Lead Follow-Up",
        body:  "Leads that fall through the cracks because follow-up depends on memory or manual effort.",
      },
      {
        title: "Communication Gaps",
        body:  "Customers or team members waiting too long for responses, updates, or answers.",
      },
      {
        title: "Tasks Slipping Through",
        body:  "Important work that gets delayed or forgotten when the team gets busy or stretched thin.",
      },
      {
        title: "Owner Bottlenecks",
        body:  "Too many decisions, approvals, and tasks that only the owner can handle — slowing everything down.",
      },
      {
        title: "Workflow Inconsistency",
        body:  "Processes that work sometimes but break down under pressure, volume, or personnel changes.",
      },
      {
        title: "Hiring Pressure for Small Gaps",
        body:  "Feeling like you need a full-time hire just to handle repetitive tasks that AI could manage instead.",
      },
    ],
  },

  // ── What You've Already Tried ─────────────────────────────────────────────
  triedAlready: {
    headline: "You Have Probably Already Tried a Few Things",
    intro:
      "Most business owners we work with have already put in real effort. The problem was not commitment — it was a lack of a clear, practical system.",
    items: [
      {
        label: "Doing it manually",
        body:  "Relying on memory, habits, and effort to keep things consistent — and watching it slip anyway.",
      },
      {
        label: "Basic automation tools",
        body:  "Zapier, Make, or similar tools that helped a little but did not solve the real operational gaps.",
      },
      {
        label: "Random AI prompts",
        body:  "Using ChatGPT here and there without a real workflow connecting it to how the business runs.",
      },
      {
        label: "More software without a system",
        body:  "Adding tools that created more to manage instead of simplifying the work.",
      },
      {
        label: "Asking the team to \"just be more consistent\"",
        body:  "Expecting habits and effort to fix what is really a structural and process gap.",
      },
      {
        label: "Experimenting without a roadmap",
        body:  "Testing AI ideas without knowing what to prioritize, what to ignore, or how to measure success.",
      },
    ],
  },

  // ── Why AI Advice Misses the Mark ─────────────────────────────────────────
  whyDifferent: {
    headline:
      "Most AI Advice Fails Small Businesses Because It Starts With Tools Instead of Pressure Points",
    body:
      "Most businesses do not need more software first. They need to understand where the pressure actually is, what is genuinely breaking down, and which AI applications would help — in a way that fits the business and the team.",
    points: [
      "Clarity on what to prioritize before anything is recommended",
      "Workflow review before tool suggestions",
      "Practical plans the team can actually implement",
      "AI applied to real bottlenecks, not hypothetical scenarios",
      "Support that reduces complexity instead of compounding it",
    ],
  },

  // ── Capabilities ──────────────────────────────────────────────────────────
  capabilities: {
    headline: "We Help You Use AI to Support the Business, Not Complicate It",
    midCTA:   { label: "Book an AI Discovery Call", href: BOOKING_URL },
    cards: [
      {
        title: "Reduce Repetitive Admin Work",
        body:  "Identify and automate the manual tasks that drain time and energy without adding strategic value.",
      },
      {
        title: "Improve Lead Follow-Up",
        body:  "Build consistent, AI-assisted follow-up that keeps prospects engaged without depending on memory.",
      },
      {
        title: "Strengthen Customer Communication",
        body:  "Create faster, more consistent responses across email, messaging, and customer support.",
      },
      {
        title: "Support the Team With Simple AI Systems",
        body:  "Give your team practical tools that help them work better without a steep learning curve.",
      },
      {
        title: "Improve Workflow Consistency",
        body:  "Build clearer processes that work the same way every time, regardless of who is running them.",
      },
      {
        title: "Reduce Owner Dependency",
        body:  "Move key tasks and decisions off your plate so the business can run more independently.",
      },
    ],
  },

  // ── Before / After ────────────────────────────────────────────────────────
  beforeAfter: {
    headline: "Before and After the Right AI Strategy",
    before: [
      "Too much depends on the owner to get things done",
      "Repetitive work eats up time every week",
      "Follow-up is inconsistent and leads fall through",
      "Important tasks get delayed when things get busy",
      "Workflows feel messy and hard to standardize",
      "AI feels confusing and hard to apply practically",
    ],
    after: [
      "Clearer priorities and less running through one person",
      "Smoother workflows with less manual strain",
      "Consistent follow-up that runs in the background",
      "Important tasks handled without owner involvement",
      "Structured, repeatable operations that hold under pressure",
      "Practical AI systems tied to real business needs",
    ],
  },

  // ── Process ───────────────────────────────────────────────────────────────
  process: {
    headline: "How the Process Works",
    steps: [
      {
        number: "01",
        title:  "Identify the Bottlenecks",
        body:
          "We start by understanding your business — the team, the workflows, and where things break down most. No assumptions, no templates.",
      },
      {
        number: "02",
        title:  "Find the Best AI Opportunities",
        body:
          "We identify the specific areas where AI can reduce friction, improve consistency, and free up time — and where it probably is not worth the effort.",
      },
      {
        number: "03",
        title:  "Build a Practical Roadmap",
        body:
          "You leave with a clear, prioritized action plan — which tools to consider, what to implement first, and how to approach it without disruption.",
      },
      {
        number: "04",
        title:  "Support Execution If Needed",
        body:
          "For businesses that want ongoing guidance, Monthly AI Advisory provides continued support as you implement, refine, and expand.",
      },
    ],
  },

  // ── Strategy Intensive (Primary Offer) ───────────────────────────────────
  strategyIntensive: {
    headline:    "Start With the AI Strategy Intensive",
    subheadline:
      "A focused consulting engagement designed to help you identify where AI can help, what to prioritize first, and how to move forward without guesswork.",
    badge:       "Best First Step",
    price:       "$1,500",
    deliverables: [
      "One 90-minute strategy session",
      "Review of workflows, team capacity, and operational bottlenecks",
      "Custom AI Opportunity Audit",
      "Prioritized action plan",
      "Recommended AI tools and systems based on your business goals",
      "90-day roadmap",
      "30 days of follow-up support by email and text",
    ],
    idealFor:
      "Best for business owners who want a clear, honest assessment of where AI fits — and a practical plan for moving forward.",
    primaryCTA:   { label: "Book the Strategy Intensive",  href: BOOKING_URL },
    secondaryCTA: { label: "Book a Discovery Call First",  href: BOOKING_URL },
  },

  // ── Why Start Here ────────────────────────────────────────────────────────
  whyStartHere: {
    headline: "Why Most Clients Start Here",
    body:
      "The biggest problem for most business owners is not a lack of AI tools. It is a lack of clarity. They do not know where AI will actually help, what to prioritize, or how to move forward without making things more complicated.",
    points: [
      "Where AI will actually help — and where it will not",
      "What to prioritize first without experimenting blindly",
      "How to build a realistic implementation plan",
      "How to use AI without adding complexity or disruption",
    ],
    closing:
      "The Strategy Intensive gives you answers to all of it — so when you move forward, you move forward with confidence.",
  },

  // ── Monthly Advisory (Secondary Offer) ───────────────────────────────────
  monthlyAdvisory: {
    headline:    "Need Continued Guidance?",
    subheadline: "Monthly AI Advisory",
    body:
      "For businesses that want help turning strategy into execution over time, Monthly AI Advisory provides ongoing support as you implement, refine, and expand the right AI systems.",
    price: "$1,000 / month",
    deliverables: [
      "One 60-minute advisory session each month",
      "Monthly review of progress, bottlenecks, and next priorities",
      "Guidance on workflows, team adoption, and use-case expansion",
      "Ongoing recommendations for improving efficiency and reducing manual work",
      "Email and text support between sessions during agreed support hours",
    ],
    note:
      "Most clients begin with the Strategy Intensive before moving to ongoing advisory. There is no pressure to commit to anything beyond the first step.",
    cta: { label: "Ask About Monthly Advisory", href: BOOKING_URL },
  },

  // ── Trust ─────────────────────────────────────────────────────────────────
  trust: {
    headline: "Why Clients Work With Me",
    points: [
      {
        title: "Practical, Business-First Approach",
        body:  "Every recommendation is grounded in operational reality — not theoretical AI capability or vendor incentives.",
      },
      {
        title: "Clarity Before Tools",
        body:  "We identify the pressure points before suggesting anything. Tools come second. Clarity comes first.",
      },
      {
        title: "Low-Pressure Guidance",
        body:  "No high-pressure sales. No inflated promises. Just honest assessment and a realistic path forward.",
      },
      {
        title: "Built for Implementation",
        body:  "The plan you leave with is designed to be manageable for you and your team — not just impressive on paper.",
      },
      {
        title: "Quiet Systems, Real Results",
        body:  "The best AI support works in the background — reducing noise, improving consistency, not creating more complexity.",
      },
      {
        title: "Operator Mindset",
        body:  "This is not advice from someone who talks about AI in theory. It is support from someone who thinks about how businesses actually run.",
      },
    ],
  },

  // ── FAQ ───────────────────────────────────────────────────────────────────
  faq: {
    headline: "Common Questions",
    items: [
      {
        q: "Is this for a business like mine?",
        a: "If you run an owner-led business with a team and you are experiencing bottlenecks, inconsistent follow-up, or repetitive work that eats up time — yes. The specific industry matters less than the operational situation.",
      },
      {
        q: "I am not very techy. Is this still for me?",
        a: "Yes. The goal is to make AI practical and accessible — not to layer on technical complexity. If you can use email and basic business software, you can work with the systems we build.",
      },
      {
        q: "What if AI is not a fit for my business?",
        a: "That is one of the things we figure out in the Strategy Intensive. If AI genuinely is not a strong fit for your current situation, we will tell you — and explain why.",
      },
      {
        q: "I do not want more software and more complexity.",
        a: "That is the right instinct. We do not recommend tools for the sake of it. The goal is to simplify operations, not to add another dashboard to manage.",
      },
      {
        q: "What if AI makes mistakes?",
        a: "AI tools do make mistakes, and we account for that in how we design systems. Everything is built with human review in mind — especially early on. We do not recommend full automation in high-stakes areas without appropriate checkpoints.",
      },
      {
        q: "Will this replace people on my team?",
        a: "No. The focus is on reducing repetitive, low-value work so your team can spend time on higher-value tasks. AI support is meant to help your team, not replace it.",
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
        q: "Do I need Monthly Advisory right away?",
        a: "No. Most clients start with the Strategy Intensive and decide later if ongoing advisory makes sense. There is no pressure to commit to anything beyond the first step.",
      },
      {
        q: "What happens after I book?",
        a: "After booking, you will receive a short intake form to help me understand your business before we meet. From there, we schedule your 90-minute Strategy Intensive and get to work.",
      },
    ],
  },

  // ── Bottleneck Audit (Bridge Offer) ──────────────────────────────────────
  bottleneckAudit: {
    eyebrow:  "Not Ready for the Full Intensive?",
    headline: "Start With the Bottleneck Audit",
    body:
      "A focused, low-commitment first step. You identify one workflow, follow-up gap, or operational bottleneck — and I review it, identify the highest-leverage fixes, and give you a clear action plan.",
    badge:    "Focused First Step",
    price:    "$97",
    deliverables: [
      "One workflow, follow-up gap, or bottleneck reviewed in depth",
      "Three priority fixes you can act on immediately",
      "Short written action plan or Loom walkthrough",
      "Clear recommendation on what to do next",
    ],
    creditLine:
      "If you move forward with the Strategy Intensive, your audit fee is credited toward it.",
    cta: { label: "Book the Bottleneck Audit", href: BOOKING_URL },
  },

  // ── Final CTA ─────────────────────────────────────────────────────────────
  finalCTA: {
    headline:
      "If You Know AI Matters but Want a Practical Path Forward, Start Here",
    body:
      "We help business owners use AI in a way that actually supports the business — saving time, reducing repetitive work, improving follow-up, and making operations more consistent.",
    cta:       { label: "Book an AI Discovery Call", href: BOOKING_URL },
    trustLine: "Practical guidance. Clear priorities. No hype.",
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
    brand:   "Ghost Architect",
    tagline: "The Silent Infrastructure",
    flavor:  "I Speak Fluent Latency",
    email:   "jimmy@jimmy-long.com",
    phone:   null as string | null, // TODO: Add phone number
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
      { label: "Privacy Policy",  href: "#" }, // TODO: Add real URL
      { label: "Terms of Service", href: "#" }, // TODO: Add real URL
    ],
  },

} as const
