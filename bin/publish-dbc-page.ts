import { getPayload } from 'payload'
import config from '../src/payload.config'

async function main() {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'direct-booking-conversions' } },
    limit: 1,
  })

  const doc = result.docs?.[0]
  if (!doc) {
    console.error('Page not found!')
    process.exit(1)
  }

  console.log(`Found: id=${doc.id} | slug=${doc.slug} | status=${doc._status}`)

  await payload.update({
    collection: 'pages',
    id: doc.id,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: { _status: 'published' } as any,
    context: { disableRevalidate: true },
  })

  console.log('✅ Published: direct-booking-conversions')
  console.log('URL: /services/airbnb-va/direct-booking-conversions')
  process.exit(0)
}

main().catch((e) => {
  console.error(e.message)
  process.exit(1)
})
