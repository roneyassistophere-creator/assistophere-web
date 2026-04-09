import React from 'react'
import type { Page } from '@/payload-types'
import Link from 'next/link'
import {
  CalendarCheck,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Star,
  TrendingUp,
  SlidersHorizontal,
  Users,
  BarChart2,
  AlertTriangle,
  Lightbulb,
  Settings,
  Activity,
  Layers,
  Globe,
  MessageSquare,
} from 'lucide-react'
import { FaqItem } from './FaqItem'

const faqs = [
  {
    q: 'Do you use pricing tools?',
    a: 'Yes — we work with a range of dynamic pricing tools as part of our approach. However, tools alone are not a strategy. We use them as part of a broader pricing system that includes manual review, gap monitoring, and demand-based adjustments. The tool is one input, not the whole answer.',
  },
  {
    q: 'How often do you adjust pricing?',
    a: 'We monitor pricing regularly — typically daily or several times per week depending on the property and how active the calendar is. We pay close attention to upcoming availability gaps, demand signals, and booking windows rather than just setting a rate and leaving it.',
  },
  {
    q: 'Will this increase revenue?',
    a: 'Properly managed pricing improves the balance between occupancy and rate — which is what drives total revenue. We cannot guarantee specific revenue figures, but a well-managed pricing strategy consistently outperforms static or tool-only approaches over time. Results depend on the property, location, and market.',
  },
  {
    q: 'Can you manage multiple properties?',
    a: 'Yes. We work with hosts managing single properties as well as operators running larger portfolios. Pricing strategy across multiple properties requires coordination — we ensure each listing is managed individually while keeping an eye on the portfolio as a whole.',
  },
]

const whatWeCovers = [
  {
    icon: <Activity className="w-5 h-5 text-primary" />,
    title: 'Daily Pricing Monitoring',
    items: [
      'Reviewing calendars regularly',
      'Adjusting rates based on performance',
      'Tracking occupancy and gaps',
    ],
    outcome: 'Pricing that reflects what is actually happening in your calendar.',
  },
  {
    icon: <BarChart2 className="w-5 h-5 text-primary" />,
    title: 'Gap-Based Strategy',
    items: [
      'Identifying and prioritising empty dates',
      'Short-term pricing adjustments',
      'Improving occupancy without underselling',
    ],
    outcome: 'Fewer empty nights, more consistent bookings.',
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-primary" />,
    title: 'Demand-Based Adjustments',
    items: ['Peak vs low periods', 'Seasonal and local demand shifts', 'Booking window analysis'],
    outcome: 'Rates that capture demand when it is strong and attract bookings when it is soft.',
  },
  {
    icon: <Layers className="w-5 h-5 text-primary" />,
    title: 'Minimum Night Strategy',
    items: [
      'Adjusting stay length requirements',
      'Filling shorter calendar gaps',
      'Improving overall booking flexibility',
    ],
    outcome: 'A minimum night setup that maximises the number of bookable dates.',
  },
  {
    icon: <Settings className="w-5 h-5 text-primary" />,
    title: 'Tool + Human Oversight',
    items: [
      'Using dynamic pricing tools as one input',
      'Combined with manual monitoring',
      'Decisions made on real data, not automation alone',
    ],
    outcome: 'A pricing system that adapts and performs consistently.',
  },
]

