import type { Block } from 'payload'
export const Feature: Block = {
  slug: 'feature',
  interfaceName: 'FeatureBlock',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea' },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'featureTitle', type: 'text', required: true },
        { name: 'featureDescription', type: 'text' },
      ],
    },
  ],
}
