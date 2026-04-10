import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Page, OurClient, CaseStudy, Media } from '@/payload-types'
import {
  Building2, MapPin, Tag, ExternalLink, Star, Phone, Users,
  CheckCircle2, ArrowRight,
} from 'lucide-react'

const TYPE_LABELS: Record<string, string> = {
  'individual-host': 'Individual Host',
  'property-investor': 'Property Investor',
  'sa-operator': 'SA Operator',
  'letting-agent': 'Letting Agent',
  'property-management': 'Property Management',
  'developer': 'Developer',
  'other': 'Other',
}

const SERVICE_LABELS: Record<string, string> = {
  'str-business-setup': 'STR Business Setup',
  'str-automation': 'STR Automation',
  'sop-creation': 'SOP Creation',
  'team-structuring': 'Team Structuring',
  'systems-building': 'Systems Building',
  'performance-optimisation': 'Performance Optimisation',
  'roi-consultancy': 'ROI Consultancy',
  'graphical-content': 'Graphical Content',
  'lead-generation': 'Lead Generation',
  'virtual-assistant': 'Virtual Assistant',
}

function getLogoUrl(logo: string | Media | null | undefined): string | null {
  if (!logo || typeof logo === 'string') return null
  return (logo as Media).url ?? null
}

function Initials({ name }: { name: string }) {
  const parts = name.trim().split(' ')
  const ini = parts.length >= 2
    ? `${parts[0][0]}${parts[parts.length - 1][0]}`
    : parts[0].slice(0, 2)
  return ini.toUpperCase()
}

