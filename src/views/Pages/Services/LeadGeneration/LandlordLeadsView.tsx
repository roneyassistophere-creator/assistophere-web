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
  Home,
  TrendingUp,
  Target,
  Phone,
  MapPin,
  CalendarCheck,
  ChevronDown,
  Megaphone,
  Search,
  FileText,
} from 'lucide-react'
import { FaqItem } from './FaqItem'

const faqs = [
  {
    q: 'What is landlord lead generation?',
    a: 'Landlord lead generation is the process of identifying and reaching property owners who are considering entering the short-term rental market — whether through Airbnb, Booking.com, or a direct booking setup — and connecting them with your services before they find someone else.',
  },
  {
    q: 'How do you find landlord leads?',
    a: 'We use a combination of targeted outreach, digital advertising, and inbound strategies tailored to property owners in your target area. Every lead is qualified to ensure they match your ideal client profile.',
  },
  {
    q: 'Are the leads exclusive?',
    a: 'Yes. Leads generated for your business are exclusive — they are not shared with other operators or service providers. Each lead is specific to your pipeline.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We currently focus on the UK market. If you operate in a specific region or city, we tailor the lead generation strategy to that geography for better targeting and conversion.',
  },
]

const whatWeDeliver = [
  {
    icon: <Search className="w-5 h-5 text-primary" />,
    title: 'Targeted Prospecting',
    items: [
      'Identifying property owners in your target area',
      'Filtering by property type and suitability',
      'Building qualified prospect lists',
    ],
    outcome: 'A pipeline of relevant landlords, not random contacts',
  },
  {
    icon: <Megaphone className="w-5 h-5 text-primary" />,
    title: 'Outreach Campaigns',
    items: [
      'Personalised outreach messaging',
      'Multi-channel contact strategy',
      'Follow-up sequences that convert',
    ],
    outcome: 'Consistent first conversations with new landlord prospects',
  },
  {
    icon: <Target className="w-5 h-5 text-primary" />,
    title: 'Lead Qualification',
    items: [
      'Filtering out unqualified enquiries',
      'Assessing property readiness and intent',
      'Scoring leads before they reach your inbox',
    ],
    outcome: 'Only warm, qualified leads passed to your team',
  },
  {
    icon: <FileText className="w-5 h-5 text-primary" />,
    title: 'Pipeline Reporting',
    items: [
      'Lead volume and source tracking',
      'Conversion rate visibility',
      'Regular pipeline status updates',
    ],
    outcome: 'Full visibility of your landlord acquisition pipeline',
  },
]

const pipelineLeads = [
  { name: 'Thomas H.', location: 'Manchester', type: '2-bed apartment', status: 'Hot', statusColor: 'text-error' },
  { name: 'Sarah L.', location: 'London, E1', type: '3-bed flat', status: 'Warm', statusColor: 'text-warning' },
  { name: 'David K.', location: 'Birmingham', type: 'Studio + 1-bed', status: 'Contacted', statusColor: 'text-primary' },
  { name: 'Claire M.', location: 'Leeds', type: '4-bed house', status: 'Hot', statusColor: 'text-error' },
  { name: 'James R.', location: 'Bristol', type: '2-bed terrace', status: 'Warm', statusColor: 'text-warning' },
]

const problemCards = [
  {
    icon: <XCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />,
    title: 'No Consistent Pipeline',
    desc: 'Most STR operators rely on word of mouth to find new landlords. Without a structured lead generation system, growth is unpredictable and slow.',
  },
  {
    icon: <XCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />,
    title: 'Time Lost on Cold Outreach',
    desc: 'Manually researching and contacting landlords takes hours with minimal results. Without a targeted system, you burn time on prospects that never convert.',
  },
  {
    icon: <XCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />,
    title: 'Low-Quality Enquiries',
    desc: "Generic advertising attracts anyone. Without proper qualification, you waste time on landlords who aren't a good fit — wrong location, wrong property type, not ready.",
  },
  {
    icon: <XCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />,
    title: 'No Visibility of What Works',
    desc: 'Without tracking, you never know which outreach channels, messages, or audiences are actually generating landlord interest — so nothing improves.',
  },
  {
    icon: <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />,
    title: 'Competitors Moving Faster',
    desc: 'Property management companies and co-hosts with active lead gen systems are approaching the same landlords you want — earlier and more consistently.',
  },
]

