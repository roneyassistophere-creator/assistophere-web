import React from 'react'
import Link from 'next/link'
import {
  Palette,
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
  Zap,
  BarChart3,
  Globe,
  Sparkles,
  ShieldCheck,
  Users,
} from 'lucide-react'
import type { Page } from '@/payload-types'

export const BrandGrowthView: React.FC<{ page: Page }> = () => {
  return (
    <div className="min-h-screen text-base-content overflow-x-hidden">
      <style>{`
        @keyframes pulse-ring-bg {
          0%,100% { box-shadow: 0 0 0 0 hsl(var(--p)/.35); }
          50%      { box-shadow: 0 0 0 10px hsl(var(--p)/0); }
        }
        @keyframes bg-fade-up {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .bg-fade-1 { animation: bg-fade-up .55s ease both .10s; }
        .bg-fade-2 { animation: bg-fade-up .55s ease both .22s; }
        .bg-fade-3 { animation: bg-fade-up .55s ease both .34s; }
        .bg-fade-4 { animation: bg-fade-up .55s ease both .46s; }
        .bg-fade-5 { animation: bg-fade-up .55s ease both .58s; }
        .pulse-cta-bg { animation: pulse-ring-bg 2.4s ease-in-out infinite; }
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
              <div className="bg-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Brand Growth · UK STR
              </div>
              <h1 className="bg-fade-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight">
                Build a Brand That Goes{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Beyond Just Listings
                </span>
              </h1>
              <p className="bg-fade-3 text-lg text-base-content/70 leading-relaxed max-w-lg">
                Assistophere helps UK hosts grow their STR brand, making their business more
                recognisable, trusted, and positioned for long-term growth.
              </p>
              <div className="bg-fade-4 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm italic text-base-content/65">
                Brand growth in STR businesses involves building a consistent identity, improving
                visibility, and creating trust that supports direct bookings and long-term success.
              </div>
              <div className="bg-fade-5 flex flex-wrap gap-3 pt-1">
                <button className="pulse-cta-bg btn btn-primary btn-lg rounded-full px-8 gap-2">
                  <Phone className="w-4 h-4" /> Book a Discovery Call
                </button>
                <Link
                  href="/services/social-media-management"
                  className="btn btn-outline btn-lg rounded-full px-8 gap-2"
                >
                  <ArrowRight className="w-4 h-4" /> Back to Social Media Management
                </Link>
              </div>
              <div className="bg-fade-5 flex items-center gap-3 pt-2">
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
                    Building STR brands across the UK
                  </p>
                </div>
              </div>
            </div>

            {/* Hero visual — brand identity card */}
            <div className="hidden lg:block">
              <div className="relative rounded-3xl border border-base-300 bg-base-200/60 backdrop-blur-sm p-6 shadow-xl space-y-4">
                {/* Mock brand kit */}
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs font-bold">Brand Identity Overview</p>
                  <span className="badge badge-primary badge-sm">Active</span>
                </div>
                {/* Colour palette */}
                <div className="bg-base-100 rounded-2xl border border-base-300 p-4 space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-base-content/40">
                    Colour Palette
                  </p>
                  <div className="flex gap-2">
                    {['bg-primary', 'bg-secondary', 'bg-accent', 'bg-neutral', 'bg-base-300'].map(
                      (c, i) => (
                        <div key={i} className={`w-8 h-8 rounded-lg ${c} border border-base-300`} />
                      ),
                    )}
                  </div>
                </div>
                {/* Platform scores */}
                <div className="bg-base-100 rounded-2xl border border-base-300 p-4 space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-base-content/40">
                    Brand Presence
                  </p>
                  {[
                    { label: 'Visual Consistency', val: 92 },
                    { label: 'Messaging Clarity', val: 87 },
                    { label: 'Platform Activity', val: 95 },
                  ].map(({ label, val }) => (
                    <div key={label}>
                      <div className="flex justify-between mb-1">
                        <span className="text-[10px] text-base-content/60">{label}</span>
                        <span className="text-[10px] font-bold text-primary">{val}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-base-300 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${val}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Brand pillars */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { icon: Palette, label: 'Visual', colour: 'bg-primary/10' },
                    { icon: MessageSquare, label: 'Messaging', colour: 'bg-secondary/10' },
                    { icon: ShieldCheck, label: 'Trust', colour: 'bg-success/10' },
                  ].map(({ icon: Icon, label, colour }) => (
                    <div
                      key={label}
                      className={`${colour} rounded-xl py-3 flex flex-col items-center gap-1`}
                    >
                      <Icon className="w-4 h-4 text-base-content/50" />
                      <p className="text-[9px] text-base-content/40">{label}</p>
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
                <LayoutGrid className="w-4 h-4" /> The Distinction
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Listings Get Bookings. Brands Build Businesses.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-base-100 rounded-2xl border border-error/20 p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-error/70 mb-4">
                  Listing-only approach
                </p>
                <div className="space-y-3">
                  {[
                    [
                      'Platform dependent',
                      "Your entire revenue depends on Airbnb, OTAs, and platforms you don't own or control. Algorithm changes affect you directly.",
                    ],
                    [
                      'No recognition',
                      "Guests don't remember who you are — they just remember the platform they booked through. You're interchangeable with every other host.",
                    ],
                    [
                      'No audience',
                      'Without a brand, you have no way to market directly, build repeat guests, or create the loyalty that drives long-term growth.',
                    ],
                  ].map(([label, detail]) => (
                    <div key={label} className="flex gap-3">
                      <XCircle className="w-4 h-4 text-error shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold">{label}</p>
                        <p className="text-xs text-base-content/55 mt-0.5">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-base-100 rounded-2xl border border-success/20 p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-success/70 mb-4">
                  Brand-based approach
                </p>
                <div className="space-y-3">
                  {[
                    [
                      'Builds recognition',
                      'A consistent brand means guests know who you are before they book — and remember you when they want to book again.',
                    ],
                    [
                      'Creates trust',
                      'Trust is the most powerful booking signal. A visible, professional brand communicates credibility before a guest reads a single review.',
                    ],
                    [
                      'Supports direct bookings',
                      "A recognisable brand is what enables direct booking growth — it's the asset that makes guests choose you over the platform.",
                    ],
                  ].map(([label, detail]) => (
                    <div key={label} className="flex gap-3">
                      <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold">{label}</p>
                        <p className="text-xs text-base-content/55 mt-0.5">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-center text-base-content/55 mt-6 italic text-sm">
              Without a brand, growth depends entirely on platforms you don&apos;t control.
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
              <h2 className="text-3xl lg:text-4xl font-bold">
                Why Most STR Businesses Stay Invisible
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  point: 'No clear identity',
                  detail:
                    "Most STR businesses have no defined brand — no name beyond the property address, no visual identity, no consistent voice. There's nothing to recognise or remember.",
                },
                {
                  point: 'Inconsistent visuals',
                  detail:
                    'Photos that vary by season, logos that change, social posts with no cohesion — inconsistency destroys the trust that brand building requires.',
                },
                {
                  point: 'No brand messaging',
                  detail:
                    "Without a defined message — who you serve, what makes you different, why guests should choose you — there's nothing compelling to communicate.",
                },
                {
                  point: 'Reliance on Airbnb only',
                  detail:
                    'Hosts who depend entirely on OTAs have no direct relationship with their guests. Platform changes, commission increases, or algorithm shifts immediately threaten the business.',
                },
                {
                  point: 'No audience building',
                  detail:
                    "Without social media, email, or any owned channel, there's no audience to market to. Every booking starts from scratch with a cold stranger on a platform.",
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
              Without a brand, you are just another listing.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT BRAND GROWTH ACTUALLY MEANS ────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Zap className="w-4 h-4" /> What It Involves
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">What Building an STR Brand Involves</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              {
                icon: Palette,
                title: 'Visual Identity',
                desc: 'A consistent look across every touchpoint — social content, listing photos, website, communications. Recognisability is built through visual repetition.',
              },
              {
                icon: MessageSquare,
                title: 'Messaging',
                desc: "A clear, consistent voice and message that tells potential guests who you are, what you offer, and why you're the right choice over a generic listing.",
              },
              {
                icon: LayoutGrid,
                title: 'Consistency',
                desc: "Brand growth requires showing up regularly — across platforms, content types, and audience touchpoints. Sporadic presence doesn't build recognition.",
              },
              {
                icon: ShieldCheck,
                title: 'Trust Building',
                desc: "Trust is the outcome of consistent, professional brand presence over time. It's what converts a warm audience into a direct booking.",
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

      {/* ── WHAT WE BUILD ────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Layers className="w-4 h-4" /> Our Scope
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">What Our Brand Growth Covers</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1.5fr] gap-px bg-base-300 rounded-3xl overflow-hidden border border-base-300">
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              Brand Area
            </div>
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              What We Do
            </div>
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              Outcome
            </div>
            {[
              {
                area: 'Brand Positioning',
                icon: Target,
                tasks: [
                  'Defining your brand identity and what makes you distinct',
                  "Clarifying your offering and who it's built for",
                  'Standing out in a market full of generic listings',
                ],
                outcome:
                  'A clear brand position that differentiates your property and business from competitors.',
              },
              {
                area: 'Visual Consistency',
                icon: Palette,
                tasks: [
                  'Aligning content style, colours, and visual tone across all platforms',
                  'Improving presentation quality across posts and listings',
                  'Maintaining a consistent brand look over time',
                ],
                outcome:
                  'A recognisable visual identity that builds familiarity and professionalism with every piece of content.',
              },
              {
                area: 'Content Alignment',
                icon: LayoutGrid,
                tasks: [
                  'Ensuring messaging is consistent across all content',
                  'Structuring content to reinforce your brand identity',
                  'Supporting brand-building through every post published',
                ],
                outcome:
                  'Content that actively builds your brand rather than just filling a schedule.',
              },
              {
                area: 'Platform Presence',
                icon: Globe,
                tasks: [
                  'Building sustained visibility across social media platforms',
                  'Maintaining consistent account activity to grow recognition',
                  'Strengthening brand presence in the STR market',
                ],
                outcome:
                  'An active, visible brand presence that grows your audience and builds long-term trust.',
              },
              {
                area: 'Direct Booking Support',
                icon: TrendingUp,
                tasks: [
                  'Aligning brand strategy with your direct booking website',
                  'Improving trust signals that convert social followers to bookers',
                  'Supporting direct booking growth through brand authority',
                ],
                outcome:
                  'A brand that reduces platform dependency and drives bookings through channels you own.',
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
            The result: a recognisable STR brand that supports growth beyond platforms.
          </p>
        </div>
      </section>

      {/* ── HOW BRAND CONNECTS TO BUSINESS ──────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-success/10 border border-success/25 text-success text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4" /> Long-Term Impact
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Brand Drives Long-Term Growth</h2>
              <p className="text-base-content/60 mt-4 leading-relaxed">
                A strong brand isn&apos;t just a nice-to-have. It&apos;s the infrastructure that
                separates a scalable STR business from a host who&apos;s always one algorithm change
                away from lost revenue.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Globe,
                  title: 'Reduces reliance on platforms',
                  desc: 'A recognised brand means guests seek you out directly — not through Airbnb. That reduces commission costs and gives you control.',
                },
                {
                  icon: TrendingUp,
                  title: 'Improves direct bookings',
                  desc: "Direct bookings become achievable when potential guests know and trust your brand before they've even visited a listing.",
                },
                {
                  icon: ShieldCheck,
                  title: 'Increases trust',
                  desc: 'A consistent, visible brand communicates professionalism and reliability — the two things guests need to feel confident booking directly.',
                },
                {
                  icon: Users,
                  title: 'Supports scaling',
                  desc: "A brand can scale across multiple properties. A listing can't. Hosts who build a brand can grow their portfolio without starting from scratch each time.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-base-100 rounded-2xl border border-success/15 p-5 flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{title}</p>
                    <p className="text-xs text-base-content/55 mt-1 leading-relaxed">{desc}</p>
                  </div>
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
              <h2 className="text-3xl lg:text-4xl font-bold">Where Brand Growth Goes Wrong</h2>
            </div>
            <div className="space-y-3">
              {[
                {
                  mistake: 'Inconsistent visuals',
                  why: "When your property photos, social posts, and listing images all look different, there's no brand for guests to recognise. Consistency is the foundation — without it, nothing builds.",
                },
                {
                  mistake: 'No clear identity',
                  why: "A brand without a defined position is just noise. If you can't articulate what makes your property different or who it's for, neither can potential guests.",
                },
                {
                  mistake: 'Copying competitors',
                  why: 'Emulating other hosts produces a generic result. A brand is by definition distinctive — it needs to communicate something specific about you, not reflect everyone else.',
                },
                {
                  mistake: 'Focusing only on listings',
                  why: "Optimising listings improves conversions on the platform — but it doesn't build a brand. Brand growth happens outside the listing, through owned content and channels.",
                },
                {
                  mistake: 'No long-term strategy',
                  why: "Brand building requires sustained effort over months and years. Short bursts of activity followed by silence don't compound — only consistent presence does.",
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
              Brand growth fails when it&apos;s not consistent.
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
              <h2 className="text-3xl lg:text-4xl font-bold">How We Build STR Brands Properly</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  step: '1. Define your positioning',
                  detail:
                    'We start by clarifying who you are, who you serve, and what makes you different. Your brand position shapes everything that follows.',
                },
                {
                  step: '2. Maintain visual consistency',
                  detail:
                    'Every piece of content is produced to a consistent visual standard — colour, typography, layout, photography style — so recognition builds over time.',
                },
                {
                  step: '3. Align content with your brand',
                  detail:
                    'Content is never generic. Every post reinforces your positioning, communicates your identity, and moves your audience closer to trust.',
                },
                {
                  step: '4. Focus on long-term growth',
                  detail:
                    'We build brands with a long-term lens — consistent activity, compounding recognition, and a strategy that supports growth over months and years, not weeks.',
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
              Listing-Based vs Brand-Based Business
            </h2>
          </div>
          {/* Desktop */}
          <div className="hidden md:block overflow-hidden rounded-3xl border border-base-300 max-w-3xl mx-auto">
            <div className="grid grid-cols-3">
              <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/50">
                Area
              </div>
              <div className="bg-error/8 px-5 py-3 text-xs font-bold uppercase tracking-widest text-error/70 text-center">
                Listing-Based
              </div>
              <div className="bg-success/8 px-5 py-3 text-xs font-bold uppercase tracking-widest text-success/70 text-center">
                Brand-Based
              </div>
            </div>
            {[
              ['Growth model', 'Platform dependent', 'Independent growth'],
              ['Guest recognition', 'Low recognition', 'Strong identity'],
              ['Content approach', 'Inconsistent', 'Structured'],
              ['Growth potential', 'Limited growth', 'Scalable'],
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
              ['Growth model', 'Platform dependent', 'Independent growth'],
              ['Guest recognition', 'Low recognition', 'Strong identity'],
              ['Content approach', 'Inconsistent', 'Structured'],
              ['Growth potential', 'Limited growth', 'Scalable'],
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
                icon: TrendingUp,
                who: 'Hosts wanting direct bookings',
                desc: 'Brand growth is the foundation of a direct booking strategy. Without a recognisable brand, direct bookings remain aspirational rather than achievable.',
              },
              {
                icon: Building2,
                who: 'SA businesses',
                desc: 'Serviced accommodation operators who want a professional, established brand presence that reflects the quality and consistency of their properties.',
              },
              {
                icon: Users,
                who: 'Operators scaling portfolios',
                desc: 'Those adding properties who want a brand infrastructure that scales with them — not a fragmented set of individual listings.',
              },
              {
                icon: Sparkles,
                who: 'Hosts building long-term brands',
                desc: 'Hosts who understand that a brand is an asset that appreciates over time — and want to start building it now, before the competition does.',
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
                initials: 'CL',
                name: 'Claire L.',
                role: 'STR Host · Bath',
                quote:
                  'Before Assistophere I was just a listing. Now I have a brand people recognise. Guests who find me on Instagram message me directly to book — that never happened before I had a proper brand.',
              },
              {
                initials: 'JP',
                name: 'James P.',
                role: 'SA Operator · Birmingham',
                quote:
                  'The visual consistency work completely changed how my business looks online. Everything is aligned now — social, website, listings. It looks like a real business, not just someone renting out a flat.',
              },
              {
                initials: 'MH',
                name: 'Maya H.',
                role: 'Property Investor · Brighton',
                quote:
                  "I was sceptical about brand work until I saw the results. Six months in, my direct bookings have genuinely increased and I'm less dependent on Airbnb. The brand is doing real work.",
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
                  q: 'How long does brand growth take?',
                  a: 'Brand growth is a long-term investment. Most clients begin to see meaningful recognition and direct enquiry growth within three to six months of consistent brand activity. The compounding effect accelerates significantly after the six-month mark when audience familiarity builds.',
                },
                {
                  q: 'Can you work with my current brand?',
                  a: "Yes — we work with whatever brand assets you already have, whether that's a logo, colour palette, or just a property name. We improve, align, and build on what exists rather than starting from scratch unless a full rebrand is needed.",
                },
                {
                  q: 'Does this help with direct bookings?',
                  a: "Yes — brand growth is directly connected to direct booking success. A recognised, trusted brand is what makes guests confident enough to book outside of Airbnb. It's the long-term asset that makes direct booking sustainable.",
                },
                {
                  q: 'Is this only for social media?',
                  a: 'No — brand growth covers your entire presence, including how your brand translates across social media, your direct booking website, listing photos, and guest communications. Social media is the primary channel for building visibility, but the brand work extends across everything.',
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
                <Sparkles className="w-4 h-4" /> Brand Growth for STR
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold">
                Ready to Build a Brand That{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Grows Your STR Business?
                </span>
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed">
                Let&apos;s create a brand that supports your growth long-term. We don&apos;t just
                grow accounts — we build STR brands.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <button className="pulse-cta-bg btn btn-primary btn-lg rounded-full px-10 gap-2 shadow-lg">
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
                Airbnb Brand Growth UK · STR Brand Building · Serviced Accommodation Branding ·
                Direct Booking Brand Strategy
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
