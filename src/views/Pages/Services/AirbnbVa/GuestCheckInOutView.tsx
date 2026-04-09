import React from 'react'
import type { Page } from '@/payload-types'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Star,
  AlertTriangle,
  MessageSquare,
  Layers,
  Users,
  Zap,
  ThumbsDown,
  ThumbsUp,
  CalendarCheck,
  BarChart2,
  LogIn,
  LogOut,
  Clock,
  Home,
  Sparkles,
  BrushCleaning,
  Bell,
  KeyRound,
  Activity,
} from 'lucide-react'
import { FaqItem } from './FaqItem'

const faqs = [
  {
    q: 'Do you handle late check-ins?',
    a: 'Yes. We manage the full arrival window, including late arrivals. Guests receive clear instructions in advance so they can access the property smoothly regardless of arrival time.',
  },
  {
    q: 'Can you coordinate with cleaners?',
    a: 'Absolutely. We notify your cleaning team at check-out and align timing so turnovers begin promptly. This keeps your operational schedule running without delays.',
  },
  {
    q: 'What if a guest has access issues?',
    a: 'We handle access issues directly. If a guest cannot enter the property, we resolve it immediately, guiding them through entry and escalating to you only when necessary.',
  },
  {
    q: 'Do you send reminders automatically?',
    a: 'Yes. Pre-arrival messages, check-in instructions, and check-out reminders are all sent on schedule. Nothing is left to chance or memory.',
  },
]

const whatWeHandle = [
  {
    icon: <MessageSquare className="w-5 h-5 text-primary" />,
    title: 'Pre-Arrival Preparation',
    points: ['Sending arrival instructions', 'Confirming arrival times', 'Sharing key property details'],
  },
  {
    icon: <KeyRound className="w-5 h-5 text-primary" />,
    title: 'Check-In Support',
    points: ['Guiding guest entry', 'Resolving access issues', 'Ensuring smooth arrivals'],
  },
  {
    icon: <Bell className="w-5 h-5 text-primary" />,
    title: 'During-Stay Monitoring',
    points: ['Handling guest queries', 'Staying responsive', 'Managing mid-stay needs'],
  },
  {
    icon: <LogOut className="w-5 h-5 text-primary" />,
    title: 'Check-Out Coordination',
    points: ['Sending departure reminders', 'Confirming vacating', 'Checking property readiness'],
  },
  {
    icon: <BrushCleaning className="w-5 h-5 text-primary" />,
    title: 'Cleaner Coordination',
    points: ['Notifying cleaning teams', 'Aligning turnover timing', 'Ensuring smooth handover'],
  },
  {
    icon: <Sparkles className="w-5 h-5 text-primary" />,
    title: 'Full Turnover Oversight',
    points: ['Monitoring completion', 'Confirming property is ready', 'Resetting for next guest'],
  },
]

const flowSteps = [
  { label: 'Booking Confirmed', icon: <CalendarCheck className="w-5 h-5" /> },
  { label: 'Pre-Arrival Message Sent', icon: <MessageSquare className="w-5 h-5" /> },
  { label: 'Check-In Instructions Shared', icon: <KeyRound className="w-5 h-5" /> },
  { label: 'Guest Arrival Managed', icon: <LogIn className="w-5 h-5" /> },
  { label: 'Stay Monitored', icon: <Activity className="w-5 h-5" /> },
  { label: 'Check-Out Reminder Sent', icon: <Bell className="w-5 h-5" /> },
  { label: 'Cleaner Notified & Turnover Begins', icon: <BrushCleaning className="w-5 h-5" /> },
]

