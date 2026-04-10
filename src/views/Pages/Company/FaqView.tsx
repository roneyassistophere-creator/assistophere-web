'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import type { Page } from '@/payload-types'
import {
  HelpCircle,
  ChevronDown,
  MessageCircle,
  Home,
  Settings,
  Megaphone,
  Cpu,
  CreditCard,
  ShieldCheck,
  BarChart2,
  ArrowRight,
  Search,
} from 'lucide-react'

// ─── DATA ─────────────────────────────────────────────────────────────────────

const categories = [
  {
    id: 'getting-started',
    label: 'Getting Started',
    icon: Home,
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/25',
    faqs: [
      {
        q: 'What exactly does Assistophere do?',
        a: 'Assistophere is a full-service STR management and virtual assistance company based in the UK. We handle everything from Airbnb listing setup and guest communication to direct booking systems, social media management, and business systems — so you can scale your short-term rental business without the overwhelm.',
      },
      {
        q: 'Who is Assistophere for?',
        a: 'We work with STR hosts (from single property owners to multi-property portfolio holders), property investors entering the short-term rental market, and accommodation businesses looking to systemise and grow. If you manage or plan to manage short-term rentals, we can help.',
      },
      {
        q: 'Do I need to already have properties listed to work with you?',
        a: 'No. We help clients from scratch — including brand-new hosts setting up their first listing — through to experienced operators looking to optimise and scale. We meet you wherever you are.',
      },
      {
        q: 'How do I get started with Assistophere?',
        a: "The first step is a free discovery call. We'll learn about your business, goals, and current setup, then propose a tailored plan. You can book directly via our Contact page or the booking link in our footer.",
      },
      {
        q: 'Do you only work with UK-based clients?',
        a: 'Our primary market is the UK, but we work with clients internationally. Most of our services — listing management, social media, guest communication, systems building — are location-independent. Contact us to discuss your specific situation.',
      },
    ],
  },
  {
    id: 'services',
    label: 'Our Services',
    icon: Settings,
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    border: 'border-secondary/25',
    faqs: [
      {
        q: 'What does your Airbnb VA service include?',
        a: 'Our Airbnb VA service covers listing creation and optimisation, multi-platform listing management, professional photography coordination, dynamic pricing optimisation, guest communication, guest vetting, check-in/check-out management, calendar management, cleaning coordination, linen & toiletries management, property maintenance tracking, and monthly finance reporting.',
      },
      {
        q: 'What does systems building involve?',
        a: 'Systems building includes setting up the operational backbone of your STR business: STR business setup from scratch, automation of repetitive workflows, SOP (Standard Operating Procedure) creation, and team structuring to define roles and responsibilities. This is designed for hosts who want their business to run without constant hands-on management.',
      },
      {
        q: 'Do you manage social media for STR businesses?',
        a: 'Yes. Our social media management service covers strategy, content creation, posting and scheduling, brand growth, platform management, and community engagement — all tailored specifically to short-term rental and accommodation businesses.',
      },
      {
        q: 'Can you help me build a direct booking website?',
        a: "Absolutely. We build direct booking websites, set up booking engine integrations, configure payment systems, implement direct booking conversion optimisation strategies, and run Google Ads and SEO campaigns to drive traffic. This is designed to reduce your dependency on Airbnb's commission model.",
      },
      {
        q: 'Do you offer consultancy or training?',
        a: 'Yes. We offer Airbnb consultancy and training sessions for hosts who want expert guidance without full ongoing management. This includes performance reviews, strategy sessions, pricing advice, and operational coaching.',
      },
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing & Packages',
    icon: CreditCard,
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/25',
    faqs: [
      {
        q: 'How is your service priced?',
        a: "Our pricing is tailored to each client's needs and scale. We don't use a one-size-fits-all model because every STR business is different. Pricing depends on which services you need, the number of properties, and the scope of work. We'll discuss this transparently during your discovery call.",
      },
      {
        q: 'Do you charge a percentage of booking revenue?',
        a: 'It depends on the service. For some management services, a percentage model is an option. For others (like social media, systems building, and one-off setups), we use fixed monthly or project-based pricing. We will be clear about all costs upfront.',
      },
      {
        q: 'Are there any setup fees?',
        a: 'Some services involve a one-time setup fee to cover the initial build, onboarding, or configuration. This will be clearly outlined in your proposal before you commit to anything.',
      },
      {
        q: 'Can I pick individual services or do I need a full package?',
        a: 'You can choose individual services or combine them into a tailored package. Most clients start with a core service and add on as they grow. We are flexible and work around what makes sense for your business.',
      },
      {
        q: 'Do you offer a free trial?',
        a: 'We do not offer a free trial, but we do offer a free discovery call to help you understand exactly what you would be getting before committing. This ensures there are no surprises.',
      },
    ],
  },
  {
    id: 'working-with-us',
    label: 'Working With Us',
    icon: MessageCircle,
    color: 'text-info',
    bg: 'bg-info/10',
    border: 'border-info/25',
    faqs: [
      {
        q: 'How do you communicate with clients?',
        a: 'We primarily use email and scheduled video calls. For active managed clients, we also use project management tools and messaging platforms agreed at onboarding. You will always have a clear point of contact and know what is being worked on.',
      },
      {
        q: 'What does the onboarding process look like?',
        a: 'After your discovery call and agreement, we run a structured onboarding process: gathering access and credentials, reviewing your current setup, creating a service plan, and setting up communication channels. Most clients are fully onboarded within 5–10 business days.',
      },
      {
        q: 'How long are contracts?',
        a: 'We offer both monthly rolling and longer-term arrangements depending on the service. There are no lock-in surprises — contract terms are discussed and agreed upfront.',
      },
      {
        q: 'What information do I need to provide to get started?',
        a: 'This depends on the service. Generally, you will need to share access to your listings, property details, photos, and any relevant login credentials. We will provide a clear onboarding checklist so you know exactly what to prepare.',
      },
      {
        q: 'Can I pause or cancel the service?',
        a: 'Yes. We understand business circumstances change. Our contracts include clear notice periods for pausing or cancelling, which will be outlined before you sign. We aim to make this as straightforward as possible.',
      },
    ],
  },
  {
    id: 'social-media',
    label: 'Social Media',
    icon: Megaphone,
    color: 'text-success',
    bg: 'bg-success/10',
    border: 'border-success/25',
    faqs: [
      {
        q: 'Which social media platforms do you manage?',
        a: 'We manage Instagram, Facebook, TikTok, and LinkedIn for STR businesses. Platform selection is based on your target audience and business goals — we will recommend the right mix during your strategy phase.',
      },
      {
        q: 'Do you create the content or do I need to provide it?',
        a: 'We handle content creation as part of the service — including copywriting, graphics design, and where applicable, video editing. You do not need to provide content unless you want to share specific property updates or personal brand material.',
      },
      {
        q: 'How often will you post on my accounts?',
        a: 'Posting frequency is agreed during onboarding based on your goals and package. Typical packages range from 3 to 7 posts per week across platforms. We also handle stories, reels, and engagement activity.',
      },
      {
        q: 'Will I be able to review content before it goes live?',
        a: 'Yes. All content goes through an approval workflow. You will receive a content calendar or individual drafts to review and approve before anything is published.',
      },
      {
        q: 'How do you measure the success of social media management?',
        a: 'We track key metrics including follower growth, reach, engagement rate, and (where trackable) referral traffic to your booking pages. You will receive regular performance reports as part of the service.',
      },
    ],
  },
  {
    id: 'technology',
    label: 'Technology & Tools',
    icon: Cpu,
    color: 'text-warning',
    bg: 'bg-warning/10',
    border: 'border-warning/25',
    faqs: [
      {
        q: 'What tools and software do you use?',
        a: 'We use industry-standard tools across all service areas. For property management: Guesty, Hostfully, or Lodgify (depending on your setup). For social media: Later, Buffer, or Metricool. For communication: Slack, Notion, or ClickUp. All tools are chosen based on your existing stack and preferences.',
      },
      {
        q: 'Do I need to pay for additional software subscriptions?',
        a: 'Some tools require their own subscriptions (e.g. a channel manager or PMS). We will be transparent about any third-party costs as part of your setup plan. Where possible, we use tools you already have to minimise additional costs.',
      },
      {
        q: 'Can you integrate with my existing booking system?',
        a: 'In most cases, yes. We have experience integrating with major PMS platforms and channel managers. We will assess your current setup during onboarding and advise on the best integration approach.',
      },
      {
        q: 'Do you set up automation for guest communication?',
        a: 'Yes. Automated messaging is a key part of our guest communication service. We create message templates and trigger-based automations for check-in instructions, pre-arrival reminders, mid-stay check-ins, checkout reminders, and review requests.',
      },
    ],
  },
  {
    id: 'performance',
    label: 'Results & Performance',
    icon: BarChart2,
    color: 'text-error',
    bg: 'bg-error/10',
    border: 'border-error/25',
    faqs: [
      {
        q: 'How quickly will I see results?',
        a: 'This depends on the service. Listing optimisation and pricing changes can show results within 2–4 weeks. Social media growth typically takes 2–3 months to build meaningful momentum. Systems and automation benefits are visible as soon as they are live. We will set realistic expectations for every service.',
      },
      {
        q: 'Can you guarantee a specific increase in bookings or revenue?',
        a: 'We cannot ethically guarantee specific revenue figures — results depend on your property, market, and external factors like seasonality and competition. What we can guarantee is that we will implement proven strategies, communicate clearly, and continuously optimise based on data.',
      },
      {
        q: 'How do you report on performance?',
        a: 'Reporting frequency and format are agreed at onboarding. For most managed services, clients receive monthly reports covering key metrics. For more intensive services, we can provide weekly updates or a live dashboard.',
      },
      {
        q: 'What if I am not happy with the results?',
        a: "We take performance seriously and will work with you to address concerns proactively. If something isn't delivering as expected, we review the strategy, adjust the approach, and communicate transparently. Our goal is a long-term partnership, not a short-term contract.",
      },
    ],
  },
  {
    id: 'trust-and-security',
    label: 'Trust & Security',
    icon: ShieldCheck,
    color: 'text-neutral',
    bg: 'bg-neutral/10',
    border: 'border-neutral/25',
    faqs: [
      {
        q: 'How do you handle access to my accounts and property details?',
        a: 'All access credentials are stored securely and only shared with team members who need them for your service. We use secure password management practices and never store unnecessary sensitive information. You can revoke access at any time.',
      },
      {
        q: 'Is my business information kept confidential?',
        a: 'Absolutely. All client information is treated as strictly confidential. We do not share client details, revenue figures, or business specifics with third parties. Full details are in our Privacy Policy.',
      },
      {
        q: 'Are you GDPR compliant?',
        a: 'Yes. Assistophere Ltd is UK-based and operates in accordance with UK GDPR. We process personal data lawfully, transparently, and only for the purposes set out in our Privacy Policy. You can read our full Privacy Policy for details.',
      },
      {
        q: 'Do you have insurance?',
        a: 'Yes. We hold relevant business insurance for the services we provide. If you need specific details for due diligence purposes, please get in touch and we will provide what is needed.',
      },
    ],
  },
]

// ─── ACCORDION ITEM ────────────────────────────────────────────────────────────

function AccordionItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
        open
          ? 'border-primary/40 bg-primary/5'
          : 'border-base-300 bg-base-100 hover:border-base-content/20'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 p-5 text-left group"
        aria-expanded={open}
      >
        <span
          className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold mt-0.5 transition-colors ${open ? 'bg-primary text-primary-content' : 'bg-base-200 text-base-content/50 group-hover:bg-base-300'}`}
        >
          {index + 1}
        </span>
        <span className="flex-1 font-semibold text-sm leading-relaxed pr-2">{q}</span>
        <ChevronDown
          className={`shrink-0 w-4 h-4 text-base-content/40 mt-1 transition-transform duration-200 ${open ? 'rotate-180 text-primary' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-200 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 pl-16 text-sm text-base-content/65 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  )
}

