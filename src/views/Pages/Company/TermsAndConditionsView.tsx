import React from 'react'
import Link from 'next/link'
import { FileText, Mail, MapPin, ChevronRight } from 'lucide-react'
import type { Page } from '@/payload-types'

const sections = [
  {
    id: 1,
    title: 'Introduction',
    content: (
      <div className="space-y-2 text-base-content/70 text-sm leading-relaxed">
        <p>
          These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of Assistophere
          Ltd&apos;s website and services.
        </p>
        <p>By using our website or engaging our services, you agree to these Terms.</p>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Services',
    content: (
      <div className="space-y-3">
        <p className="text-base-content/70 text-sm leading-relaxed">
          Assistophere Ltd provides services related to:
        </p>
        <ul className="space-y-1.5 text-base-content/70 text-sm">
          {[
            'Short term rental (STR) virtual assistance',
            'Guest communication and operations support',
            'Listing optimisation and pricing support',
            'STR systems building and consultancy',
            'Marketing and social media services',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-base-content/70 text-sm leading-relaxed">
          All services are provided based on agreed scope and communication with the client.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Client Responsibilities',
    content: (
      <div className="space-y-3">
        <p className="text-base-content/70 text-sm">Clients agree to:</p>
        <ul className="space-y-1.5 text-base-content/70 text-sm">
          {[
            'Provide accurate and complete information',
            'Give necessary access to tools, platforms, and accounts',
            'Respond in a timely manner where required',
            'Ensure compliance with platform rules (e.g. Airbnb, Booking.com)',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-base-content/70 text-sm leading-relaxed">
          We are not responsible for delays caused by lack of access or communication.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Payments and Fees',
    content: (
      <div className="space-y-2 text-base-content/70 text-sm">
        <ul className="space-y-1.5">
          {[
            'All fees will be agreed before service begins',
            'Payments must be made according to agreed terms',
            'Late payments may result in service delays or suspension',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="leading-relaxed pt-1">
          Unless stated otherwise, all fees are non-refundable.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Service Scope',
    content: (
      <ul className="space-y-1.5 text-base-content/70 text-sm">
        {[
          'Services are delivered based on the agreed scope',
          'Any additional work outside scope may incur extra charges',
          'We reserve the right to decline tasks outside our service offering',
        ].map((item) => (
          <li key={item} className="flex items-center gap-2">
            <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: 6,
    title: 'No Guaranteed Results',
    content: (
      <div className="space-y-3">
        <p className="text-base-content/70 text-sm leading-relaxed">
          While we aim to improve performance, we do not guarantee:
        </p>
        <ul className="space-y-1.5 text-base-content/70 text-sm">
          {['Specific booking numbers', 'Revenue outcomes', 'Occupancy levels'].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-base-content/70 text-sm leading-relaxed">
          Results depend on multiple external factors beyond our control.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    title: 'Use of Third-Party Platforms',
    content: (
      <div className="space-y-3">
        <p className="text-base-content/70 text-sm">
          Our services involve working with third-party platforms such as:
        </p>
        <ul className="space-y-1.5 text-base-content/70 text-sm">
          {['Airbnb', 'Booking.com', 'Property management systems', 'Social media platforms'].map(
            (item) => (
              <li key={item} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
                {item}
              </li>
            ),
          )}
        </ul>
        <p className="text-base-content/70 text-sm">We are not responsible for:</p>
        <ul className="space-y-1.5 text-base-content/70 text-sm">
          {[
            'Platform outages or technical issues',
            'Policy changes made by platforms',
            'Account suspensions or restrictions',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: 8,
    title: 'Data and Access',
    content: (
      <div className="space-y-3">
        <p className="text-base-content/70 text-sm">Clients may grant us access to:</p>
        <ul className="space-y-1.5 text-base-content/70 text-sm">
          {['Listing platforms', 'Communication tools', 'Business systems'].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-base-content/70 text-sm">We will:</p>
        <ul className="space-y-1.5 text-base-content/70 text-sm">
          {[
            'Use access only for agreed services',
            'Maintain confidentiality',
            'Not misuse or share sensitive information',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: 9,
    title: 'Confidentiality',
    content: (
      <div className="space-y-2 text-base-content/70 text-sm leading-relaxed">
        <p>All client information is treated as confidential.</p>
        <p>
          We will not disclose or share any sensitive business or personal data unless required by
          law.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    title: 'Termination',
    content: (
      <div className="space-y-3">
        <p className="text-base-content/70 text-sm leading-relaxed">
          Either party may terminate services with notice.
        </p>
        <p className="text-base-content/70 text-sm">Upon termination:</p>
        <ul className="space-y-1.5 text-base-content/70 text-sm">
          {[
            'Access to systems may be removed',
            'Ongoing tasks may be paused or completed based on agreement',
            'Outstanding payments remain due',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: 11,
    title: 'Limitation of Liability',
    content: (
      <div className="space-y-3">
        <p className="text-base-content/70 text-sm">Assistophere Ltd is not liable for:</p>
        <ul className="space-y-1.5 text-base-content/70 text-sm">
          {[
            'Loss of revenue or profit',
            'Guest-related damages or disputes',
            'Platform penalties or suspensions',
            'Indirect or consequential losses',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-base-content/70 text-sm leading-relaxed">
          Our liability is limited to the value of services provided.
        </p>
      </div>
    ),
  },
  {
    id: 12,
    title: 'Intellectual Property',
    content: (
      <div className="space-y-2 text-base-content/70 text-sm leading-relaxed">
        <p>
          All materials, processes, and content created by Assistophere remain our intellectual
          property unless agreed otherwise.
        </p>
        <p>Clients may use delivered work for their business purposes.</p>
      </div>
    ),
  },
  {
    id: 13,
    title: 'Changes to Terms',
    content: (
      <div className="space-y-2 text-base-content/70 text-sm leading-relaxed">
        <p>We may update these Terms from time to time.</p>
        <p>Updated versions will be posted on this page.</p>
      </div>
    ),
  },
  {
    id: 14,
    title: 'Governing Law',
    content: (
      <p className="text-base-content/70 text-sm leading-relaxed">
        These Terms are governed by the laws of the United Kingdom.
      </p>
    ),
  },
]

export const TermsAndConditionsView: React.FC<{ page: Page }> = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content overflow-x-hidden">
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-16 pb-16 lg:pt-20 lg:pb-20 border-b border-base-300">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 w-130 h-130 bg-linear-to-br from-primary/10 via-primary/3 to-transparent rounded-full blur-[140px]" />
          <div className="absolute top-1/2 -right-40 w-105 h-105 bg-linear-to-bl from-secondary/8 via-secondary/2 to-transparent rounded-full blur-[120px]" />
        </div>
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            Legal · Assistophere Ltd
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Terms &amp;{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Conditions
            </span>
          </h1>
          <p className="text-base-content/60 text-lg max-w-xl mx-auto leading-relaxed">
            Please read these Terms carefully before using our website or engaging our services.
          </p>
          <p className="mt-4 text-xs text-base-content/40 italic">Effective Date: [Insert Date]</p>
        </div>
      </section>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {sections.map(({ id, title, content }) => (
              <div
                key={id}
                className="rounded-2xl border border-base-300 bg-base-200 overflow-hidden"
              >
                <div className="px-6 py-4 border-b border-base-300 bg-base-100 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-primary/12 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                    {id}
                  </span>
                  <h2 className="font-bold text-base-content">{title}</h2>
                </div>
                <div className="px-6 py-5">{content}</div>
              </div>
            ))}
          </div>

          {/* ── CONTACT CARD ────────────────────────────────────────────── */}
          <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/6 p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold">15. Contact Information</p>
                <p className="text-xs text-base-content/55">Questions about these Terms</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-base-content/70">
              <p className="font-semibold text-base-content">Assistophere Ltd</p>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>[Insert Email Address]</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>[Insert Registered Business Address]</span>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-content text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </Link>
              <Link
                href="/privacy-policy"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-base-300 hover:border-primary/40 transition-colors text-sm font-medium"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
