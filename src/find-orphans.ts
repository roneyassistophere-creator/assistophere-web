import { getPayload } from 'payload'
import config from './payload.config'

async function run() {
  const payload = await getPayload({ config: await config })

  const header = await payload.findGlobal({ slug: 'header', depth: 2 }).catch(() => null)
  const footer = await payload.findGlobal({ slug: 'footer', depth: 2 }).catch(() => null)

  const referencedPageIds = new Set<string>()

  function extractLinksFromNavItems(items: unknown) {
    if (!items || !Array.isArray(items)) return

    for (const item of items) {
      // Direct link
      const link = item.link || item

      if (
        link &&
        link.type === 'reference' &&
        link.reference?.relationTo === 'pages' &&
        link.reference.value
      ) {
        const id =
          typeof link.reference.value === 'string' ? link.reference.value : link.reference.value.id
        referencedPageIds.add(id)
      }

      // Sub-links
      if (item.subLinks) extractLinksFromNavItems(item.subLinks)
      if (item.subSubLinks) extractLinksFromNavItems(item.subSubLinks)
    }
  }

  if (header?.navItems) extractLinksFromNavItems(header.navItems)
  if (footer?.columns) {
    for (const col of footer.columns) {
      if (col.navItems) extractLinksFromNavItems(col.navItems)
    }
  }

  // Home page is often referenced differently, assume 'home' slug is always safe
  const allPages = await payload.find({
    collection: 'pages',
    limit: 1000,
    depth: 0,
  })

  console.log(`\nTotal Pages in DB: ${allPages.totalDocs}`)
  console.log(`Total Referenced Pages in Header/Footer: ${referencedPageIds.size}\n`)

  const safeSlugs = [
    'home',
    'contact',
    'about',
    'services',
    'case-studies',
    'client-reviews',
    'our-clients',
    'our-team',
    'privacy-policy',
    'terms-and-conditions',
    'faq',
    'about-us',
    'locations',
    'pricing',
    'guests',
    'landlords',
  ] // Ensure core pages and standard pages are preserved

  const orphans = allPages.docs.filter((p: unknown) => {
    const page = p as { id: string; slug: string; title?: string }
    return !referencedPageIds.has(page.id) && !safeSlugs.includes(page.slug)
  })

  if (orphans.length === 0) {
    console.log('No orphan pages found.')
  } else {
    const idsToDelete = orphans.map((p) => p.id)
    console.log(`Deleting ${idsToDelete.length} unlinked orphan pages...`)
    const pageModel = payload.db.collections['pages']
    await pageModel.deleteMany({ _id: { $in: idsToDelete } })
    console.log('Cleanup complete.')
  }

  process.exit(0)
}

run().catch(console.error)
