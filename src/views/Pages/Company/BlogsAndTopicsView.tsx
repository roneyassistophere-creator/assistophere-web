import React from 'react'
import type { Page } from '@/payload-types'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import RichText from '@/components/RichText'
import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const BlogsAndTopicsView = async ({ page }: { page: Page }) => {
  const payload = await getPayload({ config: configPromise })

  const postsResponse = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  const hasMore = postsResponse.totalPages > 1

  return (
    <main className="container mx-auto px-4 lg:px-8 py-16 md:py-24">
      <header className="max-w-3xl mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{page.title || 'Blogs & Topics'}</h1>

        {page.content && (
          <div className="prose dark:prose-invert max-w-none text-muted-foreground mb-8">
            <RichText data={page.content} enableGutter={false} />
          </div>
        )}
      </header>

      <section className="mb-8">
        <PageRange
          collection="posts"
          collectionLabels={{
            singular: 'post',
            plural: 'posts',
          }}
          currentPage={postsResponse.page || 1}
          limit={12}
          totalDocs={postsResponse.totalDocs}
        />
      </section>

      <section className="mb-16">
        <CollectionArchive posts={postsResponse.docs} />
      </section>

      {hasMore && (
        <div className="flex justify-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/posts/page/2">View Older Posts</Link>
          </Button>
        </div>
      )}
    </main>
  )
}
