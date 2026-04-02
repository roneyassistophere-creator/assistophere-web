import React from 'react'
import type { Page } from '@/payload-types'
import { Button } from '@/components/ui/button'
import {
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Users,
  Wrench,
  Globe,
  Settings,
  Layout,
  Clock,
  ArrowRight,
  HelpCircle,
  PenTool,
  Home,
  TrendingUp,
  Award
} from 'lucide-react'

export const HomeView: React.FC<{ page: Page }> = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden font-sans">
      {/* Decorative Top Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent -z-10 pointer-events-none" />

      {/* 1. Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-8 animate-fade-in hover:scale-105 transition-transform duration-300 cursor-default">
              <Sparkles className="size-4" />
              <span>Supporting Airbnb hosts & STR operators across the UK</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-foreground leading-[1.1] animate-fade-up">
              Your Behind the Scenes Team<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                for Short Term Rental Growth
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto font-light">
              Assistophere helps hosts and serviced accommodation businesses manage
              daily operations, guest communication, listing optimisation, and 
              backend systems, so you can <strong className="text-foreground">save time, stay organised, and grow.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
              <Button size="lg" className="px-10 py-7 text-lg rounded-full shadow-xl shadow-primary/25 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto overflow-hidden group">
                <span className="relative z-10 font-bold">Book a Discovery Call</span>
                <div className="absolute inset-0 h-full w-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out skew-x-12" />
              </Button>
              <Button size="lg" variant="outline" className="px-10 py-7 text-lg rounded-full border-2 hover:bg-muted font-bold w-full sm:w-auto hover:-translate-y-1 transition-all duration-300 group">
                <span>See Our Services</span>
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick Value Strip */}
      <section className="relative z-20 pb-20 mt-[-2rem] md:mt-[-4rem]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <MessageSquare className="size-7 text-primary" />,
                text: 'Guest messaging & booking support',
                bg: 'bg-primary/5 dark:bg-primary/10',
                border: 'border-blue-100 dark:border-blue-900/30'
              },
              {
                icon: <Wrench className="size-7 text-primary" />,
                text: 'Cleaning & maintenance coordination',
                bg: 'bg-primary/10 dark:bg-primary/10',
                border: 'border-emerald-100 dark:border-emerald-900/30'
              },
              {
                icon: <TrendingUp className="size-7 text-primary" />,
                text: 'Listing optimisation & pricing support',
                bg: 'bg-amber-50 dark:bg-amber-900/20',
                border: 'border-amber-100 dark:border-amber-900/30'
              },
              {
                icon: <Globe className="size-7 text-primary" />,
                text: 'Direct booking & backend systems',
                bg: 'bg-primary/5 dark:bg-primary/10',
                border: 'border-purple-100 dark:border-purple-900/30'
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-4 p-8 rounded-2xl shadow-xl shadow-slate-200/40 dark:shadow-none bg-background border ${item.border} hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group`}
              >
                <div className={`size-14 rounded-xl ${item.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <span className="font-bold text-lg leading-tight">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Problem Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/20 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/20 text-primary font-bold text-xs uppercase tracking-wider mb-6">
                The Problem
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                Running an STR Business Shouldn&apos;t Feel Like <span className="text-primary">Constant Firefighting</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 font-light">
                More bookings sound great until the guest messages, cleaner issues, maintenance problems, and admin start piling up. You end up stuck in the day-to-day instead of focusing on growth.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Replying to guests at all hours',
                  'Chasing cleaners and maintenance',
                  'Unoptimised live listings',
                  'Missed direct booking opportunities',
                  'No clear systems for scaling',
                  'Reliance on the host for every issue',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-colors">
                    <div className="size-2 rounded-full bg-primary shrink-0 animate-pulse" />
                    <span className="font-medium text-sm md:text-base">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative lg:h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-[3rem] transform rotate-3" />
              <div className="absolute inset-0 bg-background rounded-[3rem] transform -rotate-3 border border-border shadow-2xl flex flex-col items-center justify-center p-12 hover:rotate-0 transition-transform duration-500">
                <div className="size-32 bg-gradient-to-br from-primary to-secondary shadow-xl shadow-blue-500/30 rounded-3xl flex items-center justify-center mb-8 rotate-12 hover:rotate-0 transition-transform duration-500">
                  <Clock className="size-16 text-white" />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
                  Get Time Back
                </h3>
                <p className="text-center font-medium text-muted-foreground">That&apos;s where Assistophere comes in.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Solution Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-6">
              The Solution
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              A More Organised, <br /><span className="text-primary">More Profitable</span> STR Business
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              We work as your remote support team. We handle the daily operations while helping you build better systems for long-term growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Daily Operations',
                desc: 'We handle guest communication and cleaner coordination so things stay on track without your constant input.',
                icon: <Settings className="size-8 text-primary" />,
                bg: 'bg-primary/5 dark:bg-primary/10',
                border: 'hover:border-primary/50'
              },
              {
                title: 'Listing & Revenue',
                desc: 'We improve listing presentation, booking flows, and visibility to keep occupancy and revenue strong.',
                icon: <Layout className="size-8 text-primary" />,
                bg: 'bg-primary/10 dark:bg-primary/10',
                border: 'hover:border-primary/50'
              },
              {
                title: 'Growth & Systems',
                desc: 'We build a stronger setup overall through direct booking support, SOP structures, and workflow automation.',
                icon: <Sparkles className="size-8 text-primary" />,
                bg: 'bg-primary/5 dark:bg-primary/10',
                border: 'hover:border-primary/50'
              },
            ].map((block, idx) => (
              <div
                key={idx}
                className={`group bg-background p-10 rounded-3xl border border-border ${block.border} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${block.bg} rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110`} />
                <div className={`size-16 rounded-2xl ${block.bg} flex items-center justify-center mb-8 relative z-10`}>
                  {block.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">{block.title}</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">{block.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Services Overview Section */}
      <section id="services" className="py-24 bg-slate-950 text-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white">Our STR Services</h2>
              <p className="text-xl text-slate-400 font-light">
                Choose the support you need �from day-to-day tasks to listing performance and comprehensive business systems.
              </p>
            </div>
            <Button variant="outline" size="lg" className="rounded-full bg-white/5 border-white/20 text-white hover:bg-white hover:text-slate-900 group">
              Explore All Services <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <MessageSquare/>, title: 'Guest Communication', desc: 'Fast, professional messaging before, during, and after stays.' },
              { icon: <PenTool/>, title: 'Listing Creation & SEO', desc: 'Clearer, more attractive listings positioned to convert.' },
              { icon: <TrendingUp/>, title: 'Pricing & Calendars', desc: 'Monitor occupancy and availability to stay strategic.' },
              { icon: <Home/>, title: 'Check-In/Out Support', desc: 'Smooth arrival logistics to boost guest satisfaction.' },
              { icon: <CheckCircle2/>, title: 'Cleaning Coordination', desc: 'Manage cleaner communication and turnover follow-ups.' },
              { icon: <Wrench/>, title: 'Maintenance Org', desc: 'From reporting issues to effectively managing contractors.' },
              { icon: <Globe/>, title: 'Direct Booking Growth', desc: 'Website support and lead capture strategies.' },
              { icon: <Settings/>, title: 'SOP & System Setup', desc: 'Structure the backend with clean workflow documentation.' },
              { icon: <Award/>, title: 'Graphic & Brand Asset', desc: 'Visual content to make properties look polished online.' },
              { icon: <Users/>, title: 'Admin & Team Sync', desc: 'Keep operations aligned across all working parts.' },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-5">
                  <div className="size-12 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 group-hover:bg-white/20 transition-colors [&>svg]:size-5">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-white">{service.title}</h3>
                    <p className="text-primary-content/80 text-sm leading-relaxed group-hover:text-primary-foreground/80 transition-colors">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How It Works Section */}
      <section className="py-28 bg-background relative border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">How We Work With You</h2>
            <p className="text-xl text-muted-foreground">Four simple steps to getting your time back.</p>
          </div>
          
          <div className="max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Audit & Discover', desc: 'We look closely at your listings, current systems, and where you need help.' },
                { step: '02', title: 'Build the Plan', desc: 'We design a custom support plan covering daily ops and larger business goals.' },
                { step: '03', title: 'Manage Backend', desc: 'We step in to handle daily load, greatly improving operational structure.' },
                { step: '04', title: 'Focus on Growth', desc: 'You step back from chaotic tasks and redirect energy into scaling up.' },
              ].map((item, idx) => (
                <div key={idx} className="relative pt-8 md:pt-0 text-center group">
                  <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-background rounded-full items-center justify-center z-10">
                    <div className="size-16 rounded-full bg-slate-100 text-primary text-xl font-black flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                      {item.step}
                    </div>
                  </div>
                  
                  {/* Mobile step indicator */}
                  <div className="md:hidden size-16 mx-auto rounded-full bg-primary text-white text-xl font-black flex items-center justify-center mb-6 shadow-md">
                    {item.step}
                  </div>
                  
                  <div className="md:mt-32 p-6 rounded-2xl bg-muted/30 border border-transparent group-hover:border-border transition-colors">
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Assistophere & 8. Outcomes (Combined Value visually) */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-white dark:from-slate-900 dark:to-background overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Built Around Real Host Realities</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We understand that short-term rental support isn �t just about replying fast. It �s about keeping the whole business moving effectively.
              </p>
              
              <div className="space-y-4">
                {[
                  'Extensive Serviced Accommodation expertise',
                  'Thinking in lasting systems, not just one-off fixes',
                  'Dedicated to reducing host overwhelm',
                  'Focus on incredible guest experience AND growth',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-5 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl border border-white dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <CheckCircle2 className="size-5" />
                    </div>
                    <span className="font-bold text-lg">{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-primary to-primary/80 text-white shadow-xl shadow-primary/30">
                <h3 className="text-2xl font-bold mb-2">You stay in control.</h3>
                <p className="text-primary-foreground/80 text-lg">We help carry the heavy operational load.</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-primary opacity-5 blur-3xl rounded-full" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-4 pt-8">
                  <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700">
                    <MessageSquare className="size-10 text-primary mb-4" />
                    <h4 className="font-bold text-lg mb-2">Smoother Journeys</h4>
                    <p className="text-sm text-muted-foreground">Fewer missed messages, highly responsive guest relations.</p>
                  </div>
                  <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700">
                    <CheckCircle2 className="size-10 text-primary mb-4" />
                    <h4 className="font-bold text-lg mb-2">Better Operations</h4>
                    <p className="text-sm text-muted-foreground">Organised cleaning, maintenance, and daily ops structure.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700">
                    <Globe className="size-10 text-primary mb-4" />
                    <h4 className="font-bold text-lg mb-2">Stronger Listings</h4>
                    <p className="text-sm text-muted-foreground">Polished presentations ready to capture more bookings.</p>
                  </div>
                  <div className="p-8 rounded-3xl bg-primary text-white shadow-xl shadow-primary/30 transform hover:-translate-y-2 transition-transform duration-300">
                    <Sparkles className="size-10 text-white mb-4" />
                    <h4 className="font-bold text-xl mb-4 italic">&quot;More than just Virtual Assistants&quot;</h4>
                    <p className="text-primary-foreground/80 font-medium">Smart operational partners for your STR growth journey.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Ideal For Section & 10. Growth Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-4 flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Who We Work Best With</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Assistophere is a powerful fit for dedicated operators who want reliable, long-term support.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'Hosts managing multiple listings',
                  'Serviced accommodation companies',
                  'Co-hosts needing backend help',
                  'Ambitious property managers'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="size-2 bg-primary rounded-full" />
                    <span className="font-medium text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <div className="p-10 rounded-[2.5rem] bg-primary text-primary-content overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
                <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Beyond Daily Operations</h3>
                <p className="text-primary-content/90 text-lg mb-10 max-w-2xl relative z-10">
                  We don&apos;t just help you survive the daily workload. We strengthen the backend of your brand for incredible long-term growth.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                    <Globe className="text-primary-content size-8 mb-4" />
                    <h4 className="text-white font-bold text-xl mb-2">Direct Booking Setup</h4>
                    <p className="text-primary-content/80 text-sm">Website support, flow ideation, and improving user booking journeys.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                    <Settings className="text-primary-content size-8 mb-4" />
                    <h4 className="text-white font-bold text-xl mb-2">Business Systems</h4>
                    <p className="text-primary-content/80 text-sm">SOP creation, workflow optimisations, and team support structures.</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 11. Testimonial & FAQ combined block for sleek design */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Trusted Support & Clarity</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Users className="text-primary size-6" /> What Clients Value
              </h3>
              <div className="space-y-6">
                {[
                  "Saved us massive amounts of time every single week.",
                  "Reliable support we could actually completely trust.",
                  "Made our operations buttery-smooth behind the scenes.",
                ].map((quote, idx) => (
                  <div key={idx} className="p-8 bg-background rounded-2xl shadow-sm border border-border relative">
                    <div className="absolute top-4 right-4 text-primary/10 font-serif text-6xl leading-none">&quot;</div>
                    <p className="text-lg font-medium italic relative z-10">&quot;{quote}&quot;</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <HelpCircle className="text-primary size-6" /> Frequently Asked
              </h3>
              <div className="space-y-4">
                {[
                  { q: 'Do you only work with Airbnb hosts?', a: 'No, we support serviced accommodation businesses and multi-platform operators.' },
                  { q: 'Can you support multiple listings?', a: 'Yes! We specialise in operations for hosts with growing portfolios.' },
                  { q: 'Is this just a VA service?', a: 'No. Our focus is broader: we improve daily ops, structure, and powerful business systems.' },
                ].map((faq, idx) => (
                  <div key={idx} className="p-6 bg-background rounded-2xl shadow-sm border border-border hover:border-primary/30 transition-colors">
                    <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Final CTA Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-primary/40 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2 mix-blend-screen" />
          <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 mix-blend-screen" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tight leading-tight">
            Ready to Make Your Business <br />Easier to Run?
          </h2>
          <p className="text-xl text-slate-300 font-light mb-12 max-w-2xl mx-auto">
            Build a setup that feels more organised, more efficient, and incredibly easy to scale. The right team makes all the difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="px-12 py-8 text-xl font-bold rounded-full w-full sm:w-auto shadow-[0_0_40px_rgba(var(--primary),0.5)] hover:shadow-[0_0_60px_rgba(var(--primary),0.7)] hover:-translate-y-1 transition-all">
              Book a Discovery Call
            </Button>
            <Button size="lg" variant="outline" className="px-12 py-8 text-xl font-bold rounded-full w-full sm:w-auto bg-transparent border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all hover:-translate-y-1">
              Talk to Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}