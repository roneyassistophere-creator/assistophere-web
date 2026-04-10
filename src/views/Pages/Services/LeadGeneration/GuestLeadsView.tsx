import React from 'react'
import type { Page } from '@/payload-types'
import Link from 'next/link'
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Layers,
  Users,
  Star,
  TrendingUp,
  Target,
  Search,
  MessageSquare,
  CalendarCheck,
  ChevronDown,
  Megaphone,
  UserCheck,
  MapPin,
  Zap,
} from 'lucide-react'
import { FaqItem } from './FaqItem'

const faqs = [
  {
    q: 'What are guest leads?',
    a: 'Guest leads are prospective guests who have shown interest in booking a short-term rental property — typically via ads, landing pages, or organic channels — before they book on a platform like Airbnb. Capturing them directly lets you convert to direct bookings and reduce platform commission.',
  },
  {
    q: 'How do you generate guest leads?',
    a: 'We use targeted digital advertising, SEO-driven landing pages, and retargeting strategies to attract guests looking for properties in your target area or dates. Leads are captured and delivered to your booking funnel.',
  },
  {
    q: 'Do I need a direct booking website?',
    a: 'A direct booking website significantly improves conversion of guest leads — it gives you a destination to send them where they can book without a platform in the middle. We can advise on integrating this with your existing setup.',
  },
  {
    q: 'What areas and guest types do you target?',
    a: 'We build targeting strategies around your specific property location, niche (leisure, business, long-stay), and target guest profile. This improves lead quality and reduces wasted ad spend.',
  },
]

const whatWeDeliver = [
  {
    icon: <Search className="w-5 h-5 text-primary" />,
    title: 'Targeted Audience Building',
    items: [
      'Defining your ideal guest profile',
      'Location and intent-based targeting',
      'Interest and behaviour segmentation',
    ],
    outcome: 'Ads and content reaching the right guests, not everyone',
  },
  {
    icon: <Megaphone className="w-5 h-5 text-primary" />,
    title: 'Paid & Organic Campaigns',
    items: [
      'Google and Meta ad campaigns',
      'Retargeting for warm audiences',
      'SEO-driven landing page traffic',
    ],
    outcome: 'A consistent flow of inbound guest enquiries',
  },
  {
    icon: <UserCheck className="w-5 h-5 text-primary" />,
    title: 'Lead Capture & Qualification',
    items: [
      'Optimised landing pages for conversion',
      'Lead forms with qualifying questions',
      'Enquiry filtering before delivery',
    ],
    outcome: 'Only relevant, interested guests enter your funnel',
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-primary" />,
    title: 'Funnel Tracking & Reporting',
    items: [
      'Cost per lead and conversion data',
      'Channel performance breakdown',
      'Monthly reporting on pipeline health',
    ],
    outcome: 'Full visibility of what is driving your guest bookings',
  },
]

const pipelineLeads = [
  {
    name: 'Emma T.',
    dates: '12–16 May',
    guests: '2 guests',
    type: 'Weekend break',
    status: 'Hot',
    statusColor: 'text-error',
  },
  {
    name: 'Oliver B.',
    dates: '3–10 June',
    guests: '4 guests',
    type: 'Family holiday',
    status: 'Warm',
    statusColor: 'text-warning',
  },
  {
    name: 'Priya K.',
    dates: '19–21 April',
    guests: '1 guest',
    type: 'Business stay',
    status: 'Enquired',
    statusColor: 'text-primary',
  },
  {
    name: 'Ryan M.',
    dates: '26 Apr – 3 May',
    guests: '6 guests',
    type: 'Group break',
    status: 'Hot',
    statusColor: 'text-error',
  },
  {
    name: 'Aisha F.',
    dates: 'June (flexible)',
    guests: '2 guests',
    type: 'Anniversary trip',
    status: 'Warm',
    statusColor: 'text-warning',
  },
]

