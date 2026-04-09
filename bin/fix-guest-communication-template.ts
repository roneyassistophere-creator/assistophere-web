import { getPayload } from 'payload'
import config from '../src/payload.config'

async function run() {
  const payload = await getPayload({ config })

  const slugsToTry = ['guest-communication', 'airbnb-guest-communication', 'guest-communications']

  for (const slug of slugsToTry) {
    const result = await payload.find({
      collection: 'pages',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    const page = result.docs?.[0]
    if (page) {
      console.log(`Found: id=${page.id} | slug=${slug} | current template=${page.template}`)
      await payload.update({
        collection: 'pages',
        id: page.id,
        context: { disableRevalidate: true },
        data: { template: 'guest-communication' } as any,
      })
      console.log('✅ Updated template → guest-communication')
      process.exit(0)
    }
  }

  // Fallback: list all pages with 'guest' or 'communi' in slug
  console.log('⚠️  No exact slug match found. Listing pages with relevant slugs:')
  const all = await payload.find({ collection: 'pages', limit: 200 })
  all.docs
    .filter((p: any) => p.slug?.includes('guest') || p.slug?.includes('communi'))
    .forEach((p: any) => {
      console.log(`  id: ${p.id} | slug: ${p.slug} | title: ${p.title} | template: ${p.template}`)
    })

  process.exit(1)
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
