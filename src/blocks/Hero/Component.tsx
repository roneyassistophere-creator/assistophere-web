import React from 'react'
import type { HeroBlock } from '@/payload-types'

export const HeroBlockComponent: React.FC<HeroBlock> = ({ headline, subheadline, buttonText }) => (
  <section className="py-20 bg-primary/5 text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{headline}</h1>
      {subheadline && (
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground">{subheadline}</p>
      )}
      {buttonText && <button className="btn btn-primary">{buttonText}</button>}
    </div>
  </section>
)
