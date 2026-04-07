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
  Settings,
  Zap,
  AlertCircle,
  MessageSquare,
  Globe,
  RefreshCw,
  LayoutGrid,
  SlidersHorizontal,
  BarChart2,
} from 'lucide-react'
import { FaqItem } from './FaqItem'

const faqs = [
  {
    q: 'Which platforms do you support?',
    a: 'We primarily work with Airbnb, Booking.com, and Vrbo — the three major OTAs in the UK market. Depending on your property type and location we can also look at platform-specific channels. We also support setting up or improving direct booking websites alongside OTA listings.',
  },
  {
    q: 'Can you manage all listings together?',
    a: 'Yes. We set up and manage your listings across platforms as a unified system — not as separate, unrelated channels. Calendars, pricing, and content are kept aligned so everything runs from one coordinated setup rather than multiple disconnected ones.',
  },
  {
    q: 'Will this increase bookings?',
    a: 'Expanding to multiple platforms increases your visibility across different guest segments. Booking.com guests are different from Airbnb guests. Vrbo attracts different types of stays. More platforms means more touchpoints — and that usually means more bookings, especially when managed properly.',
  },
  {
    q: 'How do you prevent double bookings?',
    a: "Double bookings happen when calendars aren't synced in real time. We set up a proper channel management system so that when a booking comes in on one platform, availability is immediately blocked everywhere else. This is fundamental to multi-platform management — not an afterthought.",
  },
]

const serviceCovers = [
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: 'Platform Setup',
    items: [
      'Creating listings across platforms',
      'Setting up accounts properly',
      'Structuring listings per OTA',
    ],
    outcome: 'Your property is live across the right platforms from day one — set up correctly.',
  },
  {
    icon: <LayoutGrid className="w-6 h-6 text-primary" />,
    title: 'Listing Optimisation Per Platform',
    items: [
      'Adjusting content for each OTA',
      'Improving platform-specific visibility',
      'Tweaks for each platform algorithm',
    ],
    outcome: 'Each listing performs for its platform — not a copy-paste job.',
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-primary" />,
    title: 'Calendar & Availability Sync',
    items: [
      'Setting up channel management',
      'Preventing double bookings',
      'Maintaining real-time accuracy',
    ],
    outcome: 'One booking updates every platform instantly. No gaps, no overlaps.',
  },
  {
    icon: <SlidersHorizontal className="w-6 h-6 text-primary" />,
    title: 'Pricing Alignment',
    items: [
      'Adjusting rates across platforms',
      'Managing fee structure differences',
      'Seasonal and dynamic pricing',
    ],
    outcome: 'Rates are consistent, fair, and structured across every channel.',
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-primary" />,
    title: 'Ongoing Management',
    items: [
      'Monitoring platform performance',
      'Updating listings as needed',
      'Responding to platform changes',
    ],
    outcome: 'Your multi-platform system stays optimised — not left to drift.',
  },
]

