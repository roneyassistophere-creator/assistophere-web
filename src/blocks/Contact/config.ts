import type { Block } from 'payload'
export const Contact: Block = {
  slug: 'contact',
  interfaceName: 'ContactBlock',
  fields: [
    { name: 'email', type: 'text', required: true },
    { name: 'phone', type: 'text' },
  ],
}
