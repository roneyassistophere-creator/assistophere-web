import React from 'react'
import type { Page } from '@/payload-types'
import { ArchiveBlockComponent } from '@/blocks/ArchiveBlock/Component'
import { CTABlockComponent } from '@/blocks/CallToAction/Component'
import { BannerBlock } from '@/blocks/Banner/Component'
import { CodeBlock } from '@/blocks/Code/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { HeroBlockComponent } from '@/blocks/Hero/Component'
import { ContactBlockComponent } from '@/blocks/Contact/Component'
import { FaqBlockComponent } from '@/blocks/Faq/Component'
import { TestimonialBlockComponent } from '@/blocks/Testimonial/Component'
import { FeatureBlockComponent } from '@/blocks/Feature/Component'
import { StatsBlockComponent } from '@/blocks/Stats/Component'
import { RelatedPosts } from '@/blocks/RelatedPosts/Component'

export const MasterView: React.FC<{ page: Page }> = ({ page }) => {
  const { layout } = page

  if (!layout || layout.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-xl text-muted-foreground">
          This Master template has no sections. Add some in the Page Builder.
        </p>
      </div>
    )
  }

  return (
    <div>
      {layout.map((block, index) => {
        if (block.blockType === 'archive') {
          // @ts-expect-error Categories type mismatch from Payload types
          return <ArchiveBlockComponent key={index} {...block} />
        }
        if (block.blockType === 'cta') {
          return <CTABlockComponent key={index} {...block} />
        }
        if (block.blockType === 'banner') {
          return <BannerBlock key={index} {...block} />
        }
        if (block.blockType === 'code') {
          // @ts-expect-error type mismatch on language nullability
          return <CodeBlock key={index} {...block} />
        }
        if (block.blockType === 'mediaBlock') {
          return <MediaBlock key={index} {...block} />
        }
        if (block.blockType === 'hero') {
          return <HeroBlockComponent key={index} {...block} />
        }
        if (block.blockType === 'contact') {
          return <ContactBlockComponent key={index} {...block} />
        }
        if (block.blockType === 'faq') {
          return <FaqBlockComponent key={index} {...block} />
        }
        if (block.blockType === 'testimonial') {
          return <TestimonialBlockComponent key={index} {...block} />
        }
        if (block.blockType === 'feature') {
          return <FeatureBlockComponent key={index} {...block} />
        }
        if (block.blockType === 'stats') {
          return <StatsBlockComponent key={index} {...block} />
        }
        if (block.blockType === 'relatedPosts') {
          // @ts-expect-error type mismatch on docs array
          return <RelatedPosts key={index} {...block} />
        }
        return null
      })}
    </div>
  )
}
