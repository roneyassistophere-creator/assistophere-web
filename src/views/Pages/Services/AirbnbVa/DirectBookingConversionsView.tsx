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
  AlertTriangle,
  MessageSquare,
  Layers,
  Users,
  MousePointerClick,
  Route,
  ShieldCheck,
  Smartphone,
  Zap,
  LayoutTemplate,
  BarChart2,
  Activity,
} from 'lucide-react'
import { FaqItem } from './FaqItem'

const faqs = [
  {
    q: "How do I know my website isn't converting?",
    a: 'The clearest sign is traffic without bookings. If visitors are arriving but not completing a booking, something in the journey is causing them to drop off. We review the booking flow, page structure, and user experience to identify exactly where the problem is.',
  },
  {
    q: 'Can you improve an existing website?',
    a: 'Yes. Most of our conversion work is on existing websites. We audit the current state, identify friction points, and make targeted improvements — you do not need to rebuild from scratch.',
  },
  {
    q: 'Does this increase bookings?',
    a: 'Improving conversion means more of your existing traffic completes a booking. You do not always need more visitors — you need your current visitors to convert at a higher rate. We cannot guarantee specific numbers, but removing friction from the booking journey consistently improves outcomes.',
  },
  {
    q: 'Do I need traffic first?',
    a: 'Yes — conversion optimisation works on existing traffic. If your website has very little traffic, the priority should be building that first. If you have traffic but low bookings, this is where we focus.',
  },
]

const whatWeCovers = [
  {
    icon: <Route className="w-5 h-5 text-primary" />,
    title: 'Booking Flow Optimisation',
    items: [
      'Simplifying the number of steps',
      'Reducing friction at each stage',
      'Improving navigation and clarity',
    ],
    outcome: 'A booking path that guests can follow without confusion.',
  },
  {
    icon: <MousePointerClick className="w-5 h-5 text-primary" />,
    title: 'CTA Placement Strategy',
    items: [
      'Positioning booking buttons where they matter',
      'Improving visibility and contrast',
      'Guiding users toward action at each scroll point',
    ],
    outcome: 'Clear, consistent calls to action that drive decisions.',
  },
  {
    icon: <LayoutTemplate className="w-5 h-5 text-primary" />,
    title: 'Page Structure Improvements',
    items: [
      'Logical information hierarchy',
      'Removing unnecessary clutter',
      'Improving layout for faster decision-making',
    ],
    outcome: 'Pages that communicate quickly and clearly.',
  },
  {
    icon: <Smartphone className="w-5 h-5 text-primary" />,
    title: 'Mobile Optimisation',
    items: [
      'Improving touch usability',
      'Faster mobile interaction flows',
      'Ensuring the booking works seamlessly on small screens',
    ],
    outcome: 'A mobile experience that converts, not just displays.',
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    title: 'Trust Building Elements',
    items: [
      'Clearer policies and information',
      'Structured social proof placement',
      'Reducing uncertainty before checkout',
    ],
    outcome: 'Guests who feel confident enough to complete the booking.',
  },
]

