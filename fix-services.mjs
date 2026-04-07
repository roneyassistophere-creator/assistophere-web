import fs from 'fs'
const file = 'src/views/Pages/Services/ServicesView.tsx'

const content = `import React from 'react'
import type { Page } from '@/payload-types'
import { Button } from '@/components/ui/button'
import {
  MessageSquare,
  Wrench,
  TrendingUp,
  Globe,
  Settings,
  XCircle,
  ArrowRight,
  Clock,
  Layout,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Check,
  Users,
  Home,
  Briefcase,
  HelpCircle,
  Sparkles,
  ClipboardList,
  MessageCircle,
  BookOpen,
  CalendarCheck,
  PenTool,
  CheckSquare
} from 'lucide-react'
import Link from 'next/link'

export const ServicesView: React.FC<{ page: Page }> = () => {
  return (
    <article className="flex flex-col w-full overflow-x-hidden font-sans bg-base-100 text-base-content selection:bg-primary/20">

      {/* 🔹 SECTION 1: HERO */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[120px] -z-10 animate-pulse delay-1000" />

        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Text left */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-[1.1] text-base-content">
                Airbnb Management Services Built for UK <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Short Term Rental Businesses
                </span>
              </h1>

              <p className="text-lg md:text-xl text-base-content/70 mb-10 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                Assistophere supports hosts and serviced accommodation operators across the UK with guest communication, cleaning coordination, listing optimisation, pricing support, and backend systems that keep everything running smoothly.
              </p>
              
              <div className="hidden bg-transparent mb-0">
                <p>We provide Airbnb management services in the UK by handling daily operations, guest messaging, listing performance, and backend systems so your short term rental business runs efficiently without relying on you for everything.</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-content shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95 group">
                    Book a Discovery Call
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="#structure" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full h-14 px-8 text-lg rounded-full bg-base-100/80 backdrop-blur-sm border-2 border-base-300 hover:border-primary hover:bg-primary/5 transition-all text-base-content">
                    See How It Works
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual right */}
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square bg-base-200/50 rounded-[3rem] border border-base-300 shadow-2xl flex flex-col overflow-hidden items-center justify-center p-8 group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <div className="relative z-10 w-full grid grid-cols-2 gap-4">
                 <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200">
                    <MessageSquare className="w-6 h-6 text-primary mb-3" />
                    <p className="text-sm text-base-content/60">Guest Comms</p>
                    <p className="font-bold">Active</p>
                 </div>
                 <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200">
                    <Sparkles className="w-6 h-6 text-secondary mb-3" />
                    <p className="text-sm text-base-content/60">Cleaning</p>
                    <p className="font-bold">Coordinated</p>
                 </div>
                 <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200">
                    <TrendingUp className="w-6 h-6 text-accent mb-3" />
                    <p className="text-sm text-base-content/60">Pricing</p>
                    <p className="font-bold">Optimised</p>
                 </div>
                 <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200">
                    <Layout className="w-6 h-6 text-blue-500 mb-3" />
                    <p className="text-sm text-base-content/60">Systems</p>
                    <p className="font-bold">Structured</p>
                 </div>
              </div>
              <p className="text-sm text-base-content/40 mt-8 font-bold tracking-widest uppercase">STR Operations Dashboard</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 2: CLARITY BLOCK */}
      <section className="py-20 md:py-32 px-4 bg-base-200/50 relative overflow-hidden text-center">
        <div className="container max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight text-base-content">
            What Do Our Airbnb Management Services Actually Cover?
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed text-base-content/80 font-light">
            We cover the full backend of your short term rental business, including guest communication, cleaning coordination, maintenance handling, listing optimisation, pricing strategy, and system setup, so everything works together instead of separately.
          </p>
        </div>
      </section>

      {/* 🔹 SECTION 3: SERVICE STRUCTURE INTRO */}
      <section id="structure" className="py-24 px-4 bg-base-100">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Everything You Need, Structured Properly</h2>
          <p className="text-xl text-base-content/70 font-light">
            Our services are grouped around how your business actually runs, not just individual tasks.
          </p>
        </div>
      </section>

      {/* 🔹 SECTION 4: CATEGORY 1 – DAILY OPERATIONS */}
      <section className="py-16 px-4 bg-base-100">
        <div className="container max-w-5xl mx-auto">
          <div className="mb-12 border-b border-primary/20 pb-4">
            <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
              <Clock className="w-8 h-8" />
              Daily Operations Management
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-8 rounded-[2rem] bg-base-200/50 border border-base-300 hover:border-primary/30 transition-colors">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3"><MessageSquare className="w-6 h-6 text-primary" /> Guest Communication & Booking Support</h3>
              <ul className="space-y-3 mb-6 text-base-content/80">
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Pre-booking enquiries</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Guest messaging during stays</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Post-stay communication</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Issue handling</li>
              </ul>
              <div className="p-4 bg-primary/10 rounded-xl border border-primary/20 text-primary font-medium text-sm">
                Outcome: Guests are handled professionally without you needing to be available 24/7.
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-base-200/50 border border-base-300 hover:border-primary/30 transition-colors">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3"><Home className="w-6 h-6 text-secondary" /> Check-In & Stay Coordination</h3>
              <ul className="space-y-3 mb-6 text-base-content/80">
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Check-in instructions</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Arrival support</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Stay monitoring</li>
              </ul>
            </div>

            <div className="p-8 rounded-[2rem] bg-base-200/50 border border-base-300 hover:border-primary/30 transition-colors">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3"><Sparkles className="w-6 h-6 text-amber-500" /> Cleaning & Turnover Coordination</h3>
              <ul className="space-y-3 mb-6 text-base-content/80">
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Cleaner scheduling</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Turnover tracking</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Follow-ups</li>
              </ul>
            </div>

            <div className="p-8 rounded-[2rem] bg-base-200/50 border border-base-300 hover:border-primary/30 transition-colors">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3"><Wrench className="w-6 h-6 text-slate-500" /> Maintenance Management</h3>
              <ul className="space-y-3 mb-6 text-base-content/80">
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Issue reporting</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Contractor coordination</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Resolution tracking</li>
              </ul>
              <div className="p-4 bg-primary/10 rounded-xl border border-primary/20 text-primary font-medium text-sm">
                Outcome: No missed cleans, no confusion, no last-minute problems.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 5: CATEGORY 2 – LISTING & PERFORMANCE */}
      <section className="py-16 px-4 bg-base-200/30">
        <div className="container max-w-5xl mx-auto">
          <div className="mb-12 border-b border-secondary/20 pb-4">
            <h2 className="text-3xl font-bold text-secondary flex items-center gap-3">
              <TrendingUp className="w-8 h-8" />
              Listing & Revenue Performance
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-[2rem] bg-base-100 border border-base-300 hover:border-secondary/30 transition-colors">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3"><Layout className="w-6 h-6 text-secondary" /> Listing Optimisation & SEO</h3>
              <ul className="space-y-3 mb-6 text-base-content/80">
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Titles and descriptions</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Structure improvements</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Conversion-focused updates</li>
              </ul>
            </div>

            <div className="p-8 rounded-[2rem] bg-base-100 border border-base-300 hover:border-secondary/30 transition-colors">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3"><CalendarCheck className="w-6 h-6 text-secondary" /> Pricing & Calendar Strategy</h3>
              <ul className="space-y-3 mb-6 text-base-content/80">
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Monitoring occupancy gaps</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Adjusting pricing logic</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Calendar management</li>
              </ul>
              <div className="p-4 bg-secondary/10 rounded-xl border border-secondary/20 text-secondary font-medium text-sm">
                Outcome: Stronger listings that convert better and stay competitive.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 6: CATEGORY 3 – GROWTH & SYSTEMS */}
      <section className="py-16 px-4 bg-base-100">
        <div className="container max-w-5xl mx-auto">
          <div className="mb-12 border-b border-accent/20 pb-4">
            <h2 className="text-3xl font-bold text-accent flex items-center gap-3">
              <Globe className="w-8 h-8" />
              Growth & Business Systems
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-[2rem] bg-base-200/50 border border-base-300 hover:border-accent/30 transition-colors">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3"><BookOpen className="w-6 h-6 text-accent" /> Direct Booking Support</h3>
              <ul className="space-y-3 mb-6 text-base-content/80">
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Website guidance</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Booking flow improvements</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Lead capture optimisation</li>
              </ul>
            </div>

            <div className="p-8 rounded-[2rem] bg-base-200/50 border border-base-300 hover:border-accent/30 transition-colors">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3"><ClipboardList className="w-6 h-6 text-accent" /> SOP & Workflow Setup</h3>
              <ul className="space-y-3 mb-6 text-base-content/80">
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Process documentation</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Workflow structuring</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Operational systems</li>
              </ul>
              <div className="p-4 bg-accent/10 rounded-xl border border-accent/20 text-accent font-medium text-sm">
                Outcome: A business that runs with structure instead of constant involvement.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 7: CATEGORY 4 – SUPPORT & BACKEND */}
      <section className="py-16 px-4 bg-base-200/30">
        <div className="container max-w-5xl mx-auto">
          <div className="mb-12 border-b border-primary/20 pb-4">
            <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
              <Users className="w-8 h-8" />
              Admin & Operational Support
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-[2rem] bg-base-100 border border-base-300 hover:border-primary/30 transition-colors">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3"><CheckSquare className="w-6 h-6 text-primary" /> Admin & Team Coordination</h3>
              <ul className="space-y-3 text-base-content/80">
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Task tracking</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Team alignment</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Internal communication</li>
              </ul>
            </div>

            <div className="p-8 rounded-[2rem] bg-base-100 border border-base-300 hover:border-primary/30 transition-colors">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3"><PenTool className="w-6 h-6 text-primary" /> Graphic & Brand Support</h3>
              <ul className="space-y-3 text-base-content/80">
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Listing visuals</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Brand assets</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-emerald-500" /> Basic content support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* �� SECTION 8: SYSTEM THINKING (CRITICAL SECTION) */}
      <section className="py-24 px-4 bg-primary text-primary-content text-center">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">This Isn’t a List of Services. <br/>It’s One System.</h2>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed font-light mb-8">
            Guest communication, cleaning, pricing, and listings don’t work in isolation. When one part breaks, everything else is affected.
          </p>
          <p className="text-lg md:text-xl font-medium">
            We connect all parts so your STR business runs as one structured system instead of scattered tasks.
          </p>
        </div>
      </section>

      {/* 🔹 SECTION 9: DIFFERENTIATION */}
      <section className="py-24 px-4 bg-base-100">
        <div className="container max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">Why This Works Better Than Hiring Individual Support</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { text: 'No gaps between tasks' },
              { text: 'No miscommunication between roles' },
              { text: 'No reliance on a single person' },
              { text: 'Everything aligned under one system' }
            ].map((diff, i) => (
              <div key={i} className="p-6 bg-base-200/50 rounded-2xl border border-base-300 flex flex-col gap-3">
                <ShieldCheck className="w-8 h-8 text-primary" />
                <h3 className="font-bold text-lg">{diff.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 10: DWELL TIME ELEMENT */}
      <section className="py-24 px-4 bg-base-200/50">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight text-base-content">
            How Your Operations Change
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
            {/* Without Us */}
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-base-100 border border-base-300 shadow-sm">
              <h3 className="text-2xl text-center font-bold mb-10 text-base-content/50 uppercase tracking-widest text-sm">
                Without Assistophere
              </h3>
              <ul className="space-y-6">
                {[
                  { title: 'Reactive management' },
                  { title: 'Slow responses' },
                  { title: 'Missed revenue opportunities' },
                  { title: 'Disorganised systems' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center justify-between border-b border-base-200 pb-4 last:border-0 last:pb-0">
                    <span className="font-bold text-lg text-base-content/80">{item.title}</span>
                    <XCircle className="w-6 h-6 text-error/50" />
                  </li>
                ))}
              </ul>
            </div>

            {/* With Us */}
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-primary text-primary-content shadow-2xl transform md:-translate-y-4 transition-transform hover:-translate-y-6">
              <h3 className="text-2xl text-center font-bold mb-10 text-primary-content/80 uppercase tracking-widest text-sm">
                With Assistophere
              </h3>
              <ul className="space-y-6 relative z-10">
                {[
                  { title: 'Structured operations' },
                  { title: 'Fast guest handling' },
                  { title: 'Optimised listings' },
                  { title: 'Clear workflows' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center justify-between border-b border-white/20 pb-4 last:border-0 last:pb-0">
                    <span className="font-bold text-xl text-white">{item.title}</span>
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 11: WHO THIS IS FOR */}
      <section className="py-24 px-4 bg-base-100">
        <div className="container max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content mb-16">Who Our Services Are Built For</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Home, title: 'UK Airbnb hosts with multiple listings' },
              { icon: Briefcase, title: 'Serviced accommodation businesses' },
              { icon: Users, title: 'Co-hosts needing backend support' },
              { icon: TrendingUp, title: 'Property managers scaling operations' }
            ].map((who, i) => (
              <div key={i} className="p-8 bg-base-200/50 border border-base-300 rounded-[2rem] flex flex-col items-center hover:bg-base-200 transition-colors group">
                <div className="p-4 bg-base-100 rounded-full mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <who.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-md font-bold text-base-content leading-snug">{who.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 12: TRUST */}
      <section className="py-24 px-4 bg-base-200/50">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center tracking-tight text-base-content mb-16">What Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "[Testimonial Placeholder: How Assistophere drastically reduced chaos and brought peace of mind.]", n: "Portfolio Manager", r: "UK Operator" },
              { t: "[Testimonial Placeholder: Mention of rapid response times and listing optimisation resulting in more bookings.]", n: "SA Business Owner", r: "Scaling Host" },
              { t: "[Testimonial Placeholder: How the SOPs and structured operations completely changed their workflow.]", n: "Multi-listing Host", r: "Growth Stage" }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-base-100 border border-base-300 rounded-[2rem] relative shadow-sm">
                <MessageCircle className="w-8 h-8 text-primary/20 absolute top-8 right-8" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => <Sparkles key={idx} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-base-content/80 text-lg mb-8 italic">
                  &quot;{item.t}&quot;
                </p>
                <div className="flex items-center gap-4 border-t border-base-200 pt-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                    {item.n.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-base-content text-sm">{item.n}</p>
                    <p className="text-xs text-base-content/60">{item.r}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 13: MINI PROCESS */}
      <section className="py-24 px-4 bg-base-100">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content mb-16">How We Get Started</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Review your current setup' },
              { title: 'Identify gaps' },
              { title: 'Build structure' },
              { title: 'Take over operations' }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-base-200/50 rounded-[2rem]">
                <div className="w-16 h-16 bg-primary text-primary-content rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/20 font-bold text-2xl">
                  {i+1}
                </div>
                <h3 className="text-lg font-bold text-base-content">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 14: FAQ */}
      <section className="py-24 px-4 bg-base-200/30">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "Do you work across the whole UK?",
                a: "Yes, we support hosts and serviced accommodation operators nationwide."
              },
              {
                q: "Can you manage multiple properties?",
                a: "Absolutely. We build systems designed specifically to scale with your portfolio."
              },
              {
                q: "Is this fully managed or partial support?",
                a: "We act as your backend operations team. We cover the entire operations from guest comms to cleaning, so it is a comprehensive management structure rather than just partial assistance."
              },
              {
                q: "How quickly can you start?",
                a: "We aim to onboard and set up your operations swiftly, usually starting active management within 1-2 weeks of our agreement."
              }
            ].map((faq, i) => (
              <div key={i} className="collapse collapse-plus bg-base-100 border border-base-300 rounded-[1.5rem]">
                <input type="radio" name="faq-accordion" defaultChecked={i === 0} />
                <div className="collapse-title text-lg font-bold text-base-content pr-12">
                  {faq.q}
                </div>
                <div className="collapse-content text-base-content/70 font-light">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 15: FINAL CTA */}
      <section className="py-32 px-4 relative overflow-hidden bg-primary text-primary-content">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter leading-tight">
             Ready to Structure Your STR Business Properly?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 font-light max-w-2xl mx-auto">
            Stop managing everything manually. Let&apos;s build a system that works.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-base-100 text-primary hover:bg-base-200 hover:scale-105 active:scale-95 transition-all shadow-2xl">
              Book a Discovery Call
            </Button>
          </Link>
        </div>
      </section>

    </article>
  )
}
`

fs.writeFileSync(file, content, 'utf8')