// ─── MAIN VIEW ────────────────────────────────────────────────────────────────

export const FaqView: React.FC<{ page: Page }> = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id)
  const [search, setSearch] = useState('')

  const current = categories.find((c) => c.id === activeCategory) ?? categories[0]

  const filteredFaqs = search.trim()
    ? categories.flatMap((c) =>
        c.faqs
          .filter(
            (faq) =>
              faq.q.toLowerCase().includes(search.toLowerCase()) ||
              faq.a.toLowerCase().includes(search.toLowerCase()),
          )
          .map((faq) => ({ ...faq, categoryLabel: c.label, categoryColor: c.color })),
      )
    : null

  const totalFaqs = categories.reduce((acc, c) => acc + c.faqs.length, 0)

  return (
    <div className="min-h-screen text-base-content overflow-x-hidden">
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-faq { animation: fade-in-up 0.45s ease both; }
      `}</style>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-16 pb-14 lg:pt-20 lg:pb-16 border-b border-base-300">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 w-130 h-130 bg-linear-to-br from-primary/12 via-primary/4 to-transparent rounded-full blur-[140px]" />
          <div className="absolute top-1/2 -right-40 w-105 h-105 bg-linear-to-bl from-secondary/8 via-secondary/2 to-transparent rounded-full blur-[120px]" />
        </div>
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Help Centre · Assistophere
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Questions
            </span>
          </h1>
          <p className="text-base-content/60 text-lg max-w-xl mx-auto leading-relaxed mb-8">
            Everything you need to know about Assistophere, our services, and how we work.
            Can&apos;t find what you&apos;re looking for?{' '}
            <Link
              href="/contact"
              className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
            >
              Get in touch.
            </Link>
          </p>

          {/* Stats bar */}
          <div className="inline-flex items-center gap-6 px-6 py-3 rounded-2xl bg-base-200 border border-base-300 text-sm text-base-content/60">
            <span>
              <strong className="text-base-content font-bold">{totalFaqs}</strong> questions
              answered
            </span>
            <span className="w-px h-4 bg-base-300" />
            <span>
              <strong className="text-base-content font-bold">{categories.length}</strong>{' '}
              categories
            </span>
            <span className="w-px h-4 bg-base-300" />
            <span>
              Updated <strong className="text-base-content font-bold">April 2026</strong>
            </span>
          </div>
        </div>
      </section>

      {/* ── SEARCH ────────────────────────────────────────────────────────── */}
      <section className="border-b border-base-300 bg-base-200/40">
        <div className="container max-w-4xl mx-auto px-4 py-5">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-base-content/35" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search all questions…"
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-base-100 border border-base-300 text-sm placeholder:text-base-content/35 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/15 transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-base-content/40 hover:text-base-content/70 transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── SEARCH RESULTS ────────────────────────────────────────────────── */}
      {search.trim() && (
        <section className="py-12 lg:py-16">
          <div className="container max-w-4xl mx-auto px-4">
            <p className="text-sm text-base-content/50 mb-6">
              {filteredFaqs?.length ?? 0} result{filteredFaqs?.length !== 1 ? 's' : ''} for &ldquo;
              <strong className="text-base-content">{search}</strong>&rdquo;
            </p>
            {filteredFaqs && filteredFaqs.length > 0 ? (
              <div className="space-y-3">
                {filteredFaqs.map((faq, i) => (
                  <div key={i} className="anim-faq">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-xs font-medium px-2.5 py-0.5 rounded-full bg-base-200 border border-base-300 ${faq.categoryColor}`}
                      >
                        {faq.categoryLabel}
                      </span>
                    </div>
                    <AccordionItem q={faq.q} a={faq.a} index={i} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <HelpCircle className="w-10 h-10 text-base-content/20 mx-auto mb-3" />
                <p className="text-base-content/50 text-sm">No matching questions found.</p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                >
                  Ask us directly <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── MAIN LAYOUT ───────────────────────────────────────────────────── */}
      {!search.trim() && (
        <section className="py-12 lg:py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
              {/* ── SIDEBAR ─────────────────────────────────────────────── */}
              <aside className="lg:w-72 xl:w-80 shrink-0">
                <div className="lg:sticky lg:top-24 space-y-1.5">
                  <p className="text-xs font-semibold text-base-content/40 uppercase tracking-widest px-3 mb-3">
                    Categories
                  </p>
                  {categories.map((cat) => {
                    const Icon = cat.icon
                    const isActive = activeCategory === cat.id
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-medium transition-all duration-150 group ${
                          isActive
                            ? 'bg-primary text-primary-content shadow-md shadow-primary/20'
                            : 'text-base-content/70 hover:bg-base-200 hover:text-base-content'
                        }`}
                      >
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${isActive ? 'bg-primary-content/15' : `${cat.bg}`}`}
                        >
                          <Icon
                            className={`w-3.5 h-3.5 ${isActive ? 'text-primary-content' : cat.color}`}
                          />
                        </span>
                        <span className="flex-1">{cat.label}</span>
                        <span
                          className={`text-xs rounded-full px-2 py-0.5 font-semibold ${isActive ? 'bg-primary-content/15 text-primary-content' : 'bg-base-300 text-base-content/50'}`}
                        >
                          {cat.faqs.length}
                        </span>
                      </button>
                    )
                  })}

                  {/* Contact card */}
                  <div className="mt-6 p-4 rounded-2xl bg-base-200 border border-base-300 space-y-3">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold">Still have questions?</span>
                    </div>
                    <p className="text-xs text-base-content/60 leading-relaxed">
                      Our team is happy to help. Reach out and we&apos;ll get back to you promptly.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      Contact us <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </aside>

              {/* ── CONTENT PANEL ───────────────────────────────────────── */}
              <div className="flex-1 min-w-0">
                {/* Category header */}
                <div
                  className={`flex items-center gap-4 p-5 rounded-2xl border ${current.border} ${current.bg} mb-6`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${current.bg} border ${current.border}`}
                  >
                    {React.createElement(current.icon, { className: `w-5 h-5 ${current.color}` })}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold leading-tight">{current.label}</h2>
                    <p className="text-xs text-base-content/50">
                      {current.faqs.length} questions in this category
                    </p>
                  </div>
                </div>

                {/* Mobile: horizontal scroll category tabs */}
                <div className="flex lg:hidden gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
                  {categories.map((cat) => {
                    const Icon = cat.icon
                    const isActive = activeCategory === cat.id
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium border transition-all ${
                          isActive
                            ? 'bg-primary text-primary-content border-primary shadow-sm'
                            : `${cat.bg} ${cat.border} ${cat.color}`
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {cat.label}
                      </button>
                    )
                  })}
                </div>

                {/* Accordion list */}
                <div key={activeCategory} className="space-y-3 anim-faq">
                  {current.faqs.map((faq, i) => (
                    <AccordionItem key={faq.q} q={faq.q} a={faq.a} index={i} />
                  ))}
                </div>

                {/* Navigation arrows */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-base-300">
                  {(() => {
                    const idx = categories.findIndex((c) => c.id === activeCategory)
                    const prev = categories[idx - 1]
                    const next = categories[idx + 1]
                    return (
                      <>
                        <div>
                          {prev && (
                            <button
                              onClick={() => setActiveCategory(prev.id)}
                              className="flex items-center gap-2 text-sm text-base-content/60 hover:text-base-content transition-colors group"
                            >
                              <ChevronDown className="w-4 h-4 rotate-90 group-hover:-translate-x-0.5 transition-transform" />
                              <span>{prev.label}</span>
                            </button>
                          )}
                        </div>
                        <div>
                          {next && (
                            <button
                              onClick={() => setActiveCategory(next.id)}
                              className="flex items-center gap-2 text-sm text-base-content/60 hover:text-base-content transition-colors group"
                            >
                              <span>{next.label}</span>
                              <ChevronDown className="w-4 h-4 -rotate-90 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                          )}
                        </div>
                      </>
                    )
                  })()}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 border-t border-base-300 bg-base-200/40">
        <div className="container max-w-3xl mx-auto px-4 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium">
            <MessageCircle className="w-3.5 h-3.5" /> Let&apos;s Talk
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
            Ready to grow your STR business?
          </h2>
          <p className="text-base-content/60 text-lg leading-relaxed">
            Book a free discovery call and find out exactly how Assistophere can help you systemise,
            scale, and succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="btn btn-primary btn-lg rounded-full px-10 gap-2 shadow-lg"
            >
              Book a Discovery Call <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="btn btn-outline btn-lg rounded-full px-8">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
