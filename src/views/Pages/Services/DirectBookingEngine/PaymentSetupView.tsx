import React from 'react'
import type { Page } from '@/payload-types'
import Link from 'next/link'
import {
  CalendarCheck,
  ArrowRight,
  CheckCircle2,
  XCircle,
  CreditCard,
  MessageSquare,
  Zap,
  Star,
  ShieldCheck,
  AlertCircle,
  Layers,
  Users,
  TrendingUp,
  BadgeCheck,
  ReceiptText,
  Banknote,
  RefreshCcw,
  PlugZap,
  Lock,
} from 'lucide-react'
import { FaqItem } from '../AirbnbVa/FaqItem'

const faqs = [
  {
    q: 'What payment systems do you use?',
    a: "We primarily work with Stripe, which is one of the most trusted and widely used payment processors globally. Depending on your booking engine and setup requirements, we may also integrate alternative gateways — we'll always recommend the best fit for your specific situation.",
  },
  {
    q: 'Can guests pay securely?',
    a: "Yes. All payment processing is handled through encrypted, PCI-compliant systems. Guests pay using standard card payment flows — the same security they'd expect from any professional booking platform.",
  },
  {
    q: 'How do deposits work?',
    a: "We configure deposit handling based on your requirements — refundable security deposits, non-refundable booking fees, or damage waivers. The logic, timing, and communication to guests is all set up clearly so there's no ambiguity.",
  },
  {
    q: 'Can payments be automated?',
    a: "Yes — that's a core part of the setup. Booking confirmations, payment receipts, deposit requests, and balance collection can all be automated so you don't need to manually chase or process anything. You get notified; the system handles the work.",
  },
]

const paymentIncludes = [
  {
    icon: <Lock className="w-6 h-6 text-primary" />,
    title: 'Payment Gateway Setup',
    items: [
      'Stripe or equivalent integration',
      'Secure card handling',
      'Full payment configuration',
    ],
    outcome: 'Guests pay securely through a trusted, professional system.',
  },
  {
    icon: <BadgeCheck className="w-6 h-6 text-primary" />,
    title: 'Deposit System',
    items: ['Refundable security deposits', 'Damage waivers', 'Structured handling and tracking'],
    outcome: 'Deposits collected and managed properly — no manual chasing.',
  },
  {
    icon: <ReceiptText className="w-6 h-6 text-primary" />,
    title: 'Booking Payment Flow',
    items: [
      'Full or split payment options',
      'Clear guest-facing journey',
      'Timed payment collection',
    ],
    outcome: 'Guests know exactly what they pay and when — no confusion.',
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: 'Automation Setup',
    items: ['Automatic confirmations', 'Payment tracking', 'Reduced manual input'],
    outcome: 'Payments processed automatically — your time stays yours.',
  },
  {
    icon: <RefreshCcw className="w-6 h-6 text-primary" />,
    title: 'Refund & Adjustment Handling',
    items: [
      'Clear refund process setup',
      'Controlled partial and full refunds',
      'Guest communication alignment',
    ],
    outcome: 'A controlled, professional process — not an awkward manual conversation.',
  },
]