const approachPoints = [
  {
    icon: <MapPin className="w-5 h-5 text-primary" />,
    title: 'Geography-First Targeting',
    desc: 'Lead generation is built around your target area — whether that\'s a single city or a wider region. We identify property owners who are locally relevant to your business.',
  },
  {
    icon: <Target className="w-5 h-5 text-primary" />,
    title: 'Qualification Before Delivery',
    desc: 'Every lead is assessed for property type, location, and owner intent before it reaches you. You only receive contacts worth having a conversation with.',
  },
  {
    icon: <Phone className="w-5 h-5 text-primary" />,
    title: 'Outreach That Doesn\'t Feel Pushy',
    desc: 'Our messaging is built to open conversations, not hard-sell. Landlords respond better to genuine, value-led outreach — and our approach is structured around that.',
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-primary" />,
    title: 'Continuous Pipeline Optimisation',
    desc: 'We track what\'s converting and iterate the targeting, messaging, and channels over time — so your landlord pipeline improves month on month.',
  },
]

const comparisonRows = [
  {
    area: 'Pipeline',
    before: 'No structured system — growth relies on word of mouth',
    after: 'Consistent flow of qualified landlord prospects',
  },
  {
    area: 'Quality',
    before: 'Random enquiries with no pre-qualification',
    after: 'Leads screened for property type, location, and intent',
  },
  {
    area: 'Time',
    before: 'Hours spent on manual research and cold outreach',
    after: 'Your team only speaks to warm, ready-to-talk prospects',
  },
  {
    area: 'Visibility',
    before: 'No idea which channels or messages are working',
    after: 'Full pipeline reporting with source and conversion data',
  },
]

const whoItIsFor = [
  { icon: <Home className="w-5 h-5 text-primary" />, label: 'Co-hosts and property managers looking to grow their portfolio of managed properties' },
  { icon: <TrendingUp className="w-5 h-5 text-primary" />, label: 'STR operators wanting a scalable, consistent flow of new landlord clients' },
  { icon: <Users className="w-5 h-5 text-primary" />, label: 'Airbnb management companies that need a structured acquisition pipeline' },
  { icon: <Target className="w-5 h-5 text-primary" />, label: 'Anyone tired of relying on referrals and wanting predictable growth' },
]

