import React from 'react'
import Link from 'next/link'
import {
  Calendar,
  LayoutGrid,
  Star,
  Phone,
  ArrowRight,
  CheckCircle2,
  XCircle,
  MessageSquare,
  ChevronRight,
  AlertTriangle,
  TrendingUp,
  Target,
  Building2,
  Layers,
  Clock,
  BarChart3,
  Repeat,
  Timer,
  CheckSquare,
  Zap,
} from 'lucide-react'
import type { Page } from '@/payload-types'

export const PostingAndSchedulingView: React.FC<{ page: Page }> = () => {
  return (
    <div className="min-h-screen text-base-content overflow-x-hidden">
      <style>{`
        @keyframes pulse-ring-pas {
          0%,100% { box-shadow: 0 0 0 0 hsl(var(--p)/.35); }
          50%      { box-shadow: 0 0 0 10px hsl(var(--p)/0); }
        }
        @keyframes pas-fade-up {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .pas-fade-1 { animation: pas-fade-up .55s ease both .10s; }
        .pas-fade-2 { animation: pas-fade-up .55s ease both .22s; }
        .pas-fade-3 { animation: pas-fade-up .55s ease both .34s; }
        .pas-fade-4 { animation: pas-fade-up .55s ease both .46s; }
        .pas-fade-5 { animation: pas-fade-up .55s ease both .58s; }
        .pulse-cta-pas { animation: pulse-ring-pas 2.4s ease-in-out infinite; }
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
              <div className="pas-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium">
                <Calendar className="w-4 h-4" />
                Posting &amp; Scheduling · UK STR
              </div>
              <h1 className="pas-fade-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight">
                Posting &amp; Scheduling That Keeps Your STR Brand{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Consistent
                </span>
              </h1>
              <p className="pas-fade-3 text-lg text-base-content/70 leading-relaxed max-w-lg">
                Assistophere manages posting and scheduling for UK hosts, ensuring your content goes
                live consistently without gaps or manual effort.
              </p>
              <div className="pas-fade-4 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm italic text-base-content/65">
                Social media posting and scheduling involve planning, organising, and publishing
                content consistently to maintain an active and reliable online presence.
              </div>
              <div className="pas-fade-5 flex flex-wrap gap-3 pt-1">
                <button className="pulse-cta-pas btn btn-primary btn-lg rounded-full px-8 gap-2">
                  <Phone className="w-4 h-4" /> Book a Discovery Call
                </button>
                <Link
                  href="/services/social-media-management"
                  className="btn btn-outline btn-lg rounded-full px-8 gap-2"
                >
                  <ArrowRight className="w-4 h-4" /> Back to Social Media Management
                </Link>
              </div>
              <div className="pas-fade-5 flex items-center gap-3 pt-2">
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
                  <p className="text-xs text-base-content/55 mt-0.5">
                    Consistent posting for UK STR businesses
                  </p>
                </div>
              </div>
            </div>

            {/* Hero visual — scheduling dashboard */}
            <div className="hidden lg:block">
              <div className="relative rounded-3xl border border-base-300 bg-base-200/60 backdrop-blur-sm p-6 shadow-xl">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs font-bold">Posting Schedule</p>
                    <p className="text-[10px] text-base-content/40">April 2026 · Week 2</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-semibold text-success">
                    <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                    Active
                  </div>
                </div>
                {/* Week grid */}
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                    <div key={i} className="text-center">
                      <p className="text-[9px] text-base-content/40 mb-1">{d}</p>
                      <div
                        className={`rounded-lg aspect-square flex items-center justify-center text-[9px] font-bold
                        ${[0, 2, 4].includes(i) ? 'bg-primary/20 text-primary' : i === 5 ? 'bg-secondary/15 text-secondary' : 'bg-base-300 text-base-content/30'}`}
                      >
                        {[0, 2, 4].includes(i) ? '✓' : i === 5 ? '◎' : '–'}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Upcoming posts */}
                <div className="space-y-2 mb-4">
                  {[
                    { time: '09:00', label: 'Property Showcase · Instagram', done: true },
                    { time: '11:00', label: 'Guest Tip · Facebook', done: true },
                    { time: '18:00', label: 'Direct Booking Prompt · Instagram', done: false },
                    { time: '20:00', label: 'Evening Reel · Instagram', done: false },
                  ].map(({ time, label, done }) => (
                    <div
                      key={time}
                      className="flex items-center gap-3 bg-base-100 rounded-xl px-3 py-2 border border-base-300"
                    >
                      <span className="text-[10px] text-base-content/40 w-10 shrink-0">{time}</span>
                      <span className="text-xs flex-1 text-base-content/70">{label}</span>
                      {done ? (
                        <CheckSquare className="w-3.5 h-3.5 text-success shrink-0" />
                      ) : (
                        <Clock className="w-3.5 h-3.5 text-primary/50 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="bg-base-100 rounded-xl border border-primary/20 px-4 py-2.5 flex items-center justify-between">
                  <span className="text-xs text-base-content/50">Posts scheduled this week</span>
                  <span className="text-xs font-bold text-primary">5 posts</span>
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
              <Repeat className="w-4 h-4" /> The Real Driver
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Consistency Matters More Than Frequency
            </h2>
            <p className="text-base-content/65 text-lg leading-relaxed">
              Posting five times in one week then going silent for three weeks is worse than posting
              twice a week, every week. Algorithms reward reliability — and so do potential guests.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-left">
              {[
                {
                  icon: XCircle,
                  colour: 'text-error',
                  bg: 'border-error/15 bg-error/4',
                  label: 'Posts are irregular',
                  desc: 'Bursts of content followed by silence break any momentum your account builds.',
                },
                {
                  icon: XCircle,
                  colour: 'text-error',
                  bg: 'border-error/15 bg-error/4',
                  label: 'Content is delayed',
                  desc: 'Last-minute scrambles lead to rushed posts — or no posts at all when life gets busy.',
                },
                {
                  icon: XCircle,
                  colour: 'text-error',
                  bg: 'border-error/15 bg-error/4',
                  label: 'Schedules are inconsistent',
                  desc: 'Without a fixed rhythm, your audience never builds familiarity or anticipation.',
                },
              ].map(({ icon: Icon, colour, bg, label, desc }) => (
                <div key={label} className={`rounded-2xl border p-4 ${bg}`}>
                  <Icon className={`w-4 h-4 ${colour} mb-2`} />
                  <p className="font-semibold text-sm">{label}</p>
                  <p className="text-xs text-base-content/55 mt-1 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-base-content/55 text-sm italic">
              Consistency builds trust and visibility — posting once a week, every week, outperforms
              erratic bursts.
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
                <XCircle className="w-4 h-4" /> The Problem
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Why Posting Becomes Inconsistent</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  point: 'Lack of time',
                  detail:
                    'Running a short-term rental business is demanding. Social media always gets pushed to tomorrow — and tomorrow never comes.',
                },
                {
                  point: 'No content calendar',
                  detail:
                    'Without a plan, every post requires starting from scratch. The absence of a calendar means the absence of consistency.',
                },
                {
                  point: 'Manual posting',
                  detail:
                    'Relying on remembering to post manually guarantees gaps. Life interrupts, priorities shift, and the posting habit breaks.',
                },
                {
                  point: 'No planning system',
                  detail:
                    "Content that's improvised on the day gets deprioritised under operational pressure. Systems are what make posting non-negotiable.",
                },
                {
                  point: 'Missed posting days',
                  detail:
                    'One missed day becomes two, then a week. The algorithm deprioritises the account and rebuilding momentum requires starting again.',
                },
              ].map(({ point, detail }) => (
                <div
                  key={point}
                  className="flex gap-4 p-5 rounded-2xl border border-error/15 bg-error/4"
                >
                  <XCircle className="w-5 h-5 text-error shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">{point}</p>
                    <p className="text-xs text-base-content/55 mt-0.5 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-base-content/55 mt-8 italic text-sm">
              Without a system, posting always becomes secondary.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT PROPER SCHEDULING DOES ──────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Zap className="w-4 h-4" /> The Standard
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">What Structured Posting Achieves</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              {
                icon: Repeat,
                title: 'Consistent Presence',
                desc: 'Regular activity across your platforms keeps your account visible to the algorithm and familiar to your audience — week in, week out.',
              },
              {
                icon: Calendar,
                title: 'Better Planning',
                desc: 'Content prepared in advance means every post has a purpose, a theme, and a place in the wider content strategy. Nothing reactive.',
              },
              {
                icon: Timer,
                title: 'Reduced Effort',
                desc: 'No daily check-ins, no scrambles, no manual uploads. Scheduling takes the operational burden completely off your plate.',
              },
              {
                icon: CheckSquare,
                title: 'Reliable Output',
                desc: 'Content goes live exactly as planned — at the right time, on the right platform, every week without exception or manual intervention.',
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="bg-base-100 rounded-2xl border border-base-300 p-5 relative"
              >
                <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-primary text-primary-content text-xs font-bold flex items-center justify-center shadow">
                  {i + 1}
                </div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 mt-1">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-sm mb-2">{title}</h3>
                <p className="text-xs text-base-content/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE HANDLE ───────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Layers className="w-4 h-4" /> Our Scope
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              What Our Posting &amp; Scheduling Covers
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1.5fr] gap-px bg-base-300 rounded-3xl overflow-hidden border border-base-300">
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              Service Area
            </div>
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              What We Do
            </div>
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              Outcome
            </div>
            {[
              {
                area: 'Content Scheduling',
                icon: Calendar,
                tasks: [
                  'Planning specific publishing dates for every post',
                  'Organising content timelines across the month',
                  'Structuring consistency so no week is left empty',
                ],
                outcome:
                  'A reliable posting rhythm that keeps your account active without any day-to-day input from you.',
              },
              {
                area: 'Platform Posting',
                icon: CheckSquare,
                tasks: [
                  'Uploading and publishing content across agreed platforms',
                  'Managing post formats tailored to each platform',
                  'Maintaining regular activity on Instagram and Facebook',
                ],
                outcome:
                  'Content that goes live correctly, consistently, and without manual uploads on your end.',
              },
              {
                area: 'Content Calendar Management',
                icon: LayoutGrid,
                tasks: [
                  'Building a structured monthly posting plan',
                  'Organising themes, post types, and publishing days',
                  "Giving you clear visibility of what's going live and when",
                ],
                outcome:
                  'Full clarity over your content pipeline — reviewed and approved monthly before anything publishes.',
              },
              {
                area: 'Timing Optimisation',
                icon: Timer,
                tasks: [
                  'Selecting posting times based on audience activity',
                  'Maintaining consistent scheduling windows across the week',
                  'Adjusting publish times to maximise organic reach',
                ],
                outcome:
                  'Posts that go live when your audience is most active — improving visibility and engagement.',
              },
              {
                area: 'Ongoing Management',
                icon: Repeat,
                tasks: [
                  'Ensuring scheduled posts go live as planned',
                  'Monitoring for any scheduling issues or platform errors',
                  'Adjusting schedules when content needs to change',
                ],
                outcome:
                  "Continuous management so nothing slips — your account stays active regardless of what's happening in your business.",
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
            The result: a consistent and active social media presence — managed end to end.
          </p>
        </div>
      </section>

      {/* ── CONNECTS TO STR STRATEGY ─────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-success/10 border border-success/25 text-success text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4" /> Strategic Impact
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Posting Supports Brand Growth</h2>
              <p className="text-base-content/60 mt-4 leading-relaxed">
                Consistent posting isn&apos;t just about looking active. It&apos;s the foundation
                that every other part of your social media strategy depends on — without it, nothing
                else compounds.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: CheckSquare,
                  title: 'Build trust',
                  desc: 'Guests who see your account posting regularly interpret it as a sign of a credible, professional, active business.',
                },
                {
                  icon: TrendingUp,
                  title: 'Maintain visibility',
                  desc: 'Consistent posting keeps your account in front of followers and the algorithm rewards regular activity with organic reach.',
                },
                {
                  icon: Target,
                  title: 'Support direct booking strategy',
                  desc: 'An active, reliable social presence is what moves followers from passive awareness to direct booking enquiry over time.',
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-base-100 rounded-2xl border border-success/15 p-5">
                  <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-success" />
                  </div>
                  <p className="font-semibold text-sm">{title}</p>
                  <p className="text-xs text-base-content/55 mt-1 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-base-content/55 mt-6 italic text-sm">
              Without consistency, growth slows — and rebuilding momentum is harder than maintaining
              it.
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
              <h2 className="text-3xl lg:text-4xl font-bold">Where Posting Goes Wrong</h2>
            </div>
            <div className="space-y-3">
              {[
                {
                  mistake: 'Posting randomly',
                  why: "Random posts with no schedule create an unpredictable feed. Followers don't build a habit of checking, and the algorithm doesn't favour accounts without a reliable cadence.",
                },
                {
                  mistake: 'Skipping weeks',
                  why: 'A week without posts signals inactivity to both the algorithm and potential guests. Recovery takes longer than the gap itself — consistency lost is hard to rebuild.',
                },
                {
                  mistake: 'No content calendar',
                  why: 'Without a calendar, every post requires a decision. That decision overhead is what causes delays, missed days, and eventual abandonment of the schedule entirely.',
                },
                {
                  mistake: 'Manual uploads only',
                  why: 'Relying on manual posting means your social media depends entirely on your availability. One busy week or difficult month breaks the habit permanently.',
                },
                {
                  mistake: 'Inconsistent timing',
                  why: 'Posting at different times each day prevents the algorithm from optimising your content. Consistent posting windows build audience habit and improve reach over time.',
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
                    <p className="text-xs text-base-content/55 mt-0.5 leading-relaxed">{why}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-base-content/55 mt-8 italic text-sm">
              Posting fails when it&apos;s not planned.
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
              <h2 className="text-3xl lg:text-4xl font-bold">How We Handle Posting Properly</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  step: '1. Plan content in advance',
                  detail:
                    "Every month is planned before it begins. Content themes, post types, and publish dates are locked in — so there's no decision-making on the day.",
                },
                {
                  step: '2. Maintain a clear schedule',
                  detail:
                    'We build and manage a structured posting calendar across agreed platforms. Every week has a defined posting plan — nothing is left to chance.',
                },
                {
                  step: '3. Ensure consistency',
                  detail:
                    "Posts go live as scheduled, every week, without exception. If something needs adjusting, we handle it — you don't need to think about it.",
                },
                {
                  step: '4. Remove manual effort',
                  detail:
                    'Everything is scheduled and managed on your behalf. You review the monthly plan, approve it, and the work happens without any ongoing input from you.',
                },
              ].map(({ step, detail }) => (
                <div
                  key={step}
                  className="flex gap-4 p-5 rounded-2xl border border-primary/15 bg-primary/4"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">{step}</p>
                    <p className="text-xs text-base-content/55 mt-0.5 leading-relaxed">{detail}</p>
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
              Inconsistent Posting vs Structured Scheduling
            </h2>
          </div>
          {/* Desktop */}
          <div className="hidden md:block overflow-hidden rounded-3xl border border-base-300 max-w-3xl mx-auto">
            <div className="grid grid-cols-3">
              <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/50">
                Area
              </div>
              <div className="bg-error/8 px-5 py-3 text-xs font-bold uppercase tracking-widest text-error/70 text-center">
                Inconsistent
              </div>
              <div className="bg-success/8 px-5 py-3 text-xs font-bold uppercase tracking-widest text-success/70 text-center">
                Structured
              </div>
            </div>
            {[
              ['Posting approach', 'Random posts', 'Planned posts'],
              ['Account activity', 'Gaps in activity', 'Consistent presence'],
              ['Operational effort', 'Manual effort', 'Automated scheduling'],
              ['Output reliability', 'Unreliable', 'Predictable'],
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
          {/* Mobile */}
          <div className="md:hidden space-y-3 max-w-sm mx-auto">
            {[
              ['Posting approach', 'Random posts', 'Planned posts'],
              ['Account activity', 'Gaps in activity', 'Consistent presence'],
              ['Operational effort', 'Manual effort', 'Automated scheduling'],
              ['Output reliability', 'Unreliable', 'Predictable'],
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
              <Target className="w-4 h-4" /> Ideal Fit
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Who This Is Built For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              {
                icon: Repeat,
                who: 'Hosts struggling with consistency',
                desc: 'If posting keeps getting deprioritised and weeks go by without content, a structured scheduling service removes the friction entirely.',
              },
              {
                icon: Building2,
                who: 'SA businesses',
                desc: 'Serviced accommodation operators who want active, professional accounts without spending time managing platforms themselves.',
              },
              {
                icon: LayoutGrid,
                who: 'Operators managing multiple platforms',
                desc: 'Those running Instagram, Facebook, and TikTok simultaneously who need a single managed system for all scheduled output.',
              },
              {
                icon: CheckSquare,
                who: 'Hosts wanting reliability',
                desc: 'Hosts who want to know their social media will be active every week — without having to think about it or chase it themselves.',
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
                role: 'STR Host · Manchester',
                quote:
                  'I used to post maybe once a month when I remembered. Now it goes out every week without me touching it. My account looks completely different — active, consistent, professional.',
              },
              {
                initials: 'LC',
                name: 'Louise C.',
                role: 'SA Operator · London',
                quote:
                  "The scheduling took all the pressure off. I review the plan at the start of the month, approve it, and then forget about it. Everything just happens. That's exactly what I needed.",
              },
              {
                initials: 'BH',
                name: 'Ben H.',
                role: 'Property Investor · Leeds',
                quote:
                  'I had three platforms I was trying to manage manually and failing at all of them. Having one structured system across all of them has been a game changer for how my business looks online.',
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
              {[
                {
                  q: 'How often do you post?',
                  a: "Posting frequency is agreed as part of your package. Standard management includes three to five posts per week across agreed platforms. We build a monthly content calendar in advance so you always know exactly what's going live and when.",
                },
                {
                  q: 'Do you schedule content in advance?',
                  a: 'Yes — all content is scheduled in advance as part of a structured monthly plan. Nothing goes live reactively. You review and approve the calendar before publishing begins, so you have full visibility and control over what goes out.',
                },
                {
                  q: 'Which platforms do you manage?',
                  a: "We primarily manage Instagram and Facebook for STR businesses. TikTok scheduling is available depending on your goals and package. We'll recommend the right platforms for your audience during the discovery call.",
                },
                {
                  q: 'Can schedules be adjusted?',
                  a: 'Yes — if your availability changes, a booking comes in, or you want to promote something specific, schedules can be adjusted. We review the calendar monthly and can make changes at any point with reasonable notice.',
                },
              ].map(({ q, a }) => (
                <details
                  key={q}
                  className="group rounded-2xl border border-base-300 bg-base-100 overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-semibold text-sm select-none">
                    {q}
                    <ChevronRight className="w-4 h-4 text-base-content/40 shrink-0 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-5 pb-4 text-sm text-base-content/65 leading-relaxed border-t border-base-300 pt-3">
                    {a}
                  </div>
                </details>
              ))}
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
                <Calendar className="w-4 h-4" /> Posting &amp; Scheduling for STR
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold">
                Ready to Stay Consistent on{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Social Media?
                </span>
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed">
                Let&apos;s build a structured posting system that keeps your brand active. We
                don&apos;t just post content — we make sure it shows up consistently.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <button className="pulse-cta-pas btn btn-primary btn-lg rounded-full px-10 gap-2 shadow-lg">
                  <Phone className="w-4 h-4" /> Book a Discovery Call
                </button>
                <Link
                  href="/services/social-media-management"
                  className="btn btn-outline btn-lg rounded-full px-8 gap-2"
                >
                  <ArrowRight className="w-4 h-4" /> Back to Social Media Management
                </Link>
              </div>
              <p className="text-xs text-base-content/40 pt-2">
                Social Media Scheduling Airbnb UK · STR Content Scheduling · Airbnb Instagram
                Posting · Content Calendar Management
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
