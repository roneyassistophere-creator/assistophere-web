'use client'

import React from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink, isValidLink } from '@/components/Link'
import {
  ChevronDown,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Globe,
  BarChart2,
  Layers,
  Settings,
  Users,
  BookOpen,
  Star,
  Home,
  Briefcase,
  Zap,
  CalendarCheck,
  SlidersHorizontal,
  ShieldCheck,
  Search,
  Megaphone,
  Building2,
  ArrowUpRight,
  LayoutGrid,
  Phone,
  FileText,
  HelpCircle,
  Info,
  Mail,
} from 'lucide-react'

// Icon map: match nav label substrings to icons
const ICON_MAP: Array<{ match: RegExp; icon: React.ReactNode }> = [
  { match: /guest\s*comm/i, icon: <MessageSquare className="w-4 h-4" /> },
  { match: /clean/i, icon: <Sparkles className="w-4 h-4" /> },
  { match: /list/i, icon: <LayoutGrid className="w-4 h-4" /> },
  { match: /pric/i, icon: <SlidersHorizontal className="w-4 h-4" /> },
  { match: /direct\s*book/i, icon: <Globe className="w-4 h-4" /> },
  { match: /booking\s*engine/i, icon: <CalendarCheck className="w-4 h-4" /> },
  { match: /payment/i, icon: <ShieldCheck className="w-4 h-4" /> },
  { match: /seo|organic/i, icon: <Search className="w-4 h-4" /> },
  { match: /google\s*ads/i, icon: <Megaphone className="w-4 h-4" /> },
  { match: /lead/i, icon: <TrendingUp className="w-4 h-4" /> },
  { match: /social/i, icon: <Star className="w-4 h-4" /> },
  { match: /system/i, icon: <Settings className="w-4 h-4" /> },
  { match: /airbnb\s*va/i, icon: <Home className="w-4 h-4" /> },
  { match: /multi.platform/i, icon: <Layers className="w-4 h-4" /> },
  { match: /roi|calculator/i, icon: <BarChart2 className="w-4 h-4" /> },
  { match: /perform/i, icon: <TrendingUp className="w-4 h-4" /> },
  { match: /consult|training/i, icon: <Briefcase className="w-4 h-4" /> },
  { match: /boost/i, icon: <Zap className="w-4 h-4" /> },
  { match: /enter|market/i, icon: <ArrowUpRight className="w-4 h-4" /> },
  { match: /service/i, icon: <LayoutGrid className="w-4 h-4" /> },
  { match: /about|team|us/i, icon: <Users className="w-4 h-4" /> },
  { match: /blog|topic/i, icon: <BookOpen className="w-4 h-4" /> },
  { match: /review|client/i, icon: <Star className="w-4 h-4" /> },
  { match: /case\s*stud/i, icon: <FileText className="w-4 h-4" /> },
  { match: /faq|question/i, icon: <HelpCircle className="w-4 h-4" /> },
  { match: /contact/i, icon: <Mail className="w-4 h-4" /> },
  { match: /company/i, icon: <Building2 className="w-4 h-4" /> },
  { match: /why\s*us/i, icon: <Info className="w-4 h-4" /> },
  { match: /phone|call/i, icon: <Phone className="w-4 h-4" /> },
]

// Icon colour palette — cycles per top-level dropdown item index
const ICON_COLOURS = [
  'bg-indigo-500/20 text-indigo-400',
  'bg-amber-500/20 text-amber-400',
  'bg-emerald-500/20 text-emerald-400',
  'bg-violet-500/20 text-violet-400',
  'bg-rose-500/20 text-rose-400',
  'bg-sky-500/20 text-sky-400',
  'bg-orange-500/20 text-orange-400',
  'bg-teal-500/20 text-teal-400',
]

function getIcon(label: string | null | undefined): React.ReactNode {
  if (!label) return <Layers className="w-4 h-4" />
  const hit = ICON_MAP.find(({ match }) => match.test(label))
  return hit ? hit.icon : <Layers className="w-4 h-4" />
}

function getLinkLabel(link: NonNullable<HeaderType['navItems']>[0]['link']): string {
  return (
    ('label' in link && typeof link.label === 'string' ? link.label : null) ??
    ('url' in link && typeof link.url === 'string' ? link.url : null) ??
    ''
  )
}

