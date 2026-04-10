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
  BarChart2,
  TrendingUp,
  TrendingDown,
  PieChart,
  Calendar,
  DollarSign,
  FileText,
  ChevronDown,
  CalendarCheck,
} from 'lucide-react'
import { FaqItem } from './FaqItem'

const faqs = [
  {
    q: 'What does the report include?',
    a: 'Each report covers total bookings, revenue generated, occupancy rates, average nightly rate, platform-level breakdown, and key observations — all structured to give you a clear picture of that month.',
  },
  {
    q: 'How often do you provide reports?',
    a: 'Reports are provided monthly, covering the previous calendar month. You receive a consistent, structured snapshot of performance so you can track trends over time.',
  },
  {
    q: 'Is it easy to understand?',
    a: 'Yes. Reports are structured for clarity, not complexity. Key metrics are highlighted, trends are identified, and observations are written in plain language so you can act on them without needing to interpret raw data.',
  },
  {
    q: 'Can this help improve performance?',
    a: "Absolutely. When you can see what's working and what isn't — by property, by platform, by time period — you're in a much stronger position to make changes that actually improve bookings and revenue.",
  },
]

const whatWeProvide = [
  {
    icon: <Calendar className="w-5 h-5 text-primary" />,
    title: 'Booking Performance',
    items: [
      'Total bookings across all properties',
      'Booking patterns and timing trends',
      'Month-on-month comparison',
    ],
    outcome: 'Understand exactly how bookings are trending',
  },
  {
    icon: <DollarSign className="w-5 h-5 text-primary" />,
    title: 'Revenue Overview',
    items: [
      'Total revenue generated each month',
      'Property-level revenue breakdown',
      'Performance comparison across units',
    ],
    outcome: 'Full revenue visibility every month',
  },
  {
    icon: <PieChart className="w-5 h-5 text-primary" />,
    title: 'Occupancy Insights',
    items: [
      'Occupancy rates per property',
      'Gap analysis — identifying empty nights',
      'Consistency tracking over time',
    ],
    outcome: "Know when your properties perform and when they don't",
  },
  {
    icon: <BarChart2 className="w-5 h-5 text-primary" />,
    title: 'Platform Analysis',
    items: [
      'Performance broken down by platform',
      'Booking sources and channel data',
      'Where your revenue is actually coming from',
    ],
    outcome: 'Understand which platforms drive your results',
  },
  {
    icon: <FileText className="w-5 h-5 text-primary" />,
    title: 'Key Observations',
    items: [
      "What's working well this month",
      'Areas that need attention or adjustment',
      'Suggested focus areas going forward',
    ],
    outcome: 'Clear takeaways without needing to interpret raw data',
  },
]

const reportMetrics = [
  { label: 'Total Bookings', value: '28', delta: '+4 vs last month', up: true },
  { label: 'Revenue Generated', value: '£6,420', delta: '+12% vs last month', up: true },
  { label: 'Occupancy Rate', value: '84%', delta: '+6% vs last month', up: true },
  { label: 'Avg Nightly Rate', value: '£229', delta: '-£8 vs last month', up: false },
  { label: 'Top Platform', value: 'Airbnb', delta: '67% of bookings', up: true },
  { label: 'Review Score', value: '4.87', delta: '+0.03 vs last month', up: true },
]

const comparisonRows = [
  {
    area: 'Visibility',
    before: 'No idea how properties are actually performing',
    after: 'Clear monthly snapshot across all metrics',
  },
  {
    area: 'Decisions',
    before: 'Guessing based on gut feel or raw data',
    after: 'Data-backed decisions grounded in structured reports',
  },
  {
    area: 'Reporting',
    before: 'No format, no consistency, no comparison',
    after: 'Consistent monthly reporting with trend context',
  },
  {
    area: 'Clarity',
    before: 'Buried in spreadsheets with no clear takeaway',
    after: 'Plain-language observations with actionable flags',
  },
]

