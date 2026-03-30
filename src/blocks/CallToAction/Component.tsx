import React from 'react'

export const CTABlockComponent: React.FC<{
  richText?: unknown
  links?: { link: string; label: string }[] | null
  [key: string]: unknown
}> = (props) => {
  return (
    <div className="py-16 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4">
        {props.links?.map((linkObj, index) => (
          <a
            key={index}
            href={linkObj.link}
            className="inline-block px-8 py-3 bg-background text-foreground font-semibold rounded-lg m-2 hover:bg-muted transition"
          >
            {linkObj.label}
          </a>
        ))}
      </div>
    </div>
  )
}
