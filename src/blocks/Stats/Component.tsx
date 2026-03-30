import React from 'react'
import type { StatsBlock } from '@/payload-types'

export const StatsBlockComponent: React.FC<StatsBlock> = ({ stats }) => (
  <section className="py-12 bg-primary text-primary-content">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-12 text-center">
        {stats?.map((s, i) => (
          <div key={i}>
            <div className="text-4xl md:text-5xl font-bold mb-2">{s.value}</div>
            <div className="text-lg opacity-80">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
