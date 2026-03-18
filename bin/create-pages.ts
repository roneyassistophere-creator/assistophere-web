import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

interface PageDef {
  title: string
  slug: string
  parentSlug?: string // Slug of the parent page (for nested pages)
  template?: 'default' | 'home'
  // Add other fields you want to populate here
}

/**
 * EDIT THIS ARRAY to add the pages you want to create.
 * The script will check if a page with the same slug exists before creating it.
 */
const pagesToCreate: PageDef[] = [
  // ── REMOVE OLD SUBPAGES ──
  // The script logic below will handle removal of existing subpages of OTA Management
  // before creating these new ones.

  // ── ADD NEW SUBPAGES ──
  { title: 'Multi-Platform Listings', slug: 'multi-platform-listings', parentSlug: 'ota-management' },
  { title: 'Listing Creation & Optimization', slug: 'listing-creation-and-optimization', parentSlug: 'ota-management' },
  { title: 'Professional Photography', slug: 'professional-photography', parentSlug: 'ota-management' },
  { title: 'Price Optimisation', slug: 'price-optimisation', parentSlug: 'ota-management' },
  { title: 'Direct Booking Conversion', slug: 'direct-booking-conversion', parentSlug: 'ota-management' },
  { title: 'Guest Communication', slug: 'guest-communication', parentSlug: 'ota-management' },
  { title: 'Guest Vetting', slug: 'guest-vetting', parentSlug: 'ota-management' },
  { title: 'Guest Check-in', slug: 'guest-check-in', parentSlug: 'ota-management' },
  { title: 'Calendar Management', slug: 'calendar-management', parentSlug: 'ota-management' },
  { title: 'Cleaning Coordination', slug: 'cleaning-coordination', parentSlug: 'ota-management' },
  { title: 'Linen & Toiletries', slug: 'linen-and-toiletries', parentSlug: 'ota-management' },
  { title: 'Property Maintenance', slug: 'property-maintenance', parentSlug: 'ota-management' },
  { title: 'Monthly Finance Reporting', slug: 'monthly-finance-reporting', parentSlug: 'ota-management' },
  { title: 'Graphical Content Creation', slug: 'graphical-content-creation', parentSlug: 'ota-management' },
]

async function createPages() {
  console.log('Starting page creation...')
  
  // Initialize Payload
  const payload = await getPayload({ config: configPromise })

  // 0. Locate Parent Page (OTA Management) and Clean Up Old Children
  const parentSlug = 'ota-management';
  const parentPageQuery = await payload.find({
    collection: 'pages',
    where: { slug: { equals: parentSlug } },
    limit: 1,
  })

  let parentId: string | null = null;

  if (parentPageQuery.totalDocs > 0) {
    parentId = parentPageQuery.docs[0].id;
    console.log(`Found parent page: ${parentSlug} (${parentId})`);

    // Find and delete existing children to start fresh (as requested)
      // Be careful with this in production!
      const childrenQuery = await payload.find({
        collection: 'pages',
        where: { parent: { equals: parentId } },
        limit: 100,
      })

      if (childrenQuery.totalDocs > 0) {
        console.log(`Found ${childrenQuery.totalDocs} existing sub-pages under ${parentSlug}. Removing them...`)
        
        for (const child of childrenQuery.docs) {
          try {
            await payload.delete({
              collection: 'pages',
              id: child.id,
              context: { disableRevalidate: true },
            })
            console.log(`🗑️  Deleted old sub-page: ${child.title} (/${child.slug})`)
          } catch (e) {
            console.error(`Error deleting page ${child.slug}:`, e)
          }
        }
      }
    } else {
      console.error(`❌ Parent page "${parentSlug}" not found! Cannot create sub-pages.`)
      // We'll proceed, but the loop below will likely fail to find the parent too
    }

  for (const pageDef of pagesToCreate) {
    try {
      // 1. Check if page already exists
      const existingPages = await payload.find({
        collection: 'pages',
        where: {
          slug: {
            equals: pageDef.slug,
          },
        },
        limit: 1,
      })

      if (existingPages.totalDocs > 0) {
        console.log(`⏭️  Skipped: Page "${pageDef.title}" (/ ${pageDef.slug}) already exists.`)
        continue
      }

      // 2. Find parent if specified
      let parentId: string | null = null

      if (pageDef.parentSlug) {
        const parentPage = await payload.find({
          collection: 'pages',
          where: {
            slug: {
              equals: pageDef.parentSlug,
            },
          },
          limit: 1,
        })

        if (parentPage.totalDocs > 0) {
          parentId = parentPage.docs[0].id
        } else {
          console.warn(`⚠️  Warning: Parent page "${pageDef.parentSlug}" not found. Creating "${pageDef.slug}" as a root page instead.`)
        }
      }

      // 3. Create the page
      const newPage = await payload.create({
        collection: 'pages',
        context: { disableRevalidate: true }, // Disable revalidation to avoid Next.js cache errors in standalone script
        data: {
          title: pageDef.title,
          slug: pageDef.slug,
          template: pageDef.template || 'default',
          parent: parentId, // Relationship to parent page
          _status: 'published',
          publishedAt: new Date().toISOString(),
          // Ensure hooks run to populate breadcrumbs etc
        },
      })

      console.log(`✅ Created: "${newPage.title}" (/${pageDef.slug})`)

    } catch (error) {
      console.error(`❌ Error creating page "${pageDef.slug}":`, error)
    }
  }

  console.log('\n✨ Page creation process finished.')
  process.exit(0)
}

createPages()
