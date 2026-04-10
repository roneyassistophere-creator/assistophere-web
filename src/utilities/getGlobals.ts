import type { Config } from 'src/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

type Global = keyof Config['globals']

async function getGlobal(slug: Global, depth = 0) {
  // getPayload() is called inside the cached fn so every
  // cache-replay gets a live connection — never a stale session.
  const payload = await getPayload({ config: configPromise })

  const global = await payload.findGlobal({
    slug,
    depth,
  })

  return global
}

/**
 * Returns an unstable_cache function mapped with the cache tag for the slug.
 * The inner function re-obtains the Payload instance on each cache miss so
 * we never replay a stale MongoDB session.
 */
export const getCachedGlobal = (slug: Global, depth = 0) =>
  unstable_cache(
    async () => {
      try {
        return await getGlobal(slug, depth)
      } catch (err: unknown) {
        // If the cached session has expired, bust the cache and retry once.
        const msg = err instanceof Error ? err.message : String(err)
        if (
          msg.includes('session that has ended') ||
          msg.includes('Topology is closed') ||
          msg.includes('Client must be connected') ||
          msg.includes('MongoNotConnected') ||
          msg.includes('MongoExpiredSession') ||
          msg.includes('MongoPoolClosed')
        ) {
          // Retry with a fresh connection (getPayload reconnects automatically)
          return await getGlobal(slug, depth)
        }
        throw err
      }
    },
    [slug, String(depth)],
    { tags: [`global_${slug}`] },
  )
