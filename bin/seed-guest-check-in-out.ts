import { getPayload } from 'payload'
import config from '../src/payload.config'

async function main() {
  const payload = await getPayload({ config })

  const SLUG = 'guest-check-in-check-out'
  const TITLE = 'Guest Check-In Check-Out Support'
  const TEMPLATE = 'guest-check-in-check-out'

  // 1. Check if page already exists
  const existing = await payload.find({
    collection: 'pages',
    where: { slug: { equals: SLUG } },
    limit: 1,
  })

  if (existing.docs.length > 0) {
    const doc = existing.docs[0]
    console.log(
      `Page already exists: id=${doc.id} | slug=${doc.slug} | template=${doc.template} | status=${doc._status}`,
    )

    // Make sure template and status are correct
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await payload.update({
      collection: 'pages',
      id: doc.id,
      data: { template: TEMPLATE, _status: 'published' } as any,
      context: { disableRevalidate: true },
    })
    console.log('✅ Updated template + published.')
    process.exit(0)
  }

  // 2. Find the parent: airbnb-va
  const parentResult = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'airbnb-va' } },
    limit: 1,
  })
  const parent = parentResult.docs[0]
  if (!parent) {
    console.error('❌ Parent page "airbnb-va" not found.')
    process.exit(1)
  }
  console.log(`Parent found: id=${parent.id} | slug=${parent.slug}`)

  // 3. Create and publish the page

  const page = await payload.create({
    collection: 'pages',
    data: {
      title: TITLE,
      slug: SLUG,
      template: TEMPLATE,
      _status: 'published',
      parent: parent.id,
    } as any,
    context: { disableRevalidate: true },
  })

  console.log(`✅ Created & published: id=${page.id} | slug=${SLUG}`)
  console.log(`URL: /services/airbnb-va/${SLUG}`)
  process.exit(0)
}

main().catch((e) => {
  console.error(e.message)
  process.exit(1)
})
