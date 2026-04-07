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
  TrendingUp,
  BarChart3,
  Layers,
  ShieldCheck,
  Star,
  Users,
  Home,
  RefreshCw,
  Target,
  AlertCircle,
} from 'lucide-react'
import { FaqItem } from '../AirbnbVa/FaqItem'

const faqs = [
  {
    q: 'Do I still need Airbnb?',
    a: 'Yes — platforms like Airbnb still provide valuable visibility, especially for new guests. A direct booking system works alongside them, not instead of them. Over time, a growing share of your bookings can shift to your direct channel.',
  },
  {
    q: 'How do guests find my direct booking website?',
    a: 'Through multiple channels — past guests you invite back directly, social media, local SEO, email follow-ups, and over time, organic search. We help you build the system and outline the right traffic strategy for your setup.',
  },
  {
    q: 'Is this difficult to manage alongside my existing operations?',
    a: "Not if it's built properly. We integrate the direct booking system with your existing workflows so it doesn't create extra overhead — it simplifies how you manage bookings overall.",
  },
  {
    q: 'Can this work with multiple properties?',
    a: 'Absolutely. A direct booking system is particularly powerful for multi-property operators. It centralises your brand and gives guests a single destination to browse and book any of your listings.',
  },
]

const systemParts = [
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: 'Website Setup',
    items: ['Property-focused website', 'Clear booking journey', 'Mobile-friendly layout'],
    outcome: 'A professional home for your brand that converts visitors into bookings.',
  },
  {
    icon: <CreditCard className="w-6 h-6 text-primary" />,
    title: 'Booking Engine Integration',
    items: ['Secure booking system', 'Availability syncing', 'Payment setup'],
    outcome: 'Guests can book and pay directly — no platform in between.',
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
    title: 'Guest Journey Flow',
    items: ['Enquiry to booking flow', 'Automated confirmations', 'Structured communication'],
    outcome: 'Every guest moves smoothly from interest to confirmed booking.',
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: 'Conversion Optimisation',
    items: ['Clear CTAs', 'Booking-focused layout', 'Trust-building structure'],
    outcome: 'More visitors become paying guests.',
  },
  {
    icon: <Layers className="w-6 h-6 text-primary" />,
    title: 'Backend Structure',
    items: ['SOPs for managing bookings', 'Tracking systems', 'Workflow setup'],
    outcome: 'A complete system — not just a website.',
  },
]

