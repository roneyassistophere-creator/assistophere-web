import React from 'react'
import Link from 'next/link'
import {
  Layers,
  Star,
  Phone,
  ArrowRight,
  CheckCircle2,
  XCircle,
  ChevronRight,
  AlertTriangle,
  TrendingUp,
  Target,
  Building2,
  Globe,
  Layout,
  Settings,
  MonitorSmartphone,
  BarChart3,
  Repeat,
  ArrowLeft,
  ShieldCheck,
  Shuffle,
} from 'lucide-react'
import type { Page } from '@/payload-types'

export const PlatformManagementView: React.FC<{ page: Page }> = () => {
  return (
    <div className="min-h-screen text-base-content overflow-x-hidden">
      <style>{`
        @keyframes pulse-ring-pm {
          0%,100% { box-shadow: 0 0 0 0 hsl(var(--p)/.35); }
          50%      { box-shadow: 0 0 0 10px hsl(var(--p)/0); }
        }
        @keyframes pm-fade-up {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .pm-fade-1 { animation: pm-fade-up .55s ease both .10s; }
        .pm-fade-2 { animation: pm-fade-up .55s ease both .22s; }
        .pm-fade-3 { animation: pm-fade-up .55s ease both .34s; }
        .pm-fade-4 { animation: pm-fade-up .55s ease both .46s; }
        .pm-fade-5 { animation: pm-fade-up .55s ease both .58s; }
        .pulse-cta-pm { animation: pulse-ring-pm 2.4s ease-in-out infinite; }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 w-130 h-130 bg-linear-to-br from-primary/13 via-primary/4 to-transparent rounded-full blur-[140px]" />
          <div className="absolute top-1/2 -right-40 w-105 h-105 bg-linear-to-bl from-secondary/10 via-secondary/3 to-transparent rounded-full blur-[120px]" />
        </div>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column */}
            <div className="space-y-6">
              <div className="pm-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium">
                <Layers className="w-4 h-4" />
                Platform Management · UK STR
              </div>
              <h1 className="pm-fade-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight">
                Platform Management That Keeps Your{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  STR Brand Consistent Everywhere
                </span>
              </h1>
              <p className="pm-fade-3 text-lg lg:text-xl text-base-content/70 leading-relaxed max-w-lg">
                Assistophere manages your social media platforms for UK STR businesses, ensuring
                your accounts stay active, aligned, and professionally maintained.
              </p>

              {/* AI-extractable line */}
              <div className="pm-fade-3 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm italic text-base-content/60">
                Platform management in social media involves maintaining multiple accounts, ensuring
                consistency, and managing content and interactions across platforms.
              </div>

              <div className="pm-fade-4 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="pulse-cta-pm inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-content font-semibold hover:opacity-90 transition-opacity"
                >
                  <Phone className="w-4 h-4" />
                  Book a Discovery Call
                </Link>
                <Link
                  href="/services/social-media-management"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-base-300 hover:border-primary/40 transition-colors font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Social Media Management
                </Link>
              </div>
            </div>

            {/* Right column — multi-platform visual */}
            <div className="pm-fade-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-base-300 bg-base-200 shadow-xl p-6">
                <div className="text-xs text-base-content/50 font-mono mb-4 flex items-center gap-2">
                  <MonitorSmartphone className="w-4 h-4 text-primary" />
                  Platform Overview
                </div>

                {/* Platform rows */}
                {[
                  {
                    platform: 'Instagram',
                    handle: '@assistophere',
                    status: 'Active',
                    posts: 312,
                    colour: 'from-pink-500 to-rose-500',
                  },
                  {
                    platform: 'Facebook',
                    handle: 'Assistophere UK',
                    status: 'Active',
                    posts: 278,
                    colour: 'from-blue-600 to-blue-400',
                  },
                  {
                    platform: 'TikTok',
                    handle: '@assistophere.uk',
                    status: 'Active',
                    posts: 196,
                    colour: 'from-slate-800 to-slate-600',
                  },
                  {
                    platform: 'LinkedIn',
                    handle: 'Assistophere Ltd',
                    status: 'Active',
                    posts: 144,
                    colour: 'from-sky-700 to-sky-500',
                  },
                ].map((p) => (
                  <div
                    key={p.platform}
                    className="flex items-center justify-between p-3 rounded-xl bg-base-100 border border-base-300 mb-2 last:mb-0"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg bg-linear-to-br ${p.colour} flex items-center justify-center`}
                      >
                        <Globe className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{p.platform}</p>
                        <p className="text-xs text-base-content/50">{p.handle}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-success/15 text-success text-xs font-medium">
                        <CheckCircle2 className="w-3 h-3" /> {p.status}
                      </span>
                      <p className="text-xs text-base-content/40 mt-0.5">{p.posts} posts</p>
                    </div>
                  </div>
                ))}

                {/* Summary bar */}
                <div className="mt-4 p-3 rounded-xl bg-primary/8 border border-primary/20 flex items-center justify-between">
                  <span className="text-xs font-medium text-primary">
                    4 platforms · All aligned
                  </span>
                  <Shuffle className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: CLARITY ───────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
                <Layout className="w-4 h-4" />
                The Challenge
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
                Managing Multiple Platforms Shouldn&apos;t Feel Scattered
              </h2>
              <p className="text-base-content/70 leading-relaxed mb-6">
                Running STR social media often means juggling multiple accounts across different
                platforms — with inconsistent activity and no central structure. Without a system,
                it becomes difficult to manage.
              </p>
              <ul className="space-y-3">
                {[
                  'Multiple accounts across different networks',
                  'Different platforms with different requirements',
                  'Inconsistent activity and posting rhythms',
                  'No coordinated strategy across channels',
                  'Time-consuming to manage manually',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-warning mt-0.5 shrink-0" />
                    <span className="text-base-content/75 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Globe, label: 'Platforms', value: '4+', sub: 'to manage simultaneously' },
                { icon: Repeat, label: 'Consistency', value: '0%', sub: 'without a system' },
                {
                  icon: Settings,
                  label: 'Manual Work',
                  value: 'High',
                  sub: 'without centralisation',
                },
                {
                  icon: ShieldCheck,
                  label: 'Brand Alignment',
                  value: 'Weak',
                  sub: 'when disconnected',
                },
              ].map(({ icon: Icon, label, value, sub }) => (
                <div
                  key={label}
                  className="p-5 rounded-2xl border border-base-300 bg-base-200 text-center"
                >
                  <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">{value}</p>
                  <p className="text-xs font-semibold text-base-content/60 mb-1">{label}</p>
                  <p className="text-xs text-base-content/45">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: REAL PROBLEM ──────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <AlertTriangle className="w-4 h-4" />
              Root Causes
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Why Platform Management Becomes Difficult
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {[
              {
                title: 'Handling Multiple Platforms Manually',
                desc: 'Logging into and managing each platform separately is slow and prone to errors.',
              },
              {
                title: 'Inconsistent Posting Across Channels',
                desc: 'Without a system, some platforms get updated regularly while others go silent.',
              },
              {
                title: 'Lack of Coordination',
                desc: 'No shared strategy means each platform pulls in a different direction.',
              },
              {
                title: 'Different Content Formats',
                desc: 'Each platform has its own requirements — adapting content takes time and skill.',
              },
              {
                title: 'No Central Control',
                desc: 'Without oversight, it is impossible to see the bigger picture across all channels.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="p-5 rounded-2xl bg-base-100 border border-error/20">
                <XCircle className="w-5 h-5 text-error mb-3" />
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-base-content/65">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-base-content/60 italic text-sm">
            Without structure, platforms become disconnected — and disconnected platforms weaken
            your brand.
          </p>
        </div>
      </section>

      {/* ── SECTION 4: WHAT IT SHOULD DO ─────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Target className="w-4 h-4" />
              What Good Looks Like
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">
              What Proper Platform Management Achieves
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Repeat,
                title: 'Consistency Across Platforms',
                desc: 'Aligned content and activity across every channel, so your brand feels cohesive wherever people find you.',
              },
              {
                icon: Settings,
                title: 'Centralised Control',
                desc: 'Everything managed from one system — no more switching between platforms or losing track of activity.',
              },
              {
                icon: BarChart3,
                title: 'Efficient Posting',
                desc: 'Content distributed properly to each platform in the right format at the right time.',
              },
              {
                icon: ShieldCheck,
                title: 'Brand Alignment',
                desc: 'The same identity, tone, and visual style across all channels — building recognition and trust.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl border border-base-300 bg-base-200 hover:border-primary/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/12 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm text-base-content/65 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: WHAT WE HANDLE ────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Layers className="w-4 h-4" />
              Our Scope
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">
              What Our Platform Management Covers
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto text-sm">
              Every element of platform management — handled end to end.
            </p>
          </div>

          {/* Table — desktop */}
          <div className="hidden md:block rounded-2xl overflow-hidden border border-base-300 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary/10 border-b border-base-300">
                  <th className="text-left px-6 py-4 font-semibold text-primary w-1/4">Area</th>
                  <th className="text-left px-6 py-4 font-semibold text-primary w-2/4">
                    What We Do
                  </th>
                  <th className="text-left px-6 py-4 font-semibold text-primary w-1/4">Outcome</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    area: 'Account Management',
                    what: 'Managing multiple platforms, maintaining activity, ensuring consistency across all accounts',
                    outcome: 'All platforms active and aligned',
                  },
                  {
                    area: 'Content Distribution',
                    what: 'Adapting content for each platform, maintaining structure, ensuring alignment across channels',
                    outcome: 'Right content on right platform',
                  },
                  {
                    area: 'Profile Optimisation',
                    what: 'Updating account details, improving presentation, maintaining a professional appearance',
                    outcome: 'Strong first impressions',
                  },
                  {
                    area: 'Activity Monitoring',
                    what: 'Tracking posting schedules, ensuring consistency, maintaining a reliable presence',
                    outcome: 'No gaps or inactive periods',
                  },
                  {
                    area: 'Centralised Management',
                    what: 'Organising all platforms from one system, reducing confusion, improving overall control',
                    outcome: 'Simplified, efficient operation',
                  },
                ].map(({ area, what, outcome }, i) => (
                  <tr key={area} className={i % 2 === 0 ? 'bg-base-100' : 'bg-base-200'}>
                    <td className="px-6 py-4 font-medium">{area}</td>
                    <td className="px-6 py-4 text-base-content/70">{what}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 text-success font-medium">
                        <CheckCircle2 className="w-4 h-4" />
                        {outcome}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards — mobile */}
          <div className="md:hidden space-y-4">
            {[
              {
                area: 'Account Management',
                what: 'Managing multiple platforms, maintaining activity and consistency',
                outcome: 'All platforms active and aligned',
              },
              {
                area: 'Content Distribution',
                what: 'Adapting content for each platform, maintaining structure',
                outcome: 'Right content on right platform',
              },
              {
                area: 'Profile Optimisation',
                what: 'Updating account details, improving presentation',
                outcome: 'Strong first impressions',
              },
              {
                area: 'Activity Monitoring',
                what: 'Tracking posting schedules, ensuring consistency',
                outcome: 'No gaps or inactive periods',
              },
              {
                area: 'Centralised Management',
                what: 'Organising platforms from one system, improving control',
                outcome: 'Simplified, efficient operation',
              },
            ].map(({ area, what, outcome }) => (
              <div key={area} className="p-5 rounded-2xl bg-base-100 border border-base-300">
                <p className="font-semibold mb-1">{area}</p>
                <p className="text-sm text-base-content/65 mb-2">{what}</p>
                <span className="inline-flex items-center gap-1.5 text-success text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" /> {outcome}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-base-content/60 italic text-sm mt-8">
            All platforms working together — not separately.
          </p>
        </div>
      </section>

      {/* ── SECTION 6: CONNECTS TO STRATEGY ─────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: ShieldCheck,
                    label: 'Reflects your brand',
                    desc: 'Consistent identity across every platform',
                  },
                  {
                    icon: TrendingUp,
                    label: 'Supports listings',
                    desc: 'Platforms that drive direct bookings',
                  },
                  {
                    icon: Repeat,
                    label: 'Aligns content',
                    desc: 'Unified message across all channels',
                  },
                ].map(({ icon: Icon, label, desc }) => (
                  <div
                    key={label}
                    className="p-5 rounded-2xl border border-base-300 bg-base-200 text-center"
                  >
                    <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-sm mb-1">{label}</p>
                    <p className="text-xs text-base-content/55">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4" />
                Strategic Value
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
                Platform Management Supports Your Brand
              </h2>
              <p className="text-base-content/70 leading-relaxed mb-4">
                Your platforms should reflect your brand, support your listings, and align with your
                content strategy. Without alignment across channels, your impact is reduced — even
                if the individual content is good.
              </p>
              <p className="text-base-content/70 leading-relaxed">
                Proper platform management ensures every channel contributes to the same goal:
                building trust, driving awareness, and supporting direct bookings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: COMMON MISTAKES ───────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <AlertTriangle className="w-4 h-4" />
              Common Pitfalls
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Where Platform Management Goes Wrong</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {[
              {
                mistake: 'Posting Differently on Each Platform',
                fix: 'Content should be adapted — not entirely different — to maintain a consistent brand voice.',
              },
              {
                mistake: 'Inconsistent Branding',
                fix: 'Different bios, profile images, and styles across platforms confuse your audience.',
              },
              {
                mistake: 'Neglecting Certain Accounts',
                fix: 'An inactive platform signals neglect. All accounts need regular, structured activity.',
              },
              {
                mistake: 'No Structure or Plan',
                fix: 'Posting reactively with no system leads to gaps, repetition, and missed opportunities.',
              },
              {
                mistake: 'Manual Management at Scale',
                fix: 'Managing each platform manually is unsustainable as your STR business grows.',
              },
            ].map(({ mistake, fix }) => (
              <div key={mistake} className="p-5 rounded-2xl bg-base-100 border border-warning/20">
                <AlertTriangle className="w-5 h-5 text-warning mb-3" />
                <h3 className="font-semibold mb-2 text-sm">{mistake}</h3>
                <p className="text-xs text-base-content/60 leading-relaxed">{fix}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-base-content/60 italic text-sm">
            Platforms fail when they&apos;re not managed together — they need a unified approach.
          </p>
        </div>
      </section>

      {/* ── SECTION 8: OUR APPROACH ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
                <Settings className="w-4 h-4" />
                Our Method
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
                How We Manage Platforms Properly
              </h2>
              <p className="text-base-content/70 leading-relaxed mb-8">
                We don&apos;t manage platforms in isolation. We build a centralised system so every
                channel works together — consistently and efficiently.
              </p>
              <div className="space-y-4">
                {[
                  {
                    step: '01',
                    title: 'Centralise Management',
                    desc: 'All platforms brought under one structured system so nothing gets missed.',
                  },
                  {
                    step: '02',
                    title: 'Maintain Consistency',
                    desc: 'Same brand voice, visual identity, and posting rhythm across every channel.',
                  },
                  {
                    step: '03',
                    title: 'Align Content Across Platforms',
                    desc: 'Content adapted for each platform while keeping the core message unified.',
                  },
                  {
                    step: '04',
                    title: 'Keep Accounts Active',
                    desc: 'Regular, structured activity on every platform — no gaps, no neglect.',
                  },
                ].map(({ step, title, desc }) => (
                  <div
                    key={step}
                    className="flex gap-4 p-4 rounded-xl border border-base-300 bg-base-200"
                  >
                    <span className="text-2xl font-black text-primary/25 shrink-0 w-10">
                      {step}
                    </span>
                    <div>
                      <p className="font-semibold mb-1">{title}</p>
                      <p className="text-sm text-base-content/65">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-base-300 bg-base-200 p-6 shadow-xl">
                <p className="text-xs text-base-content/50 font-mono mb-4 flex items-center gap-2">
                  <Settings className="w-4 h-4 text-primary" />
                  Centralised Platform System
                </p>
                {[
                  { label: 'Account Audit', done: true },
                  { label: 'Profile Alignment', done: true },
                  { label: 'Content Calendar Setup', done: true },
                  { label: 'Cross-Platform Scheduling', done: true },
                  { label: 'Activity Monitoring', done: true },
                  { label: 'Monthly Review', done: false },
                ].map(({ label, done }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 py-2.5 border-b border-base-300 last:border-0"
                  >
                    {done ? (
                      <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border-2 border-primary/40 shrink-0" />
                    )}
                    <span
                      className={`text-sm ${done ? 'text-base-content/80' : 'text-base-content/40'}`}
                    >
                      {label}
                    </span>
                    {!done && (
                      <span className="ml-auto text-xs text-primary font-medium">In progress</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: COMPARISON ────────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Shuffle className="w-4 h-4" />
              Side by Side
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Disconnected Platforms vs Managed Platforms
            </h2>
          </div>

          {/* Desktop table */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Disconnected */}
            <div className="rounded-2xl border border-error/20 bg-base-100 overflow-hidden">
              <div className="bg-error/10 px-6 py-4 border-b border-error/15">
                <h3 className="font-bold text-error flex items-center gap-2">
                  <XCircle className="w-5 h-5" /> Disconnected
                </h3>
              </div>
              <ul className="divide-y divide-base-300">
                {[
                  'Inconsistent tone and style',
                  'Confusing audience experience',
                  'Low activity on some platforms',
                  'Weak and fragmented branding',
                ].map((item) => (
                  <li key={item} className="px-6 py-4 flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-error shrink-0 mt-0.5" />
                    <span className="text-sm text-base-content/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Managed */}
            <div className="rounded-2xl border border-success/20 bg-base-100 overflow-hidden">
              <div className="bg-success/10 px-6 py-4 border-b border-success/15">
                <h3 className="font-bold text-success flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Managed
                </h3>
              </div>
              <ul className="divide-y divide-base-300">
                {[
                  'Aligned brand voice everywhere',
                  'Structured, coherent experience',
                  'Active presence on all platforms',
                  'Strong, consistent identity',
                ].map((item) => (
                  <li key={item} className="px-6 py-4 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    <span className="text-sm text-base-content/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {[
              { bad: 'Inconsistent tone and style', good: 'Aligned brand voice everywhere' },
              { bad: 'Confusing audience experience', good: 'Structured, coherent experience' },
              { bad: 'Low activity on some platforms', good: 'Active presence on all platforms' },
              { bad: 'Weak and fragmented branding', good: 'Strong, consistent identity' },
            ].map(({ bad, good }) => (
              <div key={bad} className="p-4 rounded-xl bg-base-100 border border-base-300">
                <div className="flex items-start gap-2 mb-2">
                  <XCircle className="w-4 h-4 text-error shrink-0 mt-0.5" />
                  <span className="text-sm text-base-content/60">{bad}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                  <span className="text-sm text-base-content/80 font-medium">{good}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: WHO THIS IS FOR ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Target className="w-4 h-4" />
              Ideal Fit
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Who This Is Built For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Globe,
                title: 'Hosts on Multiple Platforms',
                desc: 'Managing Instagram, Facebook, TikTok, and LinkedIn simultaneously without a system.',
              },
              {
                icon: Building2,
                title: 'Serviced Accommodation Businesses',
                desc: 'SA operators who need all their channels reflecting the same professional brand.',
              },
              {
                icon: TrendingUp,
                title: 'Operators Scaling Their Brand',
                desc: 'Hosts growing beyond Airbnb who need a consistent multi-platform presence.',
              },
              {
                icon: ShieldCheck,
                title: 'Hosts Needing Control',
                desc: 'Anyone who has lost track of their platforms and needs a structured approach.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl border border-base-300 bg-base-200 hover:border-primary/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/12 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm text-base-content/65 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 11: TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Star className="w-4 h-4" />
              Client Results
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">What Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  'We went from managing four platforms manually to having everything centralised. The difference in consistency is night and day.',
                name: 'Sarah M.',
                role: 'STR Portfolio Owner · Manchester',
              },
              {
                quote:
                  'Our brand finally looks and feels the same everywhere. Guests have commented that our social media feels polished and professional.',
                name: 'James T.',
                role: 'Serviced Accommodation Operator · London',
              },
              {
                quote:
                  'I didn\u2019t realise how scattered our platforms were until Assistophere brought them all together. It\u2019s made a real difference.',
                name: 'Priya K.',
                role: 'Multi-Property Host · Birmingham',
              },
            ].map(({ quote, name, role }) => (
              <div
                key={name}
                className="p-6 rounded-2xl bg-base-100 border border-base-300 flex flex-col gap-4"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-base-content/70 leading-relaxed flex-1">
                  &ldquo;{quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-sm">{name}</p>
                  <p className="text-xs text-base-content/50">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 12: FAQ ──────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <ChevronRight className="w-4 h-4" />
              FAQ
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {[
              {
                q: 'Which platforms do you manage?',
                a: 'We manage Instagram, Facebook, TikTok, and LinkedIn as standard. Depending on your service, we can also cover Pinterest, YouTube Shorts, or other relevant channels.',
              },
              {
                q: 'Do you post on all platforms?',
                a: 'Yes — we distribute content across all platforms you are active on, adapting the format and copy to suit each one while keeping the brand consistent.',
              },
              {
                q: 'Can you manage multiple accounts?',
                a: 'Absolutely. We are built to manage multiple accounts across multiple platforms simultaneously, giving you a centralised, structured approach.',
              },
              {
                q: 'Do you optimise profiles?',
                a: 'Yes. Profile optimisation is included — we review and update your bios, profile images, highlights, and account details to ensure everything is aligned and professional.',
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group border border-base-300 rounded-xl bg-base-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer select-none font-medium hover:bg-base-300/40 transition-colors list-none">
                  <span>{q}</span>
                  <ChevronRight className="w-4 h-4 text-primary shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="px-6 pb-5 text-sm text-base-content/65 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 13: FINAL CTA ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden border border-base-300 bg-linear-to-br from-primary/22 via-base-200 to-secondary/15 p-10 lg:p-16 text-center">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-20 -right-20 w-130 h-130 bg-linear-to-bl from-primary/8 to-transparent rounded-full blur-[100px]" />
              <div className="absolute -bottom-20 -left-20 w-105 h-105 bg-linear-to-tr from-secondary/8 to-transparent rounded-full blur-[100px]" />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-6">
              <Layers className="w-4 h-4" />
              Get Started
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 leading-tight">
              Ready to Manage All Your{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                Platforms Properly?
              </span>
            </h2>
            <p className="text-base-content/70 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Let&apos;s bring structure and consistency across your social media — so every
              platform works together for your STR brand.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="pulse-cta-pm inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-content font-bold text-lg hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5" />
                Book a Discovery Call
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services/social-media-management"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-base-300 hover:border-primary/40 transition-colors font-semibold text-lg"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Social Media Management
              </Link>
            </div>
            <p className="mt-6 text-xs text-base-content/40 italic">
              We don&apos;t just manage platforms. We align them.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
