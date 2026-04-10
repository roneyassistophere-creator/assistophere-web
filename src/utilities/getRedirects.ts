import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

export async function getRedirects(depth = 1) {
  const payload = await getPayload({ config: configPromise })

  const { docs: redirects } = await payload.find({
    collection: 'redirects',
    depth,
    limit: 0,
    pagination: false,
  })

  return redirects
}

/**
 * Returns an unstable_cache function mapped with the cache tag for 'redirects'.
 * Cache all redirects together to avoid multiple fetches.
 * Retries once on stale-session / topology-closed errors.
 */
export const getCachedRedirects = () =>
  unstable_cache(
    async () => {
      try {
        return await getRedirects()
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
          return await getRedirects()
        }
        throw err
      }
    },
    ['redirects'],
    { tags: ['redirects'] },
  )