export const PaymentSetupView: React.FC<{ page: Page }> = () => {
  return (
    <article className="flex flex-col w-full overflow-x-hidden font-sans text-base-content selection:bg-primary/20">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpPS {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ps-fade-1 { animation: fadeUpPS 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) both; }
        .ps-fade-2 { animation: fadeUpPS 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .ps-fade-3 { animation: fadeUpPS 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both; }
        .ps-fade-4 { animation: fadeUpPS 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both; }
        .ps-fade-5 { animation: fadeUpPS 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes pulse-ring-ps {
          0%   { box-shadow: 0 0 0 0 oklch(var(--p)/0.35); }
          70%  { box-shadow: 0 0 0 12px oklch(var(--p)/0); }
          100% { box-shadow: 0 0 0 0 oklch(var(--p)/0); }
        }
        .pulse-cta-ps { animation: pulse-ring-ps 2.5s ease-out infinite; }
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
              <div className="ps-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-6 shadow-sm shadow-primary/10">
                <CreditCard className="w-3.5 h-3.5" />
                <span>Direct Booking Payments · UK</span>
              </div>

              <h1 className="ps-fade-2 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-tight mb-6">
                Payment Setup for{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Direct Booking STR Systems
                </span>
              </h1>

              <p className="ps-fade-3 text-base lg:text-lg text-base-content/65 leading-relaxed mb-4 max-w-lg">
                Assistophere helps UK hosts set up secure, structured payment systems for direct
                bookings — including payment gateways, deposits, and automated processes that keep
                everything running smoothly.
              </p>

              {/* AI-extractable definition */}
              <div className="ps-fade-3 mb-8 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm text-base-content/60 leading-relaxed italic">
                Payment setup for short term rentals includes configuring secure payment gateways,
                handling deposits, automating transactions, and ensuring guests can pay easily and
                safely.
              </div>

              <div className="ps-fade-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="pulse-cta-ps btn btn-primary btn-lg rounded-full px-8 gap-2 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/45 transition-all duration-200"
                >
                  <CalendarCheck className="w-5 h-5" />
                  Book a Discovery Call
                </Link>
                <a
                  href="#payment-breakdown"
                  className="btn btn-outline btn-lg rounded-full px-8 gap-2 font-semibold border-base-300 hover:bg-base-200 transition-all duration-200"
                >
                  See How It Works
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust bar */}
              <div className="ps-fade-5 flex items-center gap-4 mt-8 pt-8 border-t border-base-300/60">
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

            {/* Visual: payment flow */}
            <div className="ps-fade-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-base-200 border border-base-300 shadow-2xl shadow-black/40 p-7">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/6" />
                <p className="relative z-10 text-xs font-bold text-base-content/30 uppercase tracking-widest mb-6">
                  Payment flow
                </p>
                <div className="relative z-10 flex flex-col gap-3">
                  {/* Guest action */}
                  <div className="rounded-xl p-3.5 border border-base-300 bg-base-300/50 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-base-200 border border-base-300 flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4 text-base-content/40" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-base-content/55">
                        Guest selects dates
                      </p>
                      <p className="text-[10px] text-base-content/35">
                        On your direct booking website
                      </p>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="flex justify-center">
                    <ArrowRight className="w-4 h-4 rotate-90 text-primary/40" />
                  </div>
                  {/* Payment gateway */}
                  <div className="rounded-xl p-3.5 border-2 border-primary/30 bg-primary/10 flex items-center gap-3 shadow-md shadow-primary/10">
                    <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
                      <Lock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-primary">Secure Payment Gateway</p>
                      <p className="text-[10px] text-base-content/45">
                        Stripe · Encrypted · PCI Compliant
                      </p>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="flex justify-center">
                    <ArrowRight className="w-4 h-4 rotate-90 text-primary/40" />
                  </div>
                  {/* Outcomes row */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      {
                        icon: <BadgeCheck className="w-4 h-4 text-success" />,
                        label: 'Booking confirmed',
                      },
                      {
                        icon: <Banknote className="w-4 h-4 text-primary" />,
                        label: 'Payment collected',
                      },
                      {
                        icon: <MessageSquare className="w-4 h-4 text-secondary" />,
                        label: 'Guest notified',
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl p-2.5 border border-base-300 bg-base-300/40 flex flex-col items-center gap-1.5 text-center"
                      >
                        {item.icon}
                        <p className="text-[9px] font-semibold text-base-content/50 leading-tight">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-base-100/90 backdrop-blur-sm border border-base-300 rounded-xl px-3 py-2 shadow-lg">
                  <p className="text-[10px] text-base-content/40 font-medium">Manual work</p>
                  <p className="text-sm font-extrabold text-success">Eliminated</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/8 rounded-full blur-[80px] -z-10 scale-75" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: HOW PAYMENTS WORK ────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-16 lg:py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-5">
            <Zap className="w-3.5 h-3.5" />
            <span>Clear Explanation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            How Payments Work in a Direct Booking Setup
          </h2>
          <p className="text-base-content/65 text-lg leading-relaxed mb-6">
            When a guest books directly, your system needs to handle payments clearly and securely.
          </p>
          <p className="text-base-content/50 mb-6">This includes:</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {[
              {
                icon: <CreditCard className="w-5 h-5 text-primary" />,
                label: 'Collecting payments',
              },
              { icon: <BadgeCheck className="w-5 h-5 text-primary" />, label: 'Managing deposits' },
              {
                icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
                label: 'Confirming bookings',
              },
              { icon: <RefreshCcw className="w-5 h-5 text-primary" />, label: 'Handling refunds' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2.5 p-4 rounded-2xl bg-base-100 border border-base-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="text-xs font-semibold text-base-content/60 text-center leading-tight">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-5 border border-primary/20 bg-primary/6">
            <p className="text-base font-semibold text-primary/80 leading-relaxed">
              A proper setup ensures everything is smooth for both you and the guest — no awkward
              manual processes, no confusion.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: THE PROBLEM ──────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>The Problem</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                Why Payment Setup Confuses Most Hosts
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed mb-3">
                Payments seem simple — until you try to manage them properly.
              </p>
              <p className="text-base-content/55 leading-relaxed">
                Once you move away from Airbnb&apos;s built-in payment handling, you need a
                structured system of your own. Most hosts set something up quickly, then run into
                problems later.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { issue: 'No clear payment structure', cost: 'Guests confused about what to pay' },
                { issue: 'Deposits handled manually', cost: 'Time-consuming and error-prone' },
                { issue: 'Unclear refund process', cost: 'Disputes and frustration' },
                { issue: 'Risk of errors or fraud', cost: 'No secure gateway in place' },
                { issue: 'No automation', cost: 'Every booking needs manual work' },
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
              Without structure, payments become stressful and risky.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: WHAT A PROPER SETUP LOOKS LIKE ──────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>The Standard</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What a Proper Payment Setup Should Do
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              Five things every direct booking payment system needs to handle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <Lock className="w-6 h-6 text-primary" />,
                title: 'Secure Payment Collection',
                desc: 'Guests can pay safely using trusted, encrypted systems. No manual bank transfers or informal processes.',
                num: '01',
              },
              {
                icon: <BadgeCheck className="w-6 h-6 text-primary" />,
                title: 'Deposit Handling',
                desc: 'Security deposits or damage waivers handled properly — collected, tracked, and released with clear logic.',
                num: '02',
              },
              {
                icon: <ReceiptText className="w-6 h-6 text-primary" />,
                title: 'Clear Payment Flow',
                desc: 'Guests know exactly what they are paying and when. No surprises, no confusion at checkout.',
                num: '03',
              },
              {
                icon: <Zap className="w-6 h-6 text-primary" />,
                title: 'Automated Transactions',
                desc: 'Confirmations, receipts, and balance collection run automatically — minimal manual work required.',
                num: '04',
              },
              {
                icon: <RefreshCcw className="w-6 h-6 text-primary" />,
                title: 'Refund & Adjustment Handling',
                desc: 'A clear, controlled process for refunds and adjustments — professional for guests, manageable for you.',
                num: '05',
              },
              {
                icon: <PlugZap className="w-6 h-6 text-primary" />,
                title: 'System Integration',
                desc: 'Payments connect directly to your booking confirmation and operational workflows — nothing in isolation.',
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

      {/* ─── SECTION 5: WHAT WE HANDLE ───────────────────────────────── */}
      <section id="payment-breakdown" className="py-20 lg:py-28">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Full Breakdown</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Our Payment Setup Includes
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              Every component configured properly — so payments work the moment you go live.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {paymentIncludes.map((part) => (
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
              A reliable, professional payment system that runs smoothly.
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
                <PlugZap className="w-3.5 h-3.5" />
                <span>System Thinking</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                Connected With Your Booking and Operations
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed mb-4">
                Your payment setup doesn&apos;t sit separately from everything else.
              </p>
              <p className="text-base-content/55 leading-relaxed mb-8">
                It works alongside your booking engine and day-to-day operations — so nothing runs
                in isolation.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  {
                    label: 'Payments link directly to bookings',
                    desc: 'A confirmed payment triggers booking confirmation — no manual checks required.',
                  },
                  {
                    label: 'Deposits are tracked properly',
                    desc: 'Deposit collection, holding periods, and release are all structured and visible.',
                  },
                  {
                    label: 'Guest communication aligns with payments',
                    desc: 'Payment receipts, reminders, and confirmations go out automatically at the right moment.',
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-base-content text-sm">{item.label}</p>
                      <p className="text-base-content/50 text-xs leading-relaxed mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Connection visual */}
            <div className="relative rounded-3xl p-8 bg-base-100 border border-base-300 shadow-xl shadow-black/15">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-[60px]" />
              <p className="relative z-10 text-xs font-bold text-base-content/30 uppercase tracking-widest mb-6">
                Connected layers
              </p>
              <div className="relative z-10 flex flex-col gap-3">
                {[
                  { label: 'Direct Booking Website', sub: 'Guest journey', highlight: false },
                  { label: 'Booking Engine', sub: 'Availability + confirmation', highlight: false },
                  {
                    label: 'Payment Gateway',
                    sub: 'Secure collection + automation',
                    highlight: true,
                  },
                  { label: 'Operations', sub: 'Your workflow + tracking', highlight: false },
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
                      {layer.highlight && <Lock className="w-4 h-4 text-primary" />}
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
              Where Payment Setups Go Wrong
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              Most payment problems aren&apos;t about technology — they&apos;re about structure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              {
                mistake: 'Using manual payment methods',
                why: 'Bank transfers and manual invoices create unnecessary friction, risk, and admin time.',
              },
              {
                mistake: 'No deposit structure',
                why: 'Without a clear deposit policy and process, disputes become difficult to manage professionally.',
              },
              {
                mistake: 'Poor guest communication',
                why: "Guests who don't know when or how to pay drop off — or dispute charges later.",
              },
              {
                mistake: 'No automation',
                why: 'Manually processing every payment confirmation is unsustainable as your business grows.',
              },
              {
                mistake: 'Weak refund handling',
                why: 'No clear refund process leads to awkward conversations and potential chargebacks.',
              },
              {
                mistake: 'Payment isolated from operations',
                why: "A payment system that doesn't connect to your booking confirmation creates gaps and errors.",
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
              Payment systems fail when they are not structured properly.
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
                How We Set It Up Properly
              </h2>
              <p className="text-base-content/60 text-lg leading-relaxed mb-8">
                We don&apos;t just add a payment button. We build the entire payment structure
                around your business.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    title: 'We simplify the payment flow',
                    desc: 'Clear steps for guests — from booking to payment to confirmation. No unnecessary complexity.',
                  },
                  {
                    title: 'We align it with your booking system',
                    desc: 'Payments trigger the right actions in your booking engine and operational workflow.',
                  },
                  {
                    title: 'We make everything clear for guests',
                    desc: "Guest-facing messaging is structured so they always know what's happening with their payment.",
                  },
                  {
                    title: 'We reduce manual work',
                    desc: 'Automation handles confirmations, receipts, and reminders — your input stays minimal.',
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
                  'Guests pay securely and confidently',
                  'Deposits handled without manual work',
                  'Refunds processed with clear logic',
                  'Every payment linked to a booking',
                  'Automated guest communication',
                  'Professional from day one',
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
              Manual Payments vs Structured Payment System
            </h2>
            <p className="text-base-content/55 text-lg max-w-xl mx-auto">
              The difference isn&apos;t just efficiency — it&apos;s professionalism.
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
                    Manual Setup
                  </th>
                  <th className="py-4 px-6 text-left bg-primary/15 text-primary font-bold uppercase text-xs tracking-wider w-[35%]">
                    Structured System ✓
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Time demand', 'Time-consuming', 'Automated'],
                  ['Security', 'Higher risk', 'Encrypted & secure'],
                  ['Guest experience', 'Confusing', 'Clear and professional'],
                  ['Day-to-day management', 'Hard to manage', 'Easy to track'],
                  ['Deposit handling', 'Ad-hoc and manual', 'Structured and automatic'],
                  ['Refund process', 'Awkward conversations', 'Clear, controlled process'],
                ].map(([area, manual, structured], i) => (
                  <tr key={area} className={i % 2 === 0 ? 'bg-base-100' : 'bg-base-200/40'}>
                    <td className="py-3.5 px-6 font-medium text-base-content/55 border-r border-base-300 text-xs uppercase tracking-wide">
                      {area}
                    </td>
                    <td className="py-3.5 px-6 text-base-content/45 border-r border-base-300">
                      <span className="flex items-center gap-2">
                        <XCircle className="w-3.5 h-3.5 text-error/45 shrink-0" />
                        {manual}
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
              ['Time demand', 'Time-consuming', 'Automated'],
              ['Security', 'Higher risk', 'Encrypted & secure'],
              ['Guest experience', 'Confusing', 'Clear & professional'],
              ['Management', 'Hard to track', 'Easy to manage'],
              ['Deposits', 'Manual', 'Automatic'],
              ['Refunds', 'Awkward', 'Clear process'],
            ].map(([area, manual, structured]) => (
              <div key={area} className="rounded-2xl overflow-hidden border border-base-300">
                <div className="px-4 py-2.5 bg-base-300/60 text-xs font-bold text-base-content/40 uppercase tracking-wider">
                  {area}
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-3 py-3.5 border-r border-base-300 bg-base-100">
                    <p className="text-[10px] text-base-content/35 mb-1">Manual</p>
                    <p className="text-xs text-base-content/50">{manual}</p>
                  </div>
                  <div className="px-3 py-3.5 bg-primary/8">
                    <p className="text-[10px] text-primary mb-1 font-bold">Structured</p>
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
                icon: <CreditCard className="w-5 h-5 text-primary" />,
                title: 'Hosts using direct bookings',
                desc: "You're taking bookings through your own website and need a proper payment system behind it — not just a PayPal link.",
              },
              {
                icon: <Layers className="w-5 h-5 text-primary" />,
                title: 'Serviced accommodation businesses',
                desc: 'Operating at scale where manual payment processing creates real operational risk and admin overhead.',
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-primary" />,
                title: 'Operators managing multiple listings',
                desc: 'Multiple properties means multiple payment flows — a structured system keeps everything consistent and manageable.',
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-primary" />,
                title: 'Hosts wanting better control',
                desc: 'You want clarity over what guests are paying, when, and what happens if something needs to change.',
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
            <CreditCard className="w-3.5 h-3.5" />
            <span>Set It Up Right</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-[1.12]">
            Ready to Set Up Your Payment{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              System Properly?
            </span>
          </h2>

          <p className="text-lg text-base-content/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s build a payment setup that is secure, structured, and easy to manage — so you
            can focus on running your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="pulse-cta-ps btn btn-primary btn-lg rounded-full px-10 gap-2 font-semibold shadow-xl shadow-primary/30 hover:shadow-primary/55 transition-all duration-200"
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
