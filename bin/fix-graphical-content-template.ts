import { getPayload } from 'payload'
import config from '../src/payload.config'

async function run() {
  const payload = await getPayload({ config })

  const slugsToTry = ['graphical-content-creation', 'graphical-content', 'graphic-content-creation']

  for (const slug of slugsToTry) {
    const result = await payload.find({
      collection: 'pages',
      where: { slug: { equals: slug } },
      limit: 1,
    })

    const page = result.docs?.[0]
    if (page) {
      console.log(`Found: ${page.id} | slug: ${slug} | current template: ${page.template}`)

      await payload.update({
        collection: 'pages',
        id: page.id,
        context: { disableRevalidate: true },
        data: { template: 'graphical-content-creation' } as any,
      })

      console.log('✅ Updated template → graphical-content-creation')
      process.exit(0)
    }
  }

  // Not found by exact slug — list all airbnb-va subpages for diagnosis
  console.log('\nPage not found by known slugs. Listing airbnb-va subpages:')
  const all = await payload.find({
    collection: 'pages',
    limit: 200,
  })
  const matches = all.docs.filter(
    (p: any) =>
      p.slug?.includes('graphic') ||
      p.title?.toLowerCase().includes('graphic') ||
      p.title?.toLowerCase().includes('graphical'),
  )
  matches.forEach((p: any) => {
    console.log(`  id: ${p.id} | slug: ${p.slug} | title: ${p.title} | template: ${p.template}`)
  })

  process.exit(matches.length === 0 ? 1 : 0)
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
