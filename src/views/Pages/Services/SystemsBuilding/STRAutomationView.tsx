import React from 'react'
import {
  Zap,
  Settings,
  CheckCircle2,
  XCircle,
  Star,
  ChevronRight,
  ArrowRight,
  Phone,
  MessageSquare,
  CalendarDays,
  ClipboardList,
  LayoutDashboard,
  Users,
  TrendingUp,
  Building2,
  Target,
  BarChart3,
  RefreshCw,
  Timer,
  AlertTriangle,
  Layers,
  GitBranch,
} from 'lucide-react'
import { FaqItem } from './FaqItem'
import type { Page } from '@/payload-types'

export const STRAutomationView: React.FC<{ page: Page }> = () => {
  return (
    <div className="min-h-screen text-base-content overflow-x-hidden">
      <style>{`
        @keyframes pulse-ring-stra {
          0%,100% { box-shadow: 0 0 0 0 hsl(var(--p)/.35); }
          50%      { box-shadow: 0 0 0 10px hsl(var(--p)/0); }
        }
        @keyframes stra-fade-up {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .stra-fade-1 { animation: stra-fade-up .55s ease both .10s; }
        .stra-fade-2 { animation: stra-fade-up .55s ease both .22s; }
        .stra-fade-3 { animation: stra-fade-up .55s ease both .34s; }
        .stra-fade-4 { animation: stra-fade-up .55s ease both .46s; }
        .stra-fade-5 { animation: stra-fade-up .55s ease both .58s; }
        .pulse-cta-stra { animation: pulse-ring-stra 2.4s ease-in-out infinite; }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 w-130 h-130 bg-linear-to-br from-primary/13 via-primary/4 to-transparent rounded-full blur-[140px]" />
          <div className="absolute top-1/2 -right-40 w-105 h-105 bg-linear-to-bl from-secondary/10 via-secondary/3 to-transparent rounded-full blur-[120px]" />
        </div>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="stra-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium">
                <Zap className="w-4 h-4" />
                STR Automation Systems · UK
              </div>
              <h1 className="stra-fade-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight">
                Automate Your STR Operations{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Without Losing Control
                </span>
              </h1>
              <p className="stra-fade-3 text-lg text-base-content/70 leading-relaxed max-w-lg">
                Assistophere helps UK hosts automate repetitive tasks across guest communication,
                bookings, and operations — making your business more efficient and easier to manage.
              </p>
              <div className="stra-fade-4 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm italic text-base-content/65">
                STR automation involves setting up workflows and systems that handle repetitive
                tasks automatically, improving efficiency and consistency.
              </div>
              <div className="stra-fade-5 flex flex-wrap gap-3 pt-1">
                <button className="pulse-cta-stra btn btn-primary btn-lg rounded-full px-8 gap-2">
                  <Phone className="w-4 h-4" /> Book a Discovery Call
                </button>
                <button className="btn btn-outline btn-lg rounded-full px-8 gap-2">
                  See How It Works <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="stra-fade-5 flex items-center gap-3 pt-2">
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

            {/* Hero visual — automation workflow */}
            <div className="hidden lg:block">
              <div className="relative rounded-3xl border border-base-300 bg-base-200/60 backdrop-blur-sm p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-error/70" />
                  <div className="w-3 h-3 rounded-full bg-warning/70" />
                  <div className="w-3 h-3 rounded-full bg-success/70" />
                  <span className="ml-2 text-xs text-base-content/40 font-mono">
                    automation.workflow
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      label: 'New booking received',
                      status: 'trigger',
                      color: 'bg-primary/15 border-primary/25 text-primary',
                    },
                    {
                      label: 'Send confirmation message',
                      status: 'automated',
                      color: 'bg-success/8 border-success/20 text-success',
                    },
                    {
                      label: 'Assign cleaning task',
                      status: 'automated',
                      color: 'bg-success/8 border-success/20 text-success',
                    },
                    {
                      label: 'Schedule check-in message',
                      status: 'automated',
                      color: 'bg-success/8 border-success/20 text-success',
                    },
                    {
                      label: 'Send check-out reminder',
                      status: 'automated',
                      color: 'bg-success/8 border-success/20 text-success',
                    },
                    {
                      label: 'Post-stay review request',
                      status: 'automated',
                      color: 'bg-success/8 border-success/20 text-success',
                    },
                  ].map(({ label, status, color }) => (
                    <div
                      key={label}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl border text-xs ${color}`}
                    >
                      <div className="flex items-center gap-2">
                        {status === 'trigger' ? (
                          <Zap className="w-3.5 h-3.5" />
                        ) : (
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        )}
                        {label}
                      </div>
                      <span className="opacity-60 font-medium uppercase tracking-wider text-[10px]">
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between px-1">
                  <span className="text-xs text-base-content/40">6 steps automated</span>
                  <span className="text-xs text-primary font-semibold">→ 0 manual actions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLARITY ──────────────────────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-2">
              <RefreshCw className="w-4 h-4" /> What Automation Is
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Automation Isn&apos;t About Removing Control
            </h2>
            <p className="text-base-content/65 text-lg leading-relaxed">
              It&apos;s about removing repetition. Done properly, automation handles the routine so
              you can focus on decisions that actually need your attention.
            </p>
            <p className="text-base-content/60 text-base">Automation helps with:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {[
                {
                  icon: MessageSquare,
                  label: 'Repetitive Messaging',
                  desc: 'Guest messages that follow the same pattern every time.',
                },
                {
                  icon: CalendarDays,
                  label: 'Booking Processes',
                  desc: 'Confirmations, reminders, and follow-ups handled automatically.',
                },
                {
                  icon: ClipboardList,
                  label: 'Task Coordination',
                  desc: 'Assigning and tracking operational tasks without manual input.',
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
                  <p className="text-xs text-base-content/55 mt-1 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-base-content/55 text-sm italic pt-2">
              But it still needs structure behind it.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE REAL PROBLEM ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-4">
                <XCircle className="w-4 h-4" /> The Core Problem
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Why Manual Operations Don&apos;t Scale
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  point: 'Repeating the same tasks daily',
                  detail:
                    'Hours disappear doing the same things over and over with no end in sight.',
                },
                {
                  point: 'Constant manual input',
                  detail:
                    'Every action requires the host — nothing runs without direct involvement.',
                },
                {
                  point: 'Slow response times',
                  detail:
                    'Manual processes mean guests wait longer and expectations are harder to meet.',
                },
                {
                  point: 'Increased errors',
                  detail:
                    'The more manual the process, the more likely something gets missed or done wrong.',
                },
                {
                  point: 'Time pressure',
                  detail: 'You spend more time operating than improving or growing the business.',
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
              Manual work limits growth and creates bottlenecks.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT AUTOMATION SHOULD DO ────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <CheckCircle2 className="w-4 h-4" /> The Right Setup
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              What a Proper Automation Setup Looks Like
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              {
                icon: Timer,
                title: 'Reduce Repetitive Tasks',
                desc: 'Automate routine actions so your team does less repeating and more progressing.',
              },
              {
                icon: Zap,
                title: 'Improve Speed',
                desc: 'Faster responses and execution at every stage of the guest journey.',
              },
              {
                icon: RefreshCw,
                title: 'Maintain Consistency',
                desc: 'Same quality output across every task, every time, without manual effort.',
              },
              {
                icon: Layers,
                title: 'Support Operations',
                desc: 'Work alongside your existing systems without disrupting what already works.',
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

      {/* ── WHAT WE AUTOMATE ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Settings className="w-4 h-4" /> Our Scope
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">What Our Automation Setup Covers</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1.5fr] gap-px bg-base-300 rounded-3xl overflow-hidden border border-base-300">
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              Area
            </div>
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              What We Set Up
            </div>
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              Outcome
            </div>
            {[
              {
                area: 'Guest Communication',
                icon: MessageSquare,
                tasks: [
                  'Automated replies to common enquiries',
                  'Scheduled pre-arrival and post-stay messages',
                  'Consistent tone across all guest touchpoints',
                ],
                outcome: 'Guests receive timely, professional communication without manual effort.',
              },
              {
                area: 'Booking Processes',
                icon: CalendarDays,
                tasks: [
                  'Automated booking confirmations',
                  'Reminder sequences before check-in',
                  'Post-stay follow-up and review requests',
                ],
                outcome: 'Every booking is handled end-to-end with zero manual steps.',
              },
              {
                area: 'Task Automation',
                icon: ClipboardList,
                tasks: [
                  'Auto-assigning tasks to the right team members',
                  'Tracking progress without chasing updates',
                  'Reducing manual coordination overhead',
                ],
                outcome: 'Operational tasks run on schedule without management intervention.',
              },
              {
                area: 'Workflow Automation',
                icon: GitBranch,
                tasks: [
                  'Building structured, repeatable process flows',
                  'Removing bottlenecks caused by manual handoffs',
                  'Improving overall operational rhythm',
                ],
                outcome: 'Operations run smoothly through defined, automated workflows.',
              },
              {
                area: 'System Integration',
                icon: LayoutDashboard,
                tasks: [
                  'Connecting your tools so they share data',
                  'Aligning platforms to avoid duplicate work',
                  'Ensuring smooth end-to-end operation',
                ],
                outcome: 'All tools working together as one joined-up system.',
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
            The result: less manual work, more efficient operations.
          </p>
        </div>
      </section>

      {/* ── HOW AUTOMATION FITS YOUR SYSTEM ──────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-2">
              <Layers className="w-4 h-4" /> Prerequisites
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Automation Works With Structure</h2>
            <p className="text-base-content/65 text-lg leading-relaxed">
              Automation is only effective when your operation already has a foundation to build on.
              Without it, automation layers complexity on top of chaos.
            </p>
            <p className="text-base-content/60 text-sm">Automation is effective only when:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-left">
              {[
                {
                  icon: GitBranch,
                  label: 'Workflows are clear',
                  desc: 'Each process has a defined start, steps, and end point.',
                },
                {
                  icon: ClipboardList,
                  label: 'Processes are defined',
                  desc: 'There is a documented way to handle every recurring task.',
                },
                {
                  icon: Layers,
                  label: 'Systems are aligned',
                  desc: 'Your tools communicate with each other and support the same goals.',
                },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="bg-base-100 rounded-2xl border border-base-300 p-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-sm">{label}</p>
                  <p className="text-xs text-base-content/55 mt-1 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-base-content/55 text-sm italic pt-2">
              Without this, automation creates confusion.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMMON MISTAKES ──────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-warning/15 border border-warning/30 text-warning text-sm font-medium mb-4">
                <AlertTriangle className="w-4 h-4" /> Common Mistakes
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Where Automation Goes Wrong</h2>
            </div>
            <div className="space-y-3">
              {[
                {
                  mistake: 'Automating without structure',
                  why: 'Building automation on undefined processes just speeds up the chaos.',
                },
                {
                  mistake: 'Over-automation',
                  why: 'Trying to automate everything creates fragile systems that break at the edges.',
                },
                {
                  mistake: 'Poor setup',
                  why: 'Rushed or template-based automation often does not match how your business actually operates.',
                },
                {
                  mistake: 'Disconnected tools',
                  why: 'Automation across tools that do not communicate leads to duplicate work and missed triggers.',
                },
                {
                  mistake: 'No monitoring',
                  why: 'Set-and-forget automation fails silently — without oversight, problems accumulate unseen.',
                },
              ].map(({ mistake, why }) => (
                <div
                  key={mistake}
                  className="flex gap-4 p-5 rounded-2xl border border-warning/20 bg-warning/4"
                >
                  <div className="w-6 h-6 rounded-full bg-warning/20 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-warning" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{mistake}</p>
                    <p className="text-xs text-base-content/55 mt-0.5">{why}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-base-content/55 mt-8 italic text-sm">
              Automation fails when it replaces thinking instead of supporting it.
            </p>
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH ─────────────────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
                <CheckCircle2 className="w-4 h-4" /> Our Method
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">How We Set Up Automation Properly</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  step: '1. Define workflows first',
                  detail: 'We map and document every process before any automation is built.',
                },
                {
                  step: '2. Automate only what makes sense',
                  detail:
                    'Not everything should be automated — we identify what genuinely benefits from it.',
                },
                {
                  step: '3. Keep systems aligned',
                  detail:
                    'Every automation is built to work with your existing tools and structure.',
                },
                {
                  step: '4. Monitor and refine',
                  detail:
                    'We set up oversight so automation stays accurate and improves over time.',
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

      {/* ── COMPARISON ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <BarChart3 className="w-4 h-4" /> Side by Side
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Manual Operations vs Automated Operations
            </h2>
          </div>
          <div className="hidden md:block overflow-hidden rounded-3xl border border-base-300 max-w-3xl mx-auto">
            <div className="grid grid-cols-3">
              <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/50">
                Area
              </div>
              <div className="bg-error/8 px-5 py-3 text-xs font-bold uppercase tracking-widest text-error/70 text-center">
                Manual
              </div>
              <div className="bg-success/8 px-5 py-3 text-xs font-bold uppercase tracking-widest text-success/70 text-center">
                Automated
              </div>
            </div>
            {[
              ['Speed', 'Time-consuming', 'Efficient'],
              ['Work pattern', 'Repetitive', 'Streamlined'],
              ['Quality', 'Error-prone', 'Consistent'],
              ['Growth', 'Hard to scale', 'Scalable'],
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
              ['Speed', 'Time-consuming', 'Efficient'],
              ['Work pattern', 'Repetitive', 'Streamlined'],
              ['Quality', 'Error-prone', 'Consistent'],
              ['Growth', 'Hard to scale', 'Scalable'],
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

      {/* ── WHO THIS IS FOR ───────────────────────────────────────────────────── */}
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
                icon: Timer,
                who: 'Hosts with repetitive tasks',
                desc: 'Spending hours on the same manual actions every day.',
              },
              {
                icon: Building2,
                who: 'SA businesses',
                desc: 'Serviced accommodation operators who need consistent, scalable processes.',
              },
              {
                icon: Target,
                who: 'Scaling portfolios',
                desc: 'Operators adding properties and needing automation that grows with them.',
              },
              {
                icon: TrendingUp,
                who: 'Efficiency-focused hosts',
                desc: 'Hosts who want to operate smarter without sacrificing quality.',
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

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
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
                initials: 'LT',
                name: 'Laura T.',
                role: 'SA Operator · Manchester',
                quote:
                  'The automation setup transformed how we handle bookings. We went from manual confirmations and reminders to everything running automatically overnight.',
              },
              {
                initials: 'DK',
                name: 'Daniel K.',
                role: 'Multi-property Host · London',
                quote:
                  'I was spending hours each week on the same messages. Now the whole communication flow is automated and consistent across every property.',
              },
              {
                initials: 'PS',
                name: 'Priya S.',
                role: 'STR Business · Birmingham',
                quote:
                  'What surprised me was how structured the approach was. They built the workflow first before automating anything, which is why it actually works.',
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

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
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
                q="What can be automated?"
                a="Guest communication (replies, reminders, follow-ups), booking confirmations, task assignments, review requests, and workflow triggers between tools. We assess your current operation and identify exactly what makes sense to automate based on your setup."
              />
              <FaqItem
                q="Will this replace manual work completely?"
                a="No — and it should not. Automation handles repetitive, predictable tasks. Decisions, exceptions, and relationship management still benefit from human involvement. Our goal is to remove unnecessary manual work, not all manual work."
              />
              <FaqItem
                q="Can this work with my current setup?"
                a="In most cases, yes. We work with the tools and platforms you are already using wherever possible. If there are gaps or incompatibilities, we will flag them early and suggest adjustments before building anything."
              />
              <FaqItem
                q="Is automation difficult to manage?"
                a="Not when it is set up correctly. We build automation with monitoring in mind, so you can see what is running, catch any issues early, and make adjustments without technical knowledge. We also provide guidance on how to maintain it going forward."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary/22 via-base-200 to-secondary/15 border border-base-300 px-8 py-16 lg:px-16 text-center shadow-xl">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />
            </div>
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-semibold">
                <Zap className="w-4 h-4" /> Start Automating Properly
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold">
                Ready to Reduce Manual Work in Your{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  STR Business?
                </span>
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed">
                Let&apos;s build automation that makes your operations faster and more efficient. We
                don&apos;t just automate tasks — we automate your workflow properly.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <button className="pulse-cta-stra btn btn-primary btn-lg rounded-full px-10 gap-2 shadow-lg">
                  <Phone className="w-4 h-4" /> Book a Discovery Call
                </button>
                <button className="btn btn-outline btn-lg rounded-full px-8 gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-base-content/40 pt-2">
                Airbnb Automation Systems UK · STR Automation Setup · Workflow Automation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
