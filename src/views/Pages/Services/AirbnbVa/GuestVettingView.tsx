import React from 'react'
import type { Page } from '@/payload-types'
import Link from 'next/link'
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Star,
  AlertTriangle,
  UserCheck,
  ClipboardList,
  Eye,
  MessageSquare,
  Layers,
  Users,
  Zap,
  Search,
  ThumbsDown,
  ThumbsUp,
  CalendarCheck,
  BarChart2,
  Activity,
} from 'lucide-react'
import { FaqItem } from './FaqItem'

const faqs = [
  {
    q: 'Do you check every booking?',
    a: 'Yes. Every booking request is reviewed before it is confirmed. We apply a consistent screening process regardless of the platform or booking type.',
  },
  {
    q: 'Can you decline risky guests?',
    a: 'Absolutely. If a booking shows red flags or does not meet your property criteria, we manage the decline professionally and in line with platform policies.',
  },
  {
    q: 'What happens if a guest is unclear?',
    a: 'We send clear, professional messages requesting further information before making a decision. Most cases are resolved quickly with the right questions asked.',
  },
  {
    q: 'Does vetting reduce bookings?',
    a: 'Not meaningfully. Vetting filters out high-risk bookings, not good ones. The guests who are right for your property still book — with fewer issues during their stays.',
  },
]

const whatWeCheck = [
  {
    icon: <ClipboardList className="w-5 h-5 text-primary" />,
    title: 'Booking Details',
    points: ['Number of guests', 'Reason for stay', 'Duration and dates'],
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-primary" />,
    title: 'Guest Behaviour Indicators',
    points: ['Communication style', 'Responsiveness to messages', 'Clarity of intent'],
  },
  {
    icon: <AlertTriangle className="w-5 h-5 text-primary" />,
    title: 'Risk Signals',
    points: ['Last-minute bookings', 'Unusual or vague requests', 'Inconsistent details'],
  },
  {
    icon: <Eye className="w-5 h-5 text-primary" />,
    title: 'Platform Information',
    points: [
      'Reviews (where available)',
      'Profile quality and completeness',
      'Verification status',
    ],
  },
]

const vettingSteps = [
  { label: 'Booking Request Received', icon: <ClipboardList className="w-5 h-5" /> },
  { label: 'Guest Details Reviewed', icon: <Search className="w-5 h-5" /> },
  { label: 'Risk Factors Checked', icon: <AlertTriangle className="w-5 h-5" /> },
  { label: 'Clarifications Requested (if needed)', icon: <MessageSquare className="w-5 h-5" /> },
  { label: 'Decision Made — Accept or Decline', icon: <UserCheck className="w-5 h-5" /> },
]

