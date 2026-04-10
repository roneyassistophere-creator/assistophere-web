import React from 'react'
import type { Page } from '@/payload-types'
import Link from 'next/link'
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Layers,
  Users,
  Star,
  Palette,
  ImageIcon,
  Brush,
  Layout,
  Eye,
  Megaphone,
  TrendingUp,
  ChevronDown,
  CalendarCheck,
} from 'lucide-react'
import { FaqItem } from './FaqItem'

const faqs = [
  {
    q: 'What kind of graphics do you create?',
    a: 'We create listing visual enhancements, branded content, marketing graphics, and presentation assets — everything needed to make your short-term rental listing stand out visually across all platforms.',
  },
  {
    q: 'Can this improve bookings?',
    a: 'Strong visuals drive attention and clicks. When a listing looks more professional and clearly communicates its features, guests are more likely to engage and book. Design directly influences how guests perceive your property.',
  },
  {
    q: 'Do you match existing branding?',
    a: 'Yes. We align all visual content with your existing brand identity — colour palette, style, and tone — to ensure everything looks consistent and intentional across your listings and platforms.',
  },
  {
    q: 'Can this be used across platforms?',
    a: 'Absolutely. The graphics we create are designed to work across Airbnb, Booking.com, VRBO, and your own direct booking channels, giving you a consistent and professional presence everywhere.',
  },
]

const whatWeCreate = [
  {
    icon: <ImageIcon className="w-5 h-5 text-primary" />,
    title: 'Listing Visual Enhancements',
    items: ['Feature highlights and callouts', 'Key information overlays', 'Structured image flow'],
    outcome: 'Guests instantly understand what makes your property worth booking',
  },
  {
    icon: <Brush className="w-5 h-5 text-primary" />,
    title: 'Branded Content',
    items: [
      'Consistent visual style across all assets',
      'Brand alignment and identity',
      'Stronger, recognisable presence',
    ],
    outcome: 'Your listing looks intentional, not accidental',
  },
  {
    icon: <Megaphone className="w-5 h-5 text-primary" />,
    title: 'Marketing Graphics',
    items: [
      'Visuals for promotional campaigns',
      'Content designed for digital platforms',
      'Ready-to-use design assets',
    ],
    outcome: 'Professional promotional materials ready to deploy',
  },
  {
    icon: <Layout className="w-5 h-5 text-primary" />,
    title: 'Presentation Improvements',
    items: ['Cleaner, clearer layouts', 'Improved visual hierarchy', 'Better readability and flow'],
    outcome: 'Guests know exactly where to look and what to focus on',
  },
]

const contentItems = [
  { label: 'Listing Cover Graphic', status: 'Created', color: 'text-success' },
  { label: 'Branded Feature Template', status: 'In Review', color: 'text-warning' },
  { label: 'Marketing Banner — Summer', status: 'Created', color: 'text-success' },
  { label: 'Property Highlight Overlay', status: 'Draft', color: 'text-base-content/50' },
  { label: 'Platform Thumbnail Set', status: 'Created', color: 'text-success' },
]

const problemCards = [
  {
    icon: <XCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />,
    title: 'No Visual Brand Identity',
    desc: 'Listings without a consistent visual identity look like everyone else — nothing stands out, nothing feels intentional.',
  },
  {
    icon: <XCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />,
    title: 'Inconsistent Visuals',
    desc: 'Mixing different styles and formats undermines credibility and makes the listing look unpolished and cobbled together.',
  },
  {
    icon: <XCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />,
    title: 'Unclear Presentation',
    desc: "Guests can't quickly understand the key features and benefits of the property — they scroll past instead of clicking in.",
  },
  {
    icon: <XCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />,
    title: 'Basic Image Usage',
    desc: 'Plain photos without structure or context fail to highlight what makes the listing worth booking over the competition.',
  },
  {
    icon: <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />,
    title: 'No Visual Hierarchy',
    desc: 'Without structure, guests struggle to know where to look, what matters most, and what makes your property different.',
  },
]