const problemCards = [
  {
    icon: <XCircle className="w-5 h-5 text-error shrink-0 mt-0.5" />,
    title: 'No Performance Visibility',
    desc: 'Without structured reporting, most operators have no clear view of how their properties are actually performing month to month.',
  },
  {
    icon: <XCircle className="w-5 h-5 text-error shrink-0 mt-0.5" />,
    title: 'Decisions Made Without Data',
    desc: 'Pricing adjustments, platform changes, and property decisions get made on gut feel instead of actual performance data.',
  },
  {
    icon: <XCircle className="w-5 h-5 text-error shrink-0 mt-0.5" />,
    title: 'Revenue Gaps Go Unnoticed',
    desc: 'Empty nights, underperforming properties, and low-converting platforms are invisible without consistent tracking.',
  },
  {
    icon: <XCircle className="w-5 h-5 text-error shrink-0 mt-0.5" />,
    title: 'No Trend Awareness',
    desc: "You can't identify seasonal patterns, platform shifts, or occupancy trends if you're not measuring consistently every month.",
  },
  {
    icon: <AlertTriangle className="w-5 h-5 text-warning shrink-0 mt-0.5" />,
    title: 'Time Lost on Manual Analysis',
    desc: 'Pulling data from multiple platforms and assembling it into something meaningful takes hours you could spend on running your business.',
  },
]

const approachPoints = [
  {
    icon: <CalendarCheck className="w-5 h-5 text-primary" />,
    title: 'Consistent Monthly Cadence',
    desc: "Reports are delivered every month without you needing to ask. You get a structured snapshot of the previous month's performance, reliably and on time.",
  },
  {
    icon: <Layers className="w-5 h-5 text-primary" />,
    title: 'Cross-Property Breakdown',
    desc: 'Whether you have one property or ten, reports are structured to show performance at the portfolio level and at the individual property level.',
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-primary" />,
    title: 'Trend Context Included',
    desc: 'Each report includes comparisons to prior months so you can see direction — not just isolated numbers. Trends are identified and flagged clearly.',
  },
  {
    icon: <FileText className="w-5 h-5 text-primary" />,
    title: 'Plain-Language Observations',
    desc: "Numbers alone don't tell you what to do. Every report includes structured key observations written in plain language so the insight is clear.",
  },
]

const whoItIsFor = [
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    label: 'Multi-property STR operators who need portfolio-level visibility',
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-primary" />,
    label: 'Hosts who want to make data-backed decisions about pricing and platforms',
  },
  {
    icon: <BarChart2 className="w-5 h-5 text-primary" />,
    label: 'Operators scaling their portfolio who need consistent tracking as they grow',
  },
  {
    icon: <FileText className="w-5 h-5 text-primary" />,
    label: 'Owners who want structured reporting without building it themselves',
  },
]