export const GuestVettingView: React.FC<{ page: Page }> = () => {
  return (
    <article className="flex flex-col w-full overflow-x-hidden font-sans text-base-content selection:bg-primary/20">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpGV {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .gv-fade-1 { animation: fadeUpGV 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) both; }
        .gv-fade-2 { animation: fadeUpGV 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .gv-fade-3 { animation: fadeUpGV 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both; }
        .gv-fade-4 { animation: fadeUpGV 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both; }
        .gv-fade-5 { animation: fadeUpGV 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes pulse-ring-gv {
          0%   { box-shadow: 0 0 0 0 oklch(var(--p)/0.35); }
          70%  { box-shadow: 0 0 0 12px oklch(var(--p)/0); }
          100% { box-shadow: 0 0 0 0 oklch(var(--p)/0); }
        }
        .pulse-cta-gv { animation: pulse-ring-gv 2.5s ease-out infinite; }
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
              <div className="gv-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-6 shadow-sm shadow-primary/10">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Guest Vetting · UK</span>
              </div>

              <h1 className="gv-fade-2 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-tight mb-6">
                Guest Vetting That{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Protects Your Property and Your Business
                </span>
              </h1>

              <p className="gv-fade-3 text-base lg:text-lg text-base-content/65 leading-relaxed mb-4 max-w-lg">
                Assistophere helps UK hosts screen and manage bookings to reduce risk, prevent
                issues, and maintain a safe and controlled short term rental operation.
              </p>

              <div className="gv-fade-3 mb-8 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm text-base-content/60 leading-relaxed italic">
                Guest vetting in short term rentals involves reviewing booking details, identifying
                risks, and verifying guests to prevent damages, rule violations, and operational
                issues.
              </div>

              <div className="gv-fade-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="pulse-cta-gv btn btn-primary btn-lg rounded-full px-8 gap-2 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/45 transition-all duration-200"
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

              <div className="gv-fade-5 flex items-center gap-4 mt-8 pt-8 border-t border-base-300/60">
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

            {/* Hero visual: booking review dashboard */}
            <div className="gv-fade-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-base-200 border border-base-300 shadow-2xl shadow-black/40 p-7">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/6" />
                <p className="relative z-10 text-xs font-bold text-base-content/30 uppercase tracking-widest mb-5">
                  Booking Review Dashboard
                </p>
                <div className="relative z-10 flex flex-col gap-3">
                  {[
                    {
                      guest: 'James T.',
                      detail: '3 guests · 2 nights · stag party inquiry',
                      verdict: 'Declined',
                      ok: 'no',
                    },
                    {
                      guest: 'Sarah K.',
                      detail: '2 guests · 4 nights · anniversary trip',
                      verdict: 'Approved',
                      ok: 'yes',
                    },
                    {
                      guest: 'Unknown profile',
                      detail: 'No reviews · last-minute · vague reason',
                      verdict: 'Clarification sent',
                      ok: 'maybe',
                    },
                    {
                      guest: 'Oliver M.',
                      detail: '4 guests · 7 nights · family holiday',
                      verdict: 'Approved',
                      ok: 'yes',
                    },
                    {
                      guest: 'Priya B.',
                      detail: '1 guest · 3 nights · work trip · verified',
                      verdict: 'Approved',
                      ok: 'yes',
                    },
                  ].map(({ guest, detail, verdict, ok }) => (
                    <div
                      key={guest}
                      className="grid grid-cols-[1fr_auto] gap-2 items-center bg-base-100/60 rounded-xl px-4 py-3 border border-base-300/60"
                    >
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-base-content/80 truncate">
                          {guest}
                        </p>
                        <p className="text-xs text-base-content/45 truncate">{detail}</p>
                      </div>
                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0 ${ok === 'yes' ? 'bg-primary/12 text-primary' : ok === 'no' ? 'bg-error/12 text-error' : 'bg-warning/12 text-warning'}`}
                      >
                        {verdict}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="relative z-10 text-[10px] text-base-content/25 mt-5 text-center">
                  Every booking reviewed before confirmation
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-content text-xs font-bold px-4 py-2 rounded-2xl shadow-lg shadow-primary/30">
                Every booking reviewed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: BOLD STATEMENT */}
      <section className="bg-base-200 border-y border-base-300 py-16 lg:py-20">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Not every booking is a good booking.
          </p>
          <p className="text-lg text-base-content/55 leading-relaxed">
            More bookings don&apos;t always mean better outcomes. The wrong guest can cost more than
            multiple stays combined.
          </p>
        </div>
      </section>

      {/* SECTION 3: CLARITY */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>What It Means</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            What Guest Vetting Actually Means
          </h2>
          <p className="text-base-content/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Guest vetting is the process of reviewing and assessing each booking before it is
            confirmed.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: <UserCheck className="w-6 h-6 text-primary" />,
                text: 'Understanding who is booking',
              },
              {
                icon: <AlertTriangle className="w-6 h-6 text-primary" />,
                text: 'Identifying potential risks',
              },
              {
                icon: <ClipboardList className="w-6 h-6 text-primary" />,
                text: 'Ensuring the booking fits your property rules',
              },
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
              Why Guest Issues Happen
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              {
                label: 'No screening process in place',
                desc: 'Without a process, every booking is an unknown risk accepted without review.',
              },
              {
                label: 'Accepting every request',
                desc: 'Approving bookings without review is the fastest route to operational problems.',
              },
              {
                label: 'Lack of guest information',
                desc: 'Booking confirmations without enough detail leave you unprepared.',
              },
              {
                label: 'No clear booking criteria',
                desc: 'Without defined rules, what makes a good booking is guesswork.',
              },
              {
                label: 'Rushed decision-making',
                desc: 'Pressure to fill gaps leads to fast approvals with slow consequences.',
              },
              {
                label: 'Over-relying on platform ratings',
                desc: 'Platform reviews alone are not enough to identify risk.',
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
              Problems don&apos;t start during the stay. They start at the booking stage.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: VETTING FLOW */}
      <section id="how-it-works" className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <Activity className="w-3.5 h-3.5" />
              <span>The Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              How Guest Vetting Works in Practice
            </h2>
          </div>

          {/* Desktop horizontal flow */}
          <div className="hidden md:flex items-stretch justify-center gap-0 mb-10">
            {vettingSteps.map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center text-center max-w-40 px-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-3 shrink-0">
                    {step.icon}
                  </div>
                  <p className="text-xs font-medium text-base-content/70 leading-snug">
                    {step.label}
                  </p>
                </div>
                {i < vettingSteps.length - 1 && (
                  <div className="flex items-start pt-4 px-1">
                    <ArrowRight className="w-5 h-5 text-base-content/25" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile vertical */}
          <div className="flex flex-col items-center gap-0 md:hidden">
            {vettingSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center w-full max-w-xs">
                <div className="flex items-center gap-4 w-full">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>
                  <p className="text-sm font-medium text-base-content/75">{step.label}</p>
                </div>
                {i < vettingSteps.length - 1 && <div className="w-0.5 h-6 bg-base-300 my-1 ml-5" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHAT WE CHECK */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Search className="w-3.5 h-3.5" />
              <span>What We Look For</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What We Review Before Accepting a Booking
            </h2>
            <p className="text-base-content/55 text-base max-w-xl mx-auto">
              A structured review, not a gut feeling.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whatWeCheck.map((item) => (
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
              👉 Better bookings. Fewer problems.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: BOLD INSIGHT */}
      <section className="py-16 lg:py-20">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <div className="p-10 rounded-3xl bg-base-200 border border-base-300">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              Most issues aren&apos;t bad luck.
            </p>
            <p className="text-xl text-base-content/55 font-semibold">
              They&apos;re missed signals.
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
              What Changes When You Vet Guests Properly
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4 p-7 rounded-2xl bg-error/5 border border-error/20">
              <div className="flex items-center gap-2 mb-2">
                <ThumbsDown className="w-5 h-5 text-error" />
                <p className="font-bold text-base-content/70">Without Proper Vetting</p>
              </div>
              {[
                'Higher risk guests accepted without review',
                'Issues during stays become expensive',
                'More time spent managing problems',
                'Inconsistent booking quality',
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
                <p className="font-bold text-base-content">With Structured Vetting</p>
              </div>
              {[
                'Only suitable guests confirmed',
                'Fewer in-stay issues and damages',
                'More predictable operational outcomes',
                'Consistent, higher quality bookings',
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
              How We Handle Guest Vetting
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <ClipboardList className="w-5 h-5 text-primary" />,
                title: 'Every booking gets reviewed',
                desc: 'No booking is auto-confirmed without a structured check. Every request goes through the same consistent process.',
              },
              {
                icon: <Search className="w-5 h-5 text-primary" />,
                title: 'We look beyond the platform profile',
                desc: 'We review communication style, booking context, and available signals — not just what the platform shows.',
              },
              {
                icon: <MessageSquare className="w-5 h-5 text-primary" />,
                title: 'We ask the right questions',
                desc: 'When a booking is unclear, we request more information professionally before making a decision.',
              },
              {
                icon: <UserCheck className="w-5 h-5 text-primary" />,
                title: 'We make and communicate decisions clearly',
                desc: 'Approvals and declines are handled professionally — protecting your business without creating unnecessary friction.',
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
            &ldquo;We don&apos;t just accept bookings. We control who stays in your property.&rdquo;
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
              Where Guest Vetting Goes Wrong
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              {
                point: 'No vetting process at all',
                detail: 'Accepting bookings based on gut feel leads to avoidable issues.',
              },
              {
                point: 'Using only platform ratings',
                detail:
                  'Ratings provide limited information. New accounts and unreviewed guests are common.',
              },
              {
                point: 'No booking criteria',
                detail:
                  'Without clear rules for what you accept, every booking is a guessing game.',
              },
              {
                point: 'Declining without a process',
                detail:
                  'Ad hoc declines without reasoning create inconsistency and potential disputes.',
              },
              {
                point: 'Not asking clarifying questions',
                detail:
                  'Many risky bookings could be resolved or declined properly with one clear message.',
              },
              {
                point: 'Vetting only high-risk stays',
                detail:
                  'Problems come from all booking types. A consistent approach covers every case.',
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
            Poor vetting decisions create problems that are expensive to resolve after the fact.
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
              No Vetting vs Structured Vetting
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
                      No Vetting
                    </div>
                  </th>
                  <th className="px-6 py-4 bg-primary/12 text-left text-xs font-bold uppercase tracking-wider text-primary w-[37.5%]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Structured Vetting
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Risk Level', 'Higher risk', 'Controlled risk'],
                  ['Approach', 'Reactive', 'Proactive'],
                  ['Issues', 'More in-stay problems', 'Fewer issues'],
                  ['Outcomes', 'Unpredictable', 'Consistent results'],
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
              ['Risk Level', 'Higher risk', 'Controlled risk'],
              ['Approach', 'Reactive', 'Proactive'],
              ['Issues', 'More in-stay problems', 'Fewer issues'],
              ['Outcomes', 'Unpredictable', 'Consistent results'],
            ].map(([area, bad, good]) => (
              <div key={area} className="rounded-2xl overflow-hidden border border-base-300">
                <div className="px-4 py-2.5 bg-base-300/60 text-xs font-bold text-base-content/40 uppercase tracking-wider">
                  {area}
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-3 py-3.5 border-r border-base-300 bg-base-100">
                    <p className="text-[10px] text-base-content/35 mb-1">No Vetting</p>
                    <p className="text-xs text-base-content/50">{bad}</p>
                  </div>
                  <div className="px-3 py-3.5 bg-primary/8">
                    <p className="text-[10px] text-primary mb-1 font-bold">Structured</p>
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
                icon: <ShieldCheck className="w-5 h-5 text-primary" />,
                title: 'Hosts worried about damages or parties',
                desc: 'If property protection is a concern, structured vetting is your first line of defence.',
              },
              {
                icon: <Layers className="w-5 h-5 text-primary" />,
                title: 'Serviced accommodation businesses',
                desc: 'Professional operations require professional screening — not ad hoc approvals.',
              },
              {
                icon: <Users className="w-5 h-5 text-primary" />,
                title: 'Operators managing multiple bookings daily',
                desc: 'At scale, inconsistent booking decisions create compounding problems. A system prevents that.',
              },
              {
                icon: <Zap className="w-5 h-5 text-primary" />,
                title: 'Hosts wanting more control',
                desc: 'Vetting gives you control over who stays in your property — without adding more work to your plate.',
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
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Take Control of Your Bookings</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-[1.12]">
            Ready to Take Control of{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Your Bookings?
            </span>
          </h2>

          <p className="text-lg text-base-content/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s put a structured vetting process in place so you know exactly who is staying
            in your property.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="pulse-cta-gv btn btn-primary btn-lg rounded-full px-10 gap-2 font-semibold shadow-xl shadow-primary/30 hover:shadow-primary/55 transition-all duration-200"
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
