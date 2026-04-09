import React from 'react'
import type { Page } from '@/payload-types'
import Link from 'next/link'
import {
  Sparkles,
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
  ClipboardList,
  Clock,
  MessageSquare,
  ThumbsDown,
  ThumbsUp,
  CalendarCheck,
  ShieldCheck,
  RefreshCw,
  Bell,
  Search,
} from 'lucide-react'
import { FaqItem } from './FaqItem'

const faqs = [
  {
    q: 'Do you manage multiple cleaners?',
    a: 'Yes. We coordinate across multiple cleaning teams and individual cleaners simultaneously, ensuring each property is assigned and scheduled correctly for every turnover.',
  },
  {
    q: 'What happens if a clean is delayed?',
    a: 'We monitor turnover progress and respond to delays proactively. If a clean is running late, we manage communication and adjust where possible to minimise impact on the next guest arrival.',
  },
  {
    q: 'Can you handle last-minute changes?',
    a: 'Yes. Last-minute check-out time changes, booking adjustments, and schedule updates are all managed as part of the coordination process — not left to chance.',
  },
  {
    q: 'Do you track cleaning completion?',
    a: 'Yes. We track each turnover from check-out confirmation through to cleaning completion and property readiness, giving you full visibility and accountability at every stage.',
  },
]

const whatWeHandle = [
  {
    icon: <CalendarCheck className="w-5 h-5 text-primary" />,
    title: 'Cleaner Scheduling',
    points: [
      'Aligning cleans with booking check-out times',
      'Managing timings across all properties',
      'Adjusting schedules when bookings change',
    ],
  },
  {
    icon: <RefreshCw className="w-5 h-5 text-primary" />,
    title: 'Turnover Management',
    points: [
      'Tracking guest check-outs in real time',
      'Ensuring property is ready before next arrival',
      'Avoiding gaps and delays in turnovers',
    ],
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-primary" />,
    title: 'Communication with Cleaners',
    points: [
      'Sending clear instructions for each clean',
      'Confirming completion and updates',
      'Handling changes and last-minute adjustments',
    ],
  },
  {
    icon: <Bell className="w-5 h-5 text-primary" />,
    title: 'Issue Reporting',
    points: [
      'Identifying cleaning or property issues post-clean',
      'Escalating problems that need attention',
      'Ensuring resolution before guest arrival',
    ],
  },
  {
    icon: <Layers className="w-5 h-5 text-primary" />,
    title: 'Multi-Property Coordination',
    points: [
      'Managing multiple properties simultaneously',
      'Aligning separate teams and schedules',
      'Maintaining consistency across all units',
    ],
  },
]

const cleaningSteps = [
  { label: 'Guest Check-Out Confirmed', icon: <CalendarCheck className="w-5 h-5" /> },
  { label: 'Cleaner Notified', icon: <Bell className="w-5 h-5" /> },
  { label: 'Turnover Scheduled', icon: <ClipboardList className="w-5 h-5" /> },
  { label: 'Cleaning Completed', icon: <Sparkles className="w-5 h-5" /> },
  { label: 'Property Checked', icon: <Search className="w-5 h-5" /> },
  { label: 'Ready for Next Guest', icon: <ShieldCheck className="w-5 h-5" /> },
]

