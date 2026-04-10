import React from 'react'
import {
  FileText,
  Settings,
  CheckCircle2,
  XCircle,
  Star,
  ArrowRight,
  Phone,
  MessageSquare,
  CalendarDays,
  ClipboardList,
  LayoutDashboard,
  Users,
  TrendingUp,
  Building2,
  BarChart3,
  AlertTriangle,
  Layers,
  BookOpen,
  GitBranch,
  UserCheck,
  RefreshCw,
} from 'lucide-react'
import { FaqItem } from './FaqItem'
import type { Page } from '@/payload-types'

export const SOPCreationView: React.FC<{ page: Page }> = () => {
  return (
    <div className="min-h-screen text-base-content overflow-x-hidden">
      <style>{`
        @keyframes pulse-ring-sop {
          0%,100% { box-shadow: 0 0 0 0 hsl(var(--p)/.35); }
          50%      { box-shadow: 0 0 0 10px hsl(var(--p)/0); }
        }
        @keyframes sop-fade-up {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .sop-fade-1 { animation: sop-fade-up .55s ease both .10s; }
        .sop-fade-2 { animation: sop-fade-up .55s ease both .22s; }
        .sop-fade-3 { animation: sop-fade-up .55s ease both .34s; }
        .sop-fade-4 { animation: sop-fade-up .55s ease both .46s; }
        .sop-fade-5 { animation: sop-fade-up .55s ease both .58s; }
        .pulse-cta-sop { animation: pulse-ring-sop 2.4s ease-in-out infinite; }
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
              <div className="sop-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium">
                <FileText className="w-4 h-4" />
                SOP Creation · STR Systems Building · UK
              </div>
              <h1 className="sop-fade-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight">
                SOPs That Turn Your STR Systems Into{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Real Execution
                </span>
              </h1>
              <p className="sop-fade-3 text-lg text-base-content/70 leading-relaxed max-w-lg">
                Assistophere creates clear SOPs for UK hosts, turning your systems into structured,
                repeatable actions that your team can follow without confusion.
              </p>
              <div className="sop-fade-4 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm italic text-base-content/65">
                SOPs in STR businesses define how systems are executed, ensuring consistent
                operations, clear workflows, and scalable processes.
              </div>
              <div className="sop-fade-5 flex flex-wrap gap-3 pt-1">
                <button className="pulse-cta-sop btn btn-primary btn-lg rounded-full px-8 gap-2">
                  <Phone className="w-4 h-4" /> Book a Discovery Call
                </button>
                <button className="btn btn-outline btn-lg rounded-full px-8 gap-2">
                  <ArrowRight className="w-4 h-4" /> Back to STR Systems Building
                </button>
              </div>
              <div className="sop-fade-5 flex items-center gap-3 pt-2">
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

            {/* Hero visual — SOP execution document */}
            <div className="hidden lg:block">
              <div className="relative rounded-3xl border border-base-300 bg-base-200/60 backdrop-blur-sm p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-error/70" />
                  <div className="w-3 h-3 rounded-full bg-warning/70" />
                  <div className="w-3 h-3 rounded-full bg-success/70" />
                  <span className="ml-2 text-xs text-base-content/40 font-mono">
                    sop.check-in-process
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-bold text-base-content/50 uppercase tracking-widest mb-3">
                    Guest Check-In SOP — v1.2
                  </div>
                  {[
                    { step: '1. Send check-in instructions 24h before', done: true },
                    { step: '2. Confirm access code is active', done: true },
                    { step: '3. Verify cleaning is completed', done: true },
                    { step: '4. Check welcome pack is in place', done: true },
                    { step: '5. Message guest on day of arrival', done: false },
                    { step: '6. Confirm guest has arrived safely', done: false },
                  ].map(({ step, done }) => (
                    <div
                      key={step}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border text-xs ${done ? 'bg-success/6 border-success/20 text-base-content/70' : 'bg-base-100 border-base-300 text-base-content/45'}`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${done ? 'bg-success/20' : 'border border-base-300'}`}
                      >
                        {done && <CheckCircle2 className="w-3 h-3 text-success" />}
                      </div>
                      {step}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between px-1">
                  <span className="text-xs text-base-content/40">4 of 6 steps complete</span>
                  <span className="text-xs text-primary font-semibold">→ In progress</span>
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
              <BookOpen className="w-4 h-4" /> The Missing Layer
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Systems Without SOPs Don&apos;t Work</h2>
            <p className="text-base-content/65 text-lg leading-relaxed">
              You can have the right tools, automation, and workflows in place — but without SOPs,
              none of it gets followed consistently. SOPs are what turn systems into real execution.
            </p>
            <p className="text-base-content/60 text-sm">You can have:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {[
                {
                  icon: LayoutDashboard,
                  label: 'Tools',
                  desc: 'Platforms, software, and technology in place.',
                },
                {
                  icon: GitBranch,
                  label: 'Automation',
                  desc: 'Triggered workflows and scheduled actions.',
                },
                {
                  icon: Layers,
                  label: 'Workflows',
                  desc: 'Defined sequences for how tasks should flow.',
                },
              ].map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="bg-base-100 rounded-2xl border border-base-300 p-5 text-left relative"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-sm">{label}</p>
                  <p className="text-xs text-base-content/55 mt-1 leading-relaxed">{desc}</p>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-warning/20 border border-warning/30 flex items-center justify-center">
                    <XCircle className="w-3 h-3 text-warning" />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-base-content/55 text-sm italic pt-4">
              Without SOPs, nothing is followed consistently.
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
                <XCircle className="w-4 h-4" /> Where It Breaks Down
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Why Systems Break Without SOPs</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  point: 'Tasks done differently every time',
                  detail: 'No consistent standard means every person handles things their own way.',
                },
                {
                  point: 'Team confusion',
                  detail:
                    'Without clear instructions, people guess — and guessing creates mistakes.',
                },
                {
                  point: 'No clear instructions',
                  detail: 'Systems tell you what needs doing but not how to do it properly.',
                },
                {
                  point: 'Reliance on individuals',
                  detail:
                    'When only one person knows how something works, the whole operation is at risk.',
                },
                {
                  point: 'Inconsistent results',
                  detail:
                    'Guests receive different experiences depending on who handled their booking.',
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
              Without SOPs, systems exist but are not followed.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT SOPs DO WITHIN SYSTEMS ──────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <CheckCircle2 className="w-4 h-4" /> The Role of SOPs
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">How SOPs Fit Into Your STR Systems</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              {
                icon: ClipboardList,
                title: 'Define Execution',
                desc: 'Clear, step-by-step instructions for every task within your system.',
              },
              {
                icon: RefreshCw,
                title: 'Maintain Consistency',
                desc: 'The same standard process is followed every time, by everyone.',
              },
              {
                icon: UserCheck,
                title: 'Enable Delegation',
                desc: 'Tasks can be handed off and completed correctly without your direct input.',
              },
              {
                icon: GitBranch,
                title: 'Support Automation',
                desc: 'Automation performs better when the underlying process is clearly defined.',
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

      {/* ── WHAT WE BUILD ────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <FileText className="w-4 h-4" /> Our Scope
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              What Our SOP Creation Covers Within Your Systems
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1.5fr] gap-px bg-base-300 rounded-3xl overflow-hidden border border-base-300">
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              SOP Area
            </div>
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              What We Document
            </div>
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              Outcome
            </div>
            {[
              {
                area: 'Guest Communication',
                icon: MessageSquare,
                tasks: [
                  'Structured message flows for every guest stage',
                  'Response handling for common scenarios',
                  'Scenario-based communication processes',
                ],
                outcome:
                  'Consistent, professional guest communication handled by anyone on the team.',
              },
              {
                area: 'Operations',
                icon: Settings,
                tasks: [
                  'Check-in and check-out step-by-step processes',
                  'Cleaning coordination and sign-off procedures',
                  'Maintenance reporting and handling workflows',
                ],
                outcome: 'Every operational task is completed to the same standard every time.',
              },
              {
                area: 'Pricing & Calendar',
                icon: CalendarDays,
                tasks: [
                  'Pricing adjustment process and triggers',
                  'Gap management rules and actions',
                  'Availability control and calendar management steps',
                ],
                outcome: 'Pricing and calendar decisions follow a documented, repeatable process.',
              },
              {
                area: 'Workflow',
                icon: GitBranch,
                tasks: [
                  'Task execution steps broken down by role',
                  'Role clarity and responsibility ownership',
                  'Process handoff and completion verification',
                ],
                outcome: 'Everyone knows exactly what to do and in what order.',
              },
              {
                area: 'Team',
                icon: Users,
                tasks: [
                  'Onboarding processes for new team members',
                  'Training documentation for every key operation',
                  'Day-to-day operational guidelines and references',
                ],
                outcome:
                  'New team members can be onboarded quickly without relying on tribal knowledge.',
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
            The result: systems that are actually followed and executed properly.
          </p>
        </div>
      </section>

      {/* ── CONNECTION TO STR SYSTEMS BUILDING ───────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
                <Layers className="w-4 h-4" /> Completing the System
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">SOPs Complete Your System</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-base-100 rounded-2xl border border-primary/20 p-6 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                  <Settings className="w-3.5 h-3.5" /> STR Systems Building defines
                </div>
                <p className="font-semibold text-base">What needs to happen</p>
                <p className="text-sm text-base-content/60 leading-relaxed">
                  The structure, tools, workflows, and processes that need to exist in your
                  business.
                </p>
              </div>
              <div className="bg-base-100 rounded-2xl border border-secondary/20 p-6 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold">
                  <FileText className="w-3.5 h-3.5" /> SOPs define
                </div>
                <p className="font-semibold text-base">How it happens</p>
                <p className="text-sm text-base-content/60 leading-relaxed">
                  The step-by-step execution layer that makes every system task clear, consistent,
                  and delegatable.
                </p>
              </div>
            </div>
            <p className="text-center text-base-content/55 mt-8 italic text-sm">
              Without SOPs, systems remain incomplete.
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
              <h2 className="text-3xl lg:text-4xl font-bold">Where SOPs Fail Inside Systems</h2>
            </div>
            <div className="space-y-3">
              {[
                {
                  mistake: 'Creating SOPs without real workflows',
                  why: 'Documenting theoretical processes instead of how things actually work creates SOPs nobody uses.',
                },
                {
                  mistake: 'Making them too complex',
                  why: 'Overly detailed or lengthy SOPs get ignored — usability matters as much as completeness.',
                },
                {
                  mistake: 'Not aligning with systems',
                  why: 'SOPs that do not match the tools and structure in place create friction rather than clarity.',
                },
                {
                  mistake: 'Not using them daily',
                  why: 'SOPs only work when they are embedded into day-to-day operations, not filed away as reference documents.',
                },
                {
                  mistake: 'No updates over time',
                  why: 'Processes evolve — SOPs that are never reviewed quickly become outdated and misleading.',
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
              SOPs fail when they are not practical or connected to real operations.
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
              <h2 className="text-3xl lg:text-4xl font-bold">
                How We Build SOPs Inside Your System
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  step: '1. Map your existing workflows',
                  detail: 'We understand how things actually work before documenting anything.',
                },
                {
                  step: '2. Document real processes',
                  detail: 'SOPs are built from observed operations, not assumptions or templates.',
                },
                {
                  step: '3. Align SOPs with your systems',
                  detail:
                    'Every SOP is connected to the tools, workflows, and structure already in place.',
                },
                {
                  step: '4. Ensure usability and clarity',
                  detail:
                    'Documents are written to be followed, not filed — clear, concise, and actionable.',
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
              System Without SOPs vs Complete System
            </h2>
          </div>
          <div className="hidden md:block overflow-hidden rounded-3xl border border-base-300 max-w-3xl mx-auto">
            <div className="grid grid-cols-3">
              <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/50">
                Area
              </div>
              <div className="bg-error/8 px-5 py-3 text-xs font-bold uppercase tracking-widest text-error/70 text-center">
                Without SOPs
              </div>
              <div className="bg-success/8 px-5 py-3 text-xs font-bold uppercase tracking-widest text-success/70 text-center">
                With SOPs
              </div>
            </div>
            {[
              ['Execution', 'Inconsistent execution', 'Consistent execution'],
              ['Team clarity', 'Team confusion', 'Clear instructions'],
              ['Dependency', 'Reliance on individuals', 'System-driven'],
              ['Growth', 'Limited scalability', 'Scalable'],
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
              ['Execution', 'Inconsistent execution', 'Consistent execution'],
              ['Team clarity', 'Team confusion', 'Clear instructions'],
              ['Dependency', 'Reliance on individuals', 'System-driven'],
              ['Growth', 'Limited scalability', 'Scalable'],
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
                icon: Settings,
                who: 'Hosts building STR systems',
                desc: 'Operators creating structure and needing the execution layer to match.',
              },
              {
                icon: Building2,
                who: 'SA businesses',
                desc: 'Serviced accommodation businesses with teams that need consistent processes.',
              },
              {
                icon: UserCheck,
                who: 'Operators managing teams',
                desc: 'Anyone delegating work who needs clear, followable documentation.',
              },
              {
                icon: TrendingUp,
                who: 'Businesses preparing to scale',
                desc: 'Operators who know that growth requires documented, repeatable processes.',
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
                initials: 'KR',
                name: 'Karen R.',
                role: 'SA Operator · Leeds',
                quote:
                  'Before Assistophere, every team member did things their own way. The SOPs they created brought everything in line and now we have real consistency across the board.',
              },
              {
                initials: 'JM',
                name: 'James M.',
                role: 'Multi-property Host · Bristol',
                quote:
                  'I was the only person who knew how everything worked. The SOPs changed that completely. I can now delegate properly and step back without worrying.',
              },
              {
                initials: 'SO',
                name: 'Sandra O.',
                role: 'STR Business · Manchester',
                quote:
                  'What impressed me was how they built the SOPs from how we actually operate, not from a template. They work because they reflect our real processes.',
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
                q="How do SOPs fit into systems?"
                a="SOPs are the execution layer of a system. A system defines what needs to happen — the tools, workflows, and structure. SOPs define how each part of that system is actually carried out. Without SOPs, systems exist in theory but not in practice."
              />
              <FaqItem
                q="Can you document my current processes?"
                a="Yes. We map how things work in your business today and document them into clear, usable SOPs. We work from real operations rather than creating generic templates, which means the SOPs reflect how your business actually runs."
              />
              <FaqItem
                q="Are SOPs easy to follow?"
                a="That is a core part of how we write them. SOPs should be practical documents used daily, not reference files filed away. We write them to be clear, concise, and structured so anyone on your team can follow them without needing to ask questions."
              />
              <FaqItem
                q="Can they evolve over time?"
                a="Yes — and they should. We build SOPs with the expectation that they will need updating as your operations evolve. We can support ongoing reviews and updates to ensure your documentation stays aligned with how your business actually works."
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
                <FileText className="w-4 h-4" /> Build the Execution Layer
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold">
                Ready to Turn Your Systems Into{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Real Execution?
                </span>
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed">
                Let&apos;s build SOPs that make your systems work properly. Systems define your
                business. SOPs make it run.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <button className="pulse-cta-sop btn btn-primary btn-lg rounded-full px-10 gap-2 shadow-lg">
                  <Phone className="w-4 h-4" /> Book a Discovery Call
                </button>
                <button className="btn btn-outline btn-lg rounded-full px-8 gap-2">
                  <ArrowRight className="w-4 h-4" /> Back to STR Systems Building
                </button>
              </div>
              <p className="text-xs text-base-content/40 pt-2">
                Airbnb SOP Creation UK · STR Systems Documentation · Workflow SOP · Operations
                Manual
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
