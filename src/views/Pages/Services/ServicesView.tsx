import React from 'react'
import type { Page } from '@/payload-types'
import { Button } from '@/components/ui/button'
import {
  MessageSquare,
  Wrench,
  TrendingUp,
  Globe,
  Settings,
  ArrowRight,
  Clock,
  Layout,
  ShieldCheck,
  CheckCircle2,
  Check,
  Users,
  Home,
  Briefcase,
  Sparkles,
  ClipboardList,
  Star,
  Zap,
  BarChart2,
  CalendarCheck,
  XCircle,
  PhoneCall,
  FileText,
  Target,
} from 'lucide-react'
import Link from 'next/link'

export const ServicesView: React.FC<{ page: Page }> = () => {
  return (
    <article className="flex flex-col w-full overflow-x-hidden font-sans text-base-content selection:bg-primary/20">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both; }
        .fade-up-1 { animation: fadeUp 0.7s 0.1s cubic-bezier(0.16,1,0.3,1) both; }
        .fade-up-2 { animation: fadeUp 0.7s 0.2s cubic-bezier(0.16,1,0.3,1) both; }
        .fade-up-3 { animation: fadeUp 0.7s 0.3s cubic-bezier(0.16,1,0.3,1) both; }
        .fade-up-4 { animation: fadeUp 0.7s 0.4s cubic-bezier(0.16,1,0.3,1) both; }
        .fade-up-5 { animation: fadeUp 0.7s 0.5s cubic-bezier(0.16,1,0.3,1) both; }
        .float-anim { animation: floatSlow 5s ease-in-out infinite; }
      `,
        }}
      />

      {/* SECTION 1: HERO */}
      <section className="relative pt-10 pb-14 lg:pt-14 lg:pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-[60%] h-[70%] bg-gradient-to-br from-primary/15 via-primary/5 to-transparent rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[60%] bg-gradient-to-tl from-secondary/15 via-secondary/5 to-transparent rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-4 max-w-6xl">
          <div className="fade-up mx-auto lg:mx-0 w-fit px-3 py-1.5 mb-5 rounded-full border border-primary/30 bg-primary/10 flex items-center gap-2 text-xs font-semibold text-primary">
            <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Full-service STR operations support for UK hosts
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="text-center lg:text-left">
              <h1 className="fade-up-1 text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 leading-[1.08] text-base-content">
                Every Service Your <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary">
                  STR Business Needs
                </span>
              </h1>

              <p className="fade-up-2 text-base text-base-content/80 mb-7 leading-relaxed max-w-lg mx-auto lg:mx-0">
                From guest communication to listing optimisation, cleaning coordination to direct
                booking systems — we handle the operational side so you can focus on{' '}
                <strong className="text-base-content font-semibold">growing your portfolio.</strong>
              </p>

              <div className="fade-up-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-7">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full h-12 px-7 text-sm rounded-full bg-primary hover:bg-primary/90 text-primary-content shadow-xl shadow-primary/25 transition-all hover:scale-105 hover:shadow-primary/40 active:scale-95 group"
                  >
                    Book a Discovery Call
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="#services-detail" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full h-12 px-7 text-sm rounded-full border-2 border-base-300 hover:border-primary/50 hover:bg-primary/5 transition-all text-base-content"
                  >
                    Explore Services
                  </Button>
                </Link>
              </div>

              <div className="fade-up-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-base-content/75">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-500" /> UK-based operations team
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-500" /> 7-day support coverage
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-500" /> No commission model
                </span>
              </div>
            </div>

            {/* Services visual card */}
            <div className="fade-up-5 float-anim relative">
              <div className="rounded-[2.5rem] overflow-hidden border border-base-300 shadow-2xl shadow-primary/10 bg-base-200/90 backdrop-blur-2xl p-1">
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
                <div className="flex items-center gap-2 px-5 pt-4 pb-3 border-b border-base-300">
                  <span className="w-3 h-3 rounded-full bg-error/70" />
                  <span className="w-3 h-3 rounded-full bg-warning/70" />
                  <span className="w-3 h-3 rounded-full bg-success/70" />
                  <span className="ml-3 text-xs font-mono text-base-content/55 tracking-wide">
                    services overview
                  </span>
                </div>
                <div className="p-5 space-y-3">
                  {[
                    {
                      label: 'Guest Communication',
                      status: 'Active · 7 days',
                      color: 'text-blue-500',
                      bg: 'bg-blue-500/10',
                      icon: MessageSquare,
                    },
                    {
                      label: 'Cleaning Coordination',
                      status: 'Synced · All props',
                      color: 'text-amber-500',
                      bg: 'bg-amber-500/10',
                      icon: Sparkles,
                    },
                    {
                      label: 'Listing Optimisation',
                      status: 'Ongoing · Live',
                      color: 'text-emerald-500',
                      bg: 'bg-emerald-500/10',
                      icon: TrendingUp,
                    },
                    {
                      label: 'Pricing Strategy',
                      status: 'Monitored daily',
                      color: 'text-purple-500',
                      bg: 'bg-purple-500/10',
                      icon: BarChart2,
                    },
                    {
                      label: 'Direct Bookings',
                      status: 'Setup complete',
                      color: 'text-primary',
                      bg: 'bg-primary/10',
                      icon: Globe,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl bg-base-200 border border-base-300"
                    >
                      <div
                        className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center shrink-0`}
                      >
                        <item.icon className={`w-4 h-4 ${item.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-base-content truncate">{item.label}</p>
                        <p className="text-[11px] text-base-content/60">{item.status}</p>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-base-200 border border-base-300 shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <CalendarCheck className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-base-content">All operations live</p>
                  <p className="text-xs text-base-content/65">Updated just now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: STATS */}
      <section className="py-16 border-y border-base-300/50 bg-gradient-to-r from-base-200/70 via-base-200/40 to-base-200/70">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: '8', label: 'Core Services', color: 'text-primary' },
              {
                val: '7-Day',
                label: 'Operational Coverage',
                color: 'text-blue-600 dark:text-blue-400',
              },
              {
                val: '100%',
                label: 'Guest Response Rate',
                color: 'text-emerald-600 dark:text-emerald-400',
              },
              { val: '£0', label: 'Commission Model', color: 'text-secondary' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className={`text-4xl md:text-5xl font-black tracking-tight ${s.color}`}>
                  {s.val}
                </span>
                <span className="text-sm font-medium text-base-content/70">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: INTRO */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-base-content">
            A Complete Operational Package for STR Hosts
          </h2>
          <p className="text-xl leading-relaxed text-base-content/80 max-w-3xl mx-auto">
            Our services are built around the real challenges of running a short term rental
            business — whether you have 2 properties or 20. We work as your backend operations team,
            not just a task-completion service.
          </p>
        </div>
      </section>

      {/* SECTION 4: SERVICES DETAIL */}
      <section id="services-detail" className="py-20 px-4 bg-base-200 border-y border-base-300">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Our Services
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content">
              What We Handle
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: MessageSquare,
                color: 'text-blue-500',
                bg: 'bg-blue-500/10',
                border: 'border-blue-500/20',
                title: 'Guest Communication',
                tagline: 'Pre-stay, during stay & post-stay messaging',
                desc: 'We handle your full guest communication cycle — from first enquiry to post-stay review requests. Every message is handled promptly and professionally, 7 days a week.',
                points: [
                  'Enquiry and pre-booking responses',
                  'Check-in instructions and welcome messages',
                  'During-stay support and issue resolution',
                  'Post-stay review follow-ups',
                ],
              },
              {
                icon: Sparkles,
                color: 'text-amber-500',
                bg: 'bg-amber-500/10',
                border: 'border-amber-500/20',
                title: 'Cleaning & Turnover Coordination',
                tagline: 'Scheduling, quality checks & follow-ups',
                desc: 'We coordinate your cleaning team, manage schedules around check-ins and check-outs, and ensure standards are maintained consistently across your properties.',
                points: [
                  'Cleaner scheduling and briefing',
                  'Turnover coordination per booking',
                  'Standards monitoring and feedback',
                  'Emergency cover coordination',
                ],
              },
              {
                icon: Wrench,
                color: 'text-orange-500',
                bg: 'bg-orange-500/10',
                border: 'border-orange-500/20',
                title: 'Maintenance Management',
                tagline: 'Fault reporting, follow-ups & resolution',
                desc: 'We log, track and follow up on maintenance issues so nothing slips through the cracks. From minor fixes to urgent repairs, we keep you and your trades updated.',
                points: [
                  'Guest-reported issue logging',
                  'Trades and contractor coordination',
                  'Proactive property checks',
                  'Resolution tracking and updates',
                ],
              },
              {
                icon: Layout,
                color: 'text-emerald-500',
                bg: 'bg-emerald-500/10',
                border: 'border-emerald-500/20',
                title: 'Listing Optimisation',
                tagline: 'SEO, conversion copy & visual improvements',
                desc: 'We improve your listings across Airbnb, Booking.com and VRBO with better descriptions, keyword-rich titles, structured amenity highlights, and photo guidance.',
                points: [
                  'Platform-specific listing rewrites',
                  'Title and description SEO',
                  'Amenity and highlight structuring',
                  'Photo ordering and cover image guidance',
                ],
              },
              {
                icon: TrendingUp,
                color: 'text-purple-500',
                bg: 'bg-purple-500/10',
                border: 'border-purple-500/20',
                title: 'Pricing & Revenue Support',
                tagline: 'Calendar strategy & occupancy improvement',
                desc: 'We monitor your calendar performance, advise on pricing strategy, identify gaps, and help you make data-informed decisions to improve occupancy and revenue.',
                points: [
                  'Seasonal pricing guidance',
                  'Minimum stay strategy',
                  'Gap night analysis',
                  'Calendar and rate monitoring',
                ],
              },
              {
                icon: Globe,
                color: 'text-indigo-500',
                bg: 'bg-indigo-500/10',
                border: 'border-indigo-500/20',
                title: 'Direct Booking Setup',
                tagline: 'Reduce platform dependency & commission costs',
                desc: 'We help you set up and structure a direct booking presence — whether that is a simple booking page, a website, or a direct outreach strategy — to reduce OTA commission costs.',
                points: [
                  'Direct booking channel setup',
                  'Booking page structure and copy',
                  'Guest database building',
                  'Repeat guest outreach support',
                ],
              },
              {
                icon: ClipboardList,
                color: 'text-teal-500',
                bg: 'bg-teal-500/10',
                border: 'border-teal-500/20',
                title: 'SOPs & Systems',
                tagline: 'Documented processes that scale',
                desc: 'We build the operational backbone of your STR business — clear standard operating procedures, onboarding documents, and workflows that allow you to scale without chaos.',
                points: [
                  'Guest communication SOPs',
                  'Cleaning and turnover checklists',
                  'Maintenance reporting workflows',
                  'Team onboarding documentation',
                ],
              },
              {
                icon: Users,
                color: 'text-pink-500',
                bg: 'bg-pink-500/10',
                border: 'border-pink-500/20',
                title: 'Admin & Team Coordination',
                tagline: 'Keep your team aligned and organised',
                desc: 'We support multi-property hosts and operators with admin coordination — keeping cleaners, maintenance teams, and property managers working together efficiently.',
                points: [
                  'Team communications hub',
                  'Task assignment and tracking',
                  'Schedule management',
                  'Operational reporting support',
                ],
              },
            ].map((s, i) => (
              <div
                key={i}
                className={`flex flex-col gap-5 p-8 rounded-[2rem] bg-base-200 border ${s.border} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`w-14 h-14 rounded-2xl ${s.bg} flex items-center justify-center shrink-0`}
                  >
                    <s.icon className={`w-7 h-7 ${s.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-base-content mb-1">{s.title}</h3>
                    <p className="text-sm text-base-content/65 italic">{s.tagline}</p>
                  </div>
                </div>
                <p className="text-base-content/80 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2 pt-2 border-t border-base-300">
                  {s.points.map((pt, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2.5 text-sm font-medium text-base-content/80"
                    >
                      <CheckCircle2 className={`w-4 h-4 ${s.color} shrink-0`} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: TRANSITION */}
      <section className="py-16 bg-gradient-to-r from-primary via-primary to-secondary text-primary-content flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="relative z-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-85 mb-3">
            Built Around You
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            These services aren&apos;t one-size-fits-all.
          </h2>
          <p className="text-lg mt-4 opacity-90 max-w-xl mx-auto">
            We tailor what we focus on to your current situation, portfolio size, and business
            goals.
          </p>
        </div>
      </section>

      {/* SECTION 6: HOW SERVICES WORK TOGETHER */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              The Whole Picture
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-base-content mb-5">
              How It All Works Together
            </h2>
            <p className="text-xl text-base-content/75 max-w-2xl mx-auto">
              Each service we offer connects into a wider operational system — nothing we do exists
              in isolation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                color: 'text-primary',
                bg: 'bg-primary/10',
                border: 'border-primary/20',
                title: 'Day-to-Day Operations',
                desc: 'Guest communication, cleaning coordination, and maintenance management form your daily operational layer — handled by us so your time is freed up.',
                services: [
                  'Guest Communication',
                  'Cleaning Coordination',
                  'Maintenance Management',
                ],
              },
              {
                icon: TrendingUp,
                color: 'text-secondary',
                bg: 'bg-secondary/10',
                border: 'border-secondary/20',
                title: 'Revenue Performance',
                desc: 'Listing optimisation and pricing support work together to improve visibility, conversions, and overall revenue across your portfolio.',
                services: [
                  'Listing Optimisation',
                  'Pricing & Revenue Support',
                  'Direct Booking Setup',
                ],
              },
              {
                icon: Settings,
                color: 'text-accent',
                bg: 'bg-accent/10',
                border: 'border-accent/20',
                title: 'Business Infrastructure',
                desc: 'SOPs, systems, and team coordination give you the operational backbone to scale confidently without everything depending on you.',
                services: ['SOPs & Systems', 'Admin & Team Coordination'],
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className={`p-8 rounded-[2rem] bg-base-200 border ${pillar.border} shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${pillar.bg} flex items-center justify-center`}
                >
                  <pillar.icon className={`w-7 h-7 ${pillar.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-base-content mb-2">{pillar.title}</h3>
                  <p className="text-base-content/75 leading-relaxed text-sm mb-5">{pillar.desc}</p>
                </div>
                <ul className="space-y-2 mt-auto pt-4 border-t border-base-300">
                  {pillar.services.map((svc, j) => (
                    <li
                      key={j}
                      className={`flex items-center gap-2 text-sm font-semibold ${pillar.color}`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      {svc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: WHO IS IT FOR */}
      <section className="py-20 px-4 bg-base-200 border-y border-base-300">
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
            Ideal For
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content mb-14">
            Who Benefits Most
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Home,
                title: 'Multi-Property Hosts',
                desc: 'Managing 3+ listings and struggling to stay on top of operations and guest comms',
              },
              {
                icon: Briefcase,
                title: 'SA Operators',
                desc: 'Serviced accommodation businesses that need structured, professional backend support',
              },
              {
                icon: Users,
                title: 'Co-Hosts',
                desc: 'Providing co-hosting services and needing extra operational capacity behind the scenes',
              },
              {
                icon: Target,
                title: 'Growth-Stage Operators',
                desc: 'Scaling from 2–3 properties to 10+ and needing systems before the chaos starts',
              },
            ].map((who, i) => (
              <div
                key={i}
                className="p-7 rounded-[2rem] bg-base-100 border border-base-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center gap-4 text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-105 transition-all">
                  <who.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-base-content mb-1.5">{who.title}</h3>
                  <p className="text-sm text-base-content/70 leading-relaxed">{who.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: WHAT YOU GET vs WHAT YOU DON'T */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              The Difference
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content">
              What Working With Us Looks Like
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-base-200 border border-base-300 shadow-md">
              <p className="text-xs font-black text-center text-base-content/55 uppercase tracking-widest mb-8">
                What You Won&apos;t Have
              </p>
              <ul className="space-y-5">
                {[
                  [
                    'A ticket system that ignores context',
                    'Generic responses with no accountability',
                  ],
                  ['Automation without human oversight', 'Templates that confuse guests'],
                  ['A VA that just completes tasks', 'No strategic input or system building'],
                  ['Constant check-ins from you', 'You manage the person managing the ops'],
                ].map(([title, sub], i) => (
                  <li
                    key={i}
                    className="flex gap-4 items-start border-b border-base-300 pb-5 last:border-0 last:pb-0"
                  >
                    <div className="w-8 h-8 bg-error/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <XCircle className="w-4 h-4 text-error/70" />
                    </div>
                    <div>
                      <p className="font-bold text-base-content/80">{title}</p>
                      <p className="text-sm text-base-content/60 mt-0.5">{sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-primary to-secondary text-primary-content shadow-2xl shadow-primary/20 md:-translate-y-4 hover:-translate-y-6 transition-transform duration-300">
              <p className="text-xs font-black text-center text-primary-content/80 uppercase tracking-widest mb-8">
                What You Will Have
              </p>
              <ul className="space-y-5">
                {[
                  ['Context-aware guest management', 'Every situation handled with judgement'],
                  ['Human-led operational support', 'Real people who understand your properties'],
                  ['Strategic operations thinking', 'We improve systems, not just complete tasks'],
                  ['Autonomy and accountability', 'We handle it — you get updates, not questions'],
                ].map(([title, sub], i) => (
                  <li
                    key={i}
                    className="flex gap-4 items-start border-b border-white/15 pb-5 last:border-0 last:pb-0"
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white">{title}</p>
                      <p className="text-sm text-white/85 mt-0.5">{sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: PROCESS */}
      <section className="py-20 px-4 bg-base-200 border-y border-base-300">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Getting Started
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content">
              How We Begin Working Together
            </h2>
          </div>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="hidden lg:block absolute top-10 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-primary/20 via-primary/40 to-secondary/20 -z-10" />
            {[
              {
                title: 'Discovery Call',
                desc: 'We learn about your properties, current setup, and main pain points.',
                icon: PhoneCall,
                step: '01',
              },
              {
                title: 'Operations Review',
                desc: 'We audit your listings, communication flow, and backend structure.',
                icon: FileText,
                step: '02',
              },
              {
                title: 'Services Onboarding',
                desc: 'We set up processes, tools, and workflows tailored to your portfolio.',
                icon: Settings,
                step: '03',
              },
              {
                title: 'Ongoing Management',
                desc: 'We take over agreed services and run them day-to-day on your behalf.',
                icon: CalendarCheck,
                step: '04',
              },
            ].map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-4 p-7 rounded-[2rem] bg-base-100 border border-base-300 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-primary text-primary-content rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25">
                    <s.icon className="w-7 h-7" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-base-100 border-2 border-primary/30 rounded-full text-[10px] font-black text-primary flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-black tracking-widest text-primary/60 mb-1">
                    STEP {s.step}
                  </p>
                  <h3 className="text-lg font-bold text-base-content mb-2">{s.title}</h3>
                  <p className="text-sm text-base-content/70 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: OUTCOMES */}
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Outcomes</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content mb-10">
            What Our Clients Gain
          </h2>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            {[
              { text: 'Faster guest response times', icon: Zap },
              { text: 'Cleaner, more professional operations', icon: Sparkles },
              { text: 'Higher listing visibility', icon: BarChart2 },
              { text: 'Less day-to-day stress', icon: ShieldCheck },
              { text: 'A scalable business structure', icon: TrendingUp },
              { text: 'More time back in your day', icon: Clock },
            ].map((outcome, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3.5 bg-base-200 rounded-full shadow-sm border border-base-300 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <outcome.icon className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="font-semibold text-base-content/80 text-sm">{outcome.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: TESTIMONIALS */}
      <section className="py-20 px-4 bg-base-200 border-y border-base-300">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Client Experiences
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                t: 'Our guest response rate went from inconsistent to near-instant. It has genuinely changed how our business runs.',
                n: 'SA Business Owner',
                r: 'Birmingham',
              },
              {
                t: 'The cleaning coordination alone was worth it. No more chasing, no more missed check-ins. Everything just works.',
                n: 'Multi-listing Host',
                r: 'Manchester',
              },
              {
                t: 'Assistophere built the SOPs we always said we would get to. Now we are scaling properly for the first time.',
                n: 'Portfolio Operator',
                r: 'London',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative p-8 bg-base-100 border border-base-300 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-base-content/85 text-base leading-relaxed italic flex-1">
                  &quot;{item.t}&quot;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-base-300">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                    {item.n.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-base-content text-sm">{item.n}</p>
                    <p className="text-xs text-base-content/65">{item.r}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: FAQ */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">FAQ</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content">
              Questions About Our Services
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Can I choose which services I need?',
                a: 'Yes. We discuss your situation and agree on the services most relevant to your portfolio and goals. You are not locked into a fixed package.',
              },
              {
                q: 'How do you handle urgent guest situations?',
                a: 'We have clear escalation protocols. Urgent situations are flagged immediately and handled with priority — you are kept informed without being pulled into every detail.',
              },
              {
                q: 'Do you work with properties outside Airbnb?',
                a: 'Yes. We work across all major platforms including Booking.com, VRBO, and direct booking channels.',
              },
              {
                q: 'What if I only need one or two services?',
                a: 'That is completely fine. We can support you with specific services rather than full operations management if that is what suits you best.',
              },
              {
                q: 'How do you get access to our listings and tools?',
                a: 'We agree access levels with you during onboarding — typically view and message access to your hosting tools, nothing more than is needed.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="collapse collapse-plus bg-base-200 border border-base-300 rounded-2xl hover:border-primary/30 transition-colors"
              >
                <input type="radio" name="services-faq" defaultChecked={i === 0} />
                <div className="collapse-title text-base font-bold text-base-content pr-12">
                  {faq.q}
                </div>
                <div className="collapse-content text-base-content/80 text-sm leading-relaxed pb-4">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13: FINAL CTA */}
      <section className="py-28 px-4 relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary text-primary-content">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute top-0 right-0 w-[40%] h-[70%] bg-white/5 rounded-full blur-[80px]" />
        <div className="container max-w-5xl mx-auto text-center relative z-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-content/80 mb-5">
            Ready to Start?
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-tight">
            Let&apos;s Talk About <br className="hidden md:block" /> Your Operations
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-primary-content/90 font-light max-w-2xl mx-auto">
            Book a discovery call to discuss your portfolio, your challenges, and how we can support
            you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="h-14 px-10 text-lg rounded-full bg-base-200 text-primary hover:bg-base-300 hover:scale-105 active:scale-95 transition-all shadow-2xl font-bold"
              >
                Book a Discovery Call <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-10 text-lg rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
