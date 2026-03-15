import React from 'react'
import type { Page } from '@/payload-types'

export const PricingView: React.FC<{ page: Page }> = ({ page }) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">{page.title}</h1>
      <div className="text-xl text-foreground/80 mb-8">
        Pricing & Packages - Start designing your Pricing view here.
      </div>
    </div>
  )
}
