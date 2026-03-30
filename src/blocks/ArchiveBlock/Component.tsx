import React from 'react'

export const ArchiveBlockComponent: React.FC<{
  title: string
  categories?: { title?: string }[] | string[] | null
  limit?: number | null
  [key: string]: unknown
}> = (props) => {
  return (
    <div className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">{props.title}</h2>
        <div className="text-muted-foreground italic">
          Archive Block placeholder for categories:{' '}
          {props.categories
            ?.map((c) => (typeof c === 'object' && c !== null ? c?.title : c))
            .join(', ') || 'All'}
        </div>
      </div>
    </div>
  )
}
