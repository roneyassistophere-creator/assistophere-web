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
  Layers,
  Users,
  ClipboardList,
  ShieldCheck,
  RefreshCw,
  Bell,
  Package,
  Droplets,
  Home,
  BarChart2,
} from 'lucide-react'
import { FaqItem } from './FaqItem'

const faqs = [
  {
    q: 'Do you manage stock levels?',
    a: 'Yes. We monitor usage and stock levels across your properties so you never run short before a guest arrival. Restocking is tracked and coordinated proactively, not reactively.',
  },
  {
    q: 'Can you coordinate with cleaners?',
    a: 'Yes. We align linen and toiletry preparation directly with your cleaning schedule, ensuring supplies are in place and ready before each turnover is completed.',
  },
  {
    q: 'What items are included?',
    a: 'We manage linen (bed sets, towels, bathmats) and standard toiletries (soap, shampoo, conditioner, body wash, toilet paper, and other essentials defined for each property).',
  },
  {
    q: 'Can this work across multiple properties?',
    a: 'Yes. Multi-property management is central to how we operate. We maintain consistent standards and coordination across all units, regardless of how many properties you manage.',
  },
]

const whatWeHandle = [
  {
    icon: <Package className="w-5 h-5 text-primary" />,
    title: 'Linen Coordination',
    points: [
      'Ensuring fresh linen for every stay',
      'Managing replacements and worn stock',
      'Aligning linen preparation with cleaning teams',
    ],
  },
  {
    icon: <Droplets className="w-5 h-5 text-primary" />,
    title: 'Toiletries Management',
    points: [
      'Stocking all essential guest toiletries',
      'Maintaining consistent presentation and quality',
      'Ensuring availability before every arrival',
    ],
  },
  {
    icon: <BarChart2 className="w-5 h-5 text-primary" />,
    title: 'Inventory Tracking',
    points: [
      'Monitoring usage across properties',
      'Tracking stock levels in real time',
      'Preventing shortages before they occur',
    ],
  },
  {
    icon: <RefreshCw className="w-5 h-5 text-primary" />,
    title: 'Restocking Coordination',
    points: [
      'Organising refills ahead of turnovers',
      'Aligning restocking with cleaning schedules',
      'Eliminating last-minute supply issues',
    ],
  },
  {
    icon: <Layers className="w-5 h-5 text-primary" />,
    title: 'Multi-Property Management',
    points: [
      'Consistent setup across all properties',
      'Centralised coordination and tracking',
      'No gaps between check-out and next arrival',
    ],
  },
]

const supplySteps = [
  { label: 'Guest Check-Out', icon: <Home className="w-5 h-5" /> },
  { label: 'Linen Collected & Replaced', icon: <Package className="w-5 h-5" /> },
  { label: 'Toiletries Checked', icon: <Droplets className="w-5 h-5" /> },
  { label: 'Stock Refilled', icon: <RefreshCw className="w-5 h-5" /> },
  { label: 'Setup Verified', icon: <ShieldCheck className="w-5 h-5" /> },
  { label: 'Ready for Next Guest', icon: <Sparkles className="w-5 h-5" /> },
]