export const OurClientsView: React.FC<{ page: Page }> = async () => {
  const payload = await getPayload({ config })
  const { docs: allClients } = await payload.find({
    collection: 'our-clients',
    limit: 200,
    sort: '-featured',
    where: { active: { equals: true } },
    depth: 1,
  })

  const featured = allClients.filter((c) => c.featured)
  const rest = allClients.filter((c) => !c.featured)

  // Count by type for the stat bar
  const typeCounts = allClients.reduce<Record<string, number>>((acc, c) => {
    acc[c.type] = (acc[c.type] ?? 0) + 1
    return acc
  }, {})

  return (
    <div className="min-h-screen bg-base-100 text-base-content overflow-x-hidden">
      <style>{`
        @keyframes oc-fade-up {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .oc-fade-1 { animation: oc-fade-up .5s ease both .10s; }
        .oc-fade-2 { animation: oc-fade-up .5s ease both .22s; }
        .oc-fade-3 { animation: oc-fade-up .5s ease both .34s; }
      `}</style>

      {/* HERO */}
      <section className="relative overflow-hidden pt-16 pb-14 lg:pt-20 lg:pb-18">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[130px]" />
          <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[110px]" />
        </div>
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <div className="oc-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-5">
            <Users className="w-4 h-4" /> Our Clients · The Businesses We Serve
          </div>
          <h1 className="oc-fade-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight mb-4">
            The Clients{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              We Work With
            </span>
          </h1>
          <p className="oc-fade-3 text-lg text-base-content/65 max-w-2xl mx-auto leading-relaxed mb-8">
            From individual hosts to scaling SA operators — we work with UK property businesses
            who want systems, results, and a team they can rely on.
          </p>
          {allClients.length > 0 && (
            <div className="oc-fade-3 flex flex-wrap justify-center gap-6">
              <div className="text-center">
                <p className="text-2xl font-extrabold text-primary">{allClients.length}+</p>
                <p className="text-xs text-base-content/50 mt-0.5">Active Clients</p>
              </div>
              {Object.entries(typeCounts).slice(0, 3).map(([type, count]) => (
                <div key={type} className="text-center">
                  <p className="text-2xl font-extrabold text-primary">{count}</p>
                  <p className="text-xs text-base-content/50 mt-0.5">{TYPE_LABELS[type] ?? type}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FEATURED */}
      {featured.length > 0 && (
        <section className="bg-base-200 border-y border-base-300 py-16 lg:py-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-8">
              <Star className="w-5 h-5 text-amber-500 fill-amber-400" />
              <h2 className="text-xl font-bold">Featured Clients</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featured.map((c) => <ClientCard key={c.id} client={c} featured />)}
            </div>
          </div>
        </section>
      )}

      {/* ALL CLIENTS */}
      <section className="py-16 lg:py-20">
        <div className="container max-w-7xl mx-auto px-4">
          {rest.length > 0 ? (
            <>
              <h2 className="text-xl font-bold mb-8">
                {featured.length > 0 ? 'All Clients' : 'Our Clients'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {rest.map((c) => <ClientCard key={c.id} client={c} />)}
              </div>
            </>
          ) : allClients.length === 0 ? (
            <div className="text-center py-24 text-base-content/40">
              <Building2 className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="text-lg font-semibold">No clients added yet.</p>
              <p className="text-sm mt-1">Add clients in the CMS under &ldquo;About Us → Our Clients&rdquo;.</p>
            </div>
          ) : null}
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="bg-base-200 border-y border-base-300 py-16 lg:py-20">
        <div className="container max-w-7xl mx-auto px-4 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Why Clients Choose Assistophere</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Systems That Work', desc: 'We build the operational infrastructure that lets your STR business run without you.' },
              { title: 'Real Results', desc: 'Our clients see measurable improvements in occupancy, revenue, and time back in their day.' },
              { title: 'Long-Term Partnership', desc: 'We work alongside you — not as a one-off service, but as an ongoing part of your business.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-base-100 rounded-2xl border border-base-300 p-5 text-left">
                <div className="w-9 h-9 rounded-xl bg-success/15 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                </div>
                <p className="font-bold text-sm">{title}</p>
                <p className="text-xs text-base-content/55 mt-1.5 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary/20 via-base-200 to-secondary/12 border border-base-300 px-8 py-14 text-center shadow-lg">
            <h2 className="text-2xl lg:text-3xl font-extrabold mb-3">Ready to Join Our Client List?</h2>
            <p className="text-base-content/60 text-base max-w-lg mx-auto mb-7">
              Let&apos;s talk about your STR business and how we can help you build something that works.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button className="btn btn-primary btn-lg rounded-full px-10 gap-2 shadow">
                <Phone className="w-4 h-4" /> Book a Discovery Call
              </button>
              <button className="btn btn-outline btn-lg rounded-full px-8 gap-2">
                <ArrowRight className="w-4 h-4" /> See Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ClientCard({ client, featured = false }: { client: OurClient; featured?: boolean }) {
  const logoUrl = getLogoUrl(client.logo)
  const linkedStudy = typeof client.caseStudy === 'object' && client.caseStudy !== null
    ? (client.caseStudy as CaseStudy)
    : null

  return (
    <div className={`bg-base-100 rounded-2xl border overflow-hidden flex flex-col ${featured ? 'border-primary/30 shadow-md' : 'border-base-300'}`}>
      <div className="p-5 flex flex-col gap-3 flex-1">
        {featured && (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 bg-amber-400/12 border border-amber-400/25 rounded-full px-2.5 py-0.5 w-fit">
            <Star className="w-3 h-3 fill-amber-400" /> Featured
          </span>
        )}
        {/* Logo or initials */}
        <div className="flex items-center gap-3">
          {logoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logoUrl} alt={client.name} className="w-12 h-12 object-contain rounded-xl border border-base-300 bg-base-200 p-1" />
          ) : (
            <div className="w-12 h-12 rounded-xl bg-primary text-primary-content flex items-center justify-center text-base font-extrabold shrink-0">
              <Initials name={client.name} />
            </div>
          )}
          <div>
            <p className="font-bold text-sm leading-snug">{client.name}</p>
            {client.location && (
              <span className="inline-flex items-center gap-1 text-xs text-base-content/50">
                <MapPin className="w-3 h-3" /> {client.location}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary rounded-full px-2.5 py-0.5 border border-primary/20">
            <Building2 className="w-3 h-3" /> {TYPE_LABELS[client.type] ?? client.type}
          </span>
        </div>

        {client.description && (
          <p className="text-sm text-base-content/60 leading-relaxed line-clamp-3">{client.description}</p>
        )}

        {client.servicesUsed && client.servicesUsed.length > 0 && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-base-content/35 mb-1.5">Services used</p>
            <div className="flex flex-wrap gap-1.5">
              {client.servicesUsed.map((s) => (
                <span key={s} className="inline-flex items-center gap-1 text-xs bg-base-200 text-base-content/55 rounded-full px-2 py-0.5 border border-base-300">
                  <Tag className="w-2.5 h-2.5" /> {SERVICE_LABELS[s] ?? s}
                </span>
              ))}
            </div>
          </div>
        )}

        {linkedStudy && (
          <div className="mt-auto pt-2 border-t border-base-200">
            <span className="inline-flex items-center gap-1.5 text-xs text-primary font-medium hover:underline cursor-pointer">
              <ExternalLink className="w-3.5 h-3.5" /> View Case Study: {linkedStudy.clientName}
            </span>
          </div>
        )}

        {client.websiteUrl && (
          <a
            href={client.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-base-content/45 hover:text-primary transition-colors"
          >
            <ExternalLink className="w-3 h-3" /> {client.websiteUrl.replace(/^https?:\/\//, '')}
          </a>
        )}
      </div>
    </div>
  )
}
