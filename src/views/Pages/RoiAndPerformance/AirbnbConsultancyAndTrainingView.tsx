import React from 'react'
import {
  Lightbulb, Settings, Star, Phone, ArrowRight, CheckCircle2, XCircle,
  BarChart3, Target, TrendingUp, Building2, Users, MessageSquare,
  ChevronRight, AlertTriangle, ClipboardList, BookOpen,
  Compass, Zap, UserCheck, GraduationCap,
} from 'lucide-react'
import type { Page } from '@/payload-types'

export const AirbnbConsultancyAndTrainingView: React.FC<{ page: Page }> = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content overflow-x-hidden">
      <style>{`
        @keyframes pulse-ring-act {
          0%,100% { box-shadow: 0 0 0 0 hsl(var(--p)/.35); }
          50%      { box-shadow: 0 0 0 10px hsl(var(--p)/0); }
        }
        @keyframes act-fade-up {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .act-fade-1 { animation: act-fade-up .55s ease both .10s; }
        .act-fade-2 { animation: act-fade-up .55s ease both .22s; }
        .act-fade-3 { animation: act-fade-up .55s ease both .34s; }
        .act-fade-4 { animation: act-fade-up .55s ease both .46s; }
        .act-fade-5 { animation: act-fade-up .55s ease both .58s; }
        .pulse-cta-act { animation: pulse-ring-act 2.4s ease-in-out infinite; }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-linear-to-br from-primary/13 via-primary/4 to-transparent rounded-full blur-[140px]" />
          <div className="absolute top-1/2 -right-40 w-[420px] h-[420px] bg-linear-to-bl from-secondary/10 via-secondary/3 to-transparent rounded-full blur-[120px]" />
        </div>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="act-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium">
                <GraduationCap className="w-4 h-4" />
                Consultancy &amp; Training · ROI &amp; Performance · UK
              </div>
              <h1 className="act-fade-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight">
                Airbnb Consultancy &amp; Training for Smarter{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  STR Operations
                </span>
              </h1>
              <p className="act-fade-3 text-lg text-base-content/70 leading-relaxed max-w-lg">
                Assistophere provides expert guidance and training for UK hosts, helping you
                improve operations, performance, and long-term growth through structured advice.
              </p>
              <div className="act-fade-4 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm italic text-base-content/65">
                Airbnb consultancy and training provide guidance on operations, pricing, listings,
                and systems to help hosts improve performance and scale effectively.
              </div>
              <div className="act-fade-5 flex flex-wrap gap-3 pt-1">
                <button className="pulse-cta-act btn btn-primary btn-lg rounded-full px-8 gap-2">
                  <Phone className="w-4 h-4" /> Book a Discovery Call
                </button>
                <button className="btn btn-outline btn-lg rounded-full px-8 gap-2">
                  <ArrowRight className="w-4 h-4" /> Explore Services
                </button>
              </div>
              <div className="act-fade-5 flex items-center gap-3 pt-2">
                <div className="flex -space-x-2">
                  {['bg-primary','bg-secondary','bg-accent','bg-neutral'].map((c, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-base-100 ${c} flex items-center justify-center text-xs font-bold text-white`}>
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}</div>
                  <p className="text-xs text-base-content/55 mt-0.5">Trusted by UK hosts and SA operators</p>
                </div>
              </div>
            </div>

            {/* Hero visual — consultancy session card */}
            <div className="hidden lg:block">
              <div className="relative rounded-3xl border border-base-300 bg-base-200/60 backdrop-blur-sm p-7 shadow-xl">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-error/70" />
                  <div className="w-3 h-3 rounded-full bg-warning/70" />
                  <div className="w-3 h-3 rounded-full bg-success/70" />
                  <span className="ml-2 text-xs text-base-content/40 font-mono">consultancy.session</span>
                </div>
                {/* Session summary */}
                <div className="space-y-3">
                  {[
                    { area: 'Listing & Pricing Audit', finding: 'Flat rate — losing 22% revenue in peak weeks', fix: 'Dynamic pricing implemented', status: 'resolved' },
                    { area: 'Operations Review', finding: 'Manual guest comms — 3hr/day average', fix: 'Automated message sequences', status: 'resolved' },
                    { area: 'Team Structure', finding: 'No defined roles — host doing everything', fix: 'VA roles scoped and assigned', status: 'resolved' },
                    { area: 'Scaling Plan', finding: 'No roadmap for property 2', fix: 'Portfolio strategy drafted', status: 'active' },
                  ].map(({ area, finding, fix, status }) => (
                    <div key={area} className={`rounded-xl border px-4 py-3 ${status === 'resolved' ? 'border-success/20 bg-success/5' : 'border-primary/20 bg-primary/6'}`}>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs font-bold text-base-content/50 mb-0.5">{area}</p>
                          <p className="text-xs text-error/70 line-through mb-0.5">{finding}</p>
                          <p className="text-xs font-semibold text-success/80">{fix}</p>
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 mt-0.5 ${status === 'resolved' ? 'bg-success/15 text-success' : 'bg-primary/15 text-primary'}`}>
                          {status === 'resolved' ? '✓ Done' : '→ In progress'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-center text-xs text-base-content/35 mt-4">Real issues · Clear fixes · Structured progress</p>
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
              <Lightbulb className="w-4 h-4" /> A Different Approach
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Not Every Business Needs Full Management</h2>
            <p className="text-base-content/65 text-lg leading-relaxed">
              Some hosts want guidance, clarity, and direction — not full outsourcing.
              They want to stay in control but operate with better strategy and more confidence.
              That's exactly where consultancy and training come in.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {[
                { icon: Compass, label: 'Guidance', desc: 'Expert direction on the right approach for your specific situation and goals.' },
                { icon: Lightbulb, label: 'Clarity', desc: 'Clear understanding of what is working, what is not, and what to do next.' },
                { icon: Target, label: 'Direction', desc: 'A structured plan that moves your business forward without guesswork.' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="bg-base-100 rounded-2xl border border-primary/15 p-5 text-left">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-primary" />
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
                <XCircle className="w-4 h-4" /> The Core Problem
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Why Hosts Struggle Without Guidance</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { point: 'Unclear strategy', detail: 'Operating without a clear plan means reacting to problems rather than preventing them — and progress is unpredictable.' },
                { point: 'Inconsistent decisions', detail: 'Without a framework, decisions change based on what feels right in the moment rather than what the data and strategy suggest.' },
                { point: 'Lack of structure', detail: 'Operations that have never been properly structured become increasingly chaotic as the business grows.' },
                { point: 'No expert input', detail: 'Hosts without access to experienced guidance spend months solving problems that an expert could resolve in a single session.' },
                { point: 'Trial and error', detail: 'Learning through mistakes in a live business is expensive — in time, money, and missed opportunity.' },
              ].map(({ point, detail }) => (
                <div key={point} className="flex gap-4 p-5 rounded-2xl border border-error/15 bg-error/4">
                  <XCircle className="w-5 h-5 text-error shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">{point}</p>
                    <p className="text-xs text-base-content/55 mt-0.5 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-base-content/55 mt-8 italic text-sm">
              Without direction, progress is slow and uncertain.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT CONSULTANCY PROVIDES ────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <CheckCircle2 className="w-4 h-4" /> What Good Looks Like
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">What You Get From Proper STR Consultancy</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { icon: Compass, title: 'Clear Direction', desc: 'Understanding exactly what to do next in your business — and why — rather than guessing which step to take.' },
              { icon: Zap, title: 'Problem Solving', desc: 'Identifying root causes of underperformance quickly and resolving them with targeted, practical fixes.' },
              { icon: Target, title: 'Strategic Thinking', desc: 'Making better long-term decisions by thinking beyond the immediate issue and building toward a clear goal.' },
              { icon: TrendingUp, title: 'Structured Improvement', desc: 'A methodical approach to improving systems and performance that compounds over time rather than producing one-off gains.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="bg-base-100 rounded-2xl border border-base-300 p-6 relative">
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

      {/* ── WHAT WE COVER ────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Settings className="w-4 h-4" /> Our Scope
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">What Our Consultancy &amp; Training Includes</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1.5fr] gap-px bg-base-300 rounded-3xl overflow-hidden border border-base-300">
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">Area</div>
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">What We Cover</div>
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">Outcome</div>
            {[
              {
                area: 'Listing & Performance Review', icon: BarChart3,
                tasks: ['Auditing current listings across platforms', 'Identifying specific improvements to content, structure, and conversion', 'Refining setup to improve visibility and booking rate'],
                outcome: 'You know exactly why your listing is or is not performing — and what to change.',
              },
              {
                area: 'Pricing & Calendar Guidance', icon: TrendingUp,
                tasks: ['Reviewing current pricing strategy against market data', 'Advising on dynamic pricing setup and seasonal adjustments', 'Improving availability management to increase occupancy'],
                outcome: 'A pricing approach that captures more revenue without sacrificing occupancy.',
              },
              {
                area: 'Operations Advice', icon: Settings,
                tasks: ['Reviewing current operational workflows for inefficiencies', 'Advising on process structure and guest-handling procedures', 'Identifying where time and money are being lost unnecessarily'],
                outcome: 'Streamlined operations that take less effort and deliver more consistent results.',
              },
              {
                area: 'Systems & Automation Guidance', icon: Zap,
                tasks: ['Identifying gaps in current automation setup', 'Advising on which tools and integrations make sense for your operation', 'Recommending improvements that save time and reduce manual work'],
                outcome: 'A clearer, better-configured system that does more of the work for you.',
              },
              {
                area: 'Team & Scaling Support', icon: Users,
                tasks: ['Advising on team structure and role definition', 'Improving coordination and accountability within existing teams', 'Planning the structure needed to support portfolio growth'],
                outcome: 'A team and business structure prepared for the next stage of growth.',
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
                    {tasks.map(t => (
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
            The result: clear direction and measurably improved performance.
          </p>
        </div>
      </section>

      {/* ── TRAINING ELEMENT ─────────────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
                <BookOpen className="w-4 h-4" /> The Training Layer
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Training for You or Your Team</h2>
              <p className="text-base-content/60 mt-4 text-sm leading-relaxed max-w-xl mx-auto">
                Consultancy gives you direction. Training gives your operation the ability to execute
                it correctly without relying on external guidance every time.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: UserCheck, label: 'Host-level training', desc: 'You understand your business more deeply — the metrics that matter, the decisions that move the needle, and the systems that support it.' },
                { icon: Users, label: 'Team-level training', desc: 'Your team can operate effectively without constant oversight. Each person understands their role and the process behind it.' },
                { icon: ClipboardList, label: 'Process training', desc: 'Procedures are followed correctly and consistently — reducing errors, improving guest experience, and increasing operational reliability.' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="bg-base-100 rounded-2xl border border-secondary/15 p-5 text-center">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="font-semibold text-sm">{label}</p>
                  <p className="text-xs text-base-content/55 mt-1.5 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
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
              <h2 className="text-3xl lg:text-4xl font-bold">Where Hosts Go Wrong Without Guidance</h2>
            </div>
            <div className="space-y-3">
              {[
                { mistake: 'Guessing strategies', why: 'Making pricing, listing, and operational decisions based on intuition rather than data leads to inconsistent and often poor results.' },
                { mistake: 'Copying others', why: "Applying another host's approach to a different property, market, or guest type rarely works — context determines what the right strategy is." },
                { mistake: 'Inconsistent decisions', why: 'Changing approach frequently without a clear framework prevents any strategy from gaining traction and makes performance hard to improve.' },
                { mistake: 'Ignoring data', why: 'Occupancy rates, review scores, response times, and booking lead times all contain actionable signals — most hosts never look at them properly.' },
                { mistake: 'No structured approach', why: 'Without a consistent method for reviewing and improving performance, the same problems recur and progress stalls.' },
              ].map(({ mistake, why }) => (
                <div key={mistake} className="flex gap-4 p-5 rounded-2xl border border-warning/20 bg-warning/4">
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
              Without guidance, mistakes repeat.
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
              <h2 className="text-3xl lg:text-4xl font-bold">How We Deliver Consultancy Properly</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { step: '1. Assess your current setup', detail: 'We review your listings, pricing, operations, and systems to build an accurate picture of where your business currently stands.' },
                { step: '2. Identify key issues', detail: 'We pinpoint the specific areas that are limiting your performance — not general feedback, but targeted findings with evidence.' },
                { step: '3. Provide clear recommendations', detail: 'We give you a prioritised, actionable set of improvements with clear reasoning behind each one.' },
                { step: '4. Focus on practical improvements', detail: 'Our recommendations are designed to be implemented — not theoretical concepts but concrete actions that move your numbers.' },
              ].map(({ step, detail }) => (
                <div key={step} className="flex gap-4 p-5 rounded-2xl border border-primary/15 bg-primary/4">
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
            <h2 className="text-3xl lg:text-4xl font-bold">Trial &amp; Error vs Expert Guidance</h2>
          </div>
          <div className="hidden md:block overflow-hidden rounded-3xl border border-base-300 max-w-3xl mx-auto">
            <div className="grid grid-cols-3">
              <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/50">Area</div>
              <div className="bg-error/8 px-5 py-3 text-xs font-bold uppercase tracking-widest text-error/70 text-center">Trial &amp; Error</div>
              <div className="bg-success/8 px-5 py-3 text-xs font-bold uppercase tracking-widest text-success/70 text-center">Consultancy</div>
            </div>
            {[
              ['Learning speed', 'Slow learning', 'Faster improvement'],
              ['Direction', 'Unclear direction', 'Clear strategy'],
              ['Mistakes', 'Repeated mistakes', 'Structured progress'],
              ['Results', 'Inconsistent results', 'Improved performance'],
            ].map(([area, bad, good]) => (
              <div key={area} className="grid grid-cols-3 border-t border-base-300">
                <div className="bg-base-100 px-5 py-4 text-sm font-medium">{area}</div>
                <div className="bg-error/4 px-5 py-4 text-sm text-error/80 text-center">{bad}</div>
                <div className="bg-success/4 px-5 py-4 text-sm text-success/80 text-center font-medium">{good}</div>
              </div>
            ))}
          </div>
          {/* Mobile */}
          <div className="md:hidden space-y-3 max-w-sm mx-auto">
            {[
              ['Learning speed', 'Slow learning', 'Faster improvement'],
              ['Direction', 'Unclear direction', 'Clear strategy'],
              ['Mistakes', 'Repeated mistakes', 'Structured progress'],
              ['Results', 'Inconsistent results', 'Improved performance'],
            ].map(([area, bad, good]) => (
              <div key={area} className="rounded-2xl border border-base-300 overflow-hidden">
                <div className="bg-base-200 px-4 py-2 text-xs font-bold uppercase tracking-wider text-base-content/50">{area}</div>
                <div className="grid grid-cols-2 divide-x divide-base-300">
                  <div className="px-4 py-3 bg-error/4 text-xs text-error/80">{bad}</div>
                  <div className="px-4 py-3 bg-success/4 text-xs text-success/80 font-medium">{good}</div>
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
              { icon: UserCheck, who: 'Self-managing hosts', desc: 'Hosts running their own operation who want expert input without handing over control.' },
              { icon: Building2, who: 'SA businesses', desc: 'Serviced accommodation operators who need strategic guidance to improve performance at scale.' },
              { icon: GraduationCap, who: 'Teams needing training', desc: 'Operations with staff or VAs who need structured training to work more effectively.' },
              { icon: Compass, who: 'Operators wanting clarity', desc: 'Businesses that have grown and need a clear strategy to manage complexity and plan the next stage.' },
            ].map(({ icon: Icon, who, desc }) => (
              <div key={who} className="bg-base-100 rounded-2xl border border-base-300 p-5 text-center">
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
              { initials: 'LM', name: 'Laura M.', role: 'Self-managing Host · Edinburgh', quote: "I didn't want someone else to run my business — I wanted to run it better myself. The consultancy session identified three changes I made immediately. My occupancy improved in the following month." },
              { initials: 'TN', name: 'Thomas N.', role: 'SA Operator · Manchester', quote: "We had five properties and no clear strategy. The review showed us exactly what was wrong with our pricing and operations. The training session brought my team up to speed properly." },
              { initials: 'PB', name: 'Priya B.', role: 'Multi-property Host · London', quote: "I was making decisions based on what others were doing in Facebook groups. The consultancy gave me a framework to make proper decisions based on my own data. The difference is significant." },
            ].map(({ initials, name, role, quote }) => (
              <div key={name} className="bg-base-200 rounded-2xl border border-base-300 p-6 space-y-4">
                <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}</div>
                <p className="text-sm text-base-content/70 leading-relaxed italic">"{quote}"</p>
                <div className="flex items-center gap-3 pt-1">
                  <div className="w-9 h-9 rounded-full bg-primary text-primary-content flex items-center justify-center text-xs font-bold">{initials}</div>
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
                  q: 'Is this one-to-one consultancy?',
                  a: 'Yes — sessions are tailored to your specific business, situation, and goals. There are no generic frameworks applied without context. Everything is based on an assessment of your actual operation, data, and objectives.',
                },
                {
                  q: 'Can you train my team?',
                  a: 'Yes. We provide structured training sessions for VAs, operations staff, and other team members. Training covers the specific areas relevant to their roles — guest communications, operational processes, pricing procedures, or other areas depending on your setup.',
                },
                {
                  q: 'What areas do you cover?',
                  a: 'We cover listings and performance, pricing strategy, operations and workflow, systems and automation, team structure, and scaling planning. Sessions can focus on a single area or cover multiple, depending on what your business needs most.',
                },
                {
                  q: 'Will this improve performance?',
                  a: 'Consultancy provides direction — improvement depends on implementation. Clients who apply the recommendations consistently see measurable improvements in occupancy, revenue, and operational efficiency. We give you the clearest possible path; the execution is yours to drive.',
                },
              ].map(({ q, a }) => (
                <details key={q} className="group rounded-2xl border border-base-300 bg-base-100 overflow-hidden">
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
                <GraduationCap className="w-4 h-4" /> Get Expert Direction
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold">
                Need Clear Direction for Your{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  STR Business?
                </span>
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed">
                Let&apos;s review your setup and give you a clear plan to move forward.
                We don&apos;t just give advice — we give direction that works.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <button className="pulse-cta-act btn btn-primary btn-lg rounded-full px-10 gap-2 shadow-lg">
                  <Phone className="w-4 h-4" /> Book a Discovery Call
                </button>
                <button className="btn btn-outline btn-lg rounded-full px-8 gap-2">
                  <ArrowRight className="w-4 h-4" /> Explore Services
                </button>
              </div>
              <p className="text-xs text-base-content/40 pt-2">
                Airbnb Consultancy UK · STR Consulting Services · Airbnb Training UK · Serviced Accommodation Consultancy
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
