import type { Block } from 'payload'

export const ArchiveBlock: Block = {
  slug: 'archive',
  labels: {
    singular: 'Archive',
    plural: 'Archives',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      label: 'Filter by Categories',
    },
    {
      name: 'limit',
      type: 'number',
      defaultValue: 10,
      label: 'Limit results',
    },
  ],
}
