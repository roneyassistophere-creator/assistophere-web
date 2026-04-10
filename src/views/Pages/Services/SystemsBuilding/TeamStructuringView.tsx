import React from 'react'
import {
  Users,
  Settings,
  CheckCircle2,
  XCircle,
  Star,
  ArrowRight,
  Phone,
  MessageSquare,
  ClipboardList,
  LayoutDashboard,
  TrendingUp,
  Building2,
  Target,
  BarChart3,
  AlertTriangle,
  Layers,
  UserCheck,
  GitBranch,
  UserPlus,
  ShieldCheck,
} from 'lucide-react'
import { FaqItem } from './FaqItem'
import type { Page } from '@/payload-types'

export const TeamStructuringView: React.FC<{ page: Page }> = () => {
  return (
    <div className="min-h-screen text-base-content overflow-x-hidden">
      <style>{`
        @keyframes pulse-ring-ts {
          0%,100% { box-shadow: 0 0 0 0 hsl(var(--p)/.35); }
          50%      { box-shadow: 0 0 0 10px hsl(var(--p)/0); }
        }
        @keyframes ts-fade-up {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .ts-fade-1 { animation: ts-fade-up .55s ease both .10s; }
        .ts-fade-2 { animation: ts-fade-up .55s ease both .22s; }
        .ts-fade-3 { animation: ts-fade-up .55s ease both .34s; }
        .ts-fade-4 { animation: ts-fade-up .55s ease both .46s; }
        .ts-fade-5 { animation: ts-fade-up .55s ease both .58s; }
        .pulse-cta-ts { animation: pulse-ring-ts 2.4s ease-in-out infinite; }
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
              <div className="ts-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium">
                <Users className="w-4 h-4" />
                Team Structuring · STR Systems Building · UK
              </div>
              <h1 className="ts-fade-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight">
                Build a Team That Runs Your STR Business{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Properly
                </span>
              </h1>
              <p className="ts-fade-3 text-lg text-base-content/70 leading-relaxed max-w-lg">
                Assistophere helps UK hosts structure their team with clear roles, responsibilities,
                and workflows, allowing operations to run smoothly without constant oversight.
              </p>
              <div className="ts-fade-4 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm italic text-base-content/65">
                Team structuring in STR businesses involves defining roles, responsibilities, and
                workflows so operations can run efficiently without relying on a single person.
              </div>
              <div className="ts-fade-5 flex flex-wrap gap-3 pt-1">
                <button className="pulse-cta-ts btn btn-primary btn-lg rounded-full px-8 gap-2">
                  <Phone className="w-4 h-4" /> Book a Discovery Call
                </button>
                <button className="btn btn-outline btn-lg rounded-full px-8 gap-2">
                  <ArrowRight className="w-4 h-4" /> Back to STR Systems Building
                </button>
              </div>
              <div className="ts-fade-5 flex items-center gap-3 pt-2">
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

            {/* Hero visual — team structure org chart */}
            <div className="hidden lg:block">
              <div className="relative rounded-3xl border border-base-300 bg-base-200/60 backdrop-blur-sm p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-error/70" />
                  <div className="w-3 h-3 rounded-full bg-warning/70" />
                  <div className="w-3 h-3 rounded-full bg-success/70" />
                  <span className="ml-2 text-xs text-base-content/40 font-mono">
                    team.structure
                  </span>
                </div>
                {/* Operator row */}
                <div className="flex justify-center mb-3">
                  <div className="px-4 py-2.5 rounded-xl border border-primary/30 bg-primary/8 text-xs font-bold text-primary flex items-center gap-2">
                    <UserCheck className="w-3.5 h-3.5" /> Operator / Host
                  </div>
                </div>
                {/* Connector */}
                <div className="flex justify-center mb-1">
                  <div className="w-px h-4 bg-base-300" />
                </div>
                {/* Three roles row */}
                <div className="grid grid-cols-3 gap-2 mb-1">
                  {[
                    { label: 'Guest Comms VA', tasks: ['Messages', 'Enquiries', 'Reviews'] },
                    { label: 'Operations VA', tasks: ['Check-in', 'Cleaning', 'Maintenance'] },
                    { label: 'Admin VA', tasks: ['Calendar', 'Pricing', 'Reporting'] },
                  ].map(({ label, tasks }) => (
                    <div key={label} className="flex flex-col items-center gap-1.5">
                      <div className="w-px h-4 bg-base-300" />
                      <div className="w-full px-2 py-2 rounded-xl border border-base-300 bg-base-100 text-center">
                        <p className="text-[10px] font-bold text-base-content/70 mb-1.5">{label}</p>
                        {tasks.map((t) => (
                          <p key={t} className="text-[9px] text-base-content/45 leading-tight">
                            {t}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between px-1">
                  <span className="text-xs text-base-content/40">3 roles · 9 responsibilities</span>
                  <span className="text-xs text-primary font-semibold">→ Fully structured</span>
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
              <Users className="w-4 h-4" /> The Missing Layer
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              A Team Without Structure Creates More Work
            </h2>
            <p className="text-base-content/65 text-lg leading-relaxed">
              Hiring people doesn&apos;t solve operational problems. Without structure, more people
              just means more coordination — and more room for things to go wrong. Structure is what
              makes a team effective.
            </p>
            <p className="text-base-content/60 text-sm">Without structure:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {[
                {
                  icon: Layers,
                  label: 'Tasks overlap',
                  desc: 'Multiple people handle the same thing without knowing it.',
                },
                {
                  icon: XCircle,
                  label: 'Responsibilities unclear',
                  desc: 'Nobody knows who owns what, so things fall through the gaps.',
                },
                {
                  icon: AlertTriangle,
                  label: 'Mistakes increase',
                  desc: 'Without defined process, errors become a regular occurrence.',
                },
              ].map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="bg-base-100 rounded-2xl border border-error/15 p-5 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-error/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-error" />
                  </div>
                  <p className="font-semibold text-sm">{label}</p>
                  <p className="text-xs text-base-content/55 mt-1 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE REAL PROBLEM ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-4">
                <XCircle className="w-4 h-4" /> Why Teams Break Down
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Why STR Teams Become Difficult to Manage
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  point: 'No clear roles',
                  detail:
                    'Every team member interprets their job differently, creating inconsistency across operations.',
                },
                {
                  point: 'Tasks not assigned properly',
                  detail: 'Work lands on whoever is available rather than whoever is responsible.',
                },
                {
                  point: 'Poor communication',
                  detail:
                    'Without a defined communication flow, updates get missed and actions are duplicated.',
                },
                {
                  point: 'No accountability',
                  detail: 'When ownership is unclear, mistakes go unresolved and standards drop.',
                },
                {
                  point: 'Reliance on the host',
                  detail:
                    'Everything flows back to the host because nobody else has authority or clarity to act.',
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
              A team without structure creates confusion, not efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT A PROPER TEAM STRUCTURE LOOKS LIKE ──────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <CheckCircle2 className="w-4 h-4" /> What Good Looks Like
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">What Makes an STR Team Work</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              {
                icon: UserCheck,
                title: 'Defined Roles',
                desc: 'Each person knows exactly what they handle and what falls outside their remit.',
              },
              {
                icon: ShieldCheck,
                title: 'Clear Responsibilities',
                desc: 'No overlap, no confusion — every task has a clear owner.',
              },
              {
                icon: GitBranch,
                title: 'Structured Workflows',
                desc: 'Tasks follow a consistent, documented process regardless of who is doing them.',
              },
              {
                icon: ClipboardList,
                title: 'Accountability',
                desc: 'Ownership of tasks is explicit — mistakes are caught and resolved at the right level.',
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
              <Settings className="w-4 h-4" /> Our Scope
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">What Our Team Structuring Covers</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1.5fr] gap-px bg-base-300 rounded-3xl overflow-hidden border border-base-300">
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              Area
            </div>
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              What We Define
            </div>
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              Outcome
            </div>
            {[
              {
                area: 'Role Definition',
                icon: UserCheck,
                tasks: [
                  'Identifying what roles your operation actually needs',
                  'Assigning clear responsibilities to each role',
                  'Removing overlaps and gaps in coverage',
                ],
                outcome:
                  'Every person on the team knows exactly what they own and what they do not.',
              },
              {
                area: 'Task Allocation',
                icon: ClipboardList,
                tasks: [
                  'Mapping every operational task to the right role',
                  'Ensuring nothing is left unassigned',
                  'Improving efficiency through clear ownership',
                ],
                outcome:
                  'Tasks are handled by the right person every time without the host deciding.',
              },
              {
                area: 'Workflow Alignment',
                icon: GitBranch,
                tasks: [
                  'Aligning each team role with your existing systems',
                  'Ensuring smooth handoffs between team members',
                  'Reducing friction in day-to-day coordination',
                ],
                outcome: 'The team works as a coordinated unit, not a collection of individuals.',
              },
              {
                area: 'Communication Structure',
                icon: MessageSquare,
                tasks: [
                  'Defining how updates and decisions flow through the team',
                  'Reducing unnecessary back-and-forth',
                  'Improving response times and decision clarity',
                ],
                outcome: 'Communication is structured, predictable, and efficient.',
              },
              {
                area: 'Scalability Planning',
                icon: TrendingUp,
                tasks: [
                  'Designing the team structure with growth in mind',
                  'Ensuring roles can expand without rebuilding',
                  'Preparing the operation for additional properties or team members',
                ],
                outcome: 'The team structure holds as your business grows.',
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
            The result: a team that works together efficiently without constant input.
          </p>
        </div>
      </section>

      {/* ── CONNECTION TO STR SYSTEMS BUILDING ───────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
                <Layers className="w-4 h-4" /> The Execution Layer
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Teams Execute the System</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: LayoutDashboard,
                  label: 'Systems define structure',
                  colour: 'border-primary/20 bg-primary/4',
                  iconBg: 'bg-primary/10',
                  iconCol: 'text-primary',
                },
                {
                  icon: ClipboardList,
                  label: 'SOPs define execution',
                  colour: 'border-secondary/20 bg-secondary/4',
                  iconBg: 'bg-secondary/10',
                  iconCol: 'text-secondary',
                },
                {
                  icon: Users,
                  label: 'Teams make it happen',
                  colour: 'border-success/20 bg-success/4',
                  iconBg: 'bg-success/10',
                  iconCol: 'text-success',
                },
              ].map(({ icon: Icon, label, colour, iconBg, iconCol }) => (
                <div key={label} className={`rounded-2xl border p-5 text-center ${colour}`}>
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 ${iconBg}`}
                  >
                    <Icon className={`w-5 h-5 ${iconCol}`} />
                  </div>
                  <p className="font-semibold text-sm">{label}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-base-content/55 mt-8 italic text-sm">
              Without proper team structure, systems cannot function properly.
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
              <h2 className="text-3xl lg:text-4xl font-bold">Where Team Structuring Goes Wrong</h2>
            </div>
            <div className="space-y-3">
              {[
                {
                  mistake: 'Hiring without planning roles',
                  why: 'Bringing people in before defining what they are responsible for creates immediate confusion.',
                },
                {
                  mistake: 'Unclear responsibilities',
                  why: 'When ownership is vague, tasks either get duplicated or fall through the cracks entirely.',
                },
                {
                  mistake: 'No workflows',
                  why: 'Without defined processes, each team member invents their own approach to every task.',
                },
                {
                  mistake: 'Lack of accountability',
                  why: 'If nobody owns a task, nobody is responsible when it goes wrong — and standards erode.',
                },
                {
                  mistake: 'Over-reliance on the host',
                  why: 'If all decisions and approvals flow through the host, the team adds headcount but not capacity.',
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
              Teams fail when structure is missing.
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
              <h2 className="text-3xl lg:text-4xl font-bold">How We Structure Teams Properly</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  step: '1. Define roles clearly',
                  detail:
                    'We map your operation and identify exactly which roles are needed and what each covers.',
                },
                {
                  step: '2. Align tasks with systems',
                  detail:
                    'Every role is connected to the workflows and systems already in place in your business.',
                },
                {
                  step: '3. Create structured workflows',
                  detail:
                    'We document how each role executes their responsibilities so there is no ambiguity.',
                },
                {
                  step: '4. Build for scalability',
                  detail:
                    'The structure is designed to grow with your business without needing to be rebuilt.',
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
            <h2 className="text-3xl lg:text-4xl font-bold">Unstructured Team vs Structured Team</h2>
          </div>
          <div className="hidden md:block overflow-hidden rounded-3xl border border-base-300 max-w-3xl mx-auto">
            <div className="grid grid-cols-3">
              <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/50">
                Area
              </div>
              <div className="bg-error/8 px-5 py-3 text-xs font-bold uppercase tracking-widest text-error/70 text-center">
                Unstructured
              </div>
              <div className="bg-success/8 px-5 py-3 text-xs font-bold uppercase tracking-widest text-success/70 text-center">
                Structured
              </div>
            </div>
            {[
              ['Operations', 'Confusion', 'Clarity'],
              ['Task ownership', 'Overlapping tasks', 'Defined roles'],
              ['Work pattern', 'Reactive', 'Organised'],
              ['Growth', 'Hard to manage', 'Scalable'],
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
              ['Operations', 'Confusion', 'Clarity'],
              ['Task ownership', 'Overlapping tasks', 'Defined roles'],
              ['Work pattern', 'Reactive', 'Organised'],
              ['Growth', 'Hard to manage', 'Scalable'],
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
                icon: UserPlus,
                who: 'Hosts hiring VAs or teams',
                desc: 'Building a team for the first time and needing structure before onboarding anyone.',
              },
              {
                icon: Building2,
                who: 'SA businesses',
                desc: 'Serviced accommodation operators managing teams across multiple properties.',
              },
              {
                icon: Target,
                who: 'Scaling operators',
                desc: 'Growing portfolios where the current informal approach is starting to break down.',
              },
              {
                icon: TrendingUp,
                who: 'Hosts reducing involvement',
                desc: 'Operators who want to step back without operations falling apart.',
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
                initials: 'TW',
                name: 'Tom W.',
                role: 'SA Operator · Birmingham',
                quote:
                  'I had a team but nobody knew who was responsible for what. Assistophere restructured everything and within weeks the chaos had gone. Everyone knew their role.',
              },
              {
                initials: 'CE',
                name: 'Claire E.',
                role: 'Multi-property Host · London',
                quote:
                  'I was the bottleneck in my own business. Once roles were properly defined and workflows were in place, I could step back and things still ran properly.',
              },
              {
                initials: 'MO',
                name: 'Marcus O.',
                role: 'STR Business · Leeds',
                quote:
                  'We had three VAs doing overlapping work and missing things. The team structure they built eliminated the confusion and our operations became much more consistent.',
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
                q="What roles do I need in my team?"
                a="It depends on the size and nature of your operation. Common roles in STR businesses include guest communications, operations coordination, cleaning management, and admin. We assess your current workload and operation to identify exactly which roles make sense for your business."
              />
              <FaqItem
                q="Can this work with my current team?"
                a="Yes. We can work with an existing team to redefine roles, clarify responsibilities, and align workflows. We do not require you to start from scratch — the goal is to make your current team more effective, not to replace them."
              />
              <FaqItem
                q="How do you assign responsibilities?"
                a="We map your full operational workload first, then match each task and area of responsibility to the most appropriate role. The result is a clear role structure where every task has an owner and nothing is left unassigned or duplicated."
              />
              <FaqItem
                q="Will this reduce my workload?"
                a="Yes — that is a core outcome. When roles are clearly defined and workflows are in place, your team can handle operations without constantly referring back to you. You move from being the centre of everything to overseeing a team that runs itself."
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
                <Users className="w-4 h-4" /> Structure Your Team
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold">
                Ready to Build a Team That{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Actually Works?
                </span>
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed">
                Let&apos;s create a structure that makes your team efficient and scalable. We
                don&apos;t just help you hire — we structure how your team works.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <button className="pulse-cta-ts btn btn-primary btn-lg rounded-full px-10 gap-2 shadow-lg">
                  <Phone className="w-4 h-4" /> Book a Discovery Call
                </button>
                <button className="btn btn-outline btn-lg rounded-full px-8 gap-2">
                  <ArrowRight className="w-4 h-4" /> Back to STR Systems Building
                </button>
              </div>
              <p className="text-xs text-base-content/40 pt-2">
                Airbnb Team Structure UK · STR Team Management · VA Team Setup · Operations Team
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
