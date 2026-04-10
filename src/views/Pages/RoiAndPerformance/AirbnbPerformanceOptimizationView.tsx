import React from 'react'
import {
  TrendingUp,
  Settings,
  Star,
  Phone,
  ArrowRight,
  CheckCircle2,
  XCircle,
  BarChart3,
  Target,
  Building2,
  MessageSquare,
  ChevronRight,
  AlertTriangle,
  CalendarDays,
  Megaphone,
  Zap,
  LineChart,
  Activity,
  LayoutDashboard,
  Search,
} from 'lucide-react'
import type { Page } from '@/payload-types'

export const AirbnbPerformanceOptimizationView: React.FC<{ page: Page }> = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content overflow-x-hidden">
      <style>{`
        @keyframes pulse-ring-apo {
          0%,100% { box-shadow: 0 0 0 0 hsl(var(--p)/.35); }
          50%      { box-shadow: 0 0 0 10px hsl(var(--p)/0); }
        }
        @keyframes apo-fade-up {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .apo-fade-1 { animation: apo-fade-up .55s ease both .10s; }
        .apo-fade-2 { animation: apo-fade-up .55s ease both .22s; }
        .apo-fade-3 { animation: apo-fade-up .55s ease both .34s; }
        .apo-fade-4 { animation: apo-fade-up .55s ease both .46s; }
        .apo-fade-5 { animation: apo-fade-up .55s ease both .58s; }
        .pulse-cta-apo { animation: pulse-ring-apo 2.4s ease-in-out infinite; }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 w-130 h-130 bg-linear-to-br from-primary/13 via-primary/4 to-transparent rounded-full blur-[140px]" />
          <div className="absolute top-1/2 -right-40 w-105 h-105 bg-linear-to-bl from-secondary/10 via-secondary/3 to-transparent rounded-full blur-[120px]" />
        </div>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="apo-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium">
                <Activity className="w-4 h-4" />
                Performance Optimisation · ROI &amp; Performance · UK
              </div>
              <h1 className="apo-fade-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight">
                Airbnb Performance Optimisation That Improves{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Bookings and Revenue
                </span>
              </h1>
              <p className="apo-fade-3 text-lg text-base-content/70 leading-relaxed max-w-lg">
                Assistophere helps UK hosts improve listing performance through structured
                optimisation across pricing, listings, operations, and systems.
              </p>
              <div className="apo-fade-4 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm italic text-base-content/65">
                Airbnb performance optimisation involves improving listings, pricing, and operations
                to increase bookings, occupancy, and overall revenue.
              </div>
              <div className="apo-fade-5 flex flex-wrap gap-3 pt-1">
                <button className="pulse-cta-apo btn btn-primary btn-lg rounded-full px-8 gap-2">
                  <Phone className="w-4 h-4" /> Book a Discovery Call
                </button>
                <button className="btn btn-outline btn-lg rounded-full px-8 gap-2">
                  <ArrowRight className="w-4 h-4" /> See How It Works
                </button>
              </div>
              <div className="apo-fade-5 flex items-center gap-3 pt-2">
                <div className="flex -space-x-2">
                  {['bg-primary', 'bg-secondary', 'bg-accent', 'bg-neutral'].map((c, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full border-2 border-base-100 ${c} flex items-center justify-center text-xs font-bold text-white`}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-base-content/55 mt-0.5">
                    Trusted by UK hosts and SA operators
                  </p>
                </div>
              </div>
            </div>

            {/* Hero visual — performance metrics dashboard */}
            <div className="hidden lg:block">
              <div className="relative rounded-3xl border border-base-300 bg-base-200/60 backdrop-blur-sm p-7 shadow-xl">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-error/70" />
                  <div className="w-3 h-3 rounded-full bg-warning/70" />
                  <div className="w-3 h-3 rounded-full bg-success/70" />
                  <span className="ml-2 text-xs text-base-content/40 font-mono">
                    performance.dashboard
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: 'Occupancy', before: '58%', after: '74%', up: true },
                    { label: 'Monthly Revenue', before: '£1,820', after: '£2,640', up: true },
                    { label: 'Review Score', before: '4.3', after: '4.8', up: true },
                    { label: 'Response Rate', before: '71%', after: '98%', up: true },
                  ].map(({ label, before, after, up }) => (
                    <div
                      key={label}
                      className="bg-base-100 rounded-xl border border-base-300 px-4 py-3"
                    >
                      <p className="text-[10px] font-bold uppercase tracking-widest text-base-content/35 mb-1">
                        {label}
                      </p>
                      <div className="flex items-end gap-2">
                        <span className="text-xs text-error/70 line-through">{before}</span>
                        <span className="text-base font-extrabold text-success">{after}</span>
                        {up && <TrendingUp className="w-3.5 h-3.5 text-success mb-0.5" />}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-base-100 rounded-xl border border-primary/20 px-4 py-3 flex items-center justify-between">
                  <span className="text-xs text-base-content/50">Overall performance</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 rounded-full bg-base-300 overflow-hidden">
                      <div className="h-full w-[78%] bg-success rounded-full" />
                    </div>
                    <span className="text-xs font-bold text-success">+45%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLARITY ──────────────────────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-2">
              <LayoutDashboard className="w-4 h-4" /> The Full Picture
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Performance Isn&apos;t One Thing. It&apos;s Everything Working Together.
            </h2>
            <p className="text-base-content/65 text-lg leading-relaxed">
              Most hosts focus on a single lever — usually the listing or the price. But performance
              is the result of multiple factors running in sync. Improving just one part won&apos;t
              fix the whole system.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { icon: Megaphone, label: 'Your listing' },
                { icon: BarChart3, label: 'Your pricing' },
                { icon: CalendarDays, label: 'Your calendar' },
                { icon: Settings, label: 'Your operations' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="bg-base-100 rounded-2xl border border-primary/15 p-4 text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-semibold">{label}</p>
                </div>
              ))}
            </div>
            <p className="text-base-content/55 text-sm italic">
              All four need to work together for performance to improve meaningfully.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE REAL PROBLEM ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-4">
                <XCircle className="w-4 h-4" /> Root Causes
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Why Listings Underperform</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  point: 'Poor listing presentation',
                  detail:
                    'Weak photography, incomplete descriptions, and missing amenity details suppress search visibility and reduce booking conversion rate.',
                },
                {
                  point: 'Incorrect pricing',
                  detail:
                    'Flat pricing or rates set without reference to local demand leave revenue uncaptured during peak periods and reduce occupancy in slow ones.',
                },
                {
                  point: 'Calendar gaps',
                  detail:
                    'Minimum stay restrictions, blocked dates, and poor availability windows create unnecessary gaps that reduce total occupancy.',
                },
                {
                  point: 'Slow guest communication',
                  detail:
                    'Response time is a direct ranking signal on Airbnb. Slow replies reduce visibility and lose bookings to faster-responding competitors.',
                },
                {
                  point: 'Weak operational structure',
                  detail:
                    'Inconsistent cleaning standards, late check-ins, and poor guest experience directly impact review scores — the primary driver of long-term performance.',
                },
              ].map(({ point, detail }) => (
                <div
                  key={point}
                  className="flex gap-4 p-5 rounded-2xl border border-error/15 bg-error/4"
                >
                  <XCircle className="w-5 h-5 text-error shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">{point}</p>
                    <p className="text-xs text-base-content/55 mt-0.5 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-base-content/55 mt-8 italic text-sm">
              Low performance is usually a combination of small issues — not one large problem.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT OPTIMISATION MEANS ──────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <CheckCircle2 className="w-4 h-4" /> The Full Scope
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">What Proper Optimisation Covers</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              {
                icon: Megaphone,
                title: 'Listing Optimisation',
                desc: 'Photography, description, titles, amenity listings, and highlight sections — all reviewed and improved for visibility and conversion.',
              },
              {
                icon: BarChart3,
                title: 'Pricing Strategy',
                desc: 'Dynamic pricing calibrated to local demand, seasonality, and competitor positioning — not guesswork or a flat rate.',
              },
              {
                icon: CalendarDays,
                title: 'Calendar Management',
                desc: 'Minimum stay rules, availability windows, and gap-filling strategies that reduce dead dates without lowering standards.',
              },
              {
                icon: MessageSquare,
                title: 'Guest Communication',
                desc: 'Faster response times, automated sequences, and guest experience improvements that build stronger review scores.',
              },
              {
                icon: Settings,
                title: 'Operational Efficiency',
                desc: 'Cleaning, turnover, maintenance, and check-in processes reviewed and improved to protect review scores and reduce cost per stay.',
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="bg-base-100 rounded-2xl border border-base-300 p-5 relative"
              >
                <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-primary text-primary-content text-xs font-bold flex items-center justify-center shadow">
                  {i + 1}
                </div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 mt-1">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-sm mb-2">{title}</h3>
                <p className="text-xs text-base-content/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE OPTIMISE ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Settings className="w-4 h-4" /> Our Scope
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              What Our Performance Optimisation Covers
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1.5fr] gap-px bg-base-300 rounded-3xl overflow-hidden border border-base-300">
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              Area
            </div>
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              What We Improve
            </div>
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              Outcome
            </div>
            {[
              {
                area: 'Listing Performance',
                icon: Megaphone,
                tasks: [
                  'Improving search visibility through better content and keywords',
                  'Refining photography, titles, and description structure',
                  'Increasing engagement and booking conversion rate',
                ],
                outcome:
                  'Your listing appears more often and converts more of its traffic into bookings.',
              },
              {
                area: 'Pricing & Revenue',
                icon: BarChart3,
                tasks: [
                  'Adjusting nightly pricing to reflect real demand patterns',
                  'Improving occupancy without sacrificing revenue per stay',
                  'Maximising returns across peak, shoulder, and low seasons',
                ],
                outcome: 'More revenue per available night, with fewer calendar gaps.',
              },
              {
                area: 'Calendar Efficiency',
                icon: CalendarDays,
                tasks: [
                  'Reducing unnecessary empty dates through availability optimisation',
                  'Improving booking flow with smarter minimum-stay rules',
                  'Filling shoulder periods without undermining rate strategy',
                ],
                outcome: 'Higher occupancy with fewer wasted dates across the calendar.',
              },
              {
                area: 'Guest Experience',
                icon: MessageSquare,
                tasks: [
                  'Improving communication speed and consistency',
                  'Reducing friction in the check-in and check-out process',
                  'Enhancing the overall guest experience to drive better reviews',
                ],
                outcome:
                  'Stronger review scores that directly increase future booking performance.',
              },
              {
                area: 'System Alignment',
                icon: Zap,
                tasks: [
                  'Connecting pricing, calendar, listing, and operations into a coherent system',
                  'Ensuring each part of the business supports overall performance',
                  'Identifying and closing gaps between the different operational layers',
                ],
                outcome:
                  'A balanced, coordinated operation where every element reinforces the others.',
              },
            ].map(({ area, icon: Icon, tasks, outcome }) => (
              <React.Fragment key={area}>
                <div className="bg-base-100 px-5 py-5 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-sm mt-1.5">{area}</span>
                </div>
                <div className="bg-base-100 px-5 py-5">
                  <ul className="space-y-1.5">
                    {tasks.map((t) => (
                      <li key={t} className="flex items-center gap-2 text-sm text-base-content/70">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-base-100 px-5 py-5">
                  <p className="text-sm text-base-content/60 leading-relaxed italic">{outcome}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
          <p className="text-center mt-8 text-base-content/60 text-sm">
            The result: a balanced system that improves bookings and revenue together.
          </p>
        </div>
      </section>

      {/* ── BEFORE / AFTER ───────────────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
                <LineChart className="w-4 h-4" /> The Difference
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">
                What Changes When Performance Improves
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-error/20 bg-error/4 p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-error/60 mb-4">
                  Before Optimisation
                </p>
                <div className="space-y-3">
                  {[
                    'Inconsistent bookings with unpredictable gaps',
                    'Low occupancy despite competitive pricing',
                    'Unclear what is causing underperformance',
                    'Reactive decisions based on gut feeling',
                  ].map((point) => (
                    <div key={point} className="flex gap-3 items-start">
                      <XCircle className="w-4 h-4 text-error shrink-0 mt-0.5" />
                      <p className="text-sm text-base-content/65 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-success/20 bg-success/5 p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-success/60 mb-4">
                  After Optimisation
                </p>
                <div className="space-y-3">
                  {[
                    'Stable, predictable bookings across the calendar',
                    'Improved occupancy with a clear revenue trend',
                    'Measurable performance with identifiable drivers',
                    'Controlled growth based on data and strategy',
                  ].map((point) => (
                    <div key={point} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                      <p className="text-sm text-base-content/70 font-medium leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMON MISTAKES ──────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-warning/15 border border-warning/30 text-warning text-sm font-medium mb-4">
                <AlertTriangle className="w-4 h-4" /> Common Mistakes
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Where Optimisation Goes Wrong</h2>
            </div>
            <div className="space-y-3">
              {[
                {
                  mistake: 'Focusing on one area only',
                  why: 'Updating just the listing or just the price without addressing the other factors produces marginal or temporary gains at best.',
                },
                {
                  mistake: 'Ignoring data',
                  why: 'Occupancy trends, competitor pricing, and review patterns contain specific signals about where performance is being lost — most hosts never read them.',
                },
                {
                  mistake: 'No consistent monitoring',
                  why: 'Performance changes over time with seasons, market conditions, and algorithm updates. One-off changes are not enough.',
                },
                {
                  mistake: 'Copying competitors',
                  why: "Matching a competitor's pricing or listing structure without understanding the underlying context rarely translates to equivalent results.",
                },
                {
                  mistake: 'No structured approach',
                  why: 'Ad hoc changes without a clear framework make it impossible to know what worked, what did not, and what to try next.',
                },
              ].map(({ mistake, why }) => (
                <div
                  key={mistake}
                  className="flex gap-4 p-5 rounded-2xl border border-warning/20 bg-warning/4"
                >
                  <div className="w-6 h-6 rounded-full bg-warning/20 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-warning" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{mistake}</p>
                    <p className="text-xs text-base-content/55 mt-0.5 leading-relaxed">{why}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-base-content/55 mt-8 italic text-sm">
              Optimisation fails when it&apos;s not treated as a system.
            </p>
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH ─────────────────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
                <CheckCircle2 className="w-4 h-4" /> Our Method
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">
                How We Optimise Performance Properly
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  step: '1. Analyse the full setup',
                  detail:
                    'We review listing content, pricing configuration, calendar structure, operational workflows, and review scores — the complete picture.',
                },
                {
                  step: '2. Identify key gaps',
                  detail:
                    'We pinpoint the specific areas where performance is being lost and prioritise them by impact — not everything is equally important.',
                },
                {
                  step: '3. Apply structured improvements',
                  detail:
                    'Changes are implemented methodically across every relevant area, with clear reasoning behind each decision.',
                },
                {
                  step: '4. Monitor and refine',
                  detail:
                    'We track the impact of changes over time and continue refining based on what the data shows — because optimisation is ongoing, not a single event.',
                },
              ].map(({ step, detail }) => (
                <div
                  key={step}
                  className="flex gap-4 p-5 rounded-2xl border border-primary/15 bg-primary/4"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">{step}</p>
                    <p className="text-xs text-base-content/55 mt-0.5 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <BarChart3 className="w-4 h-4" /> Side by Side
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Unoptimised vs Optimised Performance</h2>
          </div>
          <div className="hidden md:block overflow-hidden rounded-3xl border border-base-300 max-w-3xl mx-auto">
            <div className="grid grid-cols-3">
              <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/50">
                Area
              </div>
              <div className="bg-error/8 px-5 py-3 text-xs font-bold uppercase tracking-widest text-error/70 text-center">
                Unoptimised
              </div>
              <div className="bg-success/8 px-5 py-3 text-xs font-bold uppercase tracking-widest text-success/70 text-center">
                Optimised
              </div>
            </div>
            {[
              ['Bookings', 'Inconsistent', 'Stable'],
              ['Operations', 'Reactive', 'Structured'],
              ['Performance data', 'Unclear', 'Measurable'],
              ['Growth', 'Limited growth', 'Scalable'],
            ].map(([area, bad, good]) => (
              <div key={area} className="grid grid-cols-3 border-t border-base-300">
                <div className="bg-base-100 px-5 py-4 text-sm font-medium">{area}</div>
                <div className="bg-error/4 px-5 py-4 text-sm text-error/80 text-center">{bad}</div>
                <div className="bg-success/4 px-5 py-4 text-sm text-success/80 text-center font-medium">
                  {good}
                </div>
              </div>
            ))}
          </div>
          {/* Mobile */}
          <div className="md:hidden space-y-3 max-w-sm mx-auto">
            {[
              ['Bookings', 'Inconsistent', 'Stable'],
              ['Operations', 'Reactive', 'Structured'],
              ['Performance data', 'Unclear', 'Measurable'],
              ['Growth', 'Limited growth', 'Scalable'],
            ].map(([area, bad, good]) => (
              <div key={area} className="rounded-2xl border border-base-300 overflow-hidden">
                <div className="bg-base-200 px-4 py-2 text-xs font-bold uppercase tracking-wider text-base-content/50">
                  {area}
                </div>
                <div className="grid grid-cols-2 divide-x divide-base-300">
                  <div className="px-4 py-3 bg-error/4 text-xs text-error/80">{bad}</div>
                  <div className="px-4 py-3 bg-success/4 text-xs text-success/80 font-medium">
                    {good}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ───────────────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Target className="w-4 h-4" /> Ideal Fit
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Who This Is Built For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              {
                icon: Search,
                who: 'Underperforming listings',
                desc: 'Properties with occupancy or revenue below what the market should support.',
              },
              {
                icon: Building2,
                who: 'SA businesses',
                desc: 'Serviced accommodation operators with multiple units needing systematic performance improvement.',
              },
              {
                icon: TrendingUp,
                who: 'Scaling portfolios',
                desc: 'Operators growing their portfolio who need consistent performance before adding more properties.',
              },
              {
                icon: Activity,
                who: 'Hosts wanting better results',
                desc: 'Any host who knows their current performance is not where it should be and wants a structured path to improvement.',
              },
            ].map(({ icon: Icon, who, desc }) => (
              <div
                key={who}
                className="bg-base-100 rounded-2xl border border-base-300 p-5 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-semibold text-sm">{who}</p>
                <p className="text-xs text-base-content/55 mt-1.5 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-600 text-sm font-medium mb-4">
              <Star className="w-4 h-4 fill-current" /> Client Results
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">What Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                initials: 'GH',
                name: 'George H.',
                role: 'Multi-property Host · London',
                quote:
                  'My occupancy had been stuck at around 60% for months. After the full optimisation — listing, pricing, and calendar — it moved to 76% within six weeks. The difference was measurable almost immediately.',
              },
              {
                initials: 'FW',
                name: 'Fiona W.',
                role: 'SA Operator · Leeds',
                quote:
                  'I had no idea my minimum stay settings were costing me that many bookings. One change to the calendar structure combined with new pricing rules improved my monthly revenue noticeably.',
              },
              {
                initials: 'KS',
                name: 'Kofi S.',
                role: 'STR Host · Birmingham',
                quote:
                  "My review score had dropped and I wasn't sure why. The operational review identified the exact problem. After fixing the check-in process and communication flow, my score recovered within two months.",
              },
            ].map(({ initials, name, role, quote }) => (
              <div
                key={name}
                className="bg-base-200 rounded-2xl border border-base-300 p-6 space-y-4"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-base-content/70 leading-relaxed italic">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-1">
                  <div className="w-9 h-9 rounded-full bg-primary text-primary-content flex items-center justify-center text-xs font-bold">
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{name}</p>
                    <p className="text-xs text-base-content/50">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
                <MessageSquare className="w-4 h-4" /> Questions
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {[
                {
                  q: 'How do you improve performance?',
                  a: 'We begin with a comprehensive review of your listing, pricing, calendar, guest communication, and operational setup. We then identify the specific areas causing the most performance loss and apply structured improvements across all of them — not just the most obvious one.',
                },
                {
                  q: 'How long does optimisation take?',
                  a: 'Initial changes can be implemented within one to two weeks. The impact on occupancy and revenue becomes visible within four to eight weeks in most cases, as the platform indexes the changes and booking patterns begin to shift. Ongoing optimisation continues beyond the initial phase.',
                },
                {
                  q: 'Do you analyse existing listings?',
                  a: 'Yes — our process starts with a full audit of your current listings, including content quality, search visibility, pricing configuration, and calendar structure. This gives us an accurate baseline before any changes are made.',
                },
                {
                  q: 'Can this increase revenue?',
                  a: 'Yes — improving occupancy, pricing strategy, and conversion rate all contribute directly to revenue. Most clients who implement the full set of recommendations see meaningful improvements across both occupancy and monthly revenue within the first two months.',
                },
              ].map(({ q, a }) => (
                <details
                  key={q}
                  className="group rounded-2xl border border-base-300 bg-base-100 overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-semibold text-sm select-none">
                    {q}
                    <ChevronRight className="w-4 h-4 text-base-content/40 shrink-0 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-5 pb-4 text-sm text-base-content/65 leading-relaxed border-t border-base-300 pt-3">
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary/22 via-base-200 to-secondary/15 border border-base-300 px-8 py-16 lg:px-16 text-center shadow-xl">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />
            </div>
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-semibold">
                <Activity className="w-4 h-4" /> Optimise Performance
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold">
                Ready to Improve Your{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Airbnb Performance?
                </span>
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed">
                Let&apos;s optimise your setup and improve your results. We don&apos;t just improve
                listings — we improve your entire performance.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <button className="pulse-cta-apo btn btn-primary btn-lg rounded-full px-10 gap-2 shadow-lg">
                  <Phone className="w-4 h-4" /> Book a Discovery Call
                </button>
                <button className="btn btn-outline btn-lg rounded-full px-8 gap-2">
                  <ArrowRight className="w-4 h-4" /> See How It Works
                </button>
              </div>
              <p className="text-xs text-base-content/40 pt-2">
                Airbnb Performance Optimisation UK · Improve Airbnb Bookings · STR Performance
                Improvement · Airbnb Growth Strategy
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
