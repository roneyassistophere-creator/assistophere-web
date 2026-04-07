import React from 'react'
import type { Page } from '@/payload-types'
import Link from 'next/link'
import {
  CalendarCheck,
  ArrowRight,
  CheckCircle2,
  XCircle,
  TrendingUp,
  MessageSquare,
  Star,
  AlertCircle,
  Layers,
  Users,
  Target,
  Zap,
  BarChart2,
  MousePointerClick,
  SlidersHorizontal,
  ShieldCheck,
  Megaphone,
} from 'lucide-react'
import { FaqItem } from '../AirbnbVa/FaqItem'

const faqs = [
  {
    q: 'How quickly can ads bring bookings?',
    a: "Unlike SEO, Google Ads can generate traffic and bookings almost immediately once a campaign is live. The speed depends on your budget, targeting, and how ready your booking system is to convert visitors. With a properly structured campaign, you can expect to see meaningful activity within the first few days.",
  },
  {
    q: 'What budget is needed?',
    a: "There's no fixed minimum, but we typically recommend starting with enough to gather real data — usually in the range of a few hundred pounds per month. We'll guide you on what's realistic for your market and property type, and we manage spend to maximise efficiency rather than just burn through budget.",
  },
  {
    q: 'Do I need a website first?',
    a: "Yes — ads need somewhere to send traffic. A booking-ready website with a clear journey and fast load times is essential. Without it, even the best campaign won't convert. If you don't have one yet, we can help with that as part of your direct booking setup.",
  },
  {
    q: 'Can ads work with multiple properties?',
    a: "Absolutely. We can structure campaigns to cover multiple properties or locations — either as separate ad groups or dedicated campaigns depending on your portfolio. More properties often means better data and more room to optimise.",
  },
]

const serviceCovers = [
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: 'Campaign Setup',
    items: ['Keyword targeting based on booking intent', 'Campaign structure for STR properties', 'Match type strategy'],
    outcome: 'Campaigns built to attract guests who are ready to book — not just browse.',
  },
  {
    icon: <Megaphone className="w-6 h-6 text-primary" />,
    title: 'Ad Creation',
    items: ['Clear, conversion-focused copy', 'Messaging aligned with your listings', 'Ad extensions for trust signals'],
    outcome: 'Ads that communicate your offer clearly and drive action.',
  },
  {
    icon: <MousePointerClick className="w-6 h-6 text-primary" />,
    title: 'Landing Page Alignment',
    items: ['Sending traffic to booking-ready pages', 'Improving conversion flow', 'CTA and journey optimisation'],
    outcome: 'Clicks land somewhere that converts — not a generic homepage.',
  },
  {
    icon: <SlidersHorizontal className="w-6 h-6 text-primary" />,
    title: 'Budget & Bid Management',
    items: ['Controlling spend efficiently', 'Bid strategy optimisation', 'Cost-per-booking focus'],
    outcome: 'Every pound spent is working toward a booking, not wasted on irrelevant clicks.',
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-primary" />,
    title: 'Performance Monitoring',
    items: ['Tracking results and conversions', 'Campaign adjustments', 'Ongoing improvements'],
    outcome: 'Campaigns improve over time — results compound as we learn what works.',
  },
]

