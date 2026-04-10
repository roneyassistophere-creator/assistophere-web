/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * fix-stale-media-refs.ts
 *
 * Finds and clears stale media/relationship references across all collections
 * and globals. Run when you see:
 *   "The document with ID <id> could not be found. It may have been deleted
 *    or never existed, or you may not have access to it."
 *
 * Usage:
 *   npx tsx bin/fix-stale-media-refs.ts
 */

import payloadConfig from '../src/payload.config'
import { getPayload } from 'payload'

// ─── helpers ────────────────────────────────────────────────────────────────

/** Return all Media IDs that actually exist in the DB */
async function getLiveMediaIds(
  payload: Awaited<ReturnType<typeof getPayload>>,
): Promise<Set<string>> {
  const result = await payload.find({
    collection: 'media',
    limit: 0, // fetch count only
    pagination: false,
    depth: 0,
  })
  // re-fetch everything if there are docs
  if (result.totalDocs === 0) return new Set()

  const all = await payload.find({
    collection: 'media',
    limit: result.totalDocs,
    pagination: false,
    depth: 0,
    select: { id: true } as any,
  })
  return new Set(all.docs.map((d: any) => String(d.id)))
}

/** Walk an object and collect every string value that looks like a Mongo ID */
function extractIds(obj: unknown, ids: Set<string> = new Set()): Set<string> {
  if (!obj || typeof obj !== 'object') return ids
  for (const [key, val] of Object.entries(obj as Record<string, unknown>)) {
    if (typeof val === 'string' && /^[0-9a-f]{24}$/.test(val) && key !== '_id' && key !== 'id') {
      ids.add(val)
    } else if (typeof val === 'object') {
      extractIds(val, ids)
    }
  }
  return ids
}

/** Check a single ID against the live set and return whether it's stale */
function isStale(id: string | undefined | null, liveIds: Set<string>): boolean {
  if (!id) return false
  return /^[0-9a-f]{24}$/.test(id) && !liveIds.has(id)
}

// ─── main ───────────────────────────────────────────────────────────────────