const problemCards = [
  {
    icon: <XCircle className="w-5 h-5 text-error shrink-0 mt-0.5" />,
    title: 'Full Dependence on Platforms',
    desc: 'Relying entirely on Airbnb and Booking.com for guests means paying commission on every booking and having no direct relationship with your audience.',
  },
  {
    icon: <XCircle className="w-5 h-5 text-error shrink-0 mt-0.5" />,
    title: 'No Guest Pipeline of Your Own',
    desc: "When platforms change algorithms, increase fees, or restrict your listing, you have no fallback. Without your own guest pipeline, you're entirely at their mercy.",
  },
  {
    icon: <XCircle className="w-5 h-5 text-error shrink-0 mt-0.5" />,
    title: 'Seasonality With No Buffer',
    desc: "During quiet periods, operators with no direct guest channel feel it hardest. A lead generation system helps fill gaps that platforms won't prioritise for you.",
  },
  {
    icon: <XCircle className="w-5 h-5 text-error shrink-0 mt-0.5" />,
    title: 'No Retargeting Capability',
    desc: "Guests who browsed your listing but didn't book are lost forever on platforms. With your own guest lead gen, you can retarget them and recover that demand.",
  },
  {
    icon: <AlertTriangle className="w-5 h-5 text-warning shrink-0 mt-0.5" />,
    title: 'Untapped Long-Stay Demand',
    desc: 'Mid-term and long-stay guests — remote workers, relocating professionals — rarely come through Airbnb searches. Targeted lead gen reaches them where they actually look.',
  },
]

const approachPoints = [
  {
    icon: <Target className="w-5 h-5 text-primary" />,
    title: 'Guest Profile-First Targeting',
    desc: 'We start by defining who your ideal guest is — leisure, business, group, long-stay — and build every campaign around reaching that specific profile in your target area.',
  },
  {
    icon: <MapPin className="w-5 h-5 text-primary" />,
    title: 'Location and Date-Intent Signals',
    desc: 'We target guests showing intent to travel to your area during relevant periods — so ad spend goes toward people actively planning, not passive browsers.',
  },
  {
    icon: <Zap className="w-5 h-5 text-primary" />,
    title: 'Fast Funnel, Low Friction',
    desc: 'Landing pages and lead forms are built to convert quickly — minimal steps, clear value, and a direct path to enquiry or booking.',
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-primary" />,
    title: 'Iterative Optimisation',
    desc: 'Every campaign is tracked and improved over time. Cost per lead drops and quality improves as we refine targeting, messaging, and funnel structure.',
  },
]

const comparisonRows = [
  {
    area: 'Channel Control',
    before: 'Entirely dependent on Airbnb and Booking.com algorithms',
    after: 'Your own direct guest pipeline independent of platforms',
  },
  {
    area: 'Commission',
    before: 'Platform fee on every booking — 10–20% per reservation',
    after: 'Direct bookings with no commission cost',
  },
  {
    area: 'Quiet Periods',
    before: 'Empty calendar with no direct way to fill gaps',
    after: 'Active pipeline generating demand year-round',
  },
  {
    area: 'Guest Relationship',
    before: 'Platform owns the relationship — you see a name and a date',
    after: 'You own the guest contact — and can market to them again',
  },
]

const whoItIsFor = [
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    label: 'Hosts looking to reduce platform dependence and grow direct bookings',
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-primary" />,
    label: 'Operators wanting to fill quiet periods without relying on platform promotions',
  },
  {
    icon: <UserCheck className="w-5 h-5 text-primary" />,
    label: 'STR businesses targeting niche guests — business travellers, long-stays, groups',
  },
  {
    icon: <Target className="w-5 h-5 text-primary" />,
    label: 'Anyone building a direct booking channel who needs a source of guest leads',
  },
]

