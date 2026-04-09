import { getPayload } from 'payload'
import config from '../src/payload.config'

async function main() {
  const payload = await getPayload({ config })

  // First try exact slug
  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'direct-booking-conversions' } },
    limit: 1,
  })
  const doc = result.docs?.[0] as any
  if (doc) {
    console.log('FOUND:')
    console.log(
      JSON.stringify(
        {
          id: doc.id,
          slug: doc.slug,
          title: doc.title,
          template: doc.template,
          breadcrumbs: doc.breadcrumbs,
          status: doc._status,
          parent: doc.parent,
        },
        null,
        2,
      ),
    )
    process.exit(0)
  }

  console.log('NOT FOUND with slug "direct-booking-conversions" - searching similar...')
  const all = await payload.find({ collection: 'pages', limit: 500 })
  const matches = all.docs.filter(
    (p: any) =>
      p.slug?.includes('booking') ||
      p.slug?.includes('convers') ||
      p.title?.toLowerCase().includes('direct booking'),
  )
  if (matches.length === 0) {
    console.log('No similar pages found either.')
  } else {
    matches.forEach((p: any) => {
      console.log(
        JSON.stringify({
          id: p.id,
          slug: p.slug,
          title: p.title,
          template: p.template,
          status: p._status,
        }),
      )
    })
  }
  process.exit(0)
}

main().catch((e) => {
  console.error(e.message)
  process.exit(1)
})
