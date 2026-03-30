import type { Block } from 'payload'
export const Faq: Block = {
  slug: 'faq',
  interfaceName: 'FaqBlock',
  fields: [
    { name: 'title', type: 'text', defaultValue: 'Frequently Asked Questions' },
    {
      name: 'questions',
      type: 'array',
      fields: [
        { name: 'question', type: 'text', required: true },
        { name: 'answer', type: 'textarea', required: true },
      ],
    },
  ],
}
