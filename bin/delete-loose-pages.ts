import { getPayload } from 'payload'
import config from '../src/payload.config'

const LOOSE_PAGE_IDS = [
  { id: '69ca6d197cc5a22b02c32f87', url: '/guests' },
  { id: '69ca6d147cc5a22b02c32f74', url: '/landlords' },
  { id: '69ba88a36285c0a11fffca4a', url: '/faq' },
  { id: '69b6e0071bcb884db220301f', url: '/pricing' },
]

async function main() {
  const payload = await getPayload({ config })

  for (const { id, url } of LOOSE_PAGE_IDS) {
    console.log(`Deleting ${url} (id: ${id})...`)
    try {
      await payload.delete({
        collection: 'pages',
        id,
        overrideAccess: true,
        context: { disableRevalidate: true },
      })
      console.log(`  ✅ Deleted`)
    } catch (e: unknown) {
      console.log(`  ⚠️  ${e instanceof Error ? e.message : String(e)}`)
    }
  }

  console.log('\nDone.')
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
