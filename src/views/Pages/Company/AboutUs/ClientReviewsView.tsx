import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Page, ClientReview, Media } from '@/payload-types'
import { Star, Quote, MapPin, Tag, MessageSquare, Phone, Filter } from 'lucide-react'

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
  'general': 'General / Multiple',
}

const PLATFORM_LABELS: Record<string, string> = {
  direct: 'Direct',
  google: 'Google',
  trustpilot: 'Trustpilot',
  linkedin: 'LinkedIn',
  other: 'Other',
}

function getImageUrl(img: string | Media | null | undefined): string | null {
  if (!img || typeof img === 'string') return null
  return (img as Media).url ?? null
}

function StarRow({ rating }: { rating: string }) {
  const count = parseInt(rating, 10)
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < count ? 'fill-amber-400 text-amber-400' : 'text-base-300'}`} />
      ))}
    </div>
  )
}

function Initials({ name }: { name: string }) {
  const parts = name.trim().split(' ')
  const ini = parts.length >= 2
    ? `${parts[0][0]}${parts[parts.length - 1][0]}`
    : parts[0].slice(0, 2)
  return ini.toUpperCase()
}

export const ClientReviewsView: React.FC<{ page: Page }> = async () => {
  const payload = await getPayload({ config })
  const { docs: reviews } = await payload.find({
    collection: 'client-reviews',
    limit: 200,
    sort: '-featured',
  })

  const featured = reviews.filter((r) => r.featured)
  const fiveStars = reviews.filter((r) => r.rating === '5')
  const totalReviews = reviews.length
  const avgRating = totalReviews
    ? (reviews.reduce((acc, r) => acc + parseInt(r.rating, 10), 0) / totalReviews).toFixed(1)
    : '0'

  return (
    <div className="min-h-screen bg-base-100 text-base-content overflow-x-hidden">
      <style>{`
        @keyframes cr-fade-up {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .cr-fade-1 { animation: cr-fade-up .5s ease both .10s; }
        .cr-fade-2 { animation: cr-fade-up .5s ease both .22s; }
        .cr-fade-3 { animation: cr-fade-up .5s ease both .34s; }
      `}</style>

      {/* HERO */}
      <section className="relative overflow-hidden pt-16 pb-14 lg:pt-20 lg:pb-18">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-amber-400/8 rounded-full blur-[130px]" />
          <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[110px]" />
        </div>
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <div className="cr-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-600 text-sm font-medium mb-5">
            <Star className="w-4 h-4 fill-amber-400" /> Client Reviews · Real Feedback
          </div>
          <h1 className="cr-fade-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight mb-4">
            What Our Clients{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Actually Say
            </span>
          </h1>
          <p className="cr-fade-3 text-lg text-base-content/65 max-w-2xl mx-auto leading-relaxed mb-8">
            These are real reviews from real clients who trusted us with their STR businesses.
            Unedited. Unscripted.
          </p>
          {/* Summary bar */}
          {totalReviews > 0 && (
            <div className="cr-fade-3 inline-flex flex-wrap justify-center gap-8 bg-base-200 border border-base-300 rounded-2xl px-8 py-5">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-2xl font-extrabold text-amber-500">{avgRating}</p>
                <p className="text-xs text-base-content/45">Average Rating</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-extrabold text-primary">{totalReviews}</p>
                <p className="text-xs text-base-content/45">Total Reviews</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-extrabold text-success">{fiveStars.length}</p>
                <p className="text-xs text-base-content/45">5-Star Reviews</p>
              </div>
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
              <h2 className="text-xl font-bold">Highlighted Reviews</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featured.map((r) => <ReviewCard key={r.id} review={r} featured />)}
            </div>
          </div>
        </section>
      )}

      {/* ALL REVIEWS */}
      <section className="py-16 lg:py-20">
        <div className="container max-w-7xl mx-auto px-4">
          {reviews.length > 0 ? (
            <>
              <div className="flex items-center gap-2 mb-8">
                <Filter className="w-5 h-5 text-base-content/40" />
                <h2 className="text-xl font-bold">
                  {featured.length > 0 ? 'All Reviews' : 'Client Reviews'}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {reviews.filter((r) => !r.featured).map((r) => <ReviewCard key={r.id} review={r} />)}
              </div>
            </>
          ) : (
            <div className="text-center py-24 text-base-content/40">
              <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="text-lg font-semibold">No reviews yet.</p>
              <p className="text-sm mt-1">Add client reviews in the CMS under &ldquo;About Us → Client Reviews&rdquo;.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-base-200 border-t border-base-300 py-16 lg:py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary/20 via-base-200 to-secondary/12 border border-base-300 px-8 py-14 text-center shadow-lg">
            <h2 className="text-2xl lg:text-3xl font-extrabold mb-3">Ready to Get Results Like These?</h2>
            <p className="text-base-content/60 text-base max-w-lg mx-auto mb-7">
              Let&apos;s talk about your STR business and how we can help you improve it.
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

function ReviewCard({ review, featured = false }: { review: ClientReview; featured?: boolean }) {
  const imgUrl = (() => {
    const a = review.avatar
    if (!a || typeof a === 'string') return null
    return (a as Media).url ?? null
  })()

  return (
    <div className={`bg-base-100 rounded-2xl border p-5 flex flex-col gap-3 ${featured ? 'border-amber-400/30 shadow-md' : 'border-base-300'}`}>
      <div className="flex items-start justify-between gap-2">
        <StarRow rating={review.rating} />
        <Quote className="w-5 h-5 text-primary/25 shrink-0" />
      </div>
      <p className="text-sm text-base-content/70 leading-relaxed flex-1 italic">
        &ldquo;{review.reviewText}&rdquo;
      </p>
      <div className="flex flex-wrap gap-2">
        {review.serviceType && (
          <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary rounded-full px-2.5 py-0.5 border border-primary/20">
            <Tag className="w-3 h-3" /> {SERVICE_LABELS[review.serviceType] ?? review.serviceType}
          </span>
        )}
        {review.location && (
          <span className="inline-flex items-center gap-1 text-xs bg-base-200 text-base-content/50 rounded-full px-2.5 py-0.5 border border-base-300">
            <MapPin className="w-3 h-3" /> {review.location}
          </span>
        )}
        {review.platform && review.platform !== 'direct' && (
          <span className="text-xs bg-base-200 text-base-content/40 rounded-full px-2.5 py-0.5 border border-base-300">
            via {PLATFORM_LABELS[review.platform]}
          </span>
        )}
      </div>
      <div className="flex items-center gap-3 pt-1 border-t border-base-300">
        {imgUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imgUrl} alt={review.clientName} className="w-9 h-9 rounded-full object-cover" />
        ) : (
          <div className="w-9 h-9 rounded-full bg-primary text-primary-content flex items-center justify-center text-xs font-bold shrink-0">
            <Initials name={review.clientName} />
          </div>
        )}
        <div>
          <p className="text-sm font-semibold">{review.clientName}</p>
          {review.clientTitle && <p className="text-xs text-base-content/45">{review.clientTitle}</p>}
        </div>
      </div>
    </div>
  )
}