export const LandlordLeadsView: React.FC<{ page: Page }> = ({ page }) => {
  return (
    <>
      <style>{`
        @keyframes llFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ll-fade-1 { animation: llFadeUp 0.55s ease both 0.05s; }
        .ll-fade-2 { animation: llFadeUp 0.55s ease both 0.15s; }
        .ll-fade-3 { animation: llFadeUp 0.55s ease both 0.25s; }
        .ll-fade-4 { animation: llFadeUp 0.55s ease both 0.35s; }
        .ll-fade-5 { animation: llFadeUp 0.55s ease both 0.45s; }
        @keyframes pulse-ring-ll {
          0%, 100% { box-shadow: 0 0 0 0 oklch(var(--p)/0.45); }
          50%       { box-shadow: 0 0 0 8px oklch(var(--p)/0); }
        }
        .pulse-cta-ll { animation: pulse-ring-ll 2.4s ease-in-out infinite; }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-linear-to-br from-primary/13 via-primary/4 to-transparent rounded-full blur-[140px]" />
          <div className="absolute top-1/2 -right-40 w-[420px] h-[420px] bg-linear-to-bl from-secondary/10 via-secondary/3 to-transparent rounded-full blur-[120px]" />
        </div>

        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left */}
            <div>
              <div className="ll-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-6">
                <Home className="w-3.5 h-3.5" />
                Landlord Leads · UK
              </div>

              <h1 className="ll-fade-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight mb-5">
                A Consistent Flow of{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Qualified Landlord Leads
                </span>
              </h1>

              <p className="ll-fade-3 text-lg text-base-content/70 leading-relaxed mb-5 max-w-lg">
                Targeted lead generation for STR operators, co-hosts, and property management companies — so you always have a pipeline of qualified landlords ready to onboard.
              </p>

              <div className="ll-fade-3 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm italic text-base-content/60 mb-8 max-w-lg">
                "Landlord lead generation gives property management businesses a structured, scalable way to grow their portfolio — without relying on word of mouth or cold outreach."
              </div>

              <div className="ll-fade-4 flex flex-wrap gap-3 mb-8">
                <Link
                  href="/contact"
                  className="pulse-cta-ll btn btn-primary btn-lg rounded-full px-8 gap-2"
                >
                  Start Building Your Pipeline <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services/lead-generation" className="btn btn-outline btn-lg rounded-full">
                  All Lead Gen Services
                </Link>
              </div>

              <div className="ll-fade-5 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {['bg-primary/20', 'bg-secondary/20', 'bg-accent/20'].map((c, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-base-100 ${c} flex items-center justify-center`}>
                      <Users className="w-3.5 h-3.5 text-base-content/50" />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-base-content/60">
                  <span className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-1 font-medium text-base-content/80">Trusted by UK STR operators</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right — Lead Pipeline Preview */}
            <div className="ll-fade-3 relative">
              <div className="rounded-2xl border border-base-300 bg-base-100 shadow-xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-base-300 bg-base-200">
                  <span className="text-sm font-semibold text-base-content/80">Landlord Lead Pipeline</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium">5 Active Leads</span>
                </div>
                <div className="divide-y divide-base-300">
                  {pipelineLeads.map((lead, i) => (
                    <div key={i} className="flex items-center justify-between px-4 py-3 hover:bg-base-200/40 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary">
                          {lead.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-base-content/80">{lead.name}</p>
                          <p className="text-xs text-base-content/50">{lead.location} · {lead.type}</p>
                        </div>
                      </div>
                      <span className={`text-xs font-semibold ${lead.statusColor}`}>{lead.status}</span>
                    </div>
                  ))}
                </div>
                <div className="px-4 pb-4 pt-3">
                  <div className="p-3 rounded-xl bg-primary/8 border border-primary/20">
                    <p className="text-xs font-semibold text-primary mb-1">Pipeline Note</p>
                    <p className="text-xs text-base-content/70">3 leads ready for follow-up call. Thomas H. responded to outreach — property in prime Airbnb location, 2-bed apartment.</p>
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
            Why Landlord Lead Generation Matters
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-5">
            Growth Shouldn't Depend on Who You Know
          </h2>
          <p className="text-lg text-base-content/65 leading-relaxed max-w-2xl mx-auto mb-8">
            Most STR operators grow their portfolio through referrals and chance. That works — until it doesn't. When you need predictable growth, you need a system that consistently puts you in front of the right landlords, in your target area, before your competitors do.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {[
              { icon: <Target className="w-5 h-5 text-primary" />, title: 'Qualified, Not Random', body: 'Every lead is filtered for location, property type, and intent — so you spend time on conversations that have real potential.' },
              { icon: <TrendingUp className="w-5 h-5 text-secondary" />, title: 'Consistent Volume', body: 'A structured lead gen system keeps your pipeline filled — not spiking after referrals and empty the month after.' },
              { icon: <Layers className="w-5 h-5 text-accent" />, title: 'Scalable as You Grow', body: 'The system scales with your business — more volume, wider geography, and improved targeting as your portfolio grows.' },
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
              The Problem With No Lead Gen System
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              Why Most Operators Struggle to Scale
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto">
              Without a structured approach to finding landlords, growth stays slow, unpredictable, and heavily dependent on luck.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {problemCards.map((card, i) => (
              <div key={i} className="flex gap-3 p-5 rounded-2xl bg-base-200 border border-base-300 hover:border-error/30 transition-colors">
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
              A Pipeline That Works in the Background
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto">
              A well-built landlord lead generation system runs consistently — qualified prospects flowing in while you focus on managing properties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <CalendarCheck className="w-5 h-5 text-success" />, title: 'Regular Lead Delivery', body: 'New qualified landlord prospects are delivered on a regular cadence — not in batches when you remember to ask.' },
              { icon: <Target className="w-5 h-5 text-success" />, title: 'Pre-Qualified Before You See Them', body: 'Leads are screened against your criteria — property type, location, readiness — before they ever reach your pipeline.' },
              { icon: <Phone className="w-5 h-5 text-success" />, title: 'Warm When You Call', body: "Your first conversation with a landlord isn't cold — they've already expressed interest and know what you offer." },
              { icon: <TrendingUp className="w-5 h-5 text-success" />, title: 'Data-Backed Optimisation', body: 'Every lead source and message is tracked so the system improves over time — more volume, better conversion.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-2xl bg-base-100 border border-base-300 hover:border-success/30 transition-colors">
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

      {/* ── WHAT WE DELIVER ──────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Layers className="w-3.5 h-3.5" />
              What We Deliver
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              Four Areas of Landlord Lead Generation
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto">
              From finding the right prospects to getting them into your pipeline warm, here's what each engagement covers.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block rounded-2xl border border-base-300 overflow-hidden">
            <div className="grid grid-cols-[1fr_2fr_1.5fr] bg-base-200 border-b border-base-300 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-base-content/50">
              <span>Service Area</span>
              <span>What's Included</span>
              <span>The Outcome</span>
            </div>
            {whatWeDeliver.map((row, i) => (
              <div key={i} className={`grid grid-cols-[1fr_2fr_1.5fr] gap-4 px-6 py-5 items-start border-b border-base-300 last:border-0 hover:bg-base-200/50 transition-colors ${i % 2 === 0 ? 'bg-base-100' : 'bg-base-50'}`}>
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
            {whatWeDeliver.map((row, i) => (
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

      {/* ── OUR APPROACH ─────────────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              How We Approach It
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              Targeted, Qualified, and Tracked
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto">
              Our landlord lead generation approach is built around finding the right property owners and getting them to the right conversation — efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {approachPoints.map((item, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/30 transition-colors">
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
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Layers className="w-3.5 h-3.5" />
              Before vs After
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              No Lead Gen vs Structured Landlord Pipeline
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto">
              The difference between hoping landlords find you and having a system that finds them first.
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden md:block rounded-2xl border border-base-300 overflow-hidden">
            <div className="grid grid-cols-3 bg-base-200 border-b border-base-300 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-base-content/50">
              <span>Area</span>
              <span className="flex items-center gap-1.5"><XCircle className="w-3.5 h-3.5 text-error" /> Without Lead Gen</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-success" /> With Our System</span>
            </div>
            {comparisonRows.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 gap-4 px-6 py-4 border-b border-base-300 last:border-0 ${i % 2 === 0 ? 'bg-base-100' : 'bg-base-50'}`}>
                <span className="font-semibold text-sm text-base-content self-center">{row.area}</span>
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
                <div className="bg-base-200 px-4 py-2.5 text-sm font-semibold text-base-content">{row.area}</div>
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
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
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
              Landlord lead generation is most valuable for operators who want a structured, predictable way to grow their managed portfolio.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whoItIsFor.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/30 transition-colors">
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
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-600 text-sm font-medium mb-4">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              What Clients Say
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              Pipelines That Actually Deliver
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "Before working with Assistophere I was entirely reliant on referrals for new landlords. Within three months of having a proper lead gen system we onboarded four new properties — all from the pipeline they built.", name: 'Marcus D.', role: 'Property management company, Manchester' },
              { quote: "The quality of leads was what surprised me most. I expected a list of names — instead I got pre-qualified prospects who had already expressed interest in STR management. The conversion rate was significantly better than anything I'd done in-house.", name: 'Sophie W.', role: 'Co-host, London' },
              { quote: "We were spending hours a week doing cold outreach with almost nothing to show for it. Having a professional lead generation system running in the background has completely changed how we grow our portfolio.", name: 'James T.', role: 'Multi-property STR operator, Birmingham' },
            ].map((t, i) => (
              <div key={i} className="flex flex-col gap-4 p-6 rounded-2xl bg-base-100 border border-base-300 hover:border-amber-400/30 transition-colors">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-base-content/70 italic leading-relaxed flex-1">"{t.quote}"</p>
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
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
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
      <section className="py-20 lg:py-28">
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
              Ready to Build a Reliable Landlord Pipeline?
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto mb-8">
              Stop waiting for referrals. Get a structured landlord lead generation system that consistently brings qualified property owners to your door.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="pulse-cta-ll btn btn-primary btn-lg rounded-full px-8 gap-2">
                Start Building Your Pipeline <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services/lead-generation" className="btn btn-outline btn-lg rounded-full">
                View All Lead Gen Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LandlordLeadsView