// Render a single link with optional submenu
const NavItem = ({ item }: { item: NonNullable<HeaderType['navItems']>[0] }) => {
  const validSubLinks = item.subLinks?.filter((sub) => isValidLink(sub.link)) || []
  const hasSubLinks = validSubLinks.length > 0

  if (!isValidLink(item.link)) return null

  const topLabel = getLinkLabel(item.link)

  return (
    <div className="relative group text-sm font-medium transition-colors h-full flex items-center">
      {/* Top-level trigger */}
      <div className="flex items-center gap-1 py-4 cursor-pointer select-none">
        <CMSLink
          {...item.link}
          appearance="inline"
          className="no-underline hover:no-underline uppercase tracking-wider text-xs font-semibold text-foreground/70 hover:text-foreground transition-colors"
        />
        {hasSubLinks && (
          <ChevronDown className="w-3 h-3 text-foreground/40 transition-transform duration-200 group-hover:rotate-180 group-hover:text-primary" />
        )}
      </div>

      {/* Dropdown */}
      {hasSubLinks && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
          {/* invisible hover bridge */}
          <div className="absolute -top-3 left-0 right-0 h-3" />
          <div
            className="relative rounded-2xl border border-white/8 shadow-[0_24px_60px_-10px_rgba(0,0,0,0.55)]"
            style={{
              background:
                'linear-gradient(160deg, rgba(18,18,24,0.97) 0%, rgba(12,12,18,0.99) 100%)',
              backdropFilter: 'blur(24px)',
              minWidth: '240px',
            }}
          >
            {/* subtle top glow line */}
            <div className="absolute top-0 left-4 right-4 h-px bg-linear-to-r from-transparent via-white/12 to-transparent rounded-full" />

            {/* header row */}
            <div className="px-4 pt-3.5 pb-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/25 text-left">
                {topLabel || 'Menu'}
              </p>
            </div>

            <div className="px-2 pb-2.5 flex flex-col gap-0.5">
              {validSubLinks.map((subItem, i) => {
                const validSubSubLinks =
                  subItem.subSubLinks?.filter((ss) => isValidLink(ss.link)) || []
                const hasSubSubLinks = validSubSubLinks.length > 0
                const subLabel = getLinkLabel(subItem.link)
                const iconColour = ICON_COLOURS[i % ICON_COLOURS.length]

                return (
                  <div key={i} className="relative group/sub">
                    {/* hover bridge so mouse can travel to flyout */}
                    {hasSubSubLinks && (
                      <div className="absolute top-0 right-0 bottom-0 w-5 -mr-5 bg-transparent" />
                    )}
                    <div className="flex items-center gap-3 px-2.5 py-2 rounded-xl cursor-pointer transition-all duration-150 hover:bg-white/6 group/row">
                      {/* Icon tile — 1st dropdown level only */}
                      <div
                        className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-150 group-hover/row:scale-105 ${iconColour}`}
                      >
                        {getIcon(subLabel)}
                      </div>

                      {/* Label */}
                      <CMSLink
                        {...subItem.link}
                        appearance="inline"
                        className="flex-1 block text-left text-[13px] font-medium text-white/75 hover:text-white no-underline hover:no-underline transition-colors leading-snug"
                      />

                      {hasSubSubLinks && (
                        <ChevronDown className="w-3 h-3 text-white/25 -rotate-90 shrink-0" />
                      )}
                    </div>

                    {/* 3rd-level flyout */}
                    {hasSubSubLinks && (
                      <div className="absolute top-0 left-full pl-3 opacity-0 pointer-events-none group-hover/sub:opacity-100 group-hover/sub:pointer-events-auto transition-opacity duration-150 ease-out z-60">
                        <div
                          className="relative rounded-2xl border border-white/8 shadow-[0_24px_60px_-10px_rgba(0,0,0,0.55)]"
                          style={{
                            background:
                              'linear-gradient(160deg, rgba(18,18,24,0.97) 0%, rgba(12,12,18,0.99) 100%)',
                            backdropFilter: 'blur(24px)',
                            minWidth: '190px',
                          }}
                        >
                          <div className="absolute top-0 left-4 right-4 h-px bg-linear-to-r from-transparent via-white/12 to-transparent rounded-full" />
                          <div className="p-2 flex flex-col gap-0">
                            {validSubSubLinks.map((subSubItem, j) => {
                              return (
                                <div
                                  key={j}
                                  className="flex items-center px-3 py-1.5 rounded-lg hover:bg-white/6 transition-all duration-150 cursor-pointer"
                                >
                                  <CMSLink
                                    {...subSubItem.link}
                                    appearance="inline"
                                    className="flex-1 block text-left text-[12px] font-medium text-white/65 hover:text-white no-underline hover:no-underline transition-colors"
                                  />
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex gap-4 lg:gap-7 items-center flex-row flex-nowrap whitespace-nowrap overflow-x-auto lg:overflow-visible no-scrollbar w-full justify-end h-full">
      {navItems.map((item, i) => (
        <NavItem key={i} item={item} />
      ))}
    </nav>
  )
}
