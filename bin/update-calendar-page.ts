import { getPayload } from 'payload'
import config from '../src/payload.config'

async function main() {
  const payload = await getPayload({ config })

  // Find the calendar-management page
  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'calendar-management' } },
    depth: 0,
    overrideAccess: true,
  })

  if (result.docs.length === 0) {
    console.log('Page not found — creating it...')
    const created = await payload.create({
      collection: 'pages',
      overrideAccess: true,
      context: { disableRevalidate: true },
      data: {
        title: 'Airbnb Calendar Management | UK',
        slug: 'calendar-management',
        template: 'calendar-management',
        _status: 'published',
      } as never,
    })
    console.log(`Created: ${created.id}`)
  } else {
    const page = result.docs[0]!
    console.log(`Found page id: ${page.id} — current template: ${page.template}`)

    await payload.update({
      collection: 'pages',
      id: page.id,
      overrideAccess: true,
      context: { disableRevalidate: true },
      data: {
        title: 'Airbnb Calendar Management | UK',
        template: 'calendar-management',
        _status: 'published',
      } as never,
    })
    console.log(`✅ Updated template to 'calendar-management' and published`)
  }

  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