export const LinenToiletriesView: React.FC<{ page: Page }> = () => {
  return (
    <article className="flex flex-col w-full overflow-x-hidden font-sans text-base-content selection:bg-primary/20">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpLT {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .lt-fade-1 { animation: fadeUpLT 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) both; }
        .lt-fade-2 { animation: fadeUpLT 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .lt-fade-3 { animation: fadeUpLT 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both; }
        .lt-fade-4 { animation: fadeUpLT 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both; }
        .lt-fade-5 { animation: fadeUpLT 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes pulse-ring-lt {
          0%   { box-shadow: 0 0 0 0 oklch(var(--p)/0.35); }
          70%  { box-shadow: 0 0 0 12px oklch(var(--p)/0); }
          100% { box-shadow: 0 0 0 0 oklch(var(--p)/0); }
        }
        .pulse-cta-lt { animation: pulse-ring-lt 2.2s ease-out infinite; }
        `,
        }}
      />

      {/* ─── SECTION 1: HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[82vh] flex items-center justify-center overflow-hidden bg-base-100 px-4 py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,oklch(var(--p)/0.10),transparent)]"
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <div className="lt-fade-1 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <Sparkles className="w-3.5 h-3.5" />
            Airbnb VA · Linen &amp; Toiletries Management
          </div>

          <h1 className="lt-fade-2 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight text-base-content">
            Linen and Toiletries Management{' '}
            <span className="text-primary">That Keeps Every Stay Consistent</span>
          </h1>

          <p className="lt-fade-3 max-w-2xl text-lg sm:text-xl text-base-content/70 leading-relaxed">
            Assistophere manages linen and toiletries across your properties, ensuring every guest
            arrives to a clean, fully prepared, and consistent setup.
          </p>

          <p className="sr-only">
            Linen and toiletries management ensures that short term rental properties are
            consistently stocked, clean, and prepared for each guest arrival.
          </p>

          <div className="lt-fade-4 flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/contact"
              className="pulse-cta-lt inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-bold text-primary-content shadow-lg transition-all hover:brightness-110 hover:scale-105 active:scale-100"
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-base-300 bg-base-100 px-8 py-4 text-sm font-semibold text-base-content transition-all hover:border-primary/40 hover:bg-base-200"
            >
              See How It Works
            </a>
          </div>

          {/* Hero visual — supply preparation mockup */}
          <div className="lt-fade-5 mt-8 w-full max-w-2xl rounded-2xl border border-base-300/60 bg-base-200/60 backdrop-blur-sm p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-base-content/50 uppercase tracking-wider">
                Property Setup Status
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-success">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                All Properties Ready
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { name: 'Property A — Manchester', linen: 'Fresh', toiletries: 'Stocked', status: 'Ready' },
                { name: 'Property B — Birmingham', linen: 'Fresh', toiletries: 'Stocked', status: 'Ready' },
                { name: 'Property C — Leeds', linen: 'Replacing', toiletries: 'Checked', status: 'In Progress' },
                { name: 'Property D — Liverpool', linen: 'Fresh', toiletries: 'Stocked', status: 'Ready' },
                { name: 'Property E — Sheffield', linen: 'Scheduled', toiletries: 'Scheduled', status: 'Upcoming' },
              ].map((prop) => (
                <div
                  key={prop.name}
                  className="flex items-center justify-between rounded-xl bg-base-100 border border-base-300/50 px-4 py-3 gap-2"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Home className="w-4 h-4 text-primary/60 shrink-0" />
                    <span className="text-sm font-medium text-base-content truncate">{prop.name}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="hidden sm:inline-flex text-xs text-base-content/50 gap-1">
                      <Package className="w-3.5 h-3.5" /> {prop.linen}
                    </span>
                    <span className="hidden sm:inline-flex text-xs text-base-content/50 gap-1 ml-2">
                      <Droplets className="w-3.5 h-3.5" /> {prop.toiletries}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ml-2 ${
                        prop.status === 'Ready'
                          ? 'bg-success/15 text-success'
                          : prop.status === 'In Progress'
                            ? 'bg-warning/15 text-warning'
                            : 'bg-base-300/60 text-base-content/50'
                      }`}
                    >
                      {prop.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: BOLD STATEMENT ───────────────────────────────────── */}
      <section className="w-full bg-primary py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-3xl sm:text-4xl font-extrabold text-primary-content leading-tight mb-4">
            Guests notice the small things first.
          </p>
          <p className="text-lg text-primary-content/80">
            Clean linen and proper supplies set the tone before anything else.
          </p>
        </div>
      </section>

      {/* ─── SECTION 3: CLARITY ──────────────────────────────────────────── */}
      <section className="w-full bg-base-100 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-6">
            Supplies Are Part of the Guest Experience
          </h2>
          <p className="text-lg text-base-content/70 mb-6 leading-relaxed">
            Linen and toiletries are not just essentials.
          </p>
          <p className="text-base text-base-content/60 mb-6">They affect:</p>
          <ul className="flex flex-col gap-3 mb-8">
            {[
              'First impressions before guests have unpacked',
              'Comfort throughout the entire stay',
              'Cleanliness perception and hygiene confidence',
              'Overall guest satisfaction and review ratings',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-base-content/80">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-base text-base-content/60 leading-relaxed border-l-4 border-primary/30 pl-4 italic">
            Inconsistent setup leads to poor experiences — and poor reviews.
          </p>
        </div>
      </section>

      {/* ─── SECTION 4: THE REAL PROBLEM ─────────────────────────────────── */}
      <section className="w-full bg-base-200/50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-3 text-center">
            Why Supply Management Breaks Down
          </h2>
          <p className="text-base-content/60 text-center mb-12 max-w-xl mx-auto">
            Most hosts encounter these problems — usually right before a guest arrives.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <XCircle className="w-5 h-5 text-error" />, title: 'Missing Items', desc: 'Essential supplies not in place on arrival day.' },
              { icon: <AlertTriangle className="w-5 h-5 text-warning" />, title: 'Inconsistent Quality', desc: 'Different setups between properties or even between stays.' },
              { icon: <Bell className="w-5 h-5 text-error" />, title: 'Last-Minute Shortages', desc: 'Running out of stock with no system to catch it in advance.' },
              { icon: <ClipboardList className="w-5 h-5 text-warning" />, title: 'Poor Cleaner Coordination', desc: 'Cleaners and supplies not aligned — delays and gaps.' },
              { icon: <BarChart2 className="w-5 h-5 text-error" />, title: 'No Tracking System', desc: 'No visibility on stock levels until something runs out.' },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-base-300/60 bg-base-100 p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  {card.icon}
                  <span className="font-bold text-base-content">{card.title}</span>
                </div>
                <p className="text-sm text-base-content/60 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-base-content/50 text-sm mt-10 italic">
            Most supply issues happen because nothing is being monitored properly.
          </p>
        </div>
      </section>

      {/* ─── SECTION 5: HOW IT WORKS ─────────────────────────────────────── */}
      <section id="how-it-works" className="w-full bg-base-100 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-3 text-center">
            How Linen &amp; Toiletries Management Works
          </h2>
          <p className="text-base-content/60 text-center mb-14 max-w-xl mx-auto">
            A structured flow that ensures every property is prepared before the next guest arrives.
          </p>

          {/* Desktop flow */}
          <div className="hidden sm:flex items-stretch gap-0">
            {supplySteps.map((step, i) => (
              <React.Fragment key={step.label}>
                <div className="flex flex-col items-center gap-3 flex-1 min-w-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-primary shrink-0">
                    {step.icon}
                  </div>
                  <span className="text-xs font-semibold text-center text-base-content/80 leading-snug px-1">
                    {step.label}
                  </span>
                </div>
                {i < supplySteps.length - 1 && (
                  <div className="flex items-center self-start mt-6 px-1">
                    <ArrowRight className="w-4 h-4 text-primary/40 shrink-0" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile flow */}
          <div className="flex sm:hidden flex-col gap-0 items-center">
            {supplySteps.map((step, i) => (
              <React.Fragment key={step.label}>
                <div className="flex items-center gap-4 w-full max-w-xs">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-primary shrink-0">
                    {step.icon}
                  </div>
                  <span className="text-sm font-semibold text-base-content/80">{step.label}</span>
                </div>
                {i < supplySteps.length - 1 && (
                  <div className="w-px h-8 bg-primary/20 my-1" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: WHAT WE HANDLE ───────────────────────────────────── */}
      <section className="w-full bg-base-200/50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-3 text-center">
            What Our Linen &amp; Toiletries Management Covers
          </h2>
          <p className="text-base-content/60 text-center mb-12 max-w-xl mx-auto">
            Five areas of operational coverage — managed together so nothing slips.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeHandle.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-base-300/60 bg-base-100 p-6 flex flex-col gap-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="font-bold text-base-content">{item.title}</span>
                </div>
                <ul className="flex flex-col gap-2">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-base-content/70">
                      <CheckCircle2 className="w-4 h-4 text-primary/70 mt-0.5 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="text-primary font-semibold text-lg">
              Outcome: a consistent, reliable guest setup every time.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: BOLD INSIGHT BLOCK ──────────────────────────────── */}
      <section className="w-full bg-base-content py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-3xl sm:text-4xl font-extrabold text-base-100 leading-tight mb-3">
            Inconsistency breaks trust.
          </p>
          <p className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight">
            Consistency builds reviews.
          </p>
        </div>
      </section>

      {/* ─── SECTION 8: WHAT CHANGES ─────────────────────────────────────── */}
      <section className="w-full bg-base-100 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-12 text-center">
            What Changes When Supplies Are Managed Properly
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Without */}
            <div className="rounded-2xl border border-error/20 bg-error/5 p-8 flex flex-col gap-5">
              <div className="flex items-center gap-3 mb-2">
                <XCircle className="w-5 h-5 text-error" />
                <span className="font-bold text-base-content text-lg">Without Management</span>
              </div>
              {[
                'Missing items discovered at check-in',
                'Inconsistent setups between stays',
                'Guest complaints about supplies',
                'Reactive fixes that still fail',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-error/70 mt-0.5 shrink-0" />
                  <span className="text-sm text-base-content/70">{item}</span>
                </div>
              ))}
            </div>
            {/* With */}
            <div className="rounded-2xl border border-success/20 bg-success/5 p-8 flex flex-col gap-5">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span className="font-bold text-base-content text-lg">With Management</span>
              </div>
              {[
                'Fully prepared properties before every arrival',
                'Consistent presentation across all stays',
                'Smoother guest experience from day one',
                'Better reviews and higher satisfaction scores',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-success/70 mt-0.5 shrink-0" />
                  <span className="text-sm text-base-content/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: OUR APPROACH ─────────────────────────────────────── */}
      <section className="w-full bg-base-200/50 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-10 text-center">
            How We Manage Supplies Properly
          </h2>
          <div className="flex flex-col gap-5">
            {[
              { icon: <BarChart2 className="w-5 h-5 text-primary" />, text: 'We track and monitor stock levels across all your properties.' },
              { icon: <RefreshCw className="w-5 h-5 text-primary" />, text: 'We align supplies with your cleaning schedule so nothing is left to chance.' },
              { icon: <ShieldCheck className="w-5 h-5 text-primary" />, text: 'We ensure consistent presentation and quality across every stay.' },
              { icon: <Bell className="w-5 h-5 text-primary" />, text: 'We prevent shortages before they happen — not after a guest complains.' },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-4 rounded-2xl border border-base-300/60 bg-base-100 p-5 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <p className="text-base-content/80 leading-relaxed self-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 10: COMMON MISTAKES ─────────────────────────────────── */}
      <section className="w-full bg-base-100 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-10 text-center">
            Where Linen &amp; Toiletries Go Wrong
          </h2>
          <div className="flex flex-col gap-4">
            {[
              'No inventory tracking — stock runs out without warning',
              'Relying on memory instead of a system',
              'Poor coordination between supplies and cleaning teams',
              'Inconsistent product quality between stays',
              'No restocking system — reactive rather than planned',
            ].map((mistake) => (
              <div
                key={mistake}
                className="flex items-start gap-3 rounded-xl border border-error/15 bg-error/5 p-4"
              >
                <AlertTriangle className="w-4 h-4 text-error mt-0.5 shrink-0" />
                <span className="text-sm text-base-content/75">{mistake}</span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-base-content/50 text-sm italic">
            Supplies fail when they&apos;re not treated as part of operations.
          </p>
        </div>
      </section>

      {/* ─── SECTION 11: COMPARISON TABLE ────────────────────────────────── */}
      <section className="w-full bg-base-200/50 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-12 text-center">
            Unmanaged Supplies vs Structured Management
          </h2>

          {/* Desktop table */}
          <div className="hidden sm:block rounded-2xl border border-base-300/60 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-base-300/40">
                  <th className="py-3 px-6 text-left font-semibold text-base-content/70 w-1/2">
                    Unmanaged
                  </th>
                  <th className="py-3 px-6 text-left font-semibold text-primary w-1/2">
                    Structured Management
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Missing items', 'Fully stocked every time'],
                  ['Inconsistent setups', 'Standardised across all properties'],
                  ['Reactive approach', 'Planned and proactive'],
                  ['Unreliable results', 'Reliable, consistent preparation'],
                ].map(([bad, good], i) => (
                  <tr key={bad} className={i % 2 === 0 ? 'bg-base-100' : 'bg-base-200/30'}>
                    <td className="py-4 px-6 text-base-content/60">
                      <span className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-error/60 shrink-0" />
                        {bad}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-base-content/80">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-success/70 shrink-0" />
                        {good}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="flex sm:hidden flex-col gap-4">
            {[
              ['Missing items', 'Fully stocked every time'],
              ['Inconsistent setups', 'Standardised across all properties'],
              ['Reactive approach', 'Planned and proactive'],
              ['Unreliable results', 'Reliable, consistent preparation'],
            ].map(([bad, good]) => (
              <div key={bad} className="rounded-2xl border border-base-300/60 bg-base-100 overflow-hidden">
                <div className="flex items-center gap-2 bg-error/5 px-4 py-3 border-b border-base-300/40">
                  <XCircle className="w-4 h-4 text-error/70 shrink-0" />
                  <span className="text-sm text-base-content/60">{bad}</span>
                </div>
                <div className="flex items-center gap-2 bg-success/5 px-4 py-3">
                  <CheckCircle2 className="w-4 h-4 text-success/70 shrink-0" />
                  <span className="text-sm text-base-content/80 font-medium">{good}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 12: WHO THIS IS FOR ─────────────────────────────────── */}
      <section className="w-full bg-base-100 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-12 text-center">
            Who This Is Built For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: <Layers className="w-5 h-5 text-primary" />, title: 'Multi-Property Hosts', desc: 'Hosts managing several properties who need consistency across all of them without manual oversight.' },
              { icon: <Home className="w-5 h-5 text-primary" />, title: 'Serviced Accommodation Businesses', desc: 'SA operators who need a reliable, professional supplies system that meets guest expectations every time.' },
              { icon: <Users className="w-5 h-5 text-primary" />, title: 'Operators Wanting Consistency', desc: 'Anyone tired of inconsistent setups and reactive supply fixes that eat into time and margins.' },
              { icon: <Star className="w-5 h-5 text-primary" />, title: 'Hosts Improving Guest Experience', desc: 'Hosts focused on reviews and guest satisfaction who know that details make the difference.' },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-base-300/60 bg-base-200/50 p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  {card.icon}
                  <span className="font-bold text-base-content">{card.title}</span>
                </div>
                <p className="text-sm text-base-content/65 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 13: TRUST / TESTIMONIAL ────────────────────────────── */}
      <section className="w-full bg-base-200/50 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-12">
            What Clients Say
          </h2>
          <div className="rounded-2xl border border-base-300/60 bg-base-100 p-8 shadow-sm flex flex-col items-center gap-6">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-warning text-warning" />
              ))}
            </div>
            <blockquote className="text-lg text-base-content/75 italic leading-relaxed max-w-xl">
              &ldquo;Our properties are always fully prepared now. No more last-minute panics about
              missing linen or running out of toiletries — everything is tracked and ready before
              we even think about it.&rdquo;
            </blockquote>
            <div className="flex flex-col items-center gap-1">
              <span className="font-bold text-base-content">James T.</span>
              <span className="text-sm text-base-content/50">Multi-Property Host, Manchester</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 14: FAQ ─────────────────────────────────────────────── */}
      <section className="w-full bg-base-100 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 15: FINAL CTA ───────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-base-200/50 py-24 px-4">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,oklch(var(--p)/0.12),transparent)]"
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
          <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <Sparkles className="w-3.5 h-3.5" />
            Get Started
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-base-content leading-tight">
            Ready to Keep Every Stay{' '}
            <span className="text-primary">Fully Prepared?</span>
          </h2>

          <p className="text-lg text-base-content/65 leading-relaxed max-w-xl">
            Let&apos;s build a system that keeps your properties consistently stocked and ready —
            so every guest arrives to exactly what they expect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/contact"
              className="pulse-cta-lt inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-10 py-4 text-sm font-bold text-primary-content shadow-xl transition-all hover:brightness-110 hover:scale-105 active:scale-100"
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-xl text-left">
            {[
              { icon: <ShieldCheck className="w-5 h-5 text-primary" />, text: 'Consistent supply standards' },
              { icon: <Package className="w-5 h-5 text-primary" />, text: 'Fully stocked before every stay' },
              { icon: <Layers className="w-5 h-5 text-primary" />, text: 'Works across multiple properties' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 rounded-xl bg-base-100 border border-base-300/60 px-4 py-3">
                {item.icon}
                <span className="text-sm font-medium text-base-content/80">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
