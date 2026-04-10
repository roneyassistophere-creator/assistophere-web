import React from 'react'
import {
  TrendingUp, Search, Users, ClipboardList, RefreshCw, Phone,
  CheckCircle2, XCircle, Star, ChevronRight, ArrowRight,
  Target, BarChart3, Zap, Building2, MessageSquare,
} from 'lucide-react'
import { FaqItem } from './FaqItem'
import type { Page } from '@/payload-types'

export const LeadGenerationView: React.FC<{ page: Page }> = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content overflow-x-hidden">
      <style>{`
        @keyframes pulse-ring-lg {
          0%,100% { box-shadow: 0 0 0 0 hsl(var(--p)/.35); }
          50%      { box-shadow: 0 0 0 10px hsl(var(--p)/0); }
        }
        @keyframes lg-fade-up {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .lg-fade-1 { animation: lg-fade-up .55s ease both .10s; }
        .lg-fade-2 { animation: lg-fade-up .55s ease both .22s; }
        .lg-fade-3 { animation: lg-fade-up .55s ease both .34s; }
        .lg-fade-4 { animation: lg-fade-up .55s ease both .46s; }
        .lg-fade-5 { animation: lg-fade-up .55s ease both .58s; }
        .pulse-cta-lg { animation: pulse-ring-lg 2.4s ease-in-out infinite; }
      `}</style>

      {/* HERO */}
      <section className="relative overflow-hidden pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-linear-to-br from-primary/13 via-primary/4 to-transparent rounded-full blur-[140px]" />
          <div className="absolute top-1/2 -right-40 w-[420px] h-[420px] bg-linear-to-bl from-secondary/10 via-secondary/3 to-transparent rounded-full blur-[120px]" />
        </div>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="lg-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium">
                <TrendingUp className="w-4 h-4" />
                Lead Generation · UK STR Growth
              </div>
              <h1 className="lg-fade-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight">
                Lead Generation for{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Short Term Rental Growth
                </span>
              </h1>
              <p className="lg-fade-3 text-lg text-base-content/70 leading-relaxed max-w-lg">
                Assistophere helps UK hosts generate consistent opportunities by sourcing landlords,
                identifying deals, and building a structured pipeline for growth.
              </p>
              <div className="lg-fade-4 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm italic text-base-content/65">
                Lead generation for short term rentals involves finding property opportunities,
                connecting with landlords, and building a consistent pipeline for business growth.
              </div>
              <div className="lg-fade-5 flex flex-wrap gap-3 pt-1">
                <button className="pulse-cta-lg btn btn-primary btn-lg rounded-full px-8 gap-2">
                  <Phone className="w-4 h-4" /> Book a Discovery Call
                </button>
                <button className="btn btn-outline btn-lg rounded-full px-8 gap-2">
                  See How It Works <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="lg-fade-5 flex items-center gap-3 pt-2">
                <div className="flex -space-x-2">
                  {['bg-primary','bg-secondary','bg-accent','bg-neutral'].map((c,i) => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-base-100 ${c} flex items-center justify-center text-xs font-bold text-white`}>
                      {String.fromCharCode(65+i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">{[...Array(5)].map((_,i)=><Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400"/>)}</div>
                  <p className="text-xs text-base-content/55 mt-0.5">Trusted by UK STR operators</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-3xl border border-base-300 bg-base-200/60 backdrop-blur-sm p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-error/70" />
                  <div className="w-3 h-3 rounded-full bg-warning/70" />
                  <div className="w-3 h-3 rounded-full bg-success/70" />
                  <span className="ml-2 text-xs text-base-content/40 font-mono">deal-pipeline.board</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { col: 'Sourced', color: 'border-primary/30 bg-primary/5', items: ['Property A – Leeds','Property B – Manchester','Property C – Bristol'] },
                    { col: 'Contacted', color: 'border-warning/30 bg-warning/5', items: ['Landlord D','Landlord E','Landlord F'] },
                    { col: 'Converting', color: 'border-success/30 bg-success/5', items: ['Deal G – Agreed','Deal H – Review','Deal I – Signed'] },
                  ].map(({ col, color, items }) => (
                    <div key={col} className={`rounded-xl border p-3 ${color}`}>
                      <p className="text-xs font-semibold text-base-content/50 mb-2 uppercase tracking-wider">{col}</p>
                      <div className="space-y-1.5">
                        {items.map(item => (
                          <div key={item} className="text-xs bg-base-100 rounded-lg px-2 py-1.5 border border-base-300 text-base-content/70 truncate">{item}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between px-1">
                  <span className="text-xs text-base-content/40">9 active leads</span>
                  <span className="text-xs text-success font-semibold">↑ 3 new this week</span>
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
              <BarChart3 className="w-4 h-4" /> The Growth Reality
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Growth Depends on Consistent Opportunities</h2>
            <p className="text-base-content/65 text-lg leading-relaxed">
              Scaling a short term rental business is not just about managing properties well.
              It depends on a steady flow of new opportunities — and most hosts lack the system to create it.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                { icon: Search, label: 'Finding new deals', desc: 'Identifying the right properties and markets' },
                { icon: Users, label: 'Landlord relationships', desc: 'Building trust with property owners' },
                { icon: ClipboardList, label: 'Steady pipeline', desc: 'Maintaining consistent deal flow' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="bg-base-100 rounded-2xl border border-base-300 p-5 text-left">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-sm">{label}</p>
                  <p className="text-xs text-base-content/55 mt-1">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-base-content/60 text-sm pt-2">Without this, growth slows down.</p>
          </div>
        </div>
      </section>

      {/* REAL PROBLEM */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-4">
                <XCircle className="w-4 h-4" /> Common Problem
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Why Most Hosts Struggle to Find New Properties</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { point: 'No structured outreach', detail: 'Outreach happens randomly, not systematically.' },
                { point: 'Inconsistent sourcing', detail: 'Efforts are sporadic rather than ongoing.' },
                { point: 'Relying on luck or referrals', detail: 'Waiting for deals to arrive rather than generating them.' },
                { point: 'Lack of time', detail: 'Operations consume all available bandwidth.' },
                { point: 'No follow-up system', detail: 'Warm leads go cold because nothing is tracked.' },
              ].map(({ point, detail }) => (
                <div key={point} className="flex gap-4 p-5 rounded-2xl border border-error/15 bg-error/4">
                  <XCircle className="w-5 h-5 text-error shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">{point}</p>
                    <p className="text-xs text-base-content/55 mt-0.5">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-base-content/60 mt-8 italic text-sm">
              Opportunities exist — but they are not being captured consistently.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT GOOD LOOKS LIKE */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <CheckCircle2 className="w-4 h-4" /> The Right System
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">What a Proper Lead Generation System Should Do</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Search, title: 'Identify Opportunities', desc: 'Finding suitable properties and landlords in target locations.' },
              { icon: MessageSquare, title: 'Reach Out Consistently', desc: 'Maintaining regular contact with potential leads without gaps.' },
              { icon: ClipboardList, title: 'Track and Manage Leads', desc: 'Keeping everything organised, followed up, and visible.' },
              { icon: CheckCircle2, title: 'Convert Leads into Deals', desc: 'Turning interest and engagement into actual properties.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="bg-base-100 rounded-2xl border border-base-300 p-6 relative">
                <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-primary text-primary-content text-xs font-bold flex items-center justify-center shadow">
                  {i + 1}
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-base mb-2">{title}</h3>
                <p className="text-sm text-base-content/60 leading-relaxed">{desc}</p>
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
              <Zap className="w-4 h-4" /> Our Scope
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">What Our Lead Generation Covers</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1.5fr] gap-px bg-base-300 rounded-3xl overflow-hidden border border-base-300">
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">Area</div>
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">What We Do</div>
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">Outcome</div>
            {[
              { area: 'Property Sourcing', icon: Building2, tasks: ['Identifying suitable properties','Targeting key locations','Analysing opportunities'], outcome: 'A curated list of high-potential properties to pursue.' },
              { area: 'Landlord Outreach', icon: Users, tasks: ['Contacting landlords directly','Introducing your service','Building initial relationships'], outcome: 'Warm landlord contacts ready for deeper conversation.' },
              { area: 'Lead Tracking', icon: ClipboardList, tasks: ['Organising all leads','Managing communication records','Tracking progress per lead'], outcome: 'Full visibility over every opportunity at every stage.' },
              { area: 'Follow-Up System', icon: RefreshCw, tasks: ['Consistent follow-up cadence','Maintaining engagement','Increasing conversion chances'], outcome: 'Fewer cold leads, higher conversion rate over time.' },
              { area: 'Pipeline Management', icon: BarChart3, tasks: ['Building a steady flow','Maintaining deal visibility','Reporting on progress'], outcome: 'A structured, predictable pipeline of new opportunities.' },
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
            The result: a consistent, structured flow of new opportunities.
          </p>
        </div>
      </section>

      {/* HOW IT CONNECTS */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-2">
              <Target className="w-4 h-4" /> Business Impact
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Lead Generation Drives Growth</h2>
            <p className="text-base-content/65 text-lg leading-relaxed">
              Lead generation connects directly to your operations, your revenue, and your expansion plans.
              Without a consistent pipeline, scaling becomes difficult regardless of how well everything else runs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
              {[
                { icon: Zap, label: 'Operations', desc: 'More properties mean more capacity to fill and optimise.' },
                { icon: BarChart3, label: 'Revenue', desc: 'A growing portfolio directly increases earning potential.' },
                { icon: TrendingUp, label: 'Expansion', desc: 'Consistent deal flow makes scaling a repeatable process.' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="bg-base-100 rounded-2xl border border-base-300 p-5">
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

      {/* COMMON MISTAKES */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-warning/15 border border-warning/30 text-warning text-sm font-medium mb-4">
                <XCircle className="w-4 h-4" /> Common Mistakes
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Where Lead Generation Goes Wrong</h2>
            </div>
            <div className="space-y-3">
              {[
                { mistake: 'Inconsistent outreach', why: 'Gaps in outreach mean leads go cold and opportunities are missed.' },
                { mistake: 'No tracking system', why: 'Without visibility, leads are forgotten and progress is lost.' },
                { mistake: 'No follow-up', why: 'Most deals require multiple touchpoints — one attempt is not enough.' },
                { mistake: 'Targeting the wrong properties', why: 'Poor qualification wastes time on unsuitable landlords or locations.' },
                { mistake: 'Lack of structure', why: 'Ad-hoc efforts produce ad-hoc results. Systems produce consistency.' },
              ].map(({ mistake, why }) => (
                <div key={mistake} className="flex gap-4 p-5 rounded-2xl border border-warning/20 bg-warning/4">
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
              Lead generation fails when it is not treated as a system.
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
              <h2 className="text-3xl lg:text-4xl font-bold">How We Generate Leads Properly</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { point: 'Structured outreach', detail: 'Every campaign follows a defined process, not guesswork.' },
                { point: 'Maintained consistency', detail: 'Outreach continues on schedule regardless of operational noise.' },
                { point: 'Every lead tracked', detail: 'Nothing falls through the cracks — all leads are recorded and visible.' },
                { point: 'Focused on conversion', detail: 'We do not just generate leads; we move them toward deals.' },
              ].map(({ point, detail }) => (
                <div key={point} className="flex gap-4 p-5 rounded-2xl border border-primary/15 bg-primary/4">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">{point}</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold">Unstructured Sourcing vs Structured Lead Generation</h2>
          </div>
          <div className="hidden md:block overflow-hidden rounded-3xl border border-base-300 max-w-3xl mx-auto">
            <div className="grid grid-cols-3">
              <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/50">Area</div>
              <div className="bg-error/8 px-5 py-3 text-xs font-bold uppercase tracking-widest text-error/70 text-center">Unstructured</div>
              <div className="bg-success/8 px-5 py-3 text-xs font-bold uppercase tracking-widest text-success/70 text-center">Structured</div>
            </div>
            {[
              ['Consistency','Inconsistent','Consistent'],
              ['Opportunities','Random','Predictable pipeline'],
              ['Follow-ups','Missed','Managed process'],
              ['Growth','Slow','Scalable'],
            ].map(([area, bad, good]) => (
              <div key={area} className="grid grid-cols-3 border-t border-base-300">
                <div className="bg-base-100 px-5 py-4 text-sm font-medium">{area}</div>
                <div className="bg-error/4 px-5 py-4 text-sm text-error/80 text-center">{bad}</div>
                <div className="bg-success/4 px-5 py-4 text-sm text-success/80 text-center font-medium">{good}</div>
              </div>
            ))}
          </div>
          <div className="md:hidden space-y-3 max-w-sm mx-auto">
            {[
              ['Consistency','Inconsistent','Consistent'],
              ['Opportunities','Random','Predictable pipeline'],
              ['Follow-ups','Missed','Managed process'],
              ['Growth','Slow','Scalable'],
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
              { icon: TrendingUp, who: 'Hosts looking to expand', desc: 'Ready to grow but lacking a system to find new properties.' },
              { icon: Building2, who: 'SA businesses', desc: 'Serviced accommodation operators who need a pipeline.' },
              { icon: BarChart3, who: 'Portfolio operators', desc: 'Scaling portfolios that need consistent deal flow.' },
              { icon: Target, who: 'Growth-focused hosts', desc: 'Hosts who want consistent, repeatable opportunities.' },
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
              { initials: 'SK', name: 'Sarah K.', role: 'STR Host · Manchester', quote: 'Within two months we had a pipeline of leads we never would have found ourselves. The structure made all the difference.' },
              { initials: 'JM', name: 'James M.', role: 'SA Operator · Leeds', quote: 'Before Assistophere, sourcing was completely ad hoc. Now we have a proper system and actual deals coming through.' },
              { initials: 'PR', name: 'Priya R.', role: 'Portfolio Host · Bristol', quote: 'The follow-up process alone was worth it. Leads that would have gone cold are now converting.' },
            ].map(({ initials, name, role, quote }) => (
              <div key={name} className="bg-base-200 rounded-2xl border border-base-300 p-6 space-y-4">
                <div className="flex gap-0.5">{[...Array(5)].map((_,i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}</div>
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
              <FaqItem q="What types of properties do you source?" a="We focus on properties suitable for short term rental and serviced accommodation in the UK. This includes residential properties in high-demand locations where STR or SA models can generate strong returns." />
              <FaqItem q="How do you find leads?" a="We use a combination of targeted outreach, digital research, and structured prospecting to identify landlords and property owners open to STR or SA arrangements. Every lead is qualified before it enters your pipeline." />
              <FaqItem q="Do you handle landlord outreach directly?" a="Yes. We manage the initial contact, introductions, and early relationship-building so you can focus on converting and managing properties rather than cold outreach." />
              <FaqItem q="Can this help scale my business?" a="Lead generation is specifically designed to support growth. By creating a consistent pipeline of new opportunities, it removes one of the biggest blockers to scaling — the lack of deals coming through reliably." />
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
                <TrendingUp className="w-4 h-4" /> Start Building Your Pipeline
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold">
                Ready to Build a Consistent Pipeline{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  of Opportunities?
                </span>
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed">
                Let's create a lead generation system that supports your growth.
                We don't just find opportunities — we build a system that brings them consistently.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <button className="pulse-cta-lg btn btn-primary btn-lg rounded-full px-10 gap-2 shadow-lg">
                  <Phone className="w-4 h-4" /> Book a Discovery Call
                </button>
                <button className="btn btn-outline btn-lg rounded-full px-8 gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-base-content/40 pt-2">
                Airbnb Lead Generation UK · STR Lead Generation · Landlord Sourcing
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
