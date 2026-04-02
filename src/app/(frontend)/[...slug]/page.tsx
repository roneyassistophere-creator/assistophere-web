import type { Metadata } from 'next'
import type { Page as PageType } from '@/payload-types'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React from 'react'
import { homeStatic } from '@/endpoints/seed/home-static'

import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { redirect } from 'next/navigation'
import { HomeView } from '@/views/Pages/HomeView'
import { DefaultView } from '@/views/Pages/DefaultView'
import { MasterView } from '@/views/Pages/MasterView'
import { AboutUsView } from '@/views/Pages/Company/AboutUs/AboutUsView'
import { FaqView } from '@/views/Pages/Company/FaqView'
import { BlogsAndTopicsView } from '@/views/Pages/Company/BlogsAndTopicsView'
import { TermsAndConditionsView } from '@/views/Pages/Company/TermsAndConditionsView'
import { PrivacyPolicyView } from '@/views/Pages/Company/PrivacyPolicyView'
import { OurTeamView } from '@/views/Pages/Company/AboutUs/OurTeamView'
import { OurClientsView } from '@/views/Pages/Company/AboutUs/OurClientsView'
import { ClientReviewsView } from '@/views/Pages/Company/AboutUs/ClientReviewsView'
import { CaseStudiesView } from '@/views/Pages/Company/AboutUs/CaseStudiesView'
import { RoiCalculatorUkView } from '@/views/Pages/RoiAndPerformance/RoiCalculatorUkView'
import { EnterAirbnbMarketView } from '@/views/Pages/RoiAndPerformance/EnterAirbnbMarketView'
import { AirbnbConsultancyAndTrainingView } from '@/views/Pages/RoiAndPerformance/AirbnbConsultancyAndTrainingView'
import { BoostAirbnbView } from '@/views/Pages/RoiAndPerformance/BoostAirbnbView'
import { AirbnbPerformanceOptimizationView } from '@/views/Pages/RoiAndPerformance/AirbnbPerformanceOptimizationView'
import { ServicesView } from '@/views/Pages/Services/ServicesView'
import { AirbnbVaView } from '@/views/Pages/Services/AirbnbVa/AirbnbVaView'
import { DirectBookingEngineView } from '@/views/Pages/Services/DirectBookingEngine/DirectBookingEngineView'
import { LeadGenerationView } from '@/views/Pages/Services/LeadGeneration/LeadGenerationView'
import { SocialMediaManagementAndStrategyView } from '@/views/Pages/Services/SocialMediaMgtAndStr/SocialMediaManagementAndStrategyView'
import { SystemsBuildingView } from '@/views/Pages/Services/SystemsBuilding/SystemsBuildingView'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
      breadcrumbs: true,
    },
  })

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map((doc) => {
      // If we have breadcrumbs, split the URL to get the full slug array
      const breadcrumbs =
        'breadcrumbs' in doc ? (doc.breadcrumbs as { url?: string | null }[] | null) : null
      if (breadcrumbs && breadcrumbs.length > 0) {
        const url = breadcrumbs[breadcrumbs.length - 1]?.url
        if (url) {
          const split = url.split('/').filter(Boolean)
          if (split.length > 0) return { slug: split }
        }
      }
      return { slug: [doc.slug || ''] }
    })

  return params
}

type Args = {
  params: Promise<{
    slug?: string | string[]
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const resolvedParams = await paramsPromise
  const slugArray = resolvedParams.slug || ['home']
  const slug = Array.isArray(slugArray) ? slugArray[slugArray.length - 1] : slugArray

  if (slug === 'home') {
    redirect('/')
  }

  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const url = '/' + (Array.isArray(slugArray) ? slugArray.join('/') : slugArray)
  let page: PageType | null

  page = await queryPageBySlug({
    slug: decodedSlug,
  })

  // Remove this code once your website is seeded
  if (!page && slug === 'home') {
    page = homeStatic as unknown as PageType
  }

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  // Template Routing Logic
  let ViewComponent: React.ReactNode

  switch (page.template) {
    case 'home':
      ViewComponent = <HomeView page={page} />
      break
    case 'master':
      ViewComponent = <MasterView page={page} />
      break
    case 'about-us':
      ViewComponent = <AboutUsView page={page} />
      break
    case 'faq':
      ViewComponent = <FaqView page={page} />
      break
    case 'blogs-and-topics':
      ViewComponent = <BlogsAndTopicsView page={page} />
      break
    case 'terms-and-conditions':
      ViewComponent = <TermsAndConditionsView page={page} />
      break
    case 'privacy-policy':
      ViewComponent = <PrivacyPolicyView page={page} />
      break
    case 'our-team':
      ViewComponent = <OurTeamView page={page} />
      break
    case 'our-clients':
      ViewComponent = <OurClientsView page={page} />
      break
    case 'client-reviews':
      ViewComponent = <ClientReviewsView page={page} />
      break
    case 'case-studies':
      ViewComponent = <CaseStudiesView page={page} />
      break
    case 'roi-calculator-uk':
      ViewComponent = <RoiCalculatorUkView page={page} />
      break
    case 'enter-airbnb-market':
      ViewComponent = <EnterAirbnbMarketView page={page} />
      break
    case 'airbnb-consultancy-and-training':
      ViewComponent = <AirbnbConsultancyAndTrainingView page={page} />
      break
    case 'boost-airbnb':
      ViewComponent = <BoostAirbnbView page={page} />
      break
    case 'airbnb-performance-optimization':
      ViewComponent = <AirbnbPerformanceOptimizationView page={page} />
      break
    case 'services':
      ViewComponent = <ServicesView page={page} />
      break
    case 'airbnb-va':
      ViewComponent = <AirbnbVaView page={page} />
      break
    case 'direct-booking-engine':
      ViewComponent = <DirectBookingEngineView page={page} />
      break
    case 'lead-generation':
      ViewComponent = <LeadGenerationView page={page} />
      break
    case 'social-media-mgt-and-str':
      ViewComponent = <SocialMediaManagementAndStrategyView page={page} />
      break
    case 'systems-building':
      ViewComponent = <SystemsBuildingView page={page} />
      break
    case 'default':
    default:
      ViewComponent = <DefaultView page={page} />
      break
  }

  return (
    <article className="pt-16 pb-24">
      <PageClient />
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      {ViewComponent}
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const resolvedParams = await paramsPromise
  const slugArray = resolvedParams.slug || ['home']
  const slug = Array.isArray(slugArray) ? slugArray[slugArray.length - 1] : slugArray

  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const page = await queryPageBySlug({
    slug: decodedSlug,
  })

  return generateMeta({ doc: page })
}

// Remove cache() wrapper to allow instant hot reload in development
const queryPageBySlug = async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft,
    depth: 1,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
}
