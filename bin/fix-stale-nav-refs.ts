/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * fix-stale-nav-refs.ts
 *
 * Fixes stale page reference IDs in the header nav by replacing them with
 * the correct IDs for the matching pages (matched by slug or title).
 *
 * Usage:
 *   npx tsx bin/fix-stale-nav-refs.ts
 */
import payloadConfig from '../src/payload.config'
import { getPayload } from 'payload'

async function run() {
  const payload = await getPayload({ config: payloadConfig })

  // Build a map of all pages: id -> slug/title
  const pages = await payload.find({
    collection: 'pages',
    limit: 1000,
    depth: 0,
    pagination: false,
    select: { id: true, slug: true, title: true } as any,
  })
  const pageIds = new Set(pages.docs.map((d: any) => String(d.id)))
  const pageBySlug: Record<string, string> = {}
  const pageByTitle: Record<string, string> = {}
  pages.docs.forEach((d: any) => {
    if (d.slug) pageBySlug[d.slug] = String(d.id)
    if (d.title) pageByTitle[d.title.toLowerCase()] = String(d.id)
  })

  // Known stale → replacement mapping (stale ID → correct page slug)
  const knownFixes: Record<string, string> = {
    '69ca6ccf7cc5a22b02c32e54': 'guest-check-in-check-out',
  }

  // Fetch header as raw JSON string so we can do targeted replacements
  const header = await payload.findGlobal({ slug: 'header', depth: 0 })
  let headerStr = JSON.stringify(header)

  let fixCount = 0

  for (const [staleId, targetSlug] of Object.entries(knownFixes)) {
    if (!headerStr.includes(staleId)) {
      console.log(`ℹ️  Stale ID ${staleId} not found in header — already fixed?`)
      continue
    }

    const correctId = pageBySlug[targetSlug]
    if (!correctId) {
      console.log(`⚠️  No page found with slug "${targetSlug}" — cannot fix ${staleId}`)
      continue
    }

    if (!pageIds.has(correctId)) {
      console.log(`⚠️  Replacement page ${correctId} not in live pages — skipping`)
      continue
    }

    headerStr = headerStr.replaceAll(staleId, correctId)
    console.log(`✅  Replaced ${staleId} → ${correctId} (${targetSlug})`)
    fixCount++
  }

  if (fixCount === 0) {
    console.log('\n✅  No fixes needed — header is already clean.')
    process.exit(0)
  }

  // Parse the fixed JSON back and update the global
  const fixedHeader = JSON.parse(headerStr)

  // Remove fields that shouldn't be sent as update data
  delete fixedHeader._id
  delete fixedHeader.id
  delete fixedHeader.createdAt
  delete fixedHeader.updatedAt
  delete fixedHeader.globalType

  await payload.updateGlobal({
    slug: 'header',
    context: { disableRevalidate: true },
    data: fixedHeader,
  })

  console.log(`\n✅  Header updated successfully with ${fixCount} fix(es).`)
  console.log('   Restart the server / revalidate cache to apply changes.')

  process.exit(0)
}

run().catch((e) => {
  console.error('❌ Error:', e)
  process.exit(1)
})
