import { getPayload } from 'payload'
import config from './payload.config'

async function run() {
  const payload = await getPayload({ config: await config })
  const brokenId = '69b6c4d339306de431e8168d'
  console.log(`Searching for broken ID: ${brokenId}`)

  let foundCount = 0

  // Search Pages
  const allPages = await payload.find({ collection: 'pages', limit: 1000, depth: 0 })
  for (const page of allPages.docs) {
    if (JSON.stringify(page).includes(brokenId)) {
      console.log(`FOUND in Page: ${page.title} (ID: ${page.id}, Slug: ${page.slug})`)
      foundCount++
    }
  }

  // Search Posts
  const allPosts = await payload.find({ collection: 'posts', limit: 1000, depth: 0 })
  for (const post of allPosts.docs) {
    if (JSON.stringify(post).includes(brokenId)) {
      console.log(`FOUND in Post: ${post.title} (ID: ${post.id}, Slug: ${post.slug})`)
      foundCount++
    }
  }

  // Search Media
  const allMedia = await payload.find({ collection: 'media', limit: 1000, depth: 0 })
  for (const media of allMedia.docs) {
    if (JSON.stringify(media).includes(brokenId)) {
      console.log(`FOUND in Media: ${media.filename} (ID: ${media.id})`)
      foundCount++
    }
  }

  // Search Header
  const header = await payload.findGlobal({ slug: 'header', depth: 0 })
  if (JSON.stringify(header).includes(brokenId)) {
    console.log(`FOUND in Header Global`)
    foundCount++
  }

  // Search Footer
  const footer = await payload.findGlobal({ slug: 'footer', depth: 0 })
  if (JSON.stringify(footer).includes(brokenId)) {
    console.log(`FOUND in Footer Global`)
    foundCount++
  }

  console.log(`Search complete. Found ${foundCount} references.`)
  process.exit(0)
}

run().catch(console.error)
