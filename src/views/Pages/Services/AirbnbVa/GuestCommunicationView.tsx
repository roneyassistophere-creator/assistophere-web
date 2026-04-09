import React from 'react'
import type { Page } from '@/payload-types'
import Link from 'next/link'
import {
  CalendarCheck,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Star,
  MessageSquare,
  Clock,
  AlertTriangle,
  MessageCircle,
  Layers,
  Users,
  Zap,
  ShieldCheck,
  Globe,
  LayoutList,
  RefreshCw,
  Settings,
} from 'lucide-react'
import { FaqItem } from './FaqItem'

const faqs = [
  {
    q: 'How quickly do you respond to guests?',
    a: 'We aim to respond to all guest messages promptly, typically within a short window. Our structured system ensures no message goes unanswered, regardless of the time of day.',
  },
  {
    q: 'Do you handle all messages across platforms?',
    a: 'Yes. We manage guest communication across Airbnb, Booking.com, and direct booking channels. Every message, regardless of platform, is handled consistently.',
  },
  {
    q: 'Can you manage communication for multiple listings?',
    a: 'Absolutely. Our communication system is built to scale across multiple listings and properties. Operators with large portfolios are exactly who we work with.',
  },
  {
    q: 'How do you deal with guest issues during stays?',
    a: 'We handle in-stay issues calmly and efficiently, coordinating with your cleaning or maintenance teams where needed and keeping guests informed throughout.',
  },
]

const whatWeCovers = [
  {
    icon: <MessageCircle className="w-5 h-5 text-primary" />,
    title: 'Pre-Booking Enquiries',
    items: ['Answering guest questions', 'Providing property details', 'Guiding guests to book'],
    outcome: 'More enquiries converted into confirmed bookings.',
  },
  {
    icon: <LayoutList className="w-5 h-5 text-primary" />,
    title: 'Pre-Arrival Messaging',
    items: ['Check-in instructions', 'Arrival information', 'Automated reminders'],
    outcome: 'Guests arrive informed and prepared, reducing friction from day one.',
  },
  {
    icon: <Clock className="w-5 h-5 text-primary" />,
    title: 'During-Stay Support',
    items: ['Handling issues promptly', 'Responding to requests', 'Coordinating with teams'],
    outcome: 'Issues resolved quickly, stays kept on track.',
  },
  {
    icon: <RefreshCw className="w-5 h-5 text-primary" />,
    title: 'Post-Stay Communication',
    items: ['Follow-up messages', 'Review handling', 'Guest feedback collection'],
    outcome: 'Better reviews and a closed loop on every stay.',
  },
  {
    icon: <Globe className="w-5 h-5 text-primary" />,
    title: 'Multi-Platform Messaging',
    items: ['Airbnb', 'Booking.com', 'Direct booking channels'],
    outcome: 'Consistent communication regardless of where the booking comes from.',
  },
]

