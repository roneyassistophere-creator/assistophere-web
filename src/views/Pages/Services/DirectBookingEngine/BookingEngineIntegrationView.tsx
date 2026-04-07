import React from 'react'
import type { Page } from '@/payload-types'
import Link from 'next/link'
import {
  CalendarCheck,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Globe,
  CreditCard,
  MessageSquare,
  Zap,
  Star,
  ShieldCheck,
  Target,
  AlertCircle,
  Layers,
  PlugZap,
  Calendar,
  Users,
  TrendingUp,
  Settings,
  ArrowLeftRight,
} from 'lucide-react'
import { FaqItem } from '../AirbnbVa/FaqItem'

const faqs = [
  {
    q: 'Will this sync with Airbnb?',
    a: 'Yes. Calendar syncing with Airbnb, Booking.com, and other OTAs is a core part of our integration setup. We configure iCal or API-level syncing so your availability stays accurate across all platforms — preventing double bookings.',
  },
  {
    q: 'Can it handle multiple properties?',
    a: 'Absolutely. Multi-property setups are where proper integration becomes essential. We configure your booking engine to handle individual property availability, pricing, and booking flows — all from one connected system.',
  },
  {
    q: "Is it difficult to manage after it's set up?",
    a: "No — that's the whole point. A properly integrated system reduces the manual work you do every day. Availability updates automatically, bookings are confirmed without intervention, and payments are processed securely.",
  },
  {
    q: 'What booking systems do you work with?',
    a: 'We work with a range of STR-compatible booking engines and help you select the right one for your setup. The right choice depends on your property count, platforms, and operational needs — which we assess during discovery.',
  },
]

const integrationCovers = [
  {
    icon: <Settings className="w-6 h-6 text-primary" />,
    title: 'Booking Engine Setup',
    items: [
      'Selecting the right system',
      'Configuration based on your setup',
      'Testing before launch',
    ],
    outcome: 'The right engine matched to your business — not a generic default.',
  },
  {
    icon: <PlugZap className="w-6 h-6 text-primary" />,
    title: 'Website Integration',
    items: ['Embedding booking functionality', 'Smooth user experience', 'CTA placement and flow'],
    outcome: 'Guests can book directly from your website without leaving or losing confidence.',
  },
  {
    icon: <Calendar className="w-6 h-6 text-primary" />,
    title: 'Calendar & Availability Sync',
    items: [
      'OTA syncing (Airbnb, Booking.com)',
      'Avoiding double bookings',
      'Real-time availability updates',
    ],
    outcome: 'One accurate availability picture across all your platforms.',
  },
  {
    icon: <CreditCard className="w-6 h-6 text-primary" />,
    title: 'Payment Setup',
    items: ['Secure payment gateways', 'Deposit and full payment handling', 'Automated collection'],
    outcome: 'Payments processed securely and automatically — no manual invoicing.',
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: 'Booking Flow Optimisation',
    items: [
      'Simple steps from browse to book',
      'Clear CTAs at every stage',
      'Reduced friction and drop-off',
    ],
    outcome: 'A system that works automatically and reliably.',
  },
]

