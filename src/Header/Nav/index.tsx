'use client'

import React from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink, isValidLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon, ChevronDown, ChevronRight } from 'lucide-react'

// Render a single link with optional submenu
const NavItem = ({ item }: { item: NonNullable<HeaderType['navItems']>[0] }) => {
  // Filter out sub-links and sub-sub-links with broken/deleted references
  const validSubLinks = item.subLinks?.filter((sub) => isValidLink(sub.link)) || []
  const hasSubLinks = validSubLinks.length > 0

  // Skip this nav item entirely if its own link is broken
  if (!isValidLink(item.link)) return null

  return (
    <div className="relative group text-sm font-medium transition-colors h-full flex items-center">
      <div className="flex items-center gap-1.5 hover:text-primary py-4 uppercase tracking-wider text-xs font-semibold cursor-pointer">
        <CMSLink {...item.link} appearance="link" className="hover:no-underline" />
        {hasSubLinks && (
          <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" />
        )}
      </div>

      {hasSubLinks && (
        <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50">
          <div className="w-64 bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl p-2 flex flex-col gap-0.5 relative before:absolute before:-top-4 before:left-0 before:right-0 before:h-4 before:bg-transparent">
            {validSubLinks.map((subItem, i) => {
              const validSubSubLinks =
                subItem.subSubLinks?.filter((ss) => isValidLink(ss.link)) || []
              const hasSubSubLinks = validSubSubLinks.length > 0

              return (
                <div key={i} className="relative group/sub">
                  <div className="flex items-center justify-between px-3 py-1.5 rounded-lg hover:bg-muted/80 transition-all text-[13px] text-muted-foreground hover:text-foreground cursor-pointer">
                    <CMSLink
                      {...subItem.link}
                      appearance="link"
                      className="w-full h-full block hover:no-underline font-medium"
                    />
                    {hasSubSubLinks && <ChevronRight className="w-3.5 h-3.5 opacity-50" />}
                  </div>

                  {hasSubLinks && hasSubSubLinks && (
                    <div className="absolute top-0 left-full pl-2 opacity-0 -translate-x-2 pointer-events-none group-hover/sub:opacity-100 group-hover/sub:translate-x-0 group-hover/sub:pointer-events-auto transition-all duration-300 ease-out z-50">
                      <div className="w-56 bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl p-2 flex flex-col gap-0.5 relative before:absolute before:-left-4 before:top-0 before:bottom-0 before:w-4 before:bg-transparent">
                        {validSubSubLinks.map((subSubItem, j) => (
                          <div
                            key={j}
                            className="px-3 py-1.5 rounded-lg hover:bg-muted/80 transition-all text-[13px] text-muted-foreground hover:text-foreground cursor-pointer"
                          >
                            <CMSLink
                              {...subSubItem.link}
                              appearance="link"
                              className="w-full h-full block hover:no-underline font-medium"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex gap-4 lg:gap-8 items-center flex-row flex-nowrap whitespace-nowrap overflow-x-auto lg:overflow-visible no-scrollbar w-full justify-end h-full">
      {navItems.map((item, i) => (
        <NavItem key={i} item={item} />
      ))}
      <Link
        href="/search"
        className="ml-1 p-2.5 rounded-full bg-muted/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shrink-0"
      >
        <span className="sr-only">Search</span>
        <SearchIcon className="w-4 h-4 md:w-5 md:h-5 text-current" />
      </Link>
    </nav>
  )
}