export const PricingOptimisationView: React.FC<{ page: Page }> = () => {
  return (
    <article className="flex flex-col w-full overflow-x-hidden font-sans text-base-content selection:bg-primary/20">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpPO {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .po-fade-1 { animation: fadeUpPO 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) both; }
        .po-fade-2 { animation: fadeUpPO 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .po-fade-3 { animation: fadeUpPO 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both; }
        .po-fade-4 { animation: fadeUpPO 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both; }
        .po-fade-5 { animation: fadeUpPO 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes pulse-ring-po {
          0%   { box-shadow: 0 0 0 0 oklch(var(--p)/0.35); }
          70%  { box-shadow: 0 0 0 12px oklch(var(--p)/0); }
          100% { box-shadow: 0 0 0 0 oklch(var(--p)/0); }
        }
        .pulse-cta-po { animation: pulse-ring-po 2.5s ease-out infinite; }
      `,
        }}
      />

      {/* ─── SECTION 1: HERO ─────────────────────────────────────────── */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-[60%] h-[80%] bg-linear-to-br from-primary/13 via-primary/4 to-transparent rounded-full blur-[140px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[45%] h-[60%] bg-linear-to-tl from-secondary/12 via-secondary/4 to-transparent rounded-full blur-[100px] -z-10" />

        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Copy */}
            <div>
              <div className="po-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-6 shadow-sm shadow-primary/10">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Pricing Optimisation · UK</span>
              </div>

              <h1 className="po-fade-2 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-tight mb-6">
                Airbnb Pricing Optimisation That{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Increases Bookings and Revenue
                </span>
              </h1>

              <p className="po-fade-3 text-base lg:text-lg text-base-content/65 leading-relaxed mb-4 max-w-lg">
                Assistophere helps UK hosts manage pricing strategies that balance occupancy and
                revenue, ensuring your listings stay competitive and perform consistently.
              </p>

              {/* AI-extractable definition */}
              <div className="po-fade-3 mb-8 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm text-base-content/60 leading-relaxed italic">
                Airbnb pricing optimisation involves adjusting nightly rates based on demand,
                availability, and booking patterns to maximise occupancy and overall revenue.
              </div>

              <div className="po-fade-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="pulse-cta-po btn btn-primary btn-lg rounded-full px-8 gap-2 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/45 transition-all duration-200"
                >
                  <CalendarCheck className="w-5 h-5" />
                  Book a Discovery Call
                </Link>
                <a
                  href="#what-we-cover"
                  className="btn btn-outline btn-lg rounded-full px-8 gap-2 font-semibold border-base-300 hover:bg-base-200 transition-all duration-200"
                >
                  See How It Works
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust bar */}
              <div className="po-fade-5 flex items-center gap-4 mt-8 pt-8 border-t border-base-300/60">
                <div className="flex -space-x-2">
                  {['AH', 'BK', 'CL', 'DM'].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-base-300 border-2 border-base-100 flex items-center justify-center text-[10px] font-bold text-base-content/50"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-base-content/45">Trusted by UK STR operators</p>
                </div>
              </div>
            </div>

            {/* Visual: pricing dashboard mockup */}
            <div className="po-fade-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-base-200 border border-base-300 shadow-2xl shadow-black/40 p-7">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/6" />
                <p className="relative z-10 text-xs font-bold text-base-content/30 uppercase tracking-widest mb-5">
                  Pricing snapshot
                </p>
                <div className="relative z-10 flex flex-col gap-3">
                  {[
                    { label: 'Occupancy Rate', before: '61%', after: '84%', up: true },
                    { label: 'Avg Nightly Rate', before: '£72', after: '£91', up: true },
                    { label: 'Calendar Gaps', before: '18 nights', after: '6 nights', up: false },
                    { label: 'Revenue / Month', before: '£1,540', after: '£2,340', up: true },
                  ].map(({ label, before, after, up }) => (
                    <div
                      key={label}
                      className="grid grid-cols-3 gap-2 items-center bg-base-100/60 rounded-xl px-4 py-3 border border-base-300/60"
                    >
                      <p className="text-xs text-base-content/45 font-medium">{label}</p>
                      <p className="text-xs text-center line-through text-base-content/30">
                        {before}
                      </p>
                      <p
                        className={`text-xs text-right font-bold ${up ? 'text-primary' : 'text-emerald-500'}`}
                      >
                        {after}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="relative z-10 text-[10px] text-base-content/25 mt-5 text-center">
                  [Image Placeholder — pricing dashboard visual]
                </p>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-content text-xs font-bold px-4 py-2 rounded-2xl shadow-lg shadow-primary/30">
                Dynamic + Human
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: CLARITY ──────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-6">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Reset Your Thinking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            Pricing Isn&apos;t About Setting One Number
          </h2>
          <p className="text-base-content/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Pricing in short term rentals changes constantly. It depends on demand, timing,
            availability, and competition — none of which stay the same week to week.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            {[
              {
                icon: <XCircle className="w-4 h-4 text-error" />,
                label: 'Static pricing',
                desc: 'Set once, left alone — misses every shift in demand.',
              },
              {
                icon: <CheckCircle2 className="w-4 h-4 text-primary" />,
                label: 'Flexible pricing',
                desc: 'Adjusts with the market — captures demand when it is there.',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex gap-3 p-5 rounded-2xl bg-base-100 border border-base-300"
              >
                <div className="shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <p className="font-semibold text-sm text-base-content mb-1">{item.label}</p>
                  <p className="text-xs text-base-content/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: THE REAL PROBLEM ─────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-4">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>The Problem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Why Most Pricing Strategies Don&apos;t Work
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              {
                label: 'Relying on default tool settings',
                desc: 'Tools start with generic parameters — they do not know your property or market.',
              },
              {
                label: 'Not monitoring gaps',
                desc: 'Empty dates get closer without any price adjustment to attract bookings.',
              },
              {
                label: 'Pricing too high',
                desc: 'Listing sits empty while comparable properties take the bookings.',
              },
              {
                label: 'Pricing too low',
                desc: 'Bookings come in, but at rates that do not reflect the value of the property.',
              },
              {
                label: 'No clear strategy',
                desc: 'Reacting to each situation individually with no consistent approach behind it.',
              },
              {
                label: 'Over-reliance on automation',
                desc: 'Tools help — but automation without oversight leads to inconsistent results.',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex gap-3 p-5 rounded-2xl bg-base-200 border border-base-300 hover:border-error/30 transition-colors"
              >
                <XCircle className="w-4 h-4 text-error shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-base-content mb-1">{item.label}</p>
                  <p className="text-xs text-base-content/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-base-content/50 text-base italic border-l-4 border-primary/40 pl-5 text-left">
              Pricing without active management leads to inconsistent results.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: WHAT GOOD PRICING LOOKS LIKE ─────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>The Standard</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What a Proper Pricing Strategy Should Do
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Fill Calendar Gaps',
                desc: 'Adjust pricing based on upcoming availability. When dates are getting close and remain empty, the rate needs to respond to that reality.',
              },
              {
                title: 'Maximise High-Demand Dates',
                desc: 'When demand is strong — events, weekends, seasonal peaks — rates should reflect that. Missing demand is lost revenue you cannot recover.',
              },
              {
                title: 'Stay Competitive',
                desc: 'Align with market trends and local demand. Pricing is relative — guests compare your listing to others in the same area at the same time.',
              },
              {
                title: 'Balance Occupancy and Revenue',
                desc: 'Not just bookings, but profitable bookings. A full calendar at below-market rates is not a win. The goal is the right rate for the right dates.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/30 transition-colors"
              >
                <div className="shrink-0 w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-base text-base-content mb-2">{item.title}</h3>
                  <p className="text-sm text-base-content/55 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: WHAT WE DO ────────────────────────────────────── */}
      <section id="what-we-cover" className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>What We Cover</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Our Pricing Optimisation Covers
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            {whatWeCovers.map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1.5fr] gap-5 p-6 rounded-2xl bg-base-200 border border-base-300 hover:border-primary/30 transition-colors"
              >
                {/* Title */}
                <div className="flex gap-3 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mt-0.5">
                    {item.icon}
                  </div>
                  <p className="font-bold text-base text-base-content pt-2">{item.title}</p>
                </div>
                {/* Items */}
                <ul className="flex flex-col gap-2">
                  {item.items.map((pt) => (
                    <li key={pt} className="flex gap-2 items-start text-sm text-base-content/65">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
                {/* Outcome */}
                <div className="flex items-start gap-2 pl-0 lg:pl-4 lg:border-l border-base-300">
                  <TrendingUp className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-base-content/60 italic leading-relaxed">
                    {item.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-5 rounded-2xl bg-primary/8 border border-primary/20 text-center">
            <p className="text-base font-semibold text-base-content/75">
              👉 Outcome: A pricing system that adapts and performs.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: PRICING IN ISOLATION ─────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>System Thinking</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Pricing Doesn&apos;t Work in Isolation
            </h2>
            <p className="text-base-content/60 text-base leading-relaxed max-w-2xl mx-auto mb-10">
              Pricing is connected to your listing quality, your platform visibility, and your
              booking flow. If one part is weak, pricing alone will not fix it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: <Globe className="w-5 h-5 text-primary" />,
                label: 'Listing Quality',
                desc: 'A poorly presented listing reduces conversion regardless of price.',
              },
              {
                icon: <Activity className="w-5 h-5 text-primary" />,
                label: 'Platform Visibility',
                desc: 'If you are not showing up in search, pricing cannot help.',
              },
              {
                icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
                label: 'Booking Flow',
                desc: 'Guests who click but cannot book easily are lost before pricing matters.',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-3 p-5 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/30 transition-colors text-center items-center"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="font-bold text-sm text-base-content">{item.label}</p>
                <p className="text-xs text-base-content/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: COMMON MISTAKES ──────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-4">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Common Mistakes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Where Pricing Goes Wrong
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              {
                point: 'Setting prices once and leaving them',
                detail: 'The market moves daily. A rate set in January is not right in March.',
              },
              {
                point: 'Ignoring booking windows',
                detail:
                  'Different guests book at different lead times — your pricing should account for both.',
              },
              {
                point: 'Not reacting to demand',
                detail:
                  'Local events, school holidays, and seasonal shifts all change what the market will pay.',
              },
              {
                point: 'Copying competitors blindly',
                detail:
                  'Their property, capacity, and costs are different. Copying their price is not a strategy.',
              },
              {
                point: 'Over-reliance on automation',
                detail:
                  'Tools optimise for their own metrics — not necessarily yours. Human oversight matters.',
              },
            ].map((item) => (
              <div
                key={item.point}
                className="flex gap-3 p-5 rounded-2xl bg-base-200 border border-base-300 hover:border-error/25 transition-colors"
              >
                <XCircle className="w-4 h-4 text-error shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-base-content mb-1">{item.point}</p>
                  <p className="text-xs text-base-content/50 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-base-content/45 italic text-base border-t border-base-300/60 pt-6">
            Tools help, but strategy drives results.
          </p>
        </div>
      </section>

      {/* ─── SECTION 8: OUR APPROACH ─────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Settings className="w-3.5 h-3.5" />
              <span>Our Approach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              How We Manage Pricing Properly
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <Activity className="w-5 h-5 text-primary" />,
                title: 'We monitor regularly, not occasionally',
                desc: 'Pricing decisions happen frequently — we are watching your calendar consistently, not checking in once a month.',
              },
              {
                icon: <BarChart2 className="w-5 h-5 text-primary" />,
                title: 'We adjust based on real data',
                desc: 'Rate changes are driven by actual calendar performance, booking pace, and demand signals — not guesswork.',
              },
              {
                icon: <Settings className="w-5 h-5 text-primary" />,
                title: 'We combine tools with human decisions',
                desc: 'We use pricing tools as one input alongside manual review — because the best results come from both working together.',
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-primary" />,
                title: 'We align pricing with your overall strategy',
                desc: 'Pricing does not sit alone — it works with your listing quality, availability settings, and occupancy targets.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/30 transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-sm text-base-content mb-1.5">{item.title}</p>
                  <p className="text-xs text-base-content/55 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: COMPARISON TABLE ─────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <BarChart2 className="w-3.5 h-3.5" />
              <span>Comparison</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Static Pricing vs Optimised Pricing
            </h2>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block rounded-2xl overflow-hidden border border-base-300 shadow-lg">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="px-6 py-4 bg-base-300/60 text-left text-xs font-bold uppercase tracking-wider text-base-content/40 w-1/4">
                    Area
                  </th>
                  <th className="px-6 py-4 bg-base-300/60 text-left text-xs font-bold uppercase tracking-wider text-base-content/40 w-[37.5%]">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-error" />
                      Static Pricing
                    </div>
                  </th>
                  <th className="px-6 py-4 bg-primary/12 text-left text-xs font-bold uppercase tracking-wider text-primary w-[37.5%]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Optimised Pricing
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Rates', 'Fixed rates', 'Dynamic adjustments'],
                  ['Demand', 'Missed demand', 'Captured opportunities'],
                  ['Bookings', 'Inconsistent', 'Stable occupancy'],
                  ['Revenue', 'Lower overall returns', 'Improved returns'],
                ].map(([area, stat, opt], i) => (
                  <tr key={area} className={i % 2 === 0 ? 'bg-base-100' : 'bg-base-200/50'}>
                    <td className="px-6 py-4 font-semibold text-base-content/60 text-xs uppercase tracking-wider">
                      {area}
                    </td>
                    <td className="px-6 py-4 text-base-content/50">{stat}</td>
                    <td className="px-6 py-4 text-base-content font-semibold bg-primary/5">
                      {opt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden flex flex-col gap-3">
            {[
              ['Rates', 'Fixed rates', 'Dynamic adjustments'],
              ['Demand', 'Missed demand', 'Captured opportunities'],
              ['Bookings', 'Inconsistent', 'Stable occupancy'],
              ['Revenue', 'Lower overall returns', 'Improved returns'],
            ].map(([area, stat, opt]) => (
              <div key={area} className="rounded-2xl overflow-hidden border border-base-300">
                <div className="px-4 py-2.5 bg-base-300/60 text-xs font-bold text-base-content/40 uppercase tracking-wider">
                  {area}
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-3 py-3.5 border-r border-base-300 bg-base-100">
                    <p className="text-[10px] text-base-content/35 mb-1">Static</p>
                    <p className="text-xs text-base-content/50">{stat}</p>
                  </div>
                  <div className="px-3 py-3.5 bg-primary/8">
                    <p className="text-[10px] text-primary mb-1 font-bold">Optimised</p>
                    <p className="text-xs text-base-content/80 font-semibold">{opt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 10: WHO THIS IS FOR ─────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>Right Fit</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Who This Is Built For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <BarChart2 className="w-5 h-5 text-primary" />,
                title: 'Hosts with calendar gaps',
                desc: 'Empty nights are costing you revenue. A pricing strategy focused on gap-filling changes that.',
              },
              {
                icon: <Activity className="w-5 h-5 text-primary" />,
                title: 'Listings with inconsistent bookings',
                desc: 'Some months are full, others not. Active pricing management smooths out that inconsistency.',
              },
              {
                icon: <Globe className="w-5 h-5 text-primary" />,
                title: 'Serviced accommodation businesses',
                desc: 'Operating professionally means pricing professionally — not relying on defaults or guesswork.',
              },
              {
                icon: <Layers className="w-5 h-5 text-primary" />,
                title: 'Operators scaling portfolios',
                desc: 'More properties means more pricing decisions. We manage that complexity so you do not have to.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 items-start p-5 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/30 transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-base-content text-sm mb-1">{item.title}</p>
                  <p className="text-base-content/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 11: TESTIMONIALS ─────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-sm font-medium mb-4">
              <Star className="w-3.5 h-3.5" />
              <span>Client Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col gap-5 p-6 rounded-2xl bg-base-200 border border-base-300 hover:border-amber-500/25 transition-colors"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="flex-1 rounded-xl bg-base-300/50 border border-base-300 p-4 flex items-center justify-center min-h-24">
                  <p className="text-base-content/30 text-xs text-center font-medium">
                    Testimonial Placeholder — Client Quote #{i}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-base-300 flex items-center justify-center text-xs font-bold text-base-content/40">
                    {['AH', 'BK', 'CL'][i - 1]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-base-content/65">Client Name</p>
                    <p className="text-xs text-base-content/35">STR Operator, UK</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 12: FAQ ──────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Common Questions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 13: FINAL CTA ────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/22 via-base-200 to-secondary/15 -z-10" />
        <div className="absolute inset-0 bg-base-100/55 -z-10" />
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-linear-to-b from-primary/12 to-transparent rounded-full blur-[130px] -z-10" />

        <div className="container max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-medium mb-6">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Improve Your Pricing</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-[1.12]">
            Ready to Improve Your{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Pricing Strategy?
            </span>
          </h2>

          <p className="text-lg text-base-content/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s build a pricing system that keeps your calendar full and your revenue strong.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="pulse-cta-po btn btn-primary btn-lg rounded-full px-10 gap-2 font-semibold shadow-xl shadow-primary/30 hover:shadow-primary/55 transition-all duration-200"
            >
              <CalendarCheck className="w-5 h-5" />
              Book a Discovery Call
            </Link>
            <Link
              href="/services"
              className="btn btn-outline btn-lg rounded-full px-8 gap-2 font-semibold border-base-300 hover:bg-base-200 transition-all duration-200"
            >
              See All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-xs text-base-content/30 mt-7">
            Free 30-min call · No commitment · UK-based team
          </p>
        </div>
      </section>
    </article>
  )
}