export const GuestCheckInOutView: React.FC<{ page: Page }> = () => {
  return (
    <article className="flex flex-col w-full overflow-x-hidden font-sans text-base-content selection:bg-primary/20">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpCIO {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cio-fade-1 { animation: fadeUpCIO 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) both; }
        .cio-fade-2 { animation: fadeUpCIO 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .cio-fade-3 { animation: fadeUpCIO 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both; }
        .cio-fade-4 { animation: fadeUpCIO 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both; }
        .cio-fade-5 { animation: fadeUpCIO 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes pulse-ring-cio {
          0%   { box-shadow: 0 0 0 0 oklch(var(--p)/0.35); }
          70%  { box-shadow: 0 0 0 12px oklch(var(--p)/0); }
          100% { box-shadow: 0 0 0 0 oklch(var(--p)/0); }
        }
        .pulse-cta-cio { animation: pulse-ring-cio 2.5s ease-out infinite; }
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
              <div className="cio-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-6 shadow-sm shadow-primary/10">
                <LogIn className="w-3.5 h-3.5" />
                <span>Check-In &amp; Check-Out · UK</span>
              </div>

              <h1 className="cio-fade-2 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-tight mb-6">
                Smooth Guest Check-Ins and Check-Outs{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Without the Stress
                </span>
              </h1>

              <p className="cio-fade-3 text-base lg:text-lg text-base-content/65 leading-relaxed mb-4 max-w-lg">
                Assistophere manages guest arrivals and departures for UK hosts, ensuring clear
                instructions, proper timing, and smooth coordination with your cleaning and
                operations.
              </p>

              <div className="cio-fade-3 mb-8 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm text-base-content/60 leading-relaxed italic">
                Check-in and check-out management ensures guests receive clear instructions, arrive
                smoothly, and leave on time, allowing operations and turnovers to run efficiently.
              </div>

              <div className="cio-fade-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="pulse-cta-cio btn btn-primary btn-lg rounded-full px-8 gap-2 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/45 transition-all duration-200"
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

              <div className="cio-fade-5 flex items-center gap-4 mt-8 pt-8 border-t border-base-300/60">
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

            {/* Hero visual: guest flow timeline */}
            <div className="cio-fade-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-base-200 border border-base-300 shadow-2xl shadow-black/40 p-7">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/6" />
                <p className="relative z-10 text-xs font-bold text-base-content/30 uppercase tracking-widest mb-5">
                  Guest Flow Timeline
                </p>
                <div className="relative z-10 flex flex-col gap-0">
                  {[
                    { time: 'Day -1', label: 'Pre-arrival instructions sent', status: 'done' },
                    { time: '3:00 PM', label: 'Check-in window opens', status: 'done' },
                    { time: '3:42 PM', label: 'Guest arrives & accesses property', status: 'done' },
                    { time: 'Day 3', label: 'Check-out reminder sent', status: 'upcoming' },
                    { time: '11:00 AM', label: 'Guest departs on time', status: 'upcoming' },
                    { time: '11:15 AM', label: 'Cleaner notified · turnover begins', status: 'upcoming' },
                  ].map(({ time, label, status }, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <div className="flex flex-col items-center">
                        <div className={`w-3 h-3 rounded-full mt-1 shrink-0 ${status === 'done' ? 'bg-primary' : 'bg-base-300 border-2 border-primary/30'}`} />
                        {idx < 5 && <div className="w-0.5 h-7 bg-base-300" />}
                      </div>
                      <div className="pb-1">
                        <p className="text-[10px] text-base-content/35 font-mono mb-0.5">{time}</p>
                        <p className={`text-xs font-medium ${status === 'done' ? 'text-base-content/80' : 'text-base-content/40'}`}>{label}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="relative z-10 text-[10px] text-base-content/25 mt-5 text-center">
                  Every step managed, every transition smooth
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-content text-xs font-bold px-4 py-2 rounded-2xl shadow-lg shadow-primary/30">
                Every step handled
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: BOLD STATEMENT */}
      <section className="bg-base-200 border-y border-base-300 py-16 lg:py-20">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Most problems happen at check-in.
          </p>
          <p className="text-lg text-base-content/55 leading-relaxed">
            Late arrivals, unclear instructions, missed details.
            <br />
            This is where guest experience starts — or breaks.
          </p>
        </div>
      </section>

      {/* SECTION 3: CLARITY */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-6">
            <Home className="w-3.5 h-3.5" />
            <span>What It Really Means</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            Check-In and Check-Out Isn&apos;t Just Timing
          </h2>
          <p className="text-base-content/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            It&apos;s a structured process that connects everything. If this process is unclear,
            everything becomes reactive.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <MessageSquare className="w-6 h-6 text-primary" />, text: 'Guest communication' },
              { icon: <KeyRound className="w-6 h-6 text-primary" />, text: 'Property access' },
              { icon: <BrushCleaning className="w-6 h-6 text-primary" />, text: 'Cleaning schedules' },
              { icon: <Zap className="w-6 h-6 text-primary" />, text: 'Maintenance readiness' },
            ].map((item) => (
              <div
                key={item.text}
                className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-base-200 border border-base-300 hover:border-primary/30 transition-colors text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="font-semibold text-sm text-base-content/80 leading-snug">{item.text}</p>
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
              Why Check-Ins and Check-Outs Become Chaotic
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              { label: 'Unclear instructions sent late', desc: 'Guests arrive confused and unprepared because information came too late.' },
              { label: 'Guests arriving at the wrong time', desc: 'No arrival window coordination means property isn\'t ready when guests turn up.' },
              { label: 'Cleaners not aligned', desc: 'Turnovers start late when cleaning teams aren\'t notified at the right moment.' },
              { label: 'Delayed check-outs', desc: 'Without reminders, guests overstay and push the whole schedule back.' },
              { label: 'Last-minute confusion', desc: 'Reactive problem-solving under time pressure creates stress and poor outcomes.' },
              { label: 'No structured handover', desc: 'Without a defined process, every check-in and check-out is a fresh challenge.' },
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
              Without structure, small issues quickly turn into bigger ones.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: GUEST FLOW */}
      <section id="how-it-works" className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <Activity className="w-3.5 h-3.5" />
              <span>The Flow</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              How a Proper Guest Flow Works
            </h2>
          </div>

          {/* Desktop horizontal flow */}
          <div className="hidden lg:flex items-start justify-center gap-0 mb-10 flex-wrap">
            {flowSteps.map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center text-center max-w-40 px-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-3 shrink-0">
                    {step.icon}
                  </div>
                  <p className="text-xs font-medium text-base-content/70 leading-snug">{step.label}</p>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="flex items-start pt-4 px-1">
                    <ArrowRight className="w-5 h-5 text-base-content/25" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile vertical */}
          <div className="flex flex-col items-center gap-0 lg:hidden">
            {flowSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center w-full max-w-xs">
                <div className="flex items-center gap-4 w-full">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>
                  <p className="text-sm font-medium text-base-content/75">{step.label}</p>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="w-0.5 h-6 bg-base-300 my-1 ml-5" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHAT WE HANDLE */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>What&apos;s Covered</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Our Check-In &amp; Check-Out Support Covers
            </h2>
            <p className="text-base-content/55 text-base max-w-xl mx-auto">
              A consistent and reliable guest flow — handled end to end.
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
              👉 A consistent and reliable guest flow.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: BOLD INSIGHT */}
      <section className="py-16 lg:py-20">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <div className="p-10 rounded-3xl bg-base-200 border border-base-300">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              A smooth check-in feels invisible.
            </p>
            <p className="text-xl text-base-content/55 font-semibold">
              A bad one gets remembered.
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
              What Changes When Check-Ins Are Managed Properly
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4 p-7 rounded-2xl bg-error/5 border border-error/20">
              <div className="flex items-center gap-2 mb-2">
                <ThumbsDown className="w-5 h-5 text-error" />
                <p className="font-bold text-base-content/70">Without Structure</p>
              </div>
              {[
                'Confused guests on arrival',
                'Delayed access causes frustration',
                'Cleaning clashes delay turnovers',
                'Stress and reactive problem-solving',
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
                <p className="font-bold text-base-content">With Managed Flow</p>
              </div>
              {[
                'Smooth arrivals with clear instructions',
                'Clear timing and access — no delays',
                'Aligned operations and faster turnovers',
                'Better reviews from better experiences',
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
              <LogIn className="w-3.5 h-3.5" />
              <span>Our Approach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              How We Manage Guest Flow Properly
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <MessageSquare className="w-5 h-5 text-primary" />,
                title: 'We communicate early and clearly',
                desc: 'Instructions go out well ahead of arrival — nothing is left to the last minute or assumed.',
              },
              {
                icon: <Activity className="w-5 h-5 text-primary" />,
                title: 'We structure every step',
                desc: 'From booking confirmation to turnover, every stage has a defined action and timing.',
              },
              {
                icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
                title: 'We align guests with operations',
                desc: 'Guests, cleaners, and you are all working from the same timeline — no misalignments.',
              },
              {
                icon: <Zap className="w-5 h-5 text-primary" />,
                title: 'We reduce last-minute issues',
                desc: 'Proactive reminders and early communication prevent the situations that create stress.',
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
            &ldquo;We don&apos;t just manage check-ins. We control the flow of your entire guest experience.&rdquo;
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
              Where Check-In and Check-Out Goes Wrong
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { point: 'Sending instructions too late', detail: 'Instructions sent the night before or on the day leave no time for guests to prepare.' },
              { point: 'Unclear access details', detail: 'Vague entry instructions cause guests to wait outside, frustrated and calling at bad times.' },
              { point: 'No arrival coordination', detail: 'Without a confirmed arrival window, the property may not be ready on time.' },
              { point: 'Poor timing with cleaners', detail: 'Cleaners notified late means turnovers run behind schedule for the next guest.' },
              { point: 'No check-out reminders', detail: 'Guests without reminders miss check-out time, pushing back the entire day\'s schedule.' },
              { point: 'Assuming guests will figure it out', detail: 'Even simple properties need clear instructions. Assuming causes unnecessary issues.' },
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
            Most issues are preventable with the right structure.
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
              Unstructured vs Managed Guest Flow
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
                      Unstructured
                    </div>
                  </th>
                  <th className="px-6 py-4 bg-primary/12 text-left text-xs font-bold uppercase tracking-wider text-primary w-[37.5%]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Managed Flow
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Communication', 'Confusion', 'Clarity'],
                  ['Timing', 'Delays', 'Smooth timing'],
                  ['Pressure', 'Stress', 'Control'],
                  ['Operations', 'Missed coordination', 'Aligned operations'],
                ].map(([area, bad, good], i) => (
                  <tr key={area} className={i % 2 === 0 ? 'bg-base-100' : 'bg-base-200/50'}>
                    <td className="px-6 py-4 font-semibold text-base-content/60 text-xs uppercase tracking-wider">
                      {area}
                    </td>
                    <td className="px-6 py-4 text-base-content/50">{bad}</td>
                    <td className="px-6 py-4 text-base-content font-semibold bg-primary/5">{good}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden flex flex-col gap-3">
            {[
              ['Communication', 'Confusion', 'Clarity'],
              ['Timing', 'Delays', 'Smooth timing'],
              ['Pressure', 'Stress', 'Control'],
              ['Operations', 'Missed coordination', 'Aligned operations'],
            ].map(([area, bad, good]) => (
              <div key={area} className="rounded-2xl overflow-hidden border border-base-300">
                <div className="px-4 py-2.5 bg-base-300/60 text-xs font-bold text-base-content/40 uppercase tracking-wider">
                  {area}
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-3 py-3.5 border-r border-base-300 bg-base-100">
                    <p className="text-[10px] text-base-content/35 mb-1">Unstructured</p>
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
                icon: <Clock className="w-5 h-5 text-primary" />,
                title: 'Hosts managing multiple check-ins daily',
                desc: 'When volume increases, an unmanaged process breaks. Structure keeps everything running.',
              },
              {
                icon: <Layers className="w-5 h-5 text-primary" />,
                title: 'Serviced accommodation businesses',
                desc: 'Professional guest flow requires professional management — not improvised messages.',
              },
              {
                icon: <Users className="w-5 h-5 text-primary" />,
                title: 'Operators with frequent turnovers',
                desc: 'High turnover rates demand tight coordination. Gaps between guests leave no room for error.',
              },
              {
                icon: <Zap className="w-5 h-5 text-primary" />,
                title: 'Hosts wanting smoother operations',
                desc: 'If arrivals and departures feel unpredictable, the solution is a repeatable, managed system.',
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
            <LogIn className="w-3.5 h-3.5" />
            <span>Make Every Arrival Seamless</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-[1.12]">
            Ready to Make Guest Arrivals and{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Departures Seamless?
            </span>
          </h2>

          <p className="text-lg text-base-content/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s put a structured system in place so every check-in and check-out runs
            smoothly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="pulse-cta-cio btn btn-primary btn-lg rounded-full px-10 gap-2 font-semibold shadow-xl shadow-primary/30 hover:shadow-primary/55 transition-all duration-200"
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
