import React from 'react'
import Link from 'next/link'
import { Shield, Mail, MapPin, ChevronRight } from 'lucide-react'
import type { Page } from '@/payload-types'

const sections = [
  {
    id: 1,
    title: 'Introduction',
    content: (
      <p className="text-base-content/70 leading-relaxed">
        Assistophere Ltd (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) respects your
        privacy and is committed to protecting your personal data. This Privacy Policy explains how
        we collect, use, and protect your information when you use our website and services.
      </p>
    ),
  },
  {
    id: 2,
    title: 'Information We Collect',
    content: (
      <div className="space-y-5">
        <div>
          <h3 className="font-semibold text-base-content mb-2">2.1 Personal Information</h3>
          <ul className="space-y-1.5 text-base-content/70 text-sm">
            {['Full name', 'Email address', 'Phone number', 'Business details (if applicable)'].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-base-content mb-2">2.2 Usage Data</h3>
          <ul className="space-y-1.5 text-base-content/70 text-sm">
            {['Website activity', 'IP address', 'Device and browser type', 'Pages visited'].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-base-content mb-2">2.3 Communication Data</h3>
          <ul className="space-y-1.5 text-base-content/70 text-sm">
            {[
              'Messages sent via forms, email, or social media',
              'Enquiries and support requests',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'How We Use Your Information',
    content: (
      <ul className="space-y-2 text-base-content/70 text-sm">
        {[
          'Provide and manage our services',
          'Respond to enquiries and communication',
          'Improve website performance and user experience',
          'Send relevant updates or service-related information',
          'Maintain security and prevent misuse',
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
    id: 4,
    title: 'Legal Basis for Processing (UK GDPR)',
    content: (
      <div className="space-y-3">
        <p className="text-base-content/70 text-sm">
          We process your data under the following lawful bases:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { basis: 'Consent', desc: 'When you submit forms or opt-in' },
            { basis: 'Contract', desc: 'When providing services' },
            {
              basis: 'Legitimate Interest',
              desc: 'Improving services and operations',
            },
            { basis: 'Legal Obligation', desc: 'Where required by law' },
          ].map(({ basis, desc }) => (
            <div key={basis} className="p-3 rounded-xl border border-base-300 bg-base-200">
              <p className="font-semibold text-sm text-primary mb-0.5">{basis}</p>
              <p className="text-xs text-base-content/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: 'How We Store and Protect Your Data',
    content: (
      <div className="space-y-3">
        <p className="text-base-content/70 text-sm leading-relaxed">
          We take appropriate measures to protect your data, including:
        </p>
        <ul className="space-y-1.5 text-base-content/70 text-sm">
          {[
            'Secure systems and platforms',
            'Restricted access to authorised personnel',
            'Regular monitoring and updates',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-base-content/70 text-sm leading-relaxed">
          Your data is stored securely and only for as long as necessary.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: 'Data Sharing',
    content: (
      <div className="space-y-3">
        <p className="text-base-content/70 text-sm font-medium">
          We do not sell your personal data.
        </p>
        <p className="text-base-content/70 text-sm">We may share data with:</p>
        <ul className="space-y-1.5 text-base-content/70 text-sm">
          {[
            'Service providers (e.g. hosting, CRM tools)',
            'Payment processors (if applicable)',
            'Legal authorities (if required)',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-base-content/70 text-sm">
          All third parties are required to protect your data.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    title: 'Cookies',
    content: (
      <div className="space-y-3">
        <p className="text-base-content/70 text-sm">Our website may use cookies to:</p>
        <ul className="space-y-1.5 text-base-content/70 text-sm">
          {['Improve user experience', 'Analyse website performance', 'Track usage patterns'].map(
            (item) => (
              <li key={item} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
                {item}
              </li>
            ),
          )}
        </ul>
        <p className="text-base-content/70 text-sm">
          You can control cookie settings through your browser.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    title: 'Your Rights',
    content: (
      <div className="space-y-3">
        <p className="text-base-content/70 text-sm">
          Under UK data protection laws, you have the right to:
        </p>
        <ul className="space-y-1.5 text-base-content/70 text-sm">
          {[
            'Access your personal data',
            'Request correction of inaccurate data',
            'Request deletion of your data',
            'Restrict or object to processing',
            'Withdraw consent at any time',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-base-content/70 text-sm">
          To exercise your rights, contact us using the details below.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    title: 'Data Retention',
    content: (
      <div className="space-y-3">
        <p className="text-base-content/70 text-sm">
          We retain personal data only as long as necessary for:
        </p>
        <ul className="space-y-1.5 text-base-content/70 text-sm">
          {['Providing services', 'Legal and regulatory requirements', 'Operational purposes'].map(
            (item) => (
              <li key={item} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
                {item}
              </li>
            ),
          )}
        </ul>
      </div>
    ),
  },
  {
    id: 10,
    title: 'Third-Party Links',
    content: (
      <div className="space-y-2 text-base-content/70 text-sm leading-relaxed">
        <p>Our website may contain links to third-party websites.</p>
        <p>We are not responsible for their privacy practices.</p>
        <p>We recommend reviewing their policies separately.</p>
      </div>
    ),
  },
  {
    id: 11,
    title: 'Changes to This Policy',
    content: (
      <div className="space-y-2 text-base-content/70 text-sm leading-relaxed">
        <p>We may update this Privacy Policy from time to time.</p>
        <p>Any changes will be posted on this page with an updated effective date.</p>
      </div>
    ),
  },
]

export const PrivacyPolicyView: React.FC<{ page: Page }> = () => {
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
            <Shield className="w-4 h-4" />
            Legal · Assistophere Ltd
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Privacy{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Policy
            </span>
          </h1>
          <p className="text-base-content/60 text-lg max-w-xl mx-auto leading-relaxed">
            How Assistophere Ltd collects, uses, and protects your personal data.
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
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold">12. Contact Us</p>
                <p className="text-xs text-base-content/55">
                  Questions about this policy or your data
                </p>
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
                href="/terms-and-conditions"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-base-300 hover:border-primary/40 transition-colors text-sm font-medium"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
