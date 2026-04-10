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
  ShieldCheck,
  RefreshCw,
  Bell,
  Package,
  Droplets,
  Home,
  BarChart2,
  Zap,
  CalendarCheck,
  ClipboardList,
  Settings,
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
    items: [
      'Ensuring fresh linen for every stay',
      'Managing replacements and worn stock',
      'Aligning linen preparation with cleaning teams',
    ],
    outcome: 'Every guest arrives to fresh, properly prepared linen — every time.',
  },
  {
    icon: <Droplets className="w-5 h-5 text-primary" />,
    title: 'Toiletries Management',
    items: [
      'Stocking all essential guest toiletries',
      'Maintaining consistent presentation and quality',
      'Ensuring availability before every arrival',
    ],
    outcome: 'Guests find a fully stocked bathroom without needing to ask for anything.',
  },
  {
    icon: <BarChart2 className="w-5 h-5 text-primary" />,
    title: 'Inventory Tracking',
    items: [
      'Monitoring usage across properties',
      'Tracking stock levels in real time',
      'Preventing shortages before they occur',
    ],
    outcome: 'Nothing runs out unexpectedly — supplies are managed before they become a problem.',
  },
  {
    icon: <RefreshCw className="w-5 h-5 text-primary" />,
    title: 'Restocking Coordination',
    items: [
      'Organising refills ahead of turnovers',
      'Aligning restocking with cleaning schedules',
      'Eliminating last-minute supply issues',
    ],
    outcome: 'Restocking is handled proactively, not in response to a guest complaint.',
  },
  {
    icon: <Layers className="w-5 h-5 text-primary" />,
    title: 'Multi-Property Management',
    items: [
      'Consistent setup across all properties',
      'Centralised coordination and tracking',
      'No gaps between check-out and next arrival',
    ],
    outcome: 'Every property operates to the same standard, regardless of how many you manage.',
  },
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
        .pulse-cta-lt { animation: pulse-ring-lt 2.5s ease-out infinite; }
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
              <div className="lt-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-6 shadow-sm shadow-primary/10">
                <Package className="w-3.5 h-3.5" />
                <span>Linen &amp; Toiletries &middot; UK</span>
              </div>
              <h1 className="lt-fade-2 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-tight mb-6">
                Linen and Toiletries That{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Keep Every Stay Consistent
                </span>
              </h1>
              <p className="lt-fade-3 text-base lg:text-lg text-base-content/65 leading-relaxed mb-4 max-w-lg">
                Assistophere manages linen and toiletries across your UK properties, ensuring every
                guest arrives to a clean, fully prepared, and consistent setup — without you having
                to track it.
              </p>
              <div className="lt-fade-3 mb-8 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm text-base-content/60 leading-relaxed italic">
                Linen and toiletries management ensures that short term rental properties are
                consistently stocked, clean, and prepared for each guest arrival.
              </div>
              <div className="lt-fade-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="pulse-cta-lt btn btn-primary btn-lg rounded-full px-8 gap-2 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/45 transition-all duration-200"
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
              <div className="lt-fade-5 flex items-center gap-4 mt-8 pt-8 border-t border-base-300/60">
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
            <div className="lt-fade-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-base-200 border border-base-300 shadow-2xl shadow-black/40 p-7">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/6" />
                <p className="relative z-10 text-xs font-bold text-base-content/30 uppercase tracking-widest mb-5">
                  Property Supply Status
                </p>
                <div className="relative z-10 flex flex-col gap-3">
                  {[
                    { name: 'Property A — Manchester', linen: 'Fresh', status: 'Ready', color: 'text-emerald-500' },
                    { name: 'Property B — Birmingham', linen: 'Fresh', status: 'Ready', color: 'text-emerald-500' },
                    { name: 'Property C — Leeds', linen: 'Replacing', status: 'In Progress', color: 'text-amber-500' },
                    { name: 'Property D — Liverpool', linen: 'Fresh', status: 'Ready', color: 'text-emerald-500' },
                    { name: 'Property E — Sheffield', linen: 'Scheduled', status: 'Upcoming', color: 'text-base-content/40' },
                  ].map(({ name, linen, status, color }) => (
                    <div
                      key={name}
                      className="grid grid-cols-[1fr_auto] gap-3 items-center bg-base-100/60 rounded-xl px-4 py-3 border border-base-300/60"
                    >
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-base-content truncate">{name}</p>
                        <p className="text-xs text-base-content/45 truncate">Linen: {linen}</p>
                      </div>
                      <p className={`text-xs font-bold shrink-0 ${color}`}>{status}</p>
                    </div>
                  ))}
                </div>
                <div className="relative z-10 flex items-center gap-2 mt-5 text-[10px] text-base-content/25">
                  <ShieldCheck className="w-3 h-3" />
                  <span>All properties tracked and managed</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-content text-xs font-bold px-4 py-2 rounded-2xl shadow-lg shadow-primary/30">
                Every stay prepared
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
            Supplies Are Part of the Guest Experience
          </h2>
          <p className="text-base-content/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Linen and toiletries are not just essentials — they set the tone before guests have
            unpacked. A missing towel or empty toiletry shelf is noticed immediately.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['First Impressions', 'Comfort', 'Cleanliness Perception', 'Guest Reviews', 'Repeat Bookings'].map(
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
            Inconsistent setup leads to poor experiences — and poor reviews.
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
              Why Supply Management Breaks Down
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              { label: 'Missing items on arrival', desc: 'Essential supplies not in place on arrival day — guests notice immediately.' },
              { label: 'Inconsistent quality', desc: 'Different setups between properties or even between stays undermine trust.' },
              { label: 'Last-minute shortages', desc: 'Running out of stock with no system to catch it in advance causes panic.' },
              { label: 'Poor cleaner coordination', desc: 'Cleaners and supplies not aligned — delays and gaps at every turnover.' },
              { label: 'No tracking system', desc: 'No visibility on stock levels until something runs out completely.' },
              { label: 'Reactive management', desc: 'Restocking only happens after a complaint — never before it is needed.' },
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
              What Proper Supply Management Should Do
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: <ShieldCheck className="w-5 h-5 text-primary" />, title: 'Consistent Standards', desc: 'Every guest at every property receives the same quality of linen and toiletries — no exceptions.' },
              { icon: <RefreshCw className="w-5 h-5 text-primary" />, title: 'Proactive Restocking', desc: 'Stock is replenished before it runs out — not in response to a guest complaint.' },
              { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: 'Inventory Visibility', desc: 'Real-time awareness of stock levels across all properties — no guessing, no surprises.' },
              { icon: <ClipboardList className="w-5 h-5 text-primary" />, title: 'Cleaner Alignment', desc: 'Supply preparation is coordinated directly with cleaning turnovers so everything is in place.' },
              { icon: <Bell className="w-5 h-5 text-primary" />, title: 'Issue Prevention', desc: 'Problems are caught before guest arrival — not discovered when a guest messages about a missing item.' },
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
              <Package className="w-3.5 h-3.5" />
              <span>What We Cover</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Our Linen &amp; Toiletries Management Covers
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
              Every property is prepared to the same standard — before every guest arrives.
            </p>
          </div>
        </div>
      </section>

      {/* OPERATIONAL CONNECTION */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-6">
            <Layers className="w-3.5 h-3.5" />
            <span>Part of Your Operations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            Supplies Are Connected to Your Entire Setup
          </h2>
          <p className="text-base-content/60 text-base leading-relaxed max-w-2xl mx-auto mb-10">
            Linen and toiletries management ties directly into your cleaning schedule, booking
            calendar, and guest experience. When it works, the whole operation flows.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: <RefreshCw className="w-5 h-5 text-primary" />, label: 'Cleaning Schedules', desc: 'Supplies are prepared and confirmed in alignment with every cleaning turnover.' },
              { icon: <Home className="w-5 h-5 text-primary" />, label: 'Booking Calendar', desc: 'Restocking is timed to match booking gaps — nothing is left to chance.' },
              { icon: <CheckCircle2 className="w-5 h-5 text-primary" />, label: 'Guest Experience', desc: 'Guests arrive to a fully stocked property — no missing items, no friction.' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-3 p-5 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/30 transition-colors text-center items-center"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="font-bold text-sm text-base-content">{item.label}</p>
                <p className="text-xs text-base-content/50 leading-relaxed">{item.desc}</p>
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
              <Settings className="w-3.5 h-3.5" />
              <span>Comparison</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Unmanaged Supplies vs Structured Management
            </h2>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border border-base-300 shadow-lg">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="px-6 py-4 bg-base-300/60 text-left text-xs font-bold uppercase tracking-wider text-base-content/40 w-1/4">Area</th>
                  <th className="px-6 py-4 bg-base-300/60 text-left text-xs font-bold uppercase tracking-wider text-base-content/40 w-[37.5%]">
                    <div className="flex items-center gap-2"><XCircle className="w-4 h-4 text-error" />Unmanaged</div>
                  </th>
                  <th className="px-6 py-4 bg-primary/12 text-left text-xs font-bold uppercase tracking-wider text-primary w-[37.5%]">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" />Managed</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Setup', 'Missing items on arrival', 'Fully stocked every time'],
                  ['Consistency', 'Different between stays', 'Standardised across all properties'],
                  ['Approach', 'Reactive and last-minute', 'Planned and proactive'],
                  ['Reliability', 'Unpredictable results', 'Consistent, trackable outcomes'],
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
              ['Setup', 'Missing items on arrival', 'Fully stocked every time'],
              ['Consistency', 'Different between stays', 'Standardised across all properties'],
              ['Approach', 'Reactive and last-minute', 'Planned and proactive'],
              ['Reliability', 'Unpredictable results', 'Consistent, trackable outcomes'],
            ].map(([area, bad, good]) => (
              <div key={area} className="rounded-2xl overflow-hidden border border-base-300">
                <div className="px-4 py-2.5 bg-base-300/60 text-xs font-bold text-base-content/40 uppercase tracking-wider">{area}</div>
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
              { icon: <Layers className="w-5 h-5 text-primary" />, title: 'Multi-property hosts', desc: 'Hosts managing several properties who need consistency across all of them without manual oversight.' },
              { icon: <Home className="w-5 h-5 text-primary" />, title: 'Serviced accommodation businesses', desc: 'SA operators who need a reliable, professional supplies system that meets guest expectations every time.' },
              { icon: <Users className="w-5 h-5 text-primary" />, title: 'Operators wanting consistency', desc: 'Anyone tired of inconsistent setups and reactive supply fixes that eat into time and margins.' },
              { icon: <Star className="w-5 h-5 text-primary" />, title: 'Hosts focused on guest experience', desc: 'Hosts who know that reviews are built on details — and want a system that gets those details right.' },
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
              <Package className="w-3.5 h-3.5" />
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
            <Package className="w-3.5 h-3.5" />
            <span>Keep Every Stay Fully Prepared</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-[1.12]">
            Ready to Keep Every Property{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Consistently Stocked?
            </span>
          </h2>
          <p className="text-lg text-base-content/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s build a system that keeps your properties prepared — so every guest arrives
            to exactly what they expect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="pulse-cta-lt btn btn-primary btn-lg rounded-full px-10 gap-2 font-semibold shadow-xl shadow-primary/30 hover:shadow-primary/55 transition-all duration-200"
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
