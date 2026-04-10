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
import { MultiPlatformListingView } from '@/views/Pages/Services/AirbnbVa/MultiPlatformListingView'
import { ListingCreationOptimisationView } from '@/views/Pages/Services/AirbnbVa/ListingCreationOptimisationView'
import { PricingOptimisationView } from '@/views/Pages/Services/AirbnbVa/PricingOptimisationView'
import { ProfessionalPhotographyView } from '@/views/Pages/Services/AirbnbVa/ProfessionalPhotographyView'
import { GuestCommunicationView } from '@/views/Pages/Services/AirbnbVa/GuestCommunicationView'
import { GuestVettingView } from '@/views/Pages/Services/AirbnbVa/GuestVettingView'
import { GuestCheckInOutView } from '@/views/Pages/Services/AirbnbVa/GuestCheckInOutView'
import { CalendarManagementView } from '@/views/Pages/Services/AirbnbVa/CalendarManagementView'
import { CleaningCoordinationView } from '@/views/Pages/Services/AirbnbVa/CleaningCoordinationView'
import { LinenToiletriesView } from '@/views/Pages/Services/AirbnbVa/LinenToiletriesView'
import { PropertyMaintenanceView } from '@/views/Pages/Services/AirbnbVa/PropertyMaintenanceView'
import { MonthlyFinanceReportingView } from '@/views/Pages/Services/AirbnbVa/MonthlyFinanceReportingView'
import { GraphicalContentCreationView } from '@/views/Pages/Services/AirbnbVa/GraphicalContentCreationView'
import { DirectBookingEngineView } from '@/views/Pages/Services/DirectBookingEngine/DirectBookingEngineView'
import { DirectBookingWebsiteView } from '@/views/Pages/Services/DirectBookingEngine/DirectBookingWebsiteView'
import { DirectBookingConversionsView } from '@/views/Pages/Services/AirbnbVa/DirectBookingConversionsView'
import { BookingEngineIntegrationView } from '@/views/Pages/Services/DirectBookingEngine/BookingEngineIntegrationView'
import { PaymentSetupView } from '@/views/Pages/Services/DirectBookingEngine/PaymentSetupView'
import { SeoOrganicGrowthView } from '@/views/Pages/Services/DirectBookingEngine/SeoOrganicGrowthView'
import { GoogleAdsView } from '@/views/Pages/Services/DirectBookingEngine/GoogleAdsView'
import { LeadGenerationView } from '@/views/Pages/Services/LeadGeneration/LeadGenerationView'
import { LandlordLeadsView } from '@/views/Pages/Services/LeadGeneration/LandlordLeadsView'
import { GuestLeadsView } from '@/views/Pages/Services/LeadGeneration/GuestLeadsView'
import { SocialMediaManagementAndStrategyView } from '@/views/Pages/Services/SocialMediaMgtAndStr/SocialMediaManagementAndStrategyView'
import { SocialMediaContentCreationView } from '@/views/Pages/Services/SocialMediaMgtAndStr/SocialMediaContentCreationView'
import { PostingAndSchedulingView } from '@/views/Pages/Services/SocialMediaMgtAndStr/PostingAndSchedulingView'
import { BrandGrowthView } from '@/views/Pages/Services/SocialMediaMgtAndStr/BrandGrowthView'
import { CommunityEngagementView } from '@/views/Pages/Services/SocialMediaMgtAndStr/CommunityEngagementView'
import { PlatformManagementView } from '@/views/Pages/Services/SocialMediaMgtAndStr/PlatformManagementView'
import { SystemsBuildingView } from '@/views/Pages/Services/SystemsBuilding/SystemsBuildingView'
import { STRBusinessSetupView } from '@/views/Pages/Services/SystemsBuilding/STRBusinessSetupView'
import { STRAutomationView } from '@/views/Pages/Services/SystemsBuilding/STRAutomationView'
import { SOPCreationView } from '@/views/Pages/Services/SystemsBuilding/SOPCreationView'
import { TeamStructuringView } from '@/views/Pages/Services/SystemsBuilding/TeamStructuringView'
import { ContactView } from '@/views/Pages/ContactView'
import { WhyUsView } from '@/views/Pages/Company/WhyUsView'

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
    case 'multi-platform-listing':
      ViewComponent = <MultiPlatformListingView page={page} />
      break
    case 'listing-creation-optimisation':
      ViewComponent = <ListingCreationOptimisationView page={page} />
      break
    case 'pricing-optimisation':
      ViewComponent = <PricingOptimisationView page={page} />
      break
    case 'professional-photography':
      ViewComponent = <ProfessionalPhotographyView page={page} />
      break
    case 'guest-communication':
      ViewComponent = <GuestCommunicationView page={page} />
      break
    case 'guest-vetting':
      ViewComponent = <GuestVettingView page={page} />
      break
    case 'guest-check-in-check-out':
      ViewComponent = <GuestCheckInOutView page={page} />
      break
    case 'calendar-management':
      ViewComponent = <CalendarManagementView page={page} />
      break
    case 'cleaning-coordination':
      ViewComponent = <CleaningCoordinationView page={page} />
      break
    case 'linen-toiletries':
      ViewComponent = <LinenToiletriesView page={page} />
      break
    case 'property-maintenance':
      ViewComponent = <PropertyMaintenanceView page={page} />
      break
    case 'monthly-finance-reporting':
      ViewComponent = <MonthlyFinanceReportingView page={page} />
      break
    case 'graphical-content-creation':
      ViewComponent = <GraphicalContentCreationView page={page} />
      break
    case 'direct-booking-engine':
      ViewComponent = <DirectBookingEngineView page={page} />
      break
    case 'direct-booking-website':
      ViewComponent = <DirectBookingWebsiteView page={page} />
      break
    case 'direct-booking-conversions':
      ViewComponent = <DirectBookingConversionsView page={page} />
      break
    case 'booking-engine-integration':
      ViewComponent = <BookingEngineIntegrationView page={page} />
      break
    case 'payment-setup':
      ViewComponent = <PaymentSetupView page={page} />
      break
    case 'seo-organic-growth':
      ViewComponent = <SeoOrganicGrowthView page={page} />
      break
    case 'google-ads':
      ViewComponent = <GoogleAdsView page={page} />
      break
    case 'lead-generation':
      ViewComponent = <LeadGenerationView page={page} />
      break
    case 'landlord-leads':
      ViewComponent = <LandlordLeadsView page={page} />
      break
    case 'guest-leads':
      ViewComponent = <GuestLeadsView page={page} />
      break
    case 'social-media-mgt-and-str':
      ViewComponent = <SocialMediaManagementAndStrategyView page={page} />
      break
    case 'social-media-content-creation':
      ViewComponent = <SocialMediaContentCreationView page={page} />
      break
    case 'posting-and-scheduling':
      ViewComponent = <PostingAndSchedulingView page={page} />
      break
    case 'brand-growth':
      ViewComponent = <BrandGrowthView page={page} />
      break
    case 'community-engagement':
      ViewComponent = <CommunityEngagementView page={page} />
      break
    case 'platform-management':
      ViewComponent = <PlatformManagementView page={page} />
      break
    case 'systems-building':
      ViewComponent = <SystemsBuildingView page={page} />
      break
    case 'str-business-setup':
      ViewComponent = <STRBusinessSetupView page={page} />
      break
    case 'str-automation':
      ViewComponent = <STRAutomationView page={page} />
      break
    case 'sop-creation':
      ViewComponent = <SOPCreationView page={page} />
      break
    case 'team-structuring':
      ViewComponent = <TeamStructuringView page={page} />
      break
    case 'contact':
      ViewComponent = <ContactView page={page} />
      break
    case 'why-us':
      ViewComponent = <WhyUsView page={page} />
      break
    case 'default':
    default:
      ViewComponent = <DefaultView page={page} />
      break
  }

  return (
    <article className="pb-24">
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
