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
  Percent,
  FileText,
  Eye,
  Search,
  Target,
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
    points: [
      'Total bookings across all properties',
      'Booking patterns and timing trends',
      'Month-on-month comparison',
    ],
  },
  {
    icon: <DollarSign className="w-5 h-5 text-primary" />,
    title: 'Revenue Overview',
    points: [
      'Total revenue generated each month',
      'Property-level revenue breakdown',
      'Performance comparison across units',
    ],
  },
  {
    icon: <Percent className="w-5 h-5 text-primary" />,
    title: 'Occupancy Insights',
    points: [
      'Occupancy rates per property',
      'Gap analysis — identifying empty nights',
      'Consistency tracking over time',
    ],
  },
  {
    icon: <PieChart className="w-5 h-5 text-primary" />,
    title: 'Platform Analysis',
    points: [
      'Performance broken down by platform',
      'Booking sources and channel data',
      'Where your revenue is actually coming from',
    ],
  },
  {
    icon: <Target className="w-5 h-5 text-primary" />,
    title: 'Key Observations',
    points: [
      "What's working well this month",
      'Areas that need attention or adjustment',
      'Suggested focus areas going forward',
    ],
  },
]

const reportMetrics = [
  {
    label: 'Total Bookings',
    icon: <Calendar className="w-4 h-4" />,
    value: '28',
    delta: '+4 vs last month',
    up: true,
  },
  {
    label: 'Revenue Generated',
    icon: <DollarSign className="w-4 h-4" />,
    value: '£6,420',
    delta: '+12% vs last month',
    up: true,
  },
  {
    label: 'Occupancy Rate',
    icon: <Percent className="w-4 h-4" />,
    value: '84%',
    delta: '+6% vs last month',
    up: true,
  },
  {
    label: 'Avg Nightly Rate',
    icon: <BarChart2 className="w-4 h-4" />,
    value: '£229',
    delta: '-£8 vs last month',
    up: false,
  },
  {
    label: 'Top Platform',
    icon: <PieChart className="w-4 h-4" />,
    value: 'Airbnb',
    delta: '67% of bookings',
    up: true,
  },
  {
    label: 'Gap Nights',
    icon: <Eye className="w-4 h-4" />,
    value: '18',
    delta: '-5 vs last month',
    up: true,
  },
]

