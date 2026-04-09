import React from 'react'
import type { Page } from '@/payload-types'
import Link from 'next/link'
import {
  CalendarCheck,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Star,
  Camera,
  ImageIcon,
  Layers,
  Eye,
  Lightbulb,
  AlertTriangle,
  MessageSquare,
  Sparkles,
  LayoutGrid,
  Users,
  TrendingUp,
  Aperture,
} from 'lucide-react'
import { FaqItem } from './FaqItem'

const faqs = [
  {
    q: 'Do you provide photographers?',
    a: 'We work with photographers and can coordinate shooting as part of our support. We also provide preparation guidance and direction so that any shoot — whether arranged through us or independently — is structured for the best outcome.',
  },
  {
    q: 'Can I improve existing photos?',
    a: 'Yes. If you already have photos, we can review them, advise on what is working, identify what is hurting your listing, and help you plan targeted improvements — whether that means replacing specific shots or restructuring the order.',
  },
  {
    q: 'Does this increase bookings?',
    a: 'Better photos improve click-through rates, which directly affects how many guests reach your listing page. More clicks means more opportunities to convert. We cannot guarantee specific results, but photography is consistently one of the highest-impact improvements a listing can make.',
  },
  {
    q: 'What should I prepare before a shoot?',
    a: 'Preparation makes a significant difference. We provide guidance on staging, layout, decluttering, and which features to highlight before the shoot takes place. This is part of what we cover — getting the property ready to be photographed well, not just pointing a camera at it.',
  },
]

const whatWeCovers = [
  {
    icon: <Sparkles className="w-5 h-5 text-primary" />,
    title: 'Pre-Shoot Preparation Guidance',
    items: [
      'Staging advice for each room',
      'Layout and furniture positioning',
      'Decluttering and presentation tips',
    ],
    outcome: 'A property that photographs well before the camera arrives.',
  },
  {
    icon: <Aperture className="w-5 h-5 text-primary" />,
    title: 'Photography Direction',
    items: [
      'Shot list planning by room',
      'Key angles and perspectives',
      'Feature focus — what to highlight',
    ],
    outcome: 'Purposeful images, not random snapshots.',
  },
  {
    icon: <LayoutGrid className="w-5 h-5 text-primary" />,
    title: 'Image Selection Strategy',
    items: [
      'Identifying your strongest images',
      'Removing weak or confusing shots',
      'Ordering photos for maximum impact',
    ],
    outcome: 'A final set of images that works hard for your listing.',
  },
  {
    icon: <Layers className="w-5 h-5 text-primary" />,
    title: 'Listing Integration',
    items: [
      'Aligning images with your listing narrative',
      'Improving visual flow and storytelling',
      'Setting the right cover photo',
    ],
    outcome: 'Images that work as part of your listing, not separate from it.',
  },
]

