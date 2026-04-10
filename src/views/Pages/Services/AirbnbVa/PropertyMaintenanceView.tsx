import React from 'react'
import type { Page } from '@/payload-types'
import Link from 'next/link'
import {
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
  Wrench,
  Zap,
  Clock,
  UserCheck,
  Search,
  CalendarCheck,
  Settings,
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
    items: [
      'Logging every reported problem clearly',
      'Monitoring ongoing issues until resolved',
      'Maintaining records for each property',
    ],
    outcome: 'No issue falls through the cracks — every problem is tracked from report to resolution.',
  },
  {
    icon: <Wrench className="w-5 h-5 text-primary" />,
    title: 'Contractor Coordination',
    items: [
      'Contacting the right trades for each issue',
      'Scheduling repairs around bookings',
      'Managing all communication end-to-end',
    ],
    outcome: 'You never need to chase a contractor or coordinate between multiple trades yourself.',
  },
  {
    icon: <Zap className="w-5 h-5 text-primary" />,
    title: 'Priority Management',
    items: [
      'Separating urgent from non-urgent issues',
      'Escalating anything affecting guest stays',
      'Minimising disruption at every stage',
    ],
    outcome: 'The right issues get addressed first — nothing urgent waits while low-priority tasks queue.',
  },
  {
    icon: <UserCheck className="w-5 h-5 text-primary" />,
    title: 'Guest Impact Handling',
    items: [
      'Managing guest expectations during issues',
      'Coordinating resolutions during active stays',
      'Keeping communication clear and reassuring',
    ],
    outcome: 'Guests are kept informed and reassured — reducing the risk of poor reviews from disruption.',
  },
  {
    icon: <Search className="w-5 h-5 text-primary" />,
    title: 'Preventative Awareness',
    items: [
      'Identifying recurring issues across properties',
      'Flagging patterns before they escalate',
      'Improving long-term operational reliability',
    ],
    outcome: 'Repeat problems are caught and addressed before they become expensive or guest-facing.',
  },
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
        .pulse-cta-pm { animation: pulse-ring-pm 2.5s ease-out infinite; }
      `,
        }}
      />

      {/* HERO */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-[60%] h-[80%] bg-linear-to-br from-primary/13 via-primary/4 to-transparent rounded-full blur-[140px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[45%] h-[60%] bg-linear-to-tl from-secondary/12 via-secondary/4 to-transparent rounded-full blur-[100px] -z-10" />
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="pm-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-6 shadow-sm shadow-primary/10">
                <Wrench className="w-3.5 h-3.5" />
                <span>Property Maintenance &middot; UK</span>
              </div>
              <h1 className="pm-fade-2 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-tight mb-6">
                Property Maintenance Coordination That{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Keeps Every Issue Under Control
                </span>
              </h1>
              <p className="pm-fade-3 text-base lg:text-lg text-base-content/65 leading-relaxed mb-4 max-w-lg">
                Assistophere manages maintenance issues across your UK properties — logging,
                prioritising, and coordinating repairs so nothing slips through and no contractor
                needs chasing.
              </p>
              <div className="pm-fade-3 mb-8 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm text-base-content/60 leading-relaxed italic">
                Property maintenance coordination ensures that issues are tracked, prioritised, and
                resolved efficiently — protecting both guest experience and property value.
              </div>
              <div className="pm-fade-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="pulse-cta-pm btn btn-primary btn-lg rounded-full px-8 gap-2 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/45 transition-all duration-200"
                >
                  <CalendarCheck className="w-5 h-5" />
                  Book a Discovery Call
                </Link>
                <a
                  href="#what-we-cover"
                  className="btn btn-outline btn-lg rounded-full px-8 gap-2 font-semibold border-base-300 hover:bg-base-200 transition-all duration-200"
                >
                  See How It Works
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="pm-fade-5 flex items-center gap-4 mt-8 pt-8 border-t border-base-300/60">
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
            {/* Visual mockup */}
            <div className="pm-fade-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-base-200 border border-base-300 shadow-2xl shadow-black/40 p-7">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/6" />
                <p className="relative z-10 text-xs font-bold text-base-content/30 uppercase tracking-widest mb-5">
                  Maintenance Issue Tracker
                </p>
                <div className="relative z-10 flex flex-col gap-3">
                  {[
                    { issue: 'Boiler fault — Property B', priority: 'Urgent', status: 'In Progress', color: 'text-error' },
                    { issue: 'Broken blind — Property A', priority: 'Normal', status: 'Scheduled', color: 'text-amber-500' },
                    { issue: 'Dripping tap — Property C', priority: 'Low', status: 'Logged', color: 'text-base-content/40' },
                    { issue: 'Light fitting — Property D', priority: 'Normal', status: 'Resolved', color: 'text-emerald-500' },
                    { issue: 'Lock adjustment — Property E', priority: 'Normal', status: 'Scheduled', color: 'text-amber-500' },
                  ].map(({ issue, priority, status, color }) => (
                    <div
                      key={issue}
                      className="grid grid-cols-[1fr_auto] gap-3 items-center bg-base-100/60 rounded-xl px-4 py-3 border border-base-300/60"
                    >
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-base-content truncate">{issue}</p>
                        <p className="text-xs text-base-content/45">Priority: {priority}</p>
                      </div>
                      <p className={`text-xs font-bold shrink-0 ${color}`}>{status}</p>
                    </div>
                  ))}
                </div>
                <div className="relative z-10 flex items-center gap-2 mt-5 text-[10px] text-base-content/25">
                  <ShieldCheck className="w-3 h-3" />
                  <span>All issues tracked to resolution</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-content text-xs font-bold px-4 py-2 rounded-2xl shadow-lg shadow-primary/30">
                Every issue resolved
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLARITY */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-6">
            <Zap className="w-3.5 h-3.5" />
            <span>The Reality</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            Maintenance Affects More Than the Property
          </h2>
          <p className="text-base-content/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Every unresolved maintenance issue is a risk — to your property, your guests, and your
            reviews. A broken boiler or a persistent leak is not just an inconvenience; it becomes
            a guest experience failure if it is not managed properly.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Property Value', 'Guest Satisfaction', 'Review Scores', 'Operational Reliability', 'Cost Control'].map(
              (item) => (
                <span
                  key={item}
                  className="inline-flex items-center px-4 py-1.5 rounded-full bg-base-100 border border-base-300 text-sm font-medium text-base-content/70"
                >
                  {item}
                </span>
              ),
            )}
          </div>
          <p className="mt-8 text-base-content/45 italic text-base font-medium">
            Unresolved issues compound — small problems become expensive ones.
          </p>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-4">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>The Problem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Why Maintenance Gets Neglected
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              { label: 'Issues not logged', desc: 'Problems are reported verbally and forgotten — nothing is tracked or followed up.' },
              { label: 'Contractor delays', desc: 'Trades are chased repeatedly with no system to manage timelines or accountability.' },
              { label: 'Wrong priority order', desc: 'Minor issues get fixed while urgent ones affecting guests are left waiting.' },
              { label: 'Guest disruption', desc: 'Active maintenance during stays causes friction and results in poor reviews.' },
              { label: 'No resolution confirmation', desc: 'Repairs are claimed as done but never verified — the problem returns.' },
              { label: 'Reactive only', desc: 'Issues are only addressed after they cause a problem — never before.' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex gap-3 p-5 rounded-2xl bg-base-200 border border-base-300 hover:border-error/30 transition-colors"
              >
                <XCircle className="w-4 h-4 text-error shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-base-content mb-1">{item.label}</p>
                  <p className="text-xs text-base-content/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT GOOD LOOKS LIKE */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>The Standard</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Proper Maintenance Coordination Should Do
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: <ClipboardList className="w-5 h-5 text-primary" />, title: 'Complete Issue Visibility', desc: 'Every reported issue is logged with full details — nothing is forgotten, nothing goes untracked.' },
              { icon: <Zap className="w-5 h-5 text-primary" />, title: 'Clear Priority Order', desc: 'Urgent issues are escalated immediately; lower-priority items are scheduled and managed without urgency theatre.' },
              { icon: <Wrench className="w-5 h-5 text-primary" />, title: 'Managed Contractor Relations', desc: 'The right trades are contacted, repairs are scheduled, and all communication is handled without back-and-forth.' },
              { icon: <Clock className="w-5 h-5 text-primary" />, title: 'Resolution Confirmation', desc: 'Issues are not marked closed until resolution is confirmed — no issue is assumed to be fixed.' },
              { icon: <Bell className="w-5 h-5 text-primary" />, title: 'Guest-Aware Scheduling', desc: 'All maintenance is planned around bookings — no disruption to active stays without proper management.' },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/30 transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-base text-base-content mb-2">{item.title}</h3>
                  <p className="text-sm text-base-content/55 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE COVER */}
      <section id="what-we-cover" className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <Wrench className="w-3.5 h-3.5" />
              <span>What We Cover</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Our Property Maintenance Coordination Covers
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            {whatWeHandle.map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1.5fr] gap-5 p-6 rounded-2xl bg-base-200 border border-base-300 hover:border-primary/30 transition-colors"
              >
                <div className="flex gap-3 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mt-0.5">
                    {item.icon}
                  </div>
                  <p className="font-bold text-base text-base-content pt-2">{item.title}</p>
                </div>
                <ul className="flex flex-col gap-2">
                  {item.items.map((pt) => (
                    <li key={pt} className="flex gap-2 items-start text-sm text-base-content/65">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="flex items-start gap-2 pl-0 lg:pl-4 lg:border-l border-base-300">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-base-content/60 italic leading-relaxed">{item.outcome}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-5 rounded-2xl bg-primary/8 border border-primary/20 text-center">
            <p className="text-base font-semibold text-base-content/75">
              Every issue is tracked, managed, and confirmed resolved — before it affects a guest.
            </p>
          </div>
        </div>
      </section>

      {/* MAINTENANCE FLOW */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-6">
            <Settings className="w-3.5 h-3.5" />
            <span>How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            The Maintenance Resolution Flow
          </h2>
          <p className="text-base-content/60 text-base leading-relaxed max-w-2xl mx-auto mb-12">
            Every issue follows a structured path from identification to confirmed resolution.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { step: '01', label: 'Issue Identified', icon: <Search className="w-5 h-5 text-primary" /> },
              { step: '02', label: 'Report Logged', icon: <ClipboardList className="w-5 h-5 text-primary" /> },
              { step: '03', label: 'Priority Assessed', icon: <Zap className="w-5 h-5 text-primary" /> },
              { step: '04', label: 'Contractor Assigned', icon: <Wrench className="w-5 h-5 text-primary" /> },
              { step: '05', label: 'Repair Completed', icon: <RefreshCw className="w-5 h-5 text-primary" /> },
              { step: '06', label: 'Issue Resolved', icon: <ShieldCheck className="w-5 h-5 text-primary" /> },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="text-[10px] font-bold text-primary/60 uppercase tracking-widest">{item.step}</p>
                <p className="font-bold text-sm text-base-content text-center">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON MISTAKES */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-4">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Common Mistakes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Where Property Maintenance Goes Wrong
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { point: 'No tracking system', detail: 'Issues are reported verbally and forgotten — never logged or followed up.' },
              { point: 'Unmanaged contractors', detail: 'Trades need chasing constantly with no accountability or clear timeline.' },
              { point: 'No priority framework', detail: 'Urgent and low-priority issues are treated the same — causing delays where it matters.' },
              { point: 'Repairs during stays', detail: 'Maintenance happening while guests are present causes friction and damages reviews.' },
              { point: 'No resolution confirmation', detail: 'Repairs are assumed complete without verification — problems return.' },
            ].map((item) => (
              <div
                key={item.point}
                className="flex gap-3 p-5 rounded-2xl bg-base-200 border border-base-300 hover:border-error/25 transition-colors"
              >
                <XCircle className="w-4 h-4 text-error shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-base-content mb-1">{item.point}</p>
                  <p className="text-xs text-base-content/50 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Settings className="w-3.5 h-3.5" />
              <span>Our Approach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              How We Coordinate Maintenance Properly
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: <ClipboardList className="w-5 h-5 text-primary" />, title: 'We log every issue immediately', desc: 'Every problem is recorded with full details so nothing is forgotten and everything can be tracked.' },
              { icon: <Zap className="w-5 h-5 text-primary" />, title: 'We prioritise based on impact', desc: 'Urgent issues affecting guests are escalated immediately; lower-priority items are managed without unnecessary panic.' },
              { icon: <Wrench className="w-5 h-5 text-primary" />, title: 'We manage contractors end-to-end', desc: 'We contact trades, schedule repairs, and follow up on completion — no chasing needed from you.' },
              { icon: <ShieldCheck className="w-5 h-5 text-primary" />, title: 'We confirm every resolution', desc: 'Issues are not closed until we have verified the repair is complete — not just assumed.' },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/30 transition-colors"
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
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Comparison</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Uncoordinated Maintenance vs Managed Maintenance
            </h2>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border border-base-300 shadow-lg">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="px-6 py-4 bg-base-300/60 text-left text-xs font-bold uppercase tracking-wider text-base-content/40 w-1/4">Area</th>
                  <th className="px-6 py-4 bg-base-300/60 text-left text-xs font-bold uppercase tracking-wider text-base-content/40 w-[37.5%]">
                    <div className="flex items-center gap-2"><XCircle className="w-4 h-4 text-error" />Uncoordinated</div>
                  </th>
                  <th className="px-6 py-4 bg-primary/12 text-left text-xs font-bold uppercase tracking-wider text-primary w-[37.5%]">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" />Managed</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Tracking', 'Issues forgotten or lost', 'Every issue logged and monitored'],
                  ['Priority', 'All issues treated equally', 'Urgent issues escalated immediately'],
                  ['Contractors', 'Constant chasing required', 'Fully managed end-to-end'],
                  ['Resolution', 'Assumed done, often returns', 'Confirmed and verified complete'],
                ].map(([area, bad, good], i) => (
                  <tr key={area} className={i % 2 === 0 ? 'bg-base-100' : 'bg-base-200/50'}>
                    <td className="px-6 py-4 font-semibold text-base-content/60 text-xs uppercase tracking-wider">{area}</td>
                    <td className="px-6 py-4 text-base-content/50">{bad}</td>
                    <td className="px-6 py-4 text-base-content font-semibold bg-primary/5">{good}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden flex flex-col gap-3">
            {[
              ['Tracking', 'Issues forgotten or lost', 'Every issue logged and monitored'],
              ['Priority', 'All issues treated equally', 'Urgent issues escalated immediately'],
              ['Contractors', 'Constant chasing required', 'Fully managed end-to-end'],
              ['Resolution', 'Assumed done, often returns', 'Confirmed and verified complete'],
            ].map(([area, bad, good]) => (
              <div key={area} className="rounded-2xl overflow-hidden border border-base-300">
                <div className="px-4 py-2.5 bg-base-300/60 text-xs font-bold text-base-content/40 uppercase tracking-wider">{area}</div>
                <div className="grid grid-cols-2">
                  <div className="px-3 py-3.5 border-r border-base-300 bg-base-100">
                    <p className="text-[10px] text-base-content/35 mb-1">Uncoordinated</p>
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

      {/* WHO THIS IS FOR */}
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
              { icon: <Layers className="w-5 h-5 text-primary" />, title: 'Multi-property hosts', desc: 'Hosts managing several properties who need all maintenance issues tracked and coordinated without manual involvement.' },
              { icon: <UserCheck className="w-5 h-5 text-primary" />, title: 'Operators without in-house maintenance', desc: 'Hosts relying on external contractors who need coordination and follow-through without the admin overhead.' },
              { icon: <Users className="w-5 h-5 text-primary" />, title: 'Hosts tired of chasing trades', desc: 'Anyone who spends time chasing contractors and getting inconsistent results — and wants a proper system instead.' },
              { icon: <Star className="w-5 h-5 text-primary" />, title: 'Review-focused hosts', desc: 'Hosts who know that maintenance failures become review failures — and want issues resolved before guests notice them.' },
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

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-sm font-medium mb-4">
              <Star className="w-3.5 h-3.5" />
              <span>Client Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">What Clients Say</h2>
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

      {/* FAQ */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <Wrench className="w-3.5 h-3.5" />
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

      {/* FINAL CTA */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/22 via-base-200 to-secondary/15 -z-10" />
        <div className="absolute inset-0 bg-base-100/55 -z-10" />
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-linear-to-b from-primary/12 to-transparent rounded-full blur-[130px] -z-10" />
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-medium mb-6">
            <Wrench className="w-3.5 h-3.5" />
            <span>Resolve Issues Before They Escalate</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-[1.12]">
            Ready to Keep Every Property{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Properly Maintained?
            </span>
          </h2>
          <p className="text-lg text-base-content/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s build a system that tracks every issue, manages every contractor, and
            confirms every resolution — so nothing falls through the cracks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="pulse-cta-pm btn btn-primary btn-lg rounded-full px-10 gap-2 font-semibold shadow-xl shadow-primary/30 hover:shadow-primary/55 transition-all duration-200"
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
            Free 30-min call &middot; No commitment &middot; UK-based team
          </p>
        </div>
      </section>
    </article>
  )
}
