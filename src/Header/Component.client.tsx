'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { Phone, X } from 'lucide-react'

import type { Header, SiteSetting } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { Button } from '@/components/ui/button'
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon'
import { ThemeController } from '@/components/ThemeController/ThemeController'
import { HeaderNav, MobileHeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
  siteSettings: SiteSetting
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data, siteSettings }) => {
  const [theme, setTheme] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const [headerHeight, setHeaderHeight] = useState(60)

  const lightLogoUrl =
    typeof siteSettings?.siteLogoLight === 'object' ? siteSettings?.siteLogoLight?.url : null
  const darkLogoUrl =
    typeof siteSettings?.siteLogoDark === 'object' ? siteSettings?.siteLogoDark?.url : null

  // Close menu on route change
  useEffect(() => {
    setHeaderTheme(null)
    setMobileMenuOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Measure actual header height so drawer aligns perfectly
  useEffect(() => {
    const measure = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.getBoundingClientRect().height)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Close on Escape key
  useEffect(() => {
    if (!mobileMenuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [mobileMenuOpen])

  return (
    <>
      {/* ── Header bar ──────────────────────────────────────── */}
      <header
        ref={headerRef}
        className="sticky top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/6 shadow-[0_1px_0_rgba(255,255,255,0.04)]"
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
            {/* Desktop nav */}
            <HeaderNav data={data} className="hidden lg:flex" />

            {/* Desktop CTAs */}
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
                  .phone-ring { animation: ring 3s ease-in-out infinite; transform-origin: top center; }
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

            {/* Theme switcher — visible on all breakpoints */}
            <div className="shrink-0 border-l border-border pl-3 md:pl-3.5 ml-0.5">
              <ThemeController />
            </div>

            {/* Mobile hamburger — after theme switcher */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              className="lg:hidden relative w-10 h-10 rounded-xl border border-border bg-muted hover:bg-muted/80 active:scale-95 transition-all duration-300 flex items-center justify-center shrink-0 z-60"
            >
              <MenuToggleIcon
                open={mobileMenuOpen}
                duration={600}
                className="size-6 text-foreground"
                strokeWidth={2}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer — rendered as SIBLING of <header> so it ──
           escapes the sticky stacking context and sits at root z-level */}
      <div
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`lg:hidden fixed inset-0 z-55 transition-all duration-300 ${
          mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        style={{ top: headerHeight }}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Slide-in panel */}
        <div
          className={`relative h-full transition-all duration-300 ease-out ${
            mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div
            className="h-full mx-3 mt-2 mb-4 rounded-3xl border border-border overflow-hidden flex flex-col shadow-[0_24px_70px_-10px_rgba(0,0,0,0.18)]"
            style={{
              background: 'var(--background)',
              maxHeight: `calc(100dvh - ${headerHeight + 24}px)`,
            }}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-border shrink-0">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Navigation
                </p>
                <p className="mt-0.5 text-sm font-medium text-foreground/70">
                  Explore our services &amp; pages
                </p>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="w-8 h-8 rounded-lg border border-border bg-muted hover:bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Nav items — scrollable */}
            <div className="flex-1 overflow-y-auto overscroll-contain p-3">
              <MobileHeaderNav data={data} onNavigate={() => setMobileMenuOpen(false)} />
            </div>

            {/* Footer CTAs */}
            <div className="shrink-0 mx-3 mb-3 mt-0 rounded-2xl border border-primary/25 bg-primary/8 p-3 flex items-center gap-2.5">
              <a
                href="tel:+447957792701"
                className="flex items-center justify-center gap-2 px-4 h-10 rounded-xl border border-emerald-500/30 bg-emerald-500/14 text-emerald-400 text-xs font-semibold flex-1 transition-colors hover:bg-emerald-500/22"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                +44 7957 792701
              </a>
              <Button
                asChild
                size="sm"
                className="h-10 rounded-xl px-4 text-xs font-semibold bg-primary hover:bg-primary/90 flex-1"
              >
                <Link href="/free-audit" onClick={() => setMobileMenuOpen(false)}>
                  Free Audit
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