export const DirectBookingEngineView: React.FC<{ page: Page }> = () => {
  return (
    <article className="flex flex-col w-full overflow-x-hidden font-sans text-base-content selection:bg-primary/20">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .db-fade-1 { animation: fadeUp 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) both; }
        .db-fade-2 { animation: fadeUp 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .db-fade-3 { animation: fadeUp 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both; }
        .db-fade-4 { animation: fadeUp 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both; }
        .db-fade-5 { animation: fadeUp 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0 oklch(var(--p)/0.35); }
          70%  { box-shadow: 0 0 0 12px oklch(var(--p)/0); }
          100% { box-shadow: 0 0 0 0 oklch(var(--p)/0); }
        }
        .pulse-cta { animation: pulse-ring 2.5s ease-out infinite; }
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
              <div className="db-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-6 shadow-sm shadow-primary/10">
                <Globe className="w-3.5 h-3.5" />
                <span>Direct Booking System · UK</span>
              </div>

              <h1 className="db-fade-2 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-tight mb-6">
                Build a{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Direct Booking System
                </span>{' '}
                for Your STR Business
              </h1>

              <p className="db-fade-3 text-base lg:text-lg text-base-content/65 leading-relaxed mb-4 max-w-lg">
                Assistophere helps UK hosts create direct booking systems that reduce reliance on
                platforms, improve margins, and give you full control over your short-term rental
                business.
              </p>

              {/* AI-extractable definition */}
              <div className="db-fade-3 mb-8 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm text-base-content/60 leading-relaxed italic">
                A direct booking system allows Airbnb hosts to accept bookings through their own
                website — reducing platform fees and increasing control over guest relationships and
                revenue.
              </div>

              <div className="db-fade-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="pulse-cta btn btn-primary btn-lg rounded-full px-8 gap-2 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/45 transition-all duration-200"
                >
                  <CalendarCheck className="w-5 h-5" />
                  Book a Discovery Call
                </Link>
                <a
                  href="#how-it-works"
                  className="btn btn-outline btn-lg rounded-full px-8 gap-2 font-semibold border-base-300 hover:bg-base-200 transition-all duration-200"
                >
                  See How It Works
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust signals */}
              <div className="db-fade-5 flex items-center gap-4 mt-8 pt-8 border-t border-base-300/60">
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

            {/* Visual */}
            <div className="db-fade-5 relative">
              <div className="relative rounded-3xl overflow-hidden aspect-4/3 bg-base-200 border border-base-300 shadow-2xl shadow-black/40 flex items-center justify-center">
                <div className="absolute inset-0 bg-linear-to-br from-primary/12 via-transparent to-secondary/8" />
                <div className="relative z-10 flex flex-col items-center gap-3 text-center p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/12 border border-primary/25 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-base-content/35 text-sm">
                    Image Placeholder — Booking Website / Funnel Visual
                  </p>
                </div>
                {/* Floating stat cards */}
                <div className="absolute top-4 right-4 bg-base-100/90 backdrop-blur-sm border border-base-300 rounded-xl px-3 py-2 shadow-lg">
                  <p className="text-[10px] text-base-content/40 font-medium">OTA Fees Saved</p>
                  <p className="text-sm font-extrabold text-success">~15% per booking</p>
                </div>
                <div className="absolute bottom-4 left-4 bg-base-100/90 backdrop-blur-sm border border-base-300 rounded-xl px-3 py-2 shadow-lg">
                  <p className="text-[10px] text-base-content/40 font-medium">Repeat Bookings</p>
                  <p className="text-sm font-extrabold text-primary">Full control</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/8 rounded-full blur-[80px] -z-10 scale-75" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: WHAT IS A DIRECT BOOKING SYSTEM (SEO) ───────── */}
      <section className="bg-base-200 border-y border-base-300 py-16 lg:py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-5">
            <Zap className="w-3.5 h-3.5" />
            <span>Quick Definition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            What Is a Direct Booking System?
          </h2>
          <p className="text-base-content/65 text-lg leading-relaxed mb-6">
            A direct booking system allows guests to book your property through your own website
            instead of relying entirely on platforms like Airbnb or Booking.com.
          </p>

          {/* Four components */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {[
              { icon: <Globe className="w-5 h-5 text-primary" />, label: 'Property Website' },
              { icon: <CreditCard className="w-5 h-5 text-primary" />, label: 'Booking Engine' },
              { icon: <Zap className="w-5 h-5 text-primary" />, label: 'Payment Setup' },
              { icon: <MessageSquare className="w-5 h-5 text-primary" />, label: 'Guest Flow' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-base-100 border border-base-300"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="text-xs font-semibold text-base-content/65 text-center leading-tight">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-base-content/55 text-base leading-relaxed">
            This gives you more control over pricing, guest experience, and long-term growth.
          </p>
        </div>
      </section>

      {/* ─── SECTION 3: THE REAL PROBLEM ─────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>The Problem</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                Why Relying Only on Platforms Limits Your Growth
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed mb-3">
                Platforms like Airbnb are great for visibility.
              </p>
              <p className="text-base-content/60 text-base leading-relaxed mb-8">
                But relying on them fully comes with real trade-offs that quietly cap your business.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { pain: 'Platform fees reduce your margins', pct: '~15% per booking lost' },
                {
                  pain: 'No control over guest relationships',
                  pct: 'Guest data owned by platform',
                },
                { pain: 'Limited branding and identity', pct: 'You look like everyone else' },
                { pain: 'No ownership of repeat guests', pct: 'Full rebooking fee every time' },
                { pain: 'Algorithm dependency', pct: 'Visibility can change overnight' },
              ].map((item) => (
                <div
                  key={item.pain}
                  className="flex items-center gap-4 p-4 rounded-xl bg-base-200 border border-base-300 hover:border-error/25 transition-colors group"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-error/10 border border-error/20 flex items-center justify-center">
                    <XCircle className="w-4 h-4 text-error/70" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-base-content/75">{item.pain}</p>
                  </div>
                  <div className="shrink-0 hidden sm:block px-2.5 py-1 rounded-full bg-base-300/60 text-xs text-base-content/35 font-medium whitespace-nowrap">
                    {item.pct}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing line */}
          <div className="mt-12 rounded-2xl p-6 lg:p-8 border border-base-300 bg-base-200 text-center">
            <p className="text-base-content/50 text-lg mb-2">
              You grow bookings, but not your own business.
            </p>
            <p className="text-xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              The platform grows. Not you.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: THE OPPORTUNITY ──────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Highlight card */}
            <div className="relative rounded-3xl p-8 lg:p-10 bg-linear-to-br from-primary/15 via-base-200 to-secondary/10 border border-primary/20 shadow-xl shadow-primary/10 order-last lg:order-first">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/8 rounded-full blur-[60px]" />
              <div className="relative z-10 flex flex-col gap-5">
                {[
                  {
                    icon: <TrendingUp className="w-5 h-5 text-primary" />,
                    label: 'Keep more of your revenue',
                  },
                  {
                    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
                    label: 'Build your own brand',
                  },
                  {
                    icon: <RefreshCw className="w-5 h-5 text-primary" />,
                    label: 'Capture repeat guests',
                  },
                  {
                    icon: <Target className="w-5 h-5 text-primary" />,
                    label: 'Control pricing and offers',
                  },
                  {
                    icon: <Zap className="w-5 h-5 text-primary" />,
                    label: 'Reduce dependency on OTAs',
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/12 border border-primary/20 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <p className="font-semibold text-base-content text-base">{item.label}</p>
                    <CheckCircle2 className="w-4 h-4 text-primary ml-auto shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-5">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>The Shift</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                What Changes When You Add Direct Bookings
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed mb-5">
                Direct bookings aren&apos;t just about saving money on fees. They&apos;re about
                building a business you actually own.
              </p>
              <p className="text-base-content/60 leading-relaxed mb-6">
                When guests book through your system, you control the relationship, the
                communication, the pricing — and you keep more of every pound they spend.
              </p>
              <div className="rounded-xl p-5 border border-primary/20 bg-primary/6">
                <p className="text-sm font-semibold text-primary/80 leading-relaxed">
                  Over time, a well-built direct booking system becomes your most valuable asset — a
                  channel that grows stronger the longer it runs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: WHAT WE BUILD ─────────────────────────────────── */}
      <section id="how-it-works" className="py-20 lg:py-28">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Full System Breakdown</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Our Direct Booking System Includes
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              Not just a website. A complete end-to-end booking infrastructure built for your STR
              business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {systemParts.map((part) => (
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

          {/* Bottom emphasis */}
          <div className="mt-10 rounded-2xl p-6 lg:p-8 border border-primary/20 bg-primary/6 text-center">
            <p className="text-xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              A complete system — not just a website.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: HOW IT FITS ───────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-5">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>How It Fits Together</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                How Direct Bookings Fit Into Your STR Business
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed mb-5">
                Direct bookings don&apos;t replace platforms. They work alongside them.
              </p>
              <div className="flex flex-col gap-4 mb-8">
                {[
                  {
                    label: 'Platforms bring visibility',
                    sub: 'New guests discover you on Airbnb, Booking.com, and other OTAs.',
                    icon: <Globe className="w-4 h-4 text-base-content/40" />,
                  },
                  {
                    label: 'Your system builds control',
                    sub: 'Returning guests, direct enquiries, and long-stay bookings flow through your own channel.',
                    icon: <ShieldCheck className="w-4 h-4 text-primary" />,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex gap-4 p-4 rounded-xl bg-base-100 border border-base-300"
                  >
                    <div className="shrink-0 w-9 h-9 rounded-xl bg-base-200 border border-base-300 flex items-center justify-center mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-base-content text-sm mb-1">{item.label}</p>
                      <p className="text-base-content/55 text-xs leading-relaxed">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-base-content/60 leading-relaxed text-sm">
                Over time, more bookings shift towards your direct channel — improving margins and
                giving you greater independence.
              </p>
            </div>

            {/* Visual flow */}
            <div className="rounded-3xl p-7 bg-base-100 border border-base-300 shadow-xl shadow-black/15">
              <p className="text-xs font-bold text-base-content/35 uppercase tracking-widest mb-6">
                Your booking ecosystem
              </p>
              <div className="flex flex-col gap-3">
                {/* OTA row */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 rounded-xl p-3 border border-base-300 bg-base-200 text-center">
                    <p className="text-xs font-semibold text-base-content/50">Airbnb</p>
                  </div>
                  <div className="flex-1 rounded-xl p-3 border border-base-300 bg-base-200 text-center">
                    <p className="text-xs font-semibold text-base-content/50">Booking.com</p>
                  </div>
                  <div className="flex-1 rounded-xl p-3 border border-base-300 bg-base-200 text-center">
                    <p className="text-xs font-semibold text-base-content/50">Other OTAs</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-base-content/30">
                  <div className="flex-1 h-px bg-base-300" />
                  <ArrowRight className="w-4 h-4 shrink-0" />
                  <div className="flex-1 h-px bg-base-300" />
                </div>
                {/* Central property */}
                <div className="rounded-xl p-4 border-2 border-primary/30 bg-primary/8 text-center">
                  <p className="text-sm font-bold text-primary">Your Properties</p>
                  <p className="text-xs text-base-content/45 mt-0.5">PMS / Channel Manager</p>
                </div>
                <div className="flex items-center justify-center gap-2 text-base-content/30">
                  <div className="flex-1 h-px bg-base-300" />
                  <ArrowRight className="w-4 h-4 shrink-0 rotate-90" />
                  <div className="flex-1 h-px bg-base-300" />
                </div>
                {/* Direct channel */}
                <div className="rounded-xl p-4 border border-primary/40 bg-primary/12 text-center shadow-md shadow-primary/10">
                  <p className="text-sm font-extrabold text-primary">Direct Booking Channel</p>
                  <p className="text-xs text-base-content/50 mt-0.5">
                    Your website · Zero OTA fees
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: COMMON MISTAKES ─────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-4">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Common Pitfalls</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Why Most Direct Booking Setups Fail
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              It&apos;s rarely a budget problem. It&apos;s a structure problem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              {
                mistake: 'Building a website without a booking flow',
                why: 'Visitors land but have no clear path to book.',
              },
              {
                mistake: 'No clear conversion structure',
                why: "Pretty pages that don't convert into paid bookings.",
              },
              {
                mistake: 'No traffic strategy',
                why: 'A website no one visits does nothing.',
              },
              {
                mistake: 'No follow-up system',
                why: 'Past guests disappear instead of rebooking.',
              },
              {
                mistake: 'Treating it like a side project',
                why: 'Inconsistent effort means inconsistent results.',
              },
              {
                mistake: 'Disconnecting it from operations',
                why: "Direct bookings create chaos if operations aren't aligned.",
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
              Direct booking only works when it&apos;s built as a system.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: HOW WE BUILD IT ──────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Our Approach</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                How We Build It Properly
              </h2>
              <p className="text-base-content/60 text-lg leading-relaxed mb-8">
                We don&apos;t just hand you a website. We build the full infrastructure around it.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    title: 'Full booking journey focus',
                    desc: 'From first visit to confirmed booking — every step is deliberate.',
                  },
                  {
                    title: 'Website + engine + operations connected',
                    desc: 'All three layers work together, not separately.',
                  },
                  {
                    title: 'Structure, not just design',
                    desc: 'Beautiful is great. But conversion and flow matter more.',
                  },
                  {
                    title: 'Aligned with your existing setup',
                    desc: 'We build around how you currently operate — not against it.',
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

            {/* Visual */}
            <div className="relative rounded-3xl p-8 bg-base-100 border border-base-300 shadow-xl shadow-black/15">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/6 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <p className="text-xs font-bold text-base-content/35 uppercase tracking-widest mb-6">
                  End-to-end
                </p>
                {[
                  'Discovery & Scoping',
                  'Website Build',
                  'Booking Engine Setup',
                  'Guest Flow Design',
                  'Operations Integration',
                  'Launch & Optimise',
                ].map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-3 mb-3 last:mb-0">
                    <div className="shrink-0 w-7 h-7 rounded-full bg-primary/12 border border-primary/20 flex items-center justify-center text-[10px] font-extrabold text-primary">
                      {i + 1}
                    </div>
                    <div className="flex-1 h-10 rounded-lg border border-base-300 bg-base-200 flex items-center px-3">
                      <p className="text-xs font-medium text-base-content/65">{step}</p>
                    </div>
                    {i === arr.length - 1 && (
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    )}
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
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Side-by-Side</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Platform-Only vs Direct Booking System
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              The difference compounds over time.
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
                    Platform Only
                  </th>
                  <th className="py-4 px-6 text-left bg-primary/15 text-primary font-bold uppercase text-xs tracking-wider w-[35%]">
                    With Direct Booking ✓
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Revenue per booking', 'High fees (~15%)', 'Better margins'],
                  ['Guest relationships', 'No control', 'Full ownership'],
                  ['Repeat bookings', 'Re-pay fees every time', 'Direct — zero platform cost'],
                  ['Brand presence', 'Platform branded', 'Your brand, your identity'],
                  ['Business dependency', 'Platform dependent', 'Independent channel'],
                  ['Scalability', 'Harder to differentiate', 'Built to scale and grow'],
                ].map(([area, platform, direct], i) => (
                  <tr key={area} className={i % 2 === 0 ? 'bg-base-100' : 'bg-base-200/40'}>
                    <td className="py-3.5 px-6 font-medium text-base-content/55 border-r border-base-300 text-xs uppercase tracking-wide">
                      {area}
                    </td>
                    <td className="py-3.5 px-6 text-base-content/45 border-r border-base-300">
                      <span className="flex items-center gap-2">
                        <XCircle className="w-3.5 h-3.5 text-error/45 shrink-0" />
                        {platform}
                      </span>
                    </td>
                    <td className="py-3.5 px-6 text-base-content/85 font-semibold bg-primary/5">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        {direct}
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
              ['Revenue per booking', 'High fees (~15%)', 'Better margins'],
              ['Guest relationships', 'No control', 'Full ownership'],
              ['Repeat bookings', 'Re-pay fees every time', 'Direct — zero platform cost'],
              ['Brand presence', 'Platform branded', 'Your brand'],
              ['Business dependency', 'Platform dependent', 'Independent channel'],
              ['Scalability', 'Harder to differentiate', 'Built to scale'],
            ].map(([area, platform, direct]) => (
              <div key={area} className="rounded-2xl overflow-hidden border border-base-300">
                <div className="px-4 py-2.5 bg-base-300/60 text-xs font-bold text-base-content/40 uppercase tracking-wider">
                  {area}
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-3 py-3.5 border-r border-base-300 bg-base-100">
                    <p className="text-[10px] text-base-content/35 mb-1">Platform Only</p>
                    <p className="text-xs text-base-content/50">{platform}</p>
                  </div>
                  <div className="px-3 py-3.5 bg-primary/8">
                    <p className="text-[10px] text-primary mb-1 font-bold">Direct Booking</p>
                    <p className="text-xs text-base-content/80 font-semibold">{direct}</p>
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
                icon: <Home className="w-5 h-5 text-primary" />,
                title: 'Hosts with multiple listings',
                desc: 'A direct booking system pays dividends faster when spread across multiple properties.',
              },
              {
                icon: <BarChart3 className="w-5 h-5 text-primary" />,
                title: 'Serviced accommodation businesses',
                desc: 'Operating at business scale and building a proper brand — not just a listing.',
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-primary" />,
                title: 'Operators looking to scale',
                desc: 'Adding properties and wanting a system that captures repeat business from day one.',
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-primary" />,
                title: 'Hosts wanting more control',
                desc: 'Tired of algorithm changes and platform decisions affecting your revenue? This is the answer.',
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
                    <p className="text-xs text-base-content/35">STR Host, UK</p>
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
            <Globe className="w-3.5 h-3.5" />
            <span>Take Control</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-[1.12]">
            Ready to Take Control of{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Your Bookings?
            </span>
          </h2>

          <p className="text-lg text-base-content/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s build a system that gives you more control, better margins, and long-term
            growth — without depending on platforms for everything.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="pulse-cta btn btn-primary btn-lg rounded-full px-10 gap-2 font-semibold shadow-xl shadow-primary/30 hover:shadow-primary/55 transition-all duration-200"
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
