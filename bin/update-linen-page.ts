import payload from 'payload'
import config from '../src/payload.config'

async function main() {
  await payload.init({ config })

  // Find the linen-toiletries page by slug
  const found = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'linen-toiletries' } },
    overrideAccess: true,
    depth: 0,
  })

  if (found.docs.length === 0) {
    console.log('No page found with slug linen-toiletries — listing airbnb-va children:')
    const all = await payload.find({
      collection: 'pages',
      where: { 'breadcrumbs.url': { contains: 'airbnb-va' } },
      overrideAccess: true,
      depth: 0,
      limit: 30,
    })
    all.docs.forEach((d) => console.log(d.id, (d as any).slug, (d as any).template))
    process.exit(0)
  }

  const page = found.docs[0]!
  console.log('Found:', page.id, (page as any).slug, '| current template:', (page as any).template)

  const result = await payload.update({
    collection: 'pages',
    id: page.id,
    overrideAccess: true,
    context: { disableRevalidate: true },
    data: {
      title: 'Airbnb Linen and Toiletries Management | UK',
      template: 'linen-toiletries',
      _status: 'published',
    } as never,
  })

  console.log('Updated:', result.id, '| template:', (result as any).template)
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