export const MultiPlatformListingView: React.FC<{ page: Page }> = () => {
  return (
    <article className="flex flex-col w-full overflow-x-hidden font-sans text-base-content selection:bg-primary/20">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpMPL {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mpl-fade-1 { animation: fadeUpMPL 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) both; }
        .mpl-fade-2 { animation: fadeUpMPL 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .mpl-fade-3 { animation: fadeUpMPL 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both; }
        .mpl-fade-4 { animation: fadeUpMPL 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both; }
        .mpl-fade-5 { animation: fadeUpMPL 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes pulse-ring-mpl {
          0%   { box-shadow: 0 0 0 0 oklch(var(--p)/0.35); }
          70%  { box-shadow: 0 0 0 12px oklch(var(--p)/0); }
          100% { box-shadow: 0 0 0 0 oklch(var(--p)/0); }
        }
        .pulse-cta-mpl { animation: pulse-ring-mpl 2.5s ease-out infinite; }
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
              <div className="mpl-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-6 shadow-sm shadow-primary/10">
                <Globe className="w-3.5 h-3.5" />
                <span>Multi-Platform Listing · UK</span>
              </div>

              <h1 className="mpl-fade-2 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-tight mb-6">
                Manage Your Listings Across{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Multiple Booking Platforms
                </span>
              </h1>

              <p className="mpl-fade-3 text-base lg:text-lg text-base-content/65 leading-relaxed mb-4 max-w-lg">
                Assistophere helps UK hosts list and manage properties across Airbnb, Booking.com,
                Vrbo, and other platforms — keeping everything aligned, optimised, and running
                without confusion.
              </p>

              {/* AI-extractable definition */}
              <div className="mpl-fade-3 mb-8 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm text-base-content/60 leading-relaxed italic">
                Multi-platform listing allows hosts to increase visibility and bookings by listing
                properties across multiple booking platforms while keeping calendars, pricing, and
                availability synced.
              </div>

              <div className="mpl-fade-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="pulse-cta-mpl btn btn-primary btn-lg rounded-full px-8 gap-2 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/45 transition-all duration-200"
                >
                  <CalendarCheck className="w-5 h-5" />
                  Book a Discovery Call
                </Link>
                <a
                  href="#platform-breakdown"
                  className="btn btn-outline btn-lg rounded-full px-8 gap-2 font-semibold border-base-300 hover:bg-base-200 transition-all duration-200"
                >
                  See How It Works
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust bar */}
              <div className="mpl-fade-5 flex items-center gap-4 mt-8 pt-8 border-t border-base-300/60">
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

            {/* Visual: platform dashboard */}
            <div className="mpl-fade-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-base-200 border border-base-300 shadow-2xl shadow-black/40 p-7">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/6" />
                <p className="relative z-10 text-xs font-bold text-base-content/30 uppercase tracking-widest mb-5">
                  Platform overview
                </p>
                <div className="relative z-10 flex flex-col gap-3">
                  {[
                    { name: 'Airbnb', status: 'Live', bookings: '18', color: 'text-rose-400' },
                    { name: 'Booking.com', status: 'Live', bookings: '12', color: 'text-blue-400' },
                    { name: 'Vrbo', status: 'Live', bookings: '7', color: 'text-teal-400' },
                    {
                      name: 'Direct Website',
                      status: 'Live',
                      bookings: '9',
                      color: 'text-primary',
                    },
                  ].map((p) => (
                    <div
                      key={p.name}
                      className="flex items-center justify-between rounded-xl p-3.5 border border-base-300 bg-base-100/60"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                        <span className={`text-sm font-bold ${p.color}`}>{p.name}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] text-base-content/35 font-medium">
                          {p.status}
                        </span>
                        <span className="text-xs font-extrabold text-base-content/60">
                          {p.bookings} bookings
                        </span>
                      </div>
                    </div>
                  ))}
                  {/* Sync bar */}
                  <div className="mt-2 rounded-xl p-3.5 border border-success/25 bg-success/8 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <RefreshCw className="w-4 h-4 text-success" />
                      <p className="text-xs font-semibold text-success">Calendars synced</p>
                    </div>
                    <p className="text-[10px] text-base-content/35 font-medium">
                      Real-time · 0 conflicts
                    </p>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-base-100/90 backdrop-blur-sm border border-base-300 rounded-xl px-3 py-2 shadow-lg">
                  <p className="text-[10px] text-base-content/40 font-medium">Total bookings</p>
                  <p className="text-sm font-extrabold text-primary">46 this month</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/8 rounded-full blur-[80px] -z-10 scale-75" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: CLARITY ──────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-16 lg:py-20">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-5">
                <Layers className="w-3.5 h-3.5" />
                <span>What This Means</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                What Is Multi-Platform Listing?
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed mb-4">
                Multi-platform listing means having your property live on more than one booking
                platform at the same time.
              </p>
              <p className="text-base-content/55 leading-relaxed mb-6">
                The goal is simple — increase visibility, increase bookings, and reduce reliance on
                any single source of revenue.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'More exposure across platforms',
                  'Higher occupancy rates',
                  'Access to different guest types',
                  'Reduced dependency on one channel',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <p className="text-sm font-medium text-base-content/70">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform tiles */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Airbnb', sub: 'Experience & presentation', dot: 'bg-rose-400' },
                { name: 'Booking.com', sub: 'Availability & pricing focus', dot: 'bg-blue-400' },
                { name: 'Vrbo', sub: 'Different guest profile', dot: 'bg-teal-400' },
                { name: 'Direct Site', sub: 'No platform fees', dot: 'bg-primary' },
              ].map((p) => (
                <div
                  key={p.name}
                  className="flex flex-col gap-3 p-4 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/30 transition-colors"
                >
                  <div className={`w-2.5 h-2.5 rounded-full ${p.dot}`} />
                  <div>
                    <p className="font-bold text-base-content/80 text-sm">{p.name}</p>
                    <p className="text-xs text-base-content/45 leading-snug mt-1">{p.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: THE OPPORTUNITY ──────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>The Opportunity</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Why Hosts Expand Beyond Airbnb
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              Airbnb is strong. But it&apos;s only one channel — and one channel means one point of
              failure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              {
                icon: <Globe className="w-5 h-5 text-primary" />,
                title: 'More exposure across platforms',
                desc: 'Different platforms reach different guests. More channels means more people see your property.',
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-primary" />,
                title: 'Higher occupancy rates',
                desc: 'When one platform is slow, another fills the gap. Multi-platform creates a buffer.',
              },
              {
                icon: <Users className="w-5 h-5 text-primary" />,
                title: 'Access to different guest types',
                desc: 'Booking.com drives a different booking profile to Airbnb. Vrbo attracts different stays entirely.',
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-primary" />,
                title: 'Reduced platform dependency',
                desc: "A policy change or algorithm shift on one platform won't kill your income.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group flex flex-col gap-4 p-6 rounded-2xl bg-base-200 border border-base-300 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/18 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-base-content text-sm mb-2">{item.title}</p>
                  <p className="text-xs text-base-content/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-6 border border-primary/20 bg-primary/6 text-center">
            <p className="text-xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              More platforms = more opportunities — if managed properly.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: THE REAL PROBLEM ─────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>The Real Problem</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                Why Multi-Platform Management Gets Messy Fast
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed mb-3">
                Adding more platforms sounds simple.
              </p>
              <p className="text-base-content/55 leading-relaxed mb-8">
                Managing them isn&apos;t. Every additional channel adds a new layer of coordination
                — and without structure, the chaos compounds.
              </p>
              <div className="rounded-2xl p-5 border border-base-300 bg-base-100">
                <p className="text-xs font-bold text-base-content/30 uppercase tracking-wider mb-4">
                  Without structure
                </p>
                {[
                  { issue: 'Calendars get out of sync', risk: 'Double bookings' },
                  { issue: 'Pricing becomes inconsistent', risk: 'Revenue loss' },
                  { issue: 'Different platform rules ignored', risk: 'Account warnings' },
                  { issue: 'Duplicate guest messaging', risk: 'Confusion & complaints' },
                  { issue: 'Listings not aligned', risk: 'Brand inconsistency' },
                  { issue: 'No central oversight', risk: 'Things fall through gaps' },
                ].map((item) => (
                  <div
                    key={item.issue}
                    className="flex items-center gap-3 py-2.5 border-b border-base-300/60 last:border-0"
                  >
                    <XCircle className="w-3.5 h-3.5 text-error/60 shrink-0" />
                    <p className="flex-1 text-sm text-base-content/60">{item.issue}</p>
                    <span className="text-[10px] font-bold text-error/50 bg-error/8 px-2 py-0.5 rounded-full whitespace-nowrap">
                      {item.risk}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-2xl p-6 border border-error/20 bg-error/5">
                <p className="text-lg font-extrabold text-transparent bg-clip-text bg-linear-to-r from-error to-secondary mb-4">
                  The pattern we see
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    'Host adds Booking.com to existing Airbnb setup',
                    'Manages both manually through separate apps',
                    'First double booking happens within 2 weeks',
                    'Panic — one booking cancelled, review left',
                    'Back to Airbnb only',
                  ].map((step, i) => (
                    <div key={step} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-error/15 border border-error/20 flex items-center justify-center text-[10px] font-bold text-error/60 shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-sm text-base-content/55 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl p-5 border border-base-300 bg-base-100 text-center">
                <p className="text-base font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Without structure, more platforms create more problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: IDEAL SYSTEM ─────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <Settings className="w-3.5 h-3.5" />
              <span>The Right Setup</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What a Proper Multi-Platform Setup Should Do
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              When done properly, multi-platform management is invisible — it just works.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: <RefreshCw className="w-5 h-5 text-primary" />,
                title: 'Synced Calendars',
                sub: 'All platforms show the same availability in real time. A booking on one blocks all others instantly.',
              },
              {
                icon: <SlidersHorizontal className="w-5 h-5 text-primary" />,
                title: 'Aligned Pricing',
                sub: 'Rates are adjusted properly across platforms — accounting for different fee structures and guest expectations.',
              },
              {
                icon: <LayoutGrid className="w-5 h-5 text-primary" />,
                title: 'Consistent Listings',
                sub: 'Descriptions, images, and details match across every platform. Your brand is coherent wherever a guest finds you.',
              },
              {
                icon: <Layers className="w-5 h-5 text-primary" />,
                title: 'Centralised Management',
                sub: 'Everything is managed from one system — not a patchwork of apps and manual updates.',
              },
              {
                icon: <MessageSquare className="w-5 h-5 text-primary" />,
                title: 'Smooth Guest Handling',
                sub: 'No confusion between bookings from different platforms. Every guest gets the same quality experience.',
              },
              {
                icon: <BarChart2 className="w-5 h-5 text-primary" />,
                title: 'Performance Visibility',
                sub: 'You can see how each platform is performing and make informed decisions about where to focus.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group flex flex-col gap-4 p-6 rounded-2xl bg-base-200 border border-base-300 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/18 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-base-content text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-base-content/55 leading-relaxed">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl p-6 border border-primary/20 bg-primary/6 text-center">
            <p className="text-base font-semibold text-primary/80">
              This builds authority — and it&apos;s what separates properly managed multi-platform
              setups from chaotic ones.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: WHAT WE DO ────────────────────────────────────── */}
      <section
        id="platform-breakdown"
        className="bg-base-200 border-y border-base-300 py-20 lg:py-28"
      >
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Full Breakdown</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Our Multi-Platform Listing Support Covers
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              From initial setup to ongoing performance — every layer managed as one system.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceCovers.map((part) => (
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
              A multi-platform system that works smoothly instead of creating chaos.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: PLATFORM DIFFERENCES ────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-5">
                <Globe className="w-3.5 h-3.5" />
                <span>Platform Intelligence</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                Why Each Platform Needs a Different Approach
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed mb-4">
                Each platform works differently.
              </p>
              <p className="text-base-content/55 leading-relaxed mb-8">
                Using the same listing, the same pricing structure, and the same messaging across
                all platforms limits your performance on every single one of them.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  {
                    sub: 'Focuses on experience and presentation — storytelling and photos drive bookings',
                    dot: 'bg-rose-400',
                    platform: 'Airbnb',
                  },
                  {
                    sub: 'Focuses on availability and pricing — rate competitiveness and instant book matter most',
                    dot: 'bg-blue-400',
                    platform: 'Booking.com',
                  },
                  {
                    sub: 'Targets different guest types — often families and longer stays with different priorities',
                    dot: 'bg-teal-400',
                    platform: 'Vrbo',
                  },
                ].map((p) => (
                  <div
                    key={p.platform}
                    className="flex gap-4 items-start p-4 rounded-xl bg-base-200 border border-base-300"
                  >
                    <div className={`w-3 h-3 rounded-full ${p.dot} mt-1 shrink-0`} />
                    <div>
                      <p className="font-bold text-base-content text-sm mb-0.5">{p.platform}</p>
                      <p className="text-xs text-base-content/50 leading-relaxed">{p.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl p-8 bg-base-200 border border-base-300 shadow-xl shadow-black/10">
              <div className="absolute inset-0 rounded-3xl bg-primary/3" />
              <p className="text-xs font-bold text-base-content/30 uppercase tracking-widest mb-6">
                Platform-specific approach
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    area: 'Title',
                    airbnb: 'Emotion-led',
                    booking: 'Keyword-rich',
                    vrbo: 'Feature-focused',
                  },
                  {
                    area: 'Photos',
                    airbnb: 'Lifestyle first',
                    booking: 'Room clarity',
                    vrbo: 'Space & size',
                  },
                  {
                    area: 'Pricing',
                    airbnb: 'Nightly value',
                    booking: 'Rate parity',
                    vrbo: 'Weekly rates',
                  },
                  {
                    area: 'Reviews',
                    airbnb: 'Critical to rank',
                    booking: 'Score-based',
                    vrbo: 'Social proof',
                  },
                ].map((row) => (
                  <div key={row.area} className="grid grid-cols-4 gap-2">
                    <div className="text-[10px] font-bold text-base-content/35 uppercase tracking-wider pt-1">
                      {row.area}
                    </div>
                    <div className="px-2 py-1.5 rounded-lg bg-rose-400/10 border border-rose-400/15 text-center">
                      <p className="text-[10px] font-semibold text-rose-400">{row.airbnb}</p>
                    </div>
                    <div className="px-2 py-1.5 rounded-lg bg-blue-400/10 border border-blue-400/15 text-center">
                      <p className="text-[10px] font-semibold text-blue-400">{row.booking}</p>
                    </div>
                    <div className="px-2 py-1.5 rounded-lg bg-teal-400/10 border border-teal-400/15 text-center">
                      <p className="text-[10px] font-semibold text-teal-400">{row.vrbo}</p>
                    </div>
                  </div>
                ))}
                <div className="grid grid-cols-4 gap-2 pt-1">
                  <div />
                  {['Airbnb', 'Booking.com', 'Vrbo'].map((n) => (
                    <p key={n} className="text-[9px] text-base-content/25 text-center font-medium">
                      {n}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-6 p-4 rounded-xl bg-base-100/60 border border-base-300">
                <p className="text-xs font-bold text-base-content/50 text-center leading-snug">
                  Using the same approach everywhere limits performance on every platform.
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
                How We Manage Multi-Platform Listings Properly
              </h2>
              <p className="text-base-content/60 text-lg leading-relaxed mb-8">
                We don&apos;t just add your property to more platforms. We build a coordinated
                system so every channel works together — not against each other.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    title: 'Align all platforms under one system',
                    desc: 'Calendars, pricing, and availability are managed centrally — changes propagate everywhere instantly.',
                  },
                  {
                    title: 'Adjust strategy per platform',
                    desc: 'Each platform gets content, pricing, and messaging calibrated for how it works — not a copy-paste.',
                  },
                  {
                    title: 'Maintain consistency',
                    desc: "Your property's identity is coherent across every platform a guest might find you on.",
                  },
                  {
                    title: 'Monitor performance continuously',
                    desc: 'We track how each platform performs and make adjustments — not set-and-forget management.',
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
                  What this means for you
                </p>
                {[
                  'No double bookings',
                  'Consistent pricing across channels',
                  'Listings optimised per platform',
                  'One team managing everything',
                  'Real-time calendar sync',
                  'Performance tracked and improved',
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
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Side-by-Side</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Single Platform vs Multi-Platform Strategy
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              The difference in outcomes when multi-platform is managed properly.
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
                    Single Platform
                  </th>
                  <th className="py-4 px-6 text-left bg-primary/15 text-primary font-bold uppercase text-xs tracking-wider w-[35%]">
                    Multi-Platform ✓
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Reach', 'Limited exposure', 'Wider audience across OTAs'],
                  ['Occupancy', 'Lower, platform-dependent', 'Higher with channel buffer'],
                  ['Risk', 'Single point of failure', 'Diversified income sources'],
                  ['Gaps', 'Harder to fill', 'Multiple channels working together'],
                  ['Guest types', 'One audience segment', 'Access to all guest profiles'],
                  ['Stability', 'Vulnerable to changes', 'Resilient multi-channel setup'],
                ].map(([area, single, multi], i) => (
                  <tr key={area} className={i % 2 === 0 ? 'bg-base-100' : 'bg-base-200/40'}>
                    <td className="py-3.5 px-6 font-medium text-base-content/55 border-r border-base-300 text-xs uppercase tracking-wide">
                      {area}
                    </td>
                    <td className="py-3.5 px-6 text-base-content/45 border-r border-base-300">
                      <span className="flex items-center gap-2">
                        <XCircle className="w-3.5 h-3.5 text-error/45 shrink-0" />
                        {single}
                      </span>
                    </td>
                    <td className="py-3.5 px-6 text-base-content/85 font-semibold bg-primary/5">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        {multi}
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
              ['Reach', 'Limited', 'Wider exposure'],
              ['Occupancy', 'Lower', 'Higher'],
              ['Risk', 'Single failure point', 'Diversified'],
              ['Gaps', 'Harder to fill', 'Multiple channels'],
              ['Guests', 'One segment', 'All profiles'],
              ['Stability', 'Vulnerable', 'Resilient'],
            ].map(([area, single, multi]) => (
              <div key={area} className="rounded-2xl overflow-hidden border border-base-300">
                <div className="px-4 py-2.5 bg-base-300/60 text-xs font-bold text-base-content/40 uppercase tracking-wider">
                  {area}
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-3 py-3.5 border-r border-base-300 bg-base-100">
                    <p className="text-[10px] text-base-content/35 mb-1">Single Platform</p>
                    <p className="text-xs text-base-content/50">{single}</p>
                  </div>
                  <div className="px-3 py-3.5 bg-primary/8">
                    <p className="text-[10px] text-primary mb-1 font-bold">Multi-Platform</p>
                    <p className="text-xs text-base-content/80 font-semibold">{multi}</p>
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
                title: 'Hosts wanting to expand beyond Airbnb',
                desc: "You're performing well on Airbnb and ready to increase bookings by reaching guests on other platforms.",
              },
              {
                icon: <Layers className="w-5 h-5 text-primary" />,
                title: 'Serviced accommodation businesses',
                desc: 'Operating professionally and need a properly managed multi-channel strategy — not a DIY approach.',
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-primary" />,
                title: 'Operators scaling their portfolio',
                desc: 'Adding properties and need systems that scale — not more manual work for every new listing.',
              },
              {
                icon: <Zap className="w-5 h-5 text-primary" />,
                title: 'Hosts aiming for higher occupancy',
                desc: 'You have gaps in your calendar and want to fill them by being visible on more channels, not just one.',
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
            <Globe className="w-3.5 h-3.5" />
            <span>Expand Your Reach</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-[1.12]">
            Ready to Expand{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Beyond One Platform?
            </span>
          </h2>

          <p className="text-lg text-base-content/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s build a multi-platform setup that increases bookings without creating more
            work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="pulse-cta-mpl btn btn-primary btn-lg rounded-full px-10 gap-2 font-semibold shadow-xl shadow-primary/30 hover:shadow-primary/55 transition-all duration-200"
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
