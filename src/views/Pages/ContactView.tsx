import React from 'react'
import type { Page } from '@/payload-types'

export const ContactView: React.FC<{ page: Page }> = ({ page }) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">{page.title}</h1>
      <div className="text-xl text-foreground/80 mb-8">
        Contact - Start designing your Contact view here.
      </div>
    </div>
  )
}