export const GuestCommunicationView: React.FC<{ page: Page }> = () => {
  return (
    <article className="flex flex-col w-full overflow-x-hidden font-sans text-base-content selection:bg-primary/20">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpGC {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .gc-fade-1 { animation: fadeUpGC 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) both; }
        .gc-fade-2 { animation: fadeUpGC 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .gc-fade-3 { animation: fadeUpGC 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both; }
        .gc-fade-4 { animation: fadeUpGC 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both; }
        .gc-fade-5 { animation: fadeUpGC 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes pulse-ring-gc {
          0%   { box-shadow: 0 0 0 0 oklch(var(--p)/0.35); }
          70%  { box-shadow: 0 0 0 12px oklch(var(--p)/0); }
          100% { box-shadow: 0 0 0 0 oklch(var(--p)/0); }
        }
        .pulse-cta-gc { animation: pulse-ring-gc 2.5s ease-out infinite; }
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
              <div className="gc-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-6 shadow-sm shadow-primary/10">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Guest Communication · UK</span>
              </div>

              <h1 className="gc-fade-2 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-tight mb-6">
                Guest Communication That{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Keeps Your STR Business Running
                </span>
              </h1>

              <p className="gc-fade-3 text-base lg:text-lg text-base-content/65 leading-relaxed mb-4 max-w-lg">
                Assistophere handles guest communication for UK hosts, managing enquiries,
                check-ins, support, and follow-ups so your operations stay organised and your guests
                stay satisfied.
              </p>

              {/* AI-extractable definition */}
              <div className="gc-fade-3 mb-8 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm text-base-content/60 leading-relaxed italic">
                Guest communication in short term rentals involves managing enquiries, check-ins,
                in-stay support, and post-stay messaging to ensure smooth operations and positive
                guest experience.
              </div>

              <div className="gc-fade-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="pulse-cta-gc btn btn-primary btn-lg rounded-full px-8 gap-2 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/45 transition-all duration-200"
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
              <div className="gc-fade-5 flex items-center gap-4 mt-8 pt-8 border-t border-base-300/60">
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

            {/* Visual: messaging dashboard mockup */}
            <div className="gc-fade-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-base-200 border border-base-300 shadow-2xl shadow-black/40 p-7">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/6" />
                <p className="relative z-10 text-xs font-bold text-base-content/30 uppercase tracking-widest mb-5">
                  Guest Messages Dashboard
                </p>
                <div className="relative z-10 flex flex-col gap-3">
                  {[
                    {
                      from: 'Alex M.',
                      msg: 'What time is check-in?',
                      status: 'Replied',
                      color: 'text-emerald-500',
                    },
                    {
                      from: 'Sarah T.',
                      msg: 'Is parking available nearby?',
                      status: 'Replied',
                      color: 'text-emerald-500',
                    },
                    {
                      from: 'James R.',
                      msg: "The heating isn't working.",
                      status: 'Resolved',
                      color: 'text-primary',
                    },
                    {
                      from: 'Priya K.',
                      msg: 'Can we extend our stay?',
                      status: 'Replied',
                      color: 'text-emerald-500',
                    },
                    {
                      from: 'Oliver B.',
                      msg: 'Great stay — left a review!',
                      status: 'Follow-up sent',
                      color: 'text-secondary',
                    },
                  ].map(({ from, msg, status, color }) => (
                    <div
                      key={from}
                      className="grid grid-cols-[1fr_auto] gap-3 items-center bg-base-100/60 rounded-xl px-4 py-3 border border-base-300/60"
                    >
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-base-content truncate">{from}</p>
                        <p className="text-xs text-base-content/45 truncate">{msg}</p>
                      </div>
                      <p className={`text-xs font-bold shrink-0 ${color}`}>{status}</p>
                    </div>
                  ))}
                </div>
                <div className="relative z-10 flex items-center gap-2 mt-5 text-[10px] text-base-content/25">
                  <Clock className="w-3 h-3" />
                  <span>Avg. response time: &lt; 15 min</span>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-content text-xs font-bold px-4 py-2 rounded-2xl shadow-lg shadow-primary/30">
                Every message handled
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: CLARITY ──────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-6">
            <Zap className="w-3.5 h-3.5" />
            <span>Reset Your Thinking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            Guest Communication Isn&apos;t Just Replying to Messages
          </h2>
          <p className="text-base-content/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Communication sits at the centre of your entire operation. It connects bookings,
            check-ins, cleaning, maintenance, and guest experience. If communication breaks,
            everything else follows.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Bookings', 'Check-ins', 'Cleaning', 'Maintenance', 'Guest Experience'].map(
              (item) => (
                <span
                  key={item}
                  className="inline-flex items-center px-4 py-1.5 rounded-full bg-base-100 border border-base-300 text-sm font-medium text-base-content/70"
                >
                  {item}
                </span>
              ),
            )}
          </div>
          <p className="mt-8 text-base-content/45 italic text-base font-medium">
            If communication breaks, everything else follows.
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
              Why Guest Communication Becomes Overwhelming
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              {
                label: 'Messages at all hours',
                desc: 'Guest enquiries and issues do not follow business hours — and every delay costs trust.',
              },
              {
                label: 'Repeated questions',
                desc: 'Without a structured system, you answer the same questions over and over.',
              },
              {
                label: 'Urgent in-stay issues',
                desc: 'Problems during a stay escalate fast without someone monitoring and responding.',
              },
              {
                label: 'Missed or delayed replies',
                desc: 'A slow response on Airbnb can directly hurt your ranking and conversion.',
              },
              {
                label: 'Juggling multiple platforms',
                desc: 'Airbnb, Booking.com, and direct bookings each have their own inbox to manage.',
              },
              {
                label: 'No structured system',
                desc: 'Without a clear process, communication becomes reactive and inconsistent.',
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
              What starts as simple messaging quickly becomes constant pressure.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: WHAT GOOD LOOKS LIKE ────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>The Standard</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Proper Guest Communication Should Do
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: <Zap className="w-5 h-5 text-primary" />,
                title: 'Fast Response Times',
                desc: 'Guests expect quick replies at every stage of their journey. Speed signals professionalism.',
              },
              {
                icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
                title: 'Clear and Consistent Messaging',
                desc: 'Every guest should receive the same quality of information, delivered clearly.',
              },
              {
                icon: <MessageCircle className="w-5 h-5 text-primary" />,
                title: 'Proactive Communication',
                desc: 'Guests should not need to chase you. Send information before they need to ask.',
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-primary" />,
                title: 'Issue Handling',
                desc: 'Problems resolved quickly, calmly, and with the guest kept informed throughout.',
              },
              {
                icon: <LayoutList className="w-5 h-5 text-primary" />,
                title: 'Structured Flow',
                desc: 'Every stage of the guest journey — from enquiry to post-stay — should be covered.',
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
                  <h3 className="font-bold text-base text-base-content mb-2">{item.title}</h3>
                  <p className="text-sm text-base-content/55 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: WHAT WE COVER ────────────────────────────────── */}
      <section id="what-we-cover" className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>What We Cover</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Our Guest Communication Covers
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            {whatWeCovers.map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1.5fr] gap-5 p-6 rounded-2xl bg-base-200 border border-base-300 hover:border-primary/30 transition-colors"
              >
                <div className="flex gap-3 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mt-0.5">
                    {item.icon}
                  </div>
                  <p className="font-bold text-base text-base-content pt-2">{item.title}</p>
                </div>
                <ul className="flex flex-col gap-2">
                  {item.items.map((pt) => (
                    <li key={pt} className="flex gap-2 items-start text-sm text-base-content/65">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="flex items-start gap-2 pl-0 lg:pl-4 lg:border-l border-base-300">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-base-content/60 italic leading-relaxed">
                    {item.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-5 rounded-2xl bg-primary/8 border border-primary/20 text-center">
            <p className="text-base font-semibold text-base-content/75">
              👉 Guests feel supported — and your operations stay under control.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: OPERATIONS CONNECTION ───────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-6">
            <Layers className="w-3.5 h-3.5" />
            <span>System Thinking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            Communication Drives Your Entire Setup
          </h2>
          <p className="text-base-content/60 text-base leading-relaxed max-w-2xl mx-auto mb-10">
            Guest communication is directly linked to cleaning schedules, maintenance handling,
            check-in coordination, and overall guest experience. When it works, everything works.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: <RefreshCw className="w-5 h-5 text-primary" />,
                label: 'Cleaning Schedules',
                desc: 'Communication triggers and confirms cleaning across every turnover.',
              },
              {
                icon: <Settings className="w-5 h-5 text-primary" />,
                label: 'Maintenance Handling',
                desc: 'Issues reported, coordinated, and resolved through structured messaging.',
              },
              {
                icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
                label: 'Check-in Coordination',
                desc: 'Guests arrive knowing exactly what to do — no calls, no confusion.',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-3 p-5 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/30 transition-colors text-center items-center"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="font-bold text-sm text-base-content">{item.label}</p>
                <p className="text-xs text-base-content/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
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
              Where Guest Communication Goes Wrong
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              {
                point: 'Slow response times',
                detail: 'Delays damage trust, hurt rankings, and push guests towards competitors.',
              },
              {
                point: 'Inconsistent tone',
                detail:
                  'Different messages at different times create confusion and erode confidence.',
              },
              {
                point: 'Missing key information',
                detail:
                  'Guests who have to chase for details have a worse experience before arrival.',
              },
              {
                point: 'Reactive instead of proactive',
                detail:
                  'Waiting for problems before communicating is a guaranteed way to create more of them.',
              },
              {
                point: 'Poor team coordination',
                detail:
                  'Communication that is not aligned with cleaning and maintenance creates avoidable failures.',
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
            Poor communication creates unnecessary problems — and unnecessary costs.
          </p>
        </div>
      </section>

      {/* ─── SECTION 8: OUR APPROACH ─────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Settings className="w-3.5 h-3.5" />
              <span>Our Approach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              How We Manage Guest Communication Properly
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <Zap className="w-5 h-5 text-primary" />,
                title: 'We respond quickly and consistently',
                desc: 'No delays, no gaps. Every message gets a timely, professional reply regardless of platform or time of day.',
              },
              {
                icon: <LayoutList className="w-5 h-5 text-primary" />,
                title: 'We follow structured messaging flows',
                desc: 'Every guest journey stage has a clear, tested communication sequence — from enquiry to post-stay.',
              },
              {
                icon: <MessageCircle className="w-5 h-5 text-primary" />,
                title: 'We stay proactive',
                desc: 'We send information before guests need to ask — removing friction and reducing inbound questions.',
              },
              {
                icon: <RefreshCw className="w-5 h-5 text-primary" />,
                title: 'We align communication with operations',
                desc: 'Messaging is coordinated with check-ins, cleaning, and maintenance — not managed in isolation.',
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
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Comparison</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Unstructured vs Managed Communication
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
                      Unstructured
                    </div>
                  </th>
                  <th className="px-6 py-4 bg-primary/12 text-left text-xs font-bold uppercase tracking-wider text-primary w-[37.5%]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Managed
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Response Speed', 'Delayed replies', 'Fast responses'],
                  ['Approach', 'Reactive', 'Proactive'],
                  ['Clarity', 'Confusing messages', 'Clear and consistent'],
                  ['Operations', 'Disconnected from teams', 'Fully aligned'],
                ].map(([area, bad, good], i) => (
                  <tr key={area} className={i % 2 === 0 ? 'bg-base-100' : 'bg-base-200/50'}>
                    <td className="px-6 py-4 font-semibold text-base-content/60 text-xs uppercase tracking-wider">
                      {area}
                    </td>
                    <td className="px-6 py-4 text-base-content/50">{bad}</td>
                    <td className="px-6 py-4 text-base-content font-semibold bg-primary/5">
                      {good}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden flex flex-col gap-3">
            {[
              ['Response Speed', 'Delayed replies', 'Fast responses'],
              ['Approach', 'Reactive', 'Proactive'],
              ['Clarity', 'Confusing messages', 'Clear and consistent'],
              ['Operations', 'Disconnected from teams', 'Fully aligned'],
            ].map(([area, bad, good]) => (
              <div key={area} className="rounded-2xl overflow-hidden border border-base-300">
                <div className="px-4 py-2.5 bg-base-300/60 text-xs font-bold text-base-content/40 uppercase tracking-wider">
                  {area}
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-3 py-3.5 border-r border-base-300 bg-base-100">
                    <p className="text-[10px] text-base-content/35 mb-1">Unstructured</p>
                    <p className="text-xs text-base-content/50">{bad}</p>
                  </div>
                  <div className="px-3 py-3.5 bg-primary/8">
                    <p className="text-[10px] text-primary mb-1 font-bold">Managed</p>
                    <p className="text-xs text-base-content/80 font-semibold">{good}</p>
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
                icon: <MessageSquare className="w-5 h-5 text-primary" />,
                title: 'Hosts overwhelmed by messages',
                desc: 'You are constantly on your phone replying to guests. We take that off your plate entirely.',
              },
              {
                icon: <Layers className="w-5 h-5 text-primary" />,
                title: 'Operators managing multiple listings',
                desc: 'More properties mean more messages. Our system scales with you without losing quality.',
              },
              {
                icon: <Globe className="w-5 h-5 text-primary" />,
                title: 'Serviced accommodation businesses',
                desc: 'Professional operations need professional communication — structured, consistent, and on-brand.',
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-primary" />,
                title: 'Hosts wanting to step back',
                desc: 'You want the business to run without you being on-call. Communication management is the first step.',
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
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Take Communication Off Your Plate</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-[1.12]">
            Ready to Take Guest Communication{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Off Your Plate?
            </span>
          </h2>

          <p className="text-lg text-base-content/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s manage your guest communication so your operations run smoothly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="pulse-cta-gc btn btn-primary btn-lg rounded-full px-10 gap-2 font-semibold shadow-xl shadow-primary/30 hover:shadow-primary/55 transition-all duration-200"
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
