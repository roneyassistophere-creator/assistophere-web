'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-base-300 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-base-200 hover:bg-base-300/50 transition-colors"
      >
        <span className="font-semibold text-base-content text-sm lg:text-base">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 py-5 bg-base-100 text-base-content/65 text-sm leading-relaxed border-t border-base-300">
          {a}
        </div>
      )}
    </div>
  )
}