const approachPoints = [
  {
    icon: <Eye className="w-5 h-5 text-primary" />,
    title: 'Clarity and Impact First',
    desc: 'Every visual is designed to communicate something specific. We focus on what guests need to understand — not just what looks nice.',
  },
  {
    icon: <Brush className="w-5 h-5 text-primary" />,
    title: 'Aligned to Your Listing',
    desc: 'Design reflects what makes your property different. We use your listing details, photography, and features to build assets that are specific to you.',
  },
  {
    icon: <Layers className="w-5 h-5 text-primary" />,
    title: 'Built for Consistency',
    desc: 'All assets work together as a cohesive visual system. Guests see the same style across listings, platforms, and promotional materials.',
  },
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    title: 'Designed for Real Behaviour',
    desc: 'We design for how guests actually browse and make decisions — not for portfolio aesthetics. Function and purpose drive every choice.',
  },
]

const comparisonRows = [
  {
    area: 'Presence',
    before: 'Looks similar to every other listing in the market',
    after: 'Stands out visually in a saturated search result',
  },
  {
    area: 'Identity',
    before: 'No visual brand — random photos, mixed styles',
    after: 'Strong, consistent identity guests recognise and trust',
  },
  {
    area: 'Visuals',
    before: 'Average, unstructured images with no flow',
    after: 'Structured, purposeful visuals that guide the guest',
  },
  {
    area: 'First Impression',
    before: 'Forgettable listing that blends into the rest',
    after: 'Memorable presentation that drives more clicks',
  },
]

const whoItIsFor = [
  {
    icon: <TrendingUp className="w-5 h-5 text-primary" />,
    label: 'Hosts in competitive markets who need to stand out from similar listings',
  },
  {
    icon: <Palette className="w-5 h-5 text-primary" />,
    label: 'Operators building a recognisable brand across multiple properties',
  },
  {
    icon: <Megaphone className="w-5 h-5 text-primary" />,
    label: 'Hosts running promotions who need professional marketing graphics',
  },
  {
    icon: <Layout className="w-5 h-5 text-primary" />,
    label: 'Anyone who wants a cleaner, more professional listing presentation',
  },
]

