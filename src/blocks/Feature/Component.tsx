import React from 'react'
import type { FeatureBlock } from '@/payload-types'

export const FeatureBlockComponent: React.FC<FeatureBlock> = ({ title, description, features }) => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        {description && <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features?.map((f, i) => (
          <div key={i} className="p-6 bg-card border rounded-lg">
            <h3 className="text-xl font-bold mb-2">{f.featureTitle}</h3>
            {f.featureDescription && (
              <p className="text-muted-foreground">{f.featureDescription}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
)