export const MonthlyFinanceReportingView: React.FC<{ page: Page }> = ({ page }) => {
  return (
    <>
      <style>{`
        @keyframes mfrFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mfr-fade-1 { animation: mfrFadeUp 0.55s ease both 0.05s; }
        .mfr-fade-2 { animation: mfrFadeUp 0.55s ease both 0.15s; }
        .mfr-fade-3 { animation: mfrFadeUp 0.55s ease both 0.25s; }
        .mfr-fade-4 { animation: mfrFadeUp 0.55s ease both 0.35s; }
        .mfr-fade-5 { animation: mfrFadeUp 0.55s ease both 0.45s; }
        @keyframes pulse-ring-mfr {
          0%, 100% { box-shadow: 0 0 0 0 oklch(var(--p)/0.45); }
          50%       { box-shadow: 0 0 0 8px oklch(var(--p)/0); }
        }
        .pulse-cta-mfr { animation: pulse-ring-mfr 2.4s ease-in-out infinite; }
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
              <div className="mfr-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-6">
                <BarChart2 className="w-3.5 h-3.5" />
                Financial Reporting · UK
              </div>

              <h1 className="mfr-fade-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight mb-5">
                Clear Financial Reporting{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  That Keeps You Informed
                </span>
              </h1>

              <p className="mfr-fade-3 text-lg text-base-content/70 leading-relaxed mb-5 max-w-lg">
                Structured monthly reports covering bookings, revenue, occupancy, platform
                breakdown, and key observations — so you always know how your properties are
                performing.
              </p>

              <div className="mfr-fade-3 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm italic text-base-content/60 mb-8 max-w-lg">
                &ldquo;Monthly finance reporting provides short term rental operators with
                structured performance data to support informed decision-making.&rdquo;
              </div>

              <div className="mfr-fade-4 flex flex-wrap gap-3 mb-8">
                <Link
                  href="/contact"
                  className="pulse-cta-mfr btn btn-primary btn-lg rounded-full px-8 gap-2"
                >
                  Get Monthly Reports <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services/airbnb-va" className="btn btn-outline btn-lg rounded-full">
                  All VA Services
                </Link>
              </div>

              <div className="mfr-fade-5 flex items-center gap-4">
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
                      Trusted by UK hosts
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right — Finance Dashboard */}
            <div className="mfr-fade-3 relative">
              <div className="rounded-2xl border border-base-300 bg-base-100 shadow-xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-base-300 bg-base-200">
                  <span className="text-sm font-semibold text-base-content/80">
                    Monthly Finance Overview
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium">
                    April 2025
                  </span>
                </div>
                <div className="p-4 grid grid-cols-2 gap-3">
                  {reportMetrics.map((m, i) => (
                    <div key={i} className="p-3 rounded-xl bg-base-200 border border-base-300">
                      <p className="text-[11px] text-base-content/50 font-medium uppercase tracking-wide mb-1">
                        {m.label}
                      </p>
                      <p className="text-xl font-extrabold text-base-content mb-0.5">{m.value}</p>
                      <p
                        className={`text-xs flex items-center gap-1 ${m.up ? 'text-success' : 'text-error'}`}
                      >
                        {m.up ? (
                          <TrendingUp className="w-3 h-3" />
                        ) : (
                          <TrendingDown className="w-3 h-3" />
                        )}
                        {m.delta}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="px-4 pb-4">
                  <div className="p-3 rounded-xl bg-primary/8 border border-primary/20">
                    <p className="text-xs font-semibold text-primary mb-1">Key Observation</p>
                    <p className="text-xs text-base-content/70">
                      Revenue up 12% month-on-month. Airbnb continues to lead. Thursday–Sunday
                      occupancy remains strongest — consider adjusting mid-week pricing.
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
            Why Reporting Matters
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-5">
            You Can&apos;t Improve What You Don&apos;t Measure
          </h2>
          <p className="text-lg text-base-content/65 leading-relaxed max-w-2xl mx-auto mb-8">
            Most STR operators are flying blind. They know roughly how much they&apos;ve earned, but
            not how occupancy varies by property, which platforms are underperforming, or whether
            revenue is trending up or down. Without consistent reporting, every decision is a guess.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: <BarChart2 className="w-5 h-5 text-primary" />,
                title: 'Structured Monthly Format',
                body: 'The same clear format every month — so you can compare periods and track direction over time.',
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-secondary" />,
                title: 'Portfolio-Wide Visibility',
                body: 'See performance across all your properties in one place, not scattered across multiple platform dashboards.',
              },
              {
                icon: <FileText className="w-5 h-5 text-accent" />,
                title: 'Plain-Language Observations',
                body: 'Not just numbers. Each report includes clear observations so you know what the data actually means.',
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
              The Real Cost of No Reporting
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              Operating Without Data Has Real Consequences
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto">
              Without structured reporting, most operators are making pricing, platform, and
              property decisions without the data to back them up.
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
              Reporting That Actually Tells You Something
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto">
              Good finance reporting isn&apos;t a data dump — it&apos;s a structured view that
              highlights performance, flags issues, and tells you what changed and why.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <CalendarCheck className="w-5 h-5 text-success" />,
                title: 'Delivered Every Month',
                body: 'You receive your report at the same time each month, covering the full previous period — without needing to ask.',
              },
              {
                icon: <BarChart2 className="w-5 h-5 text-success" />,
                title: 'All Key Metrics Covered',
                body: 'Bookings, revenue, occupancy, average nightly rate, platform split, and cancellations — all in one place.',
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-success" />,
                title: 'Month-on-Month Trend Data',
                body: 'Every metric is shown with comparison to the prior month so you can see direction, not just a snapshot.',
              },
              {
                icon: <FileText className="w-5 h-5 text-success" />,
                title: 'Observations Written For You',
                body: 'The report ends with plain-language key observations so you know exactly what to pay attention to.',
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

      {/* ── WHAT WE PROVIDE ──────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <FileText className="w-3.5 h-3.5" />
              What Each Report Covers
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              Five Core Reporting Areas
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto">
              Each monthly report is structured around five key areas — giving you full visibility
              of what happened, why, and what it means.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block rounded-2xl border border-base-300 overflow-hidden">
            <div className="grid grid-cols-[1fr_2fr_1.5fr] bg-base-200 border-b border-base-300 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-base-content/50">
              <span>Reporting Area</span>
              <span>What&apos;s Included</span>
              <span>The Outcome</span>
            </div>
            {whatWeProvide.map((row, i) => (
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
            {whatWeProvide.map((row, i) => (
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

      {/* ── DATA INSIGHT ─────────────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              Connected to Your Operations
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              Reporting That Feeds Into Everything Else
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto">
              Finance reporting doesn&apos;t sit in isolation. It connects directly to pricing
              reviews, platform strategy, maintenance priorities, and portfolio planning.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: <BarChart2 className="w-5 h-5 text-primary" />,
                label: 'Pricing Strategy',
                body: 'Occupancy gaps and nightly rate trends directly inform pricing adjustments.',
              },
              {
                icon: <PieChart className="w-5 h-5 text-secondary" />,
                label: 'Platform Allocation',
                body: 'Platform-level data helps you decide where to focus listing optimisation.',
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-accent" />,
                label: 'Portfolio Growth',
                body: 'Revenue trends and performance benchmarks support decisions about scaling.',
              },
              {
                icon: <Calendar className="w-5 h-5 text-primary" />,
                label: 'Seasonal Planning',
                body: 'Month-on-month data surfaces seasonal patterns to plan availability around.',
              },
              {
                icon: <FileText className="w-5 h-5 text-secondary" />,
                label: 'Owner Reporting',
                body: 'For co-hosts and PMs, structured reports are ready to share with property owners.',
              },
              {
                icon: <Layers className="w-5 h-5 text-accent" />,
                label: 'VA Task Prioritisation',
                body: 'Performance data helps the VA team focus effort where it has the most impact.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-3 p-5 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/30 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-base-content mb-1">{item.label}</h3>
                  <p className="text-sm text-base-content/60">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMON MISTAKES ───────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-warning/10 border border-warning/25 text-warning text-sm font-medium mb-4">
              <AlertTriangle className="w-3.5 h-3.5" />
              Common Mistakes
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              What Most Operators Get Wrong With Reporting
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto">
              Even operators who track data often fall into patterns that undermine the value of
              that data.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: 'Relying on Platform Dashboards',
                body: "Platform dashboards show you your numbers in isolation. They don't give you a cross-platform view or tell you what the trends mean.",
              },
              {
                title: 'Tracking Inconsistently',
                body: 'Pulling data occasionally rather than monthly means you lose the ability to track direction. Trends require consistent measurement.',
              },
              {
                title: 'No Comparison Context',
                body: 'A 75% occupancy rate means nothing without context. Is that up or down? Better or worse than last quarter? Comparison makes data useful.',
              },
              {
                title: 'Ignoring Low Performers',
                body: "When you're managing multiple properties, poor performers often get overlooked because there's no structured view showing them relative to others.",
              },
              {
                title: 'Sharing Raw Data With Owners',
                body: "Raw spreadsheets aren't owner-friendly. Structured reports with clear observations are far more useful for owner communication and trust.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-3 p-5 rounded-2xl bg-base-200 border border-base-300 hover:border-warning/30 transition-colors"
              >
                <AlertTriangle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-base-content mb-1">{item.title}</h3>
                  <p className="text-sm text-base-content/60">{item.body}</p>
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
              Consistent, Clear, and Actionable
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto">
              Our reporting approach is built around giving you the information you need — in a
              format that&apos;s easy to act on.
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
              No Reporting vs Structured Monthly Reports
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto">
              See the difference structured reporting makes across the areas that matter most to STR
              operators.
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden md:block rounded-2xl border border-base-300 overflow-hidden">
            <div className="grid grid-cols-3 bg-base-200 border-b border-base-300 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-base-content/50">
              <span>Area</span>
              <span className="flex items-center gap-1.5">
                <XCircle className="w-3.5 h-3.5 text-error" /> Without Reporting
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-success" /> With Our Reports
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
              Monthly finance reporting is most valuable for operators who want structured
              visibility without building the system themselves.
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
              Reporting That Builds Confidence
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  'I never had a clear view of how my properties were performing month to month. Now I get a structured report every month and I actually understand it — plain language, no spreadsheet interpretation needed.',
                name: 'James R.',
                role: 'Multi-property host, Manchester',
              },
              {
                quote:
                  'As a co-host managing properties for multiple owners, having structured monthly reports has made owner communication so much easier. I can share something professional instead of a raw data export.',
                name: 'Sophie T.',
                role: 'Co-host, London',
              },
              {
                quote:
                  "The platform breakdown alone was eye-opening. I didn't realise how much Booking.com had dropped off until I saw it in the report. Made a real difference to where I focused my optimisation.",
                name: 'Marcus L.',
                role: 'STR operator, Birmingham',
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
              Ready to See Your Properties Clearly?
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto mb-8">
              Get structured monthly finance reports delivered every month — clear, consistent, and
              ready to act on.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/contact"
                className="pulse-cta-mfr btn btn-primary btn-lg rounded-full px-8 gap-2"
              >
                Start Monthly Reporting <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services/airbnb-va" className="btn btn-outline btn-lg rounded-full">
                View All VA Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MonthlyFinanceReportingView
