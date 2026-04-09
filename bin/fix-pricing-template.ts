import { getPayload } from 'payload'
import config from '../src/payload.config'

async function run() {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'pricing-optimization' } },
    limit: 1,
  })

  const page = result.docs?.[0]
  if (!page) {
    console.log('Page not found with slug: pricing-optimization')
    process.exit(1)
  }

  console.log(`Found: ${page.id} | current template: ${page.template}`)

  await payload.update({
    collection: 'pages',
    id: page.id,
    context: { disableRevalidate: true },
    data: { template: 'pricing-optimisation' } as any,
  })

  console.log('✅ Updated template → pricing-optimisation')
  process.exit(0)
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
