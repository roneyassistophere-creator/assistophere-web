import React from 'react'
import Link from 'next/link'
import {
  Instagram,
  LayoutGrid,
  Star,
  Phone,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Palette,
  MessageSquare,
  ChevronRight,
  AlertTriangle,
  TrendingUp,
  Target,
  Building2,
  Layers,
  Zap,
  BarChart3,
  ImagePlus,
  Lightbulb,
  BookOpen,
  Megaphone,
} from 'lucide-react'
import type { Page } from '@/payload-types'

export const SocialMediaContentCreationView: React.FC<{ page: Page }> = () => {
  return (
    <div className="min-h-screen text-base-content overflow-x-hidden">
      <style>{`
        @keyframes pulse-ring-smcc {
          0%,100% { box-shadow: 0 0 0 0 hsl(var(--p)/.35); }
          50%      { box-shadow: 0 0 0 10px hsl(var(--p)/0); }
        }
        @keyframes smcc-fade-up {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .smcc-fade-1 { animation: smcc-fade-up .55s ease both .10s; }
        .smcc-fade-2 { animation: smcc-fade-up .55s ease both .22s; }
        .smcc-fade-3 { animation: smcc-fade-up .55s ease both .34s; }
        .smcc-fade-4 { animation: smcc-fade-up .55s ease both .46s; }
        .smcc-fade-5 { animation: smcc-fade-up .55s ease both .58s; }
        .pulse-cta-smcc { animation: pulse-ring-smcc 2.4s ease-in-out infinite; }
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
              <div className="smcc-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium">
                <ImagePlus className="w-4 h-4" />
                Content Creation · UK STR
              </div>
              <h1 className="smcc-fade-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight">
                Content Creation That Makes Your STR Brand{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Visible
                </span>
              </h1>
              <p className="smcc-fade-3 text-lg text-base-content/70 leading-relaxed max-w-lg">
                Assistophere creates structured social media content for UK hosts, helping you stay
                consistent, build your brand, and showcase your properties effectively.
              </p>
              <div className="smcc-fade-4 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm italic text-base-content/65">
                Content creation for STR businesses involves designing and planning posts that
                showcase properties, build brand presence, and attract potential guests.
              </div>
              <div className="smcc-fade-5 flex flex-wrap gap-3 pt-1">
                <button className="pulse-cta-smcc btn btn-primary btn-lg rounded-full px-8 gap-2">
                  <Phone className="w-4 h-4" /> Book a Discovery Call
                </button>
                <Link
                  href="/services/social-media-management"
                  className="btn btn-outline btn-lg rounded-full px-8 gap-2"
                >
                  <ArrowRight className="w-4 h-4" /> Back to Social Media Management
                </Link>
              </div>
              <div className="smcc-fade-5 flex items-center gap-3 pt-2">
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
                    Structured content for UK STR businesses
                  </p>
                </div>
              </div>
            </div>

            {/* Hero visual — content calendar preview */}
            <div className="hidden lg:block">
              <div className="relative rounded-3xl border border-base-300 bg-base-200/60 backdrop-blur-sm p-6 shadow-xl">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center">
                      <Instagram className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold">Content Calendar</p>
                      <p className="text-[10px] text-base-content/40">April 2026 · Week 2</p>
                    </div>
                  </div>
                  <span className="badge badge-primary badge-sm">Active</span>
                </div>
                <div className="space-y-2 mb-4">
                  {[
                    {
                      day: 'Mon',
                      type: 'Property Showcase',
                      status: 'Published',
                      colour: 'bg-success/15 text-success',
                    },
                    {
                      day: 'Wed',
                      type: 'Guest Experience Post',
                      status: 'Scheduled',
                      colour: 'bg-primary/12 text-primary',
                    },
                    {
                      day: 'Fri',
                      type: 'Local Area Feature',
                      status: 'Scheduled',
                      colour: 'bg-primary/12 text-primary',
                    },
                    {
                      day: 'Sat',
                      type: 'Direct Booking Prompt',
                      status: 'Draft',
                      colour: 'bg-base-300 text-base-content/50',
                    },
                  ].map(({ day, type, status, colour }) => (
                    <div
                      key={day}
                      className="flex items-center gap-3 bg-base-100 rounded-xl px-3 py-2.5 border border-base-300"
                    >
                      <span className="text-[10px] font-bold text-base-content/40 w-6">{day}</span>
                      <span className="text-xs font-medium flex-1">{type}</span>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${colour}`}
                      >
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { label: 'Property', icon: Building2, bg: 'bg-primary/10' },
                    { label: 'Branded', icon: Palette, bg: 'bg-secondary/10' },
                    { label: 'Promo', icon: Megaphone, bg: 'bg-success/10' },
                  ].map(({ label, icon: Icon, bg }) => (
                    <div
                      key={label}
                      className={`${bg} rounded-xl py-3 flex flex-col items-center gap-1`}
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
                Content Isn&apos;t Just Posting. It&apos;s Positioning.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-base-100 rounded-2xl border border-error/20 p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-error/70 mb-4">
                  Most STR content is
                </p>
                <div className="space-y-3">
                  {[
                    [
                      'Random',
                      "Posts go live whenever there's a spare moment — no theme, no plan, no consistency.",
                    ],
                    [
                      'Inconsistent',
                      'Different fonts, colours, and tones across every post means no brand recognition builds.',
                    ],
                    [
                      'Repetitive',
                      'The same property photo, same caption style, same angle — audiences disengage quickly.',
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
                  Good content should
                </p>
                <div className="space-y-3">
                  {[
                    [
                      'Represent your brand',
                      'Every post should feel like it came from the same business — same voice, same visuals, same standards.',
                    ],
                    [
                      'Showcase your properties',
                      'Content that makes potential guests want to stay, long before they ever reach your listing.',
                    ],
                    [
                      'Attract attention',
                      'Structured, high-quality content gets shared, saved, and remembered — driving real awareness.',
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
              <h2 className="text-3xl lg:text-4xl font-bold">Why STR Content Fails</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  point: 'No content plan',
                  detail:
                    "Without a structured plan, content creation becomes reactive and sporadic. There's no narrative arc, no themes, no direction — just individual posts with no cumulative impact.",
                },
                {
                  point: 'Inconsistent visuals',
                  detail:
                    'When every post looks different — different filters, fonts, and layouts — the brand never becomes recognisable. Potential guests scroll past without registering who you are.',
                },
                {
                  point: 'Lack of creativity',
                  detail:
                    'Reusing the same shots, captions, and formats leads to audience fatigue. Fresh, creative content is what keeps followers engaged and coming back.',
                },
                {
                  point: 'No brand identity',
                  detail:
                    "Content without a clear brand voice and visual identity is anonymous. There's nothing to differentiate your property from thousands of others in the same market.",
                },
                {
                  point: 'Posting without purpose',
                  detail:
                    'Content that has no clear call to action or strategic goal generates impressions but no meaningful outcomes — no enquiries, no bookings, no growth.',
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
              Without structure, content doesn&apos;t create impact.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT GOOD CONTENT DOES ───────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Zap className="w-4 h-4" /> The Standard
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">What STR Content Should Achieve</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              {
                icon: Building2,
                title: 'Showcase Properties',
                desc: 'Every piece of content should highlight the key features and spaces of your property — turning a scroll into a desire to stay.',
              },
              {
                icon: Palette,
                title: 'Build Brand Identity',
                desc: 'Consistent content creates a recognisable presence over time. Guests who see your brand regularly are far more likely to trust and book.',
              },
              {
                icon: LayoutGrid,
                title: 'Maintain Consistency',
                desc: 'A predictable, reliable posting cadence keeps your audience engaged and signals to the algorithm that your account is worth showing.',
              },
              {
                icon: Target,
                title: 'Support Business Goals',
                desc: 'Content should be mapped to your booking calendar, direct booking strategy, and seasonal demand — not just what looks good.',
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

      {/* ── WHAT WE CREATE ───────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Layers className="w-4 h-4" /> Our Scope
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">What Our Content Creation Covers</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1.5fr] gap-px bg-base-300 rounded-3xl overflow-hidden border border-base-300">
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              Content Type
            </div>
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              What We Create
            </div>
            <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
              Outcome
            </div>
            {[
              {
                type: 'Property-Focused Content',
                icon: Building2,
                items: [
                  'Interior and exterior showcase posts',
                  'Highlighting key features and amenities',
                  'Presenting spaces in a clear, enticing way',
                ],
                outcome:
                  "Potential guests visualise exactly what they're booking before reading a single listing detail.",
              },
              {
                type: 'Branded Posts',
                icon: Palette,
                items: [
                  'Visually consistent design across all posts',
                  'Aligned messaging and tone of voice',
                  'Structured layouts that reflect your brand',
                ],
                outcome:
                  'A recognisable brand that guests remember and trust — before they ever visit your listing.',
              },
              {
                type: 'Educational Content',
                icon: BookOpen,
                items: [
                  'Guest tips and helpful property information',
                  'Local area guides and recommendations',
                  'Value-driven posts that position you as an expert',
                ],
                outcome:
                  'Content that adds genuine value — building authority and keeping your audience engaged.',
              },
              {
                type: 'Promotional Content',
                icon: Megaphone,
                items: [
                  'Highlighting special offers and availability',
                  'Seasonal promotions and direct booking prompts',
                  'Content designed to drive enquiries and action',
                ],
                outcome:
                  'Promotional posts that connect content to commercial outcomes — not just likes.',
              },
              {
                type: 'Content Planning',
                icon: Lightbulb,
                items: [
                  'Structured monthly content ideas and themes',
                  'Organised posting calendar with clear output',
                  'Content that maintains consistency over time',
                ],
                outcome:
                  'A reliable pipeline of content — no blank calendar weeks, no scrambling for ideas.',
              },
            ].map(({ type, icon: Icon, items, outcome }) => (
              <React.Fragment key={type}>
                <div className="bg-base-100 px-5 py-5 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-sm mt-1.5">{type}</span>
                </div>
                <div className="bg-base-100 px-5 py-5">
                  <ul className="space-y-1.5">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-base-content/70"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
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
            The result: content that builds presence and actively supports your business.
          </p>
        </div>
      </section>

      {/* ── HOW CONTENT FITS YOUR STRATEGY ──────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-success/10 border border-success/25 text-success text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4" /> Strategic Fit
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Content Supports Your Entire Brand</h2>
              <p className="text-base-content/60 mt-4 leading-relaxed">
                Content doesn&apos;t exist in isolation. When properly structured, it connects every
                part of your business and keeps potential guests engaged across every touchpoint.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: LayoutGrid,
                  title: 'Your listings',
                  desc: 'Strong social content builds trust before guests even reach your Airbnb or OTA listing — reducing friction and increasing conversion.',
                },
                {
                  icon: TrendingUp,
                  title: 'Your website',
                  desc: "Content drives traffic to your direct booking site, building an audience that converts outside of Airbnb's platform.",
                },
                {
                  icon: Target,
                  title: 'Your direct booking strategy',
                  desc: 'Structured content creates the brand awareness and trust that makes direct booking the natural next step for your audience.',
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
              Without content, your brand stays invisible.
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
              <h2 className="text-3xl lg:text-4xl font-bold">Where Content Creation Goes Wrong</h2>
            </div>
            <div className="space-y-3">
              {[
                {
                  mistake: 'Posting without a plan',
                  why: "Unplanned content has no cumulative effect. You may fill a calendar but there's no narrative, no audience journey — just individual posts that don't connect.",
                },
                {
                  mistake: 'Inconsistent style',
                  why: 'When every post looks different, your brand never becomes recognisable. Followers need to identify your content instantly — that only happens through visual consistency.',
                },
                {
                  mistake: 'Low-quality visuals',
                  why: 'Blurry images, poor lighting, and amateur layouts signal a low-standard operation. Visual quality is the first thing potential guests judge your property on.',
                },
                {
                  mistake: 'Copying others',
                  why: 'Replicating competitor content might fill a schedule but it communicates nothing unique about your property or brand. Differentiation requires originality.',
                },
                {
                  mistake: 'No clear direction',
                  why: "Content without a goal is just noise. Every post should serve a purpose — whether that's brand awareness, engagement, or a direct booking prompt.",
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
              Content fails when it&apos;s not structured.
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
              <h2 className="text-3xl lg:text-4xl font-bold">How We Create Content Properly</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  step: '1. Plan content in advance',
                  detail:
                    'Every month starts with a structured content plan — themes, post types, and purposes defined before a single asset is created. No last-minute scrambles.',
                },
                {
                  step: '2. Maintain consistency',
                  detail:
                    'Content is produced and scheduled to go live reliably, week on week. Consistency is what builds audiences and satisfies the algorithm.',
                },
                {
                  step: '3. Align visuals with your brand',
                  detail:
                    'Every asset follows your brand guidelines — or we help you define them. Colour, typography, layout, and tone are consistent across every post.',
                },
                {
                  step: '4. Focus on clarity and presentation',
                  detail:
                    'We prioritise content that communicates clearly — showcasing your property with high presentation standards that reflect the quality of your guest experience.',
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
            <h2 className="text-3xl lg:text-4xl font-bold">Random Content vs Structured Content</h2>
          </div>
          {/* Desktop table */}
          <div className="hidden md:block overflow-hidden rounded-3xl border border-base-300 max-w-3xl mx-auto">
            <div className="grid grid-cols-3">
              <div className="bg-base-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-base-content/50">
                Area
              </div>
              <div className="bg-error/8 px-5 py-3 text-xs font-bold uppercase tracking-widest text-error/70 text-center">
                Random Content
              </div>
              <div className="bg-success/8 px-5 py-3 text-xs font-bold uppercase tracking-widest text-success/70 text-center">
                Structured Content
              </div>
            </div>
            {[
              ['Posting cadence', 'Inconsistent', 'Consistent'],
              ['Brand perception', 'No identity', 'Clear branding'],
              ['Audience impact', 'Low impact', 'Strong presence'],
              ['Content approach', 'Reactive', 'Planned'],
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
          {/* Mobile cards */}
          <div className="md:hidden space-y-3 max-w-sm mx-auto">
            {[
              ['Posting cadence', 'Inconsistent', 'Consistent'],
              ['Brand perception', 'No identity', 'Clear branding'],
              ['Audience impact', 'Low impact', 'Strong presence'],
              ['Content approach', 'Reactive', 'Planned'],
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
                icon: Lightbulb,
                who: 'Hosts struggling with content',
                desc: "If you're not sure what to post, or you keep putting it off, you need a content plan — not just inspiration.",
              },
              {
                icon: Building2,
                who: 'SA businesses',
                desc: 'Serviced accommodation operators who want professional, consistent content that reflects the quality of their properties.',
              },
              {
                icon: Palette,
                who: 'Operators building a brand',
                desc: 'Those who understand that a cohesive brand built through content compounds over time — and want to start now.',
              },
              {
                icon: LayoutGrid,
                who: 'Hosts wanting consistency',
                desc: "Hosts who know regular posting matters but don't have the systems or time to make it happen reliably every week.",
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
                initials: 'SK',
                name: 'Sarah K.',
                role: 'STR Host · Birmingham',
                quote:
                  "Before Assistophere, I had no idea what to post and ended up posting nothing for weeks. Now there's a plan, content goes out every week, and my account finally looks like a proper business.",
              },
              {
                initials: 'MP',
                name: 'Marcus P.',
                role: 'SA Operator · Bristol',
                quote:
                  "The content they create genuinely reflects the quality of my properties. It's consistent, it looks professional, and it's completely taken the stress of social media off my plate.",
              },
              {
                initials: 'RA',
                name: 'Rachel A.',
                role: 'Property Host · Edinburgh',
                quote:
                  'I was posting randomly and wondering why nothing was happening. Having structured content with a clear plan behind it changed everything. My followers grew and I started getting DM enquiries.',
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
                  q: 'What type of content do you create?',
                  a: 'We create property showcase posts, branded graphics, educational content, seasonal promotions, and direct booking prompts — all structured around your brand and goals. Content is primarily designed for Instagram and Facebook, with formats tailored to each platform.',
                },
                {
                  q: 'Do you provide content ideas?',
                  a: 'Yes — content planning is a core part of what we do. We build a monthly content calendar with ideas, themes, and post types mapped out in advance. You review and approve before anything is created or scheduled.',
                },
                {
                  q: 'Can this help with bookings?',
                  a: 'Content creation supports bookings indirectly but meaningfully. Structured, professional content builds brand awareness and trust — which leads to direct enquiries, website traffic, and a warmer audience for your direct booking channel. Most clients begin to see direct enquiries within two to four months of consistent content.',
                },
                {
                  q: 'How often is content created?',
                  a: "Content creation frequency is agreed as part of your package. Standard management produces three to five posts per week, plus stories and supplementary content. Everything is planned monthly so you always know what's coming and can approve or adjust before it goes live.",
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
                <ImagePlus className="w-4 h-4" /> Content Creation for STR
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold">
                Ready to Create Content That{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Actually Works?
                </span>
              </h2>
              <p className="text-base-content/65 text-lg leading-relaxed">
                Let&apos;s build a structured content approach for your STR business. We don&apos;t
                just create content — we structure how your brand shows up.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <button className="pulse-cta-smcc btn btn-primary btn-lg rounded-full px-10 gap-2 shadow-lg">
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
                Airbnb Content Creation UK · STR Social Media Content · Airbnb Instagram Content ·
                Serviced Accommodation Marketing Content
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
