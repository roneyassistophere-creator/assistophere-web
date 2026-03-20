import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from './src/payload.config'

async function run() {
  const payload = await getPayload({ config: configPromise })

  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'services' },
    },
    limit: 100,
    depth: 0,
  })

  console.log(`Found ${pages.docs.length} page(s) with slug 'services':`)
  pages.docs.forEach((page, i) => {
    console.log(`${i + 1}. ID: ${page.id}, Status: ${page._status}, Title: ${page.title}`)
  })

  if (pages.docs.length > 1) {
    // Delete all but the first (assuming first is the valid one)
    const toDelete = pages.docs.slice(1)
    console.log(`\nDeleting ${toDelete.length} duplicate page(s)...`)
    
    for (const page of toDelete) {
      await payload.delete({
        collection: 'pages',
        id: page.id,
      })
      console.log(`Deleted page with ID: ${page.id}`)
    }
    
    console.log(`\nDone! Kept the first Services page (ID: ${pages.docs[0].id})`)
  } else {
    console.log('No duplicates found.')
  }

  process.exit(0)
}

run().catch(err => {
  console.error(err)
  process.exit(1)
})