export const MonthlyFinanceReportingView: React.FC<{ page: Page }> = () => {
  return (
    <article className="flex flex-col w-full overflow-x-hidden font-sans text-base-content selection:bg-primary/20">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpMFR {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mfr-fade-1 { animation: fadeUpMFR 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) both; }
        .mfr-fade-2 { animation: fadeUpMFR 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .mfr-fade-3 { animation: fadeUpMFR 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both; }
        .mfr-fade-4 { animation: fadeUpMFR 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both; }
        .mfr-fade-5 { animation: fadeUpMFR 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes pulse-ring-mfr {
          0%   { box-shadow: 0 0 0 0 oklch(var(--p)/0.35); }
          70%  { box-shadow: 0 0 0 12px oklch(var(--p)/0); }
          100% { box-shadow: 0 0 0 0 oklch(var(--p)/0); }
        }
        .pulse-cta-mfr { animation: pulse-ring-mfr 2.2s ease-out infinite; }
        `,
        }}
      />

      {/* ─── SECTION 1: HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[82vh] flex items-center justify-center overflow-hidden bg-base-100 px-4 py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,oklch(var(--p)/0.10),transparent)]"
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <div className="mfr-fade-1 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <Sparkles className="w-3.5 h-3.5" />
            Airbnb VA · Monthly Finance Reporting
          </div>

          <h1 className="mfr-fade-2 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight text-base-content">
            Monthly Finance Reporting That Shows You{' '}
            <span className="text-primary">What&apos;s Actually Happening</span>
          </h1>

          <p className="mfr-fade-3 max-w-2xl text-lg sm:text-xl text-base-content/70 leading-relaxed">
            Assistophere provides structured monthly reports for UK hosts, giving you a clear view
            of bookings, revenue, performance, and operational insights across your properties.
          </p>

          <p className="sr-only">
            Monthly finance reporting in short term rentals tracks bookings, revenue, and
            performance metrics to help hosts understand how their properties are performing.
          </p>

          <div className="mfr-fade-4 flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/contact"
              className="pulse-cta-mfr inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-bold text-primary-content shadow-lg transition-all hover:brightness-110 hover:scale-105 active:scale-100"
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#what-it-shows"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-base-300 bg-base-100 px-8 py-4 text-sm font-semibold text-base-content transition-all hover:border-primary/40 hover:bg-base-200"
            >
              See How It Works
            </a>
          </div>

          {/* Hero visual — dashboard mockup */}
          <div className="mfr-fade-5 mt-8 w-full max-w-2xl rounded-2xl border border-base-300/60 bg-base-200/60 backdrop-blur-sm p-6 shadow-xl">
            <div className="flex items-center justify-between mb-5">
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold text-base-content/50 uppercase tracking-wider">
                  Monthly Report
                </span>
                <span className="text-sm font-bold text-base-content">
                  March 2026 · All Properties
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <FileText className="w-3 h-3" />
                Report Ready
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {reportMetrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl bg-base-100 border border-base-300/50 px-4 py-3 flex flex-col gap-1.5"
                >
                  <div className="flex items-center gap-1.5 text-base-content/50">
                    {m.icon}
                    <span className="text-xs font-medium">{m.label}</span>
                  </div>
                  <span className="text-lg font-extrabold text-base-content">{m.value}</span>
                  <span
                    className={`flex items-center gap-1 text-xs font-medium ${m.up ? 'text-success' : 'text-error'}`}
                  >
                    {m.up ? (
                      <TrendingUp className="w-3 h-3 shrink-0" />
                    ) : (
                      <TrendingDown className="w-3 h-3 shrink-0" />
                    )}
                    {m.delta}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: BOLD STATEMENT ───────────────────────────────────── */}
      <section className="w-full bg-primary py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-3xl sm:text-4xl font-extrabold text-primary-content leading-tight mb-4">
            If you&apos;re not tracking it, you&apos;re guessing.
          </p>
          <p className="text-lg text-primary-content/80">
            Most hosts don&apos;t have clarity on what&apos;s working and what&apos;s not.
          </p>
        </div>
      </section>

      {/* ─── SECTION 3: CLARITY ──────────────────────────────────────────── */}
      <section className="w-full bg-base-100 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-6">
            Finance Reporting Isn&apos;t Just Numbers
          </h2>
          <p className="text-lg text-base-content/70 mb-4 leading-relaxed">
            It&apos;s about understanding:
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {[
              'Where your bookings are coming from — which platforms, which seasons',
              'How your properties are performing — occupancy, revenue, averages',
              'What needs to change — gaps, underperformers, pricing adjustments',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-base-content/80">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-base text-base-content/60 leading-relaxed border-l-4 border-primary/30 pl-4 italic">
            Without reporting, decisions become guesswork — and guesswork costs money.
          </p>
        </div>
      </section>

      {/* ─── SECTION 4: THE REAL PROBLEM ─────────────────────────────────── */}
      <section className="w-full bg-base-200/50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-3 text-center">
            Why Hosts Lack Financial Clarity
          </h2>
          <p className="text-base-content/60 text-center mb-12 max-w-xl mx-auto">
            The data exists — it just isn&apos;t being organised into anything useful.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <FileText className="w-5 h-5 text-error" />,
                title: 'No Structured Reporting',
                desc: 'Numbers scattered across platforms with no single source of truth.',
              },
              {
                icon: <Eye className="w-5 h-5 text-warning" />,
                title: 'Relying on Platform Dashboards',
                desc: "Platform data is incomplete — it doesn't show cross-property or cross-platform performance.",
              },
              {
                icon: <BarChart2 className="w-5 h-5 text-error" />,
                title: 'No Performance Tracking',
                desc: 'Month-on-month trends are invisible when nothing is recorded consistently.',
              },
              {
                icon: <DollarSign className="w-5 h-5 text-warning" />,
                title: 'Unclear Revenue Breakdown',
                desc: 'Total income is known but where it comes from and why it changes is not.',
              },
              {
                icon: <TrendingDown className="w-5 h-5 text-error" />,
                title: 'No Insight Into Trends',
                desc: 'Without consistent data, patterns are invisible until problems are already serious.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-base-300/60 bg-base-100 p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  {card.icon}
                  <span className="font-bold text-base-content">{card.title}</span>
                </div>
                <p className="text-sm text-base-content/60 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-base-content/50 text-sm mt-10 italic">
            Data exists, but it&apos;s not organised or useful.
          </p>
        </div>
      </section>

      {/* ─── SECTION 5: WHAT A REPORT SHOWS ─────────────────────────────── */}
      <section id="what-it-shows" className="w-full bg-base-100 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-3 text-center">
            What a Monthly Report Should Show
          </h2>
          <p className="text-base-content/60 text-center mb-12 max-w-xl mx-auto">
            Six core areas that give you a complete picture of your business performance.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {[
              {
                icon: <Calendar className="w-6 h-6 text-primary" />,
                label: 'Total Bookings',
                desc: 'Volume and booking trends',
              },
              {
                icon: <DollarSign className="w-6 h-6 text-primary" />,
                label: 'Revenue Generated',
                desc: 'Property-level breakdown',
              },
              {
                icon: <Percent className="w-6 h-6 text-primary" />,
                label: 'Occupancy Rate',
                desc: 'How full your calendar is',
              },
              {
                icon: <BarChart2 className="w-6 h-6 text-primary" />,
                label: 'Average Nightly Rate',
                desc: 'Revenue per night stayed',
              },
              {
                icon: <PieChart className="w-6 h-6 text-primary" />,
                label: 'Platform Performance',
                desc: 'Where bookings come from',
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-primary" />,
                label: 'Key Trends',
                desc: 'What changed and why',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-base-300/60 bg-base-200/50 p-5 flex flex-col items-center text-center gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="font-bold text-base-content text-sm">{item.label}</span>
                <span className="text-xs text-base-content/55 leading-snug">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: WHAT WE PROVIDE ──────────────────────────────────── */}
      <section className="w-full bg-base-200/50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-3 text-center">
            What Our Monthly Reporting Covers
          </h2>
          <p className="text-base-content/60 text-center mb-12 max-w-xl mx-auto">
            Five structured areas — delivered as a clear, actionable report every month.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeProvide.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-base-300/60 bg-base-100 p-6 flex flex-col gap-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="font-bold text-base-content">{item.title}</span>
                </div>
                <ul className="flex flex-col gap-2">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-base-content/70">
                      <CheckCircle2 className="w-4 h-4 text-primary/70 mt-0.5 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="text-primary font-semibold text-lg">
              Outcome: clear understanding of your business performance every month.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: BOLD INSIGHT BLOCK ──────────────────────────────── */}
      <section className="w-full bg-base-content py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-3xl sm:text-4xl font-extrabold text-base-100 leading-tight mb-3">
            Good operators track everything.
          </p>
          <p className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight">
            Great operators act on it.
          </p>
        </div>
      </section>

      {/* ─── SECTION 8: WHAT CHANGES ─────────────────────────────────────── */}
      <section className="w-full bg-base-100 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-12 text-center">
            What Happens When You Have Clear Data
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-error/20 bg-error/5 p-8 flex flex-col gap-5">
              <div className="flex items-center gap-3 mb-2">
                <XCircle className="w-5 h-5 text-error" />
                <span className="font-bold text-base-content text-lg">Without Reporting</span>
              </div>
              {[
                'Guessing which properties are performing',
                'Unclear on what drives revenue changes',
                'Missing opportunities to improve bookings',
                'No direction for pricing or platform strategy',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-error/70 mt-0.5 shrink-0" />
                  <span className="text-sm text-base-content/70">{item}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-success/20 bg-success/5 p-8 flex flex-col gap-5">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span className="font-bold text-base-content text-lg">With Reporting</span>
              </div>
              {[
                'Informed decisions based on actual data',
                'Clear performance view across all properties',
                'Identified improvements and growth opportunities',
                'Better planning for pricing, availability, and platforms',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-success/70 mt-0.5 shrink-0" />
                  <span className="text-sm text-base-content/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: OUR APPROACH ─────────────────────────────────────── */}
      <section className="w-full bg-base-200/50 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-10 text-center">
            How We Handle Reporting Properly
          </h2>
          <div className="flex flex-col gap-5">
            {[
              {
                icon: <FileText className="w-5 h-5 text-primary" />,
                text: 'We structure data clearly — no raw dumps, no spreadsheet overload, just organised information.',
              },
              {
                icon: <Search className="w-5 h-5 text-primary" />,
                text: 'We focus on useful insights — every metric is included because it tells you something actionable.',
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-primary" />,
                text: 'We highlight key patterns — trends that are improving, areas that need attention, and changes month on month.',
              },
              {
                icon: <Eye className="w-5 h-5 text-primary" />,
                text: 'We make reports easy to understand — written for operators, not accountants.',
              },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-4 rounded-2xl border border-base-300/60 bg-base-100 p-5 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <p className="text-base-content/80 leading-relaxed self-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 10: COMMON MISTAKES ─────────────────────────────────── */}
      <section className="w-full bg-base-100 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-10 text-center">
            Where Reporting Goes Wrong
          </h2>
          <div className="flex flex-col gap-4">
            {[
              'Relying only on platform data — incomplete and siloed by design',
              'No consolidation — data from different sources never brought together',
              'Too much raw data, no insight — numbers without context are useless',
              'No regular tracking — one-off reports reveal nothing about trends',
              'No action taken — reports produced and then ignored',
            ].map((mistake) => (
              <div
                key={mistake}
                className="flex items-start gap-3 rounded-xl border border-error/15 bg-error/5 p-4"
              >
                <AlertTriangle className="w-4 h-4 text-error mt-0.5 shrink-0" />
                <span className="text-sm text-base-content/75">{mistake}</span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-base-content/50 text-sm italic">
            Data without clarity is just noise.
          </p>
        </div>
      </section>

      {/* ─── SECTION 11: COMPARISON TABLE ────────────────────────────────── */}
      <section className="w-full bg-base-200/50 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-12 text-center">
            No Reporting vs Structured Reporting
          </h2>

          {/* Desktop table */}
          <div className="hidden sm:block rounded-2xl border border-base-300/60 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-base-300/40">
                  <th className="py-3 px-6 text-left font-semibold text-base-content/70 w-1/2">
                    No Reporting
                  </th>
                  <th className="py-3 px-6 text-left font-semibold text-primary w-1/2">
                    Structured Reporting
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Guesswork on performance', 'Clarity on every metric'],
                  ['Unclear trends', 'Clear month-on-month insights'],
                  ['Reactive decisions', 'Proactive, data-led planning'],
                  ['Disorganised information', 'Structured, actionable reports'],
                ].map(([bad, good], i) => (
                  <tr key={bad} className={i % 2 === 0 ? 'bg-base-100' : 'bg-base-200/30'}>
                    <td className="py-4 px-6 text-base-content/60">
                      <span className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-error/60 shrink-0" />
                        {bad}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-base-content/80">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-success/70 shrink-0" />
                        {good}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="flex sm:hidden flex-col gap-4">
            {[
              ['Guesswork on performance', 'Clarity on every metric'],
              ['Unclear trends', 'Clear month-on-month insights'],
              ['Reactive decisions', 'Proactive, data-led planning'],
              ['Disorganised information', 'Structured, actionable reports'],
            ].map(([bad, good]) => (
              <div
                key={bad}
                className="rounded-2xl border border-base-300/60 bg-base-100 overflow-hidden"
              >
                <div className="flex items-center gap-2 bg-error/5 px-4 py-3 border-b border-base-300/40">
                  <XCircle className="w-4 h-4 text-error/70 shrink-0" />
                  <span className="text-sm text-base-content/60">{bad}</span>
                </div>
                <div className="flex items-center gap-2 bg-success/5 px-4 py-3">
                  <CheckCircle2 className="w-4 h-4 text-success/70 shrink-0" />
                  <span className="text-sm text-base-content/80 font-medium">{good}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 12: WHO THIS IS FOR ─────────────────────────────────── */}
      <section className="w-full bg-base-100 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-12 text-center">
            Who This Is Built For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: <Layers className="w-5 h-5 text-primary" />,
                title: 'Multi-Property Hosts',
                desc: 'Hosts managing several properties who need consolidated reporting across all units — not separate platform dashboards.',
              },
              {
                icon: <BarChart2 className="w-5 h-5 text-primary" />,
                title: 'Serviced Accommodation Businesses',
                desc: 'SA operators who need structured financial visibility to make informed decisions and present performance to stakeholders.',
              },
              {
                icon: <Users className="w-5 h-5 text-primary" />,
                title: 'Operators Wanting Clarity',
                desc: "Anyone operating without a clear picture of performance who wants to understand what's actually driving their numbers.",
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-primary" />,
                title: 'Hosts Looking to Grow',
                desc: 'Hosts who know that growth requires data — and want reporting that translates performance into a clear direction forward.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-base-300/60 bg-base-200/50 p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  {card.icon}
                  <span className="font-bold text-base-content">{card.title}</span>
                </div>
                <p className="text-sm text-base-content/65 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 13: TRUST / TESTIMONIAL ────────────────────────────── */}
      <section className="w-full bg-base-200/50 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-12">
            What Clients Say
          </h2>
          <div className="rounded-2xl border border-base-300/60 bg-base-100 p-8 shadow-sm flex flex-col items-center gap-6">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-warning text-warning" />
              ))}
            </div>
            <blockquote className="text-lg text-base-content/75 italic leading-relaxed max-w-xl">
              &ldquo;I finally understand my business. The monthly reports show me exactly where
              revenue is coming from, which properties are performing, and what I need to focus on.
              I make better decisions now than I ever did before.&rdquo;
            </blockquote>
            <div className="flex flex-col items-center gap-1">
              <span className="font-bold text-base-content">Daniel K.</span>
              <span className="text-sm text-base-content/50">Multi-Property Host, London</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 14: FAQ ─────────────────────────────────────────────── */}
      <section className="w-full bg-base-100 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 15: FINAL CTA ───────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-base-200/50 py-24 px-4">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,oklch(var(--p)/0.12),transparent)]"
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
          <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <Sparkles className="w-3.5 h-3.5" />
            Get Started
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-base-content leading-tight">
            Ready to Understand Your <span className="text-primary">Business Properly?</span>
          </h2>

          <p className="text-lg text-base-content/65 leading-relaxed max-w-xl">
            Let&apos;s give you clear visibility into your performance every month — so every
            decision is based on data, not guesswork.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/contact"
              className="pulse-cta-mfr inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-10 py-4 text-sm font-bold text-primary-content shadow-xl transition-all hover:brightness-110 hover:scale-105 active:scale-100"
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-xl text-left">
            {[
              {
                icon: <FileText className="w-5 h-5 text-primary" />,
                text: 'Structured monthly reports',
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-primary" />,
                text: 'Clear trends and insights',
              },
              {
                icon: <Layers className="w-5 h-5 text-primary" />,
                text: 'Works across all properties',
              },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 rounded-xl bg-base-100 border border-base-300/60 px-4 py-3"
              >
                {item.icon}
                <span className="text-sm font-medium text-base-content/80">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
