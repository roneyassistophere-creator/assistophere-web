import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

const subPageSlugs = [
  'multi-platform-listings',
  'listing-creation-and-optimization',
  'professional-photography',
  'price-optimisation',
  'direct-booking-conversion',
  'guest-communication',
  'guest-vetting',
  'guest-check-in',
  'calendar-management',
  'cleaning-coordination',
  'linen-and-toiletries',
  'property-maintenance',
  'monthly-finance-reporting',
  'graphical-content-creation',
]

// Helper to extract { relationTo, value } from a fetched polymorphic relation
function getReferenceValue(ref: any) {
  if (!ref) return null

  if (ref.relationTo && ref.value) {
    if (typeof ref.value === 'object' && ref.value.id) {
      return {
        relationTo: ref.relationTo,
        value: ref.value.id,
      }
    }
    return {
      relationTo: ref.relationTo,
      value: ref.value,
    }
  }
  return ref
}

// Helper to format a link group for update
const formatLink = (linkGroup: any) => {
  if (!linkGroup) return linkGroup
  return {
    ...linkGroup,
    reference: getReferenceValue(linkGroup.reference),
  }
}

async function updateHeader() {
  console.log('Starting header update...')

  const payload = await getPayload({ config: configPromise })

  // 1. Fetch sub-pages
  const pagesQuery = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        in: subPageSlugs,
      },
    },
    limit: 100,
  })

  // Map slug => page doc
  const pageMap = new Map(pagesQuery.docs.map((doc) => [doc.slug, doc]))

  // 2. Fetch Header Global
  // Depth 1 ensures polymorphic relations are populated with { relationTo, value: doc }
  const header = await payload.findGlobal({
    slug: 'header',
    depth: 1,
  })

  if (!header) {
    console.error('Header global not found!')
    process.exit(1)
  }

  const navItems = header.navItems || []
  let otaIndex = -1

  // 3. Find "OTA Management"
  for (let i = 0; i < navItems.length; i++) {
    const item = navItems[i]
    if (item.link?.label === 'OTA Management') {
      otaIndex = i
      break
    }

    const ref = item.link?.reference
    // Check if reference points to ota-management page
    if (
      ref &&
      typeof ref === 'object' &&
      'value' in ref &&
      typeof ref.value === 'object' &&
      'slug' in ref.value &&
      ref.value.slug === 'ota-management'
    ) {
      otaIndex = i
      break
    }
  }

  // 4. Construct NEW subLinks using subPageSlugs order
  const newSubLinks = []
  for (const slug of subPageSlugs) {
    const page = pageMap.get(slug)
    if (page) {
      newSubLinks.push({
        link: {
          type: 'reference',
          reference: {
            relationTo: 'pages',
            value: page.id,
          },
          label: page.title,
          newTab: false,
        },
        subSubLinks: [],
      })
    } else {
      console.warn(`Page with slug "${slug}" not found in database. Skipping.`)
    }
  }

  // If OTA item not found, create new item
  if (otaIndex === -1) {
    console.log('"OTA Management" not found. Creating new nav item...')
    const otaPageResult = await payload.find({
      collection: 'pages',
      where: { slug: { equals: 'ota-management' } },
      limit: 1,
    })

    if (otaPageResult.totalDocs > 0) {
      const otaPage = otaPageResult.docs[0]
      const newItem = {
        link: {
          type: 'reference',
          reference: {
            relationTo: 'pages',
            value: otaPage.id,
          },
          label: 'OTA Management',
          newTab: false,
        },
        subLinks: newSubLinks,
      }

      // Add to navItems
      navItems.push(newItem as any)
      otaIndex = navItems.length - 1
    } else {
      console.error('Parent page "ota-management" not found in DB. Cannot create nav item.')
      process.exit(1)
    }
  } else {
    // Modify existing item in place
    console.log(`Found "OTA Management" at index ${otaIndex}. Replacing subLinks...`)
    navItems[otaIndex].subLinks = newSubLinks as any
  }

  // 5. Ensure entire navItems array is properly formatted for update
  // We need to traverse ALL items and format their links because Payload expects
  // relationship fields to be in the correct shape for update.
  const formattedNavItems = navItems.map((item, idx) => {
    // Re-format link
    const newItem = {
      ...item,
      link: formatLink(item.link),
      // Recurse for subLinks
      subLinks: item.subLinks?.map((sub: any) => ({
        ...sub,
        link: formatLink(sub.link),
        // Recurse for subSubLinks
        subSubLinks: sub.subSubLinks?.map((subSub: any) => ({
          ...subSub,
          link: formatLink(subSub.link),
        })),
      })),
    }
    return newItem
  })

  // Update Global
  await payload.updateGlobal({
    slug: 'header',
    data: {
      navItems: formattedNavItems,
    },
    context: {
      disableRevalidate: true,
    },
  })

  console.log('Header updated successfully!')
  process.exit(0)
}

updateHeader()
