import React from 'react'
import {
  Calculator,
  TrendingUp,
  Star,
  Phone,
  ArrowRight,
  CheckCircle2,
  XCircle,
  MapPin,
  BarChart3,
  DollarSign,
  Settings,
  Layers,
  AlertTriangle,
  Target,
  MessageSquare,
  Building2,
  UserPlus,
  ChevronRight,
} from 'lucide-react'
import { RoiCalculatorWidget } from './RoiCalculatorWidget'
import type { Page } from '@/payload-types'

export const RoiCalculatorUkView: React.FC<{ page: Page }> = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content overflow-x-hidden">
      <style>{`
        @keyframes pulse-ring-roi {
          0%,100% { box-shadow: 0 0 0 0 hsl(var(--p)/.35); }
          50%      { box-shadow: 0 0 0 10px hsl(var(--p)/0); }
        }
        @keyframes roi-fade-up {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .roi-fade-1 { animation: roi-fade-up .55s ease both .10s; }
        .roi-fade-2 { animation: roi-fade-up .55s ease both .22s; }
        .roi-fade-3 { animation: roi-fade-up .55s ease both .34s; }
        .roi-fade-4 { animation: roi-fade-up .55s ease both .46s; }
        .roi-fade-5 { animation: roi-fade-up .55s ease both .58s; }
        .pulse-cta-roi { animation: pulse-ring-roi 2.4s ease-in-out infinite; }
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
              <div className="roi-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium">
                <Calculator className="w-4 h-4" />
                ROI Calculator · UK Short Term Rentals
              </div>
              <h1 className="roi-fade-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight">
                Airbnb ROI Calculator for UK{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Short Term Rentals
                </span>
              </h1>
              <p className="roi-fade-3 text-lg text-base-content/70 leading-relaxed max-w-lg">
                Estimate your potential returns from a short term rental property based on
                occupancy, pricing, and expenses.
              </p>
              <div className="roi-fade-4 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm italic text-base-content/65">
                An Airbnb ROI calculator estimates potential income and profit by analysing
                occupancy rates, nightly pricing, and operating costs.
              </div>
              <div className="roi-fade-5 flex flex-wrap gap-3 pt-1">
                <a
                  href="#calculator"
                  className="pulse-cta-roi btn btn-primary btn-lg rounded-full px-8 gap-2"
                >
                  <Calculator className="w-4 h-4" /> Start Calculating
                </a>
                <button className="btn btn-outline btn-lg rounded-full px-8 gap-2">
                  <Phone className="w-4 h-4" /> Book a Discovery Call
                </button>
              </div>
              <div className="roi-fade-5 flex items-center gap-3 pt-2">
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
                    Used by UK STR investors and hosts
                  </p>
                </div>
              </div>
            </div>

            {/* Hero visual — simple ROI formula card */}
            <div className="hidden lg:block">
              <div className="relative rounded-3xl border border-base-300 bg-base-200/60 backdrop-blur-sm p-7 shadow-xl space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-error/70" />
                  <div className="w-3 h-3 rounded-full bg-warning/70" />
                  <div className="w-3 h-3 rounded-full bg-success/70" />
                  <span className="ml-2 text-xs text-base-content/40 font-mono">roi.formula</span>
                </div>
                {[
                  {
                    label: 'Monthly Revenue',
                    formula: 'Nightly Rate × Booked Nights',
                    example: '£120 × 21 = £2,520',
                  },
                  {
                    label: 'Monthly Profit',
                    formula: 'Revenue − Monthly Costs',
                    example: '£2,520 − £800 = £1,720',
                  },
                  {
                    label: 'Annual ROI',
                    formula: 'Annual Profit ÷ Investment × 100',
                    example: '£20,640 ÷ £15,000 = 137.6%',
                  },
                ].map(({ label, formula, example }, i) => (
                  <div
                    key={label}
                    className="bg-base-100 rounded-2xl border border-base-300 px-5 py-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-base-content/35 mb-1">
                          {label}
                        </p>
                        <p className="text-sm font-semibold text-base-content/70">{formula}</p>
                        <p className="text-xs text-primary font-bold mt-1">{example}</p>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-xs font-bold text-primary">
                        {i + 1}
                      </div>
                    </div>
                  </div>
                ))}
                <p className="text-center text-xs text-base-content/35 pt-1">
                  Use the calculator below for your own numbers
                </p>
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
              <TrendingUp className="w-4 h-4" /> Why Numbers Matter
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Understand Your Numbers Before You Scale
            </h2>
            <p className="text-base-content/65 text-lg leading-relaxed">
              Before investing in or scaling a property, you need clarity on what it will actually
              return. Guessing leads to poor decisions. Numbers give you control.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {[
                {
                  icon: BarChart3,
                  label: 'Expected revenue',
                  desc: 'What the property can realistically earn based on your market and pricing.',
                },
                {
                  icon: TrendingUp,
                  label: 'Occupancy levels',
                  desc: 'How many nights you can realistically book in your location and season.',
                },
                {
                  icon: Calculator,
                  label: 'Operational costs',
                  desc: 'The full picture of what it actually costs to run the property month to month.',
                },
              ].map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="bg-base-100 rounded-2xl border border-primary/15 p-5 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-sm">{label}</p>
                  <p className="text-xs text-base-content/55 mt-1 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW ROI WORKS ────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
                <Calculator className="w-4 h-4" /> The Maths
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">
                How Short Term Rental ROI Is Calculated
              </h2>
            </div>
            <div className="space-y-3">
              {[
                {
                  step: 'Step 1',
                  formula: 'Nightly Rate × Occupancy = Monthly Revenue',
                  detail:
                    'Multiply your average nightly rate by the number of nights booked in a month to get your gross revenue figure.',
                },
                {
                  step: 'Step 2',
                  formula: 'Revenue – Expenses = Profit',
                  detail:
                    'Subtract your monthly costs (platform fees, cleaning, maintenance, mortgage, etc.) to calculate your actual profit.',
                },
                {
                  step: 'Step 3',
                  formula: 'Profit ÷ Investment = ROI',
                  detail:
                    'Divide annual profit by your total investment to find your return on investment as a percentage.',
                },
              ].map(({ step, formula, detail }) => (
                <div
                  key={step}
                  className="flex gap-5 p-5 rounded-2xl border border-primary/15 bg-primary/4"
                >
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-content flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {step.split(' ')[1]}
                  </div>
                  <div>
                    <p className="font-bold text-sm font-mono text-primary">{formula}</p>
                    <p className="text-xs text-base-content/55 mt-1 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-base-content/55 mt-8 italic text-sm">
              Small changes in pricing or occupancy can significantly impact returns.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT IMPACTS YOUR ROI ────────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Target className="w-4 h-4" /> What Moves the Numbers
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Key Factors That Affect Your Returns</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              {
                icon: MapPin,
                title: 'Location & Demand',
                desc: 'Your market determines the ceiling on occupancy and pricing. Strong demand markets produce meaningfully higher returns.',
              },
              {
                icon: BarChart3,
                title: 'Pricing Strategy',
                desc: 'Dynamic pricing calibrated to local demand and seasonality can increase revenue by 20–40% vs a flat nightly rate.',
              },
              {
                icon: TrendingUp,
                title: 'Occupancy Rate',
                desc: 'The difference between 60% and 75% occupancy at the same rate can be hundreds of pounds per month.',
              },
              {
                icon: Settings,
                title: 'Operational Efficiency',
                desc: 'Inefficient operations eat into margin. Reducing cost per turnover and maintenance spend improves profit directly.',
              },
              {
                icon: DollarSign,
                title: 'Platform Fees',
                desc: "Airbnb's service fees, OTA commissions, and payment processing costs all reduce net revenue — factor these in.",
              },
              {
                icon: Building2,
                title: 'Property Costs',
                desc: 'Mortgage, insurance, utilities, and capital expenditure must be accounted for to calculate true profitability.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-base-100 rounded-2xl border border-base-300 p-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-semibold text-sm mb-1.5">{title}</p>
                <p className="text-xs text-base-content/55 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALCULATOR ───────────────────────────────────────────────────────── */}
      <section id="calculator" className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Calculator className="w-4 h-4" /> Interactive Tool
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Estimate Your Potential Returns</h2>
            <p className="text-base-content/60 mt-3 max-w-xl mx-auto text-sm">
              Enter your property&apos;s numbers below. The calculator updates in real time.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <RoiCalculatorWidget />
          </div>
        </div>
      </section>

      {/* ── REALITY CHECK ────────────────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-4">
                <AlertTriangle className="w-4 h-4" /> Reality Check
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Why Most ROI Estimates Are Wrong</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  issue: 'Unrealistic occupancy assumptions',
                  detail:
                    'Most estimates assume 80–90% occupancy. In most UK markets, a well-managed property achieves 65–75%.',
                },
                {
                  issue: 'Ignoring operational costs',
                  detail:
                    'Cleaning, laundry, maintenance, restocking, and management fees can consume 35–50% of gross revenue.',
                },
                {
                  issue: 'No pricing strategy',
                  detail:
                    'A flat nightly rate leaves significant revenue on the table during peak demand periods.',
                },
                {
                  issue: 'No system in place',
                  detail:
                    'Without systems, operational inefficiencies and errors erode margins over time — often invisibly.',
                },
              ].map(({ issue, detail }) => (
                <div
                  key={issue}
                  className="flex gap-4 p-5 rounded-2xl border border-error/15 bg-error/4"
                >
                  <XCircle className="w-5 h-5 text-error shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">{issue}</p>
                    <p className="text-xs text-base-content/55 mt-0.5 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-base-content/55 mt-8 italic text-sm">
              Accurate ROI depends on how well the business is managed.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW WE HELP ──────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
                <CheckCircle2 className="w-4 h-4" /> What We Do
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">How Assistophere Improves Your ROI</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  point: 'Optimising pricing and occupancy',
                  detail:
                    'We implement dynamic pricing strategies that align your rates with real-time demand, filling calendar gaps without underpricing.',
                },
                {
                  point: 'Improving listing performance',
                  detail:
                    'Stronger listings with professional content, better SEO, and optimised descriptions directly increase booking conversion rates.',
                },
                {
                  point: 'Reducing operational inefficiencies',
                  detail:
                    'Structured operations reduce cost per stay, eliminate waste, and improve the consistency of your guest experience.',
                },
                {
                  point: 'Building structured systems',
                  detail:
                    'Automated workflows and clear SOPs mean your operation runs efficiently with fewer errors and less host involvement.',
                },
              ].map(({ point, detail }) => (
                <div
                  key={point}
                  className="flex gap-4 p-5 rounded-2xl border border-primary/15 bg-primary/4"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">{point}</p>
                    <p className="text-xs text-base-content/55 mt-0.5 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-base-content/55 mt-8 text-sm">
              The outcome: better control over your actual returns.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMPARISON ───────────────────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <BarChart3 className="w-4 h-4" /> Side by Side
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Estimated ROI vs Managed ROI</h2>
          </div>
          <div className="hidden md:block overflow-hidden rounded-3xl border border-base-300 max-w-3xl mx-auto">
            <div className="grid grid-cols-3">
              <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/50">
                Area
              </div>
              <div className="bg-error/8 px-5 py-3 text-xs font-bold uppercase tracking-widest text-error/70 text-center">
                Estimated
              </div>
              <div className="bg-success/8 px-5 py-3 text-xs font-bold uppercase tracking-widest text-success/70 text-center">
                Managed
              </div>
            </div>
            {[
              ['Approach', 'Based on assumptions', 'Based on strategy'],
              ['Performance', 'Inconsistent', 'Controlled'],
              ['Outcome', 'Uncertain', 'Predictable'],
              ['Risk', 'Risky', 'Optimised'],
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
              ['Approach', 'Based on assumptions', 'Based on strategy'],
              ['Performance', 'Inconsistent', 'Controlled'],
              ['Outcome', 'Uncertain', 'Predictable'],
              ['Risk', 'Risky', 'Optimised'],
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
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Target className="w-4 h-4" /> Ideal Fit
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Who This Is Useful For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              {
                icon: UserPlus,
                who: 'New STR investors',
                desc: 'Evaluating whether a property stacks up before committing capital.',
              },
              {
                icon: BarChart3,
                who: 'Hosts analysing properties',
                desc: 'Current hosts comparing potential new additions to their portfolio.',
              },
              {
                icon: Building2,
                who: 'SA businesses',
                desc: 'Serviced accommodation operators modelling scenarios across multiple units.',
              },
              {
                icon: TrendingUp,
                who: 'Scaling operators',
                desc: 'Operators planning expansion who need to understand projected returns before acting.',
              },
            ].map(({ icon: Icon, who, desc }) => (
              <div
                key={who}
                className="bg-base-200 rounded-2xl border border-base-300 p-5 text-center"
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
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
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
                initials: 'RK',
                name: 'Raj K.',
                role: 'STR Investor · Manchester',
                quote:
                  'I used the calculator before buying my second property. After working with Assistophere on pricing and operations, my actual returns are tracking above the estimate.',
              },
              {
                initials: 'SH',
                name: 'Sophie H.',
                role: 'SA Operator · London',
                quote:
                  'I had no idea my costs were eating so much of my revenue. The breakdown helped me see exactly where the problem was and we fixed it within two months.',
              },
              {
                initials: 'DM',
                name: 'Daniel M.',
                role: 'Multi-property Host · Bristol',
                quote:
                  'The ROI figures I had when I started were completely wrong. Assistophere helped me model properly and then actually deliver those numbers through better operations.',
              },
            ].map(({ initials, name, role, quote }) => (
              <div
                key={name}
                className="bg-base-100 rounded-2xl border border-base-300 p-6 space-y-4"
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
      <section className="py-20 lg:py-28">
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
                  q: 'How accurate is this calculator?',
                  a: 'It is a directional estimate based on the inputs you provide. The accuracy depends entirely on how realistic your inputs are — particularly your occupancy assumption and cost figure. It is a useful starting point but not a substitute for a proper property analysis.',
                },
                {
                  q: 'What costs should I include?',
                  a: 'Include everything: cleaning fees, laundry, consumables restocking, platform fees (Airbnb charges roughly 3% per booking), property management if applicable, mortgage or rent, utilities, insurance, and an allowance for maintenance and capital expenditure.',
                },
                {
                  q: 'Can this help with real decisions?',
                  a: 'Yes — it helps you understand the structure of your returns and identify which variables have the most impact. A change in nightly rate or occupancy percentage has a disproportionate effect on profit, and the calculator makes that visible immediately.',
                },
                {
                  q: 'Do you help improve ROI?',
                  a: 'Yes. Assistophere works with UK hosts and operators on pricing strategy, listing optimisation, operational systems, and team structuring — all of which directly impact your actual returns. Book a discovery call to discuss your specific situation.',
                },
              ].map(({ q, a }) => (
                <details
                  key={q}
                  className="group rounded-2xl border border-base-300 bg-base-200 overflow-hidden"
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
      <section className="bg-base-200 border-t border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary/22 via-base-200 to-secondary/15 border border-base-300 px-8 py-16 lg:px-16 text-center shadow-xl">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />
            </div>
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-semibold">
                <TrendingUp className="w-4 h-4" /> Improve Your Returns
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold">
                Want a More{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Accurate Breakdown?
                </span>
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed">
                Let&apos;s review your property and build a realistic strategy around your numbers.
                We don&apos;t just estimate ROI — we help you improve it.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <button className="pulse-cta-roi btn btn-primary btn-lg rounded-full px-10 gap-2 shadow-lg">
                  <Phone className="w-4 h-4" /> Book a Discovery Call
                </button>
                <a href="#calculator" className="btn btn-outline btn-lg rounded-full px-8 gap-2">
                  <Calculator className="w-4 h-4" /> Use the Calculator
                </a>
              </div>
              <p className="text-xs text-base-content/40 pt-2">
                Airbnb ROI Calculator UK · STR Profit Calculator · Airbnb Income Estimate · Serviced
                Accommodation ROI
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
