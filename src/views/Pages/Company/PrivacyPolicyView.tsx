import React from 'react'
import type { Page } from '@/payload-types';
import RichText from '@/components/RichText';

export const PrivacyPolicyView: React.FC<{ page: Page }> = ({ page }) => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">{page.title || 'Privacy Policy'}</h1>
      {page.content ? (
        <div className="prose max-w-none text-foreground/80 dark:prose-invert">
          <RichText data={page.content} enableGutter={false} />
        </div>
      ) : (
        <p className="text-muted-foreground">This template is currently empty. Add some content in the CMS to get started.</p>
      )}
    </div>
  )
}
