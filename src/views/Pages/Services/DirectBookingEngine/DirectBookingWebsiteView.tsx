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
  Smartphone,
  Zap,
  LayoutDashboard,
  Users,
  Star,
  ShieldCheck,
  Target,
  TrendingUp,
  Monitor,
  AlertCircle,
  Layers,
} from 'lucide-react'
import { FaqItem } from '../AirbnbVa/FaqItem'

const faqs = [
  {
    q: 'How long does it take to build?',
    a: 'Timelines vary based on scope, but most direct booking websites are completed within 4–8 weeks from sign-off. We work through a structured process — discovery, design, build, integration, and launch — so you always know where things stand.',
  },
  {
    q: 'Can this integrate with my current system?',
    a: "Yes. We design around what you already use. Whether you're on a channel manager, PMS, or just managing manually — we build the booking integration to fit your setup, not force you to change everything.",
  },
  {
    q: 'Do you handle multiple properties?',
    a: 'Absolutely. Multi-property setups are where a direct booking website becomes especially powerful. We build a clear browsing and booking structure that lets guests explore all your listings from one place.',
  },
  {
    q: 'Is it easy to manage after launch?',
    a: 'Yes — we build with simplicity in mind. You should be able to update availability, pricing, and content without needing a developer every time. We also provide handover documentation so you understand exactly how everything works.',
  },
]

const websiteIncludes = [
  {
    icon: <Monitor className="w-6 h-6 text-primary" />,
    title: 'Property Pages',
    items: ['Clear, image-led layout', 'Amenities and details', 'Booking-focused structure'],
    outcome: "Guests immediately understand what they're booking and feel confident doing so.",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-primary" />,
    title: 'Booking Integration',
    items: ['Secure booking system', 'Availability syncing', 'Payment setup'],
    outcome: 'Guests can book and pay directly — no platform taking a cut.',
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: 'User Journey Design',
    items: [
      'Landing → browse → book flow',
      'Strategic CTA placement',
      'Reduced friction at every step',
    ],
    outcome: 'Every visitor is guided towards booking — nothing is left to chance.',
  },
  {
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    title: 'Mobile Optimisation',
    items: ['Fully responsive design', 'Fast load times', 'Thumb-friendly navigation'],
    outcome: 'Most bookings happen on mobile. Your site is built for that.',
  },
  {
    icon: <Layers className="w-6 h-6 text-primary" />,
    title: 'Backend Setup',
    items: ['Easy content management', 'Booking tracking', 'Structured system for daily use'],
    outcome: 'A website you can actually manage — built for operators, not developers.',
  },
]

