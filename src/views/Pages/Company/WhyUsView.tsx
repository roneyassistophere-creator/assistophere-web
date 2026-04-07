import React from 'react'
import type { Page } from '@/payload-types'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Layers,
  BarChart3,
  Eye,
  TrendingUp,
  ShieldCheck,
  Repeat2,
  CalendarCheck,
  Star,
  ChevronRight,
  Zap,
  Users,
  AlertCircle,
} from 'lucide-react'

export const WhyUsView: React.FC<{ page: Page }> = () => {
  return (
    <article className="flex flex-col w-full overflow-x-hidden font-sans text-base-content selection:bg-primary/20">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .wu-fade-1 { animation: fadeUp 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) both; }
        .wu-fade-2 { animation: fadeUp 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .wu-fade-3 { animation: fadeUp 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both; }
        .wu-fade-4 { animation: fadeUp 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both; }
        .wu-fade-5 { animation: fadeUp 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) both; }
      `,
        }}
      />

      {/* ─── SECTION 1: HERO ─────────────────────────────────────────── */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-[55%] h-[70%] bg-linear-to-br from-primary/12 via-primary/4 to-transparent rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[55%] bg-linear-to-tl from-secondary/10 via-secondary/3 to-transparent rounded-full blur-[100px] -z-10" />

        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Copy */}
            <div>
              <div className="wu-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Why Assistophere</span>
              </div>
              <h1 className="wu-fade-2 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.1] tracking-tight mb-6">
                Why Assistophere{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Works Differently
                </span>
              </h1>
              <p className="wu-fade-3 text-lg lg:text-xl text-base-content/65 leading-relaxed mb-10 max-w-lg">
                Most support services focus on tasks. We focus on how your entire short-term rental
                operation runs, day in and day out.
              </p>
              <div className="wu-fade-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="btn btn-primary btn-lg rounded-full px-8 gap-2 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-200"
                >
                  <CalendarCheck className="w-5 h-5" />
                  Book a Discovery Call
                </Link>
                <Link
                  href="/services"
                  className="btn btn-outline btn-lg rounded-full px-8 gap-2 font-semibold border-base-300 hover:bg-base-200 transition-all duration-200"
                >
                  See What We Do
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="wu-fade-5 relative">
              <div className="relative rounded-3xl overflow-hidden aspect-4/3 bg-base-200 border border-base-300 flex items-center justify-center shadow-2xl shadow-black/30">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/8" />
                <div className="relative z-10 flex flex-col items-center gap-3 text-center p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Layers className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-base-content/40 text-sm font-medium">
                    Image Placeholder — Operations / Workflow Visual
                  </p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-base-100 border border-base-300 rounded-2xl px-4 py-3 shadow-xl shadow-black/20 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-success/15 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                </div>
                <div>
                  <p className="text-xs font-bold text-base-content">Operations-first</p>
                  <p className="text-[10px] text-base-content/50">Not just task support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: REALITY CHECK ────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-6">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>The Problem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            Most STR Support Breaks Down Over Time
          </h2>

          <p className="text-base-content/65 text-lg leading-relaxed mb-8">
            At the start, everything sounds good. Tasks are handled, messages are replied to, things
            seem organised.
          </p>

          {/* Breakdown list */}
          <div className="flex flex-col gap-3 text-left max-w-md mx-auto mb-10">
            {[
              'Communication gaps appear',
              'Responsibilities get unclear',
              'Issues fall through the cracks',
              'Everything still depends on you',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-4 rounded-xl bg-base-100 border border-error/20"
              >
                <div className="shrink-0 w-7 h-7 rounded-full bg-error/10 border border-error/20 flex items-center justify-center">
                  <XCircle className="w-4 h-4 text-error" />
                </div>
                <p className="text-base-content/80 text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>

          {/* Closing statement */}
          <div className="rounded-2xl border border-base-300 bg-base-100 p-6 lg:p-8">
            <p className="text-base-content/60 text-base leading-relaxed mb-3">
              That&apos;s not a support problem.
            </p>
            <p className="text-xl font-bold text-base-content">
              That&apos;s a{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                structure problem.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: CORE DIFFERENCE ──────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-5">
                <Zap className="w-3.5 h-3.5" />
                <span>Our Approach</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-5">
                We Don&apos;t Work Task by Task
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed mb-5">
                We look at your business as a whole.
              </p>
              <p className="text-base-content/65 text-base leading-relaxed mb-8">
                Guest communication, cleaning, pricing, listings, and systems are all connected.
                Instead of handling them separately, we make them work together.
              </p>

              {/* Connected dots visual */}
              <div className="flex flex-col gap-2 mb-8">
                {[
                  'Guest Communication',
                  'Cleaning & Turnovers',
                  'Pricing & Listings',
                  'Workflows & Systems',
                ].map((item, i, arr) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                      {i < arr.length - 1 && <div className="w-px h-5 bg-primary/30" />}
                    </div>
                    <span className="text-sm text-base-content/70 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlight card */}
            <div className="relative rounded-3xl p-8 lg:p-10 bg-linear-to-br from-primary/15 via-base-200 to-secondary/10 border border-primary/20 shadow-xl shadow-primary/10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/8 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-black leading-snug text-base-content mb-4">
                  We don&apos;t just support your business.
                </div>
                <div className="h-px bg-base-300 mb-4" />
                <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  We help it run properly.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: 4 PILLARS ────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Our Framework</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What We Focus On
            </h2>
            <p className="text-base-content/60 text-lg max-w-xl mx-auto">
              Four pillars that make the difference between a business that runs properly and one
              that just gets by.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                num: '01',
                icon: <Repeat2 className="w-6 h-6 text-primary" />,
                title: 'Consistency',
                desc: 'Things get done properly every day, not occasionally.',
              },
              {
                num: '02',
                icon: <Layers className="w-6 h-6 text-primary" />,
                title: 'Structure',
                desc: 'Clear workflows replace guesswork and chaos.',
              },
              {
                num: '03',
                icon: <Eye className="w-6 h-6 text-primary" />,
                title: 'Visibility',
                desc: 'You always know what&apos;s happening without chasing updates.',
              },
              {
                num: '04',
                icon: <TrendingUp className="w-6 h-6 text-primary" />,
                title: 'Scalability',
                desc: 'The setup supports growth instead of slowing it down.',
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="group flex flex-col gap-4 p-6 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/35 hover:shadow-lg hover:shadow-primary/8 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    {pillar.icon}
                  </div>
                  <span className="text-3xl font-black text-base-content/8 group-hover:text-primary/20 transition-colors">
                    {pillar.num}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-base-content text-lg mb-2">{pillar.title}</h3>
                  <p className="text-base-content/55 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: HOW WE THINK ─────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Operational Thinking</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              How We Actually Think About Your Business
            </h2>
            <p className="text-base-content/60 text-lg max-w-xl mx-auto">
              Anyone can handle a task. We ask the question behind the task.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                shallow: "We don't just reply to guests",
                deep: 'We track patterns to prevent recurring issues',
                icon: <Users className="w-4 h-4" />,
              },
              {
                shallow: "We don't just manage cleaners",
                deep: 'We prevent gaps before they affect your guests',
                icon: <ShieldCheck className="w-4 h-4" />,
              },
              {
                shallow: "We don't just update listings",
                deep: 'We improve conversion and ranking performance',
                icon: <TrendingUp className="w-4 h-4" />,
              },
              {
                shallow: "We don't just follow instructions",
                deep: 'We improve the structure those instructions sit inside',
                icon: <Layers className="w-4 h-4" />,
              },
            ].map((item) => (
              <div
                key={item.shallow}
                className="group grid grid-cols-1 sm:grid-cols-2 rounded-2xl overflow-hidden border border-base-300 hover:border-primary/30 transition-colors"
              >
                {/* Left — shallow */}
                <div className="flex items-center gap-4 p-5 bg-base-200">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-error/10 border border-error/20 flex items-center justify-center text-error/60">
                    <XCircle className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-base-content/50 font-medium">{item.shallow}</p>
                </div>
                {/* Arrow divider — desktop only */}
                <div className="hidden sm:flex items-center justify-center w-0 relative">
                  <div className="absolute -left-3 z-10 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-md shadow-primary/25">
                    <ChevronRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
                {/* Right — deep */}
                <div className="flex items-center gap-4 p-5 bg-base-100 group-hover:bg-primary/5 transition-colors">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <p className="text-sm text-base-content/80 font-semibold">{item.deep}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Authority line */}
          <div className="mt-10 text-center">
            <p className="text-base-content/45 text-sm italic">
              This is the difference between a support service and an operations partner.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: WITHOUT VS WITH ─────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>Before &amp; After</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Changes When You Work With Us
            </h2>
          </div>

          {/* Desktop table */}
          <div className="hidden sm:block rounded-3xl overflow-hidden border border-base-300 shadow-xl shadow-black/15">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="w-1/2 py-4 px-6 text-left bg-base-300/60 text-base-content/50 font-semibold uppercase text-xs tracking-wider">
                    Without Assistophere
                  </th>
                  <th className="w-1/2 py-4 px-6 text-left bg-primary/15 text-primary font-semibold uppercase text-xs tracking-wider">
                    With Assistophere
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Reactive management', 'Structured operations'],
                  ['Constant owner involvement', 'Controlled oversight'],
                  ['Disconnected tasks', 'Connected system'],
                  ['Stressful day-to-day', 'Smooth, predictable operations'],
                  ['Issues surface late', 'Issues prevented early'],
                ].map(([without, with_], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-base-100' : 'bg-base-200/50'}>
                    <td className="py-4 px-6 text-base-content/50 border-r border-base-300">
                      <span className="flex items-center gap-2.5">
                        <XCircle className="w-4 h-4 text-error/50 shrink-0" />
                        {without}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-base-content/80 font-medium">
                      <span className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        {with_}
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
              ['Reactive management', 'Structured operations'],
              ['Constant owner involvement', 'Controlled oversight'],
              ['Disconnected tasks', 'Connected system'],
              ['Stressful day-to-day', 'Smooth, predictable operations'],
              ['Issues surface late', 'Issues prevented early'],
            ].map(([without, with_], i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-base-300">
                <div className="flex items-center gap-3 px-4 py-3.5 bg-base-100 border-b border-base-300">
                  <XCircle className="w-4 h-4 text-error/50 shrink-0" />
                  <p className="text-sm text-base-content/50">{without}</p>
                </div>
                <div className="flex items-center gap-3 px-4 py-3.5 bg-primary/8">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <p className="text-sm text-base-content/85 font-semibold">{with_}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: YOU STAY IN CONTROL ─────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual */}
            <div className="relative order-last lg:order-first">
              <div className="rounded-3xl p-8 lg:p-10 bg-base-200 border border-base-300 shadow-xl shadow-black/15">
                {/* Two-layer diagram */}
                <p className="text-xs font-bold text-base-content/40 uppercase tracking-widest mb-6">
                  How it works
                </p>
                <div className="flex flex-col gap-3">
                  <div className="rounded-xl p-4 border border-primary/25 bg-primary/10 text-center">
                    <p className="font-bold text-primary text-sm">
                      You — Decisions &amp; Direction
                    </p>
                    <p className="text-xs text-base-content/50 mt-0.5">
                      Strategy · Growth · Key choices
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-px h-4 bg-base-300" />
                      <div className="px-3 py-1 rounded-full border border-base-300 bg-base-100 text-[10px] text-base-content/40 font-medium">
                        Assistophere handles
                      </div>
                      <div className="w-px h-4 bg-base-300" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {['Guest Comms', 'Cleaning', 'Listings', 'Systems'].map((item) => (
                      <div
                        key={item}
                        className="rounded-lg p-3 text-center border border-base-300 bg-base-100"
                      >
                        <p className="text-xs font-semibold text-base-content/60">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Control &amp; Trust</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                You Stay in Control
              </h2>
              <div className="flex flex-col gap-4 text-base-content/65 text-lg leading-relaxed">
                <p>We don&apos;t take over your business.</p>
                <p className="font-semibold text-base-content text-xl">
                  We take over the operational load.
                </p>
                <p>
                  You stay in control of decisions, while we make sure everything runs properly
                  behind the scenes.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                {[
                  'You set the direction — we execute it',
                  'You approve the changes — we implement them',
                  'You own the business — we protect how it runs',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-base-content/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: WHO WE ARE NOT ───────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-base-300 border border-base-300 text-base-content/60 text-sm font-medium mb-5">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Setting Expectations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-5">
            Who This Isn&apos;t For
          </h2>
          <p className="text-base-content/55 text-lg mb-10 max-w-md mx-auto">
            We&apos;re selective about who we work with. This matters to both sides.
          </p>

          <div className="flex flex-col gap-3 text-left mb-10">
            {[
              'Hosts who want cheap, task-only support with no interest in structure',
              'Businesses not ready to improve how they operate',
              'People expecting instant shortcuts without putting in the work',
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 p-5 rounded-xl bg-base-100 border border-base-300"
              >
                <div className="shrink-0 mt-0.5 w-7 h-7 rounded-full bg-base-300 flex items-center justify-center">
                  <XCircle className="w-4 h-4 text-base-content/30" />
                </div>
                <p className="text-base-content/60 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          {/* Flip it — who it IS for */}
          <div className="rounded-2xl p-6 border border-primary/25 bg-primary/8 text-left">
            <p className="text-sm font-bold text-primary mb-3">
              If you do want things to run properly →
            </p>
            <p className="text-base-content/65 text-sm leading-relaxed">
              You take your STR portfolio seriously. You want less chaos, better results, and a
              business that doesn&apos;t depend on you being available for everything.{' '}
              <span className="font-semibold text-base-content">
                That&apos;s exactly who we&apos;re built for.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: TRUST / TESTIMONIALS ─────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-sm font-medium mb-4">
              <Star className="w-3.5 h-3.5" />
              <span>Client Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Clients Value
            </h2>
            <p className="text-base-content/55 text-lg max-w-md mx-auto">
              Real feedback from STR hosts who wanted more than just task support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col gap-5 p-6 rounded-2xl bg-base-200 border border-base-300 hover:border-amber-500/25 transition-colors"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                {/* Quote placeholder */}
                <div className="flex-1 rounded-xl bg-base-300/50 border border-base-300 p-4 flex items-center justify-center min-h-24">
                  <p className="text-base-content/30 text-xs text-center font-medium">
                    Testimonial Placeholder — Client Quote #{i}
                  </p>
                </div>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-base-300 border border-base-300 flex items-center justify-center text-xs font-bold text-base-content/40">
                    {['AH', 'BK', 'CL'][i - 1]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-base-content/70">Client Name</p>
                    <p className="text-xs text-base-content/40">STR Host, UK</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 10: FINAL POSITIONING STATEMENT ─────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-5">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>The Result</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            A Better Way to Run Your STR Business
          </h2>
          <p className="text-base-content/60 text-lg mb-10 leading-relaxed">
            When your backend is structured, everything becomes easier.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              {
                icon: <Users className="w-5 h-5 text-primary" />,
                label: 'Better guest experience',
              },
              { icon: <BarChart3 className="w-5 h-5 text-primary" />, label: 'Stronger listings' },
              { icon: <ShieldCheck className="w-5 h-5 text-primary" />, label: 'Less stress' },
              { icon: <TrendingUp className="w-5 h-5 text-primary" />, label: 'More time to grow' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-base-100 border border-base-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="text-xs font-semibold text-base-content/70 text-center leading-tight">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-base-content/40 text-sm italic">
            It doesn&apos;t happen by accident. It happens when you build it properly.
          </p>
        </div>
      </section>

      {/* ─── SECTION 11: FINAL CTA ───────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-base-200 to-secondary/15 -z-10" />
        <div className="absolute inset-0 bg-base-100/60 -z-10" />
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-linear-to-b from-primary/10 to-transparent rounded-full blur-[120px] -z-10" />

        <div className="container max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-medium mb-6">
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Let&apos;s Talk</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-[1.15]">
            If You Want Things to{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Run Properly
            </span>
          </h2>

          <p className="text-lg text-base-content/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s build a setup that works without depending on you for everything.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn btn-primary btn-lg rounded-full px-10 gap-2 font-semibold shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-200"
            >
              <CalendarCheck className="w-5 h-5" />
              Book a Discovery Call
            </Link>
            <Link
              href="/services"
              className="btn btn-outline btn-lg rounded-full px-8 gap-2 font-semibold border-base-300 hover:bg-base-200 transition-all duration-200"
            >
              See Our Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-xs text-base-content/30 mt-7">
            Free call · No commitment · Honest conversation
          </p>
        </div>
      </section>
    </article>
  )
}
