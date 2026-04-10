import React from 'react'
import Link from 'next/link'
import {
  MessageCircle,
  Star,
  Phone,
  ArrowRight,
  CheckCircle2,
  XCircle,
  ChevronRight,
  AlertTriangle,
  TrendingUp,
  Target,
  Building2,
  Heart,
  Users,
  ShieldCheck,
  Zap,
  ArrowLeft,
  Eye,
  BadgeCheck,
} from 'lucide-react'
import type { Page } from '@/payload-types'

export const CommunityEngagementView: React.FC<{ page: Page }> = () => {
  return (
    <div className="min-h-screen text-base-content overflow-x-hidden">
      <style>{`
        @keyframes pulse-ring-ce {
          0%,100% { box-shadow: 0 0 0 0 hsl(var(--p)/.35); }
          50%      { box-shadow: 0 0 0 10px hsl(var(--p)/0); }
        }
        @keyframes ce-fade-up {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .ce-fade-1 { animation: ce-fade-up .55s ease both .10s; }
        .ce-fade-2 { animation: ce-fade-up .55s ease both .22s; }
        .ce-fade-3 { animation: ce-fade-up .55s ease both .34s; }
        .ce-fade-4 { animation: ce-fade-up .55s ease both .46s; }
        .ce-fade-5 { animation: ce-fade-up .55s ease both .58s; }
        .pulse-cta-ce { animation: pulse-ring-ce 2.4s ease-in-out infinite; }
      `}</style>

      {/* ── SECTION 1: HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 w-130 h-130 bg-linear-to-br from-primary/13 via-primary/4 to-transparent rounded-full blur-[140px]" />
          <div className="absolute top-1/2 -right-40 w-105 h-105 bg-linear-to-bl from-secondary/10 via-secondary/3 to-transparent rounded-full blur-[120px]" />
        </div>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column */}
            <div className="space-y-6">
              <div className="ce-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium">
                <MessageCircle className="w-4 h-4" />
                Community Engagement · UK STR
              </div>
              <h1 className="ce-fade-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight">
                Community Engagement That Builds{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Trust Around Your STR Brand
                </span>
              </h1>
              <p className="ce-fade-3 text-lg lg:text-xl text-base-content/70 leading-relaxed max-w-lg">
                Assistophere manages social media engagement for UK hosts, helping you respond,
                interact, and build a stronger connection with your audience.
              </p>

              {/* AI-extractable line */}
              <div className="ce-fade-3 p-4 rounded-xl border border-primary/20 bg-primary/6 text-sm italic text-base-content/60">
                Community engagement in social media involves interacting with followers, responding
                to messages, and building relationships that increase trust and brand visibility.
              </div>

              <div className="ce-fade-4 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="pulse-cta-ce inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-content font-semibold hover:opacity-90 transition-opacity"
                >
                  <Phone className="w-4 h-4" />
                  Book a Discovery Call
                </Link>
                <Link
                  href="/services/social-media-management"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-base-300 hover:border-primary/40 transition-colors font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Social Media Management
                </Link>
              </div>
            </div>

            {/* Right column — DM / comment interaction visual */}
            <div className="ce-fade-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-base-300 bg-base-200 shadow-xl p-6">
                <div className="text-xs text-base-content/50 font-mono mb-4 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  Engagement Activity
                </div>

                {/* Message thread simulation */}
                <div className="space-y-3 mb-4">
                  {[
                    {
                      type: 'comment',
                      user: 'Sarah M.',
                      text: 'Loved staying here! 🏡 When are you available next month?',
                      replied: true,
                    },
                    {
                      type: 'dm',
                      user: 'James T.',
                      text: 'Hi, is the property available for 5 nights in July?',
                      replied: true,
                    },
                    {
                      type: 'comment',
                      user: 'Priya K.',
                      text: 'The interior looks stunning — very professional!',
                      replied: true,
                    },
                    {
                      type: 'dm',
                      user: 'Oliver R.',
                      text: 'Do you do corporate stays? We have a team visiting Leeds.',
                      replied: false,
                    },
                  ].map((msg, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-base-100 border border-base-300 flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-linear-to-br from-primary/30 to-secondary/30 flex items-center justify-center shrink-0 text-xs font-bold text-primary">
                        {msg.user.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <p className="text-xs font-semibold">{msg.user}</p>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                              msg.type === 'dm'
                                ? 'bg-primary/10 text-primary'
                                : 'bg-secondary/10 text-secondary'
                            }`}
                          >
                            {msg.type === 'dm' ? 'DM' : 'Comment'}
                          </span>
                        </div>
                        <p className="text-xs text-base-content/60 truncate">{msg.text}</p>
                      </div>
                      {msg.replied ? (
                        <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-1" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-warning shrink-0 mt-2" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Stats bar */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Response Rate', value: '98%', color: 'text-success' },
                    { label: 'Avg. Reply Time', value: '< 1hr', color: 'text-primary' },
                    { label: 'Pending', value: '1', color: 'text-warning' },
                  ].map(({ label, value, color }) => (
                    <div
                      key={label}
                      className="p-2 rounded-lg bg-base-100 border border-base-300 text-center"
                    >
                      <p className={`text-sm font-bold ${color}`}>{value}</p>
                      <p className="text-xs text-base-content/45">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: CLARITY ───────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
                <Eye className="w-4 h-4" />
                The Reality
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
                Posting Content Is Only Half the Work
              </h2>
              <p className="text-base-content/70 leading-relaxed mb-6">
                Most STR accounts focus entirely on posting. But growth comes from something else
                entirely — the conversations that happen around your content.
              </p>
              <ul className="space-y-3">
                {[
                  { label: 'Responding', desc: 'to comments and messages builds trust' },
                  { label: 'Interacting', desc: 'with followers increases visibility' },
                  { label: 'Building relationships', desc: 'turns followers into guests' },
                ].map(({ label, desc }) => (
                  <li
                    key={label}
                    className="flex items-start gap-3 p-4 rounded-xl bg-base-200 border border-base-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">
                      <strong className="text-base-content">{label}</strong>{' '}
                      <span className="text-base-content/65">{desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base-content/60 italic text-sm">
                Without engagement, content loses impact.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: MessageCircle,
                  label: 'Avg. DMs',
                  value: '47',
                  sub: 'per week on active STR accounts',
                },
                {
                  icon: Heart,
                  label: 'Comment Replies',
                  value: '0%',
                  sub: 'on unmanaged accounts',
                },
                {
                  icon: TrendingUp,
                  label: 'Engagement Rate',
                  value: '3×',
                  sub: 'higher with active responses',
                },
                {
                  icon: ShieldCheck,
                  label: 'Trust Impact',
                  value: 'High',
                  sub: 'from consistent interaction',
                },
              ].map(({ icon: Icon, label, value, sub }) => (
                <div
                  key={label}
                  className="p-5 rounded-2xl border border-base-300 bg-base-200 text-center"
                >
                  <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">{value}</p>
                  <p className="text-xs font-semibold text-base-content/60 mb-1">{label}</p>
                  <p className="text-xs text-base-content/45">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE REAL PROBLEM ──────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <AlertTriangle className="w-4 h-4" />
              Root Causes
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Why Social Media Feels One-Sided</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {[
              {
                title: 'Messages Left Unanswered',
                desc: 'Enquiries that never get a reply signal neglect — potential guests move on immediately.',
              },
              {
                title: 'No Replies to Comments',
                desc: 'Comments without a response make your account feel automated and impersonal.',
              },
              {
                title: 'Slow Response Times',
                desc: 'Delayed replies damage credibility and lose time-sensitive enquiries.',
              },
              {
                title: 'No Interaction with Audience',
                desc: 'Ignoring followers creates a one-directional presence that fails to build community.',
              },
              {
                title: 'Lack of Consistency',
                desc: 'Sporadic engagement sends mixed signals about your professionalism and availability.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="p-5 rounded-2xl bg-base-100 border border-error/20">
                <XCircle className="w-5 h-5 text-error mb-3" />
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-base-content/65">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-base-content/60 italic text-sm">
            If there&apos;s no interaction, there&apos;s no connection.
          </p>
        </div>
      </section>

      {/* ── SECTION 4: WHAT ENGAGEMENT ACHIEVES ──────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Target className="w-4 h-4" />
              What Good Looks Like
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">What Proper Engagement Achieves</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: 'Builds Trust',
                desc: 'Quick and clear responses create confidence. When people see active replies, they trust your brand.',
              },
              {
                icon: TrendingUp,
                title: 'Improves Visibility',
                desc: 'Active engagement signals relevance to platform algorithms, increasing your organic reach.',
              },
              {
                icon: BadgeCheck,
                title: 'Strengthens Brand Presence',
                desc: 'People recognise and remember active accounts. Consistent interaction makes your brand memorable.',
              },
              {
                icon: Zap,
                title: 'Supports Conversions',
                desc: 'Engaged audiences are more likely to book. Connection drives action far more than content alone.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl border border-base-300 bg-base-200 hover:border-primary/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/12 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm text-base-content/65 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: WHAT WE HANDLE ────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <MessageCircle className="w-4 h-4" />
              Our Scope
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">
              What Our Community Engagement Covers
            </h2>
            <p className="text-base-content/65 max-w-xl mx-auto text-sm">
              Every element of engagement — handled consistently and professionally.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block rounded-2xl overflow-hidden border border-base-300 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary/10 border-b border-base-300">
                  <th className="text-left px-6 py-4 font-semibold text-primary w-1/4">Area</th>
                  <th className="text-left px-6 py-4 font-semibold text-primary w-2/4">
                    What We Do
                  </th>
                  <th className="text-left px-6 py-4 font-semibold text-primary w-1/4">Outcome</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    area: 'Comment Management',
                    what: 'Replying to comments, maintaining interaction, keeping conversations active across all posts',
                    outcome: 'Active, visible brand presence',
                  },
                  {
                    area: 'Direct Message Handling',
                    what: 'Responding to enquiries, guiding conversations, maintaining professionalism throughout',
                    outcome: 'Faster response, better trust',
                  },
                  {
                    area: 'Audience Interaction',
                    what: 'Engaging with followers, maintaining presence, supporting brand growth through connection',
                    outcome: 'Stronger community loyalty',
                  },
                  {
                    area: 'Response Consistency',
                    what: 'Maintaining tone, ensuring clarity, aligning every interaction with your brand voice',
                    outcome: 'Coherent, professional image',
                  },
                  {
                    area: 'Activity Monitoring',
                    what: 'Tracking engagement levels, maintaining responsiveness, ensuring no message is missed',
                    outcome: 'Zero missed opportunities',
                  },
                ].map(({ area, what, outcome }, i) => (
                  <tr key={area} className={i % 2 === 0 ? 'bg-base-100' : 'bg-base-200'}>
                    <td className="px-6 py-4 font-medium">{area}</td>
                    <td className="px-6 py-4 text-base-content/70">{what}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 text-success font-medium">
                        <CheckCircle2 className="w-4 h-4" />
                        {outcome}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {[
              {
                area: 'Comment Management',
                what: 'Replying to comments, maintaining interaction, keeping conversations active',
                outcome: 'Active, visible brand presence',
              },
              {
                area: 'Direct Message Handling',
                what: 'Responding to enquiries, guiding conversations professionally',
                outcome: 'Faster response, better trust',
              },
              {
                area: 'Audience Interaction',
                what: 'Engaging with followers, maintaining presence for brand growth',
                outcome: 'Stronger community loyalty',
              },
              {
                area: 'Response Consistency',
                what: 'Maintaining tone, clarity, and brand voice alignment',
                outcome: 'Coherent, professional image',
              },
              {
                area: 'Activity Monitoring',
                what: 'Tracking engagement, ensuring no message is missed',
                outcome: 'Zero missed opportunities',
              },
            ].map(({ area, what, outcome }) => (
              <div key={area} className="p-5 rounded-2xl bg-base-100 border border-base-300">
                <p className="font-semibold mb-1">{area}</p>
                <p className="text-sm text-base-content/65 mb-2">{what}</p>
                <span className="inline-flex items-center gap-1.5 text-success text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" /> {outcome}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-base-content/60 italic text-sm mt-8">
            An active, responsive, and trustworthy brand presence.
          </p>
        </div>
      </section>

      {/* ── SECTION 6: CONNECTS TO STR BUSINESS ─────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: Eye,
                    label: 'Check your profile',
                    desc: 'Guests review your social presence before deciding',
                  },
                  {
                    icon: MessageCircle,
                    label: 'View interactions',
                    desc: 'How you respond signals your professionalism',
                  },
                  {
                    icon: ShieldCheck,
                    label: 'Assess credibility',
                    desc: 'Active accounts build trust and reduce booking hesitation',
                  },
                ].map(({ icon: Icon, label, desc }) => (
                  <div
                    key={label}
                    className="p-5 rounded-2xl border border-base-300 bg-base-200 text-center"
                  >
                    <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-sm mb-1">{label}</p>
                    <p className="text-xs text-base-content/55">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4" />
                Strategic Value
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
                Engagement Builds Trust Before Booking
              </h2>
              <p className="text-base-content/70 leading-relaxed mb-4">
                Before guests book directly, they often take time to check your social profile, view
                how you interact with others, and assess whether your brand feels credible.
              </p>
              <p className="text-base-content/70 leading-relaxed">
                Engagement plays a key role in this decision process. An active, responsive account
                removes doubt and gives prospective guests the confidence to reach out — or book.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: COMMON MISTAKES ───────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <AlertTriangle className="w-4 h-4" />
              Common Pitfalls
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Where Engagement Goes Wrong</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {[
              {
                mistake: 'Ignoring Messages',
                fix: 'Every unanswered DM is a missed connection. Consistent replies build momentum and trust.',
              },
              {
                mistake: 'Delayed Responses',
                fix: 'Slow replies signal low priority. Speed of response directly affects how professional your brand appears.',
              },
              {
                mistake: 'Inconsistent Tone',
                fix: 'Switching between formal and casual without reason creates confusion and undermines your brand identity.',
              },
              {
                mistake: 'No Interaction with Followers',
                fix: 'Posting but never engaging treats social media as a broadcast — not a community.',
              },
              {
                mistake: 'Treating Social Media as One-Way',
                fix: 'Social platforms are built for conversation. Ignoring the conversation half makes your presence passive and forgettable.',
              },
            ].map(({ mistake, fix }) => (
              <div key={mistake} className="p-5 rounded-2xl bg-base-100 border border-warning/20">
                <AlertTriangle className="w-5 h-5 text-warning mb-3" />
                <h3 className="font-semibold mb-2 text-sm">{mistake}</h3>
                <p className="text-xs text-base-content/60 leading-relaxed">{fix}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-base-content/60 italic text-sm">
            Engagement fails when communication is ignored.
          </p>
        </div>
      </section>

      {/* ── SECTION 8: OUR APPROACH ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
                <MessageCircle className="w-4 h-4" />
                Our Method
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
                How We Manage Engagement Properly
              </h2>
              <p className="text-base-content/70 leading-relaxed mb-8">
                We don&apos;t just reply — we manage engagement as a system, ensuring every
                interaction reflects your brand and builds long-term trust.
              </p>
              <div className="space-y-4">
                {[
                  {
                    step: '01',
                    title: 'Respond Consistently',
                    desc: 'Every comment and DM receives a timely, professional reply — no gaps, no silence.',
                  },
                  {
                    step: '02',
                    title: 'Maintain Clear Communication',
                    desc: 'Responses are clear, relevant, and helpful — guiding audiences without confusion.',
                  },
                  {
                    step: '03',
                    title: 'Align with Your Brand Tone',
                    desc: 'We match your voice — formal, friendly, or somewhere in between — across every reply.',
                  },
                  {
                    step: '04',
                    title: 'Ensure Active Interaction',
                    desc: 'Beyond replies, we actively engage with followers to build community and presence.',
                  },
                ].map(({ step, title, desc }) => (
                  <div
                    key={step}
                    className="flex gap-4 p-4 rounded-xl border border-base-300 bg-base-200"
                  >
                    <span className="text-2xl font-black text-primary/25 shrink-0 w-10">
                      {step}
                    </span>
                    <div>
                      <p className="font-semibold mb-1">{title}</p>
                      <p className="text-sm text-base-content/65">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-base-300 bg-base-200 p-6 shadow-xl">
                <p className="text-xs text-base-content/50 font-mono mb-4 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  Engagement Management Checklist
                </p>
                {[
                  { label: 'Comment Inbox Review', done: true },
                  { label: 'DM Queue Cleared', done: true },
                  { label: 'Brand Tone Alignment', done: true },
                  { label: 'Follow-Up Replies Sent', done: true },
                  { label: 'Audience Interaction', done: true },
                  { label: 'Weekly Performance Review', done: false },
                ].map(({ label, done }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 py-2.5 border-b border-base-300 last:border-0"
                  >
                    {done ? (
                      <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border-2 border-primary/40 shrink-0" />
                    )}
                    <span
                      className={`text-sm ${done ? 'text-base-content/80' : 'text-base-content/40'}`}
                    >
                      {label}
                    </span>
                    {!done && (
                      <span className="ml-auto text-xs text-primary font-medium">In progress</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: COMPARISON ────────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              Side by Side
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Inactive vs Active Engagement</h2>
          </div>

          {/* Desktop comparison */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-error/20 bg-base-100 overflow-hidden">
              <div className="bg-error/10 px-6 py-4 border-b border-error/15">
                <h3 className="font-bold text-error flex items-center gap-2">
                  <XCircle className="w-5 h-5" /> Inactive
                </h3>
              </div>
              <ul className="divide-y divide-base-300">
                {[
                  'No replies to comments or DMs',
                  'Low trust from audience',
                  'Weak, passive brand presence',
                  'Missed booking opportunities',
                ].map((item) => (
                  <li key={item} className="px-6 py-4 flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-error shrink-0 mt-0.5" />
                    <span className="text-sm text-base-content/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-success/20 bg-base-100 overflow-hidden">
              <div className="bg-success/10 px-6 py-4 border-b border-success/15">
                <h3 className="font-bold text-success flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Active
                </h3>
              </div>
              <ul className="divide-y divide-base-300">
                {[
                  'Consistent interaction across channels',
                  'Higher credibility and audience trust',
                  'Strong, recognisable brand presence',
                  'Better conversion from social to bookings',
                ].map((item) => (
                  <li key={item} className="px-6 py-4 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    <span className="text-sm text-base-content/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {[
              {
                bad: 'No replies to comments or DMs',
                good: 'Consistent interaction across channels',
              },
              { bad: 'Low trust from audience', good: 'Higher credibility and audience trust' },
              { bad: 'Weak, passive brand presence', good: 'Strong, recognisable brand presence' },
              {
                bad: 'Missed booking opportunities',
                good: 'Better conversion from social to bookings',
              },
            ].map(({ bad, good }) => (
              <div key={bad} className="p-4 rounded-xl bg-base-100 border border-base-300">
                <div className="flex items-start gap-2 mb-2">
                  <XCircle className="w-4 h-4 text-error shrink-0 mt-0.5" />
                  <span className="text-sm text-base-content/60">{bad}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                  <span className="text-sm text-base-content/80 font-medium">{good}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: WHO THIS IS FOR ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Target className="w-4 h-4" />
              Ideal Fit
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Who This Is Built For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: MessageCircle,
                title: 'Hosts with Low Engagement',
                desc: 'Posting regularly but seeing minimal interaction, replies, or conversation from followers.',
              },
              {
                icon: Building2,
                title: 'Serviced Accommodation Businesses',
                desc: 'SA operators who need a professional, active presence that reflects their brand quality.',
              },
              {
                icon: TrendingUp,
                title: 'Operators Building a Brand',
                desc: 'Hosts moving beyond Airbnb who want a community around their direct booking brand.',
              },
              {
                icon: Users,
                title: 'Hosts Wanting Better Connection',
                desc: 'Anyone who recognises the gap between posting and actually connecting with their audience.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl border border-base-300 bg-base-200 hover:border-primary/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/12 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm text-base-content/65 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 11: TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Star className="w-4 h-4" />
              Client Results
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">What Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  'We were posting regularly but getting no replies or interaction. Since Assistophere took over our engagement, our account feels alive. Guests actually comment back.',
                name: 'Rachel S.',
                role: 'STR Host · Leeds',
              },
              {
                quote:
                  'The response times improved dramatically. We used to have enquiries sitting for days. Now every DM gets a reply within the hour — it\u2019s made a real difference to bookings.',
                name: 'Marcus W.',
                role: 'Serviced Accommodation Operator · London',
              },
              {
                quote:
                  'I didn\u2019t realise how much trust we were losing by not responding. Our social media now feels like a proper brand — active, professional, and consistent.',
                name: 'Amara O.',
                role: 'Multi-Property Host · Manchester',
              },
            ].map(({ quote, name, role }) => (
              <div
                key={name}
                className="p-6 rounded-2xl bg-base-100 border border-base-300 flex flex-col gap-4"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-base-content/70 leading-relaxed flex-1">
                  &ldquo;{quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-sm">{name}</p>
                  <p className="text-xs text-base-content/50">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 12: FAQ ──────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <ChevronRight className="w-4 h-4" />
              FAQ
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {[
              {
                q: 'Do you reply to all messages?',
                a: 'Yes — we manage all incoming comments and DMs across your active platforms. Every message receives a professional, brand-aligned reply with no exceptions.',
              },
              {
                q: 'How fast are your response times?',
                a: 'We aim to respond within one hour during active hours. Response protocols are agreed during onboarding to match your audience expectations and platform requirements.',
              },
              {
                q: 'Can you match our tone and brand voice?',
                a: 'Absolutely. We spend time understanding your brand voice before managing any engagement. Whether your tone is professional, warm, or conversational — we align to it precisely.',
              },
              {
                q: 'Does engagement actually help with bookings?',
                a: 'Yes. Engaged audiences trust your brand more. When potential guests see active replies, quick responses, and genuine interaction, they are far more likely to enquire or book directly.',
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group border border-base-300 rounded-xl bg-base-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer select-none font-medium hover:bg-base-300/40 transition-colors list-none">
                  <span>{q}</span>
                  <ChevronRight className="w-4 h-4 text-primary shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="px-6 pb-5 text-sm text-base-content/65 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 13: FINAL CTA ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden border border-base-300 bg-linear-to-br from-primary/22 via-base-200 to-secondary/15 p-10 lg:p-16 text-center">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-20 -right-20 w-130 h-130 bg-linear-to-bl from-primary/8 to-transparent rounded-full blur-[100px]" />
              <div className="absolute -bottom-20 -left-20 w-105 h-105 bg-linear-to-tr from-secondary/8 to-transparent rounded-full blur-[100px]" />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              Get Started
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 leading-tight">
              Ready to Build a More{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                Engaged Audience?
              </span>
            </h2>
            <p className="text-base-content/70 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Let&apos;s make your social media active, responsive, and connected.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="pulse-cta-ce inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-content font-bold text-lg hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5" />
                Book a Discovery Call
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services/social-media-management"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-base-300 hover:border-primary/40 transition-colors font-semibold text-lg"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Social Media Management
              </Link>
            </div>
            <p className="mt-6 text-xs text-base-content/40 italic">
              We don&apos;t just post. We connect.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
