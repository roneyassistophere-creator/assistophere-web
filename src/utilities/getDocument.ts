import type { Config } from 'src/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

type Collection = keyof Config['collections']

async function getDocument(collection: Collection, slug: string, depth = 0) {
  const payload = await getPayload({ config: configPromise })

  const page = await payload.find({
    collection,
    depth,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return page.docs[0]
}

/**
 * Returns an unstable_cache function mapped with the cache tag for the slug.
 * Retries once on stale-session errors so a long-lived Next.js cache never
 * causes a MongoExpiredSessionError in production.
 */
export const getCachedDocument = (collection: Collection, slug: string) =>
  unstable_cache(
    async () => {
      try {
        return await getDocument(collection, slug)
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err)
        if (
          msg.includes('session that has ended') ||
          msg.includes('Topology is closed') ||
          msg.includes('Client must be connected') ||
          msg.includes('MongoNotConnected') ||
          msg.includes('MongoExpiredSession') ||
          msg.includes('MongoPoolClosed')
        ) {
          return await getDocument(collection, slug)
        }
        throw err
      }
    },
    [collection, slug],
    { tags: [`${collection}_${slug}`] },
  )
