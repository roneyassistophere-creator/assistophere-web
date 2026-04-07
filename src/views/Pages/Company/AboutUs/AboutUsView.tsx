import React from 'react'
import type { Page } from '@/payload-types'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Users,
  Home,
  Briefcase,
  TrendingUp,
  CheckCircle2,
  Star,
  ArrowRight,
  Settings,
  MessageSquare,
  Sparkles,
  CalendarCheck,
  Sun,
  Coffee,
  Sunset,
  Moon,
  Target,
  ShieldCheck,
  Layers,
  HeartHandshake,
} from 'lucide-react'

export const AboutUsView: React.FC<{ page: Page }> = () => {
  return (
    <article className="flex flex-col w-full overflow-x-hidden font-sans text-base-content selection:bg-primary/20">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .au-fade-1 { animation: fadeUp 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) both; }
        .au-fade-2 { animation: fadeUp 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .au-fade-3 { animation: fadeUp 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both; }
        .au-fade-4 { animation: fadeUp 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both; }
      `,
        }}
      />

      {/* ─── SECTION 1: HERO ─────────────────────────────────────────── */}
      <section className="relative pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-[55%] h-[70%] bg-linear-to-br from-primary/12 via-primary/4 to-transparent rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[45%] h-[60%] bg-linear-to-tl from-secondary/10 via-secondary/3 to-transparent rounded-full blur-[100px] -z-10" />

        <div className="container max-w-6xl mx-auto px-4">
          <div className="au-fade-1 w-fit px-3 py-1.5 mb-6 rounded-full border border-primary/25 bg-primary/8 flex items-center gap-2 text-xs font-semibold text-primary">
            <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            About Assistophere
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h1 className="au-fade-2 text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.07] mb-5 text-base-content">
                Built Around How Short Term Rental Businesses{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Actually Run
                </span>
              </h1>
              <p className="au-fade-3 text-base text-base-content/75 leading-relaxed max-w-lg mb-8">
                Assistophere is a backend support team for Airbnb hosts and serviced accommodation
                businesses across the UK, helping manage daily operations, improve structure, and
                support long-term growth.
              </p>
              <div className="au-fade-4 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full px-7 font-semibold">
                  <Link href="/free-audit">Book a Discovery Call</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-7">
                  <Link href="/services">
                    Our Services <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="relative rounded-5xl overflow-hidden border border-base-300 bg-base-200 aspect-4/3 flex flex-col items-center justify-center gap-3 shadow-xl shadow-primary/5">
              <div className="w-16 h-16 rounded-2xl bg-base-300 flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-base-content/30" />
              </div>
              <p className="text-sm text-base-content/40 font-medium">Team / Operations Image</p>
              <p className="text-xs text-base-content/25">[Image Placeholder]</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: WHO WE ARE ───────────────────────────────────── */}
      <section className="py-20 px-4 bg-base-200 border-y border-base-300">
        <div className="container max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content mb-8">
            More Than a Virtual Assistant Service
          </h2>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
            <div className="space-y-5 text-base text-base-content/80 leading-relaxed">
              <p>
                Assistophere is not just a virtual assistant service. We work as a{' '}
                <strong className="text-base-content font-semibold">remote operations team</strong>{' '}
                for short term rental businesses, handling guest communication, cleaning
                coordination, listing optimisation, pricing support, and backend systems — so
                everything runs properly.
              </p>
              <p>
                We support hosts across the UK who want to move away from constant day-to-day
                involvement and build something more structured.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MessageSquare, label: 'Guest Communication' },
                { icon: Sparkles, label: 'Cleaning Coordination' },
                { icon: TrendingUp, label: 'Pricing Support' },
                { icon: Settings, label: 'Backend Systems' },
              ].map(({ icon: Icon, label }, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-base-100 border border-base-300 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-base-content">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: REALITY / RELATABILITY ──────────────────────── */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
            The Reality
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content mb-8">
            We Understand How Messy STR Operations Can Get
          </h2>
          <div className="space-y-5 text-base text-base-content/80 leading-relaxed max-w-2xl mb-12">
            <p>
              Running a short term rental business often starts simple. But as bookings increase, so
              do the moving parts.
            </p>
            <p>
              Guest messages, cleaner coordination, maintenance issues, pricing decisions, listing
              updates, and constant small tasks quickly turn into a{' '}
              <strong className="text-base-content font-semibold">full-time workload</strong>.
            </p>
            <p className="text-base-content/90 font-medium border-l-2 border-primary pl-4">
              Most hosts don&apos;t struggle because they lack demand.
              <br />
              They struggle because <em>everything depends on them.</em>
            </p>
          </div>

          {/* Day in the Life block */}
          <div className="rounded-4xl border border-base-300 bg-base-200 p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">
              A Day in the Life of Operations
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: Coffee,
                  time: 'Morning',
                  task: 'Guest messages handled before hosts are awake',
                },
                {
                  icon: Sun,
                  time: 'Midday',
                  task: 'Cleaners coordinated, check-out issues resolved',
                },
                { icon: Sunset, time: 'Afternoon', task: 'Pricing reviewed, listings updated' },
                {
                  icon: Moon,
                  time: 'Evening',
                  task: 'Check-ins supported, late enquiries answered',
                },
              ].map(({ icon: Icon, time, task }, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-base-100 border border-base-300 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary/70">
                      {time}
                    </p>
                  </div>
                  <p className="text-sm text-base-content/75 leading-relaxed">{task}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: OUR APPROACH ─────────────────────────────────── */}
      <section className="py-20 px-4 bg-base-200 border-y border-base-300">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Our Approach
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content">
              Our Approach Is Simple
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Layers,
                title: 'We Think in Systems',
                desc: "We don't just handle tasks. We connect operations so everything works together — guest flow, cleaning, listings, backend.",
              },
              {
                icon: CalendarCheck,
                title: 'We Focus on Daily Execution',
                desc: 'We stay involved in the day-to-day so nothing gets missed. Consistency is how we earn trust.',
              },
              {
                icon: TrendingUp,
                title: 'We Support Long-Term Growth',
                desc: 'We help build a stronger backend so your business becomes easier to run and scale — not more dependent on you.',
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="p-7 rounded-4xl bg-base-100 border border-base-300 flex flex-col gap-4 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-base-content">{title}</h3>
                <p className="text-sm text-base-content/75 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: WHAT MAKES US DIFFERENT ─────────────────────── */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Differentiation
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content mb-6">
                What Makes Assistophere Different
              </h2>
              <p className="text-base text-base-content/75 leading-relaxed mb-8">
                Most support services handle isolated tasks. We think about how everything connects.
              </p>
              <ul className="space-y-4">
                {[
                  'We work with real serviced accommodation businesses',
                  'We understand how listings, pricing, and operations connect',
                  "We don't rely only on automation",
                  'We focus on structure, not quick fixes',
                  'We act as part of your team, not external support',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-emerald-500/15 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                    <span className="text-sm text-base-content/80 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  value: '7-Day',
                  label: 'Operational Coverage',
                  sub: 'No gaps, no missed messages',
                },
                { value: 'UK', label: 'Based & STR-Focused', sub: 'We understand the market' },
                {
                  value: 'Real',
                  label: 'Operational Experience',
                  sub: 'Not theory. Lived practice.',
                },
                { value: 'End-End', label: 'Backend Management', sub: 'Not just tasks — systems' },
              ].map(({ value, label, sub }, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-base-200 border border-base-300 flex flex-col gap-1"
                >
                  <p className="text-2xl font-black text-primary">{value}</p>
                  <p className="text-sm font-bold text-base-content">{label}</p>
                  <p className="text-xs text-base-content/60">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: EXPERIENCE / AUTHORITY ──────────────────────── */}
      <section className="py-20 px-4 bg-base-200 border-y border-base-300">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Case study placeholder */}
            <div className="rounded-5xl overflow-hidden border border-base-300 bg-base-100 p-8 flex flex-col gap-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-base-content/40">
                [Case Study Placeholder]
              </p>
              <div className="space-y-4">
                {[
                  {
                    label: 'Before',
                    items: [
                      'Inconsistent guest replies',
                      'Missed cleaning slots',
                      'No pricing strategy',
                      'Founder doing everything',
                    ],
                  },
                  {
                    label: 'After',
                    items: [
                      '24/7 response coverage',
                      'Structured cleaner rota',
                      'Revenue-led pricing',
                      'Owner stepped back',
                    ],
                  },
                ].map(({ label, items }, col) => (
                  <div key={col}>
                    <p
                      className={`text-xs font-bold uppercase tracking-widest mb-3 ${col === 0 ? 'text-error/70' : 'text-emerald-500'}`}
                    >
                      {label}
                    </p>
                    <ul className="space-y-2">
                      {items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-center gap-2 text-sm text-base-content/75"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full shrink-0 ${col === 0 ? 'bg-error/50' : 'bg-emerald-500'}`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Authority
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content mb-6">
                Built Through Real Operational Experience
              </h2>
              <div className="space-y-4 text-base text-base-content/75 leading-relaxed">
                <p>
                  Our work is based on real, day-to-day involvement in managing short term rental
                  operations — from handling guest communication to coordinating cleaners and
                  improving listings.
                </p>
                <p>
                  We are not theory-based.{' '}
                  <strong className="text-base-content font-semibold">
                    Everything we do is grounded in real operational work.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: OUR ROLE ─────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
            Your Business
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content mb-6">
            How We Fit Into Your Business
          </h2>
          <p className="text-base text-base-content/75 leading-relaxed max-w-2xl mx-auto mb-14">
            You stay in control of your business. We step in to handle the operational side — making
            sure everything runs smoothly without requiring your constant involvement. We become the
            backend team that keeps things moving.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              {
                icon: ShieldCheck,
                label: 'You Stay in Control',
                desc: 'Decisions stay with you. Execution sits with us.',
              },
              {
                icon: HeartHandshake,
                label: 'We Handle the Ops',
                desc: 'Guest comms, cleaning, listings — all covered.',
              },
              {
                icon: Target,
                label: 'You Focus on Growth',
                desc: 'Time and headspace freed for what matters.',
              },
            ].map(({ icon: Icon, label, desc }, i) => (
              <div
                key={i}
                className="p-6 rounded-4xl bg-base-200 border border-base-300 flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-bold text-base-content text-sm">{label}</p>
                <p className="text-xs text-base-content/65 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: WHO WE WORK WITH ─────────────────────────────── */}
      <section className="py-20 px-4 bg-base-200 border-y border-base-300">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Ideal For
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content">
              Who We Work Best With
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Home,
                title: 'Multi-Property Hosts',
                desc: 'Managing 3+ listings and stretched across daily operations',
              },
              {
                icon: Briefcase,
                title: 'SA Operators',
                desc: 'Serviced accommodation businesses needing structured backend support',
              },
              {
                icon: Users,
                title: 'Co-Hosts',
                desc: 'Providing co-hosting services and needing extra operational capacity',
              },
              {
                icon: TrendingUp,
                title: 'Growth-Stage Operators',
                desc: 'Scaling from 2–3 properties to 10+ and needing systems first',
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="p-7 rounded-4xl bg-base-100 border border-base-300 hover:border-primary/30 hover:shadow-lg transition-all group flex flex-col items-center text-center gap-4"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-105 transition-all">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-base-content mb-1.5">{title}</h3>
                  <p className="text-xs text-base-content/65 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: TESTIMONIALS ─────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Trust</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content">
              What Clients Value
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                t: 'Assistophere changed how our business runs. The operational consistency they brought was something we tried to build ourselves for two years.',
                n: 'Portfolio Manager',
                r: 'UK Operator',
              },
              {
                t: 'Response times improved overnight. Occupancy is up and I barely need to check my phone during the day.',
                n: 'SA Business Owner',
                r: 'Scaling Host',
              },
              {
                t: 'The SOPs and structured processes completely changed how our team works. Everything is clearer and more consistent.',
                n: 'Multi-listing Host',
                r: 'Growth Stage',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative p-8 bg-base-200 border border-base-300 rounded-4xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-base-content/80 text-sm leading-relaxed italic flex-1">
                  &quot;{item.t}&quot;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-base-300">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm shrink-0">
                    {item.n.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-base-content text-sm">{item.n}</p>
                    <p className="text-xs text-base-content/60">{item.r}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-base-content/30 mt-8 tracking-widest uppercase">
            [Testimonial Placeholder — replace with real client stories]
          </p>
        </div>
      </section>

      {/* ─── SECTION 10: TEAM / HUMAN TOUCH ─────────────────────────── */}
      <section className="py-20 px-4 bg-base-200 border-y border-base-300">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                The Team
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content mb-6">
                A Team Focused on Keeping Things Running Properly
              </h2>
              <div className="space-y-4 text-base text-base-content/75 leading-relaxed">
                <p>
                  Behind Assistophere is a team focused on consistency, organisation, and clear
                  communication.
                </p>
                <p>
                  We prioritise{' '}
                  <strong className="text-base-content font-semibold">
                    reliability, responsiveness
                  </strong>
                  , and keeping your operations structured — because that is what STR businesses
                  actually need.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                {['Reliable', 'Responsive', 'Organised', 'STR-Focused', 'UK-Based'].map(
                  (tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 bg-base-100 border border-base-300 rounded-full text-xs font-semibold text-base-content/70"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Team image placeholder */}
            <div className="rounded-5xl overflow-hidden border border-base-300 bg-base-100 aspect-4/3 flex flex-col items-center justify-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-base-200 flex items-center justify-center">
                <Users className="w-7 h-7 text-base-content/30" />
              </div>
              <p className="text-sm text-base-content/35 font-medium">Team Image</p>
              <p className="text-xs text-base-content/20">[Team Placeholder]</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 11: FINAL CTA ───────────────────────────────────── */}
      <section className="py-28 px-4 relative overflow-hidden bg-linear-to-br from-primary via-primary to-secondary text-primary-content">
        <div className="absolute top-0 right-0 w-[40%] h-[80%] bg-white/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[35%] h-[60%] bg-black/10 rounded-full blur-[60px]" />
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-content/70 mb-5">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 tracking-tighter leading-tight">
            If You&apos;re Ready to Step Back
            <br className="hidden md:block" />
            from the Day-to-Day
          </h2>
          <p className="text-base text-primary-content/80 mb-10 max-w-xl mx-auto leading-relaxed">
            Let&apos;s build a setup that runs properly without depending on you for everything.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="h-14 px-10 text-base rounded-full bg-white text-primary hover:bg-white/90 font-bold shadow-2xl"
            >
              <Link href="/free-audit">Book a Discovery Call</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 px-10 text-base rounded-full border-2 border-white/40 text-primary-content hover:bg-white/10 font-semibold"
            >
              <Link href="/services">
                See Our Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </article>
  )
}
