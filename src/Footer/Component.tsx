import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer as FooterType } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink, isValidLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData: FooterType = await getCachedGlobal('footer', 1)()

  const columns = footerData?.columns || []

  return (
    <footer className="mt-auto border-t border-border bg-card text-card-foreground">
      <div className="container mx-auto py-12 flex flex-col md:flex-row md:justify-between items-start gap-12">
        <div className="flex flex-col items-start gap-6 max-w-sm">
          <Link className="flex items-center" href="/">
            <Logo className="h-10 w-auto invert dark:invert-0" />
          </Link>
          <p className="text-sm text-muted-foreground w-full">
            Empowering your growth with performance-driven solutions.
          </p>
          <div className="pt-2">
            <ThemeSelector />
          </div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-12 sm:gap-16 w-full md:w-auto">
          {columns
            .filter((col) => col.navItems?.some((item) => isValidLink(item.link)))
            .map((column, i) => (
              <div key={i} className="flex flex-col gap-4 min-w-[150px]">
                <h3 className="text-sm font-semibold tracking-wider text-foreground uppercase">
                  {column.title}
                </h3>
                <nav className="flex flex-col gap-3">
                  {column.navItems
                    ?.filter((item) => isValidLink(item.link))
                    .map((item, j) => {
                      const validSubLinks =
                        item.subLinks?.filter((sub) => isValidLink(sub.link)) || []
                      return (
                        <div key={j} className="flex flex-col gap-2">
                          <CMSLink
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            {...item.link}
                          />
                          {validSubLinks.length > 0 && (
                            <ul className="pl-4 flex flex-col gap-2 border-l border-border mt-1">
                              {validSubLinks.map((subItem, k) => (
                                <li key={k}>
                                  <CMSLink
                                    className="text-sm text-muted-foreground/80 hover:text-primary transition-colors"
                                    {...subItem.link}
                                  />
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )
                    })}
                </nav>
              </div>
            ))}
        </div>
      </div>
      <div className="border-t border-border mt-12 bg-muted/30">
        <div className="container mx-auto py-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
          <p>&copy; {new Date().getFullYear()} Assistophere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
