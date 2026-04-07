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
  Layers,
  Users,
  ShieldCheck,
  MessageSquare,
  Globe,
  LayoutGrid,
  SlidersHorizontal,
  ImageIcon,
  AlignLeft,
  Type,
  MousePointerClick,
  Eye,
  Lightbulb,
  AlertTriangle,
  BarChart2,
} from 'lucide-react'
import { FaqItem } from './FaqItem'

const faqs = [
  {
    q: 'How long does optimisation take?',
    a: 'For existing listings, a full optimisation — title, description, image review, and structure — typically takes 3–5 working days depending on the scope. New listing creation from scratch can take a similar timeframe. We work through each element systematically rather than rushing through it.',
  },
  {
    q: 'Can you improve existing listings?',
    a: "Yes — most of our optimisation work is on listings that are already live but underperforming. We audit what's there, identify what's holding performance back, and systematically improve each element. You don't need to start from scratch.",
  },
  {
    q: 'Does this increase bookings?',
    a: "Optimising how your listing is presented improves click-through rate and conversion rate. More clicks from search means more enquiries; better clarity and trust in the listing means more of those convert to bookings. It won't guarantee bookings, but a poorly presented listing consistently underperforms a well-optimised one.",
  },
  {
    q: 'Do you optimise across platforms?',
    a: 'Yes. Each platform displays listings differently and ranks them based on different signals. We adjust content and structure per platform — not a copy-paste approach. Airbnb, Booking.com, and Vrbo each need a different focus to perform well.',
  },
]

const whatWeCovers = [
  {
    icon: <Type className="w-5 h-5 text-primary" />,
    title: 'Title Optimisation',
    items: [
      'Clear, strong property positioning',
      'Highlighting key selling points',
      'Designed for click-through',
    ],
    outcome: 'Titles that stand out in search and give guests a reason to click.',
  },
  {
    icon: <AlignLeft className="w-5 h-5 text-primary" />,
    title: 'Description Structure',
    items: ['Clear, easy-to-read layout', 'Logical information flow', 'Guest-focused messaging'],
    outcome: 'Descriptions that communicate quickly and build confidence.',
  },
  {
    icon: <ImageIcon className="w-5 h-5 text-primary" />,
    title: 'Image Strategy',
    items: [
      'Photo order and selection review',
      'Highlighting key features early',
      'Improving visual flow through the listing',
    ],
    outcome: 'Image sequences that hold attention and present the property well.',
  },
  {
    icon: <LayoutGrid className="w-5 h-5 text-primary" />,
    title: 'Listing Structure',
    items: ['Clear section organisation', 'Key information placement', 'Easy guest navigation'],
    outcome: 'A listing that guides the guest naturally towards a booking decision.',
  },
  {
    icon: <Globe className="w-5 h-5 text-primary" />,
    title: 'Platform Optimisation',
    items: [
      'Adjustments per platform',
      'Aligning with platform ranking behaviour',
      'Improving visibility within search',
    ],
    outcome: 'Each listing performs for the platform it lives on.',
  },
]

