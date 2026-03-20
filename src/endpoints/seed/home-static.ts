import type { RequiredDataFromCollectionSlug } from 'payload'

// Used for pre-seeded content so that the homepage is not empty
export const homeStatic: RequiredDataFromCollectionSlug<'pages'> = {
  slug: 'home',
  _status: 'published',
  template: 'home',
  meta: {
    description: 'Empowering your growth with performance-driven solutions.',
    title: 'Assistophere',
  },
  title: 'Home',
}
