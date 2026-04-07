import React from 'react'
import type { Page } from '@/payload-types'
import Link from 'next/link'
import {
  CalendarCheck,
  ArrowRight,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Search,
  MessageSquare,
  Star,
  AlertCircle,
  Layers,
  Users,
  Globe,
  MapPin,
  BarChart2,
  Funnel,
  FileText,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import { FaqItem } from '../AirbnbVa/FaqItem'

const faqs = [
  {
    q: 'How long does SEO take to work?',
    a: 'SEO is a medium to long-term investment — most businesses start seeing meaningful results between 3 to 6 months, depending on competition and starting point. That said, technical and structural improvements can show faster signals. We set realistic expectations from the start and track progress consistently.',
  },
  {
    q: 'Do I need a website first?',
    a: "Yes — SEO works on the back of a website. If you don't have one yet, we can help with that as part of your direct booking setup. Your website is the foundation everything else builds on.",
  },
  {
    q: 'Will this replace Airbnb?',
    a: "Not necessarily — and that's not always the goal. For most hosts, the aim is to reduce dependency, not to leave platforms entirely. A strong organic presence means you're not 100% reliant on Airbnb's algorithm or policy changes for your income.",
  },
  {
    q: 'How do you track results?',
    a: "We track organic traffic growth, keyword rankings, booking funnel behaviour, and conversion performance. You get a clear picture of what's working, what's improving, and where we're focusing next.",
  },
]

const serviceCovers = [
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: 'Website SEO',
    items: ['Optimised page structure', 'Keyword targeting', 'Search-friendly content'],
    outcome: 'Your site ranks for the searches that matter to your business.',
  },
  {
    icon: <MapPin className="w-6 h-6 text-primary" />,
    title: 'Local SEO',
    items: ['Targeting UK cities and areas', 'Location-based pages', 'Google visibility'],
    outcome: 'Guests searching in your area find you — not just OTA listings.',
  },
  {
    icon: <Funnel className="w-6 h-6 text-primary" />,
    title: 'Direct Booking Funnel Optimisation',
    items: ['Traffic → booking journey', 'Conversion-focused structure', 'CTA placement'],
    outcome: 'Visitors arrive with intent — and your site converts them.',
  },
  {
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: 'Content Strategy',
    items: ['Pages built around real search intent', 'Topic coverage', 'Authority building'],
    outcome: 'Content that earns rankings, not just fills pages.',
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-primary" />,
    title: 'Performance Tracking',
    items: ['Traffic monitoring', 'Behaviour insights', 'Ongoing improvements'],
    outcome: 'You always know what is working and what is improving.',
  },
]

