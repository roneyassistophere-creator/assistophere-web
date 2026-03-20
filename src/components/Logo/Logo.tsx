import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
  lightLogoUrl?: string | null
  darkLogoUrl?: string | null
}

export const Logo = (props: Props) => {
  const {
    loading: loadingFromProps,
    priority: priorityFromProps,
    className,
    lightLogoUrl,
    darkLogoUrl,
  } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  const defaultLogo = '/ASSISTOPHERE%20SITE%20LOGO.svg'

  // Use dark logo for both light and dark modes if available
  const srcUrl = darkLogoUrl || lightLogoUrl || defaultLogo

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      alt="Assistophere Logo"
      width={193}
      height={34}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[12rem] w-full h-auto', className)}
      src={srcUrl}
    />
  )
}
