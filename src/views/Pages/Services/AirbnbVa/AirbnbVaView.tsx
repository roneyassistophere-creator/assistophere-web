import React from 'react'
import type { Page } from '@/payload-types'
import Link from 'next/link'
import {
  MessageSquare,
  CalendarCheck,
  Star,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Layers,
  BarChart3,
  Wrench,
  TrendingUp,
  Clock,
  MapPin,
  Zap,
  Home,
  Users,
  ShieldCheck,
  Settings,
} from 'lucide-react'
import { FaqItem } from './FaqItem'

const services = [
  {
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
    title: 'Guest Communication',
    items: [
      'Pre-booking enquiries',
      'Check-in instructions',
      'During-stay support',
      'Issue resolution',
      'Review follow-ups',
    ],
    outcome: 'Guests are handled professionally without delays.',
  },
  {
    icon: <Wrench className="w-6 h-6 text-primary" />,
    title: 'Cleaning & Maintenance Coordination',
    items: [
      'Cleaner scheduling',
      'Turnover tracking',
      'Maintenance reporting',
      'Contractor communication',
    ],
    outcome: 'No missed cleans, no last-minute stress.',
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    title: 'Listing Optimisation',
    items: ['Titles and descriptions', 'Image guidance', 'Conversion improvements'],
    outcome: 'Listings that attract and convert more bookings.',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    title: 'Pricing & Calendar Support',
    items: ['Monitoring gaps', 'Adjusting pricing logic', 'Calendar management'],
    outcome: 'Better occupancy and revenue stability.',
  },
  {
    icon: <Settings className="w-6 h-6 text-primary" />,
    title: 'Backend Systems',
    items: ['SOP creation', 'Workflow setup', 'Process improvements'],
    outcome: "A structured business that doesn't rely on you constantly.",
  },
]

const faqs = [
  {
    q: 'What does an Airbnb virtual assistant do?',
    a: 'An Airbnb VA handles the operational side of your short-term rental business — guest communication, cleaning coordination, listing management, pricing support, and backend systems — so you can focus on growth rather than day-to-day tasks.',
  },
  {
    q: 'Do you handle guest communication fully?',
    a: 'Yes. We manage enquiries, pre-arrival messages, check-in instructions, in-stay support, and review follow-ups. Guests receive prompt, professional responses at all times.',
  },
  {
    q: 'Can you manage multiple properties?',
    a: 'Absolutely. Our service is built for hosts with 2 or more listings. We scale alongside your portfolio without the operational chaos that typically follows.',
  },
  {
    q: 'Do you support pricing decisions?',
    a: 'We monitor your calendar, identify gaps, and support pricing adjustments to improve occupancy and revenue consistency. We work within your pricing strategy.',
  },
  {
    q: 'How quickly do you respond?',
    a: "We operate within agreed response windows tailored to your setup. For guest-facing communication, we ensure guests aren't left waiting.",
  },
]

