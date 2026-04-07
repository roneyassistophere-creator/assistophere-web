'use client'

import React, { useState } from 'react'
import type { Page } from '@/payload-types'
import Link from 'next/link'
import {
  Phone,
  Mail,
  MessageSquare,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Users,
  Zap,
  Home,
  Star,
  ChevronRight,
} from 'lucide-react'

export const ContactView: React.FC<{ page: Page }> = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    properties: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission — wire to real endpoint later
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <article className="flex flex-col w-full overflow-x-hidden font-sans text-base-content selection:bg-primary/20">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cv-fade-1 { animation: fadeUp 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) both; }
        .cv-fade-2 { animation: fadeUp 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .cv-fade-3 { animation: fadeUp 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both; }
        .cv-fade-4 { animation: fadeUp 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both; }
        .cv-fade-5 { animation: fadeUp 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) both; }
      `,
        }}
      />

      {/* ─── SECTION 1: HERO ─────────────────────────────────────────── */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-0 left-0 w-[55%] h-[70%] bg-linear-to-br from-primary/12 via-primary/4 to-transparent rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[55%] bg-linear-to-tl from-secondary/10 via-secondary/3 to-transparent rounded-full blur-[100px] -z-10" />

        <div className="container max-w-6xl mx-auto px-4 text-center">
          {/* Badge */}
          <div className="cv-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-6">
            <Phone className="w-3.5 h-3.5" />
            <span>Let&apos;s Talk — No Obligation</span>
          </div>

          {/* Headline */}
          <h1 className="cv-fade-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
            Let&apos;s Get Your{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              STR Operations
            </span>{' '}
            Running Properly
          </h1>

          {/* Sub-copy */}
          <p className="cv-fade-3 text-lg lg:text-xl text-base-content/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you&apos;re ready to book a call or just want to ask a question — we&apos;re
            here. Tell us about your properties and we&apos;ll tell you exactly how we can help.
          </p>

          {/* CTAs */}
          <div className="cv-fade-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#book-a-call"
              className="btn btn-primary btn-lg rounded-full px-8 gap-2 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-200"
            >
              <Calendar className="w-5 h-5" />
              Book a Discovery Call
            </a>
            <a
              href="#contact-form"
              className="btn btn-outline btn-lg rounded-full px-8 gap-2 text-base font-semibold border-base-300 hover:bg-base-200 transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
              Send an Enquiry
            </a>
          </div>

          {/* Social proof whisper */}
          <div className="cv-fade-5 flex items-center justify-center gap-2 mt-8 text-sm text-base-content/50">
            <div className="flex -space-x-1.5">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full bg-base-300 border-2 border-base-100 flex items-center justify-center text-[10px] font-bold text-base-content/60"
                >
                  {['AH', 'BK', 'CL', 'DM'][i]}
                </div>
              ))}
            </div>
            <span>Trusted by 30+ STR hosts across the UK</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: TRUST STRIP ──────────────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-8">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: <ShieldCheck className="w-6 h-6 text-primary" />,
                title: 'No Obligation',
                desc: 'A friendly chat — zero sales pressure',
              },
              {
                icon: <MessageSquare className="w-6 h-6 text-primary" />,
                title: 'Straightforward Discussion',
                desc: 'Plain talk about your setup and your goals',
              },
              {
                icon: <Home className="w-6 h-6 text-primary" />,
                title: 'Focused on Your Setup',
                desc: 'Advice tailored to your properties, not a generic pitch',
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-base-content">{item.title}</p>
                  <p className="text-sm text-base-content/60 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: BOOKING BLOCK (Calendly) ─────────────────────── */}
      <section id="book-a-call" className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <Calendar className="w-3.5 h-3.5" />
              <span>30-Minute Discovery Call</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Book a Discovery Call
            </h2>
            <p className="text-base-content/65 text-lg max-w-xl mx-auto leading-relaxed">
              Pick a time that works for you. We&apos;ll spend 30 minutes understanding your
              properties, your pain points, and what good operations could look like for you.
            </p>
          </div>

          {/* Calendar embed placeholder */}
          <div className="relative rounded-3xl overflow-hidden border border-base-300 bg-base-200 shadow-xl shadow-black/20 min-h-130 flex flex-col items-center justify-center gap-6 p-10 text-center">
            {/* Decorative corner glows */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/8 rounded-full blur-[80px] z-0 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/8 rounded-full blur-[80px] z-0 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center gap-5">
              <div className="w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Calendar className="w-10 h-10 text-primary" />
              </div>
              <div>
                <p className="text-xl font-bold text-base-content mb-2">
                  Calendar Embed — Coming Soon
                </p>
                <p className="text-base-content/55 text-sm max-w-sm mx-auto">
                  Calendly (or your preferred booking tool) will be embedded here. For now, send an
                  enquiry below or reach out directly.
                </p>
              </div>
              <a
                href="mailto:hello@assistosphere.co.uk"
                className="btn btn-primary rounded-full px-7 gap-2 font-semibold"
              >
                <Mail className="w-4 h-4" />
                Email Us to Book
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: CONTACT FORM ─────────────────────────────────── */}
      <section id="contact-form" className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Mail className="w-3.5 h-3.5" />
              <span>Prefer to Write?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Send Us an Enquiry
            </h2>
            <p className="text-base-content/65 text-lg max-w-xl mx-auto">
              Fill in the form and we&apos;ll get back to you within one business day.
            </p>
          </div>

          {/* Form card */}
          <div className="rounded-3xl bg-base-100 border border-base-300 shadow-xl shadow-black/20 p-8 lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center gap-5 py-10 text-center">
                <div className="w-16 h-16 rounded-full bg-success/15 border border-success/30 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-success" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Message Received!</h3>
                  <p className="text-base-content/65 max-w-sm mx-auto">
                    Thanks for reaching out. We&apos;ll be in touch within one business day.
                  </p>
                </div>
                <button
                  className="btn btn-outline btn-sm rounded-full px-6 mt-2"
                  onClick={() => {
                    setSubmitted(false)
                    setFormState({ name: '', email: '', phone: '', properties: '', message: '' })
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-base-content/80">
                      Full Name <span className="text-error">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={formState.name}
                      onChange={handleChange}
                      className="input input-bordered w-full bg-base-200/60 focus:bg-base-200 focus:border-primary transition-colors rounded-xl h-12"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-base-content/80">
                      Email Address <span className="text-error">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formState.email}
                      onChange={handleChange}
                      className="input input-bordered w-full bg-base-200/60 focus:bg-base-200 focus:border-primary transition-colors rounded-xl h-12"
                    />
                  </div>
                </div>

                {/* Phone + Properties */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-sm font-medium text-base-content/80">
                      Phone Number{' '}
                      <span className="text-base-content/40 font-normal">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+44 7700 900000"
                      value={formState.phone}
                      onChange={handleChange}
                      className="input input-bordered w-full bg-base-200/60 focus:bg-base-200 focus:border-primary transition-colors rounded-xl h-12"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="properties"
                      className="text-sm font-medium text-base-content/80"
                    >
                      Number of Properties <span className="text-error">*</span>
                    </label>
                    <select
                      id="properties"
                      name="properties"
                      required
                      value={formState.properties}
                      onChange={handleChange}
                      className="select select-bordered w-full bg-base-200/60 focus:bg-base-200 focus:border-primary transition-colors rounded-xl h-12"
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      <option value="1">1 property</option>
                      <option value="2-3">2–3 properties</option>
                      <option value="4-10">4–10 properties</option>
                      <option value="10+">10+ properties</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-base-content/80">
                    Your Message <span className="text-error">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us a bit about your properties, your main challenge, or what you're looking for…"
                    value={formState.message}
                    onChange={handleChange}
                    className="textarea textarea-bordered w-full bg-base-200/60 focus:bg-base-200 focus:border-primary transition-colors rounded-xl resize-none"
                  />
                </div>

                {/* Privacy note */}
                <p className="text-xs text-base-content/40 leading-relaxed">
                  By submitting this form you agree to our{' '}
                  <Link href="/privacy-policy" className="underline hover:text-primary">
                    Privacy Policy
                  </Link>
                  . We&apos;ll never share your data with third parties.
                </p>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary btn-lg rounded-full w-full sm:w-auto sm:self-start px-10 gap-2 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-200 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <span className="loading loading-spinner loading-sm" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: WHO THIS IS FOR ──────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>Is This for You?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Who We Work With
            </h2>
            <p className="text-base-content/65 text-lg max-w-xl mx-auto">
              We focus on a specific kind of STR host. If any of these sound like you, we should
              talk.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <Home className="w-5 h-5 text-primary" />,
                title: 'You own 1–10 short-term rentals',
                desc: "You're running real properties, not just testing the waters",
              },
              {
                icon: <Clock className="w-5 h-5 text-primary" />,
                title: "You're drowning in day-to-day management",
                desc: 'Guest messages, turnovers, and admin are eating your time',
              },
              {
                icon: <Zap className="w-5 h-5 text-primary" />,
                title: "You know you're leaving money on the table",
                desc: 'Your listings are live but not performing as well as they could',
              },
              {
                icon: <Star className="w-5 h-5 text-primary" />,
                title: 'You want to grow — but not at the cost of your sanity',
                desc: "You'd love to scale, but not without proper systems in place first",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 items-start p-5 rounded-2xl bg-base-200 border border-base-300 hover:border-primary/30 transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-base-content text-sm mb-1">{item.title}</p>
                  <p className="text-base-content/55 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Exclusion note */}
          <div className="mt-8 p-5 rounded-2xl border border-base-300 bg-base-200/50 text-center">
            <p className="text-sm text-base-content/55">
              <span className="text-base-content/80 font-medium">Not quite you?</span> That&apos;s
              fine — we may still be able to point you in the right direction. Send us a message
              anyway.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: WHAT HAPPENS NEXT ───────────────────────────── */}
      <section className="bg-base-200 border-y border-base-300 py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium mb-4">
              <ChevronRight className="w-3.5 h-3.5" />
              <span>The Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              What Happens Next
            </h2>
            <p className="text-base-content/65 text-lg max-w-xl mx-auto">
              No confusing funnels. Here&apos;s exactly what to expect after you reach out.
            </p>
          </div>

          <div className="relative flex flex-col gap-0">
            {/* Vertical connector line */}
            <div className="absolute left-6.75 sm:left-8.75 top-12 bottom-12 w-px bg-base-300 z-0" />

            {[
              {
                step: '01',
                icon: <Mail className="w-5 h-5 text-primary" />,
                title: 'You reach out',
                desc: 'Book a discovery call or send us an enquiry via the form above. We read every message personally.',
              },
              {
                step: '02',
                icon: <Phone className="w-5 h-5 text-primary" />,
                title: 'We schedule a 30-minute call',
                desc: "We'll get back to you within one business day to confirm a time that works — or hop on a call immediately if you've booked via Calendly.",
              },
              {
                step: '03',
                icon: <MessageSquare className="w-5 h-5 text-primary" />,
                title: 'Discovery conversation',
                desc: "We listen. You tell us about your properties, your workflow, and where it's breaking down. No sales pitch — just a real conversation.",
              },
              {
                step: '04',
                icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
                title: 'Tailored proposal or next step',
                desc: "If we're a good fit, we'll outline exactly what we'd do for you and what it costs. If we're not the right match, we'll tell you honestly.",
              },
            ].map((item, i) => (
              <div key={item.step} className={`relative flex gap-5 ${i < 3 ? 'pb-10' : ''}`}>
                {/* Step dot */}
                <div className="relative z-10 shrink-0 flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-17.5 sm:h-17.5 rounded-2xl bg-primary/10 border-2 border-primary/30 flex items-center justify-center shadow-md shadow-primary/10">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold text-primary/60 mt-1.5 tracking-widest">
                    {item.step}
                  </span>
                </div>
                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="font-bold text-base-content text-lg mb-1.5">{item.title}</h3>
                  <p className="text-base-content/60 text-sm leading-relaxed max-w-prose">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: CONTACT DETAILS ─────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Reach Us Directly
            </h2>
            <p className="text-base-content/65 text-lg max-w-lg mx-auto">
              Prefer to skip the form? Reach us straight away via email or WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Email */}
            <a
              href="mailto:hello@assistosphere.co.uk"
              className="group flex items-center gap-4 p-6 rounded-2xl bg-base-200 border border-base-300 hover:border-primary/40 hover:bg-base-200/80 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold text-base-content/50 uppercase tracking-widest mb-0.5">
                  Email
                </p>
                <p className="font-semibold text-base-content text-sm group-hover:text-primary transition-colors">
                  hello@assistosphere.co.uk
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-base-content/30 ml-auto group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/447000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 rounded-2xl bg-base-200 border border-base-300 hover:border-emerald-500/40 hover:bg-base-200/80 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/15 transition-colors">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-base-content/50 uppercase tracking-widest mb-0.5">
                  WhatsApp
                </p>
                <p className="font-semibold text-base-content text-sm group-hover:text-emerald-400 transition-colors">
                  +44 7000 000000
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-base-content/30 ml-auto group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
            </a>
          </div>

          {/* Response time note */}
          <div className="flex items-center justify-center gap-2.5 mt-8 text-sm text-base-content/45">
            <Clock className="w-4 h-4 text-primary/60" />
            <span>Typical response time: within 1 business day</span>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: FINAL CTA ────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-base-200 to-secondary/15 -z-10" />
        <div className="absolute inset-0 bg-base-100/60 -z-10" />
        <div className="absolute top-0 left-1/4 w-[50%] h-full bg-linear-to-b from-primary/10 to-transparent rounded-full blur-[120px] -z-10" />

        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-medium mb-6">
            <Zap className="w-3.5 h-3.5" />
            <span>Ready When You Are</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-[1.15]">
            Ready to Get{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Started?
            </span>
          </h2>

          <p className="text-lg text-base-content/65 max-w-xl mx-auto mb-10 leading-relaxed">
            One conversation can change the trajectory of your STR business. Book a free 30-minute
            discovery call and find out exactly how we can help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#book-a-call"
              className="btn btn-primary btn-lg rounded-full px-10 gap-2 font-semibold shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-200"
            >
              <Calendar className="w-5 h-5" />
              Book a Discovery Call
            </a>
            <a
              href="#contact-form"
              className="btn btn-outline btn-lg rounded-full px-8 gap-2 font-semibold border-base-300 hover:bg-base-200 transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
              Send an Enquiry
            </a>
          </div>

          <p className="text-xs text-base-content/35 mt-7">
            Free discovery call · No commitment · Honest advice
          </p>
        </div>
      </section>
    </article>
  )
}
