import React from 'react'
import {
  MapPin,
  Settings,
  Star,
  Phone,
  ArrowRight,
  CheckCircle2,
  XCircle,
  BarChart3,
  Target,
  TrendingUp,
  Building2,
  UserPlus,
  MessageSquare,
  ChevronRight,
  Layers,
  CalendarDays,
  ListChecks,
  Megaphone,
  AlertTriangle,
  ClipboardList,
  Rocket,
} from 'lucide-react'
import type { Page } from '@/payload-types'

export const EnterAirbnbMarketView: React.FC<{ page: Page }> = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content overflow-x-hidden">
      <style>{`
        @keyframes pulse-ring-eam {
          0%,100% { box-shadow: 0 0 0 0 hsl(var(--p)/.35); }
          50%      { box-shadow: 0 0 0 10px hsl(var(--p)/0); }
        }
        @keyframes eam-fade-up {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .eam-fade-1 { animation: eam-fade-up .55s ease both .10s; }
        .eam-fade-2 { animation: eam-fade-up .55s ease both .22s; }
        .eam-fade-3 { animation: eam-fade-up .55s ease both .34s; }
        .eam-fade-4 { animation: eam-fade-up .55s ease both .46s; }
        .eam-fade-5 { animation: eam-fade-up .55s ease both .58s; }
        .pulse-cta-eam { animation: pulse-ring-eam 2.4s ease-in-out infinite; }
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
              <div className="eam-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium">
                <Rocket className="w-4 h-4" />
                Enter Airbnb Market · ROI &amp; Performance · UK
              </div>
              <h1 className="eam-fade-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight">
                Enter the Airbnb Market With a{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Clear Strategy
                </span>
              </h1>
              <p className="eam-fade-3 text-lg text-base-content/70 leading-relaxed max-w-lg">
                Assistophere helps UK investors and hosts enter the short term rental market with
                the right setup, structure, and understanding from the start.
              </p>
              <div className="eam-fade-4 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm italic text-base-content/65">
                Entering the Airbnb market involves selecting the right property, setting up
                listings, and building systems to operate a short term rental business effectively.
              </div>
              <div className="eam-fade-5 flex flex-wrap gap-3 pt-1">
                <button className="pulse-cta-eam btn btn-primary btn-lg rounded-full px-8 gap-2">
                  <Phone className="w-4 h-4" /> Book a Discovery Call
                </button>
                <button className="btn btn-outline btn-lg rounded-full px-8 gap-2">
                  <ArrowRight className="w-4 h-4" /> See How It Works
                </button>
              </div>
              <div className="eam-fade-5 flex items-center gap-3 pt-2">
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
                    Trusted by UK hosts entering the STR market
                  </p>
                </div>
              </div>
            </div>

            {/* Hero visual — entry journey steps */}
            <div className="hidden lg:block">
              <div className="relative rounded-3xl border border-base-300 bg-base-200/60 backdrop-blur-sm p-7 shadow-xl">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-error/70" />
                  <div className="w-3 h-3 rounded-full bg-warning/70" />
                  <div className="w-3 h-3 rounded-full bg-success/70" />
                  <span className="ml-2 text-xs text-base-content/40 font-mono">entry.roadmap</span>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      n: '1',
                      label: 'Market Research',
                      sub: 'Location · Demand · Competition',
                      status: 'done',
                    },
                    {
                      n: '2',
                      label: 'Property Setup',
                      sub: 'Interior · Photography · Standards',
                      status: 'done',
                    },
                    {
                      n: '3',
                      label: 'Listing & Launch',
                      sub: 'Airbnb · VRBO · Booking.com',
                      status: 'done',
                    },
                    {
                      n: '4',
                      label: 'Systems & Pricing',
                      sub: 'Calendar · Dynamic Pricing · Comms',
                      status: 'active',
                    },
                    {
                      n: '5',
                      label: 'Operations & Growth',
                      sub: 'Team · SOPs · Scaling',
                      status: 'pending',
                    },
                  ].map(({ n, label, sub, status }) => (
                    <div
                      key={n}
                      className={`flex items-center gap-4 px-4 py-3 rounded-xl border ${status === 'done' ? 'bg-success/6 border-success/20' : status === 'active' ? 'bg-primary/8 border-primary/25' : 'bg-base-100 border-base-300 opacity-55'}`}
                    >
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${status === 'done' ? 'bg-success text-success-content' : status === 'active' ? 'bg-primary text-primary-content' : 'bg-base-300 text-base-content/40'}`}
                      >
                        {status === 'done' ? '✓' : n}
                      </div>
                      <div>
                        <p
                          className={`text-sm font-semibold ${status === 'active' ? 'text-primary' : ''}`}
                        >
                          {label}
                        </p>
                        <p className="text-xs text-base-content/45">{sub}</p>
                      </div>
                      {status === 'active' && (
                        <span className="ml-auto text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                          In Progress
                        </span>
                      )}
                    </div>
                  ))}
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
              <Layers className="w-4 h-4" /> What Most People Miss
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Starting an Airbnb Business Isn&apos;t Just Listing a Property
            </h2>
            <p className="text-base-content/65 text-lg leading-relaxed">
              Most people think the process is: get a property, list it online, start earning. The
              reality involves significantly more — and skipping any part of it leads to
              inconsistent results.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-left">
              <div className="bg-base-100 rounded-2xl border border-error/15 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-error/60 mb-3">
                  What people assume
                </p>
                {['Get a property', 'List it online', 'Start earning'].map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-2 py-1.5 text-sm text-base-content/60"
                  >
                    <XCircle className="w-4 h-4 text-error/50 shrink-0" /> {t}
                  </div>
                ))}
              </div>
              <div className="bg-base-100 rounded-2xl border border-primary/15 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-3">
                  What&apos;s actually needed
                </p>
                {['Proper setup', 'Structured systems', 'Clear strategy'].map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-2 py-1.5 text-sm text-base-content/70"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {t}
                  </div>
                ))}
              </div>
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
                <XCircle className="w-4 h-4" /> Why People Struggle
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Why Many New Hosts Struggle Early</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  point: 'Choosing the wrong property',
                  detail:
                    'Location, property type, and local demand all determine performance — a poor choice can mean months of underperformance.',
                },
                {
                  point: 'No pricing strategy',
                  detail:
                    'Flat pricing leaves revenue on the table during peak periods and keeps occupancy low in quieter months.',
                },
                {
                  point: 'Poor listing setup',
                  detail:
                    'Weak photography, incomplete descriptions, and low review counts all suppress booking visibility and conversion.',
                },
                {
                  point: 'No operational structure',
                  detail:
                    'Without systems for guest communication, cleaning, and maintenance, every stay becomes a manual exercise.',
                },
                {
                  point: 'Unrealistic expectations',
                  detail:
                    'Expecting strong returns from week one without proper setup, strategy, or time to build reviews leads to disappointment.',
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
              The market isn&apos;t the problem. The entry strategy is.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT ENTERING REQUIRES ───────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <CheckCircle2 className="w-4 h-4" /> What It Takes
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              What You Need to Get Started Properly
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              {
                icon: MapPin,
                title: 'Property Selection',
                desc: 'Choosing the right location, property type, and market segment based on demand data, not guesswork.',
              },
              {
                icon: Megaphone,
                title: 'Listing Setup',
                desc: 'Creating listings with optimised content, professional photography, and proper configuration for each platform.',
              },
              {
                icon: CalendarDays,
                title: 'Pricing & Calendar',
                desc: 'Setting up availability windows, minimum stays, and pricing rules that respond to market demand.',
              },
              {
                icon: Settings,
                title: 'Operational Systems',
                desc: 'Building workflows for guest communication, cleaning coordination, and property maintenance from day one.',
              },
              {
                icon: TrendingUp,
                title: 'Growth Planning',
                desc: 'Understanding how your first property sets the foundation for adding more — and what needs to be in place before you scale.',
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

      {/* ── WHAT WE HELP WITH ────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Settings className="w-4 h-4" /> Our Scope
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">How We Help You Enter the Market</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1.5fr] gap-px bg-base-300 rounded-3xl overflow-hidden border border-base-300">
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              Area
            </div>
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              What We Cover
            </div>
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              Outcome
            </div>
            {[
              {
                area: 'Market Understanding',
                icon: BarChart3,
                tasks: [
                  'Identifying viable opportunities in your area',
                  'Understanding seasonal and local demand patterns',
                  'Evaluating locations against your goals and budget',
                ],
                outcome: 'You enter the market with accurate data, not assumptions.',
              },
              {
                area: 'Business Setup',
                icon: ClipboardList,
                tasks: [
                  'Creating a structured operational setup',
                  'Building workflows before the first booking arrives',
                  'Preparing your operation to handle guests properly from day one',
                ],
                outcome: 'Your business is ready to operate before it launches.',
              },
              {
                area: 'Listing & Launch',
                icon: Megaphone,
                tasks: [
                  'Setting up optimised listings across relevant platforms',
                  'Ensuring photography, content, and configuration are launch-ready',
                  'Preparing the listing to attract and convert bookings',
                ],
                outcome: 'You launch with a listing that is competitive, not just live.',
              },
              {
                area: 'System Setup',
                icon: Settings,
                tasks: [
                  'Building a communication flow for guest interactions',
                  'Configuring pricing and calendar management',
                  'Setting up operational processes for cleaning and maintenance',
                ],
                outcome:
                  'Systems are in place so operations do not rely on the host for every decision.',
              },
              {
                area: 'Ongoing Support',
                icon: TrendingUp,
                tasks: [
                  'Guidance in the weeks after launch',
                  'Reviewing and improving performance as data arrives',
                  'Supporting decisions as the business grows',
                ],
                outcome: 'You are not left to figure it out alone after the first booking.',
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
            The result: a structured entry into the STR market with reduced risk.
          </p>
        </div>
      </section>

      {/* ── EXPECTATION SETTING ──────────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
                <ListChecks className="w-4 h-4" /> Setting Expectations
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">What to Expect When Starting</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  point: 'Initial setup takes planning',
                  detail:
                    'Getting a property ready for Airbnb properly — photography, listing, pricing, systems — takes weeks, not hours. Rushing this stage costs you later.',
                },
                {
                  point: 'Results improve over time',
                  detail:
                    'The first 60–90 days are about building reviews and visibility. Performance typically accelerates meaningfully once that foundation is established.',
                },
                {
                  point: 'Performance depends on management',
                  detail:
                    'How well the property is managed — guest communication, pricing, reviews, cleanliness — has a direct impact on occupancy and revenue.',
                },
                {
                  point: 'Systems matter from the start',
                  detail:
                    'Building systems after launch is significantly harder than building them before. The structure you put in place early determines how scalable the business becomes.',
                },
              ].map(({ point, detail }) => (
                <div
                  key={point}
                  className="flex gap-4 p-5 rounded-2xl border border-primary/15 bg-primary/4"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">{point}</p>
                    <p className="text-xs text-base-content/55 mt-0.5 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-base-content/55 mt-8 italic text-sm">
              STR success comes from structure, not shortcuts.
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
              <h2 className="text-3xl lg:text-4xl font-bold">Where New Hosts Go Wrong</h2>
            </div>
            <div className="space-y-3">
              {[
                {
                  mistake: 'Rushing into property decisions',
                  why: 'Committing to a property without validating local demand or running the numbers first leads to underperforming assets.',
                },
                {
                  mistake: 'Copying others blindly',
                  why: 'Basing your strategy on what someone else did in a different market or property type rarely translates. Context matters.',
                },
                {
                  mistake: 'Ignoring systems',
                  why: 'Trying to manage everything manually works at one property, falls apart at two, and becomes impossible at three.',
                },
                {
                  mistake: 'Underestimating operations',
                  why: 'Guest communication, cleaning coordination, maintenance, and restocking are significant time commitments without the right systems.',
                },
                {
                  mistake: 'Expecting quick results',
                  why: 'Properties typically take 60–90 days to build review volume and algorithmic visibility. Starting without that expectation leads to premature decisions.',
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
              Most mistakes happen before the first booking.
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
              <h2 className="text-3xl lg:text-4xl font-bold">How We Help You Start Properly</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  step: '1. Guide your setup step by step',
                  detail:
                    'We walk through every stage of the entry process — property readiness, listing setup, pricing configuration, and system building.',
                },
                {
                  step: '2. Build structure from day one',
                  detail:
                    'We put workflows, communication flows, and operational processes in place before you receive your first booking.',
                },
                {
                  step: '3. Align everything with your goals',
                  detail:
                    'Whether your goal is income, portfolio growth, or an eventual exit, the strategy we build is designed around your specific situation.',
                },
                {
                  step: '4. Prepare your business for scale',
                  detail:
                    'Everything we set up is designed to hold as your portfolio grows — not just to handle the first property.',
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
              Unstructured Entry vs Strategic Entry
            </h2>
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
                Strategic
              </div>
            </div>
            {[
              ['Approach', 'Trial and error', 'Planned approach'],
              ['Performance', 'Inconsistent results', 'Stable performance'],
              ['Risk', 'High risk', 'Controlled risk'],
              ['Growth', 'Slow growth', 'Scalable growth'],
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
              ['Approach', 'Trial and error', 'Planned approach'],
              ['Performance', 'Inconsistent results', 'Stable performance'],
              ['Risk', 'High risk', 'Controlled risk'],
              ['Growth', 'Slow growth', 'Scalable growth'],
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
                icon: UserPlus,
                who: 'New STR investors',
                desc: 'Evaluating the market and wanting to enter with a proper plan rather than figuring it out as they go.',
              },
              {
                icon: Building2,
                who: 'First-time hosts',
                desc: 'Property owners listing for the first time who want to do it properly from day one.',
              },
              {
                icon: MapPin,
                who: 'Property owners',
                desc: 'Owners considering converting a property into an STR and needing guidance on setup and viability.',
              },
              {
                icon: Rocket,
                who: 'Operators entering STR',
                desc: 'Businesses or individuals moving into short term rental from another property model.',
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
                initials: 'NP',
                name: 'Natasha P.',
                role: 'First-time Host · Leeds',
                quote:
                  'I had no idea where to start. Assistophere walked me through every step — property setup, listing, pricing, systems. I launched with confidence rather than guessing.',
              },
              {
                initials: 'JO',
                name: 'James O.',
                role: 'STR Investor · Birmingham',
                quote:
                  'I nearly rushed into the wrong property. The market analysis session helped me understand what would actually perform. My first booking came in the first week.',
              },
              {
                initials: 'AC',
                name: 'Amy C.',
                role: 'Property Owner · Bristol',
                quote:
                  'I had a spare flat and wanted to list it on Airbnb. I thought it would be simple. Assistophere set up everything properly and my results have been far better than I expected.',
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
                  q: 'How much do I need to start?',
                  a: 'The capital required depends on whether you own the property or are taking on a rental-arbitrage arrangement, and the standard of setup you need. We help you model the costs clearly before committing, so you go in with eyes open rather than facing surprises.',
                },
                {
                  q: 'Is Airbnb still profitable in the UK?',
                  a: 'Yes — but profitability depends heavily on location, pricing strategy, and how well the operation is managed. Markets vary significantly across the UK. We help you identify whether a specific location and property type stacks up before you invest.',
                },
                {
                  q: 'How long before I see results?',
                  a: 'Most properties take 60–90 days to build review volume and platform visibility. During that period, performance improves progressively rather than arriving immediately. Having the right pricing and listing setup from day one accelerates this significantly.',
                },
                {
                  q: 'Can you guide me step by step?',
                  a: 'Yes — that is exactly what we do. We work through every stage of the entry process with you: market analysis, property readiness, listing setup, pricing, and systems. Nothing is left for you to figure out alone.',
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
                <Rocket className="w-4 h-4" /> Enter Properly
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold">
                Ready to Enter the Airbnb Market{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Properly?
                </span>
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed">
                Let&apos;s build a clear strategy and set your business up the right way. We
                don&apos;t just help you start — we help you enter the market properly.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <button className="pulse-cta-eam btn btn-primary btn-lg rounded-full px-10 gap-2 shadow-lg">
                  <Phone className="w-4 h-4" /> Book a Discovery Call
                </button>
                <button className="btn btn-outline btn-lg rounded-full px-8 gap-2">
                  <ArrowRight className="w-4 h-4" /> See How It Works
                </button>
              </div>
              <p className="text-xs text-base-content/40 pt-2">
                Enter Airbnb Market UK · How to Start Airbnb UK · STR Business UK · Short Term
                Rental Investment UK
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
