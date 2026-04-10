/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * check-header-ids.ts
 * Checks which IDs inside the header global are valid Pages vs stale refs
 */
import payloadConfig from '../src/payload.config'
import { getPayload } from 'payload'

async function run() {
  const payload = await getPayload({ config: payloadConfig })

  // Get all existing page IDs
  const pages = await payload.find({
    collection: 'pages',
    limit: 1000,
    depth: 0,
    pagination: false,
  })
  const pageIds = new Set(pages.docs.map((d: any) => String(d.id)))
  console.log('Total pages in DB:', pages.totalDocs)

  // Get header raw data
  const header = await payload.findGlobal({ slug: 'header', depth: 0 })
  const headerStr = JSON.stringify(header)

  // Extract all MongoDB IDs
  const ids = [...headerStr.matchAll(/"([0-9a-f]{24})"/g)].map((m) => m[1])
  const unique = [...new Set(ids)]

  const live = unique.filter((id) => pageIds.has(id))
  const stale = unique.filter((id) => !pageIds.has(id))

  console.log('\nUnique IDs in header:', unique.length)
  console.log('✅ Live page IDs:', live.length)
  console.log('⚠️  Stale/unknown IDs:', stale.length)

  if (stale.length > 0) {
    console.log('\nStale IDs:')
    stale.forEach((id) => console.log(' -', id))
  }

  // Also show what the stale IDs look like in context (what field they belong to)
  if (stale.length > 0) {
    console.log('\n📄 Header structure (depth 0):')
    console.log(JSON.stringify(header, null, 2))
  }

  process.exit(0)
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
