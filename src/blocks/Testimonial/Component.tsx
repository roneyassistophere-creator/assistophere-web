import React from 'react'
import type { TestimonialBlock } from '@/payload-types'

export const TestimonialBlockComponent: React.FC<TestimonialBlock> = ({ quote, author, role }) => (
  <section className="py-16">
    <div className="container mx-auto px-4 max-w-4xl text-center">
      <blockquote className="text-2xl italic mb-6">&quot;{quote}&quot;</blockquote>
      <div>
        <div className="font-bold">{author}</div>
        {role && <div className="text-muted-foreground">{role}</div>}
      </div>
    </div>
  </section>
)