export const SeoOrganicGrowthView: React.FC<{ page: Page }> = () => {
  return (
    <article className="flex flex-col w-full overflow-x-hidden font-sans text-base-content selection:bg-primary/20">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpSOG {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sog-fade-1 { animation: fadeUpSOG 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) both; }
        .sog-fade-2 { animation: fadeUpSOG 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .sog-fade-3 { animation: fadeUpSOG 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both; }
        .sog-fade-4 { animation: fadeUpSOG 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both; }
        .sog-fade-5 { animation: fadeUpSOG 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes pulse-ring-sog {
          0%   { box-shadow: 0 0 0 0 oklch(var(--p)/0.35); }
          70%  { box-shadow: 0 0 0 12px oklch(var(--p)/0); }
          100% { box-shadow: 0 0 0 0 oklch(var(--p)/0); }
        }
        .pulse-cta-sog { animation: pulse-ring-sog 2.5s ease-out infinite; }
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
              <div className="sog-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-6 shadow-sm shadow-primary/10">
                <Search className="w-3.5 h-3.5" />
                <span>SEO &amp; Organic Growth · UK</span>
              </div>

              <h1 className="sog-fade-2 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-tight mb-6">
                SEO &amp; Organic Growth for{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Short Term Rental Businesses
                </span>
              </h1>

              <p className="sog-fade-3 text-base lg:text-lg text-base-content/65 leading-relaxed mb-4 max-w-lg">
                Assistophere helps UK hosts grow their short term rental business through SEO,
                organic traffic, and structured systems that bring in direct bookings without
                relying only on platforms.
              </p>

              {/* AI-extractable definition */}
              <div className="sog-fade-3 mb-8 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm text-base-content/60 leading-relaxed italic">
                SEO for Airbnb hosts involves improving website visibility, attracting organic
                traffic, and converting visitors into direct bookings through structured content and
                optimisation.
              </div>

              <div className="sog-fade-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="pulse-cta-sog btn btn-primary btn-lg rounded-full px-8 gap-2 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/45 transition-all duration-200"
                >
                  <CalendarCheck className="w-5 h-5" />
                  Book a Discovery Call
                </Link>
                <a
                  href="#seo-breakdown"
                  className="btn btn-outline btn-lg rounded-full px-8 gap-2 font-semibold border-base-300 hover:bg-base-200 transition-all duration-200"
                >
                  See How It Works
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust bar */}
              <div className="sog-fade-5 flex items-center gap-4 mt-8 pt-8 border-t border-base-300/60">
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

            {/* Visual: growth dashboard */}
            <div className="sog-fade-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-base-200 border border-base-300 shadow-2xl shadow-black/40 p-7">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/6" />
                <p className="relative z-10 text-xs font-bold text-base-content/30 uppercase tracking-widest mb-6">
                  Organic growth channels
                </p>
                <div className="relative z-10 flex flex-col gap-3">
                  {[
                    { label: 'Organic Search', pct: 74, color: 'bg-primary' },
                    { label: 'Direct Traffic', pct: 52, color: 'bg-secondary' },
                    { label: 'Local Search', pct: 61, color: 'bg-primary/70' },
                    { label: 'Booking Conversion', pct: 43, color: 'bg-success' },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold text-base-content/55">{item.label}</p>
                        <p className="text-xs font-bold text-primary">+{item.pct}%</p>
                      </div>
                      <div className="h-2 rounded-full bg-base-300 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${item.color}`}
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-base-100/90 backdrop-blur-sm border border-base-300 rounded-xl px-3 py-2 shadow-lg">
                  <p className="text-[10px] text-base-content/40 font-medium">Platform reliance</p>
                  <p className="text-sm font-extrabold text-success">Reduced</p>
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
            <span>Remove the Confusion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            What SEO Means for STR Businesses
          </h2>
          <p className="text-base-content/65 text-lg leading-relaxed mb-4">
            SEO for short term rentals is not about blogs or random keywords.
          </p>
          <p className="text-base-content/55 leading-relaxed mb-8">
            It&apos;s about making your properties and website visible when people are actively
            searching for accommodation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                icon: <Search className="w-5 h-5 text-primary" />,
                label: 'Ranking for location-based searches',
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-primary" />,
                label: 'Attracting direct traffic',
              },
              {
                icon: <CalendarCheck className="w-5 h-5 text-primary" />,
                label: 'Converting visitors into bookings',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-base-100 border border-base-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="text-sm font-semibold text-base-content/65 text-center leading-snug">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-5 border border-primary/20 bg-primary/6">
            <p className="text-base font-semibold text-primary/80 leading-relaxed">
              Search visibility built around where guests look — not where algorithms send them.
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
                Why Most Hosts Stay Dependent on Platforms
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed mb-3">
                Platforms bring visibility, but they also control your bookings.
              </p>
              <p className="text-base-content/55 leading-relaxed">
                Every booking that comes through Airbnb or Booking.com is a booking you don&apos;t
                own. The guest relationship, the data, the repeat booking — all of it belongs to the
                platform.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { issue: 'No ownership of traffic', cost: 'Guests belong to the platform' },
                { issue: 'No control over visibility', cost: 'Algorithm changes hurt you' },
                { issue: 'Limited repeat guest capture', cost: 'No direct relationship built' },
                {
                  issue: 'Constant reliance on algorithms',
                  cost: 'Your income follows their rules',
                },
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
              You get bookings, but you don&apos;t build long-term growth.
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
              What Organic Growth Changes
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              When you build organic visibility, the dynamic shifts entirely.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: <TrendingUp className="w-5 h-5 text-primary" />,
                title: 'Direct website traffic',
                desc: 'Guests find you through search — not because a platform decided to show your listing.',
                num: '01',
              },
              {
                icon: <CalendarCheck className="w-5 h-5 text-primary" />,
                title: 'More direct bookings',
                desc: 'Traffic that converts on your own platform — no commission, no middleman.',
                num: '02',
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-primary" />,
                title: 'Reduced platform dependency',
                desc: "Your income isn't tied to one algorithm. Multiple channels means more stability.",
                num: '03',
              },
              {
                icon: <Globe className="w-5 h-5 text-primary" />,
                title: 'Stronger brand presence',
                desc: 'Guests recognise your business — not just your Airbnb profile.',
                num: '04',
              },
              {
                icon: <BarChart2 className="w-5 h-5 text-primary" />,
                title: 'Long-term growth',
                desc: 'SEO compounds over time. The longer you invest, the more return you get.',
                num: '05',
              },
              {
                icon: <Users className="w-5 h-5 text-primary" />,
                title: 'You own the guest relationship',
                desc: 'Direct contact, repeat bookings, and loyalty — all built on your terms.',
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
      <section id="seo-breakdown" className="py-20 lg:py-28">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Full Breakdown</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Our SEO &amp; Organic Growth Service Covers
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              Every layer — from technical structure to conversion — built around your business.
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
              A system that brings in traffic and converts it into bookings.
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
                How SEO Fits Into Your STR System
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed mb-4">
                SEO is not separate from your business.
              </p>
              <p className="text-base-content/55 leading-relaxed mb-8">
                It connects with your website, your booking system, and your operations — one
                continuous loop.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  {
                    label: 'Traffic comes in',
                    desc: 'Guests discover you through search — on their terms, not a platform.',
                  },
                  {
                    label: 'Visitors explore',
                    desc: 'Your website is structured to guide them from curiosity to confidence.',
                  },
                  {
                    label: 'Bookings happen',
                    desc: 'The funnel converts — directly, without commission or platform interference.',
                  },
                  {
                    label: 'Operations support it',
                    desc: 'Your backend processes handle the booking smoothly from there.',
                  },
                ].map((item, i) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-xl bg-primary/12 border border-primary/20 flex items-center justify-center text-primary font-extrabold text-xs mt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <p className="font-semibold text-base-content text-sm mb-0.5">{item.label}</p>
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
                Connected layers
              </p>
              <div className="relative z-10 flex flex-col gap-3">
                {[
                  { label: 'SEO & Organic Content', sub: 'Visibility in search', highlight: true },
                  { label: 'Your Website', sub: 'Trust + conversion', highlight: false },
                  { label: 'Booking Engine', sub: 'Direct reservations', highlight: false },
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
                      {layer.highlight && <Search className="w-4 h-4 text-primary" />}
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
              Why Most STR SEO Doesn&apos;t Work
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              Most STR hosts who&apos;ve tried SEO have done it wrong — not because it doesn&apos;t
              work, but because the approach was off.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              {
                mistake: 'Treating SEO like blogging',
                why: "Publishing articles with no booking intent. Traffic that never converts isn't growth.",
              },
              {
                mistake: 'No clear keyword targeting',
                why: 'Optimising for vague terms nobody searches — or terms with no commercial intent.',
              },
              {
                mistake: 'No booking-focused structure',
                why: "A website that looks nice but doesn't guide visitors toward making a reservation.",
              },
              {
                mistake: 'Ignoring conversion',
                why: 'Traffic without a clear next step. Visitors arrive, look around, and leave.',
              },
              {
                mistake: 'No consistency',
                why: 'A burst of activity with no follow-through. SEO needs sustained effort to compound.',
              },
              {
                mistake: 'Ignoring local search',
                why: 'Missing the most valuable searches — people looking for accommodation in specific areas.',
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
              SEO only works when it&apos;s built around bookings, not content alone.
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
                How We Approach Organic Growth
              </h2>
              <p className="text-base-content/60 text-lg leading-relaxed mb-8">
                We don&apos;t chase traffic for its own sake. Everything is built around what drives
                bookings.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    title: 'Focus on booking intent, not traffic alone',
                    desc: 'We target search terms used by people actively looking for accommodation — not general curiosity.',
                  },
                  {
                    title: 'Build structured pages, not random content',
                    desc: 'Every page has a purpose: rank for a relevant search, guide the visitor, and convert.',
                  },
                  {
                    title: 'Align SEO with your business goals',
                    desc: 'Whether you want more direct bookings, less platform dependency, or both — the strategy matches.',
                  },
                  {
                    title: 'Combine visibility with conversion',
                    desc: 'Ranking is only half the job. Getting visitors to book is where the real work happens.',
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
                  'Traffic with genuine booking intent',
                  'Pages built to rank and convert',
                  'Local visibility in key UK markets',
                  'Less reliance on OTA algorithms',
                  'A system that compounds over time',
                  'Measurable, trackable results',
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
              Platform-Only Growth vs Organic Growth System
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              The difference between renting space on a platform and owning your visibility.
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
                    SEO &amp; Organic Growth ✓
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Booking source', 'Platform dependent', 'Independent'],
                  ['Traffic control', 'No control', 'Full control'],
                  ['Growth horizon', 'Short-term', 'Long-term'],
                  ['Brand presence', 'Limited branding', 'Strong presence'],
                  ['Guest relationship', 'Belongs to platform', 'Belongs to you'],
                  [
                    'Algorithm risk',
                    'High — you follow their rules',
                    'Low — you own your visibility',
                  ],
                ].map(([area, platform, organic], i) => (
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
                        {organic}
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
              ['Booking source', 'Dependent', 'Independent'],
              ['Traffic control', 'No control', 'Full control'],
              ['Growth horizon', 'Short-term', 'Long-term'],
              ['Brand presence', 'Limited', 'Strong'],
              ['Guest ownership', 'Platform', 'You'],
              ['Algorithm risk', 'High', 'Low'],
            ].map(([area, platform, organic]) => (
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
                    <p className="text-[10px] text-primary mb-1 font-bold">Organic Growth</p>
                    <p className="text-xs text-base-content/80 font-semibold">{organic}</p>
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
                title: 'Hosts building direct booking systems',
                desc: "You've got a website and booking engine — now you need the traffic to make them work.",
              },
              {
                icon: <Layers className="w-5 h-5 text-primary" />,
                title: 'Serviced accommodation businesses',
                desc: 'Operating professionally and ready to invest in a long-term visibility strategy.',
              },
              {
                icon: <BarChart2 className="w-5 h-5 text-primary" />,
                title: 'Operators looking for long-term growth',
                desc: "You're done with short-term fixes. You want a system that builds over time.",
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-primary" />,
                title: 'Hosts wanting control over bookings',
                desc: 'You want to own the relationship with your guests — not rent it through a platform.',
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
            <Search className="w-3.5 h-3.5" />
            <span>Start Growing</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-[1.12]">
            Ready to Grow{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Beyond Platforms?
            </span>
          </h2>

          <p className="text-lg text-base-content/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s build a system that brings in bookings consistently without relying only on
            OTAs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="pulse-cta-sog btn btn-primary btn-lg rounded-full px-10 gap-2 font-semibold shadow-xl shadow-primary/30 hover:shadow-primary/55 transition-all duration-200"
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
