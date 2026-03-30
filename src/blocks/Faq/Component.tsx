import React from 'react'
import type { FaqBlock } from '@/payload-types'

export const FaqBlockComponent: React.FC<FaqBlock> = ({ title, questions }) => (
  <section className="py-16 bg-muted/30">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {questions?.map((q, i) => (
          <div key={i} className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-faq" defaultChecked={i === 0} />
            <div className="collapse-title text-xl font-medium">{q.question}</div>
            <div className="collapse-content">
              <p>{q.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
