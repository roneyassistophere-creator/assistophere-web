import React from 'react'
import type { Page } from '@/payload-types'
import Link from 'next/link'
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Layers,
  Users,
  ClipboardList,
  ShieldCheck,
  RefreshCw,
  Bell,
  Wrench,
  Zap,
  Star,
  Clock,
  UserCheck,
  Search,
  BarChart2,
} from 'lucide-react'
import { FaqItem } from './FaqItem'

const faqs = [
  {
    q: 'How quickly are issues handled?',
    a: 'Response speed depends on priority. Urgent issues affecting guest stays are escalated immediately. Non-urgent items are logged, tracked, and scheduled to be resolved before they become a problem.',
  },
  {
    q: 'Do you coordinate contractors?',
    a: "Yes. We contact the relevant trades, schedule repairs, and manage all communication — so you don't need to chase anyone or coordinate between multiple people.",
  },
  {
    q: 'Can you manage multiple properties?',
    a: 'Yes. Multi-property maintenance coordination is central to how we operate. Issues are tracked individually per property and managed without overlap or confusion.',
  },
  {
    q: 'What happens during guest stays?',
    a: 'If an issue arises mid-stay, we manage guest communication to set expectations, coordinate the appropriate response, and ensure minimal disruption to the guest experience.',
  },
]

const whatWeHandle = [
  {
    icon: <ClipboardList className="w-5 h-5 text-primary" />,
    title: 'Issue Tracking',
    points: [
      'Logging every reported problem clearly',
      'Monitoring ongoing issues until resolved',
      'Maintaining records for each property',
    ],
  },
  {
    icon: <Wrench className="w-5 h-5 text-primary" />,
    title: 'Contractor Coordination',
    points: [
      'Contacting the right trades for each issue',
      'Scheduling repairs around bookings',
      'Managing all communication end-to-end',
    ],
  },
  {
    icon: <Zap className="w-5 h-5 text-primary" />,
    title: 'Priority Management',
    points: [
      'Separating urgent from non-urgent issues',
      'Escalating anything affecting guest stays',
      'Minimising disruption at every stage',
    ],
  },
  {
    icon: <UserCheck className="w-5 h-5 text-primary" />,
    title: 'Guest Impact Handling',
    points: [
      'Managing guest expectations during issues',
      'Coordinating resolutions during active stays',
      'Keeping communication clear and reassuring',
    ],
  },
  {
    icon: <Search className="w-5 h-5 text-primary" />,
    title: 'Preventative Awareness',
    points: [
      'Identifying recurring issues across properties',
      'Flagging patterns before they escalate',
      'Improving long-term operational reliability',
    ],
  },
]

const maintenanceSteps = [
  { label: 'Issue Identified', icon: <Search className="w-5 h-5" /> },
  { label: 'Report Logged', icon: <ClipboardList className="w-5 h-5" /> },
  { label: 'Priority Assessed', icon: <Zap className="w-5 h-5" /> },
  { label: 'Contractor Assigned', icon: <Wrench className="w-5 h-5" /> },
  { label: 'Repair Completed', icon: <RefreshCw className="w-5 h-5" /> },
  { label: 'Issue Confirmed Resolved', icon: <ShieldCheck className="w-5 h-5" /> },
]