async function run() {
  const payload = await getPayload({ config: payloadConfig })

  console.log('\n🔍  Loading all live Media IDs…')
  const liveMedia = await getLiveMediaIds(payload)
  console.log(`   ✅  Found ${liveMedia.size} live Media documents`)

  let totalFixed = 0

  // ── 1. GLOBALS ─────────────────────────────────────────────────────────────

  const globals = ['site-settings', 'header', 'footer'] as const

  for (const slug of globals) {
    console.log(`\n🌐  Checking global: ${slug}`)
    let global: any
    try {
      global = await payload.findGlobal({ slug, depth: 0 })
    } catch {
      console.log(`   ⚠️  Could not read global ${slug} — skipping`)
      continue
    }

    // site-settings has upload fields at top level
    if (slug === 'site-settings') {
      const fields: string[] = ['siteLogoLight', 'siteLogoDark', 'siteIcon', 'cmsIcon']
      const patch: Record<string, null> = {}
      for (const f of fields) {
        const val = global[f]
        const id =
          typeof val === 'string' ? val : typeof val === 'object' && val ? val.id || val._id : null
        if (id && isStale(String(id), liveMedia)) {
          console.log(`   🗑️  Stale ${f}: ${id}`)
          patch[f] = null
        }
      }
      if (Object.keys(patch).length > 0) {
        await payload.updateGlobal({ slug, data: patch as any })
        console.log(`   ✅  Cleared ${Object.keys(patch).length} stale field(s) in ${slug}`)
        totalFixed += Object.keys(patch).length
      } else {
        console.log(`   ✅  No stale references in ${slug}`)
      }
    }

    // footer / header — check nav items for stale media
    // (these rarely store media directly, but log what IDs exist)
    const embedded = extractIds(global)
    const staleInGlobal = [...embedded].filter((id) => isStale(id, liveMedia))
    if (staleInGlobal.length > 0) {
      console.log(
        `   ⚠️  Stale IDs found inside ${slug} (manual fix may be needed):`,
        staleInGlobal,
      )
    } else {
      console.log(`   ✅  No obvious stale IDs in ${slug}`)
    }
  }

  // ── 2. PAGES COLLECTION ────────────────────────────────────────────────────

  console.log('\n📄  Checking Pages collection…')
  const pagesResult = await payload.find({
    collection: 'pages',
    limit: 0,
    pagination: false,
    depth: 0,
  })

  if (pagesResult.totalDocs > 0) {
    const allPages = await payload.find({
      collection: 'pages',
      limit: pagesResult.totalDocs,
      pagination: false,
      depth: 0,
    })

    for (const page of allPages.docs) {
      const patch: Record<string, any> = {}

      // Check meta.image
      const metaImage = (page as any)?.meta?.image
      const metaImageId =
        typeof metaImage === 'string'
          ? metaImage
          : typeof metaImage === 'object' && metaImage
            ? metaImage.id || metaImage._id
            : null

      if (metaImageId && isStale(String(metaImageId), liveMedia)) {
        console.log(`   🗑️  Page "${(page as any).slug}" — stale meta.image: ${metaImageId}`)
        patch['meta.image'] = null
      }

      // Check heroImage (if present)
      const heroImage = (page as any)?.heroImage
      const heroId =
        typeof heroImage === 'string'
          ? heroImage
          : typeof heroImage === 'object' && heroImage
            ? heroImage.id || heroImage._id
            : null
      if (heroId && isStale(String(heroId), liveMedia)) {
        console.log(`   🗑️  Page "${(page as any).slug}" — stale heroImage: ${heroId}`)
        patch['heroImage'] = null
      }

      if (Object.keys(patch).length > 0) {
        await payload.update({
          collection: 'pages',
          id: (page as any).id,
          data: patch,
        })
        console.log(`   ✅  Fixed page "${(page as any).slug}"`)
        totalFixed++
      }
    }
    console.log(`   ✅  Pages scan complete (${allPages.totalDocs} pages checked)`)
  }

  // ── 3. POSTS COLLECTION ────────────────────────────────────────────────────

  console.log('\n📝  Checking Posts collection…')
  try {
    const postsResult = await payload.find({
      collection: 'posts',
      limit: 0,
      pagination: false,
      depth: 0,
    })

    if (postsResult.totalDocs > 0) {
      const allPosts = await payload.find({
        collection: 'posts',
        limit: postsResult.totalDocs,
        pagination: false,
        depth: 0,
      })

      for (const post of allPosts.docs) {
        const patch: Record<string, any> = {}

        const metaImage = (post as any)?.meta?.image
        const metaImageId =
          typeof metaImage === 'string'
            ? metaImage
            : typeof metaImage === 'object' && metaImage
              ? metaImage.id || metaImage._id
              : null

        if (metaImageId && isStale(String(metaImageId), liveMedia)) {
          console.log(`   🗑️  Post "${(post as any).slug}" — stale meta.image: ${metaImageId}`)
          patch['meta.image'] = null
        }

        const heroImage = (post as any)?.heroImage
        const heroId =
          typeof heroImage === 'string'
            ? heroImage
            : typeof heroImage === 'object' && heroImage
              ? heroImage.id || heroImage._id
              : null
        if (heroId && isStale(String(heroId), liveMedia)) {
          console.log(`   🗑️  Post "${(post as any).slug}" — stale heroImage: ${heroId}`)
          patch['heroImage'] = null
        }

        if (Object.keys(patch).length > 0) {
          await payload.update({
            collection: 'posts',
            id: (post as any).id,
            data: patch,
          })
          console.log(`   ✅  Fixed post "${(post as any).slug}"`)
          totalFixed++
        }
      }
      console.log(`   ✅  Posts scan complete (${allPosts.totalDocs} posts checked)`)
    }
  } catch (e) {
    console.log('   ⚠️  Could not scan posts:', e)
  }

  // ── Summary ────────────────────────────────────────────────────────────────

  console.log('\n─────────────────────────────────────────────')
  if (totalFixed === 0) {
    console.log('✅  No stale references found — database is clean!')
    console.log('\n💡  The "document could not be found" error may be coming from')
    console.log("    the Payload admin panel's own relationship display for a document")
    console.log('    type other than Media (e.g. a deleted Page or Category).')
    console.log('    Check which admin URL shows the error and note the collection.')
  } else {
    console.log(`✅  Fixed ${totalFixed} stale reference(s) across collections and globals.`)
    console.log('    Restart the server to clear Next.js cache.')
  }
  console.log('─────────────────────────────────────────────\n')

  process.exit(0)
}

run().catch((err) => {
  console.error('❌ Error:', err)
  process.exit(1)
})