export const DirectBookingWebsiteView: React.FC<{ page: Page }> = () => {
  return (
    <article className="flex flex-col w-full overflow-x-hidden font-sans text-base-content selection:bg-primary/20">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpDBW {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .dbw-fade-1 { animation: fadeUpDBW 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) both; }
        .dbw-fade-2 { animation: fadeUpDBW 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .dbw-fade-3 { animation: fadeUpDBW 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both; }
        .dbw-fade-4 { animation: fadeUpDBW 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both; }
        .dbw-fade-5 { animation: fadeUpDBW 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes pulse-ring-dbw {
          0%   { box-shadow: 0 0 0 0 oklch(var(--p)/0.35); }
          70%  { box-shadow: 0 0 0 12px oklch(var(--p)/0); }
          100% { box-shadow: 0 0 0 0 oklch(var(--p)/0); }
        }
        .pulse-cta-dbw { animation: pulse-ring-dbw 2.5s ease-out infinite; }
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
              <div className="dbw-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-6 shadow-sm shadow-primary/10">
                <Globe className="w-3.5 h-3.5" />
                <span>STR Website Development · UK</span>
              </div>

              <h1 className="dbw-fade-2 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-tight mb-6">
                Direct Booking Websites Built for{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Short Term Rental Businesses
                </span>
              </h1>

              <p className="dbw-fade-3 text-base lg:text-lg text-base-content/65 leading-relaxed mb-4 max-w-lg">
                Assistophere designs and builds direct booking websites for UK Airbnb hosts and
                serviced accommodation businesses — focused on conversion, booking flow, and real
                operational use.
              </p>

              {/* AI-extractable definition */}
              <div className="dbw-fade-3 mb-8 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm text-base-content/60 leading-relaxed italic">
                A direct booking website allows guests to view properties and book directly through
                your own platform, improving control, reducing fees, and increasing long-term
                revenue.
              </div>

              <div className="dbw-fade-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="pulse-cta-dbw btn btn-primary btn-lg rounded-full px-8 gap-2 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/45 transition-all duration-200"
                >
                  <CalendarCheck className="w-5 h-5" />
                  Book a Discovery Call
                </Link>
                <a
                  href="#what-we-build"
                  className="btn btn-outline btn-lg rounded-full px-8 gap-2 font-semibold border-base-300 hover:bg-base-200 transition-all duration-200"
                >
                  View How It Works
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust signals */}
              <div className="dbw-fade-5 flex items-center gap-4 mt-8 pt-8 border-t border-base-300/60">
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

            {/* Visual mockup */}
            <div className="dbw-fade-5 relative">
              <div className="relative rounded-3xl overflow-hidden aspect-4/3 bg-base-200 border border-base-300 shadow-2xl shadow-black/40">
                <div className="absolute inset-0 bg-linear-to-br from-primary/12 via-transparent to-secondary/8" />
                {/* Browser chrome mockup */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-base-300/70 border-b border-base-300 flex items-center gap-1.5 px-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-error/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-warning/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-success/40" />
                  <div className="flex-1 mx-4 h-4 rounded-full bg-base-300/80 flex items-center px-3">
                    <span className="text-[8px] text-base-content/30 font-medium truncate">
                      yourbooking.com
                    </span>
                  </div>
                </div>
                <div className="absolute top-8 bottom-0 left-0 right-0 flex flex-col gap-2 p-4">
                  {/* Fake page content */}
                  <div className="w-1/2 h-3 rounded-full bg-primary/20" />
                  <div className="w-3/4 h-2 rounded-full bg-base-300/50" />
                  <div className="w-2/3 h-2 rounded-full bg-base-300/35" />
                  <div className="mt-2 grid grid-cols-2 gap-2 flex-1">
                    <div className="rounded-lg bg-base-300/40 border border-base-300/50" />
                    <div className="rounded-lg bg-base-300/40 border border-base-300/50" />
                  </div>
                </div>
                {/* Floating stat cards */}
                <div className="absolute top-12 right-3 bg-base-100/90 backdrop-blur-sm border border-base-300 rounded-xl px-3 py-2 shadow-lg">
                  <p className="text-[10px] text-base-content/40 font-medium">Conversion Rate</p>
                  <p className="text-sm font-extrabold text-success">+Direct bookings</p>
                </div>
                <div className="absolute bottom-4 left-3 bg-base-100/90 backdrop-blur-sm border border-base-300 rounded-xl px-3 py-2 shadow-lg">
                  <p className="text-[10px] text-base-content/40 font-medium">Mobile-First</p>
                  <p className="text-sm font-extrabold text-primary">Built to convert</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/8 rounded-full blur-[80px] -z-10 scale-75" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: CLARITY — SET EXPECTATION ────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-16 lg:py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-5">
            <Zap className="w-3.5 h-3.5" />
            <span>Set the Record Straight</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            This Isn&apos;t Just Website Design
          </h2>
          <p className="text-base-content/65 text-lg leading-relaxed mb-6">
            Most websites look good but don&apos;t convert.
          </p>
          <p className="text-base-content/55 leading-relaxed mb-6">
            A direct booking website needs to guide visitors clearly from browsing to booking, with
            the right structure, flow, and backend setup — not just a good-looking homepage.
          </p>
          <div className="rounded-2xl p-6 border border-primary/20 bg-primary/6">
            <p className="text-base font-semibold text-primary/80 leading-relaxed">
              We build websites specifically for short term rental businesses — not generic
              templates adapted after the fact.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: WHAT MAKES A GOOD STR WEBSITE ───────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>What Actually Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Actually Makes a Direct Booking Website Work
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              Five things that separate a website that converts from one that just exists.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <Monitor className="w-6 h-6 text-primary" />,
                title: 'Clear Property Presentation',
                desc: "Guests should immediately understand what they're booking — without needing to dig for information.",
                num: '01',
              },
              {
                icon: <Target className="w-6 h-6 text-primary" />,
                title: 'Simple Booking Flow',
                desc: 'No confusion, no unnecessary steps. The path from interest to booking must be direct and frictionless.',
                num: '02',
              },
              {
                icon: <Smartphone className="w-6 h-6 text-primary" />,
                title: 'Mobile-First Experience',
                desc: 'Most bookings happen on mobile. If the experience breaks on a phone, you lose bookings.',
                num: '03',
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-primary" />,
                title: 'Trust Signals',
                desc: 'Clear information, reviews, policies, and structure give guests the confidence to book directly.',
                num: '04',
              },
              {
                icon: <Zap className="w-6 h-6 text-primary" />,
                title: 'Fast Load & Clean Layout',
                desc: 'Speed and simplicity increase conversions. Slow or cluttered websites push guests back to platforms.',
                num: '05',
              },
              {
                icon: <LayoutDashboard className="w-6 h-6 text-primary" />,
                title: 'Structured Backend',
                desc: 'A website you can manage. Clear content structure means less reliance on developers after launch.',
                num: '06',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-base-200 border border-base-300 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300"
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

      {/* ─── SECTION 4: WHAT WE BUILD ─────────────────────────────────── */}
      <section id="what-we-build" className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Full Breakdown</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Your Website Includes
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              Every component built around one goal — generating direct bookings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {websiteIncludes.map((part) => (
              <div
                key={part.title}
                className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/3 transition-colors duration-300" />
                <div className="relative z-10 flex flex-col gap-4 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/18 transition-colors">
                      {part.icon}
                    </div>
                    <h3 className="font-bold text-base-content text-base">{part.title}</h3>
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

          {/* Bottom outcome */}
          <div className="mt-10 rounded-2xl p-6 lg:p-8 border border-primary/20 bg-primary/6 text-center">
            <p className="text-xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              A website built to generate bookings — not just look good.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: COMMON MISTAKES ──────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-4">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Topic Domination</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Why Most STR Websites Don&apos;t Convert
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              These aren&apos;t design problems. They&apos;re structure problems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              {
                mistake: 'Too much design, no booking focus',
                why: "A beautiful website that doesn't drive guests towards booking is a brochure, not a conversion tool.",
              },
              {
                mistake: 'Confusing navigation',
                why: "Guests who can't find what they need leave. Every extra click is a chance to lose the booking.",
              },
              {
                mistake: 'No clear call to action',
                why: "If guests don't know what to do next, they won't do anything. Every page needs a clear next step.",
              },
              {
                mistake: 'Poor mobile experience',
                why: 'Most searches and bookings happen on mobile. A site that breaks on phones loses those guests.',
              },
              {
                mistake: 'No booking integration',
                why: 'A contact form is not a booking system. Without real availability and payment, guests bounce back to platforms.',
              },
              {
                mistake: 'Built by a general web developer',
                why: 'STR websites need STR-specific thinking — guest psychology, booking flow, and operator management in one.',
              },
            ].map((item) => (
              <div
                key={item.mistake}
                className="flex gap-4 p-5 rounded-2xl bg-base-200 border border-base-300 hover:border-error/25 transition-colors"
              >
                <div className="shrink-0 mt-0.5 w-8 h-8 rounded-full bg-error/10 border border-error/20 flex items-center justify-center">
                  <XCircle className="w-4 h-4 text-error/70" />
                </div>
                <div>
                  <p className="font-semibold text-base-content text-sm mb-1">{item.mistake}</p>
                  <p className="text-xs text-base-content/50 leading-relaxed">{item.why}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-6 lg:p-8 border border-base-300 bg-base-200 text-center">
            <p className="text-xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              A website without a clear booking flow won&apos;t perform.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: OUR APPROACH ─────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Differentiation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                How We Build It Differently
              </h2>
              <p className="text-base-content/60 text-lg leading-relaxed mb-8">
                Generic web developers build websites. We build booking systems for short term
                rental businesses.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    title: 'Designed around booking behaviour',
                    desc: 'Every page, CTA, and flow is built around how guests actually browse and decide to book.',
                  },
                  {
                    title: 'Built with STR operations in mind',
                    desc: 'We understand channel managers, availability sync, and how hosts actually manage their business.',
                  },
                  {
                    title: 'Focused on conversion, not just visuals',
                    desc: "A website that looks good but doesn't book guests has failed. We measure success in bookings.",
                  },
                  {
                    title: 'Structured for long-term use',
                    desc: 'Built to grow with your business — not a static brochure that needs rebuilding in a year.',
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

            {/* Feature highlight */}
            <div className="relative rounded-3xl p-8 lg:p-10 bg-linear-to-br from-primary/15 via-base-200 to-secondary/10 border border-primary/20 shadow-xl shadow-primary/10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/8 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <p className="text-xs font-bold text-primary/50 uppercase tracking-widest mb-6">
                  What this means for you
                </p>
                {[
                  'Guests find and book easily',
                  'Mobile experience converts',
                  'Backend you can actually manage',
                  'Synced with your existing tools',
                  'Built by STR specialists',
                  'Designed to grow with you',
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

      {/* ─── SECTION 7: PROCESS ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Steps */}
            <div className="relative rounded-3xl p-7 bg-base-200 border border-base-300 shadow-xl shadow-black/10">
              <p className="text-xs font-bold text-base-content/35 uppercase tracking-widest mb-6">
                The build process
              </p>
              <div className="relative flex flex-col gap-0">
                {[
                  {
                    step: 'Understand your properties',
                    detail: 'We learn your setup, guest type, and goals.',
                  },
                  {
                    step: 'Plan structure and flow',
                    detail: 'Sitemap, booking journey, and page hierarchy.',
                  },
                  {
                    step: 'Design booking-focused pages',
                    detail: 'Visual design built around conversion.',
                  },
                  {
                    step: 'Integrate booking system',
                    detail: 'Availability, payments, and confirmation flow.',
                  },
                  { step: 'Test and optimise', detail: 'QA across devices, then launch-ready.' },
                ].map((item, i, arr) => (
                  <div key={item.step} className="relative flex gap-4 pb-6 last:pb-0">
                    {/* Connector line */}
                    {i < arr.length - 1 && (
                      <div className="absolute left-4 top-8 bottom-0 w-px bg-base-300" />
                    )}
                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary/12 border border-primary/20 flex items-center justify-center text-[10px] font-extrabold text-primary z-10">
                      {i + 1}
                    </div>
                    <div className="pt-1">
                      <p className="font-semibold text-base-content text-sm">{item.step}</p>
                      <p className="text-xs text-base-content/45 mt-0.5 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-5">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Execution Focus</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                How We Build Your Website
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed mb-5">
                A structured process — so you know exactly where things stand at every stage.
              </p>
              <p className="text-base-content/55 leading-relaxed mb-6">
                From initial discovery through to launch, we work through a proven process that
                covers every layer: structure, design, integration, and operations.
              </p>
              <div className="rounded-xl p-5 border border-primary/20 bg-primary/6">
                <p className="text-sm font-semibold text-primary/80 leading-relaxed">
                  You won&apos;t just receive a website — you&apos;ll receive a fully working
                  booking system with documentation and a clear handover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: COMPARISON TABLE ─────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Side-by-Side</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Generic Website vs STR-Focused Website
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              The difference is in what it&apos;s built to do.
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
                    Generic Website
                  </th>
                  <th className="py-4 px-6 text-left bg-primary/15 text-primary font-bold uppercase text-xs tracking-wider w-[35%]">
                    Assistophere Website ✓
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['First impression', 'Looks good', 'Converts bookings'],
                  ['Design priority', 'Design-focused', 'Booking-focused'],
                  ['Booking system', 'No integration', 'Full booking engine'],
                  ['Backend', 'Hard to manage', 'Structured & simple'],
                  ['Mobile experience', 'Responsive only', 'Mobile-first built'],
                  ['STR knowledge', 'Generic approach', 'STR-specific thinking'],
                ].map(([area, generic, ours], i) => (
                  <tr key={area} className={i % 2 === 0 ? 'bg-base-100' : 'bg-base-200/40'}>
                    <td className="py-3.5 px-6 font-medium text-base-content/55 border-r border-base-300 text-xs uppercase tracking-wide">
                      {area}
                    </td>
                    <td className="py-3.5 px-6 text-base-content/45 border-r border-base-300">
                      <span className="flex items-center gap-2">
                        <XCircle className="w-3.5 h-3.5 text-error/45 shrink-0" />
                        {generic}
                      </span>
                    </td>
                    <td className="py-3.5 px-6 text-base-content/85 font-semibold bg-primary/5">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        {ours}
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
              ['First impression', 'Looks good', 'Converts bookings'],
              ['Design priority', 'Design-focused', 'Booking-focused'],
              ['Booking system', 'No integration', 'Full booking engine'],
              ['Backend', 'Hard to manage', 'Structured & simple'],
              ['Mobile', 'Responsive only', 'Mobile-first built'],
              ['STR knowledge', 'Generic', 'STR-specific'],
            ].map(([area, generic, ours]) => (
              <div key={area} className="rounded-2xl overflow-hidden border border-base-300">
                <div className="px-4 py-2.5 bg-base-300/60 text-xs font-bold text-base-content/40 uppercase tracking-wider">
                  {area}
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-3 py-3.5 border-r border-base-300 bg-base-100">
                    <p className="text-[10px] text-base-content/35 mb-1">Generic</p>
                    <p className="text-xs text-base-content/50">{generic}</p>
                  </div>
                  <div className="px-3 py-3.5 bg-primary/8">
                    <p className="text-[10px] text-primary mb-1 font-bold">Assistophere</p>
                    <p className="text-xs text-base-content/80 font-semibold">{ours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: WHO THIS IS FOR ──────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
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
                title: 'Airbnb hosts ready for direct bookings',
                desc: "You've built a presence on platforms. Now you're ready to own your own channel and reduce dependency.",
              },
              {
                icon: <LayoutDashboard className="w-5 h-5 text-primary" />,
                title: 'Serviced accommodation businesses',
                desc: 'Operating at scale and building a proper brand — not just a listing. You need a website that reflects that.',
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-primary" />,
                title: 'Operators building long-term systems',
                desc: "You think in systems — and you want a website that's part of a bigger, connected booking operation.",
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-primary" />,
                title: 'Hosts wanting better control',
                desc: 'Tired of platform changes affecting your business? A direct booking website puts you back in charge.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 items-start p-5 rounded-2xl bg-base-200 border border-base-300 hover:border-primary/30 transition-colors"
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

      {/* ─── SECTION 10: TESTIMONIALS ─────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
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
                className="flex flex-col gap-5 p-6 rounded-2xl bg-base-100 border border-base-300 hover:border-amber-500/25 transition-colors"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="flex-1 rounded-xl bg-base-200 border border-base-300 p-4 flex items-center justify-center min-h-24">
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

      {/* ─── SECTION 11: FAQ ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
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

      {/* ─── SECTION 12: FINAL CTA ────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-base-200 border-t border-base-300">
        <div className="absolute inset-0 bg-linear-to-br from-primary/22 via-base-200 to-secondary/15 -z-10" />
        <div className="absolute inset-0 bg-base-100/55 -z-10" />
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-linear-to-b from-primary/12 to-transparent rounded-full blur-[130px] -z-10" />

        <div className="container max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-medium mb-6">
            <Globe className="w-3.5 h-3.5" />
            <span>Build With Intention</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-[1.12]">
            Ready to Build a Website That{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Actually Gets Bookings?
            </span>
          </h2>

          <p className="text-lg text-base-content/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s create a direct booking website that works for your business — not just sits
            online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="pulse-cta-dbw btn btn-primary btn-lg rounded-full px-10 gap-2 font-semibold shadow-xl shadow-primary/30 hover:shadow-primary/55 transition-all duration-200"
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
