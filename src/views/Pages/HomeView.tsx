import React from 'react'
import type { Page } from '@/payload-types'
import { Button } from '@/components/ui/button'
import {
  MessageSquare,
  Wrench,
  TrendingUp,
  Globe,
  Settings,
  XCircle,
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
  MessageCircle,
  ClipboardList,
  Star,
  Zap,
  BarChart2,
  CalendarCheck,
} from 'lucide-react'
import Link from 'next/link'

export const HomeView: React.FC<{ page: Page }> = () => {
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
          <div className="fade-up mx-auto lg:mx-0 w-fit px-3 py-1.5 mb-5 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Supporting UK hosts with 7-day operational coverage
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="text-center lg:text-left">
              <h1 className="fade-up-1 text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 leading-[1.08] text-base-content">
                Your Team for <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary">
                  Short Term Rental Growth
                </span>
              </h1>

              <p className="fade-up-2 text-base text-base-content/80 mb-7 leading-relaxed max-w-lg mx-auto lg:mx-0">
                We handle guest communication, cleaning coordination, listing optimisation, and
                backend systems so you can{' '}
                <strong className="text-base-content font-semibold">
                  save time, stay organised, and grow.
                </strong>
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
                <Link href="#services" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full h-12 px-7 text-sm rounded-full border-2 border-base-300 hover:border-primary/50 hover:bg-primary/5 transition-all text-base-content"
                  >
                    See Our Services
                  </Button>
                </Link>
              </div>

              <div className="fade-up-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-base-content/75">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-500" /> No commission model
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-500" /> UK-based support
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-500" /> 7-day coverage
                </span>
              </div>
            </div>

            {/* Dashboard visual */}
            <div className="fade-up-5 relative w-full float-anim">
              <div className="relative rounded-[2.5rem] overflow-hidden border border-base-300 shadow-2xl shadow-primary/10 bg-base-200/90 backdrop-blur-2xl p-1">
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
                <div className="flex items-center gap-2 px-5 pt-4 pb-3 border-b border-base-300">
                  <span className="w-3 h-3 rounded-full bg-error/70" />
                  <span className="w-3 h-3 rounded-full bg-warning/70" />
                  <span className="w-3 h-3 rounded-full bg-success/70" />
                  <span className="ml-3 text-xs font-mono text-base-content/70 tracking-wide">
                    assistophere · dashboard
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 p-4">
                  {[
                    {
                      title: 'Inbox Handled',
                      val: '100%',
                      sub: 'This week',
                      icon: MessageSquare,
                      color: 'text-blue-500',
                      bg: 'bg-blue-500/10',
                    },
                    {
                      title: 'Avg Occupancy',
                      val: '84%',
                      sub: 'Last 30 days',
                      icon: TrendingUp,
                      color: 'text-emerald-500',
                      bg: 'bg-emerald-500/10',
                    },
                    {
                      title: 'Cleaners Synced',
                      val: 'Active',
                      sub: 'All properties',
                      icon: Sparkles,
                      color: 'text-amber-500',
                      bg: 'bg-amber-500/10',
                    },
                    {
                      title: 'Direct Bookings',
                      val: '+22%',
                      sub: 'vs last month',
                      icon: Globe,
                      color: 'text-purple-500',
                      bg: 'bg-purple-500/10',
                    },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="rounded-2xl p-5 flex flex-col gap-2 bg-base-200 border border-base-300 shadow-sm"
                    >
                      <div
                        className={`w-9 h-9 rounded-xl ${stat.bg} flex items-center justify-center`}
                      >
                        <stat.icon className={`w-5 h-5 ${stat.color}`} />
                      </div>
                      <p className="text-2xl font-black text-base-content mt-1">{stat.val}</p>
                      <div>
                        <p className="text-xs font-bold text-base-content">{stat.title}</p>
                        <p className="text-xs text-base-content/70">{stat.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mx-4 mb-4 p-4 rounded-2xl bg-primary/8 border border-primary/15 flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-sm text-primary font-semibold">
                    All systems operational · Next check-in in 2h
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-base-200 border border-base-300 shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <CalendarCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-base-content">3 bookings confirmed</p>
                  <p className="text-xs text-base-content/80">last 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service strip */}
          <div className="hidden lg:flex items-center gap-8 mt-12 pt-6 border-t border-base-300">
            <span className="text-xs font-bold uppercase tracking-widest text-base-content/70 shrink-0">
              We Handle
            </span>
            {[
              { icon: MessageSquare, label: 'Guest Messaging' },
              { icon: Sparkles, label: 'Cleaning & Turnover' },
              { icon: TrendingUp, label: 'Listing Optimisation' },
              { icon: Settings, label: 'Pricing Support' },
              { icon: Globe, label: 'Direct Booking Systems' },
            ].map((service, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-base-content/75 hover:text-primary transition-colors cursor-default group"
              >
                <service.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold whitespace-nowrap">{service.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: SOCIAL PROOF NUMBERS */}
      <section className="py-16 border-y border-base-300/50 bg-gradient-to-r from-base-200/70 via-base-200/40 to-base-200/70">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: '50+', label: 'Properties Supported', color: 'text-primary' },
              {
                val: '100%',
                label: 'Inbox Response Rate',
                color: 'text-emerald-600 dark:text-emerald-400',
              },
              {
                val: '7-Day',
                label: 'Operational Coverage',
                color: 'text-blue-600 dark:text-blue-400',
              },
              { val: '£0', label: 'Commission Charged', color: 'text-secondary' },
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

      {/* SECTION 3: WHAT WE DO */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-base-content">
            The Full Backend of Your STR Business, Handled.
          </h2>
          <p className="text-xl leading-relaxed text-base-content/80 max-w-3xl mx-auto">
            We support short term rental hosts and serviced accommodation operators with guest
            communication, cleaning coordination, listing optimisation, pricing support, and backend
            systems — so everything runs as one organised flow.
          </p>
        </div>
      </section>

      {/* SECTION 4: PROBLEM */}
      <section className="py-20 px-4 bg-base-200">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-error mb-4">
              Sound Familiar?
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight text-base-content">
              Running an STR Business Shouldn&apos;t Feel Like{' '}
              <span className="text-error">Constant Firefighting</span>
            </h2>
            <p className="text-xl text-base-content/75 font-light">
              More bookings sound great — until the messages, cleaners, maintenance, and admin start
              stacking up.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {[
              {
                problem: 'Replying to guests at all hours',
                desc: 'Your phone never stops buzzing',
              },
              {
                problem: 'Chasing cleaners & maintenance',
                desc: 'Coordination chaos before every check-in',
              },
              {
                problem: 'Listings not fully optimised',
                desc: 'Leaving visibility and revenue on the table',
              },
              {
                problem: 'Missed direct booking opportunities',
                desc: 'Overpaying commission on every booking',
              },
              {
                problem: 'No clear systems for scaling',
                desc: 'Everything depends on your memory',
              },
              {
                problem: 'Everything depends on you',
                desc: "Can't take a day off without things breaking",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 p-6 rounded-2xl bg-base-200 border border-base-300 hover:border-error/25 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-error/10 rounded-full flex items-center justify-center shrink-0">
                    <XCircle className="w-4 h-4 text-error" />
                  </div>
                  <p className="font-bold text-base-content">{item.problem}</p>
                </div>
                <p className="text-sm text-base-content/80 pl-11">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-xl md:text-2xl text-center font-bold text-base-content/85 italic">
            You end up stuck in the day-to-day instead of growing your business.
          </p>
        </div>
      </section>

      {/* SECTION 5: TRANSITION BANNER */}
      <section className="py-16 bg-gradient-to-r from-primary via-primary to-secondary text-primary-content flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="relative z-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-70 mb-3">
            The Better Way
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            That&apos;s where Assistophere comes in.
          </h2>
        </div>
      </section>

      {/* SECTION 6: SOLUTION — 3 PILLARS */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Our Approach
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-base-content mb-5">
              A More Organised, More Profitable STR Business
            </h2>
            <p className="text-xl text-base-content/75 font-light">
              We don&apos;t just assist. We step in as your backend team and keep everything running
              properly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                color: 'text-primary',
                bg: 'bg-primary/10',
                border: 'border-primary/20',
                title: 'Daily Operations',
                desc: 'Guest communication, check-ins, and cleaner coordination stay on track without constant follow-ups.',
                points: [
                  'Guest messaging & support',
                  'Check-in coordination',
                  'Cleaning & turnover management',
                ],
              },
              {
                icon: TrendingUp,
                color: 'text-secondary',
                bg: 'bg-secondary/10',
                border: 'border-secondary/20',
                title: 'Listing & Revenue',
                desc: 'We improve listing structure, monitor pricing, and keep your calendar working in your favour.',
                points: [
                  'Listing optimisation & SEO',
                  'Pricing & calendar strategy',
                  'Conversion-focused updates',
                ],
              },
              {
                icon: Layout,
                color: 'text-accent',
                bg: 'bg-accent/10',
                border: 'border-accent/20',
                title: 'Growth & Systems',
                desc: 'We build stronger systems through direct booking support, SOPs, and workflow structure.',
                points: [
                  'Direct booking setup',
                  'SOP & workflow creation',
                  'Scaling infrastructure',
                ],
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`relative p-8 rounded-[2rem] bg-base-200 border ${card.border} shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${card.bg} flex items-center justify-center`}
                >
                  <card.icon className={`w-7 h-7 ${card.color}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-base-content">{card.title}</h3>
                  <p className="text-base-content/80 leading-relaxed mb-5">{card.desc}</p>
                </div>
                <ul className="space-y-2.5 mt-auto">
                  {card.points.map((pt, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2.5 text-sm font-medium text-base-content/80"
                    >
                      <CheckCircle2 className={`w-4 h-4 ${card.color} shrink-0`} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: SERVICES SNAPSHOT */}
      <section id="services" className="py-20 px-4 bg-base-200 border-y border-base-300">
        <div className="container max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
                Our Services
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content">
                What We Handle Daily
              </h2>
            </div>
            <Link href="/contact">
              <Button
                variant="outline"
                className="rounded-full border-2 border-primary/40 hover:bg-primary hover:text-primary-content transition-all px-6"
              >
                Talk to us about your needs <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: MessageSquare,
                label: 'Guest Communication',
                desc: 'Pre, during & post stay',
              },
              { icon: Sparkles, label: 'Cleaning Coordination', desc: 'Scheduling & follow-ups' },
              { icon: Wrench, label: 'Maintenance Handling', desc: 'Reporting & resolution' },
              { icon: Layout, label: 'Listing Optimisation', desc: 'SEO & conversion copy' },
              { icon: TrendingUp, label: 'Pricing Support', desc: 'Calendar & revenue strategy' },
              { icon: Globe, label: 'Direct Booking Setup', desc: 'Reduce platform dependency' },
              { icon: ClipboardList, label: 'SOP & Systems', desc: 'Processes that scale' },
              { icon: Users, label: 'Admin & Team Coordination', desc: 'Keep everyone aligned' },
            ].map((s, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 p-5 bg-base-100 rounded-2xl border border-base-300 hover:border-primary/40 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-base-content text-sm">{s.label}</p>
                  <p className="text-xs text-base-content/80 mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: DIFFERENTIATION */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Why Us</p>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
              More Than Just Virtual Assistants
            </h2>
            <p className="text-xl text-base-content/85 italic">
              Most services handle tasks. We handle the entire backend.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto mb-14">
            {[
              {
                title: "We don't just reply — we manage operations",
                desc: 'From first enquiry to post-stay review, we own the full guest journey.',
              },
              {
                title: "We don't rely only on automation",
                desc: 'Real humans managing real situations, not just templates.',
              },
              {
                title: 'We think in systems, not quick fixes',
                desc: 'Every process we build is designed to scale with your portfolio.',
              },
              {
                title: 'We support real STR businesses daily',
                desc: 'Hands-on involvement, not a set-and-forget service.',
              },
            ].map((diff, i) => (
              <div
                key={i}
                className="flex gap-5 p-7 rounded-[1.5rem] bg-base-200 border border-base-300 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1.5 text-base-content">{diff.title}</h3>
                  <p className="text-sm text-base-content/75 leading-relaxed">{diff.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block p-8 border-2 border-primary/20 rounded-[2rem] bg-primary/8">
              <h3 className="text-2xl md:text-3xl font-black text-base-content">
                You stay in control.{' '}
                <span className="text-primary">We carry the operational load.</span>
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: BEFORE / AFTER */}
      <section className="py-20 px-4 bg-base-200 border-y border-base-300">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              The Difference
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content">
              With Assistophere vs Without
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-base-100 border border-base-300 shadow-md">
              <p className="text-xs font-black text-center text-base-content/70 uppercase tracking-widest mb-8">
                Without Assistophere
              </p>
              <ul className="space-y-5">
                {[
                  ['Constant firefighting', 'Every day starts with a problem'],
                  ['Slow guest replies', 'Revenue lost to unanswered enquiries'],
                  ['Missed revenue', 'Suboptimal pricing and listings'],
                  ['Disorganised backend', 'No systems, no clarity, no scale'],
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
                      <p className="text-sm text-base-content/75 mt-0.5">{sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-primary to-secondary text-primary-content shadow-2xl shadow-primary/20 md:-translate-y-4 hover:-translate-y-6 transition-transform duration-300">
              <p className="text-xs font-black text-center text-primary-content/60 uppercase tracking-widest mb-8">
                With Assistophere
              </p>
              <ul className="space-y-5">
                {[
                  ['Structured operations', 'Every process runs on a clear system'],
                  ['Fast responses', 'Guests handled professionally 7 days a week'],
                  ['Optimised listings', 'Better visibility, better conversions'],
                  ['Clear systems', 'Ready to scale without hiring more people'],
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

      {/* SECTION 10: PROCESS */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              How It Works
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content">
              How We Work With You
            </h2>
          </div>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="hidden lg:block absolute top-10 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-primary/20 via-primary/40 to-secondary/20 -z-10" />
            {[
              {
                title: 'Audit Your Setup',
                desc: 'We review your current operations, tools, and gaps.',
                icon: Settings,
                step: '01',
              },
              {
                title: 'Build a Structured Plan',
                desc: 'We create a tailored operations roadmap for your portfolio.',
                icon: ClipboardList,
                step: '02',
              },
              {
                title: 'Take Over Daily Operations',
                desc: 'We handle guest comms, cleaning, maintenance, and listings.',
                icon: MessageSquare,
                step: '03',
              },
              {
                title: 'Help You Scale',
                desc: 'We grow with you, adding systems and support as you expand.',
                icon: TrendingUp,
                step: '04',
              },
            ].map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-4 p-7 rounded-[2rem] bg-base-200 border border-base-300 hover:border-primary/30 hover:shadow-lg transition-all"
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

      {/* SECTION 11: OUTCOMES */}
      <section className="py-16 px-4 bg-base-200 border-y border-base-300">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Results</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content mb-10">
            What This Changes for You
          </h2>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            {[
              { text: 'Faster response times', icon: Zap },
              { text: 'Smoother daily operations', icon: Settings },
              { text: 'Better-performing listings', icon: BarChart2 },
              { text: 'Less stress day-to-day', icon: ShieldCheck },
              { text: 'More time to grow', icon: TrendingUp },
            ].map((outcome, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3.5 bg-base-100 rounded-full shadow-sm border border-base-300 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <outcome.icon className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="font-semibold text-base-content text-sm">{outcome.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: WHO IT'S FOR */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
            Ideal For
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content mb-14">
            Who We Work Best With
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Home,
                title: 'Multi-Listing Hosts',
                desc: 'Managing 3+ properties and drowning in daily tasks',
              },
              {
                icon: Briefcase,
                title: 'SA Businesses',
                desc: 'Serviced accommodation operators needing backend structure',
              },
              {
                icon: Users,
                title: 'Co-Hosts',
                desc: 'Needing operational support behind the scenes',
              },
              {
                icon: TrendingUp,
                title: 'Scaling Operators',
                desc: 'Ready to grow without being overwhelmed by operations',
              },
            ].map((who, i) => (
              <div
                key={i}
                className="p-7 rounded-[2rem] bg-base-200 border border-base-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center gap-4 text-center"
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

      {/* SECTION 13: TESTIMONIALS */}
      <section className="py-20 px-4 bg-base-200 border-y border-base-300">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Client Stories
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content">
              What Clients Value
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                t: 'Assistophere drastically reduced the chaos of managing multiple listings. Total peace of mind.',
                n: 'Portfolio Manager',
                r: 'UK Operator',
              },
              {
                t: 'Response times improved overnight. Our occupancy rate is up and I barely have to check my phone.',
                n: 'SA Business Owner',
                r: 'Scaling Host',
              },
              {
                t: 'The SOPs and structured operations completely changed how our team works. Everything is clearer.',
                n: 'Multi-listing Host',
                r: 'Growth Stage',
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
                    <p className="text-xs text-base-content/80">{item.r}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14: FAQ */}
      <section className="py-20 px-4">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">FAQ</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Do you only work with Airbnb?',
                a: 'No, we work across all major platforms including Booking.com, VRBO, and direct booking sites.',
              },
              {
                q: 'Can you manage multiple listings?',
                a: 'Absolutely. We build systems designed specifically to scale with your portfolio from 3 to 30+ properties.',
              },
              {
                q: 'Is this just VA support?',
                a: 'No. We integrate deeply as an operations team, building SOPs, handling backend structures, and optimising revenue — not just replying to messages.',
              },
              {
                q: 'How quickly do you respond?',
                a: 'We maintain industry-leading response times to secure bookings and resolve guest issues rapidly, 7 days a week.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="collapse collapse-plus bg-base-200 border border-base-300 rounded-2xl hover:border-primary/30 transition-colors"
              >
                <input type="radio" name="home-faq" defaultChecked={i === 0} />
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

      {/* SECTION 15: FINAL CTA */}
      <section className="py-28 px-4 relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary text-primary-content">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute top-0 right-0 w-[40%] h-[70%] bg-white/5 rounded-full blur-[80px]" />
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-content/80 mb-5">
            Get Started
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-tight">
            Ready to Make Your Business <br className="hidden md:block" /> Easier to Run?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-primary-content/90 font-light max-w-2xl mx-auto">
            Build a setup that feels organised, efficient, and scalable — without doing it all
            yourself.
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
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-10 text-lg rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all"
              >
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
