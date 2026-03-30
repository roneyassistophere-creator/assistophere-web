'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header, SiteSetting } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { Button } from '@/components/ui/button'
import { ThemeController } from '@/components/ThemeController/ThemeController'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
  siteSettings: SiteSetting
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data, siteSettings }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  const lightLogoUrl =
    typeof siteSettings?.siteLogoLight === 'object' ? siteSettings?.siteLogoLight?.url : null
  const darkLogoUrl =
    typeof siteSettings?.siteLogoDark === 'object' ? siteSettings?.siteLogoDark?.url : null

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header
      className="sticky top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-3 md:py-4 flex items-center justify-between gap-4 lg:gap-8">
        <Link href="/" className="shrink-0 flex items-center">
          <Logo
            loading="eager"
            priority="high"
            className="h-6 sm:h-7 md:h-8 w-auto object-contain transition-all"
            lightLogoUrl={lightLogoUrl ?? undefined}
            darkLogoUrl={darkLogoUrl ?? undefined}
          />
        </Link>
        <div className="flex items-center justify-end flex-1 gap-3 md:gap-6">
          <HeaderNav data={data} />
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Button asChild variant="ghost" className="font-medium text-sm hidden xl:inline-flex">
              <a href="tel:+447957792701">+44 7957 792701</a>
            </Button>
            <Button asChild size="sm" className="font-semibold rounded-full px-5">
              <Link href="/free-audit">Free Audit</Link>
            </Button>
          </div>
          <div className="shrink-0 border-l border-border pl-3 md:pl-4 ml-1 md:ml-2">
            <ThemeController />
          </div>
        </div>
      </div>
    </header>
  )
}
