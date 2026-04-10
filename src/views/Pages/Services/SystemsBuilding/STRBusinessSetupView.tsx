import React from 'react'
import {
  Rocket,
  ListChecks,
  LayoutDashboard,
  Phone,
  CheckCircle2,
  XCircle,
  Star,
  ChevronRight,
  ArrowRight,
  Users,
  BarChart3,
  MessageSquare,
  ClipboardList,
  TrendingUp,
  Building2,
  Target,
  Settings,
  CalendarDays,
} from 'lucide-react'
import { FaqItem } from './FaqItem'
import type { Page } from '@/payload-types'

export const STRBusinessSetupView: React.FC<{ page: Page }> = () => {
  return (
    <div className="min-h-screen text-base-content overflow-x-hidden">
      <style>{`
        @keyframes pulse-ring-sbs {
          0%,100% { box-shadow: 0 0 0 0 hsl(var(--p)/.35); }
          50%      { box-shadow: 0 0 0 10px hsl(var(--p)/0); }
        }
        @keyframes sbs-fade-up {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .sbs-fade-1 { animation: sbs-fade-up .55s ease both .10s; }
        .sbs-fade-2 { animation: sbs-fade-up .55s ease both .22s; }
        .sbs-fade-3 { animation: sbs-fade-up .55s ease both .34s; }
        .sbs-fade-4 { animation: sbs-fade-up .55s ease both .46s; }
        .sbs-fade-5 { animation: sbs-fade-up .55s ease both .58s; }
        .pulse-cta-sbs { animation: pulse-ring-sbs 2.4s ease-in-out infinite; }
      `}</style>

      {/* HERO */}
      <section className="relative overflow-hidden pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 w-130 h-130 bg-linear-to-br from-primary/13 via-primary/4 to-transparent rounded-full blur-[140px]" />
          <div className="absolute top-1/2 -right-40 w-105 h-105 bg-linear-to-bl from-secondary/10 via-secondary/3 to-transparent rounded-full blur-[120px]" />
        </div>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="sbs-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium">
                <Rocket className="w-4 h-4" />
                STR Business Setup · UK
              </div>
              <h1 className="sbs-fade-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight">
                Start Your STR Business With the{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Right Setup From Day One
                </span>
              </h1>
              <p className="sbs-fade-3 text-lg text-base-content/70 leading-relaxed max-w-lg">
                Assistophere helps UK hosts set up short term rental businesses with structured
                systems, clear processes, and everything needed to operate properly from the start.
              </p>
              <div className="sbs-fade-4 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm italic text-base-content/65">
                STR business setup involves creating listings, systems, workflows, and operational
                structure to launch and manage a short term rental business effectively.
              </div>
              <div className="sbs-fade-5 flex flex-wrap gap-3 pt-1">
                <button className="pulse-cta-sbs btn btn-primary btn-lg rounded-full px-8 gap-2">
                  <Phone className="w-4 h-4" /> Book a Discovery Call
                </button>
                <button className="btn btn-outline btn-lg rounded-full px-8 gap-2">
                  See How It Works <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="sbs-fade-5 flex items-center gap-3 pt-2">
                <div className="flex -space-x-2">
                  {['bg-primary', 'bg-secondary', 'bg-accent', 'bg-neutral'].map((c, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full border-2 border-base-100 ${c} flex items-center justify-center text-xs font-bold text-white`}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-base-content/55 mt-0.5">Trusted by UK STR operators</p>
                </div>
              </div>
            </div>

            {/* Hero visual — setup dashboard */}
            <div className="hidden lg:block">
              <div className="relative rounded-3xl border border-base-300 bg-base-200/60 backdrop-blur-sm p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-error/70" />
                  <div className="w-3 h-3 rounded-full bg-warning/70" />
                  <div className="w-3 h-3 rounded-full bg-success/70" />
                  <span className="ml-2 text-xs text-base-content/40 font-mono">
                    str-setup.checklist
                  </span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { task: 'Listing created & optimised', done: true },
                    { task: 'Pricing strategy configured', done: true },
                    { task: 'Guest communication templates', done: true },
                    { task: 'Check-in / check-out flow', done: true },
                    { task: 'Cleaning coordination system', done: true },
                    { task: 'Calendar & availability rules', done: false },
                    { task: 'Backend tools connected', done: false },
                  ].map(({ task, done }) => (
                    <div
                      key={task}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border text-xs ${done ? 'bg-success/6 border-success/20 text-base-content/70' : 'bg-base-100 border-base-300 text-base-content/45'}`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${done ? 'bg-success/20' : 'border border-base-300'}`}
                      >
                        {done && <CheckCircle2 className="w-3 h-3 text-success" />}
                      </div>
                      {task}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between px-1">
                  <span className="text-xs text-base-content/40">5 of 7 complete</span>
                  <span className="text-xs text-primary font-semibold">→ On track</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLARITY */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-2">
              <LayoutDashboard className="w-4 h-4" /> The Setup Reality
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Starting Is Easy. Setting It Up Properly Is Not.
            </h2>
            <p className="text-base-content/65 text-lg leading-relaxed">
              Most people focus on getting a property and listing it online. But a proper setup
              includes systems, workflows, and structure — and without it, problems start early.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                {
                  icon: ListChecks,
                  label: 'Systems',
                  desc: 'Structured processes that keep operations running smoothly.',
                },
                {
                  icon: Settings,
                  label: 'Workflows',
                  desc: 'Clear steps for every task from check-in to cleaning.',
                },
                {
                  icon: LayoutDashboard,
                  label: 'Structure',
                  desc: 'A backend that is organised and ready to scale.',
                },
              ].map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="bg-base-100 rounded-2xl border border-base-300 p-5 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-sm">{label}</p>
                  <p className="text-xs text-base-content/55 mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE REAL PROBLEM */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-4">
                <XCircle className="w-4 h-4" /> Why It Fails Early
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Why Most STR Setups Fail Early</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  point: 'No operational structure',
                  detail: 'The business launches with no defined processes in place.',
                },
                {
                  point: 'Poor listing setup',
                  detail: 'Listings are incomplete, unoptimised, or inconsistent across platforms.',
                },
                {
                  point: 'No pricing strategy',
                  detail: 'Pricing is set arbitrarily with no structure or review process.',
                },
                {
                  point: 'Unclear processes',
                  detail: 'Nobody knows what to do or when — every situation is handled ad hoc.',
                },
                {
                  point: 'Reliance on manual work',
                  detail: 'Everything requires the host personally, making scale impossible.',
                },
              ].map(({ point, detail }) => (
                <div
                  key={point}
                  className="flex gap-4 p-5 rounded-2xl border border-error/15 bg-error/4"
                >
                  <XCircle className="w-5 h-5 text-error shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">{point}</p>
                    <p className="text-xs text-base-content/55 mt-0.5">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-base-content/60 mt-8 italic text-sm">
              Starting without structure creates issues from day one.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT A PROPER SETUP INCLUDES */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <CheckCircle2 className="w-4 h-4" /> The Complete Picture
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              What a Complete STR Setup Should Cover
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              {
                icon: ListChecks,
                title: 'Listing Setup',
                desc: 'Clear, optimised listings ready to convert across every platform.',
              },
              {
                icon: Settings,
                title: 'Operational Flow',
                desc: 'Defined processes for every daily task from the start.',
              },
              {
                icon: CalendarDays,
                title: 'Pricing & Calendar',
                desc: 'A structured pricing and availability approach built in from day one.',
              },
              {
                icon: MessageSquare,
                title: 'Communication System',
                desc: 'Templates and workflows for handling guests consistently.',
              },
              {
                icon: LayoutDashboard,
                title: 'Backend Structure',
                desc: 'Tools and systems organised properly and connected together.',
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="bg-base-100 rounded-2xl border border-base-300 p-6 relative"
              >
                <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-primary text-primary-content text-xs font-bold flex items-center justify-center shadow">
                  {i + 1}
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-sm mb-2">{title}</h3>
                <p className="text-xs text-base-content/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE HANDLE */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Rocket className="w-4 h-4" /> Our Scope
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">What Our Business Setup Covers</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1.5fr] gap-px bg-base-300 rounded-3xl overflow-hidden border border-base-300">
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              Area
            </div>
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              What We Do
            </div>
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              Outcome
            </div>
            {[
              {
                area: 'Listing Creation',
                icon: ListChecks,
                tasks: [
                  'Setting up listings across platforms',
                  'Structuring descriptions',
                  'Image and content guidance',
                ],
                outcome: 'Optimised, conversion-ready listings live across all relevant platforms.',
              },
              {
                area: 'System Setup',
                icon: Settings,
                tasks: [
                  'Workflows for daily operations',
                  'Communication structure',
                  'Task organisation',
                ],
                outcome: 'A backend that runs on process, not memory or guesswork.',
              },
              {
                area: 'Pricing & Calendar',
                icon: CalendarDays,
                tasks: [
                  'Initial pricing strategy',
                  'Availability setup',
                  'Booking rules configuration',
                ],
                outcome: 'Structured pricing and calendar control ready from day one.',
              },
              {
                area: 'Process Creation',
                icon: ClipboardList,
                tasks: [
                  'Check-in and check-out flow',
                  'Cleaning coordination',
                  'Maintenance handling',
                ],
                outcome: 'Clear, repeatable processes for every operational scenario.',
              },
              {
                area: 'Tool & Platform Setup',
                icon: LayoutDashboard,
                tasks: ['Organising systems', 'Connecting tools', 'Ensuring smooth operation'],
                outcome: 'Everything connected, configured, and ready to run.',
              },
            ].map(({ area, icon: Icon, tasks, outcome }) => (
              <React.Fragment key={area}>
                <div className="bg-base-100 px-5 py-5 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-sm mt-1.5">{area}</span>
                </div>
                <div className="bg-base-100 px-5 py-5">
                  <ul className="space-y-1.5">
                    {tasks.map((t) => (
                      <li key={t} className="flex items-center gap-2 text-sm text-base-content/70">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-base-100 px-5 py-5">
                  <p className="text-sm text-base-content/60 leading-relaxed italic">{outcome}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
          <p className="text-center mt-8 text-base-content/60 text-sm">
            The result: a fully structured STR business ready to operate from day one.
          </p>
        </div>
      </section>

      {/* HOW THIS IMPACTS YOUR BUSINESS */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" /> Before vs After
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">What Happens With a Proper Setup</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-error/20 bg-error/4 p-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-error/15 text-error text-xs font-bold">
                ❌ Without Setup
              </div>
              <ul className="space-y-3">
                {[
                  { p: 'Confusion', d: 'No clarity on what to do or in what order.' },
                  { p: 'Mistakes', d: 'Errors happen because processes are undefined.' },
                  { p: 'Reactive operations', d: 'Every issue is handled as a surprise.' },
                  { p: 'Slow growth', d: 'Chaos at the start makes scaling harder later.' },
                ].map(({ p, d }) => (
                  <li key={p} className="flex gap-3">
                    <XCircle className="w-4 h-4 text-error shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold">{p}</p>
                      <p className="text-xs text-base-content/55 mt-0.5">{d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-success/20 bg-success/4 p-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/15 text-success text-xs font-bold">
                ✅ With Setup
              </div>
              <ul className="space-y-3">
                {[
                  { p: 'Clarity', d: 'Everyone knows what to do and how to do it.' },
                  { p: 'Smooth operations', d: 'Tasks are handled by process, not by guessing.' },
                  { p: 'Consistency', d: 'Every guest gets the same quality experience.' },
                  {
                    p: 'Scalable foundation',
                    d: 'Built to grow without needing to rebuild later.',
                  },
                ].map(({ p, d }) => (
                  <li key={p} className="flex gap-3">
                    <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold">{p}</p>
                      <p className="text-xs text-base-content/55 mt-0.5">{d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON MISTAKES */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-warning/15 border border-warning/30 text-warning text-sm font-medium mb-4">
                <XCircle className="w-4 h-4" /> Common Mistakes
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Where STR Setup Goes Wrong</h2>
            </div>
            <div className="space-y-3">
              {[
                {
                  mistake: 'Rushing into listing',
                  why: 'Going live before systems are in place creates an immediate backlog of problems.',
                },
                {
                  mistake: 'Ignoring systems',
                  why: 'Treating setup as just a listing task leaves the backend completely unstructured.',
                },
                {
                  mistake: 'Copying others blindly',
                  why: "Another host's setup may not suit your property type, location, or goals.",
                },
                {
                  mistake: 'No structure',
                  why: "Without documented processes, everything depends on the host's memory.",
                },
                {
                  mistake: 'No long-term thinking',
                  why: 'Setting up for now rather than for scale means rebuilding everything later.',
                },
              ].map(({ mistake, why }) => (
                <div
                  key={mistake}
                  className="flex gap-4 p-5 rounded-2xl border border-warning/20 bg-warning/4"
                >
                  <div className="w-6 h-6 rounded-full bg-warning/20 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="w-3.5 h-3.5 text-warning" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{mistake}</p>
                    <p className="text-xs text-base-content/55 mt-0.5">{why}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-base-content/55 mt-8 italic text-sm">
              Setup mistakes are harder to fix later.
            </p>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
                <CheckCircle2 className="w-4 h-4" /> Our Method
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">
                How We Set Up STR Businesses Properly
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  step: '1. Plan before execution',
                  detail:
                    'We understand your goals, property, and market before building anything.',
                },
                {
                  step: '2. Build structure first',
                  detail: 'Systems and workflows are designed before listings go live.',
                },
                {
                  step: '3. Align everything together',
                  detail: 'Listings, systems, pricing, and communication all work as one.',
                },
                {
                  step: '4. Prepare for growth',
                  detail: 'Everything is built to scale, not just to launch.',
                },
              ].map(({ step, detail }) => (
                <div
                  key={step}
                  className="flex gap-4 p-5 rounded-2xl border border-primary/15 bg-primary/4"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">{step}</p>
                    <p className="text-xs text-base-content/55 mt-0.5">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <BarChart3 className="w-4 h-4" /> Side by Side
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Basic Setup vs Structured Setup</h2>
          </div>
          <div className="hidden md:block overflow-hidden rounded-3xl border border-base-300 max-w-3xl mx-auto">
            <div className="grid grid-cols-3">
              <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/50">
                Area
              </div>
              <div className="bg-error/8 px-5 py-3 text-xs font-bold uppercase tracking-widest text-error/70 text-center">
                Basic Setup
              </div>
              <div className="bg-success/8 px-5 py-3 text-xs font-bold uppercase tracking-widest text-success/70 text-center">
                Structured Setup
              </div>
            </div>
            {[
              ['Launch', 'Quick launch', 'Planned launch'],
              ['Systems', 'No systems', 'Full structure'],
              ['Operations', 'Reactive', 'Controlled'],
              ['Growth', 'Limited', 'Scalable'],
            ].map(([area, bad, good]) => (
              <div key={area} className="grid grid-cols-3 border-t border-base-300">
                <div className="bg-base-100 px-5 py-4 text-sm font-medium">{area}</div>
                <div className="bg-error/4 px-5 py-4 text-sm text-error/80 text-center">{bad}</div>
                <div className="bg-success/4 px-5 py-4 text-sm text-success/80 text-center font-medium">
                  {good}
                </div>
              </div>
            ))}
          </div>
          <div className="md:hidden space-y-3 max-w-sm mx-auto">
            {[
              ['Launch', 'Quick launch', 'Planned launch'],
              ['Systems', 'No systems', 'Full structure'],
              ['Operations', 'Reactive', 'Controlled'],
              ['Growth', 'Limited', 'Scalable'],
            ].map(([area, bad, good]) => (
              <div key={area} className="rounded-2xl border border-base-300 overflow-hidden">
                <div className="bg-base-200 px-4 py-2 text-xs font-bold uppercase tracking-wider text-base-content/50">
                  {area}
                </div>
                <div className="grid grid-cols-2 divide-x divide-base-300">
                  <div className="px-4 py-3 bg-error/4 text-xs text-error/80">{bad}</div>
                  <div className="px-4 py-3 bg-success/4 text-xs text-success/80 font-medium">
                    {good}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Users className="w-4 h-4" /> Ideal Fit
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Who This Is Built For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              {
                icon: Rocket,
                who: 'New STR hosts',
                desc: 'Starting their first short term rental and want to do it right.',
              },
              {
                icon: Building2,
                who: 'SA startups',
                desc: 'Entering serviced accommodation and need structure from day one.',
              },
              {
                icon: Target,
                who: 'Investors',
                desc: 'Launching their first or next property with a professional setup.',
              },
              {
                icon: TrendingUp,
                who: 'Expanding operators',
                desc: 'Adding properties and needing a scalable setup for each one.',
              },
            ].map(({ icon: Icon, who, desc }) => (
              <div
                key={who}
                className="bg-base-100 rounded-2xl border border-base-300 p-5 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-semibold text-sm">{who}</p>
                <p className="text-xs text-base-content/55 mt-1.5 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-600 text-sm font-medium mb-4">
              <Star className="w-4 h-4 fill-current" /> Client Results
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">What Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                initials: 'NB',
                name: 'Natalie B.',
                role: 'New STR Host · Manchester',
                quote:
                  'I had no idea where to start. Assistophere mapped everything out and set it all up properly. I launched with confidence instead of confusion.',
              },
              {
                initials: 'RO',
                name: 'Ryan O.',
                role: 'SA Startup · Birmingham',
                quote:
                  'The setup they built saved me months of trial and error. Everything was structured from day one and it has made a huge difference.',
              },
              {
                initials: 'AJ',
                name: 'Amara J.',
                role: 'Property Investor · London',
                quote:
                  'I wanted my first STR done properly. They built the entire backend, set up the listing, and had everything running in weeks.',
              },
            ].map(({ initials, name, role, quote }) => (
              <div
                key={name}
                className="bg-base-200 rounded-2xl border border-base-300 p-6 space-y-4"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-base-content/70 leading-relaxed italic">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-1">
                  <div className="w-9 h-9 rounded-full bg-primary text-primary-content flex items-center justify-center text-xs font-bold">
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{name}</p>
                    <p className="text-xs text-base-content/50">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
                <MessageSquare className="w-4 h-4" /> Questions
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              <FaqItem
                q="Can you help from scratch?"
                a="Yes. We work with hosts starting from zero — no existing listing, no systems, no tools in place. We handle the full setup from the ground up, including listings, workflows, pricing structure, and communication systems."
              />
              <FaqItem
                q="What do I need before starting?"
                a="Very little. You need a property and a clear goal. We take care of the rest — mapping out what needs to be built, what tools are needed, and how everything should be structured before anything goes live."
              />
              <FaqItem
                q="How long does setup take?"
                a="A basic single-property setup typically takes two to four weeks. More complex setups involving multiple listings, custom workflows, or specific platform integrations will take longer. We provide a timeline after the initial discovery call."
              />
              <FaqItem
                q="Can this scale later?"
                a="Yes — that is specifically how we build it. Every system and workflow is designed with growth in mind, so adding properties, team members, or platforms does not require rebuilding from scratch."
              />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary/22 via-base-200 to-secondary/15 border border-base-300 px-8 py-16 lg:px-16 text-center shadow-xl">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />
            </div>
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-semibold">
                <Rocket className="w-4 h-4" /> Start Properly
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold">
                Ready to Start Your STR Business{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Properly?
                </span>
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed">
                Let&apos;s build a setup that works from day one and supports your growth. We
                don&apos;t just help you start — we help you start properly.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <button className="pulse-cta-sbs btn btn-primary btn-lg rounded-full px-10 gap-2 shadow-lg">
                  <Phone className="w-4 h-4" /> Book a Discovery Call
                </button>
                <button className="btn btn-outline btn-lg rounded-full px-8 gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-base-content/40 pt-2">
                Airbnb Business Setup UK · STR Business Setup · Serviced Accommodation Setup
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
