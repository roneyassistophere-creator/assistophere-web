import type { Metadata } from 'next'

import type { Media, Page, Post, Config } from '../payload-types'

import { mergeOpenGraph } from './mergeOpenGraph'
import { getServerSideURL } from './getURL'

const getImageURL = (image?: Media | Config['db']['defaultIDType'] | null) => {
  const serverUrl = getServerSideURL()

  let url = serverUrl + '/website-template-OG.webp'

  if (image && typeof image === 'object' && 'url' in image) {
    const ogUrl = image.sizes?.og?.url

    url = ogUrl ? serverUrl + ogUrl : serverUrl + image.url
  }

  return url
}

/** Derive the canonical path for a page or post */
function getCanonicalPath(doc: Partial<Page> | Partial<Post>): string {
  // Pages may have breadcrumbs from nested-docs plugin
  if ('breadcrumbs' in doc && doc.breadcrumbs && doc.breadcrumbs.length > 0) {
    const url = doc.breadcrumbs[doc.breadcrumbs.length - 1]?.url
    if (url) return url
  }
  if (doc.slug === 'home') return '/'
  return doc.slug ? `/${doc.slug}` : '/'
}

export const generateMeta = async (args: {
  doc: Partial<Page> | Partial<Post> | null
}): Promise<Metadata> => {
  const { doc } = args
  const serverUrl = getServerSideURL()

  const ogImage = getImageURL(doc?.meta?.image)

  const title = doc?.meta?.title ? doc?.meta?.title + ' | Assistophere' : 'Assistophere'

  const canonicalPath = doc ? getCanonicalPath(doc) : '/'
  const canonicalUrl = `${serverUrl}${canonicalPath}`

  return {
    description: doc?.meta?.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: mergeOpenGraph({
      description: doc?.meta?.description || '',
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title,
      url: canonicalUrl,
    }),
    title,
  }
}