export const DirectBookingConversionsView: React.FC<{ page: Page }> = () => {
  return (
    <article className="flex flex-col w-full overflow-x-hidden font-sans text-base-content selection:bg-primary/20">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpDBC {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .dbc-fade-1 { animation: fadeUpDBC 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) both; }
        .dbc-fade-2 { animation: fadeUpDBC 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .dbc-fade-3 { animation: fadeUpDBC 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both; }
        .dbc-fade-4 { animation: fadeUpDBC 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both; }
        .dbc-fade-5 { animation: fadeUpDBC 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes pulse-ring-dbc {
          0%   { box-shadow: 0 0 0 0 oklch(var(--p)/0.35); }
          70%  { box-shadow: 0 0 0 12px oklch(var(--p)/0); }
          100% { box-shadow: 0 0 0 0 oklch(var(--p)/0); }
        }
        .pulse-cta-dbc { animation: pulse-ring-dbc 2.5s ease-out infinite; }
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
              <div className="dbc-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-6 shadow-sm shadow-primary/10">
                <MousePointerClick className="w-3.5 h-3.5" />
                <span>Direct Booking Conversions · UK</span>
              </div>

              <h1 className="dbc-fade-2 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-tight mb-6">
                Direct Booking Conversion Optimisation{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  for STR Websites
                </span>
              </h1>

              <p className="dbc-fade-3 text-base lg:text-lg text-base-content/65 leading-relaxed mb-4 max-w-lg">
                Assistophere helps UK hosts turn website visitors into bookings by improving
                structure, flow, and user experience across the entire booking journey.
              </p>

              {/* AI-extractable definition */}
              <div className="dbc-fade-3 mb-8 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm text-base-content/60 leading-relaxed italic">
                Direct booking conversion optimisation improves how visitors move through a website,
                increasing the likelihood that they complete a booking instead of leaving.
              </div>

              <div className="dbc-fade-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="pulse-cta-dbc btn btn-primary btn-lg rounded-full px-8 gap-2 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/45 transition-all duration-200"
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
              <div className="dbc-fade-5 flex items-center gap-4 mt-8 pt-8 border-t border-base-300/60">
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

            {/* Visual: booking funnel mockup */}
            <div className="dbc-fade-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-base-200 border border-base-300 shadow-2xl shadow-black/40 p-7">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/6" />
                <p className="relative z-10 text-xs font-bold text-base-content/30 uppercase tracking-widest mb-5">
                  Booking funnel
                </p>
                {/* Funnel steps */}
                <div className="relative z-10 flex flex-col gap-2">
                  {[
                    {
                      step: '1',
                      label: 'Visitor lands on website',
                      pct: '100%',
                      w: 'w-full',
                      active: false,
                    },
                    {
                      step: '2',
                      label: 'Views availability',
                      pct: '68%',
                      w: 'w-[68%]',
                      active: false,
                    },
                    {
                      step: '3',
                      label: 'Reaches booking page',
                      pct: '41%',
                      w: 'w-[41%]',
                      active: false,
                    },
                    {
                      step: '4',
                      label: 'Starts checkout',
                      pct: '22%',
                      w: 'w-[22%]',
                      active: false,
                    },
                    { step: '5', label: 'Completes booking', pct: '9%', w: 'w-[9%]', active: true },
                  ].map(({ step, label, pct, w, active }) => (
                    <div key={step} className="flex items-center gap-3">
                      <div
                        className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border ${active ? 'bg-primary text-primary-content border-primary' : 'bg-base-300 text-base-content/40 border-base-300'}`}
                      >
                        {step}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p
                            className={`text-xs ${active ? 'font-semibold text-base-content' : 'text-base-content/50'}`}
                          >
                            {label}
                          </p>
                          <p
                            className={`text-xs font-bold shrink-0 ml-2 ${active ? 'text-primary' : 'text-base-content/35'}`}
                          >
                            {pct}
                          </p>
                        </div>
                        <div className="h-1.5 bg-base-300 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${active ? 'bg-primary' : 'bg-base-content/20'} ${w}`}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="relative z-10 text-[10px] text-base-content/25 mt-5 text-center">
                  [Image Placeholder — booking funnel visual]
                </p>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-content text-xs font-bold px-4 py-2 rounded-2xl shadow-lg shadow-primary/30">
                More traffic isn&apos;t the answer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: CLARITY ──────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-6">
            <Zap className="w-3.5 h-3.5" />
            <span>Reset Your Thinking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-8">
            Getting Traffic Isn&apos;t the Problem. Converting It Is.
          </h2>
          <p className="text-base-content/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Many STR websites get visitors but fail to convert them. Guests arrive, browse, and
            leave without booking. The issue is not traffic — it&apos;s the booking journey.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
            {[
              {
                icon: <Route className="w-5 h-5 text-primary" />,
                label: 'Journey breaks down',
                desc: 'Guests reach your site but cannot find a clear path to book.',
              },
              {
                icon: <XCircle className="w-5 h-5 text-error" />,
                label: 'Friction causes drop-off',
                desc: 'Every unnecessary step or confusing element costs you a booking.',
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-primary" />,
                label: 'Conversion is the fix',
                desc: 'Improving how the site works turns existing traffic into actual bookings.',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-3 p-5 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <p className="font-bold text-sm text-base-content">{item.label}</p>
                <p className="text-xs text-base-content/50 leading-relaxed">{item.desc}</p>
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
              Why Direct Booking Websites Don&apos;t Convert
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              {
                label: 'Unclear booking process',
                desc: 'Guests cannot work out how to actually complete a booking — so they leave.',
              },
              {
                label: 'Too many steps',
                desc: 'Every extra click or form field is an opportunity for guests to abandon the process.',
              },
              {
                label: 'Weak calls to action',
                desc: 'Booking buttons that are hidden, small, or generic do not drive action.',
              },
              {
                label: 'Lack of trust signals',
                desc: 'Without clear policies, reviews, and reassurances, guests hesitate at the point of payment.',
              },
              {
                label: 'Poor mobile experience',
                desc: 'Most guests browse and book on mobile. A desktop-first design will lose them.',
              },
              {
                label: 'Confusing layout',
                desc: 'Information that is hard to find or poorly structured slows decision-making and kills momentum.',
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
          <div className="max-w-2xl mx-auto">
            <p className="text-base-content/50 text-base italic border-l-4 border-error/30 pl-5">
              If the journey isn&apos;t clear, guests won&apos;t complete the booking.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: WHAT DRIVES CONVERSIONS ─────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>The Standard</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Makes Visitors Turn Into Bookings
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <Route className="w-5 h-5 text-primary" />,
                title: 'Clear Booking Path',
                desc: 'Guests should know exactly where to click and what to do. Ambiguity kills conversions.',
              },
              {
                icon: <Zap className="w-5 h-5 text-primary" />,
                title: 'Fast Decision-Making',
                desc: 'Remove friction and unnecessary steps. Every extra action reduces the chance of completing the booking.',
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-primary" />,
                title: 'Trust & Confidence',
                desc: 'Clear details, policies, and presentation reduce hesitation at the point of booking.',
              },
              {
                icon: <MousePointerClick className="w-5 h-5 text-primary" />,
                title: 'Strong CTA Placement',
                desc: 'Booking buttons must be visible, consistent, and positioned where decisions happen.',
              },
              {
                icon: <Smartphone className="w-5 h-5 text-primary" />,
                title: 'Mobile-Friendly Experience',
                desc: 'Most users book from mobile. A website that does not work well on mobile will not convert well.',
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
                  <h3 className="font-bold text-sm text-base-content mb-2">{item.title}</h3>
                  <p className="text-xs text-base-content/55 leading-relaxed">{item.desc}</p>
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
              <LayoutTemplate className="w-3.5 h-3.5" />
              <span>What We Cover</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Our Conversion Optimisation Covers
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
              👉 Outcome: A website that converts visitors into bookings.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: SYSTEM CONNECTION ────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>System Thinking</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
              Conversion Works With Everything Else
            </h2>
            <p className="text-base-content/60 text-base leading-relaxed max-w-2xl mx-auto mb-10">
              Conversion does not exist in isolation. The results depend on the quality of what
              visitors find when they arrive.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              {
                icon: <Activity className="w-5 h-5 text-primary" />,
                label: 'Listing quality',
                desc: 'Poor listing content undermines trust before the booking page is reached.',
              },
              {
                icon: <BarChart2 className="w-5 h-5 text-primary" />,
                label: 'Pricing alignment',
                desc: 'If pricing is confusing or inconsistent, guests hesitate at the point of decision.',
              },
              {
                icon: <Route className="w-5 h-5 text-primary" />,
                label: 'Traffic source',
                desc: 'Mismatched traffic leads to high bounce rates regardless of conversion quality.',
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
          <p className="text-center text-base-content/45 italic text-base">
            If these are not aligned, conversion suffers — even with a well-optimised site.
          </p>
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
              Where Conversion Breaks Down
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              {
                point: 'Focusing only on design',
                detail:
                  'Attractive websites still fail to convert if the booking flow is broken. Design is not strategy.',
              },
              {
                point: 'Ignoring booking flow',
                detail:
                  'Most conversion problems live in the path from landing to checkout — not the landing page itself.',
              },
              {
                point: 'No clear CTA',
                detail:
                  'If guests cannot immediately see where to book, they will not look for it. They will leave.',
              },
              {
                point: 'Overcomplicated pages',
                detail:
                  'Too much information, too many options, and too much text slow decision-making and increase drop-off.',
              },
              {
                point: 'Not optimising for mobile',
                detail:
                  'Over half of all bookings are made on mobile. A non-mobile-optimised site is a non-converting site.',
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
            Design alone doesn&apos;t convert. Structure does.
          </p>
        </div>
      </section>

      {/* ─── SECTION 8: OUR APPROACH ─────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <MousePointerClick className="w-3.5 h-3.5" />
              <span>Our Approach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              How We Improve Conversion Properly
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <Route className="w-5 h-5 text-primary" />,
                title: 'We simplify the booking journey',
                desc: 'Fewer steps, clearer paths, and less friction between landing and booking completion.',
              },
              {
                icon: <MousePointerClick className="w-5 h-5 text-primary" />,
                title: 'We guide user behaviour',
                desc: 'Strategic CTA placement, visual hierarchy, and page structure all point guests toward booking.',
              },
              {
                icon: <Zap className="w-5 h-5 text-primary" />,
                title: 'We remove unnecessary friction',
                desc: 'Every element that does not serve the booking journey is identified and either improved or removed.',
              },
              {
                icon: <BarChart2 className="w-5 h-5 text-primary" />,
                title: 'We optimise based on real usage',
                desc: 'Changes are grounded in how guests actually behave — not assumptions about what looks good.',
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
          <div className="mt-8 p-5 rounded-2xl bg-primary/8 border border-primary/20 text-center">
            <p className="text-base font-semibold text-primary/80 italic">
              &ldquo;We don&apos;t just bring traffic. We make it convert.&rdquo;
            </p>
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
              Low Conversion vs Optimised Conversion
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
                      Low Conversion Website
                    </div>
                  </th>
                  <th className="px-6 py-4 bg-primary/12 text-left text-xs font-bold uppercase tracking-wider text-primary w-[37.5%]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Optimised Website
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Flow', 'Confusing journey', 'Clear, guided path'],
                  ['Bookings', 'Low completion rate', 'Higher conversions'],
                  ['CTAs', 'Poor visibility', 'Strong, consistent CTAs'],
                  ['Drop-offs', 'High at every step', 'Reduced at each stage'],
                ].map(([area, low, optimised], i) => (
                  <tr key={area} className={i % 2 === 0 ? 'bg-base-100' : 'bg-base-200/50'}>
                    <td className="px-6 py-4 font-semibold text-base-content/60 text-xs uppercase tracking-wider">
                      {area}
                    </td>
                    <td className="px-6 py-4 text-base-content/50">{low}</td>
                    <td className="px-6 py-4 text-base-content font-semibold bg-primary/5">
                      {optimised}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden flex flex-col gap-3">
            {[
              ['Flow', 'Confusing journey', 'Clear, guided path'],
              ['Bookings', 'Low completion rate', 'Higher conversions'],
              ['CTAs', 'Poor visibility', 'Strong, consistent CTAs'],
              ['Drop-offs', 'High at every step', 'Reduced at each stage'],
            ].map(([area, low, optimised]) => (
              <div key={area} className="rounded-2xl overflow-hidden border border-base-300">
                <div className="px-4 py-2.5 bg-base-300/60 text-xs font-bold text-base-content/40 uppercase tracking-wider">
                  {area}
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-3 py-3.5 border-r border-base-300 bg-base-100">
                    <p className="text-[10px] text-base-content/35 mb-1">Low Conversion</p>
                    <p className="text-xs text-base-content/50">{low}</p>
                  </div>
                  <div className="px-3 py-3.5 bg-primary/8">
                    <p className="text-[10px] text-primary mb-1 font-bold">Optimised</p>
                    <p className="text-xs text-base-content/80 font-semibold">{optimised}</p>
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
                title: 'Hosts with traffic but low bookings',
                desc: 'Visitors are arriving but not converting. The problem is the booking journey, not the audience.',
              },
              {
                icon: <Route className="w-5 h-5 text-primary" />,
                title: 'Serviced accommodation businesses',
                desc: 'Professional operators need websites that work as hard as the rest of their business.',
              },
              {
                icon: <MousePointerClick className="w-5 h-5 text-primary" />,
                title: 'Operators with direct booking websites',
                desc: 'You have already invested in the website. Now make it perform to its potential.',
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-primary" />,
                title: 'Hosts improving overall performance',
                desc: 'Direct booking conversion is one piece of a wider performance improvement strategy.',
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
            <MousePointerClick className="w-3.5 h-3.5" />
            <span>Turn Visitors Into Bookings</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-[1.12]">
            Ready to Turn Visitors{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Into Bookings?
            </span>
          </h2>

          <p className="text-lg text-base-content/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s improve your booking flow and increase your direct bookings.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="pulse-cta-dbc btn btn-primary btn-lg rounded-full px-10 gap-2 font-semibold shadow-xl shadow-primary/30 hover:shadow-primary/55 transition-all duration-200"
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
