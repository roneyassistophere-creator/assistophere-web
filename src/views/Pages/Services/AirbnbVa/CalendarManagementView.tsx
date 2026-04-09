import React from 'react'
import type { Page } from '@/payload-types'
import Link from 'next/link'
import {
  CalendarDays,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Star,
  AlertTriangle,
  Activity,
  BarChart2,
  Layers,
  Users,
  Zap,
  RefreshCw,
  Settings,
  TrendingUp,
  Clock,
  Search,
  ThumbsDown,
  ThumbsUp,
  CalendarCheck,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react'
import { FaqItem } from './FaqItem'

const faqs = [
  {
    q: 'How often do you manage calendars?',
    a: 'We review and update calendars on a regular, ongoing basis — not just during initial setup. Calendar management is an active, continuous process that responds to booking patterns, gaps, and performance.',
  },
  {
    q: 'Can you reduce booking gaps?',
    a: 'Yes. Gap reduction is a core part of calendar management. We identify short gaps, adjust minimum night settings, and apply booking window changes to increase the likelihood of those dates being filled.',
  },
  {
    q: 'Do you sync across platforms?',
    a: 'Yes. We align availability across platforms to prevent conflicts and double bookings. Multi-platform sync is included as part of the ongoing calendar management service.',
  },
  {
    q: 'Can you manage multiple listings?',
    a: 'Absolutely. We manage calendars across multiple listings simultaneously, applying consistent strategies while adapting to the individual performance of each property.',
  },
]

const whatWeHandle = [
  {
    icon: <CalendarDays className="w-5 h-5 text-primary" />,
    title: 'Availability Control',
    points: [
      'Opening and blocking specific dates',
      'Managing booking windows',
      'Controlling listing visibility',
    ],
  },
  {
    icon: <Search className="w-5 h-5 text-primary" />,
    title: 'Gap Management',
    points: [
      'Identifying short gaps between bookings',
      'Adjusting stay requirements to fill gaps',
      'Improving overall fill rate',
    ],
  },
  {
    icon: <Settings className="w-5 h-5 text-primary" />,
    title: 'Minimum Night Strategy',
    points: [
      'Flexible stay lengths based on demand',
      'Adapting rules to reduce booking friction',
      'Balancing short and long stays strategically',
    ],
  },
  {
    icon: <RefreshCw className="w-5 h-5 text-primary" />,
    title: 'Multi-Platform Sync',
    points: [
      'Aligning availability across all active platforms',
      'Preventing double bookings and conflicts',
      'Keeping all channels consistent in real time',
    ],
  },
  {
    icon: <Activity className="w-5 h-5 text-primary" />,
    title: 'Ongoing Monitoring',
    points: [
      'Regular calendar performance reviews',
      'Adjusting rules based on booking data',
      'Proactive management rather than reactive fixes',
    ],
  },
]

const calendarSteps = [
  { label: 'Current Availability Reviewed', icon: <CalendarDays className="w-5 h-5" /> },
  { label: 'Upcoming Gaps Identified', icon: <Search className="w-5 h-5" /> },
  { label: 'Strategy Applied (Pricing + Rules)', icon: <Settings className="w-5 h-5" /> },
  { label: 'Booking Window Adjusted', icon: <Clock className="w-5 h-5" /> },
  { label: 'Calendar Updated', icon: <RefreshCw className="w-5 h-5" /> },
  { label: 'Performance Monitored', icon: <TrendingUp className="w-5 h-5" /> },
]

export const CalendarManagementView: React.FC<{ page: Page }> = () => {
  return (
    <article className="flex flex-col w-full overflow-x-hidden font-sans text-base-content selection:bg-primary/20">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpCM {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cm-fade-1 { animation: fadeUpCM 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) both; }
        .cm-fade-2 { animation: fadeUpCM 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .cm-fade-3 { animation: fadeUpCM 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both; }
        .cm-fade-4 { animation: fadeUpCM 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both; }
        .cm-fade-5 { animation: fadeUpCM 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes pulse-ring-cm {
          0%   { box-shadow: 0 0 0 0 oklch(var(--p)/0.35); }
          70%  { box-shadow: 0 0 0 12px oklch(var(--p)/0); }
          100% { box-shadow: 0 0 0 0 oklch(var(--p)/0); }
        }
        .pulse-cta-cm { animation: pulse-ring-cm 2.5s ease-out infinite; }
      `,
        }}
      />

      {/* SECTION 1: HERO */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-[60%] h-[80%] bg-linear-to-br from-primary/13 via-primary/4 to-transparent rounded-full blur-[140px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[45%] h-[60%] bg-linear-to-tl from-secondary/12 via-secondary/4 to-transparent rounded-full blur-[100px] -z-10" />

        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="cm-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-6 shadow-sm shadow-primary/10">
                <CalendarDays className="w-3.5 h-3.5" />
                <span>Calendar Management · UK</span>
              </div>

              <h1 className="cm-fade-2 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-tight mb-6">
                Airbnb Calendar Management That{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Keeps Your Bookings Consistent
                </span>
              </h1>

              <p className="cm-fade-3 text-base lg:text-lg text-base-content/65 leading-relaxed mb-4 max-w-lg">
                Assistophere manages your calendar across platforms, helping UK hosts reduce gaps,
                improve occupancy, and keep bookings flowing smoothly.
              </p>

              <div className="cm-fade-3 mb-8 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm text-base-content/60 leading-relaxed italic">
                Calendar management in short term rentals involves controlling availability,
                adjusting booking windows, and reducing gaps to improve occupancy and revenue.
              </div>

              <div className="cm-fade-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="pulse-cta-cm btn btn-primary btn-lg rounded-full px-8 gap-2 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/45 transition-all duration-200"
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

              <div className="cm-fade-5 flex items-center gap-4 mt-8 pt-8 border-t border-base-300/60">
                <div className="flex -space-x-2">
                  {['JT', 'SK', 'OM', 'PB'].map((i) => (
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

            {/* Hero visual: calendar dashboard */}
            <div className="cm-fade-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-base-200 border border-base-300 shadow-2xl shadow-black/40 p-7">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/6" />
                <p className="relative z-10 text-xs font-bold text-base-content/30 uppercase tracking-widest mb-5">
                  Calendar Overview — October
                </p>
                <div className="relative z-10 grid grid-cols-7 gap-1 mb-4">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                    <div key={i} className="text-center text-[10px] font-bold text-base-content/30 py-1">
                      {d}
                    </div>
                  ))}
                  {[
                    { n: '', t: 'empty' }, { n: '1', t: 'booked' }, { n: '2', t: 'booked' },
                    { n: '3', t: 'booked' }, { n: '4', t: 'booked' }, { n: '5', t: 'gap' },
                    { n: '6', t: 'gap' }, { n: '7', t: 'booked' }, { n: '8', t: 'booked' },
                    { n: '9', t: 'booked' }, { n: '10', t: 'booked' }, { n: '11', t: 'booked' },
                    { n: '12', t: 'booked' }, { n: '13', t: 'booked' }, { n: '14', t: 'gap' },
                    { n: '15', t: 'gap' }, { n: '16', t: 'booked' }, { n: '17', t: 'booked' },
                    { n: '18', t: 'booked' }, { n: '19', t: 'booked' }, { n: '20', t: 'booked' },
                    { n: '21', t: 'booked' }, { n: '22', t: 'booked' }, { n: '23', t: 'booked' },
                    { n: '24', t: 'booked' }, { n: '25', t: 'booked' }, { n: '26', t: 'booked' },
                    { n: '27', t: 'booked' }, { n: '28', t: 'booked' }, { n: '29', t: 'booked' },
                    { n: '30', t: 'booked' }, { n: '31', t: 'booked' },
                  ].map((day, i) => (
                    <div
                      key={i}
                      className={`rounded-md aspect-square flex items-center justify-center text-[11px] font-semibold ${
                        day.t === 'empty' ? 'bg-transparent' :
                        day.t === 'booked' ? 'bg-primary/20 text-primary' :
                        'bg-error/15 text-error'
                      }`}
                    >
                      {day.n}
                    </div>
                  ))}
                </div>
                <div className="relative z-10 flex gap-4 mt-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-sm bg-primary/20" />
                    <span className="text-[10px] text-base-content/40">Booked</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-sm bg-error/15" />
                    <span className="text-[10px] text-base-content/40">Gap (manageable)</span>
                  </div>
                </div>
                <p className="relative z-10 text-[10px] text-base-content/25 mt-4 text-center">
                  Active calendar management — gaps identified and reduced
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-content text-xs font-bold px-4 py-2 rounded-2xl shadow-lg shadow-primary/30">
                Gaps actively managed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: BOLD STATEMENT */}
      <section className="bg-base-200 border-y border-base-300 py-16 lg:py-20">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Empty nights are lost revenue.
          </p>
          <p className="text-lg text-base-content/55 leading-relaxed">
            Every gap in your calendar is a missed opportunity. Most of them are preventable.
          </p>
        </div>
      </section>

      {/* SECTION 3: CLARITY */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-6">
            <CalendarDays className="w-3.5 h-3.5" />
            <span>What It Means</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            Your Calendar Is More Than Availability
          </h2>
          <p className="text-base-content/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Your calendar directly controls how your listing performs. Without structure, it works
            against you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Clock className="w-6 h-6 text-primary" />, text: 'When guests can book' },
              { icon: <CalendarDays className="w-6 h-6 text-primary" />, text: 'How long they can stay' },
              { icon: <TrendingUp className="w-6 h-6 text-primary" />, text: 'How your pricing behaves' },
              { icon: <BarChart2 className="w-6 h-6 text-primary" />, text: 'How your listing performs' },
            ].map((item) => (
              <div
                key={item.text}
                className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-base-200 border border-base-300 hover:border-primary/30 transition-colors text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="font-semibold text-sm text-base-content/80 leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: THE REAL PROBLEM */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-4">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>The Problem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Why Calendar Gaps Keep Appearing
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              {
                label: 'Poor availability setup',
                desc: 'Availability configured once at setup and never revisited creates structural gaps.',
              },
              {
                label: 'No gap strategy',
                desc: 'Without a plan to address short gaps, they go unfilled and revenue is lost.',
              },
              {
                label: 'Fixed minimum nights',
                desc: 'Rigid stay requirements create short gaps that no booking can fill.',
              },
              {
                label: 'Lack of monitoring',
                desc: 'Calendars left unreviewed miss patterns that could be addressed early.',
              },
              {
                label: 'Disconnected platforms',
                desc: 'Out-of-sync availability across platforms leads to conflicts and missed bookings.',
              },
              {
                label: 'Reactive instead of strategic',
                desc: 'Responding to gaps after they appear is far less effective than preventing them.',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex gap-3 p-5 rounded-2xl bg-base-100 border border-base-300 hover:border-error/30 transition-colors"
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
            <p className="text-base-content/50 italic text-base border-l-4 border-error/30 pl-5">
              Gaps don&apos;t happen randomly. They happen because the calendar isn&apos;t managed
              properly.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS FLOW */}
      <section id="how-it-works" className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <Activity className="w-3.5 h-3.5" />
              <span>The Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              How Calendar Management Works
            </h2>
          </div>

          {/* Desktop horizontal flow */}
          <div className="hidden md:flex items-stretch justify-center gap-0 mb-10">
            {calendarSteps.map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center text-center max-w-36 px-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-3 shrink-0">
                    {step.icon}
                  </div>
                  <p className="text-xs font-medium text-base-content/70 leading-snug">
                    {step.label}
                  </p>
                </div>
                {i < calendarSteps.length - 1 && (
                  <div className="flex items-start pt-4 px-1">
                    <ArrowRight className="w-5 h-5 text-base-content/25" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile vertical */}
          <div className="flex flex-col items-center gap-0 md:hidden">
            {calendarSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center w-full max-w-xs">
                <div className="flex items-center gap-4 w-full">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>
                  <p className="text-sm font-medium text-base-content/75">{step.label}</p>
                </div>
                {i < calendarSteps.length - 1 && (
                  <div className="w-0.5 h-6 bg-base-300 my-1 ml-5" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHAT WE HANDLE */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>What We Cover</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Our Calendar Management Covers
            </h2>
            <p className="text-base-content/55 text-base max-w-xl mx-auto">
              A structured, ongoing approach — not a one-time setup.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatWeHandle.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 p-6 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-bold text-base text-base-content">{item.title}</h3>
                <ul className="flex flex-col gap-2">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex gap-2 items-start text-sm text-base-content/65">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 p-5 rounded-2xl bg-primary/8 border border-primary/20 text-center">
            <p className="text-base font-semibold text-base-content/75">
              👉 A calendar that works actively to increase bookings.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: BOLD INSIGHT BLOCK */}
      <section className="py-16 lg:py-20">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <div className="p-10 rounded-3xl bg-base-200 border border-base-300">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              A full calendar isn&apos;t luck.
            </p>
            <p className="text-xl text-base-content/55 font-semibold">It&apos;s managed.</p>
          </div>
        </div>
      </section>

      {/* SECTION 8: WITHOUT vs WITH */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>The Difference</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Changes When Your Calendar Is Managed Properly
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4 p-7 rounded-2xl bg-error/5 border border-error/20">
              <div className="flex items-center gap-2 mb-2">
                <ThumbsDown className="w-5 h-5 text-error" />
                <p className="font-bold text-base-content/70">Without Strategy</p>
              </div>
              {[
                'Random gaps across the calendar',
                'Inconsistent bookings month to month',
                'Missed revenue from unfilled nights',
                'Reactive decisions, not planned ones',
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <XCircle className="w-4 h-4 text-error shrink-0 mt-0.5" />
                  <p className="text-sm text-base-content/65 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 p-7 rounded-2xl bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <ThumbsUp className="w-5 h-5 text-primary" />
                <p className="font-bold text-base-content">With Active Management</p>
              </div>
              {[
                'Fewer empty nights and shorter gaps',
                'Stable, predictable occupancy',
                'Controlled booking flow throughout the month',
                'Better planning and forward visibility',
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-base-content/75 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: OUR APPROACH */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Our Approach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              How We Manage Calendars Properly
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <Activity className="w-5 h-5 text-primary" />,
                title: 'We monitor availability regularly',
                desc: 'Calendars are reviewed on an ongoing basis — not left to run on autopilot between bookings.',
              },
              {
                icon: <Search className="w-5 h-5 text-primary" />,
                title: 'We focus on gap reduction',
                desc: 'Short gaps are identified early and addressed through rule adjustments before they become revenue losses.',
              },
              {
                icon: <Settings className="w-5 h-5 text-primary" />,
                title: 'We adjust booking rules strategically',
                desc: 'Minimum nights, booking windows, and availability settings are adapted based on demand and performance data.',
              },
              {
                icon: <RefreshCw className="w-5 h-5 text-primary" />,
                title: 'We align calendars with pricing and listings',
                desc: 'Calendar management works alongside pricing strategy and listing optimisation — not in isolation.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 rounded-2xl bg-base-200 border border-base-300 hover:border-primary/30 transition-colors"
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
          <p className="mt-10 text-base-content/45 italic text-base border-t border-base-300/60 pt-6 text-center">
            &ldquo;We don&apos;t just manage availability. We manage how your bookings happen.&rdquo;
          </p>
        </div>
      </section>

      {/* SECTION 10: COMMON MISTAKES */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-4">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Common Mistakes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Where Calendar Management Goes Wrong
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              {
                point: 'Setting availability once and leaving it',
                detail: 'Calendars configured at setup and never revisited accumulate problems over time.',
              },
              {
                point: 'Rigid minimum nights',
                detail: 'Fixed minimum stay requirements create short gaps that go permanently unfilled.',
              },
              {
                point: 'Ignoring short gaps',
                detail: 'One or two-night gaps between bookings are often dismissed but add up to significant revenue loss.',
              },
              {
                point: 'Poor syncing across platforms',
                detail: 'Out-of-sync availability creates conflicts, double bookings, and missed opportunities.',
              },
              {
                point: 'No regular review',
                detail: 'Without a review cycle, issues compound and go unnoticed until they become expensive.',
              },
              {
                point: 'Treating the calendar as passive',
                detail: 'Calendars need active management, not passive setup. The difference shows in occupancy.',
              },
            ].map((item) => (
              <div
                key={item.point}
                className="flex gap-3 p-5 rounded-2xl bg-base-100 border border-base-300 hover:border-error/25 transition-colors"
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
            Calendars need active management, not passive setup.
          </p>
        </div>
      </section>

      {/* SECTION 11: COMPARISON TABLE */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <BarChart2 className="w-3.5 h-3.5" />
              <span>Comparison</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Unmanaged Calendar vs Managed Calendar
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
                      Unmanaged Calendar
                    </div>
                  </th>
                  <th className="px-6 py-4 bg-primary/12 text-left text-xs font-bold uppercase tracking-wider text-primary w-[37.5%]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Managed Calendar
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Gaps', 'Frequent empty nights', 'Filled nights'],
                  ['Bookings', 'Inconsistent', 'Stable occupancy'],
                  ['Approach', 'Reactive', 'Strategic'],
                  ['Structure', 'Disorganised', 'Structured & controlled'],
                ].map(([area, bad, good], i) => (
                  <tr key={area} className={i % 2 === 0 ? 'bg-base-100' : 'bg-base-200/50'}>
                    <td className="px-6 py-4 font-semibold text-base-content/60 text-xs uppercase tracking-wider">
                      {area}
                    </td>
                    <td className="px-6 py-4 text-base-content/50">{bad}</td>
                    <td className="px-6 py-4 text-base-content font-semibold bg-primary/5">
                      {good}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden flex flex-col gap-3">
            {[
              ['Gaps', 'Frequent empty nights', 'Filled nights'],
              ['Bookings', 'Inconsistent', 'Stable occupancy'],
              ['Approach', 'Reactive', 'Strategic'],
              ['Structure', 'Disorganised', 'Structured & controlled'],
            ].map(([area, bad, good]) => (
              <div key={area} className="rounded-2xl overflow-hidden border border-base-300">
                <div className="px-4 py-2.5 bg-base-300/60 text-xs font-bold text-base-content/40 uppercase tracking-wider">
                  {area}
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-3 py-3.5 border-r border-base-300 bg-base-100">
                    <p className="text-[10px] text-base-content/35 mb-1">Unmanaged</p>
                    <p className="text-xs text-base-content/50">{bad}</p>
                  </div>
                  <div className="px-3 py-3.5 bg-primary/8">
                    <p className="text-[10px] text-primary mb-1 font-bold">Managed</p>
                    <p className="text-xs text-base-content/80 font-semibold">{good}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: WHO THIS IS FOR */}
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
                icon: <CalendarDays className="w-5 h-5 text-primary" />,
                title: 'Hosts with calendar gaps',
                desc: 'If empty nights are appearing regularly, the calendar needs active management — not just availability settings.',
              },
              {
                icon: <Layers className="w-5 h-5 text-primary" />,
                title: 'Serviced accommodation businesses',
                desc: 'Professional STR operations need a structured calendar approach to maintain consistent occupancy.',
              },
              {
                icon: <Users className="w-5 h-5 text-primary" />,
                title: 'Operators managing multiple listings',
                desc: 'Keeping multiple calendars aligned, synced, and performing well requires a dedicated management process.',
              },
              {
                icon: <Zap className="w-5 h-5 text-primary" />,
                title: 'Hosts wanting better control',
                desc: 'Calendar management gives you visibility and control over how your bookings happen — without adding to your workload.',
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

      {/* SECTION 13: TESTIMONIALS */}
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
                    {['JT', 'SK', 'OM'][i - 1]}
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

      {/* SECTION 14: FAQ */}
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

      {/* SECTION 15: FINAL CTA */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/22 via-base-200 to-secondary/15 -z-10" />
        <div className="absolute inset-0 bg-base-100/55 -z-10" />
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-linear-to-b from-primary/12 to-transparent rounded-full blur-[130px] -z-10" />

        <div className="container max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-medium mb-6">
            <CalendarDays className="w-3.5 h-3.5" />
            <span>Take Control of Your Calendar</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-[1.12]">
            Ready to Take Control of{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Your Calendar?
            </span>
          </h2>

          <p className="text-lg text-base-content/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s turn your calendar into a system that drives bookings consistently.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="pulse-cta-cm btn btn-primary btn-lg rounded-full px-10 gap-2 font-semibold shadow-xl shadow-primary/30 hover:shadow-primary/55 transition-all duration-200"
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