export const GraphicalContentCreationView: React.FC<{ page: Page }> = ({ page }) => {
  return (
    <>
      <style>{`
        @keyframes gccFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .gcc-fade-1 { animation: gccFadeUp 0.55s ease both 0.05s; }
        .gcc-fade-2 { animation: gccFadeUp 0.55s ease both 0.15s; }
        .gcc-fade-3 { animation: gccFadeUp 0.55s ease both 0.25s; }
        .gcc-fade-4 { animation: gccFadeUp 0.55s ease both 0.35s; }
        .gcc-fade-5 { animation: gccFadeUp 0.55s ease both 0.45s; }
        @keyframes pulse-ring-gcc {
          0%, 100% { box-shadow: 0 0 0 0 oklch(var(--p)/0.45); }
          50%       { box-shadow: 0 0 0 8px oklch(var(--p)/0); }
        }
        .pulse-cta-gcc { animation: pulse-ring-gcc 2.4s ease-in-out infinite; }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-linear-to-br from-primary/13 via-primary/4 to-transparent rounded-full blur-[140px]" />
          <div className="absolute top-1/2 -right-40 w-[420px] h-[420px] bg-linear-to-bl from-secondary/10 via-secondary/3 to-transparent rounded-full blur-[120px]" />
        </div>

        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <div className="gcc-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-6">
                <Palette className="w-3.5 h-3.5" />
                Graphical Content · UK
              </div>

              <h1 className="gcc-fade-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight mb-5">
                Visual Content That Makes{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Your Listing Stand Out
                </span>
              </h1>

              <p className="gcc-fade-3 text-lg text-base-content/70 leading-relaxed mb-5 max-w-lg">
                Professional graphical content — from listing visuals and branded templates to
                marketing graphics — designed to make your short-term rental look polished and get
                more clicks.
              </p>

              <div className="gcc-fade-3 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm italic text-base-content/60 mb-8 max-w-lg">
                "Graphical content creation gives short term rental operators the visual assets they
                need to stand out in search results and build a recognisable, professional listing
                presence."
              </div>

              <div className="gcc-fade-4 flex flex-wrap gap-3 mb-8">
                <Link
                  href="/contact"
                  className="pulse-cta-gcc btn btn-primary btn-lg rounded-full px-8 gap-2"
                >
                  Get Visual Content <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services/airbnb-va" className="btn btn-outline btn-lg rounded-full">
                  All VA Services
                </Link>
              </div>

              <div className="gcc-fade-5 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {['bg-primary/20', 'bg-secondary/20', 'bg-accent/20'].map((c, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full border-2 border-base-100 ${c} flex items-center justify-center`}
                    >
                      <Users className="w-3.5 h-3.5 text-base-content/50" />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-base-content/60">
                  <span className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-1 font-medium text-base-content/80">
                      Trusted by UK hosts
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right — Content Creation Status Board */}
            <div className="gcc-fade-3 relative">
              <div className="rounded-2xl border border-base-300 bg-base-100 shadow-xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-base-300 bg-base-200">
                  <span className="text-sm font-semibold text-base-content/80">
                    Content Creation Board
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium">
                    5 Assets
                  </span>
                </div>
                <div className="divide-y divide-base-300">
                  {contentItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-4 py-3 hover:bg-base-200/40 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                          <ImageIcon className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-sm text-base-content/80">{item.label}</span>
                      </div>
                      <span className={`text-xs font-semibold ${item.color}`}>{item.status}</span>
                    </div>
                  ))}
                </div>
                <div className="px-4 pb-4 pt-3">
                  <div className="p-3 rounded-xl bg-primary/8 border border-primary/20">
                    <p className="text-xs font-semibold text-primary mb-1">Design Note</p>
                    <p className="text-xs text-base-content/70">
                      All assets aligned to brand palette. Platform thumbnail set optimised for
                      Airbnb and Booking.com dimensions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLARITY ──────────────────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            Why Visuals Matter
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-5">
            Guests Decide in Seconds — Visuals Win or Lose the Click
          </h2>
          <p className="text-lg text-base-content/65 leading-relaxed max-w-2xl mx-auto mb-8">
            In a competitive STR market, guests scroll fast. The listings that get clicks have
            strong visual identities, clear presentation, and professional-looking assets.
            Everything else gets skipped. Good graphical content isn't a luxury — it's a competitive
            necessity.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: <Palette className="w-5 h-5 text-primary" />,
                title: 'Brand Recognition',
                body: 'A consistent visual identity makes your listing recognisable and gives it a professional presence guests trust.',
              },
              {
                icon: <Eye className="w-5 h-5 text-secondary" />,
                title: 'Clarity at a Glance',
                body: 'Well-structured visuals communicate key features instantly — guests understand your property before reading a word.',
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-accent" />,
                title: 'More Clicks',
                body: 'Listings with professional visuals get more engagement. A better first impression leads to more bookings.',
              },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-2xl bg-base-100 border border-base-300">
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-base-content mb-1">{item.title}</h3>
                <p className="text-sm text-base-content/60">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM ──────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-4">
              <AlertTriangle className="w-3.5 h-3.5" />
              Common Visual Problems
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              Why Most Listings Look the Same
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto">
              Most STR operators upload photos and call it done. Without deliberate visual strategy,
              listings blend into search results and lose guests before the first impression lands.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {problemCards.map((card, i) => (
              <div
                key={i}
                className="flex gap-3 p-5 rounded-2xl bg-base-200 border border-base-300 hover:border-error/30 transition-colors"
              >
                {card.icon}
                <div>
                  <h3 className="font-semibold text-base-content mb-1">{card.title}</h3>
                  <p className="text-sm text-base-content/60">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT GOOD LOOKS LIKE ─────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-success/10 border border-success/25 text-success text-sm font-medium mb-4">
              <CheckCircle2 className="w-3.5 h-3.5" />
              What Good Looks Like
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              Visual Content That Actually Works
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto">
              Good graphical content is purposeful, consistent, and built around the guest
              experience — not just what looks nice to the host.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Palette className="w-5 h-5 text-success" />,
                title: 'Consistent Visual Identity',
                body: 'Every asset — listing visuals, thumbnails, marketing graphics — uses a coherent style that builds recognition and trust.',
              },
              {
                icon: <Eye className="w-5 h-5 text-success" />,
                title: 'Guest-Oriented Design',
                body: 'Assets are built around what guests need to understand, not what the host thinks looks good. Clarity comes first.',
              },
              {
                icon: <Layout className="w-5 h-5 text-success" />,
                title: 'Clear Visual Hierarchy',
                body: "Guests immediately know what to look at, what's important, and what makes the listing worth their click.",
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-success" />,
                title: 'Platform-Ready Assets',
                body: 'Everything is sized and optimised for Airbnb, Booking.com, VRBO, and direct booking channels — no reformatting needed.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 rounded-2xl bg-base-100 border border-base-300 hover:border-success/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-success/10 border border-success/20 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-base-content mb-1">{item.title}</h3>
                  <p className="text-sm text-base-content/60">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE CREATE ───────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Brush className="w-3.5 h-3.5" />
              What We Create
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              Four Categories of Visual Content
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto">
              From listing-specific visuals to marketing-ready graphics, every asset is built to
              serve a clear purpose for your short-term rental business.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block rounded-2xl border border-base-300 overflow-hidden">
            <div className="grid grid-cols-[1fr_2fr_1.5fr] bg-base-200 border-b border-base-300 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-base-content/50">
              <span>Content Type</span>
              <span>What's Included</span>
              <span>The Outcome</span>
            </div>
            {whatWeCreate.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-[1fr_2fr_1.5fr] gap-4 px-6 py-5 items-start border-b border-base-300 last:border-0 hover:bg-base-200/50 transition-colors ${i % 2 === 0 ? 'bg-base-100' : 'bg-base-50'}`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    {row.icon}
                  </div>
                  <span className="font-semibold text-sm text-base-content">{row.title}</span>
                </div>
                <ul className="space-y-1">
                  {row.items.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-base-content/65">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-base-content/65 italic">{row.outcome}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {whatWeCreate.map((row, i) => (
              <div key={i} className="p-5 rounded-2xl bg-base-100 border border-base-300">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    {row.icon}
                  </div>
                  <span className="font-semibold text-base-content">{row.title}</span>
                </div>
                <ul className="space-y-1.5 mb-3">
                  {row.items.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-base-content/65">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="flex items-start gap-2 p-3 rounded-xl bg-success/8 border border-success/20">
                  <TrendingUp className="w-3.5 h-3.5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-success/80 italic">{row.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMON MISTAKES ───────────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-warning/10 border border-warning/25 text-warning text-sm font-medium mb-4">
              <AlertTriangle className="w-3.5 h-3.5" />
              Common Mistakes
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              What Most Hosts Get Wrong With Visual Content
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto">
              Even hosts who invest in photography often undermine it with poor graphic execution.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: 'Text Overload on Images',
                body: 'Adding too much text to visuals clutters the image, confuses the guest, and dilutes the impact of good photography.',
              },
              {
                title: 'Inconsistent Styles',
                body: 'Mixing fonts, colours, and layouts across assets makes the listing look unplanned and unprofessional.',
              },
              {
                title: 'Unclear Messaging',
                body: 'Trying to say everything in one visual means communicating nothing. Good design is specific.',
              },
              {
                title: 'Aesthetics Over Function',
                body: "Design that looks good but doesn't help the guest understand the property or make a decision is design that doesn't work.",
              },
              {
                title: 'No Visual Hierarchy',
                body: "Without structure, guests don't know where to look first or what the listing is trying to show them.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-3 p-5 rounded-2xl bg-base-100 border border-base-300 hover:border-warning/30 transition-colors"
              >
                <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-base-content mb-1">{item.title}</h3>
                  <p className="text-sm text-base-content/60">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              How We Approach It
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              Purposeful Design at Every Step
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto">
              Every visual asset we create is grounded in clarity, consistency, and real guest
              behaviour — not just what looks polished.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {approachPoints.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-base-content mb-1">{item.title}</h3>
                  <p className="text-sm text-base-content/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Layers className="w-3.5 h-3.5" />
              Before vs After
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              Generic Listing vs Designed Listing
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto">
              The difference between a listing that gets skipped and one that gets clicked often
              comes down to how it looks.
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden md:block rounded-2xl border border-base-300 overflow-hidden">
            <div className="grid grid-cols-3 bg-base-100 border-b border-base-300 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-base-content/50">
              <span>Area</span>
              <span className="flex items-center gap-1.5">
                <XCircle className="w-3.5 h-3.5 text-error" /> Without Visual Content
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-success" /> With Our Content
              </span>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 gap-4 px-6 py-4 border-b border-base-300 last:border-0 ${i % 2 === 0 ? 'bg-base-200/40' : 'bg-base-100'}`}
              >
                <span className="font-semibold text-sm text-base-content self-center">
                  {row.area}
                </span>
                <div className="flex items-start gap-2 text-sm text-base-content/60">
                  <XCircle className="w-3.5 h-3.5 text-error flex-shrink-0 mt-0.5" />
                  {row.before}
                </div>
                <div className="flex items-start gap-2 text-sm text-base-content/65">
                  <CheckCircle2 className="w-3.5 h-3.5 text-success flex-shrink-0 mt-0.5" />
                  {row.after}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden space-y-4">
            {comparisonRows.map((row, i) => (
              <div key={i} className="rounded-2xl border border-base-300 overflow-hidden">
                <div className="bg-base-200 px-4 py-2.5 text-sm font-semibold text-base-content">
                  {row.area}
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-start gap-2 text-sm text-base-content/60 p-3 rounded-xl bg-error/6 border border-error/15">
                    <XCircle className="w-4 h-4 text-error flex-shrink-0 mt-0.5" />
                    {row.before}
                  </div>
                  <div className="flex items-start gap-2 text-sm text-base-content/65 p-3 rounded-xl bg-success/6 border border-success/15">
                    <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    {row.after}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Users className="w-3.5 h-3.5" />
              Who This Is For
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              Best Suited For
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto">
              Graphical content creation is most valuable for hosts who want a professional visual
              presence without managing design work themselves.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whoItIsFor.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/30 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <span className="text-sm text-base-content/80">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-600 text-sm font-medium mb-4">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              What Clients Say
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              Visuals That Get Results
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  'My listings looked the same as every other property in Manchester. After getting proper graphic content done — cover visuals, branded overlays, the lot — I saw a noticeable uptick in click-through from search. It just looks more professional now.',
                name: 'Claire H.',
                role: 'STR host, Manchester',
              },
              {
                quote:
                  "I'm a co-host managing twelve properties and consistent branding was always something I wanted but never had time for. Having visual assets built out properly has made a huge difference to how we present across platforms.",
                name: 'Tom A.',
                role: 'Co-host, London',
              },
              {
                quote:
                  "The listing highlight overlays were a game changer. Guests now immediately understand what makes each property different without having to read through the whole description. We've had guests mention it specifically.",
                name: 'Rachel F.',
                role: 'Multi-property operator, Leeds',
              },
            ].map((t, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 p-6 rounded-2xl bg-base-100 border border-base-300 hover:border-amber-400/30 transition-colors"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-base-content/70 italic leading-relaxed flex-1">
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-sm font-semibold text-base-content">{t.name}</p>
                  <p className="text-xs text-base-content/50">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <ChevronDown className="w-3.5 h-3.5" />
              FAQs
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              Common Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl p-10 lg:p-14 text-center bg-linear-to-br from-primary/22 via-base-200 to-secondary/15 border border-base-300">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[80px]" />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Get Started
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              Ready to Make Your Listings Stand Out?
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto mb-8">
              Professional visual content that gives your STR listings a consistent, polished
              presence — across Airbnb, Booking.com, and beyond.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/contact"
                className="pulse-cta-gcc btn btn-primary btn-lg rounded-full px-8 gap-2"
              >
                Get Visual Content <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services/airbnb-va" className="btn btn-outline btn-lg rounded-full">
                View All VA Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default GraphicalContentCreationView
