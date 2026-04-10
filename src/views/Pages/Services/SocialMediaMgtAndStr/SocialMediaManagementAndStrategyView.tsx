import React from 'react'
import {
  Instagram,
  LayoutGrid,
  Star,
  Phone,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Calendar,
  Palette,
  MessageSquare,
  ChevronRight,
  AlertTriangle,
  TrendingUp,
  Megaphone,
  Target,
  Building2,
  Zap,
  Smartphone,
  Layers,
  Globe,
  BarChart3,
} from 'lucide-react'
import type { Page } from '@/payload-types'

export const SocialMediaManagementAndStrategyView: React.FC<{ page: Page }> = () => {
  return (
    <div className="min-h-screen text-base-content overflow-x-hidden">
      <style>{`
        @keyframes pulse-ring-smm {
          0%,100% { box-shadow: 0 0 0 0 hsl(var(--p)/.35); }
          50%      { box-shadow: 0 0 0 10px hsl(var(--p)/0); }
        }
        @keyframes smm-fade-up {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .smm-fade-1 { animation: smm-fade-up .55s ease both .10s; }
        .smm-fade-2 { animation: smm-fade-up .55s ease both .22s; }
        .smm-fade-3 { animation: smm-fade-up .55s ease both .34s; }
        .smm-fade-4 { animation: smm-fade-up .55s ease both .46s; }
        .smm-fade-5 { animation: smm-fade-up .55s ease both .58s; }
        .pulse-cta-smm { animation: pulse-ring-smm 2.4s ease-in-out infinite; }
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
              <div className="smm-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium">
                <Instagram className="w-4 h-4" />
                Social Media Management · UK STR
              </div>
              <h1 className="smm-fade-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight">
                Social Media Management That Supports Your{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  STR Growth
                </span>
              </h1>
              <p className="smm-fade-3 text-lg text-base-content/70 leading-relaxed max-w-lg">
                Assistophere helps UK hosts manage social media with structured content and
                strategy, building brand presence and supporting direct booking growth.
              </p>
              <div className="smm-fade-4 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm italic text-base-content/65">
                Social media management for STR businesses involves creating content, maintaining
                consistency, and building a brand presence to attract and convert potential guests.
              </div>
              <div className="smm-fade-5 flex flex-wrap gap-3 pt-1">
                <button className="pulse-cta-smm btn btn-primary btn-lg rounded-full px-8 gap-2">
                  <Phone className="w-4 h-4" /> Book a Discovery Call
                </button>
                <button className="btn btn-outline btn-lg rounded-full px-8 gap-2">
                  <ArrowRight className="w-4 h-4" /> See How It Works
                </button>
              </div>
              <div className="smm-fade-5 flex items-center gap-3 pt-2">
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
                    Trusted by UK STR hosts and SA operators
                  </p>
                </div>
              </div>
            </div>

            {/* Hero visual — Instagram-style grid preview */}
            <div className="hidden lg:block">
              <div className="relative rounded-3xl border border-base-300 bg-base-200/60 backdrop-blur-sm p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold">@yourstrbrand</p>
                    <p className="text-[10px] text-base-content/40">Serviced Accommodation · UK</p>
                  </div>
                  <div className="ml-auto flex gap-4 text-center">
                    {[
                      ['24', 'Posts'],
                      ['1.2k', 'Followers'],
                      ['340', 'Reach'],
                    ].map(([v, l]) => (
                      <div key={l}>
                        <p className="text-xs font-extrabold">{v}</p>
                        <p className="text-[9px] text-base-content/40">{l}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* 3×3 grid */}
                <div className="grid grid-cols-3 gap-1.5 mb-4">
                  {[
                    { bg: 'bg-primary/15', label: 'Property Showcase', icon: Building2 },
                    { bg: 'bg-secondary/12', label: 'Guest Experience', icon: Star },
                    { bg: 'bg-success/10', label: 'Local Area', icon: Globe },
                    { bg: 'bg-warning/12', label: 'Behind the Scenes', icon: Layers },
                    { bg: 'bg-primary/20', label: 'Amenities', icon: Zap },
                    { bg: 'bg-accent/10', label: 'Direct Booking', icon: TrendingUp },
                    { bg: 'bg-secondary/15', label: 'Review Feature', icon: MessageSquare },
                    { bg: 'bg-success/12', label: 'Seasonal Promo', icon: Calendar },
                    { bg: 'bg-primary/10', label: 'Brand Story', icon: Palette },
                  ].map(({ bg, label, icon: Icon }, i) => (
                    <div
                      key={i}
                      className={`${bg} rounded-xl aspect-square flex flex-col items-center justify-center gap-1 p-2`}
                    >
                      <Icon className="w-4 h-4 text-base-content/40" />
                      <p className="text-[9px] text-base-content/40 text-center leading-tight">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="bg-base-100 rounded-xl border border-primary/20 px-4 py-2.5 flex items-center justify-between">
                  <span className="text-xs text-base-content/50">Content scheduled this week</span>
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
              <LayoutGrid className="w-4 h-4" /> The Real Picture
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Social Media Isn&apos;t Just Posting Content
            </h2>
            <p className="text-base-content/65 text-lg leading-relaxed">
              Most STR businesses either don&apos;t post at all, or post inconsistently without any
              clear direction. For short-term rentals, social media is one of the few channels you
              fully control — but only if it&apos;s managed properly.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {[
                {
                  icon: TrendingUp,
                  title: 'Build trust',
                  desc: 'Consistent, professional content signals that your property and business are credible.',
                },
                {
                  icon: Building2,
                  title: 'Showcase properties',
                  desc: 'Show potential guests exactly what they&apos;re booking before they ever visit a listing.',
                },
                {
                  icon: Target,
                  title: 'Attract direct bookings',
                  desc: 'Social media builds the audience and brand presence that drives traffic outside of Airbnb.',
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-base-100 rounded-2xl border border-primary/15 p-5 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-sm">{title}</p>
                  <p className="text-xs text-base-content/55 mt-1 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-base-content/55 text-sm italic">
              Without structure, social media becomes inconsistent and ineffective.
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
                Why Most STR Social Media Doesn&apos;t Work
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  point: 'Inconsistent posting',
                  detail:
                    "Sporadic content signals an inactive brand. The algorithm deprioritises irregular accounts, and potential guests don't build familiarity or trust.",
                },
                {
                  point: 'No clear strategy',
                  detail:
                    "Posting without a plan means content doesn't connect to any business goal — it's activity for the sake of activity, not results.",
                },
                {
                  point: 'Low-quality content',
                  detail:
                    'Blurry photos, poor captions, and generic text fail to communicate what makes your property worth booking.',
                },
                {
                  point: 'No branding',
                  detail:
                    "When your content looks different every week, there's no recognition. A cohesive visual identity is what makes a brand memorable.",
                },
                {
                  point: 'No connection to bookings',
                  detail:
                    "Social media only drives revenue when it's structured with a clear path from content to enquiry to booking.",
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
              Posting without direction doesn&apos;t lead to results.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT IT SHOULD LOOK LIKE ─────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <CheckCircle2 className="w-4 h-4" /> The Standard
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              What Proper Social Media Management Looks Like
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              {
                icon: Calendar,
                title: 'Consistent Presence',
                desc: 'Regular, scheduled posting maintained week on week — no gaps, no missed weeks. The algorithm rewards consistency, and so do potential guests.',
              },
              {
                icon: Palette,
                title: 'Clear Branding',
                desc: 'A recognisable visual identity across every post — colour palette, typography, photography style, and tone all aligned to your property and audience.',
              },
              {
                icon: Building2,
                title: 'Property Showcase',
                desc: "Content that deliberately highlights your property's best features, spaces, and guest experience — turning followers into enquiries.",
              },
              {
                icon: MessageSquare,
                title: 'Audience Engagement',
                desc: 'Content that connects with the right people — potential guests, returning guests, and referral sources — not just empty impressions.',
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
              What Our Social Media Management Covers
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1.5fr] gap-px bg-base-300 rounded-3xl overflow-hidden border border-base-300">
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              Area
            </div>
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              What We Do
            </div>
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              Outcome
            </div>
            {[
              {
                area: 'Content Creation',
                icon: Palette,
                tasks: [
                  'Designing branded post graphics and visuals',
                  'Writing captions and copy aligned to your audience',
                  'Structuring content themes to cover different aspects of your property',
                ],
                outcome:
                  'Professional, on-brand content that showcases your property consistently.',
              },
              {
                area: 'Posting & Scheduling',
                icon: Calendar,
                tasks: [
                  'Maintaining a consistent posting schedule across platforms',
                  'Planning content calendars in advance',
                  'Managing publish times for maximum reach',
                ],
                outcome: 'No gaps, no last-minute scrambles — your content runs like clockwork.',
              },
              {
                area: 'Brand Development',
                icon: Palette,
                tasks: [
                  'Creating or refining your visual identity for social',
                  'Aligning content style across all posts and platforms',
                  'Improving the overall presentation and professionalism',
                ],
                outcome: 'A recognisable, credible brand that guests remember.',
              },
              {
                area: 'Platform Management',
                icon: Smartphone,
                tasks: [
                  'Managing your Instagram, Facebook, or TikTok accounts',
                  'Keeping content organised and accounts active',
                  'Monitoring performance and adjusting accordingly',
                ],
                outcome: 'Accounts that stay active, consistent, and growing.',
              },
              {
                area: 'Strategy Alignment',
                icon: Target,
                tasks: [
                  'Linking content themes with your booking and revenue goals',
                  'Supporting direct booking growth through social presence',
                  'Connecting social activity to broader marketing activity',
                ],
                outcome:
                  'Social media that contributes to your business — not just vanity metrics.',
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
            The result: a structured social media presence that actively supports your business.
          </p>
        </div>
      </section>

      {/* ── CONNECTS TO BUSINESS ─────────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-success/10 border border-success/25 text-success text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4" /> Business Impact
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Social Media Supports Direct Bookings
              </h2>
              <p className="text-base-content/60 mt-4 leading-relaxed">
                Social media doesn&apos;t exist in isolation. It works alongside every other part of
                your business to build the visibility and trust that convert strangers into paying
                guests.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: Globe,
                  title: 'Your website',
                  desc: 'Social drives traffic to your direct booking site, reducing reliance on Airbnb and OTAs.',
                },
                {
                  icon: Megaphone,
                  title: 'Your listings',
                  desc: 'Strong social proof and branding increases trust in your listings before guests even click book.',
                },
                {
                  icon: Palette,
                  title: 'Your overall brand',
                  desc: 'Consistent social media is what turns a property into a recognised, trusted hospitality brand.',
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
              <h2 className="text-3xl lg:text-4xl font-bold">Where Social Media Goes Wrong</h2>
            </div>
            <div className="space-y-3">
              {[
                {
                  mistake: 'Posting randomly',
                  why: "No schedule means no habit and no audience growth. Followers who see one post a month forget you exist by the time they're ready to book.",
                },
                {
                  mistake: 'Inconsistent visuals',
                  why: "When every post looks different, there's no brand recognition. Guests need to recognise your content instantly — that only happens with consistency.",
                },
                {
                  mistake: 'No clear messaging',
                  why: "Content that doesn't say anything specific doesn't motivate anyone to do anything. Every post should have a purpose.",
                },
                {
                  mistake: 'Focusing only on aesthetics',
                  why: "Looking good is necessary but not sufficient. Without a strategy connecting content to bookings, beautiful posts don't pay the bills.",
                },
                {
                  mistake: 'No link to business goals',
                  why: 'Social media managed in isolation from your booking strategy, website, and revenue targets is just a hobby — not a business channel.',
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
              Social media fails when it lacks structure.
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
                How We Manage Social Media Properly
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  step: '1. Structured content plans',
                  detail:
                    'We build a monthly content calendar that covers your property, audience, and goals — so every post has a reason to exist.',
                },
                {
                  step: '2. Maintained consistency',
                  detail:
                    'We post on schedule, every week, across agreed platforms. No gaps, no exceptions — the algorithm and your audience both depend on it.',
                },
                {
                  step: '3. Brand-aligned visuals',
                  detail:
                    'Every piece of content follows your brand guidelines — or we help you build them. Cohesion across every post creates recognisability.',
                },
                {
                  step: '4. Goal-connected content',
                  detail:
                    'Content themes are mapped to your booking calendar, seasonal demand, and direct booking goals — not just what looks good.',
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
            <h2 className="text-3xl lg:text-4xl font-bold">Unmanaged vs Managed Social Media</h2>
          </div>
          <div className="hidden md:block overflow-hidden rounded-3xl border border-base-300 max-w-3xl mx-auto">
            <div className="grid grid-cols-3">
              <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/50">
                Area
              </div>
              <div className="bg-error/8 px-5 py-3 text-xs font-bold uppercase tracking-widest text-error/70 text-center">
                Unmanaged
              </div>
              <div className="bg-success/8 px-5 py-3 text-xs font-bold uppercase tracking-widest text-success/70 text-center">
                Managed
              </div>
            </div>
            {[
              ['Posting cadence', 'Inconsistent', 'Structured'],
              ['Audience growth', 'Low engagement', 'Improved presence'],
              ['Content direction', 'No direction', 'Clear strategy'],
              ['Brand perception', 'Weak branding', 'Strong identity'],
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
              ['Posting cadence', 'Inconsistent', 'Structured'],
              ['Audience growth', 'Low engagement', 'Improved presence'],
              ['Content direction', 'No direction', 'Clear strategy'],
              ['Brand perception', 'Weak branding', 'Strong identity'],
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
                desc: 'If you want to reduce Airbnb dependency and build a channel you control, social media is a core part of that strategy.',
              },
              {
                icon: Building2,
                who: 'SA businesses',
                desc: 'Serviced accommodation operators who want a professional, consistent presence that reflects the quality of their properties.',
              },
              {
                icon: Palette,
                who: 'Operators building a brand',
                desc: 'Those who understand that a recognisable brand compounds over time — and want to start building it now.',
              },
              {
                icon: Calendar,
                who: 'Hosts needing consistency',
                desc: "Hosts who know they should be active on social media but don't have the time, skills, or systems to maintain it.",
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
                initials: 'JB',
                name: 'James B.',
                role: 'STR Host · Manchester',
                quote:
                  'I had no idea how much difference consistent Instagram content would make. Within three months of having Assistophere manage it, I had my first direct booking enquiry come in through DMs. That never happened before.',
              },
              {
                initials: 'NK',
                name: 'Natalie K.',
                role: 'SA Operator · London',
                quote:
                  'My accounts looked amateur before. Now they look professional and consistent. The branding work they did has completely changed how my business comes across online. Guests comment on it.',
              },
              {
                initials: 'DR',
                name: 'David R.',
                role: 'Property Investor · Leeds',
                quote:
                  'I tried to manage social media myself but kept falling behind. Handing it over meant it actually gets done, every week, without me thinking about it. The consistency alone was worth it.',
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
                  q: 'Which platforms do you manage?',
                  a: "We primarily manage Instagram and Facebook for STR businesses, as these are the highest-value platforms for property showcase and direct booking growth. TikTok management is available depending on your business type and goals. We'll recommend the right platforms based on your audience during the discovery call.",
                },
                {
                  q: 'Do you create the content?',
                  a: "Yes — we handle content creation end to end, including post design, caption writing, hashtag strategy, and scheduling. For property photography, we'll advise on what we need and how to supply it, or we can recommend a local photographer if required.",
                },
                {
                  q: 'Can social media generate bookings?',
                  a: 'Yes, though it works differently from paid advertising. Social media builds brand awareness, trust, and an audience over time — which then converts through DM enquiries, website traffic, and direct booking links. Most clients begin to see direct enquiries within two to four months of consistent, structured management.',
                },
                {
                  q: 'How often do you post?',
                  a: 'Posting frequency is agreed as part of your package. Standard management includes three to five posts per week, with stories and engagement activity on top. We build a content calendar monthly so you can review and approve the plan before anything goes live.',
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
                <Instagram className="w-4 h-4" /> Social Media Management
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold">
                Ready to Build a Strong{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Social Media Presence?
                </span>
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed">
                Let&apos;s create a structured approach that supports your growth. We don&apos;t
                just manage social media — we structure it to support your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <button className="pulse-cta-smm btn btn-primary btn-lg rounded-full px-10 gap-2 shadow-lg">
                  <Phone className="w-4 h-4" /> Book a Discovery Call
                </button>
                <button className="btn btn-outline btn-lg rounded-full px-8 gap-2">
                  <ArrowRight className="w-4 h-4" /> See How It Works
                </button>
              </div>
              <p className="text-xs text-base-content/40 pt-2">
                Airbnb Social Media Management UK · STR Social Media Marketing · Serviced
                Accommodation Social Media · Direct Booking Strategy
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
