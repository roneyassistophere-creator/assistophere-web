/**
 * Seed script: Creates all pages referenced by footer links.
 *
 * Run with:  npx tsx bin/seed-footer-pages.ts
 *
 * This creates published pages so that footer links no longer 404.
 * The nested-docs plugin will automatically populate breadcrumbs.
 */
import payloadConfig from '../src/payload.config'
import { getPayload } from 'payload'

interface PageDef {
  title: string
  slug: string
  parentSlug?: string // slug of the parent page (for nested pages)
  template?: 'default' | 'home'
}

// All the pages referenced by the footer (from bin/seed-footer.ts)
const footerPages: PageDef[] = [
  // ── COMPANY column ──
  { title: 'About Us', slug: 'about-us' },
  { title: 'Our Team', slug: 'our-team', parentSlug: 'about-us' },
  { title: 'Our Clients', slug: 'our-clients', parentSlug: 'about-us' },
  { title: 'Client Reviews', slug: 'client-reviews', parentSlug: 'about-us' },
  { title: 'Case Studies', slug: 'case-studies', parentSlug: 'about-us' },
  { title: 'FAQ', slug: 'faq' },
  { title: 'Terms & Conditions', slug: 'terms-and-conditions' },
  { title: 'Privacy Policy', slug: 'privacy-policy' },

  // ── ROI & PERFORMANCE column ──
  { title: 'ROI Calculator UK', slug: 'roi-calculator-uk' },
  { title: 'Enter Airbnb Market', slug: 'enter-airbnb-market' },
  { title: 'Airbnb Consultancy & Training', slug: 'airbnb-consultancy-training' },
  { title: 'Boost Airbnb', slug: 'boost-airbnb' },
  { title: 'Airbnb Performance Optimization', slug: 'airbnb-performance-optimization' },
]

async function run() {
  const payload = await getPayload({ config: payloadConfig })

  // Build a map of slug → id for parent look-ups
  const slugToId: Record<string, string> = {}

  // Track what we created vs skipped
  const created: string[] = []
  const skipped: string[] = []

  // First pass: create top-level pages (no parentSlug)
  for (const pageDef of footerPages.filter((p) => !p.parentSlug)) {
    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: pageDef.slug } },
      limit: 1,
      depth: 0,
    })

    if (existing.docs.length > 0) {
      slugToId[pageDef.slug] = existing.docs[0].id
      skipped.push(pageDef.slug)
      console.log(`⏭️  Skipped (already exists): ${pageDef.title} → /${pageDef.slug}`)
      continue
    }

    const page = await payload.create({
      collection: 'pages',
      context: { disableRevalidate: true },
      data: {
        title: pageDef.title,
        slug: pageDef.slug,
        template: pageDef.template || 'default',
        _status: 'published',
        publishedAt: new Date().toISOString(),
        generateSlug: false,
      },
    })

    slugToId[pageDef.slug] = page.id
    created.push(pageDef.slug)
    console.log(`✅ Created: ${pageDef.title} → /${pageDef.slug}`)
  }

  // Second pass: create child pages (with parentSlug)
  for (const pageDef of footerPages.filter((p) => p.parentSlug)) {
    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: pageDef.slug } },
      limit: 1,
      depth: 0,
    })

    if (existing.docs.length > 0) {
      slugToId[pageDef.slug] = existing.docs[0].id
      skipped.push(pageDef.slug)
      console.log(`⏭️  Skipped (already exists): ${pageDef.title} → /${pageDef.parentSlug}/${pageDef.slug}`)
      continue
    }

    const parentId = slugToId[pageDef.parentSlug!]
    if (!parentId) {
      console.error(`❌ Cannot create "${pageDef.title}": parent "${pageDef.parentSlug}" not found.`)
      continue
    }

    const page = await payload.create({
      collection: 'pages',
      context: { disableRevalidate: true },
      data: {
        title: pageDef.title,
        slug: pageDef.slug,
        template: pageDef.template || 'default',
        parent: parentId,
        _status: 'published',
        publishedAt: new Date().toISOString(),
        generateSlug: false,
      },
    })

    slugToId[pageDef.slug] = page.id
    created.push(`${pageDef.parentSlug}/${pageDef.slug}`)
    console.log(`✅ Created: ${pageDef.title} → /${pageDef.parentSlug}/${pageDef.slug}`)
  }

  console.log('\n── Summary ──')
  console.log(`Created: ${created.length} pages`)
  console.log(`Skipped: ${skipped.length} pages (already existed)`)
  console.log('Done! Footer pages are now available.')

  process.exit(0)
}

run().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