export const ListingCreationOptimisationView: React.FC<{ page: Page }> = () => {
  return (
    <article className="flex flex-col w-full overflow-x-hidden font-sans text-base-content selection:bg-primary/20">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpLCO {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .lco-fade-1 { animation: fadeUpLCO 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) both; }
        .lco-fade-2 { animation: fadeUpLCO 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .lco-fade-3 { animation: fadeUpLCO 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both; }
        .lco-fade-4 { animation: fadeUpLCO 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both; }
        .lco-fade-5 { animation: fadeUpLCO 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes pulse-ring-lco {
          0%   { box-shadow: 0 0 0 0 oklch(var(--p)/0.35); }
          70%  { box-shadow: 0 0 0 12px oklch(var(--p)/0); }
          100% { box-shadow: 0 0 0 0 oklch(var(--p)/0); }
        }
        .pulse-cta-lco { animation: pulse-ring-lco 2.5s ease-out infinite; }
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
              <div className="lco-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-6 shadow-sm shadow-primary/10">
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Listing Optimisation · UK</span>
              </div>

              <h1 className="lco-fade-2 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-tight mb-6">
                Airbnb Listing Creation &amp; Optimisation{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  That Drives Bookings
                </span>
              </h1>

              <p className="lco-fade-3 text-base lg:text-lg text-base-content/65 leading-relaxed mb-4 max-w-lg">
                Assistophere helps UK hosts create and optimise listings that attract attention,
                convert views into bookings, and perform consistently across platforms.
              </p>

              {/* AI-extractable definition */}
              <div className="lco-fade-3 mb-8 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm text-base-content/60 leading-relaxed italic">
                Airbnb listing optimisation involves improving titles, descriptions, images, and
                structure to increase visibility, attract guests, and convert more bookings.
              </div>

              <div className="lco-fade-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="pulse-cta-lco btn btn-primary btn-lg rounded-full px-8 gap-2 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/45 transition-all duration-200"
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
              <div className="lco-fade-5 flex items-center gap-4 mt-8 pt-8 border-t border-base-300/60">
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

            {/* Visual: before / after listing preview */}
            <div className="lco-fade-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-base-200 border border-base-300 shadow-2xl shadow-black/40 p-7">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/6" />
                <p className="relative z-10 text-xs font-bold text-base-content/30 uppercase tracking-widest mb-5">
                  Listing snapshot
                </p>
                <div className="relative z-10 flex flex-col gap-3">
                  {[
                    {
                      label: 'Title',
                      before: 'Cosy flat in London',
                      after: 'Bright Studio · Zone 2 · 5 min to Tube',
                      color: 'text-primary',
                    },
                    {
                      label: 'Cover photo',
                      before: 'Dark, low-res bedroom',
                      after: 'Well-lit living space — lifestyle-first',
                      color: 'text-secondary',
                    },
                    {
                      label: 'Description',
                      before: 'Long block of unformatted text',
                      after: 'Structured, guest-focused sections',
                      color: 'text-primary',
                    },
                    {
                      label: 'Amenities',
                      before: 'Default tick-box list',
                      after: 'Prioritised for target guest',
                      color: 'text-secondary',
                    },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="rounded-xl border border-base-300 bg-base-100/60 overflow-hidden"
                    >
                      <div className="px-3 py-1.5 bg-base-300/40 flex items-center justify-between">
                        <p className="text-[10px] font-bold text-base-content/30 uppercase tracking-wider">
                          {row.label}
                        </p>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-3 py-3 border-r border-base-300">
                          <p className="text-[9px] text-error/50 font-bold uppercase mb-1">
                            Before
                          </p>
                          <p className="text-xs text-base-content/40 leading-snug">{row.before}</p>
                        </div>
                        <div className="px-3 py-3 bg-primary/4">
                          <p className={`text-[9px] font-bold uppercase mb-1 ${row.color}`}>
                            After
                          </p>
                          <p className="text-xs text-base-content/70 font-medium leading-snug">
                            {row.after}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Stat badge */}
                  <div className="mt-1 rounded-xl p-3.5 border border-success/25 bg-success/8 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-success" />
                      <p className="text-xs font-semibold text-success">Conversion improved</p>
                    </div>
                    <p className="text-[10px] text-base-content/35 font-medium">
                      Clicks → Bookings ↑
                    </p>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-base-100/90 backdrop-blur-sm border border-base-300 rounded-xl px-3 py-2 shadow-lg">
                  <p className="text-[10px] text-base-content/40 font-medium">Visibility</p>
                  <p className="text-sm font-extrabold text-primary">Ranking ↑</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/8 rounded-full blur-[80px] -z-10 scale-75" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: CLARITY — RESET THINKING ────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-16 lg:py-20">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-5">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Reset Thinking</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                Your Listing Isn&apos;t Just Information.{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  It&apos;s What Sells the Stay.
                </span>
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed mb-4">
                Most listings fail not because of the property, but because of how it&apos;s
                presented.
              </p>
              <p className="text-base-content/55 leading-relaxed">
                Guests make fast decisions. Your listing controls all of them.
              </p>
            </div>

            {/* Decision stages */}
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: <MousePointerClick className="w-5 h-5 text-primary" />,
                  stage: '01',
                  label: 'Whether to click',
                  sub: 'Title and cover photo decide this in under 2 seconds.',
                },
                {
                  icon: <Eye className="w-5 h-5 text-secondary" />,
                  stage: '02',
                  label: 'Whether to stay',
                  sub: 'First impressions inside the listing determine if they keep reading.',
                },
                {
                  icon: <CalendarCheck className="w-5 h-5 text-primary" />,
                  stage: '03',
                  label: 'Whether to book',
                  sub: 'Clarity, trust, and flow drive the final booking decision.',
                },
              ].map((item) => (
                <div
                  key={item.stage}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/25 transition-colors"
                >
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-base-content/30 uppercase tracking-wider mb-0.5">
                      Stage {item.stage}
                    </p>
                    <p className="font-bold text-base-content text-sm mb-1">{item.label}</p>
                    <p className="text-xs text-base-content/50 leading-relaxed">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: THE REAL PROBLEM ─────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-5">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>The Real Problem</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                Why Most Listings Underperform
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed mb-8">
                The property isn&apos;t the problem. The presentation is.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { issue: "Weak titles that don't stand out", impact: 'Low CTR' },
                  { issue: 'Unclear or generic descriptions', impact: 'Poor conversion' },
                  { issue: 'Poor image structure and order', impact: 'Lost attention' },
                  { issue: 'Missing or buried key information', impact: 'Guest hesitation' },
                  { issue: 'No clear reading flow', impact: 'Booking abandoned' },
                  { issue: 'Not aligned with platform behaviour', impact: 'Lower ranking' },
                ].map((item) => (
                  <div
                    key={item.issue}
                    className="flex items-center gap-3 py-3 border-b border-base-300/60 last:border-0"
                  >
                    <XCircle className="w-3.5 h-3.5 text-error/55 shrink-0" />
                    <p className="flex-1 text-sm text-base-content/60">{item.issue}</p>
                    <span className="text-[10px] font-bold text-error/50 bg-error/8 px-2 py-0.5 rounded-full whitespace-nowrap">
                      {item.impact}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:pt-16">
              {/* Property vs presentation */}
              <div className="rounded-2xl p-6 bg-base-200 border border-base-300">
                <p className="text-xs font-bold text-base-content/30 uppercase tracking-wider mb-5">
                  Common misconception
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { label: 'Great location', check: true },
                    { label: 'Well-maintained property', check: true },
                    { label: 'Competitive pricing', check: true },
                    { label: 'Strong title', check: false },
                    { label: 'Clear description structure', check: false },
                    { label: 'Optimised image order', check: false },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      {item.check ? (
                        <CheckCircle2 className="w-4 h-4 text-success/70 shrink-0" />
                      ) : (
                        <XCircle className="w-4 h-4 text-error/55 shrink-0" />
                      )}
                      <p
                        className={`text-sm ${item.check ? 'text-base-content/55' : 'text-base-content/80 font-medium'}`}
                      >
                        {item.label}
                      </p>
                      {!item.check && (
                        <span className="ml-auto text-[10px] font-bold text-error/45 bg-error/8 px-2 py-0.5 rounded-full">
                          Missing
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {/* Closing line */}
              <div className="rounded-2xl p-5 border border-primary/20 bg-primary/6 text-center">
                <p className="text-base font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary leading-snug">
                  Good properties don&apos;t always get bookings.
                  <br />
                  Well-presented ones do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: WHAT DRIVES BOOKINGS (AUTHORITY) ────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <BarChart2 className="w-3.5 h-3.5" />
              <span>Conversion Psychology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Makes a Listing Convert
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              Every booking starts with four things happening in sequence. Most listings fail at the
              first one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {[
              {
                icon: <MousePointerClick className="w-5 h-5 text-primary" />,
                stage: '01',
                title: 'First Impression (Click)',
                body: "Title and cover photo decide if someone clicks. If your listing doesn't stand out in search, no one ever sees the rest of it.",
                pill: 'Title + Cover Photo',
              },
              {
                icon: <Eye className="w-5 h-5 text-primary" />,
                stage: '02',
                title: 'Clarity (Understanding)',
                body: "Guests need to quickly understand what they're booking — the space, the experience, what's included. Confusion at this stage kills bookings.",
                pill: 'Description + Structure',
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-primary" />,
                stage: '03',
                title: 'Trust (Confidence)',
                body: "Clear details, honest descriptions, and good images remove hesitation. Guests book when they feel certain about what they're getting.",
                pill: 'Details + Images',
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-primary" />,
                stage: '04',
                title: 'Flow (Decision)',
                body: 'The listing should guide the guest naturally towards booking. Poor flow breaks the momentum — even when the property is right.',
                pill: 'Layout + Sequence',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/3 transition-colors duration-300" />
                <div className="relative z-10 flex items-start gap-4">
                  <div>
                    <p className="text-[10px] font-bold text-base-content/25 uppercase tracking-wider mb-1">
                      Stage {item.stage}
                    </p>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/18 transition-colors shrink-0">
                        {item.icon}
                      </div>
                      <h3 className="font-bold text-base-content text-base leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-base-content/55 leading-relaxed mb-3">{item.body}</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold">
                      {item.pill}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-6 border border-primary/20 bg-primary/6 text-center">
            <p className="text-base font-semibold text-primary/80">
              Most hosts focus on the property. We focus on the conversion path.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: WHAT WE DO ────────────────────────────────────── */}
      <section id="what-we-cover" className="py-20 lg:py-28">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Full Breakdown</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Our Listing Optimisation Covers
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              Every element of your listing — reviewed, structured, and optimised for performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatWeCovers.map((part) => (
              <div
                key={part.title}
                className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-base-200 border border-base-300 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/3 transition-colors duration-300" />
                <div className="relative z-10 flex flex-col gap-4 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/18 transition-colors">
                      {part.icon}
                    </div>
                    <h3 className="font-bold text-base-content text-base leading-tight">
                      {part.title}
                    </h3>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {part.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-base-content/60"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 border-t border-base-300">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-xs font-semibold text-primary/80 leading-snug">
                        {part.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl p-6 border border-primary/20 bg-primary/6 text-center">
            <p className="text-xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Listings that attract attention and convert consistently.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: PLATFORM BEHAVIOUR ──────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-5">
                <Globe className="w-3.5 h-3.5" />
                <span>Platform Intelligence</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                Why Optimisation Isn&apos;t the Same Everywhere
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed mb-4">
                Each platform ranks and displays listings differently.
              </p>
              <p className="text-base-content/55 leading-relaxed mb-8">
                What works on Airbnb doesn&apos;t necessarily work on Booking.com. The signals each
                platform uses to rank and surface listings vary — and a one-size-fits-all approach
                means underperforming on all of them.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  {
                    platform: 'Airbnb',
                    dot: 'bg-rose-400',
                    focus:
                      'Engagement and presentation — storytelling, photos, and experience signals.',
                  },
                  {
                    platform: 'Booking.com',
                    dot: 'bg-blue-400',
                    focus: 'Pricing, availability, and rate competitiveness within the platform.',
                  },
                  {
                    platform: 'Vrbo',
                    dot: 'bg-teal-400',
                    focus: 'Property clarity, space description, and suitability for longer stays.',
                  },
                ].map((p) => (
                  <div
                    key={p.platform}
                    className="flex gap-4 items-start p-4 rounded-xl bg-base-100 border border-base-300 hover:border-primary/20 transition-colors"
                  >
                    <div className={`w-3 h-3 rounded-full ${p.dot} mt-1 shrink-0`} />
                    <div>
                      <p className="font-bold text-base-content text-sm mb-0.5">{p.platform}</p>
                      <p className="text-xs text-base-content/50 leading-relaxed">{p.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl border border-base-300 bg-base-100">
                <p className="text-sm font-bold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary text-center">
                  Using one approach everywhere limits performance on all platforms.
                </p>
              </div>
            </div>

            {/* Mini comparison matrix */}
            <div className="rounded-3xl p-7 bg-base-100 border border-base-300 shadow-xl shadow-black/10">
              <p className="text-xs font-bold text-base-content/30 uppercase tracking-widest mb-6">
                What each platform prioritises
              </p>
              {/* Header */}
              <div className="grid grid-cols-4 gap-2 mb-3">
                <div />
                {[
                  { name: 'Airbnb', color: 'text-rose-400' },
                  { name: 'Booking.com', color: 'text-blue-400' },
                  { name: 'Vrbo', color: 'text-teal-400' },
                ].map((p) => (
                  <p
                    key={p.name}
                    className={`text-[9px] font-bold uppercase tracking-wider text-center ${p.color}`}
                  >
                    {p.name}
                  </p>
                ))}
              </div>
              {[
                { label: 'Photos', a: 'Critical', b: 'Important', c: 'Important' },
                { label: 'Title', a: 'Storytelling', b: 'Keywords', c: 'Features' },
                { label: 'Pricing', a: 'Value signal', b: 'Competitive', c: 'Weekly rates' },
                { label: 'Reviews', a: 'Ranking factor', b: 'Score-driven', c: 'Social proof' },
                { label: 'Availability', a: 'Flexibility', b: 'Instant book', c: 'Block booking' },
              ].map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-4 gap-2 py-2.5 border-b border-base-300/60 last:border-0 ${i % 2 === 0 ? '' : 'bg-base-200/40 -mx-2 px-2 rounded'}`}
                >
                  <p className="text-[10px] font-bold text-base-content/35 uppercase tracking-wide">
                    {row.label}
                  </p>
                  <div className="px-2 py-1 rounded-lg bg-rose-400/8 border border-rose-400/12 text-center">
                    <p className="text-[9px] font-semibold text-rose-400 leading-snug">{row.a}</p>
                  </div>
                  <div className="px-2 py-1 rounded-lg bg-blue-400/8 border border-blue-400/12 text-center">
                    <p className="text-[9px] font-semibold text-blue-400 leading-snug">{row.b}</p>
                  </div>
                  <div className="px-2 py-1 rounded-lg bg-teal-400/8 border border-teal-400/12 text-center">
                    <p className="text-[9px] font-semibold text-teal-400 leading-snug">{row.c}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: COMMON MISTAKES ──────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-3xl p-8 bg-base-200 border border-base-300 shadow-xl shadow-black/10">
                <p className="text-xs font-bold text-base-content/30 uppercase tracking-widest mb-6">
                  What we see most often
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      mistake: 'Overloading descriptions with every detail',
                      why: 'Guests stop reading, miss key information',
                    },
                    {
                      mistake: 'Poor image order — best photos buried',
                      why: 'First impression is weak, clicks drop',
                    },
                    {
                      mistake: 'No clear positioning in the title',
                      why: 'Blends in with hundreds of similar listings',
                    },
                    {
                      mistake: 'Copying competitor listings',
                      why: 'Generic presentation, no differentiation',
                    },
                    {
                      mistake: 'Ignoring the guest perspective',
                      why: 'Answers the wrong questions in the wrong order',
                    },
                  ].map((item) => (
                    <div key={item.mistake} className="flex gap-3 items-start">
                      <XCircle className="w-4 h-4 text-error/55 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-base-content/75 mb-0.5">
                          {item.mistake}
                        </p>
                        <p className="text-xs text-base-content/40 leading-relaxed">{item.why}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-5">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Common Mistakes</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                Where Listings Go Wrong
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed mb-4">
                Most listing mistakes aren&apos;t obvious to the host because they wrote the listing
                from their own perspective.
              </p>
              <p className="text-base-content/55 leading-relaxed mb-8">
                Guests don&apos;t read listings the same way hosts write them. They scan, they
                compare, and they make fast judgements based on incomplete information.
              </p>
              <div className="rounded-2xl p-5 border border-error/15 bg-error/5">
                <p className="text-base font-extrabold text-transparent bg-clip-text bg-linear-to-r from-error to-secondary text-center">
                  Most listings are written for the host, not the guest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: OUR APPROACH ─────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Our Approach</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                How We Optimise Listings Properly
              </h2>
              <p className="text-base-content/60 text-lg leading-relaxed mb-8">
                We don&apos;t just rewrite content. We improve the conversion path — every element
                is reviewed against how guests actually behave on the platform.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    title: 'We focus on conversion, not just content',
                    desc: 'Every element is evaluated on whether it moves the guest closer to a booking decision — not just whether it reads well.',
                  },
                  {
                    title: 'We structure for real guest behaviour',
                    desc: 'We know how guests scan listings, what they look for first, and where hesitation happens. Structure is built around that.',
                  },
                  {
                    title: 'We adjust based on performance',
                    desc: "Optimisation isn't a one-time task. We monitor how listings perform and make adjustments — not set-and-forget.",
                  },
                  {
                    title: 'We align listings with pricing and operations',
                    desc: 'A listing that sets the wrong expectations creates complaints. We make sure the listing reflects the actual guest experience.',
                  },
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-xl bg-primary/12 border border-primary/20 flex items-center justify-center text-primary font-extrabold text-xs mt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <p className="font-semibold text-base-content text-sm mb-1">{item.title}</p>
                      <p className="text-base-content/55 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl p-8 lg:p-10 bg-linear-to-br from-primary/15 via-base-200 to-secondary/10 border border-primary/20 shadow-xl shadow-primary/10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/8 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <p className="text-xs font-bold text-primary/50 uppercase tracking-widest mb-6">
                  What this means for your listing
                </p>
                {[
                  'Stronger click-through rate from search',
                  'Clearer first impression on opening',
                  'Better conversion from views to bookings',
                  'Consistent performance across platforms',
                  'Fewer confused or mismatched guests',
                  'Listing aligned with your pricing strategy',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3 mb-4 last:mb-0">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <p className="font-semibold text-base-content text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: COMPARISON TABLE ─────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Side-by-Side</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Standard Listing vs Optimised Listing
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              The difference in performance between a listing that exists and one that converts.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden sm:block rounded-3xl overflow-hidden border border-base-300 shadow-2xl shadow-black/20">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="py-4 px-6 text-left bg-base-300/50 text-base-content/45 font-semibold uppercase text-xs tracking-wider w-[28%]">
                    Area
                  </th>
                  <th className="py-4 px-6 text-left bg-base-300/50 text-base-content/45 font-semibold uppercase text-xs tracking-wider w-[36%]">
                    Standard Listing
                  </th>
                  <th className="py-4 px-6 text-left bg-primary/15 text-primary font-bold uppercase text-xs tracking-wider w-[36%]">
                    Optimised Listing ✓
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Purpose', 'Informational', 'Conversion-focused'],
                  ['Title', 'Generic description', 'Clear, click-worthy positioning'],
                  ['Description', 'Unstructured block of text', 'Structured guest-focused flow'],
                  ['Images', 'Random order', 'Sequenced for impact'],
                  ['Engagement', 'Low click-through', 'Higher CTR from search'],
                  ['Performance', 'Inconsistent results', 'Measured and adjusted'],
                ].map(([area, standard, optimised], i) => (
                  <tr key={area} className={i % 2 === 0 ? 'bg-base-100' : 'bg-base-200/40'}>
                    <td className="py-3.5 px-6 font-medium text-base-content/55 border-r border-base-300 text-xs uppercase tracking-wide">
                      {area}
                    </td>
                    <td className="py-3.5 px-6 text-base-content/45 border-r border-base-300">
                      <span className="flex items-center gap-2">
                        <XCircle className="w-3.5 h-3.5 text-error/45 shrink-0" />
                        {standard}
                      </span>
                    </td>
                    <td className="py-3.5 px-6 text-base-content/85 font-semibold bg-primary/5">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        {optimised}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="sm:hidden flex flex-col gap-4">
            {[
              ['Purpose', 'Informational', 'Conversion-focused'],
              ['Title', 'Generic', 'Click-worthy'],
              ['Description', 'Unstructured', 'Structured flow'],
              ['Images', 'Random order', 'Sequenced'],
              ['Engagement', 'Low CTR', 'Higher CTR'],
              ['Performance', 'Inconsistent', 'Measured'],
            ].map(([area, standard, optimised]) => (
              <div key={area} className="rounded-2xl overflow-hidden border border-base-300">
                <div className="px-4 py-2.5 bg-base-300/60 text-xs font-bold text-base-content/40 uppercase tracking-wider">
                  {area}
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-3 py-3.5 border-r border-base-300 bg-base-100">
                    <p className="text-[10px] text-base-content/35 mb-1">Standard</p>
                    <p className="text-xs text-base-content/50">{standard}</p>
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
                icon: <TrendingUp className="w-5 h-5 text-primary" />,
                title: 'Hosts with low booking rates',
                desc: "Your property is good but bookings aren't reflecting it. The listing is holding you back.",
              },
              {
                icon: <LayoutGrid className="w-5 h-5 text-primary" />,
                title: 'New listings needing a proper setup',
                desc: 'Starting from scratch and want it done properly from day one — not trial and error.',
              },
              {
                icon: <Layers className="w-5 h-5 text-primary" />,
                title: 'Serviced accommodation businesses',
                desc: 'Operating professionally and need listings that reflect that — not amateur-looking setups.',
              },
              {
                icon: <Globe className="w-5 h-5 text-primary" />,
                title: 'Operators scaling their portfolio',
                desc: 'Adding properties and need consistent, optimised listings across every channel.',
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
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Improve Your Listing</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-[1.12]">
            Ready to Improve Your{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Listing Performance?
            </span>
          </h2>

          <p className="text-lg text-base-content/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s turn your listing into something that actually converts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="pulse-cta-lco btn btn-primary btn-lg rounded-full px-10 gap-2 font-semibold shadow-xl shadow-primary/30 hover:shadow-primary/55 transition-all duration-200"
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