export const PropertyMaintenanceView: React.FC<{ page: Page }> = () => {
  return (
    <article className="flex flex-col w-full overflow-x-hidden font-sans text-base-content selection:bg-primary/20">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpPM {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pm-fade-1 { animation: fadeUpPM 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) both; }
        .pm-fade-2 { animation: fadeUpPM 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .pm-fade-3 { animation: fadeUpPM 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both; }
        .pm-fade-4 { animation: fadeUpPM 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both; }
        .pm-fade-5 { animation: fadeUpPM 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes pulse-ring-pm {
          0%   { box-shadow: 0 0 0 0 oklch(var(--p)/0.35); }
          70%  { box-shadow: 0 0 0 12px oklch(var(--p)/0); }
          100% { box-shadow: 0 0 0 0 oklch(var(--p)/0); }
        }
        .pulse-cta-pm { animation: pulse-ring-pm 2.2s ease-out infinite; }
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
          <div className="pm-fade-1 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <Sparkles className="w-3.5 h-3.5" />
            Airbnb VA · Property Maintenance
          </div>

          <h1 className="pm-fade-2 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight text-base-content">
            Property Maintenance That Keeps Your STR{' '}
            <span className="text-primary">Running Without Disruptions</span>
          </h1>

          <p className="pm-fade-3 max-w-2xl text-lg sm:text-xl text-base-content/70 leading-relaxed">
            Assistophere manages maintenance for UK short term rental properties, ensuring issues
            are handled quickly, coordinated properly, and resolved without affecting guest
            experience.
          </p>

          <p className="sr-only">
            Property maintenance in short term rentals involves identifying issues, coordinating
            repairs, and ensuring properties remain functional and ready for guest stays.
          </p>

          <div className="pm-fade-4 flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/contact"
              className="pulse-cta-pm inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-bold text-primary-content shadow-lg transition-all hover:brightness-110 hover:scale-105 active:scale-100"
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

          {/* Hero visual — maintenance tracker mockup */}
          <div className="pm-fade-5 mt-8 w-full max-w-2xl rounded-2xl border border-base-300/60 bg-base-200/60 backdrop-blur-sm p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-base-content/50 uppercase tracking-wider">
                Maintenance Tracker
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-success">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />4 Resolved
                This Week
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {[
                {
                  property: 'Property A — Manchester',
                  issue: 'Boiler fault',
                  priority: 'Urgent',
                  status: 'Resolved',
                },
                {
                  property: 'Property B — Birmingham',
                  issue: 'Broken door handle',
                  priority: 'Standard',
                  status: 'In Progress',
                },
                {
                  property: 'Property C — Leeds',
                  issue: 'WiFi outage',
                  priority: 'Urgent',
                  status: 'Resolved',
                },
                {
                  property: 'Property D — Liverpool',
                  issue: 'Shower pressure low',
                  priority: 'Standard',
                  status: 'Scheduled',
                },
                {
                  property: 'Property E — Sheffield',
                  issue: 'Light fitting replacement',
                  priority: 'Low',
                  status: 'Logged',
                },
              ].map((item) => (
                <div
                  key={item.property}
                  className="flex items-center justify-between rounded-xl bg-base-100 border border-base-300/50 px-4 py-3 gap-2"
                >
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-medium text-base-content truncate">
                      {item.property}
                    </span>
                    <span className="text-xs text-base-content/50 truncate">{item.issue}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={`hidden sm:inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                        item.priority === 'Urgent'
                          ? 'bg-error/10 text-error'
                          : item.priority === 'Standard'
                            ? 'bg-warning/10 text-warning'
                            : 'bg-base-300/60 text-base-content/50'
                      }`}
                    >
                      {item.priority}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        item.status === 'Resolved'
                          ? 'bg-success/15 text-success'
                          : item.status === 'In Progress'
                            ? 'bg-warning/15 text-warning'
                            : item.status === 'Scheduled'
                              ? 'bg-primary/15 text-primary'
                              : 'bg-base-300/60 text-base-content/50'
                      }`}
                    >
                      {item.status}
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
            Small issues turn into big problems fast.
          </p>
          <p className="text-lg text-primary-content/80">
            What starts as a minor fault can quickly affect bookings, reviews, and guest experience.
          </p>
        </div>
      </section>

      {/* ─── SECTION 3: CLARITY ──────────────────────────────────────────── */}
      <section className="w-full bg-base-100 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-6">
            Maintenance Isn&apos;t Just Fixing Things
          </h2>
          <p className="text-lg text-base-content/70 mb-6 leading-relaxed">
            Maintenance is part of your daily operations.
          </p>
          <p className="text-base text-base-content/60 mb-4">It connects with:</p>
          <ul className="flex flex-col gap-3 mb-8">
            {[
              'Guest communication — guests report issues and expect a response',
              'Cleaning — cleaners identify faults at every turnover',
              'Check-ins — unresolved issues disrupt arrivals',
              'Overall property readiness — nothing can be ready if something is broken',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-base-content/80">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-base text-base-content/60 leading-relaxed border-l-4 border-primary/30 pl-4 italic">
            Without structure, issues become reactive — and reactive maintenance costs more in time,
            money, and reviews.
          </p>
        </div>
      </section>

      {/* ─── SECTION 4: THE REAL PROBLEM ─────────────────────────────────── */}
      <section className="w-full bg-base-200/50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-3 text-center">
            Why Maintenance Becomes Difficult to Manage
          </h2>
          <p className="text-base-content/60 text-center mb-12 max-w-xl mx-auto">
            These are the patterns that turn small faults into operational headaches.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <Clock className="w-5 h-5 text-error" />,
                title: 'Issues Reported Too Late',
                desc: 'Problems surface at check-in rather than being caught and resolved in advance.',
              },
              {
                icon: <ClipboardList className="w-5 h-5 text-warning" />,
                title: 'No Clear Tracking System',
                desc: 'Without a log, issues get forgotten, duplicated, or left unresolved indefinitely.',
              },
              {
                icon: <Bell className="w-5 h-5 text-error" />,
                title: 'Delays in Response',
                desc: 'Slow reaction times turn minor faults into guest-facing problems.',
              },
              {
                icon: <Wrench className="w-5 h-5 text-warning" />,
                title: 'Poor Contractor Coordination',
                desc: 'Chasing tradespeople manually, missed slots, and unclear communication.',
              },
              {
                icon: <RefreshCw className="w-5 h-5 text-error" />,
                title: 'Repeated Problems',
                desc: 'The same issues keep coming back because root causes are never addressed.',
              },
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
            Maintenance problems don&apos;t come from the issue itself. They come from how it&apos;s
            handled.
          </p>
        </div>
      </section>

      {/* ─── SECTION 5: HOW IT WORKS ─────────────────────────────────────── */}
      <section id="how-it-works" className="w-full bg-base-100 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-3 text-center">
            How Maintenance Is Managed Properly
          </h2>
          <p className="text-base-content/60 text-center mb-14 max-w-xl mx-auto">
            A structured process that takes every issue from identification to confirmed resolution.
          </p>

          {/* Desktop flow */}
          <div className="hidden sm:flex items-stretch gap-0">
            {maintenanceSteps.map((step, i) => (
              <React.Fragment key={step.label}>
                <div className="flex flex-col items-center gap-3 flex-1 min-w-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-primary shrink-0">
                    {step.icon}
                  </div>
                  <span className="text-xs font-semibold text-center text-base-content/80 leading-snug px-1">
                    {step.label}
                  </span>
                </div>
                {i < maintenanceSteps.length - 1 && (
                  <div className="flex items-center self-start mt-6 px-1">
                    <ArrowRight className="w-4 h-4 text-primary/40 shrink-0" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile flow */}
          <div className="flex sm:hidden flex-col gap-0 items-center">
            {maintenanceSteps.map((step, i) => (
              <React.Fragment key={step.label}>
                <div className="flex items-center gap-4 w-full max-w-xs">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-primary shrink-0">
                    {step.icon}
                  </div>
                  <span className="text-sm font-semibold text-base-content/80">{step.label}</span>
                </div>
                {i < maintenanceSteps.length - 1 && <div className="w-px h-8 bg-primary/20 my-1" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: WHAT WE HANDLE ───────────────────────────────────── */}
      <section className="w-full bg-base-200/50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-3 text-center">
            What Our Property Maintenance Covers
          </h2>
          <p className="text-base-content/60 text-center mb-12 max-w-xl mx-auto">
            Five operational areas — managed together so nothing slips through.
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
              Outcome: maintenance handled quickly, clearly, and without disruption.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: BOLD INSIGHT BLOCK ──────────────────────────────── */}
      <section className="w-full bg-base-content py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-3xl sm:text-4xl font-extrabold text-base-100 leading-tight mb-3">
            Good maintenance goes unnoticed.
          </p>
          <p className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight">
            Bad maintenance gets remembered.
          </p>
        </div>
      </section>

      {/* ─── SECTION 8: WHAT CHANGES ─────────────────────────────────────── */}
      <section className="w-full bg-base-100 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-12 text-center">
            What Changes When Maintenance Is Managed Properly
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-error/20 bg-error/5 p-8 flex flex-col gap-5">
              <div className="flex items-center gap-3 mb-2">
                <XCircle className="w-5 h-5 text-error" />
                <span className="font-bold text-base-content text-lg">Without Structure</span>
              </div>
              {[
                'Delayed fixes that affect guest stays',
                'Repeated issues with no root-cause fix',
                'Guest complaints in reviews',
                'Constant operational stress',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-error/70 mt-0.5 shrink-0" />
                  <span className="text-sm text-base-content/70">{item}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-success/20 bg-success/5 p-8 flex flex-col gap-5">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span className="font-bold text-base-content text-lg">With Structure</span>
              </div>
              {[
                'Faster resolutions before they escalate',
                'Fewer disruptions to guest stays',
                'Smoother operations across all properties',
                'Better reviews and guest satisfaction',
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
            How We Manage Maintenance Properly
          </h2>
          <div className="flex flex-col gap-5">
            {[
              {
                icon: <ClipboardList className="w-5 h-5 text-primary" />,
                text: 'We track every issue — logged, monitored, and followed through to resolution.',
              },
              {
                icon: <Wrench className="w-5 h-5 text-primary" />,
                text: 'We coordinate with the right people — the correct trade, at the right time, with clear instructions.',
              },
              {
                icon: <Zap className="w-5 h-5 text-primary" />,
                text: 'We prioritise based on impact — urgent issues affecting guests are escalated immediately.',
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-primary" />,
                text: 'We confirm every resolution — nothing is marked closed until the issue is actually fixed.',
              },
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
            Where Maintenance Goes Wrong
          </h2>
          <div className="flex flex-col gap-4">
            {[
              'No tracking system — issues get forgotten or lost',
              'Delayed response — faults left unresolved until they cause a problem',
              'Poor contractor coordination — chasing, missed slots, and unclear briefs',
              'Ignoring small issues — minor faults left to escalate into major ones',
              'Reactive handling — fixing things after they affect guests instead of before',
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
            Maintenance fails when it&apos;s not managed consistently.
          </p>
        </div>
      </section>

      {/* ─── SECTION 11: COMPARISON TABLE ────────────────────────────────── */}
      <section className="w-full bg-base-200/50 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-12 text-center">
            Reactive Maintenance vs Managed Maintenance
          </h2>

          {/* Desktop table */}
          <div className="hidden sm:block rounded-2xl border border-base-300/60 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-base-300/40">
                  <th className="py-3 px-6 text-left font-semibold text-base-content/70 w-1/2">
                    Reactive
                  </th>
                  <th className="py-3 px-6 text-left font-semibold text-primary w-1/2">Managed</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Delays in fixing issues', 'Fast, prioritised response'],
                  ['Repeated problems', 'Controlled, tracked resolutions'],
                  ['Guest complaints', 'Smooth, uninterrupted stays'],
                  ['Stressful and unpredictable', 'Structured and reliable'],
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
              ['Delays in fixing issues', 'Fast, prioritised response'],
              ['Repeated problems', 'Controlled, tracked resolutions'],
              ['Guest complaints', 'Smooth, uninterrupted stays'],
              ['Stressful and unpredictable', 'Structured and reliable'],
            ].map(([bad, good]) => (
              <div
                key={bad}
                className="rounded-2xl border border-base-300/60 bg-base-100 overflow-hidden"
              >
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
              {
                icon: <Layers className="w-5 h-5 text-primary" />,
                title: 'Multi-Property Hosts',
                desc: 'Hosts managing several properties who need maintenance tracked and resolved across all of them without manual oversight.',
              },
              {
                icon: <BarChart2 className="w-5 h-5 text-primary" />,
                title: 'Serviced Accommodation Businesses',
                desc: 'SA operators who need a reliable maintenance system that protects guest experience and property condition.',
              },
              {
                icon: <Users className="w-5 h-5 text-primary" />,
                title: 'Operators Wanting Reliability',
                desc: 'Anyone tired of reactive fixes who wants a structured approach that prevents issues before they affect guests.',
              },
              {
                icon: <Star className="w-5 h-5 text-primary" />,
                title: 'Hosts Reducing Guest Issues',
                desc: 'Hosts focused on reviews who know that unresolved maintenance directly damages ratings and repeat bookings.',
              },
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
              &ldquo;Maintenance used to be the most stressful part of running our properties. Now
              issues are logged, handled, and resolved without me chasing anyone. It&apos;s
              completely changed how we operate.&rdquo;
            </blockquote>
            <div className="flex flex-col items-center gap-1">
              <span className="font-bold text-base-content">Sarah M.</span>
              <span className="text-sm text-base-content/50">
                Serviced Accommodation Operator, Birmingham
              </span>
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
            Ready to Take Control of <span className="text-primary">Property Maintenance?</span>
          </h2>

          <p className="text-lg text-base-content/65 leading-relaxed max-w-xl">
            Let&apos;s build a system that keeps your properties running smoothly — issues tracked,
            resolved, and confirmed before they ever affect a guest.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/contact"
              className="pulse-cta-pm inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-10 py-4 text-sm font-bold text-primary-content shadow-xl transition-all hover:brightness-110 hover:scale-105 active:scale-100"
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-xl text-left">
            {[
              {
                icon: <ShieldCheck className="w-5 h-5 text-primary" />,
                text: 'Every issue tracked to resolution',
              },
              {
                icon: <Wrench className="w-5 h-5 text-primary" />,
                text: 'Contractors coordinated for you',
              },
              {
                icon: <Layers className="w-5 h-5 text-primary" />,
                text: 'Works across multiple properties',
              },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 rounded-xl bg-base-100 border border-base-300/60 px-4 py-3"
              >
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