export const ProfessionalPhotographyView: React.FC<{ page: Page }> = () => {
  return (
    <article className="flex flex-col w-full overflow-x-hidden font-sans text-base-content selection:bg-primary/20">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpPP {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pp-fade-1 { animation: fadeUpPP 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) both; }
        .pp-fade-2 { animation: fadeUpPP 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .pp-fade-3 { animation: fadeUpPP 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both; }
        .pp-fade-4 { animation: fadeUpPP 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both; }
        .pp-fade-5 { animation: fadeUpPP 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes pulse-ring-pp {
          0%   { box-shadow: 0 0 0 0 oklch(var(--p)/0.35); }
          70%  { box-shadow: 0 0 0 12px oklch(var(--p)/0); }
          100% { box-shadow: 0 0 0 0 oklch(var(--p)/0); }
        }
        .pulse-cta-pp { animation: pulse-ring-pp 2.5s ease-out infinite; }
      `,
        }}
      />

      {/* ─── SECTION 1: HERO ─────────────────────────────────────────── */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-[60%] h-[80%] bg-linear-to-br from-primary/13 via-primary/4 to-transparent rounded-full blur-[140px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[45%] h-[60%] bg-linear-to-tl from-secondary/12 via-secondary/4 to-transparent rounded-full blur-[100px] -z-10" />

        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Copy */}
            <div>
              <div className="pp-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-6 shadow-sm shadow-primary/10">
                <Camera className="w-3.5 h-3.5" />
                <span>Professional Photography · UK</span>
              </div>

              <h1 className="pp-fade-2 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-tight mb-6">
                Professional Airbnb Photography{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  That Gets Clicks
                </span>
              </h1>

              <p className="pp-fade-3 text-base lg:text-lg text-base-content/65 leading-relaxed mb-4 max-w-lg">
                Assistophere helps UK hosts improve their listing performance with photography that
                captures attention, builds trust, and increases booking potential.
              </p>

              {/* AI-extractable definition */}
              <div className="pp-fade-3 mb-8 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm text-base-content/60 leading-relaxed italic">
                Airbnb photography improves listing performance by enhancing visual presentation,
                increasing click-through rates, and influencing guest booking decisions.
              </div>

              <div className="pp-fade-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="pulse-cta-pp btn btn-primary btn-lg rounded-full px-8 gap-2 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/45 transition-all duration-200"
                >
                  <CalendarCheck className="w-5 h-5" />
                  Book a Discovery Call
                </Link>
                <a
                  href="#what-we-cover"
                  className="btn btn-outline btn-lg rounded-full px-8 gap-2 font-semibold border-base-300 hover:bg-base-200 transition-all duration-200"
                >
                  See How It Works
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust bar */}
              <div className="pp-fade-5 flex items-center gap-4 mt-8 pt-8 border-t border-base-300/60">
                <div className="flex -space-x-2">
                  {['AH', 'BK', 'CL', 'DM'].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-base-300 border-2 border-base-100 flex items-center justify-center text-[10px] font-bold text-base-content/50"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-base-content/45">Trusted by UK STR operators</p>
                </div>
              </div>
            </div>

            {/* Visual: photo quality mockup */}
            <div className="pp-fade-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-base-200 border border-base-300 shadow-2xl shadow-black/40">
                {/* Main image placeholder */}
                <div className="relative w-full aspect-4/3 bg-linear-to-br from-base-300 via-base-200 to-base-300 flex items-center justify-center">
                  <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/8" />
                  <div className="relative z-10 flex flex-col items-center gap-3 text-base-content/25">
                    <ImageIcon className="w-12 h-12" />
                    <p className="text-xs font-medium tracking-wide">
                      Image Placeholder — Hero Property Shot
                    </p>
                  </div>
                </div>
                {/* Thumbnail strip */}
                <div className="flex gap-2 p-4 bg-base-200/80">
                  {[1, 2, 3, 4].map((n) => (
                    <div
                      key={n}
                      className={`flex-1 aspect-square rounded-lg bg-base-300 border flex items-center justify-center ${n === 1 ? 'border-primary/40' : 'border-base-300/60'}`}
                    >
                      <ImageIcon className="w-4 h-4 text-base-content/20" />
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-content text-xs font-bold px-4 py-2 rounded-2xl shadow-lg shadow-primary/30">
                First Impression = First Click
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: CLARITY ──────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-6">
            <Eye className="w-3.5 h-3.5" />
            <span>Reset Your Thinking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-8">
            Photos Decide Whether You Get Clicks
          </h2>
          <p className="text-base-content/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Guests don&apos;t read your listing first. They look at your photos. Within seconds,
            they decide:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
            {[
              {
                icon: <Eye className="w-5 h-5 text-primary" />,
                label: 'Whether to click',
                desc: 'Your cover photo is the only thing guests see before deciding to open your listing.',
              },
              {
                icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
                label: 'Whether to trust',
                desc: 'Photo quality signals property quality. Low-effort images suggest low-effort hosting.',
              },
              {
                icon: <CalendarCheck className="w-5 h-5 text-primary" />,
                label: 'Whether to consider booking',
                desc: 'Guests visualise staying from your photos before they read a single word.',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-3 p-5 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <p className="font-bold text-sm text-base-content">{item.label}</p>
                <p className="text-xs text-base-content/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-base-content/55 font-semibold text-base">
            Your images are your first impression.
          </p>
        </div>
      </section>

      {/* ─── SECTION 3: THE REAL PROBLEM ─────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-4">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>The Problem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Why Most Listing Photos Don&apos;t Work
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              {
                label: 'Dark or poorly lit images',
                desc: 'Dim photos make spaces feel smaller, uninviting, and neglected.',
              },
              {
                label: 'Cluttered or unprepared spaces',
                desc: 'Personal items, messy surfaces, and visible clutter erode guest confidence.',
              },
              {
                label: 'Inconsistent quality',
                desc: 'Mixing sharp shots with blurry ones creates an uneven, unprofessional impression.',
              },
              {
                label: 'Wrong angles',
                desc: 'Unflattering angles reduce the perceived size and quality of a space.',
              },
              {
                label: 'No clear flow',
                desc: 'Guests should understand the property as they scroll. Random ordering creates confusion.',
              },
              {
                label: 'No staging',
                desc: 'An unstaged property looks unoccupied and unloved — even if it is neither.',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex gap-3 p-5 rounded-2xl bg-base-200 border border-base-300 hover:border-error/30 transition-colors"
              >
                <XCircle className="w-4 h-4 text-error shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-base-content mb-1">{item.label}</p>
                  <p className="text-xs text-base-content/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-base-content/50 text-base italic border-l-4 border-error/30 pl-5">
              Even a great property can be ignored if it doesn&apos;t look right.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: WHAT ACTUALLY WORKS ─────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>The Standard</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Makes Airbnb Photos Perform
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <Sparkles className="w-5 h-5 text-primary" />,
                title: 'Bright and Clear Images',
                desc: 'Clean, well-lit spaces stand out in search. Brightness communicates freshness and quality at a glance.',
              },
              {
                icon: <Camera className="w-5 h-5 text-primary" />,
                title: 'Strong First Image',
                desc: 'The cover photo drives clicks. It needs to stop the scroll — not just document the space.',
              },
              {
                icon: <Layers className="w-5 h-5 text-primary" />,
                title: 'Logical Flow',
                desc: 'Guests should understand the space as they scroll. A structured sequence builds confidence.',
              },
              {
                icon: <Eye className="w-5 h-5 text-primary" />,
                title: 'Highlighting Key Features',
                desc: 'Focus on what matters most to guests — the kitchen, bedroom, outdoor space, and unique details.',
              },
              {
                icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
                title: 'Consistency',
                desc: 'All images should feel cohesive and professional. Inconsistency breaks trust.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/30 transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-base-content mb-2">{item.title}</h3>
                  <p className="text-xs text-base-content/55 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-base-content/45 text-sm italic">
            👉 This builds understanding — and understanding converts.
          </p>
        </div>
      </section>

      {/* ─── SECTION 5: WHAT WE DO ────────────────────────────────────── */}
      <section id="what-we-cover" className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <Camera className="w-3.5 h-3.5" />
              <span>What We Cover</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Our Photography Support Covers
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            {whatWeCovers.map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1.5fr] gap-5 p-6 rounded-2xl bg-base-200 border border-base-300 hover:border-primary/30 transition-colors"
              >
                {/* Title */}
                <div className="flex gap-3 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mt-0.5">
                    {item.icon}
                  </div>
                  <p className="font-bold text-base text-base-content pt-2">{item.title}</p>
                </div>
                {/* Items */}
                <ul className="flex flex-col gap-2">
                  {item.items.map((pt) => (
                    <li key={pt} className="flex gap-2 items-start text-sm text-base-content/65">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
                {/* Outcome */}
                <div className="flex items-start gap-2 pl-0 lg:pl-4 lg:border-l border-base-300">
                  <TrendingUp className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-base-content/60 italic leading-relaxed">
                    {item.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-5 rounded-2xl bg-primary/8 border border-primary/20 text-center">
            <p className="text-base font-semibold text-base-content/75">
              👉 Outcome: Images that attract attention and improve listing performance.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: HOW PHOTOS CONNECT TO BOOKINGS ───────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>The Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
              Why Photography Impacts Your Entire Listing
            </h2>
            <p className="text-base-content/60 text-base leading-relaxed max-w-2xl mx-auto mb-10">
              Photos don&apos;t just affect clicks. They shape the entire guest experience before
              they even book.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-base-100 border border-base-300">
              <p className="font-bold text-sm text-base-content/50 uppercase tracking-widest">
                Photos influence
              </p>
              {['Guest expectations', 'Perceived value', 'Booking decisions'].map((item) => (
                <div key={item} className="flex gap-2 items-center text-sm text-base-content/70">
                  <Eye className="w-4 h-4 text-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-primary/8 border border-primary/20">
              <p className="font-bold text-sm text-primary/70 uppercase tracking-widest">
                Better images lead to
              </p>
              {['More clicks', 'More trust', 'More bookings'].map((item) => (
                <div
                  key={item}
                  className="flex gap-2 items-center text-sm text-base-content/80 font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-base-content/45 italic text-base">
            Connect visuals to revenue — because that is what they are.
          </p>
        </div>
      </section>

      {/* ─── SECTION 7: COMMON MISTAKES ──────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/25 text-error text-sm font-medium mb-4">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Common Mistakes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Where Listing Photography Goes Wrong
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              {
                point: 'Using phone photos without structure',
                detail:
                  'A phone can take a decent photo — but without staging, direction, and planning, the result rarely performs.',
              },
              {
                point: 'Overcrowded images',
                detail:
                  'Too much in the frame overwhelms guests and hides the quality of the space.',
              },
              {
                point: 'Poor lighting',
                detail:
                  'Shooting at the wrong time of day or with no attention to light creates flat, uninviting images.',
              },
              {
                point: 'No staging',
                detail:
                  'An unstaged property looks like a storage unit, not a destination guests want to choose.',
              },
              {
                point: 'Random image order',
                detail:
                  'The sequence of photos tells a story. No order means no story — and less trust.',
              },
            ].map((item) => (
              <div
                key={item.point}
                className="flex gap-3 p-5 rounded-2xl bg-base-200 border border-base-300 hover:border-error/25 transition-colors"
              >
                <XCircle className="w-4 h-4 text-error shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-base-content mb-1">{item.point}</p>
                  <p className="text-xs text-base-content/50 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-base-content/45 italic text-base border-t border-base-300/60 pt-6">
            Photos fail when they are taken, not planned.
          </p>
        </div>
      </section>

      {/* ─── SECTION 8: OUR APPROACH ─────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Aperture className="w-3.5 h-3.5" />
              <span>Our Approach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              How We Approach Listing Photography
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <TrendingUp className="w-5 h-5 text-primary" />,
                title: 'We focus on performance, not just visuals',
                desc: 'Images are measured by their effect on click-through rates and bookings, not just how they look.',
              },
              {
                icon: <Sparkles className="w-5 h-5 text-primary" />,
                title: 'We guide preparation before shooting',
                desc: 'Getting the property ready is as important as the shoot itself. We cover both.',
              },
              {
                icon: <LayoutGrid className="w-5 h-5 text-primary" />,
                title: 'We structure images for conversion',
                desc: 'Photo order, cover selection, and sequencing are deliberate decisions — not afterthoughts.',
              },
              {
                icon: <Layers className="w-5 h-5 text-primary" />,
                title: 'We align photos with your listing',
                desc: 'Images work alongside your title, description, and pricing — not as a separate exercise.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/30 transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-sm text-base-content mb-1.5">{item.title}</p>
                  <p className="text-xs text-base-content/55 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: COMPARISON TABLE ─────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Comparison</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Standard Photos vs Optimised Photography
            </h2>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block rounded-2xl overflow-hidden border border-base-300 shadow-lg">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="px-6 py-4 bg-base-300/60 text-left text-xs font-bold uppercase tracking-wider text-base-content/40 w-1/4">
                    Area
                  </th>
                  <th className="px-6 py-4 bg-base-300/60 text-left text-xs font-bold uppercase tracking-wider text-base-content/40 w-[37.5%]">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-error" />
                      Standard Photos
                    </div>
                  </th>
                  <th className="px-6 py-4 bg-primary/12 text-left text-xs font-bold uppercase tracking-wider text-primary w-[37.5%]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Optimised Photography
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Approach', 'Random shots', 'Structured visuals'],
                  ['Lighting', 'Poor or inconsistent', 'Clear, bright images'],
                  ['Flow', 'No sequence', 'Logical order'],
                  ['Engagement', 'Low click-through', 'Higher click rate'],
                ].map(([area, standard, optimised], i) => (
                  <tr key={area} className={i % 2 === 0 ? 'bg-base-100' : 'bg-base-200/50'}>
                    <td className="px-6 py-4 font-semibold text-base-content/60 text-xs uppercase tracking-wider">
                      {area}
                    </td>
                    <td className="px-6 py-4 text-base-content/50">{standard}</td>
                    <td className="px-6 py-4 text-base-content font-semibold bg-primary/5">
                      {optimised}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden flex flex-col gap-3">
            {[
              ['Approach', 'Random shots', 'Structured visuals'],
              ['Lighting', 'Poor or inconsistent', 'Clear, bright images'],
              ['Flow', 'No sequence', 'Logical order'],
              ['Engagement', 'Low click-through', 'Higher click rate'],
            ].map(([area, standard, optimised]) => (
              <div key={area} className="rounded-2xl overflow-hidden border border-base-300">
                <div className="px-4 py-2.5 bg-base-300/60 text-xs font-bold text-base-content/40 uppercase tracking-wider">
                  {area}
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-3 py-3.5 border-r border-base-300 bg-base-100">
                    <p className="text-[10px] text-base-content/35 mb-1">Standard</p>
                    <p className="text-xs text-base-content/50">{standard}</p>
                  </div>
                  <div className="px-3 py-3.5 bg-primary/8">
                    <p className="text-[10px] text-primary mb-1 font-bold">Optimised</p>
                    <p className="text-xs text-base-content/80 font-semibold">{optimised}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 10: WHO THIS IS FOR ─────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>Right Fit</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Who This Is Built For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <TrendingUp className="w-5 h-5 text-primary" />,
                title: 'Listings with low click-through rates',
                desc: 'If guests are not clicking, the photos are most likely why. That is the first thing to fix.',
              },
              {
                icon: <Sparkles className="w-5 h-5 text-primary" />,
                title: 'New properties launching',
                desc: 'Starting with strong photography sets the right foundation from day one.',
              },
              {
                icon: <Camera className="w-5 h-5 text-primary" />,
                title: 'Serviced accommodation businesses',
                desc: 'Professional operators need professional images. Phone photos are not a strategy.',
              },
              {
                icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
                title: 'Hosts improving performance',
                desc: 'If your listing is underperforming, photos are one of the highest-impact things you can improve.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 items-start p-5 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/30 transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-base-content text-sm mb-1">{item.title}</p>
                  <p className="text-base-content/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 11: TESTIMONIALS ─────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-sm font-medium mb-4">
              <Star className="w-3.5 h-3.5" />
              <span>Client Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col gap-5 p-6 rounded-2xl bg-base-200 border border-base-300 hover:border-amber-500/25 transition-colors"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="flex-1 rounded-xl bg-base-300/50 border border-base-300 p-4 flex items-center justify-center min-h-24">
                  <p className="text-base-content/30 text-xs text-center font-medium">
                    Testimonial Placeholder — Client Quote #{i}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-base-300 flex items-center justify-center text-xs font-bold text-base-content/40">
                    {['AH', 'BK', 'CL'][i - 1]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-base-content/65">Client Name</p>
                    <p className="text-xs text-base-content/35">STR Operator, UK</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 12: FAQ ──────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Common Questions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 13: FINAL CTA ────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/22 via-base-200 to-secondary/15 -z-10" />
        <div className="absolute inset-0 bg-base-100/55 -z-10" />
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-linear-to-b from-primary/12 to-transparent rounded-full blur-[130px] -z-10" />

        <div className="container max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-medium mb-6">
            <Camera className="w-3.5 h-3.5" />
            <span>Improve Your First Impression</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-[1.12]">
            Ready to Improve Your{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Listing&apos;s First Impression?
            </span>
          </h2>

          <p className="text-lg text-base-content/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s create visuals that actually attract guests.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="pulse-cta-pp btn btn-primary btn-lg rounded-full px-10 gap-2 font-semibold shadow-xl shadow-primary/30 hover:shadow-primary/55 transition-all duration-200"
            >
              <CalendarCheck className="w-5 h-5" />
              Book a Discovery Call
            </Link>
            <Link
              href="/services"
              className="btn btn-outline btn-lg rounded-full px-8 gap-2 font-semibold border-base-300 hover:bg-base-200 transition-all duration-200"
            >
              See All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-xs text-base-content/30 mt-7">
            Free 30-min call · No commitment · UK-based team
          </p>
        </div>
      </section>
    </article>
  )
}
