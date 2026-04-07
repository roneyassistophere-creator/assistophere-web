'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'

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
      className="sticky top-0 w-full z-50 bg-background/75 backdrop-blur-xl border-b border-white/6 shadow-[0_1px_0_rgba(255,255,255,0.04)]"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-2.5 md:py-3 flex items-center justify-between gap-4 lg:gap-8">
        <Link href="/" className="shrink-0 flex items-center">
          <Logo
            loading="eager"
            priority="high"
            className="h-9 sm:h-10 w-auto object-contain transition-all"
            lightLogoUrl={lightLogoUrl ?? undefined}
            darkLogoUrl={darkLogoUrl ?? undefined}
          />
        </Link>
        <div className="flex items-center justify-end flex-1 gap-3 md:gap-5">
          <HeaderNav data={data} />
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <a
              href="tel:+447957792701"
              className="hidden xl:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/12 hover:bg-emerald-500/22 border border-emerald-500/25 hover:border-emerald-500/45 text-emerald-400 text-xs font-semibold transition-all duration-200 group"
            >
              <style>{`
                @keyframes ring {
                  0%, 100% { transform: rotate(0deg); }
                  10% { transform: rotate(-18deg); }
                  20% { transform: rotate(18deg); }
                  30% { transform: rotate(-12deg); }
                  40% { transform: rotate(12deg); }
                  50% { transform: rotate(0deg); }
                }
                .phone-ring {
                  animation: ring 3s ease-in-out infinite;
                  transform-origin: top center;
                }
              `}</style>
              <Phone className="phone-ring w-3 h-3 shrink-0" />
              +44 7957 792701
            </a>
            <Button
              asChild
              size="sm"
              className="font-semibold rounded-full px-5 h-8 text-xs bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/35 transition-all duration-200"
            >
              <Link href="/free-audit">Free Audit</Link>
            </Button>
          </div>
          <div className="shrink-0 border-l border-white/8 pl-3 md:pl-3.5 ml-0.5">
            <ThemeController />
          </div>
        </div>
      </div>
    </header>
  )
}
