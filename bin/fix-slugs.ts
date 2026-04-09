/**
 * Fix slug mismatches and delete duplicate/orphan pages.
 *
 * Changes:
 * 1. Delete  guest-check-in-check-out-support  (duplicate of guest-check-in-check-out)
 * 2. Fix slug listing-creation-and-optimization → listing-creation-optimisation
 * 3. Fix slug pricing-optimization → pricing-optimisation
 */
import { getPayload } from 'payload'
import config from '../src/payload.config'

async function main() {
  const payload = await getPayload({ config })

  // ── 1. DELETE duplicate guest-check-in-check-out-support ──────────────────
  const dupId = '69ca6ccf7cc5a22b02c32e54'
  console.log(`\n[1] Deleting duplicate page: ${dupId}`)
  try {
    await payload.delete({
      collection: 'pages',
      id: dupId,
      overrideAccess: true,
      context: { disableRevalidate: true },
    })
    console.log(`    ✅ Deleted guest-check-in-check-out-support`)
  } catch (e: unknown) {
    console.log(`    ⚠️  Could not delete: ${e instanceof Error ? e.message : String(e)}`)
  }

  // ── 2. FIX slug: listing-creation-and-optimization → listing-creation-optimisation ─
  const listingId = '69ba9ccb4b33600510eff8e9'
  console.log(`\n[2] Fixing slug for listing-creation page (id: ${listingId})`)
  try {
    const doc = await payload.findByID({
      collection: 'pages',
      id: listingId,
      depth: 1,
      overrideAccess: true,
    })
    const currentBc = (doc.breadcrumbs as any[]) || []
    console.log(`    Current slug: ${doc.slug}`)
    console.log(
      `    Current breadcrumbs:`,
      currentBc.map((b: any) => `${b.label} → ${b.url}`),
    )

    const newSlug = 'listing-creation-optimisation'
    const newBreadcrumbs = currentBc.map((b: { label: string; url: string }) => ({
      ...b,
      url: b.url?.replace('listing-creation-and-optimization', newSlug),
    }))

    await payload.update({
      collection: 'pages',
      id: listingId,
      overrideAccess: true,
      context: { disableRevalidate: true },
      data: {
        slug: newSlug,
        breadcrumbs: newBreadcrumbs,
      } as never,
    })
    console.log(`    ✅ Slug updated to: ${newSlug}`)
  } catch (e: unknown) {
    console.log(`    ⚠️  Error: ${e instanceof Error ? e.message : String(e)}`)
  }

  // ── 3. FIX slug: pricing-optimization → pricing-optimisation ──────────────
  const pricingId = '69ca6cc47cc5a22b02c32e22'
  console.log(`\n[3] Fixing slug for pricing page (id: ${pricingId})`)
  try {
    const doc = await payload.findByID({
      collection: 'pages',
      id: pricingId,
      depth: 1,
      overrideAccess: true,
    })
    const currentBc = (doc.breadcrumbs as any[]) || []
    console.log(`    Current slug: ${doc.slug}`)

    const newSlug = 'pricing-optimisation'
    const newBreadcrumbs = currentBc.map((b: { label: string; url: string }) => ({
      ...b,
      url: b.url?.replace('pricing-optimization', newSlug),
    }))

    await payload.update({
      collection: 'pages',
      id: pricingId,
      overrideAccess: true,
      context: { disableRevalidate: true },
      data: {
        slug: newSlug,
        breadcrumbs: newBreadcrumbs,
      } as never,
    })
    console.log(`    ✅ Slug updated to: ${newSlug}`)
  } catch (e: unknown) {
    console.log(`    ⚠️  Error: ${e instanceof Error ? e.message : String(e)}`)
  }

  // ── 4. Verify final state ─────────────────────────────────────────────────
  console.log(`\n[4] Verifying final state...`)
  const all = await payload.find({
    collection: 'pages',
    limit: 500,
    depth: 0,
    overrideAccess: true,
  })
  const suspicious = all.docs.filter((p) => {
    const url = ((p.breadcrumbs as any[]) || []).map((b: any) => b.url).join('') || `/${p.slug}`
    return (
      url.includes('ota-management') ||
      url.includes('check-in-check-out-support') ||
      url.includes('-and-optimization') ||
      url.includes('-optimization')
    )
  })

  if (suspicious.length === 0) {
    console.log('    ✅ No suspicious slugs found — all clean!')
  } else {
    console.log('    ⚠️  Still suspicious:')
    suspicious.forEach((p) => {
      const url = ((p.breadcrumbs as any[]) || []).map((b: any) => b.url).join('') || `/${p.slug}`
      console.log(`       ${url}  (id: ${p.id})`)
    })
  }

  console.log('\nDone.')
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