export const BookingEngineIntegrationView: React.FC<{ page: Page }> = () => {
  return (
    <article className="flex flex-col w-full overflow-x-hidden font-sans text-base-content selection:bg-primary/20">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpBEI {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .bei-fade-1 { animation: fadeUpBEI 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) both; }
        .bei-fade-2 { animation: fadeUpBEI 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .bei-fade-3 { animation: fadeUpBEI 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both; }
        .bei-fade-4 { animation: fadeUpBEI 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both; }
        .bei-fade-5 { animation: fadeUpBEI 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes pulse-ring-bei {
          0%   { box-shadow: 0 0 0 0 oklch(var(--p)/0.35); }
          70%  { box-shadow: 0 0 0 12px oklch(var(--p)/0); }
          100% { box-shadow: 0 0 0 0 oklch(var(--p)/0); }
        }
        .pulse-cta-bei { animation: pulse-ring-bei 2.5s ease-out infinite; }
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
              <div className="bei-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-6 shadow-sm shadow-primary/10">
                <PlugZap className="w-3.5 h-3.5" />
                <span>Booking System Integration · UK</span>
              </div>

              <h1 className="bei-fade-2 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-tight mb-6">
                Booking Engine Integration for{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Short Term Rental Websites
                </span>
              </h1>

              <p className="bei-fade-3 text-base lg:text-lg text-base-content/65 leading-relaxed mb-4 max-w-lg">
                Assistophere integrates booking engines into your website — connecting availability,
                payments, and guest bookings into one smooth system that works alongside Airbnb and
                other platforms.
              </p>

              {/* AI-extractable definition */}
              <div className="bei-fade-3 mb-8 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm text-base-content/60 leading-relaxed italic">
                Booking engine integration allows your website to accept real-time bookings by
                syncing availability, handling payments, and connecting with your existing STR
                platforms and systems.
              </div>

              <div className="bei-fade-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="pulse-cta-bei btn btn-primary btn-lg rounded-full px-8 gap-2 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/45 transition-all duration-200"
                >
                  <CalendarCheck className="w-5 h-5" />
                  Book a Discovery Call
                </Link>
                <a
                  href="#how-it-covers"
                  className="btn btn-outline btn-lg rounded-full px-8 gap-2 font-semibold border-base-300 hover:bg-base-200 transition-all duration-200"
                >
                  See How It Works
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust bar */}
              <div className="bei-fade-5 flex items-center gap-4 mt-8 pt-8 border-t border-base-300/60">
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

            {/* Visual: booking flow diagram */}
            <div className="bei-fade-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-base-200 border border-base-300 shadow-2xl shadow-black/40 p-7">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/6" />
                <p className="relative z-10 text-xs font-bold text-base-content/30 uppercase tracking-widest mb-6">
                  How it connects
                </p>
                <div className="relative z-10 flex flex-col gap-3">
                  {/* Top: Platforms */}
                  <div className="grid grid-cols-3 gap-2">
                    {['Airbnb', 'Booking.com', 'Other OTAs'].map((p) => (
                      <div
                        key={p}
                        className="rounded-xl p-2.5 border border-base-300 bg-base-300/50 text-center"
                      >
                        <p className="text-[10px] font-semibold text-base-content/45">{p}</p>
                      </div>
                    ))}
                  </div>
                  {/* Arrow */}
                  <div className="flex items-center justify-center gap-2 text-base-content/25">
                    <div className="flex-1 h-px bg-base-300" />
                    <ArrowLeftRight className="w-4 h-4 shrink-0 text-primary/50" />
                    <div className="flex-1 h-px bg-base-300" />
                  </div>
                  {/* Middle: Booking Engine */}
                  <div className="rounded-xl p-4 border-2 border-primary/30 bg-primary/10 text-center shadow-md shadow-primary/10">
                    <p className="text-xs font-bold text-base-content/35 uppercase tracking-wider mb-0.5">
                      Booking Engine
                    </p>
                    <p className="text-sm font-extrabold text-primary">
                      Availability · Payments · Confirmations
                    </p>
                  </div>
                  {/* Arrow */}
                  <div className="flex items-center justify-center gap-2 text-base-content/25">
                    <div className="flex-1 h-px bg-base-300" />
                    <ArrowRight className="w-4 h-4 shrink-0 rotate-90 text-primary/50" />
                    <div className="flex-1 h-px bg-base-300" />
                  </div>
                  {/* Bottom: Your Website */}
                  <div className="rounded-xl p-4 border border-primary/40 bg-primary/12 text-center">
                    <p className="text-sm font-extrabold text-primary">
                      Your Direct Booking Website
                    </p>
                    <p className="text-xs text-base-content/45 mt-0.5">
                      Guest books → confirmed instantly
                    </p>
                  </div>
                </div>
                {/* Floating stat */}
                <div className="absolute top-4 right-4 bg-base-100/90 backdrop-blur-sm border border-base-300 rounded-xl px-3 py-2 shadow-lg">
                  <p className="text-[10px] text-base-content/40 font-medium">Double bookings</p>
                  <p className="text-sm font-extrabold text-success">Eliminated</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/8 rounded-full blur-[80px] -z-10 scale-75" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: CLARITY — WHAT IS IT? ───────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-16 lg:py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-5">
            <Zap className="w-3.5 h-3.5" />
            <span>Clear Definition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            What Is Booking Engine Integration?
          </h2>
          <p className="text-base-content/65 text-lg leading-relaxed mb-8">
            Booking engine integration connects your website to a system that allows guests to check
            availability, select dates, and complete bookings directly.
          </p>

          <p className="text-base-content/50 text-base mb-8">It links:</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                icon: <Calendar className="w-5 h-5 text-primary" />,
                label: 'Property Availability',
              },
              {
                icon: <CalendarCheck className="w-5 h-5 text-primary" />,
                label: 'Booking Calendar',
              },
              { icon: <CreditCard className="w-5 h-5 text-primary" />, label: 'Payment System' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-base-100 border border-base-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="font-semibold text-base-content/70 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-5 border border-primary/20 bg-primary/6">
            <p className="text-base font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              All in one place.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: THE PROBLEM ──────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>The Problem</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                Why Most Direct Booking Setups Break
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed mb-3">
                Many hosts build a website — but the booking process doesn&apos;t work properly.
              </p>
              <p className="text-base-content/55 leading-relaxed">
                The website looks good. But underneath, nothing is connected. Guests hit a dead end
                and bounce back to Airbnb.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { issue: 'Availability not synced', cost: 'Double bookings happen' },
                { issue: 'Double bookings', cost: 'Operational nightmare' },
                { issue: 'Manual updates required', cost: 'Hours lost every week' },
                { issue: 'Payments handled separately', cost: 'Messy, error-prone process' },
                { issue: 'No clear booking flow', cost: 'Guests abandon and rebook on Airbnb' },
              ].map((item) => (
                <div
                  key={item.issue}
                  className="flex items-center gap-4 p-4 rounded-xl bg-base-200 border border-base-300 hover:border-error/25 transition-colors group"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-error/10 border border-error/20 flex items-center justify-center">
                    <XCircle className="w-4 h-4 text-error/70" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-base-content/75">{item.issue}</p>
                  </div>
                  <div className="shrink-0 hidden sm:block px-2.5 py-1 rounded-full bg-base-300/60 text-xs text-base-content/35 font-medium whitespace-nowrap">
                    {item.cost}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-2xl p-6 lg:p-8 border border-base-300 bg-base-200 text-center">
            <p className="text-xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Without proper integration, direct booking becomes more work — not less.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: WHAT PROPER INTEGRATION LOOKS LIKE ──────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>The Standard</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What a Properly Integrated System Should Do
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              Five non-negotiables for any working direct booking setup.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <Calendar className="w-6 h-6 text-primary" />,
                title: 'Real-Time Availability',
                desc: 'Guests only ever see dates that are actually available — no manual calendar management required.',
                num: '01',
              },
              {
                icon: <Zap className="w-6 h-6 text-primary" />,
                title: 'Instant Booking Capability',
                desc: 'Bookings confirmed automatically — no chasing guests or manually approving requests.',
                num: '02',
              },
              {
                icon: <CreditCard className="w-6 h-6 text-primary" />,
                title: 'Secure Payment Processing',
                desc: 'Payments collected safely and automatically — deposits or full amounts handled without manual work.',
                num: '03',
              },
              {
                icon: <ArrowLeftRight className="w-6 h-6 text-primary" />,
                title: 'Platform Syncing',
                desc: 'Airbnb, Booking.com, and other platforms stay aligned — no double bookings or conflicting availability.',
                num: '04',
              },
              {
                icon: <MessageSquare className="w-6 h-6 text-primary" />,
                title: 'Automated Confirmation Flow',
                desc: 'Guests receive clear, instant communication after booking — no manual follow-up required.',
                num: '05',
              },
              {
                icon: <Settings className="w-6 h-6 text-primary" />,
                title: 'Easy Management',
                desc: 'A backend you can actually use — not a system that requires constant developer support.',
                num: '06',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/3 transition-colors duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/18 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-2xl font-extrabold text-base-content/10 group-hover:text-primary/15 transition-colors">
                      {item.num}
                    </span>
                  </div>
                  <h3 className="font-bold text-base-content text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-base-content/55 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: WHAT WE HANDLE ───────────────────────────────── */}
      <section id="how-it-covers" className="py-20 lg:py-28">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Full Breakdown</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Our Booking Engine Integration Covers
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              Every layer of your booking system — set up properly from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {integrationCovers.map((part) => (
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

          <div className="mt-10 rounded-2xl p-6 lg:p-8 border border-primary/20 bg-primary/6 text-center">
            <p className="text-xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              A system that works automatically and reliably.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: FITS YOUR CURRENT SETUP ─────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-5">
                <Globe className="w-3.5 h-3.5" />
                <span>No Disruption</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                Works Alongside Your Existing Platforms
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed mb-4">
                Your booking engine doesn&apos;t replace Airbnb or Booking.com.
              </p>
              <p className="text-base-content/55 leading-relaxed mb-8 text-lg font-semibold">
                It connects with them.
              </p>

              <div className="flex flex-col gap-4 mb-8">
                {[
                  {
                    label: 'Your calendars stay synced',
                    desc: 'No manual updates. Changes on one platform reflect everywhere.',
                  },
                  {
                    label: 'Your availability stays accurate',
                    desc: 'Guests on your website see live, correct dates — same as your OTA listings.',
                  },
                  {
                    label: 'Your operations stay aligned',
                    desc: "New bookings feed into the same workflow you're already using.",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-base-content text-sm">{item.label}</p>
                      <p className="text-base-content/50 text-xs leading-relaxed mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reassurance visual */}
            <div className="relative rounded-3xl p-8 lg:p-10 bg-linear-to-br from-primary/15 via-base-200 to-secondary/10 border border-primary/20 shadow-xl shadow-primary/10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/8 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <p className="text-xs font-bold text-primary/50 uppercase tracking-widest mb-6">
                  What changes
                </p>
                {[
                  { before: 'Manual availability updates', after: 'Automatic sync' },
                  { before: 'Guests bounce to Airbnb', after: 'Book direct on your site' },
                  { before: 'Separate payment handling', after: 'Auto payment processing' },
                  { before: 'Risk of double bookings', after: 'One accurate calendar' },
                  { before: 'No guest communication', after: 'Automated confirmations' },
                ].map((item) => (
                  <div key={item.before} className="flex items-start gap-3 mb-4 last:mb-0">
                    <div className="shrink-0 mt-0.5">
                      <XCircle className="w-4 h-4 text-error/40" />
                    </div>
                    <p className="text-xs text-base-content/40 line-through leading-relaxed w-28 shrink-0">
                      {item.before}
                    </p>
                    <ArrowRight className="w-3.5 h-3.5 text-primary/50 shrink-0 mt-0.5" />
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <p className="text-xs text-base-content/75 font-semibold leading-relaxed">
                        {item.after}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: COMMON MISTAKES ──────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-4">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Common Pitfalls</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Where Most Integrations Go Wrong
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              These aren&apos;t technical failures. They&apos;re setup failures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              {
                mistake: 'Using the wrong booking engine',
                why: 'Not all booking systems work the same way. Choosing the wrong one for your setup creates friction and limitations.',
              },
              {
                mistake: 'Poor syncing setup',
                why: "A sync that runs on a 24-hour delay isn't real-time availability. It's a double booking waiting to happen.",
              },
              {
                mistake: 'Overcomplicated booking flow',
                why: 'Too many steps, unclear pricing, or confusing forms push guests back to Airbnb where it feels easier.',
              },
              {
                mistake: 'No testing before going live',
                why: 'Live issues at the booking stage destroy guest trust. Everything must be tested across devices before launch.',
              },
              {
                mistake: 'No operational alignment',
                why: "A booking system that doesn't talk to your operations creates double-handling, not efficiency.",
              },
              {
                mistake: 'Set and forget mindset',
                why: 'Booking systems need monitoring after launch — not indefinitely, but enough to catch any early edge cases.',
              },
            ].map((item) => (
              <div
                key={item.mistake}
                className="flex flex-col gap-3 p-5 rounded-2xl bg-base-200 border border-base-300 hover:border-error/25 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5 w-7 h-7 rounded-full bg-error/10 border border-error/20 flex items-center justify-center">
                    <XCircle className="w-3.5 h-3.5 text-error/70" />
                  </div>
                  <p className="font-semibold text-base-content text-sm">{item.mistake}</p>
                </div>
                <p className="text-xs text-base-content/50 leading-relaxed pl-10">{item.why}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-6 lg:p-8 border border-base-300 bg-base-200 text-center">
            <p className="text-xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Integration only works when it&apos;s done properly from the start.
            </p>
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
                <span>Differentiation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                How We Set It Up Properly
              </h2>
              <p className="text-base-content/60 text-lg leading-relaxed mb-8">
                We don&apos;t just install a booking plugin. We build a connected system around your
                business.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    title: 'We match the system to your business',
                    desc: 'Not one-size-fits-all. The right booking engine for your property count, platforms, and workflow.',
                  },
                  {
                    title: 'We connect all moving parts',
                    desc: 'Website, booking engine, calendar, payments, confirmations — all linked and tested.',
                  },
                  {
                    title: 'We test everything before going live',
                    desc: 'End-to-end testing across devices and edge cases before a single guest sees it.',
                  },
                  {
                    title: 'We align it with your operations',
                    desc: 'New bookings flow into your existing workflow — not a separate system you have to manage alongside.',
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

            {/* Visual steps */}
            <div className="relative rounded-3xl p-7 bg-base-100 border border-base-300 shadow-xl shadow-black/15">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-[60px]" />
              <p className="relative z-10 text-xs font-bold text-base-content/30 uppercase tracking-widest mb-6">
                Our setup process
              </p>
              <div className="relative z-10 flex flex-col gap-0">
                {[
                  {
                    step: 'Discovery & requirements',
                    detail: 'Understand your setup, goals, and platforms.',
                  },
                  {
                    step: 'System selection',
                    detail: 'Match the right booking engine to your needs.',
                  },
                  {
                    step: 'Integration build',
                    detail: 'Connect website, engine, calendar, and payments.',
                  },
                  {
                    step: 'Sync configuration',
                    detail: 'Set up OTA syncing and availability rules.',
                  },
                  { step: 'Test across devices', detail: 'Full QA — desktop, mobile, edge cases.' },
                  { step: 'Launch & handover', detail: 'Go live with documentation and support.' },
                ].map((item, i, arr) => (
                  <div key={item.step} className="relative flex gap-4 pb-5 last:pb-0">
                    {i < arr.length - 1 && (
                      <div className="absolute left-3.5 top-7 bottom-0 w-px bg-base-300" />
                    )}
                    <div className="shrink-0 w-7 h-7 rounded-full bg-primary/12 border border-primary/20 flex items-center justify-center text-[10px] font-extrabold text-primary z-10">
                      {i + 1}
                    </div>
                    <div className="pt-0.5">
                      <p className="font-semibold text-base-content text-sm">{item.step}</p>
                      <p className="text-xs text-base-content/40 mt-0.5 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
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
              <ArrowLeftRight className="w-3.5 h-3.5" />
              <span>Side-by-Side</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Manual Booking vs Integrated System
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              The difference isn&apos;t just efficiency — it&apos;s reliability.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden sm:block rounded-3xl overflow-hidden border border-base-300 shadow-2xl shadow-black/20">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="py-4 px-6 text-left bg-base-300/50 text-base-content/45 font-semibold uppercase text-xs tracking-wider w-[30%]">
                    Area
                  </th>
                  <th className="py-4 px-6 text-left bg-base-300/50 text-base-content/45 font-semibold uppercase text-xs tracking-wider w-[35%]">
                    Manual Setup
                  </th>
                  <th className="py-4 px-6 text-left bg-primary/15 text-primary font-bold uppercase text-xs tracking-wider w-[35%]">
                    Integrated System ✓
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Time demand', 'Time-consuming', 'Automated'],
                  ['Accuracy', 'Risk of errors', 'Accurate & synced'],
                  ['Platform alignment', 'Disconnected tools', 'Connected system'],
                  ['Day-to-day management', 'Stressful', 'Smooth process'],
                  ['Guest experience', 'Inconsistent', 'Seamless booking flow'],
                  ['Scalability', 'Gets harder as you grow', 'Scales with you'],
                ].map(([area, manual, integrated], i) => (
                  <tr key={area} className={i % 2 === 0 ? 'bg-base-100' : 'bg-base-200/40'}>
                    <td className="py-3.5 px-6 font-medium text-base-content/55 border-r border-base-300 text-xs uppercase tracking-wide">
                      {area}
                    </td>
                    <td className="py-3.5 px-6 text-base-content/45 border-r border-base-300">
                      <span className="flex items-center gap-2">
                        <XCircle className="w-3.5 h-3.5 text-error/45 shrink-0" />
                        {manual}
                      </span>
                    </td>
                    <td className="py-3.5 px-6 text-base-content/85 font-semibold bg-primary/5">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        {integrated}
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
              ['Time demand', 'Time-consuming', 'Automated'],
              ['Accuracy', 'Risk of errors', 'Accurate & synced'],
              ['Platform alignment', 'Disconnected tools', 'Connected system'],
              ['Management', 'Stressful', 'Smooth process'],
              ['Guest experience', 'Inconsistent', 'Seamless flow'],
              ['Scalability', 'Gets harder', 'Scales with you'],
            ].map(([area, manual, integrated]) => (
              <div key={area} className="rounded-2xl overflow-hidden border border-base-300">
                <div className="px-4 py-2.5 bg-base-300/60 text-xs font-bold text-base-content/40 uppercase tracking-wider">
                  {area}
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-3 py-3.5 border-r border-base-300 bg-base-100">
                    <p className="text-[10px] text-base-content/35 mb-1">Manual</p>
                    <p className="text-xs text-base-content/50">{manual}</p>
                  </div>
                  <div className="px-3 py-3.5 bg-primary/8">
                    <p className="text-[10px] text-primary mb-1 font-bold">Integrated</p>
                    <p className="text-xs text-base-content/80 font-semibold">{integrated}</p>
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
                icon: <Globe className="w-5 h-5 text-primary" />,
                title: 'Hosts setting up direct bookings',
                desc: "You're ready to take bookings through your own website — and you want it done properly from day one.",
              },
              {
                icon: <PlugZap className="w-5 h-5 text-primary" />,
                title: 'Serviced accommodation businesses',
                desc: 'Operating at scale and needing a system that handles volume, syncing, and payments without breaking.',
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-primary" />,
                title: 'Operators with multiple listings',
                desc: 'Multi-property setups where availability management across OTAs and a direct website must stay aligned.',
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-primary" />,
                title: 'Hosts wanting automation and control',
                desc: 'You want bookings to happen automatically — not manually managed, chased, or processed one by one.',
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
            <PlugZap className="w-3.5 h-3.5" />
            <span>Get Connected</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-[1.12]">
            Ready to Connect Your Booking{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              System Properly?
            </span>
          </h2>

          <p className="text-lg text-base-content/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s build a system that handles bookings smoothly — without manual work, double
            bookings, or disconnected tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="pulse-cta-bei btn btn-primary btn-lg rounded-full px-10 gap-2 font-semibold shadow-xl shadow-primary/30 hover:shadow-primary/55 transition-all duration-200"
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