export const GoogleAdsView: React.FC<{ page: Page }> = () => {
  return (
    <article className="flex flex-col w-full overflow-x-hidden font-sans text-base-content selection:bg-primary/20">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpGA {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ga-fade-1 { animation: fadeUpGA 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) both; }
        .ga-fade-2 { animation: fadeUpGA 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .ga-fade-3 { animation: fadeUpGA 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both; }
        .ga-fade-4 { animation: fadeUpGA 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both; }
        .ga-fade-5 { animation: fadeUpGA 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes pulse-ring-ga {
          0%   { box-shadow: 0 0 0 0 oklch(var(--p)/0.35); }
          70%  { box-shadow: 0 0 0 12px oklch(var(--p)/0); }
          100% { box-shadow: 0 0 0 0 oklch(var(--p)/0); }
        }
        .pulse-cta-ga { animation: pulse-ring-ga 2.5s ease-out infinite; }
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
              <div className="ga-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-6 shadow-sm shadow-primary/10">
                <Target className="w-3.5 h-3.5" />
                <span>Google Ads · STR UK</span>
              </div>

              <h1 className="ga-fade-2 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-tight mb-6">
                Google Ads for{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Short Term Rental Bookings
                </span>
              </h1>

              <p className="ga-fade-3 text-base lg:text-lg text-base-content/65 leading-relaxed mb-4 max-w-lg">
                Assistophere helps UK hosts run Google Ads campaigns that bring in direct
                bookings, fill calendar gaps, and drive consistent demand without relying only on
                platforms.
              </p>

              {/* AI-extractable definition */}
              <div className="ga-fade-3 mb-8 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm text-base-content/60 leading-relaxed italic">
                Google Ads for Airbnb allows hosts to appear in search results when potential
                guests are actively looking for accommodation, driving targeted traffic and direct
                bookings.
              </div>

              <div className="ga-fade-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="pulse-cta-ga btn btn-primary btn-lg rounded-full px-8 gap-2 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/45 transition-all duration-200"
                >
                  <CalendarCheck className="w-5 h-5" />
                  Book a Discovery Call
                </Link>
                <a
                  href="#ads-breakdown"
                  className="btn btn-outline btn-lg rounded-full px-8 gap-2 font-semibold border-base-300 hover:bg-base-200 transition-all duration-200"
                >
                  See How It Works
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust bar */}
              <div className="ga-fade-5 flex items-center gap-4 mt-8 pt-8 border-t border-base-300/60">
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

            {/* Visual: ads dashboard */}
            <div className="ga-fade-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-base-200 border border-base-300 shadow-2xl shadow-black/40 p-7">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/6" />
                <p className="relative z-10 text-xs font-bold text-base-content/30 uppercase tracking-widest mb-6">
                  Campaign performance
                </p>
                <div className="relative z-10 flex flex-col gap-4">
                  {/* Metric row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Impressions', value: '14.2k', delta: '+38%' },
                      { label: 'Clicks', value: '847', delta: '+52%' },
                      { label: 'Bookings', value: '34', delta: '+61%' },
                    ].map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl p-3 border border-base-300 bg-base-100/60 flex flex-col gap-1"
                      >
                        <p className="text-[10px] text-base-content/35 font-medium">{m.label}</p>
                        <p className="text-base font-extrabold text-base-content/80">{m.value}</p>
                        <p className="text-[10px] font-bold text-success">{m.delta}</p>
                      </div>
                    ))}
                  </div>
                  {/* Fake sparkline */}
                  <div className="rounded-xl p-4 border border-primary/20 bg-primary/8">
                    <p className="text-[10px] text-primary font-bold mb-3 uppercase tracking-wider">
                      Bookings over time
                    </p>
                    <div className="flex items-end gap-1.5 h-14">
                      {[20, 35, 28, 50, 42, 65, 58, 80, 72, 95, 88, 100].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm bg-primary/50"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Status row */}
                  <div className="flex items-center justify-between rounded-xl p-3 border border-success/25 bg-success/8">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                      <p className="text-xs font-semibold text-success">Campaign active</p>
                    </div>
                    <p className="text-[10px] text-base-content/35 font-medium">Live · UK targeting</p>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-base-100/90 backdrop-blur-sm border border-base-300 rounded-xl px-3 py-2 shadow-lg">
                  <p className="text-[10px] text-base-content/40 font-medium">Empty gaps</p>
                  <p className="text-sm font-extrabold text-success">Filled</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/8 rounded-full blur-[80px] -z-10 scale-75" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: CLARITY ──────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-16 lg:py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-5">
            <Zap className="w-3.5 h-3.5" />
            <span>How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            How Google Ads Works for STR Businesses
          </h2>
          <p className="text-base-content/65 text-lg leading-relaxed mb-4">
            Google Ads places your property or website in front of people actively searching for
            accommodation.
          </p>
          <p className="text-base-content/55 leading-relaxed mb-8">
            Unlike organic growth, ads can generate results quickly when structured properly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                icon: <Target className="w-5 h-5 text-primary" />,
                label: 'High intent traffic',
                sub: 'Guests actively searching — not passively browsing',
              },
              {
                icon: <Zap className="w-5 h-5 text-primary" />,
                label: 'Immediate visibility',
                sub: 'Appear in search results from day one',
              },
              {
                icon: <CalendarCheck className="w-5 h-5 text-primary" />,
                label: 'Faster booking opportunities',
                sub: 'Fill gaps when you need to, not when an algorithm decides',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-base-100 border border-base-300 text-center"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-base-content/75 mb-1">{item.label}</p>
                  <p className="text-xs text-base-content/45 leading-snug">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-5 border border-primary/20 bg-primary/6">
            <p className="text-base font-semibold text-primary/80 leading-relaxed">
              Paid search puts your offer in front of people at the exact moment they&apos;re
              looking for it.
            </p>
          </div>
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
                Why Relying Only on Organic or Platforms Slows You Down
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed mb-3">
                SEO takes time. Platforms depend on algorithms.
              </p>
              <p className="text-base-content/55 leading-relaxed">
                Neither gives you control over when bookings come in. If you have gaps to fill or
                you need demand now, waiting on organic growth or platform visibility isn&apos;t
                always an option.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { issue: 'Empty calendar gaps', cost: 'Revenue lost with no fix in sight' },
                { issue: 'Last-minute availability', cost: 'No targeted way to fill it quickly' },
                { issue: 'Slow booking periods', cost: 'Platform reach drops, income follows' },
                { issue: 'Limited control over demand', cost: "You wait — you don't act" },
              ].map((item) => (
                <div
                  key={item.issue}
                  className="flex items-center gap-4 p-4 rounded-xl bg-base-200 border border-base-300 hover:border-error/25 transition-colors"
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
              Sometimes you don&apos;t need more visibility. You need bookings now.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: THE OPPORTUNITY ──────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>The Shift</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Google Ads Allows You to Do
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              Paid search gives you a lever organic channels don&apos;t — on-demand visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: <Target className="w-5 h-5 text-primary" />,
                title: 'Target guests actively searching',
                desc: 'Appear exactly when someone types "short term rental [your area]" — the highest booking intent moment.',
                num: '01',
              },
              {
                icon: <CalendarCheck className="w-5 h-5 text-primary" />,
                title: 'Fill specific date gaps',
                desc: 'Run targeted campaigns around your empty periods — drive demand when and where you need it.',
                num: '02',
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-primary" />,
                title: 'Control where bookings come from',
                desc: 'Drive traffic to your own booking system — no platform fees, no algorithm dependency.',
                num: '03',
              },
              {
                icon: <MousePointerClick className="w-5 h-5 text-primary" />,
                title: 'Drive traffic to your booking system',
                desc: 'Ads send guests directly to your booking-ready pages — not a listing on someone else&apos;s platform.',
                num: '04',
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-primary" />,
                title: 'Scale demand when needed',
                desc: 'Increase spend during slow periods or high-competition windows — dial back when occupancy is strong.',
                num: '05',
              },
              {
                icon: <SlidersHorizontal className="w-5 h-5 text-primary" />,
                title: 'Stay in control of your budget',
                desc: 'You decide how much is spent and when. No minimum, no locked-in commitments.',
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

      {/* ─── SECTION 5: WHAT WE DO ────────────────────────────────────── */}
      <section id="ads-breakdown" className="py-20 lg:py-28">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Full Breakdown</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Our Google Ads Service Covers
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              Every layer — from keyword strategy to ongoing optimisation — built around
              bookings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceCovers.map((part) => (
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
                      <li key={item} className="flex items-center gap-2 text-sm text-base-content/60">
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
              Ads that lead to bookings, not just clicks.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: HOW IT CONNECTS ──────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-5">
                <Layers className="w-3.5 h-3.5" />
                <span>System Thinking</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                Ads Only Work When the System Is Ready
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed mb-4">
                Google Ads is not just about traffic.
              </p>
              <p className="text-base-content/55 leading-relaxed mb-8">
                Without a booking-ready website, a clear funnel, and the right pricing behind it,
                even the best ads won&apos;t convert. That&apos;s why we look at the full picture
                — not just the campaign.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  {
                    label: 'Your website',
                    desc: 'Needs to load fast, communicate clearly, and convert visitors into bookings.',
                  },
                  {
                    label: 'Your booking system',
                    desc: 'Must be seamless — friction at checkout kills conversions, not the ad.',
                  },
                  {
                    label: 'Your pricing',
                    desc: 'Competitive, visible, and structured so the value is immediately clear to incoming traffic.',
                  },
                  {
                    label: 'Your operations',
                    desc: 'Ads drive demand — your team and systems need to handle the bookings that follow.',
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-base-content text-sm mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-base-content/50 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System visual */}
            <div className="relative rounded-3xl p-8 bg-base-100 border border-base-300 shadow-xl shadow-black/15">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-[60px]" />
              <p className="relative z-10 text-xs font-bold text-base-content/30 uppercase tracking-widest mb-6">
                The full system
              </p>
              <div className="relative z-10 flex flex-col gap-3">
                {[
                  { label: 'Google Ads Campaign', sub: 'High-intent paid traffic', highlight: true },
                  { label: 'Your Website', sub: 'Conversion-optimised landing', highlight: false },
                  { label: 'Booking Engine', sub: 'Direct reservation system', highlight: false },
                  { label: 'Operations', sub: 'Delivery + guest experience', highlight: false },
                ].map((layer, i, arr) => (
                  <React.Fragment key={layer.label}>
                    <div
                      className={`rounded-xl p-4 border ${
                        layer.highlight
                          ? 'border-primary/40 bg-primary/12 shadow-md shadow-primary/10'
                          : 'border-base-300 bg-base-200'
                      } flex items-center justify-between`}
                    >
                      <div>
                        <p
                          className={`text-sm font-bold ${layer.highlight ? 'text-primary' : 'text-base-content/65'}`}
                        >
                          {layer.label}
                        </p>
                        <p className="text-[10px] text-base-content/35 mt-0.5">{layer.sub}</p>
                      </div>
                      {layer.highlight && <Target className="w-4 h-4 text-primary" />}
                    </div>
                    {i < arr.length - 1 && (
                      <div className="flex justify-center">
                        <ArrowRight className="w-3.5 h-3.5 rotate-90 text-base-content/20" />
                      </div>
                    )}
                  </React.Fragment>
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
              Why Most STR Ads Don&apos;t Work
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              Most failed ad campaigns have the same problems. They&apos;re fixable — but only
              if you know what to look for.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              {
                mistake: 'Targeting the wrong keywords',
                why: 'Broad, low-intent searches waste budget on traffic that was never going to book.',
              },
              {
                mistake: 'Sending traffic to poor pages',
                why: "A slow or confusing landing page kills conversion — no matter how good the ad is.",
              },
              {
                mistake: 'No clear booking journey',
                why: 'Visitors arrive and don\'t know what to do next. No clear next step means no booking.',
              },
              {
                mistake: 'Ignoring conversion',
                why: "Optimising for clicks is the wrong goal. You need bookings — that requires a different focus.",
              },
              {
                mistake: 'No ongoing optimisation',
                why: 'Campaigns left to run without review waste money and miss improvement opportunities.',
              },
              {
                mistake: 'No system behind the ads',
                why: "Traffic arrives, but the booking engine, pricing, or website isn't ready. It doesn't convert.",
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
              Ads fail when they are treated as traffic tools instead of booking systems.
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
                <span>Our Approach</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                How We Run Ads Differently
              </h2>
              <p className="text-base-content/60 text-lg leading-relaxed mb-8">
                We don&apos;t run ads for clicks. We build campaigns around bookings — and
                the system that converts them.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    title: 'Focus on bookings, not clicks',
                    desc: 'Every campaign decision — keywords, bids, copy — is made with the booking as the end goal.',
                  },
                  {
                    title: 'Align ads with your booking system',
                    desc: 'We check the full funnel is ready before spending. Traffic without conversion is money lost.',
                  },
                  {
                    title: 'Target real search intent',
                    desc: "We only target searches where someone is actively looking to book — not just browse.",
                  },
                  {
                    title: 'Optimise continuously',
                    desc: 'Campaigns improve over time. We review performance, adjust bids, and refine targeting regularly.',
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

            {/* Reassurance card */}
            <div className="relative rounded-3xl p-8 lg:p-10 bg-linear-to-br from-primary/15 via-base-200 to-secondary/10 border border-primary/20 shadow-xl shadow-primary/10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/8 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <p className="text-xs font-bold text-primary/50 uppercase tracking-widest mb-6">
                  What this means for you
                </p>
                {[
                  'Campaigns built to generate bookings',
                  'Budget spent efficiently, not wasted',
                  'Full funnel reviewed before launch',
                  'Ongoing optimisation included',
                  'Targeting guests with real intent',
                  'Results tracked clearly and reported',
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
              Random Ads vs Structured Campaigns
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              The difference between burning budget and building a booking machine.
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
                    Random Ads
                  </th>
                  <th className="py-4 px-6 text-left bg-primary/15 text-primary font-bold uppercase text-xs tracking-wider w-[35%]">
                    Assistophere Ads ✓
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Goal', 'Traffic only', 'Booking-focused'],
                  ['Targeting', 'Poor or broad', 'Intent-based targeting'],
                  ['Funnel', 'No system behind it', 'Full funnel aligned'],
                  ['Optimisation', 'Inconsistent or none', 'Ongoing and data-driven'],
                  ['Budget control', 'Easy to waste', 'Managed for efficiency'],
                  ['Outcome', 'Clicks, not bookings', 'Bookings, not just clicks'],
                ].map(([area, random, structured], i) => (
                  <tr key={area} className={i % 2 === 0 ? 'bg-base-100' : 'bg-base-200/40'}>
                    <td className="py-3.5 px-6 font-medium text-base-content/55 border-r border-base-300 text-xs uppercase tracking-wide">
                      {area}
                    </td>
                    <td className="py-3.5 px-6 text-base-content/45 border-r border-base-300">
                      <span className="flex items-center gap-2">
                        <XCircle className="w-3.5 h-3.5 text-error/45 shrink-0" />
                        {random}
                      </span>
                    </td>
                    <td className="py-3.5 px-6 text-base-content/85 font-semibold bg-primary/5">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        {structured}
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
              ['Goal', 'Traffic only', 'Booking-focused'],
              ['Targeting', 'Broad', 'Intent-based'],
              ['Funnel', 'No system', 'Full funnel'],
              ['Optimisation', 'None', 'Ongoing'],
              ['Budget', 'Wasted', 'Efficient'],
              ['Outcome', 'Clicks', 'Bookings'],
            ].map(([area, random, structured]) => (
              <div key={area} className="rounded-2xl overflow-hidden border border-base-300">
                <div className="px-4 py-2.5 bg-base-300/60 text-xs font-bold text-base-content/40 uppercase tracking-wider">
                  {area}
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-3 py-3.5 border-r border-base-300 bg-base-100">
                    <p className="text-[10px] text-base-content/35 mb-1">Random Ads</p>
                    <p className="text-xs text-base-content/50">{random}</p>
                  </div>
                  <div className="px-3 py-3.5 bg-primary/8">
                    <p className="text-[10px] text-primary mb-1 font-bold">Our Approach</p>
                    <p className="text-xs text-base-content/80 font-semibold">{structured}</p>
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
                icon: <CalendarCheck className="w-5 h-5 text-primary" />,
                title: 'Hosts with empty calendar gaps',
                desc: "You have availability and need bookings to fill it — not in three months, now.",
              },
              {
                icon: <Layers className="w-5 h-5 text-primary" />,
                title: 'Serviced accommodation businesses',
                desc: 'Operating professionally with a website and booking system that needs consistent traffic.',
              },
              {
                icon: <MousePointerClick className="w-5 h-5 text-primary" />,
                title: 'Operators with direct booking systems',
                desc: "You've built the direct booking infrastructure. Now you need the traffic to use it.",
              },
              {
                icon: <Zap className="w-5 h-5 text-primary" />,
                title: 'Hosts looking for faster results',
                desc: "SEO is your long game. Google Ads is the short game — you need both, and you want to start now.",
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
            <Target className="w-3.5 h-3.5" />
            <span>Fill Your Calendar</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-[1.12]">
            Ready to Drive Bookings{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              on Demand?
            </span>
          </h2>

          <p className="text-lg text-base-content/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s build campaigns that bring in bookings when you need them.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="pulse-cta-ga btn btn-primary btn-lg rounded-full px-10 gap-2 font-semibold shadow-xl shadow-primary/30 hover:shadow-primary/55 transition-all duration-200"
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