export const GuestLeadsView: React.FC<{ page: Page }> = ({ page }) => {
  return (
    <>
      <style>{`
        @keyframes glFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .gl-fade-1 { animation: glFadeUp 0.55s ease both 0.05s; }
        .gl-fade-2 { animation: glFadeUp 0.55s ease both 0.15s; }
        .gl-fade-3 { animation: glFadeUp 0.55s ease both 0.25s; }
        .gl-fade-4 { animation: glFadeUp 0.55s ease both 0.35s; }
        .gl-fade-5 { animation: glFadeUp 0.55s ease both 0.45s; }
        @keyframes pulse-ring-gl {
          0%, 100% { box-shadow: 0 0 0 0 oklch(var(--p)/0.45); }
          50%       { box-shadow: 0 0 0 8px oklch(var(--p)/0); }
        }
        .pulse-cta-gl { animation: pulse-ring-gl 2.4s ease-in-out infinite; }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 w-130 h-130 bg-linear-to-br from-primary/13 via-primary/4 to-transparent rounded-full blur-[140px]" />
          <div className="absolute top-1/2 -right-40 w-105 h-105 bg-linear-to-bl from-secondary/10 via-secondary/3 to-transparent rounded-full blur-[120px]" />
        </div>

        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <div className="gl-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-6">
                <Users className="w-3.5 h-3.5" />
                Guest Leads · UK
              </div>

              <h1 className="gl-fade-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight mb-5">
                Direct Guest Leads{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Outside the Platforms
                </span>
              </h1>

              <p className="gl-fade-3 text-lg text-base-content/70 leading-relaxed mb-5 max-w-lg">
                Targeted guest lead generation for STR operators — attracting the right guests
                through paid and organic channels so you can fill your calendar without paying
                Airbnb commission on every booking.
              </p>

              <div className="gl-fade-3 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm italic text-base-content/60 mb-8 max-w-lg">
                &ldquo;Guest lead generation gives short term rental operators a direct channel to
                attract and convert guests — reducing platform dependency and building an audience
                they own.&rdquo;
              </div>

              <div className="gl-fade-4 flex flex-wrap gap-3 mb-8">
                <Link
                  href="/contact"
                  className="pulse-cta-gl btn btn-primary btn-lg rounded-full px-8 gap-2"
                >
                  Start Attracting Direct Guests <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services/lead-generation"
                  className="btn btn-outline btn-lg rounded-full"
                >
                  All Lead Gen Services
                </Link>
              </div>

              <div className="gl-fade-5 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {['bg-primary/20', 'bg-secondary/20', 'bg-accent/20'].map((c, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full border-2 border-base-100 ${c} flex items-center justify-center`}
                    >
                      <Users className="w-3.5 h-3.5 text-base-content/50" />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-base-content/60">
                  <span className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-1 font-medium text-base-content/80">
                      Trusted by UK STR operators
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right — Guest Lead Pipeline */}
            <div className="gl-fade-3 relative">
              <div className="rounded-2xl border border-base-300 bg-base-100 shadow-xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-base-300 bg-base-200">
                  <span className="text-sm font-semibold text-base-content/80">
                    Guest Lead Pipeline
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium">
                    5 Active Leads
                  </span>
                </div>
                <div className="divide-y divide-base-300">
                  {pipelineLeads.map((lead, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-4 py-3 hover:bg-base-200/40 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-secondary/15 border border-secondary/20 flex items-center justify-center shrink-0 text-xs font-bold text-secondary">
                          {lead.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-base-content/80">{lead.name}</p>
                          <p className="text-xs text-base-content/50">
                            {lead.dates} · {lead.type}
                          </p>
                        </div>
                      </div>
                      <span className={`text-xs font-semibold ${lead.statusColor}`}>
                        {lead.status}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="px-4 pb-4 pt-3">
                  <div className="p-3 rounded-xl bg-secondary/8 border border-secondary/20">
                    <p className="text-xs font-semibold text-secondary mb-1">Pipeline Note</p>
                    <p className="text-xs text-base-content/70">
                      2 hot leads ready for follow-up. Ryan M. group booking — 6 guests, 7 nights.
                      High-value enquiry flagged for priority response.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLARITY ──────────────────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            Why Guest Lead Gen Matters
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-5">
            Own Your Guest Channel — Don&apos;t Just Rent It
          </h2>
          <p className="text-lg text-base-content/65 leading-relaxed max-w-2xl mx-auto mb-8">
            Platform bookings are convenient — but every one costs 10–20% in commission, and the
            platform owns the guest relationship, not you. Building a direct guest pipeline gives
            you an audience, a channel, and a revenue stream that doesn&apos;t pay commission every
            time a guest books.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: <TrendingUp className="w-5 h-5 text-primary" />,
                title: 'Commission-Free Revenue',
                body: 'Every direct booking you convert from your own guest pipeline saves platform fees — typically 10–20% per reservation.',
              },
              {
                icon: <UserCheck className="w-5 h-5 text-secondary" />,
                title: 'You Own the Relationship',
                body: 'Direct guest leads are yours. You can retarget, re-market, and build loyalty without a platform intermediary.',
              },
              {
                icon: <Layers className="w-5 h-5 text-accent" />,
                title: 'Platform-Proof Growth',
                body: "Algorithm changes, listing suppression, and fee increases don't affect demand you've built through your own channels.",
              },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-2xl bg-base-100 border border-base-300">
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-base-content mb-1">{item.title}</h3>
                <p className="text-sm text-base-content/60">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM ──────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-4">
              <AlertTriangle className="w-3.5 h-3.5" />
              The Cost of Platform Dependence
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              What Happens When Platforms Are Your Only Guest Source
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto">
              Total dependence on Airbnb and Booking.com isn&apos;t just expensive — it&apos;s a
              vulnerability that gets worse as your portfolio grows.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {problemCards.map((card, i) => (
              <div
                key={i}
                className="flex gap-3 p-5 rounded-2xl bg-base-200 border border-base-300 hover:border-error/30 transition-colors"
              >
                {card.icon}
                <div>
                  <h3 className="font-semibold text-base-content mb-1">{card.title}</h3>
                  <p className="text-sm text-base-content/60">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT GOOD LOOKS LIKE ─────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-success/10 border border-success/25 text-success text-sm font-medium mb-4">
              <CheckCircle2 className="w-3.5 h-3.5" />
              What Good Looks Like
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              A Direct Guest Channel That Works Alongside Platforms
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto">
              Good guest lead generation doesn&apos;t replace platforms — it supplements them with a
              direct channel that grows your revenue and reduces your dependency over time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <CalendarCheck className="w-5 h-5 text-success" />,
                title: 'Fills the Gaps Platforms Leave',
                body: "When Airbnb isn't prioritising your listing, your own guest pipeline keeps enquiries coming in — independent of any algorithm.",
              },
              {
                icon: <UserCheck className="w-5 h-5 text-success" />,
                title: 'Guests Who Are Already Interested',
                body: 'Leads are captured after the guest expressed intent — so every enquiry is warm, not cold.',
              },
              {
                icon: <MessageSquare className="w-5 h-5 text-success" />,
                title: 'Direct Relationship From Day One',
                body: 'You communicate directly, without platform messaging restrictions — better for conversion and guest experience.',
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-success" />,
                title: 'Growing Value Over Time',
                body: 'Every guest who books direct becomes part of your own audience — someone you can re-market to for future stays.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 rounded-2xl bg-base-100 border border-base-300 hover:border-success/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-success/10 border border-success/20 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-base-content mb-1">{item.title}</h3>
                  <p className="text-sm text-base-content/60">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DELIVER ──────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Layers className="w-3.5 h-3.5" />
              What We Deliver
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              Four Areas of Guest Lead Generation
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto">
              From targeting the right audience to converting enquiries into bookings, here&apos;s
              what each engagement covers.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block rounded-2xl border border-base-300 overflow-hidden">
            <div className="grid grid-cols-[1fr_2fr_1.5fr] bg-base-200 border-b border-base-300 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-base-content/50">
              <span>Service Area</span>
              <span>What&apos;s Included</span>
              <span>The Outcome</span>
            </div>
            {whatWeDeliver.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-[1fr_2fr_1.5fr] gap-4 px-6 py-5 items-start border-b border-base-300 last:border-0 hover:bg-base-200/50 transition-colors ${i % 2 === 0 ? 'bg-base-100' : 'bg-base-50'}`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    {row.icon}
                  </div>
                  <span className="font-semibold text-sm text-base-content">{row.title}</span>
                </div>
                <ul className="space-y-1">
                  {row.items.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-base-content/65">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" />
                  <span className="text-sm text-base-content/65 italic">{row.outcome}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {whatWeDeliver.map((row, i) => (
              <div key={i} className="p-5 rounded-2xl bg-base-100 border border-base-300">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    {row.icon}
                  </div>
                  <span className="font-semibold text-base-content">{row.title}</span>
                </div>
                <ul className="space-y-1.5 mb-3">
                  {row.items.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-base-content/65">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="flex items-start gap-2 p-3 rounded-xl bg-success/8 border border-success/20">
                  <TrendingUp className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" />
                  <span className="text-sm text-success/80 italic">{row.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH ─────────────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              How We Approach It
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              Intent-Led, Location-Specific, Built to Convert
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto">
              Our guest lead generation approach targets guests who are already planning to travel —
              then gets them into your funnel before they land on a platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {approachPoints.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-base-content mb-1">{item.title}</h3>
                  <p className="text-sm text-base-content/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Layers className="w-3.5 h-3.5" />
              Before vs After
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              Platform-Only vs Direct Guest Channel
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto">
              See how adding a direct guest pipeline changes the economics and resilience of your
              short-term rental business.
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden md:block rounded-2xl border border-base-300 overflow-hidden">
            <div className="grid grid-cols-3 bg-base-200 border-b border-base-300 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-base-content/50">
              <span>Area</span>
              <span className="flex items-center gap-1.5">
                <XCircle className="w-3.5 h-3.5 text-error" /> Platforms Only
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-success" /> With Direct Guest Pipeline
              </span>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 gap-4 px-6 py-4 border-b border-base-300 last:border-0 ${i % 2 === 0 ? 'bg-base-100' : 'bg-base-50'}`}
              >
                <span className="font-semibold text-sm text-base-content self-center">
                  {row.area}
                </span>
                <div className="flex items-start gap-2 text-sm text-base-content/60">
                  <XCircle className="w-3.5 h-3.5 text-error shrink-0 mt-0.5" />
                  {row.before}
                </div>
                <div className="flex items-start gap-2 text-sm text-base-content/65">
                  <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" />
                  {row.after}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden space-y-4">
            {comparisonRows.map((row, i) => (
              <div key={i} className="rounded-2xl border border-base-300 overflow-hidden">
                <div className="bg-base-200 px-4 py-2.5 text-sm font-semibold text-base-content">
                  {row.area}
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-start gap-2 text-sm text-base-content/60 p-3 rounded-xl bg-error/6 border border-error/15">
                    <XCircle className="w-4 h-4 text-error shrink-0 mt-0.5" />
                    {row.before}
                  </div>
                  <div className="flex items-start gap-2 text-sm text-base-content/65 p-3 rounded-xl bg-success/6 border border-success/15">
                    <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    {row.after}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ─────────────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Users className="w-3.5 h-3.5" />
              Who This Is For
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              Best Suited For
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto">
              Guest lead generation is most valuable for operators who are ready to build a channel
              they own — alongside or instead of relying entirely on platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whoItIsFor.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/30 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <span className="text-sm text-base-content/80">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-600 text-sm font-medium mb-4">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              What Clients Say
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              Direct Guests. Less Commission. More Control.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "I was paying Airbnb 15% on every booking and had no way to reach guests directly. Since setting up a proper guest lead gen funnel I've converted around 30% of bookings as direct — the saving has been significant.",
                name: 'Claire T.',
                role: 'STR host, Lake District',
              },
              {
                quote:
                  "The business travel segment we were targeting wasn't coming through Airbnb at all. Once we ran targeted guest lead gen for that audience specifically, we started getting long-stay enquiries through our own channel consistently.",
                name: 'Robert H.',
                role: 'Multi-property operator, London',
              },
              {
                quote:
                  'We had a quiet January and no way to do anything about it — platform visibility just dropped off. Having our own guest pipeline meant we could run a targeted push in our area and fill gaps that would otherwise have stayed empty.',
                name: 'Natalie W.',
                role: 'Co-host, Edinburgh',
              },
            ].map((t, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 p-6 rounded-2xl bg-base-100 border border-base-300 hover:border-amber-400/30 transition-colors"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-base-content/70 italic leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-base-content">{t.name}</p>
                  <p className="text-xs text-base-content/50">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <ChevronDown className="w-3.5 h-3.5" />
              FAQs
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              Common Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl p-10 lg:p-14 text-center bg-linear-to-br from-primary/22 via-base-200 to-secondary/15 border border-base-300">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[80px]" />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Get Started
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              Ready to Build a Direct Guest Channel?
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto mb-8">
              Stop letting platforms own your guests. Start building a direct pipeline that fills
              your calendar and puts you in control of your bookings.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/contact"
                className="pulse-cta-gl btn btn-primary btn-lg rounded-full px-8 gap-2"
              >
                Start Attracting Direct Guests <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/lead-generation"
                className="btn btn-outline btn-lg rounded-full"
              >
                View All Lead Gen Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default GuestLeadsView
