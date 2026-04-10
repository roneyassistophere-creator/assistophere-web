import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Page, CaseStudy, Media } from '@/payload-types'
import {
  TrendingUp, MapPin, Tag, Star, ChevronRight, BookOpen,
  BarChart3, ArrowRight, Phone, CheckCircle2, Briefcase,
} from 'lucide-react'

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
  'other': 'Other',
}

function getImageUrl(img: string | Media | null | undefined): string | null {
  if (!img || typeof img === 'string') return null
  return (img as Media).url ?? null
}

function getImageAlt(img: string | Media | null | undefined, fallback = ''): string {
  if (!img || typeof img === 'string') return fallback
  return (img as Media).alt ?? fallback
}

export const CaseStudiesView: React.FC<{ page: Page }> = async () => {
  const payload = await getPayload({ config })
  const { docs: allStudies } = await payload.find({
    collection: 'case-studies',
    limit: 100,
    sort: '-featured',
  })

  const featured = allStudies.filter((s) => s.featured)
  const rest = allStudies.filter((s) => !s.featured)

  return (
    <div className="min-h-screen bg-base-100 text-base-content overflow-x-hidden">
      <style>{`
        @keyframes cs-fade-up {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .cs-fade-1 { animation: cs-fade-up .5s ease both .10s; }
        .cs-fade-2 { animation: cs-fade-up .5s ease both .22s; }
        .cs-fade-3 { animation: cs-fade-up .5s ease both .34s; }
      `}</style>

      {/* HERO */}
      <section className="relative overflow-hidden pt-16 pb-14 lg:pt-20 lg:pb-18">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[130px]" />
          <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[110px]" />
        </div>
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <div className="cs-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-5">
            <BookOpen className="w-4 h-4" /> Case Studies · Real Results
          </div>
          <h1 className="cs-fade-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight mb-4">
            Real Clients.{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Real Results.
            </span>
          </h1>
          <p className="cs-fade-3 text-lg text-base-content/65 max-w-2xl mx-auto leading-relaxed">
            Every case study below is a real engagement — with a real brief, real challenges, and
            measurable outcomes we delivered together.
          </p>
          <div className="cs-fade-3 flex justify-center gap-8 mt-8">
            {[
              { value: `${allStudies.length}+`, label: 'Case Studies' },
              { value: '100%', label: 'Real Clients' },
              { value: 'UK', label: 'Focused' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-extrabold text-primary">{value}</p>
                <p className="text-xs text-base-content/50 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      {featured.length > 0 && (
        <section className="bg-base-200 border-y border-base-300 py-16 lg:py-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-8">
              <Star className="w-5 h-5 text-amber-500 fill-amber-400" />
              <h2 className="text-xl font-bold">Featured Case Studies</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featured.map((study) => (
                <CaseStudyCard key={study.id} study={study} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ALL STUDIES */}
      <section className="py-16 lg:py-20">
        <div className="container max-w-7xl mx-auto px-4">
          {rest.length > 0 ? (
            <>
              <h2 className="text-xl font-bold mb-8">
                {featured.length > 0 ? 'All Case Studies' : 'Case Studies'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {rest.map((study) => (
                  <CaseStudyCard key={study.id} study={study} />
                ))}
              </div>
            </>
          ) : allStudies.length === 0 ? (
            <div className="text-center py-24 text-base-content/40">
              <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="text-lg font-semibold">No case studies yet.</p>
              <p className="text-sm mt-1">Add case studies in the CMS under &ldquo;About Us → Case Studies&rdquo;.</p>
            </div>
          ) : null}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-base-200 border-t border-base-300 py-16 lg:py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary/20 via-base-200 to-secondary/12 border border-base-300 px-8 py-14 text-center shadow-lg">
            <h2 className="text-2xl lg:text-3xl font-extrabold mb-3">
              Ready to Become the Next Case Study?
            </h2>
            <p className="text-base-content/60 text-base max-w-lg mx-auto mb-7">
              Let&apos;s talk about your setup, your goals, and how we can help you get results like these.
            </p>
            <button className="btn btn-primary btn-lg rounded-full px-10 gap-2 shadow">
              <Phone className="w-4 h-4" /> Book a Discovery Call
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

function CaseStudyCard({ study, featured = false }: { study: CaseStudy; featured?: boolean }) {
  const imgUrl = getImageUrl(study.coverImage)
  const imgAlt = getImageAlt(study.coverImage, study.clientName)

  return (
    <article className={`bg-base-100 rounded-2xl border overflow-hidden flex flex-col ${featured ? 'border-primary/30 shadow-md' : 'border-base-300'}`}>
      {imgUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imgUrl} alt={imgAlt} className="w-full h-44 object-cover" />
      ) : (
        <div className="w-full h-44 bg-primary/8 flex items-center justify-center">
          <Briefcase className="w-10 h-10 text-primary/30" />
        </div>
      )}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {featured && (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 bg-amber-400/12 border border-amber-400/25 rounded-full px-2.5 py-0.5 w-fit">
            <Star className="w-3 h-3 fill-amber-400" /> Featured
          </span>
        )}
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary rounded-full px-2.5 py-0.5 border border-primary/20">
            <Tag className="w-3 h-3" /> {SERVICE_LABELS[study.serviceType] ?? study.serviceType}
          </span>
          {study.location && (
            <span className="inline-flex items-center gap-1 text-xs bg-base-200 text-base-content/55 rounded-full px-2.5 py-0.5 border border-base-300">
              <MapPin className="w-3 h-3" /> {study.location}
            </span>
          )}
        </div>
        <h3 className="font-bold text-base leading-snug">{study.clientName}</h3>
        {study.tagline && <p className="text-sm text-base-content/60 leading-relaxed">{study.tagline}</p>}

        {/* Metrics */}
        {study.metrics && study.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mt-1">
            {study.metrics.map((m) => (
              <div key={m.id} className="bg-success/6 border border-success/20 rounded-xl px-3 py-2 text-center">
                <p className="text-base font-extrabold text-success">{m.value}</p>
                <p className="text-[10px] text-base-content/50 mt-0.5">{m.label}</p>
              </div>
            ))}
          </div>
        )}

        {study.challenge && (
          <div className="space-y-1 mt-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-base-content/35">Challenge</p>
            <p className="text-sm text-base-content/60 leading-relaxed line-clamp-3">{study.challenge}</p>
          </div>
        )}
        {study.outcome && (
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-base-content/35">Outcome</p>
            <p className="text-sm text-base-content/65 font-medium leading-relaxed line-clamp-3">{study.outcome}</p>
          </div>
        )}

        {study.clientQuote && (
          <blockquote className="border-l-2 border-primary/40 pl-3 italic text-sm text-base-content/55 leading-relaxed mt-1 line-clamp-2">
            &ldquo;{study.clientQuote}&rdquo;
            {study.clientTitle && <footer className="not-italic text-xs text-base-content/40 mt-1">— {study.clientTitle}</footer>}
          </blockquote>
        )}
      </div>
    </article>
  )
}