export const CleaningCoordinationView: React.FC<{ page: Page }> = () => {
  return (
    <article className="flex flex-col w-full overflow-x-hidden font-sans text-base-content selection:bg-primary/20">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpCC {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cc-fade-1 { animation: fadeUpCC 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) both; }
        .cc-fade-2 { animation: fadeUpCC 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .cc-fade-3 { animation: fadeUpCC 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both; }
        .cc-fade-4 { animation: fadeUpCC 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both; }
        .cc-fade-5 { animation: fadeUpCC 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes pulse-ring-cc {
          0%   { box-shadow: 0 0 0 0 oklch(var(--p)/0.35); }
          70%  { box-shadow: 0 0 0 12px oklch(var(--p)/0); }
          100% { box-shadow: 0 0 0 0 oklch(var(--p)/0); }
        }
        .pulse-cta-cc { animation: pulse-ring-cc 2.5s ease-out infinite; }
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
              <div className="cc-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-6 shadow-sm shadow-primary/10">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Cleaning Coordination · UK</span>
              </div>

              <h1 className="cc-fade-2 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-tight mb-6">
                Cleaning Coordination That Keeps Your{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Operations Running Smoothly
                </span>
              </h1>

              <p className="cc-fade-3 text-base lg:text-lg text-base-content/65 leading-relaxed mb-4 max-w-lg">
                Assistophere manages cleaning coordination for UK hosts, ensuring every turnover is
                on time, aligned with bookings, and handled without confusion.
              </p>

              <div className="cc-fade-3 mb-8 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm text-base-content/60 leading-relaxed italic">
                Cleaning coordination in short term rentals involves scheduling, aligning turnovers
                with bookings, and ensuring properties are ready for each guest arrival.
              </div>

              <div className="cc-fade-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="pulse-cta-cc btn btn-primary btn-lg rounded-full px-8 gap-2 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/45 transition-all duration-200"
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

              <div className="cc-fade-5 flex items-center gap-4 mt-8 pt-8 border-t border-base-300/60">
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

            {/* Hero visual: turnover schedule board */}
            <div className="cc-fade-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-base-200 border border-base-300 shadow-2xl shadow-black/40 p-7">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/6" />
                <p className="relative z-10 text-xs font-bold text-base-content/30 uppercase tracking-widest mb-5">
                  Today&apos;s Turnover Schedule
                </p>
                <div className="relative z-10 flex flex-col gap-3">
                  {[
                    {
                      property: 'Flat 3A — Manchester',
                      time: 'Check-out 10:00 · Clean 11:00',
                      status: 'Completed',
                      ok: 'done',
                    },
                    {
                      property: 'Studio — Leeds',
                      time: 'Check-out 11:00 · Clean 12:30',
                      status: 'In Progress',
                      ok: 'active',
                    },
                    {
                      property: '2-Bed — Birmingham',
                      time: 'Check-out 12:00 · Clean 13:00',
                      status: 'Scheduled',
                      ok: 'pending',
                    },
                    {
                      property: 'Apartment — London',
                      time: 'Check-out 14:00 · Clean 15:30',
                      status: 'Scheduled',
                      ok: 'pending',
                    },
                    {
                      property: 'Cottage — Edinburgh',
                      time: 'Check-out 10:30 · ⚠ Delayed',
                      status: 'Managed',
                      ok: 'warning',
                    },
                  ].map(({ property, time, status, ok }) => (
                    <div
                      key={property}
                      className="grid grid-cols-[1fr_auto] gap-2 items-center bg-base-100/60 rounded-xl px-4 py-3 border border-base-300/60"
                    >
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-base-content/80 truncate">
                          {property}
                        </p>
                        <p className="text-xs text-base-content/45 truncate">{time}</p>
                      </div>
                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0 ${
                          ok === 'done'
                            ? 'bg-primary/12 text-primary'
                            : ok === 'active'
                              ? 'bg-secondary/12 text-secondary'
                              : ok === 'warning'
                                ? 'bg-warning/12 text-warning'
                                : 'bg-base-300/60 text-base-content/40'
                        }`}
                      >
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="relative z-10 text-[10px] text-base-content/25 mt-5 text-center">
                  Every turnover tracked and coordinated
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-content text-xs font-bold px-4 py-2 rounded-2xl shadow-lg shadow-primary/30">
                Every turnover coordinated
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: BOLD STATEMENT */}
      <section className="bg-base-200 border-y border-base-300 py-16 lg:py-20">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            One missed clean can ruin the entire stay.
          </p>
          <p className="text-lg text-base-content/55 leading-relaxed">
            Cleaning isn&apos;t just preparation. It&apos;s what protects your reviews.
          </p>
        </div>
      </section>

      {/* SECTION 3: CLARITY */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>What It Means</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            Cleaning Is Not Just About the Cleaner
          </h2>
          <p className="text-base-content/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Cleaning sits at the intersection of multiple moving parts. Without coordination, even
            the best cleaner can fail.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <CalendarCheck className="w-6 h-6 text-primary" />, text: 'Guest check-outs' },
              { icon: <Users className="w-6 h-6 text-primary" />, text: 'New arrivals' },
              { icon: <ClipboardList className="w-6 h-6 text-primary" />, text: 'Maintenance needs' },
              { icon: <Activity className="w-6 h-6 text-primary" />, text: 'Overall operations' },
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
              Why Cleaning Coordination Breaks Down
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              {
                label: 'Unclear schedules',
                desc: 'Without a clear timetable, cleaners turn up at the wrong time or not at all.',
              },
              {
                label: 'Last-minute changes',
                desc: 'Booking changes that aren\'t communicated leave cleaners working off outdated information.',
              },
              {
                label: 'Cleaners not informed',
                desc: 'When teams don\'t receive proper instructions, standards vary and things get missed.',
              },
              {
                label: 'Delayed check-outs',
                desc: 'Late departures that aren\'t managed cascade into delayed cleans and unprepared properties.',
              },
              {
                label: 'No tracking system',
                desc: 'Without visibility over completion, you find out something went wrong when the guest arrives.',
              },
              {
                label: 'No backup plan',
                desc: 'When a cleaner cancels last minute and there\'s no contingency, the entire turnover falls apart.',
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
              Cleaning issues don&apos;t come from cleaning. They come from poor coordination.
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
              How Cleaning Coordination Works
            </h2>
          </div>

          {/* Desktop horizontal flow */}
          <div className="hidden md:flex items-stretch justify-center gap-0 mb-10">
            {cleaningSteps.map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center text-center max-w-36 px-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-3 shrink-0">
                    {step.icon}
                  </div>
                  <p className="text-xs font-medium text-base-content/70 leading-snug">
                    {step.label}
                  </p>
                </div>
                {i < cleaningSteps.length - 1 && (
                  <div className="flex items-start pt-4 px-1">
                    <ArrowRight className="w-5 h-5 text-base-content/25" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile vertical */}
          <div className="flex flex-col items-center gap-0 md:hidden">
            {cleaningSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center w-full max-w-xs">
                <div className="flex items-center gap-4 w-full">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>
                  <p className="text-sm font-medium text-base-content/75">{step.label}</p>
                </div>
                {i < cleaningSteps.length - 1 && (
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
              What Our Cleaning Coordination Covers
            </h2>
            <p className="text-base-content/55 text-base max-w-xl mx-auto">
              End-to-end turnover management — not just cleaner scheduling.
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
              👉 Reliable turnovers without last-minute stress.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: BOLD INSIGHT BLOCK */}
      <section className="py-16 lg:py-20">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <div className="p-10 rounded-3xl bg-base-200 border border-base-300">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              Good cleaning is expected.
            </p>
            <p className="text-xl text-base-content/55 font-semibold">
              Reliable cleaning is what gets reviews.
            </p>
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
              What Changes When Cleaning Is Managed Properly
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4 p-7 rounded-2xl bg-error/5 border border-error/20">
              <div className="flex items-center gap-2 mb-2">
                <ThumbsDown className="w-5 h-5 text-error" />
                <p className="font-bold text-base-content/70">Without Coordination</p>
              </div>
              {[
                'Missed cleans and unprepared properties',
                'Delays that cascade through the day',
                'Guest complaints and damaged reviews',
                'Constant reactive stress for the host',
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
                <p className="font-bold text-base-content">With Active Coordination</p>
              </div>
              {[
                'On-time turnovers for every booking',
                'Properties consistently ready on arrival',
                'Smoother stays and stronger reviews',
                'Predictable operations with no last-minute chaos',
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
              How We Coordinate Cleaning Properly
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <CalendarCheck className="w-5 h-5 text-primary" />,
                title: 'We align cleaning with bookings',
                desc: 'Every turnover is scheduled against actual check-out and check-in times — not generic timeslots that create gaps or clashes.',
              },
              {
                icon: <MessageSquare className="w-5 h-5 text-primary" />,
                title: 'We communicate clearly with teams',
                desc: 'Cleaners receive clear, timely instructions for every turnover — no guessing, no missing details, no confusion.',
              },
              {
                icon: <ClipboardList className="w-5 h-5 text-primary" />,
                title: 'We track every turnover',
                desc: 'Each clean is monitored from confirmation through to completion, so nothing slips through unnoticed.',
              },
              {
                icon: <RefreshCw className="w-5 h-5 text-primary" />,
                title: 'We manage changes in real time',
                desc: 'When bookings shift or check-outs run late, we adapt the schedule immediately and keep all parties informed.',
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
            &ldquo;We don&apos;t just organise cleaners. We control your turnovers.&rdquo;
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
              Where Cleaning Coordination Goes Wrong
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              {
                point: 'Relying on manual communication',
                detail: 'WhatsApp messages and phone calls are not a coordination system. They create confusion and missed updates.',
              },
              {
                point: 'No structured schedule',
                detail: 'Without a clear timetable tied to bookings, cleans happen at the wrong time or not at all.',
              },
              {
                point: 'No backup plan',
                detail: 'When a cleaner cancels and there is no contingency, the entire turnover chain collapses.',
              },
              {
                point: 'Poor timing between guests',
                detail: 'Too little time between check-out and check-in leaves no room for a proper clean to happen.',
              },
              {
                point: 'No follow-up after the clean',
                detail: 'Assuming a clean is done without confirmation means problems only surface when the next guest arrives.',
              },
              {
                point: 'Treating cleaning as a standalone task',
                detail: 'Cleaning that isn\'t connected to the broader operations becomes unpredictable and unreliable.',
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
            Cleaning fails when it&apos;s not managed as a system.
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
              Unmanaged Cleaning vs Coordinated Cleaning
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
                      Unmanaged Cleaning
                    </div>
                  </th>
                  <th className="px-6 py-4 bg-primary/12 text-left text-xs font-bold uppercase tracking-wider text-primary w-[37.5%]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Coordinated Cleaning
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cleans', 'Missed or delayed', 'On-time turnovers'],
                  ['Process', 'Confusion and guesswork', 'Clear, structured process'],
                  ['Flow', 'Delays and disruption', 'Smooth, reliable flow'],
                  ['Consistency', 'Unpredictable', 'Reliable every time'],
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
              ['Cleans', 'Missed or delayed', 'On-time turnovers'],
              ['Process', 'Confusion and guesswork', 'Clear, structured process'],
              ['Flow', 'Delays and disruption', 'Smooth, reliable flow'],
              ['Consistency', 'Unpredictable', 'Reliable every time'],
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
                    <p className="text-[10px] text-primary mb-1 font-bold">Coordinated</p>
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
                icon: <RefreshCw className="w-5 h-5 text-primary" />,
                title: 'Hosts with frequent turnovers',
                desc: 'High-frequency bookings demand a reliable coordination system — ad hoc management doesn\'t scale.',
              },
              {
                icon: <Layers className="w-5 h-5 text-primary" />,
                title: 'Serviced accommodation businesses',
                desc: 'Professional STR operations need professional cleaning coordination — not informal arrangements.',
              },
              {
                icon: <Users className="w-5 h-5 text-primary" />,
                title: 'Operators managing multiple properties',
                desc: 'Coordinating cleans across multiple units and teams requires a system that keeps everything aligned.',
              },
              {
                icon: <Zap className="w-5 h-5 text-primary" />,
                title: 'Hosts wanting reliability',
                desc: 'If you\'ve had missed cleans, delays, or guest complaints about property readiness, this solves it.',
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fix Your Cleaning Coordination</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-[1.12]">
            Ready to Fix Your{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Cleaning Coordination?
            </span>
          </h2>

          <p className="text-lg text-base-content/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s build a system that keeps every turnover on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="pulse-cta-cc btn btn-primary btn-lg rounded-full px-10 gap-2 font-semibold shadow-xl shadow-primary/30 hover:shadow-primary/55 transition-all duration-200"
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