export const AirbnbVaView: React.FC<{ page: Page }> = () => {
  return (
    <article className="flex flex-col w-full overflow-x-hidden font-sans text-base-content selection:bg-primary/20">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .av-fade-1 { animation: fadeUp 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) both; }
        .av-fade-2 { animation: fadeUp 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .av-fade-3 { animation: fadeUp 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both; }
        .av-fade-4 { animation: fadeUp 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both; }
        .av-fade-5 { animation: fadeUp 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) both; }
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
        {/* Layered ambient glows */}
        <div className="absolute top-0 left-0 w-[60%] h-[80%] bg-linear-to-br from-primary/14 via-primary/5 to-transparent rounded-full blur-[140px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[45%] h-[60%] bg-linear-to-tl from-secondary/12 via-secondary/4 to-transparent rounded-full blur-[100px] -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[50%] bg-primary/3 rounded-full blur-[180px] -z-10" />

        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Copy */}
            <div>
              {/* Badge */}
              <div className="av-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-6 shadow-sm shadow-primary/10">
                <MapPin className="w-3.5 h-3.5" />
                <span>UK Airbnb Virtual Assistant</span>
              </div>

              <h1 className="av-fade-2 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-tight mb-6">
                Airbnb Virtual Assistant Services in the UK That{' '}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary to-secondary">
                    Actually Run
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-linear-to-r from-primary to-secondary rounded-full opacity-40" />
                </span>{' '}
                Your Operations
              </h1>

              <p className="av-fade-3 text-base lg:text-lg text-base-content/65 leading-relaxed mb-4 max-w-lg">
                Assistophere provides Airbnb virtual assistant services for UK hosts — handling
                guest communication, cleaning coordination, listing optimisation, pricing support,
                and backend systems so your short-term rental business runs smoothly without
                constant involvement.
              </p>

              {/* AI-extractable definition */}
              <div className="av-fade-3 mb-8 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm text-base-content/60 leading-relaxed italic">
                An Airbnb virtual assistant helps manage daily operations such as guest messaging,
                listings, pricing, and coordination — allowing hosts to save time and scale more
                efficiently.
              </div>

              <div className="av-fade-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="pulse-cta btn btn-primary btn-lg rounded-full px-8 gap-2 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/45 transition-all duration-200"
                >
                  <CalendarCheck className="w-5 h-5" />
                  Book a Discovery Call
                </Link>
                <a
                  href="#what-we-handle"
                  className="btn btn-outline btn-lg rounded-full px-8 gap-2 font-semibold border-base-300 hover:bg-base-200 transition-all duration-200"
                >
                  See What We Handle
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust bar */}
              <div className="av-fade-5 flex items-center gap-4 mt-8 pt-8 border-t border-base-300/60">
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
                  <p className="text-xs text-base-content/45">Trusted by UK STR hosts</p>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="av-fade-5 relative">
              <div className="relative rounded-3xl overflow-hidden aspect-4/3 bg-base-200 border border-base-300 shadow-2xl shadow-black/40 flex items-center justify-center">
                <div className="absolute inset-0 bg-linear-to-br from-primary/12 via-transparent to-secondary/8" />
                <div className="relative z-10 flex flex-col items-center gap-3 text-center p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/12 border border-primary/25 flex items-center justify-center">
                    <Home className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-base-content/35 text-sm">
                    Image Placeholder — STR Dashboard / Operations Overview
                  </p>
                </div>
                {/* Floating stat cards */}
                <div className="absolute top-4 right-4 bg-base-100/90 backdrop-blur-sm border border-base-300 rounded-xl px-3 py-2 shadow-lg">
                  <p className="text-[10px] text-base-content/40 font-medium">Avg. Response</p>
                  <p className="text-sm font-extrabold text-primary">{'< 15 min'}</p>
                </div>
                <div className="absolute bottom-4 left-4 bg-base-100/90 backdrop-blur-sm border border-base-300 rounded-xl px-3 py-2 shadow-lg">
                  <p className="text-[10px] text-base-content/40 font-medium">Occupancy</p>
                  <p className="text-sm font-extrabold text-success">+18% avg</p>
                </div>
              </div>
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-primary/8 rounded-full blur-[80px] -z-10 scale-75" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: WHAT IS AN AIRBNB VA (SEO) ───────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-16 lg:py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-5">
            <Zap className="w-3.5 h-3.5" />
            <span>Quick Definition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            What Is an Airbnb Virtual Assistant?
          </h2>
          <p className="text-base-content/65 text-lg leading-relaxed mb-5">
            An Airbnb virtual assistant supports the day-to-day running of a short-term rental
            business remotely. This includes handling guest communication, managing bookings,
            coordinating cleaning and maintenance, optimising listings, and supporting pricing
            decisions.
          </p>
          <p className="text-base-content/55 text-base leading-relaxed">
            For UK hosts managing multiple listings, this allows operations to run consistently
            without requiring constant attention.
          </p>
          {/* Keyword chips */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              'Guest Communication',
              'Listing Optimisation',
              'Cleaning Coordination',
              'Pricing Support',
              'OTA Management',
              'STR Systems',
            ].map((kw) => (
              <span
                key={kw}
                className="px-3 py-1.5 rounded-full bg-base-100 border border-base-300 text-xs font-medium text-base-content/55"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: THE REAL PROBLEM ─────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-5">
                <Clock className="w-3.5 h-3.5" />
                <span>The Problem</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                Why Most Hosts Start Looking for an Airbnb VA
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed mb-3">
                As your bookings increase, so does the workload.
              </p>
              <p className="text-base-content/60 text-base leading-relaxed mb-8">
                What starts as a side income quickly turns into a full-time operational role.
              </p>
            </div>

            {/* Pain cards */}
            <div className="flex flex-col gap-3">
              {[
                { pain: 'Guests messaging at all hours', drain: 'Sleep & personal time' },
                { pain: 'Cleaners needing constant coordination', drain: 'Mental bandwidth' },
                { pain: 'Maintenance issues interrupting stays', drain: 'Guest satisfaction' },
                { pain: 'Listings not converting as they should', drain: 'Revenue' },
                { pain: 'Pricing left unmonitored', drain: 'Occupancy' },
                { pain: 'No structured backend', drain: 'Scalability' },
              ].map((item) => (
                <div
                  key={item.pain}
                  className="flex items-center gap-4 p-4 rounded-xl bg-base-200 border border-base-300 hover:border-error/30 transition-colors group"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-error/10 border border-error/20 flex items-center justify-center">
                    <XCircle className="w-4 h-4 text-error/70" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-base-content/75">{item.pain}</p>
                  </div>
                  <div className="shrink-0 px-2.5 py-1 rounded-full bg-base-300/60 text-xs text-base-content/35 font-medium whitespace-nowrap">
                    costs: {item.drain}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing line */}
          <div className="mt-12 rounded-2xl p-6 lg:p-8 border border-base-300 bg-base-200 text-center">
            <p className="text-base-content/50 text-lg mb-2">The issue isn&apos;t demand.</p>
            <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              It&apos;s everything that comes with it.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: WHAT WE ACTUALLY DO ─────────────────────────── */}
      <section id="what-we-handle" className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Settings className="w-3.5 h-3.5" />
              <span>Full Service Breakdown</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Our Airbnb Virtual Assistant Services Cover
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              Everything your STR business needs to run smoothly — handled end to end.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className={`group relative flex flex-col gap-4 p-6 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300 ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/3 transition-colors duration-300" />
                <div className="relative z-10 flex flex-col gap-4 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/18 transition-colors">
                      {svc.icon}
                    </div>
                    <h3 className="font-bold text-base-content text-base leading-tight">
                      {svc.title}
                    </h3>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {svc.items.map((item) => (
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
                        {svc.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: SYSTEM THINKING ──────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual diagram */}
            <div className="relative rounded-3xl p-8 bg-base-200 border border-base-300 shadow-xl shadow-black/15">
              <p className="text-xs font-bold text-base-content/35 uppercase tracking-widest mb-6">
                Isolated vs. Connected
              </p>
              {/* Isolated — scattered */}
              <div className="mb-6">
                <p className="text-xs text-error/60 font-semibold mb-3 flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5" /> Task-by-task (breaks down)
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Comms', 'Cleaning', 'Pricing', 'Listings'].map((t) => (
                    <div
                      key={t}
                      className="px-3 py-1.5 rounded-lg border border-error/20 bg-error/5 text-xs text-base-content/40 font-medium"
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-px bg-base-300 mb-6" />
              {/* Connected — system */}
              <div>
                <p className="text-xs text-primary font-semibold mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> One system (runs properly)
                </p>
                <div className="relative flex items-center justify-center gap-0 flex-wrap">
                  {['Comms', 'Cleaning', 'Pricing', 'Listings'].map((t, i, arr) => (
                    <React.Fragment key={t}>
                      <div className="px-3 py-2 rounded-lg border border-primary/30 bg-primary/10 text-xs text-primary font-semibold">
                        {t}
                      </div>
                      {i < arr.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-primary/40 mx-1" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-5">
                <Layers className="w-3.5 h-3.5" />
                <span>Why It Matters</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                Why Most Airbnb VAs Don&apos;t Work Long-Term
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed mb-4">
                Many virtual assistants handle isolated tasks. But short-term rental operations are
                connected.
              </p>
              <p className="text-base-content/60 leading-relaxed mb-8">
                If communication, cleaning, pricing, and listings aren&apos;t aligned, problems keep
                repeating.
              </p>
              <div className="rounded-2xl p-6 bg-linear-to-br from-primary/12 via-base-200 to-secondary/8 border border-primary/20 shadow-lg shadow-primary/8">
                <p className="text-xl font-black text-base-content mb-2">
                  We don&apos;t work task by task.
                </p>
                <p className="text-xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  We manage your operations as one system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: HOW WE WORK ───────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>The Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              How Our Airbnb VA Service Works
            </h2>
          </div>

          <div className="relative flex flex-col gap-0">
            <div className="absolute left-6 sm:left-7 top-10 bottom-10 w-px bg-base-300 z-0" />
            {[
              {
                n: '01',
                title: 'Understand your setup',
                desc: "We start by mapping your current operations — how you're running things, where the friction is, and what's working.",
              },
              {
                n: '02',
                title: 'Identify operational gaps',
                desc: 'We pinpoint exactly where time is being lost, where guests are falling through, and where revenue is slipping.',
              },
              {
                n: '03',
                title: 'Build structure',
                desc: 'We create clear workflows, communication templates, and coordination processes tailored to your properties.',
              },
              {
                n: '04',
                title: 'Manage daily operations',
                desc: 'We take over the operational load — guests, cleaners, listings, pricing — so your business runs without depending on you.',
              },
              {
                n: '05',
                title: 'Improve performance over time',
                desc: 'We continuously track patterns, refine processes, and optimise performance so your business gets stronger month after month.',
              },
            ].map((step, i, arr) => (
              <div
                key={step.n}
                className={`relative flex gap-5 ${i < arr.length - 1 ? 'pb-10' : ''}`}
              >
                <div className="relative z-10 shrink-0 flex flex-col items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/12 border-2 border-primary/30 flex items-center justify-center shadow-md shadow-primary/12">
                    <span className="text-primary font-extrabold text-sm">{step.n}</span>
                  </div>
                </div>
                <div className="flex-1 pt-2.5">
                  <h3 className="font-bold text-base-content text-lg mb-1.5">{step.title}</h3>
                  <p className="text-base-content/55 text-sm leading-relaxed max-w-prose">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: UK FOCUS ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-5">
                <MapPin className="w-3.5 h-3.5" />
                <span>UK-Based Support</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                Supporting Airbnb Hosts Across the UK
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed mb-8">
                We support hosts across London, Manchester, Birmingham, and other UK cities —
                helping serviced accommodation businesses manage daily operations, improve listing
                performance, and build stronger systems.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'UK time-zone aligned operations',
                  'Understanding of Airbnb UK market dynamics',
                  'Experience with UK serviced accommodation regulations',
                  'Remote support that feels like in-house management',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-base-content/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* UK city badges */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl p-5 bg-base-200 border border-base-300">
                <p className="text-xs text-base-content/40 uppercase tracking-widest font-semibold mb-4">
                  Active in
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'London',
                    'Manchester',
                    'Birmingham',
                    'Leeds',
                    'Bristol',
                    'Edinburgh',
                    'Liverpool',
                    'Glasgow',
                    '+ More',
                  ].map((city) => (
                    <span
                      key={city}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-base-100 border border-base-300 text-xs font-medium text-base-content/60 hover:border-primary/35 hover:text-primary/80 transition-colors"
                    >
                      <MapPin className="w-2.5 h-2.5" />
                      {city}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Response Time', value: '< 15 min', sub: 'Average guest response' },
                  { label: 'Hosts Supported', value: '30+', sub: 'Across UK' },
                  { label: 'Occupancy Uplift', value: '+18%', sub: 'Avg. improvement' },
                  { label: 'Listings Managed', value: '50+', sub: 'Active properties' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-4 bg-base-200 border border-base-300 text-center"
                  >
                    <p className="text-2xl font-extrabold text-primary">{stat.value}</p>
                    <p className="text-xs font-semibold text-base-content/60 mt-0.5">
                      {stat.label}
                    </p>
                    <p className="text-[10px] text-base-content/35 mt-0.5">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: COMPARISON TABLE ─────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Side-by-Side</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              DIY vs Generic VA vs Assistophere
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              Not all support is the same. Here&apos;s the real difference.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden sm:block rounded-3xl overflow-hidden border border-base-300 shadow-2xl shadow-black/20">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="py-4 px-6 text-left bg-base-300/50 text-base-content/45 font-semibold uppercase text-xs tracking-wider w-[26%]">
                    Area
                  </th>
                  <th className="py-4 px-6 text-left bg-base-300/50 text-base-content/45 font-semibold uppercase text-xs tracking-wider w-[24%]">
                    DIY Host
                  </th>
                  <th className="py-4 px-6 text-left bg-base-300/50 text-base-content/45 font-semibold uppercase text-xs tracking-wider w-[25%]">
                    Generic VA
                  </th>
                  <th className="py-4 px-6 text-left bg-primary/15 text-primary font-bold uppercase text-xs tracking-wider w-[25%]">
                    Assistophere ✓
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Management style', 'Time-consuming', 'Task-based', 'System-based'],
                  ['Response approach', 'Reactive', 'Limited scope', 'Full operations'],
                  ['Backend structure', 'No structure', 'Partial support', 'Structured backend'],
                  ['Scalability', 'Hard to scale', 'Inconsistent', 'Built to scale'],
                  ['Owner dependency', 'Everything on you', 'Still high', 'Significantly reduced'],
                ].map(([area, diy, gva, us], i) => (
                  <tr key={area} className={i % 2 === 0 ? 'bg-base-100' : 'bg-base-200/40'}>
                    <td className="py-3.5 px-6 font-medium text-base-content/60 border-r border-base-300 text-xs uppercase tracking-wide">
                      {area}
                    </td>
                    <td className="py-3.5 px-6 text-base-content/45 border-r border-base-300">
                      <span className="flex items-center gap-2">
                        <XCircle className="w-3.5 h-3.5 text-error/40 shrink-0" />
                        {diy}
                      </span>
                    </td>
                    <td className="py-3.5 px-6 text-base-content/45 border-r border-base-300">
                      <span className="flex items-center gap-2">
                        <XCircle className="w-3.5 h-3.5 text-warning/50 shrink-0" />
                        {gva}
                      </span>
                    </td>
                    <td className="py-3.5 px-6 text-base-content/85 font-semibold bg-primary/5">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        {us}
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
              ['Management style', 'Time-consuming', 'Task-based', 'System-based'],
              ['Response approach', 'Reactive', 'Limited scope', 'Full operations'],
              ['Backend structure', 'No structure', 'Partial support', 'Structured backend'],
              ['Scalability', 'Hard to scale', 'Inconsistent', 'Built to scale'],
              ['Owner dependency', 'Everything on you', 'Still high', 'Significantly reduced'],
            ].map(([area, diy, gva, us]) => (
              <div key={area} className="rounded-2xl overflow-hidden border border-base-300">
                <div className="px-4 py-2.5 bg-base-300/60 text-xs font-bold text-base-content/40 uppercase tracking-wider">
                  {area}
                </div>
                <div className="grid grid-cols-3">
                  <div className="px-3 py-3 border-r border-base-300 bg-base-100">
                    <p className="text-[10px] text-base-content/35 mb-1">DIY</p>
                    <p className="text-xs text-base-content/45">{diy}</p>
                  </div>
                  <div className="px-3 py-3 border-r border-base-300 bg-base-100">
                    <p className="text-[10px] text-base-content/35 mb-1">Generic VA</p>
                    <p className="text-xs text-base-content/45">{gva}</p>
                  </div>
                  <div className="px-3 py-3 bg-primary/8">
                    <p className="text-[10px] text-primary mb-1 font-bold">Assistophere</p>
                    <p className="text-xs text-base-content/80 font-semibold">{us}</p>
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>Right Fit</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Who This Service Is Built For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <Home className="w-5 h-5 text-primary" />,
                title: 'Hosts with multiple listings',
                desc: '2+ properties and growing — the complexity demands proper operational support.',
              },
              {
                icon: <BarChart3 className="w-5 h-5 text-primary" />,
                title: 'Serviced accommodation businesses',
                desc: 'Operating at a business level and needing consistent, professional management.',
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-primary" />,
                title: 'Operators scaling portfolios',
                desc: 'Adding properties and needing systems that grow without breaking down.',
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-primary" />,
                title: 'People tired of managing everything',
                desc: "You want the income without being on-call 24/7. That's what we're built for.",
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
                    <p className="text-xs text-base-content/35">STR Host, UK</p>
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
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/22 via-base-200 to-secondary/15 -z-10" />
        <div className="absolute inset-0 bg-base-100/55 -z-10" />
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-linear-to-b from-primary/12 to-transparent rounded-full blur-[130px] -z-10" />

        <div className="container max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-medium mb-6">
            <Zap className="w-3.5 h-3.5" />
            <span>Ready to Hand It Over?</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-[1.12]">
            Ready to Stop Managing{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Everything Yourself?
            </span>
          </h2>

          <p className="text-lg text-base-content/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s build a system that runs your Airbnb business properly — without you having
            to be involved in everything.
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
            Free 30-min discovery call · No commitment · UK-based support
          </p>
        </div>
      </section>
    </article>
  )
}
