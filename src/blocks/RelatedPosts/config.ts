import type { Block } from 'payload'
export const RelatedPosts: Block = {
  slug: 'relatedPosts',
  interfaceName: 'RelatedPostsBlock',
  fields: [
    {
      name: 'docs',
      type: 'relationship',
      relationTo: 'posts',
      hasMany: true,
      required: true,
    },
  ],
}
