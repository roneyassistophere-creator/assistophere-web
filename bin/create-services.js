const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, '../src/views/Pages/Services');

const createViewContent = (name, title) => `import React from 'react'
import type { Page } from '@/payload-types'

export const ${name}: React.FC<{ page: Page }> = ({ page }) => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">{page.title || '${title}'}</h1>
      {/* Add your content here */}
    </div>
  )
}
`;

const structure = {
  '.': [
    { file: 'ServicesView.tsx', name: 'ServicesView', title: 'Services' },
    { file: 'ContactView.tsx', name: 'ContactView', title: 'Contact' },
    { file: 'WhyUsView.tsx', name: 'WhyUsView', title: 'Why Us ?' },
    { file: 'SearchView.tsx', name: 'SearchView', title: 'Search' },
    { file: 'FreeAuditView.tsx', name: 'FreeAuditView', title: 'Free Audit' }
  ],
  'AirbnbVa': [
    { file: 'AirbnbVaView.tsx', name: 'AirbnbVaView', title: 'Airbnb VA' },
    { file: 'MultiPlatformListingView.tsx', name: 'MultiPlatformListingView', title: 'Multi Platform Listing' },
    { file: 'ListingCreationAndOptimizationView.tsx', name: 'ListingCreationAndOptimizationView', title: 'Listing Creation and Optimization' },
    { file: 'ProfessionalPhotographyView.tsx', name: 'ProfessionalPhotographyView', title: 'Professional Photography' },
    { file: 'PricingOptimizationView.tsx', name: 'PricingOptimizationView', title: 'Pricing optimization' },
    { file: 'DirectBookingConversionsView.tsx', name: 'DirectBookingConversionsView', title: 'Direct booking Conversions' },
    { file: 'GuestCommunicationView.tsx', name: 'GuestCommunicationView', title: 'Guest Communication' },
    { file: 'GuestVettingView.tsx', name: 'GuestVettingView', title: 'Guest vetting' },
    { file: 'GuestCheckInCheckOutSupportView.tsx', name: 'GuestCheckInCheckOutSupportView', title: 'Guest Check-In Check-Out Support' },
    { file: 'CalendarManagementView.tsx', name: 'CalendarManagementView', title: 'Calendar Management' },
    { file: 'CleaningCoordinationView.tsx', name: 'CleaningCoordinationView', title: 'Cleaning Coordination' },
    { file: 'LinenAndToiletriesView.tsx', name: 'LinenAndToiletriesView', title: 'Linen & Toiletries' },
    { file: 'PropertyMaintenanceView.tsx', name: 'PropertyMaintenanceView', title: 'Property Maintenance' },
    { file: 'MonthlyFinanceReportingView.tsx', name: 'MonthlyFinanceReportingView', title: 'Monthly Finance reporting' },
    { file: 'GraphicalContentCreationView.tsx', name: 'GraphicalContentCreationView', title: 'Graphical Content Creation' }
  ],
  'DirectBookingEngine': [
    { file: 'DirectBookingEngineView.tsx', name: 'DirectBookingEngineView', title: 'Direct Booking Engine' },
    { file: 'BookingWebDevView.tsx', name: 'BookingWebDevView', title: 'Booking Web Dev' },
    { file: 'BookingEngineIntegrationView.tsx', name: 'BookingEngineIntegrationView', title: 'Booking engine Integration' },
    { file: 'PaymentSetupView.tsx', name: 'PaymentSetupView', title: 'Payment Setup' },
    { file: 'SeoAndOrganicGrowthView.tsx', name: 'SeoAndOrganicGrowthView', title: 'SEO & Organic growth' },
    { file: 'GoogleAdsView.tsx', name: 'GoogleAdsView', title: 'Google Ads' }
  ],
  'LeadGeneration': [
    { file: 'LeadGenerationView.tsx', name: 'LeadGenerationView', title: 'Lead Generation' },
    { file: 'LandlordLeadsView.tsx', name: 'LandlordLeadsView', title: 'Landlord Leads' },
    { file: 'GuestLeadsView.tsx', name: 'GuestLeadsView', title: 'Guest Leads' }
  ],
  'SocialMediaMgt': [
    { file: 'SocialMediaMgtView.tsx', name: 'SocialMediaMgtView', title: 'Social Media MGT' },
    { file: 'ContentCreationView.tsx', name: 'ContentCreationView', title: 'Content Creation' },
    { file: 'PostingView.tsx', name: 'PostingView', title: 'Posting' },
    { file: 'EngagementView.tsx', name: 'EngagementView', title: 'Engagement' },
    { file: 'BrandGrowthView.tsx', name: 'BrandGrowthView', title: 'Brand growth' },
    { file: 'DualTargetingView.tsx', name: 'DualTargetingView', title: 'Dual targeting' }
  ],
  'StrSystemsBuilding': [
    { file: 'StrSystemsBuildingView.tsx', name: 'StrSystemsBuildingView', title: 'STR Systems Building' },
    { file: 'BusinessSetupView.tsx', name: 'BusinessSetupView', title: 'Business setup' },
    { file: 'AutomationView.tsx', name: 'AutomationView', title: 'Automation' },
    { file: 'SopCreationView.tsx', name: 'SopCreationView', title: 'SOP Creation' },
    { file: 'TeamStructuringView.tsx', name: 'TeamStructuringView', title: 'Team Structuring' }
  ]
};

Object.entries(structure).forEach(([dir, files]) => {
  const fullDirPath = path.join(basePath, dir);
  if (!fs.existsSync(fullDirPath)) {
    fs.mkdirSync(fullDirPath, { recursive: true });
  }

  files.forEach(f => {
    fs.writeFileSync(path.join(fullDirPath, f.file), createViewContent(f.name, f.title));
  });
});

console.log('Services structure bootstrapped!');
