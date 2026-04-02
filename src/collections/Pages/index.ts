import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { slugField } from 'payload'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

import { ArchiveBlock } from '../../blocks/ArchiveBlock/config'
import { CallToAction } from '../../blocks/CallToAction/config'
import { Banner } from '../../blocks/Banner/config'
import { Code } from '../../blocks/Code/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { Hero } from '../../blocks/Hero/config'
import { Contact } from '../../blocks/Contact/config'
import { Faq } from '../../blocks/Faq/config'
import { Testimonial } from '../../blocks/Testimonial/config'
import { Feature } from '../../blocks/Feature/config'
import { Stats } from '../../blocks/Stats/config'
import { RelatedPosts } from '../../blocks/RelatedPosts/config'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
    breadcrumbs: true,
  },
  admin: {
    defaultColumns: ['title', 'fullTitle', 'fullPath', 'slug', 'template', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'pages',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'pages',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'content',
              type: 'richText',
              admin: {
                condition: (data) => data?.template !== 'master',
              },
            },
            {
              name: 'layout',
              label: 'Page Blocks',
              type: 'blocks',
              blocks: [
                ArchiveBlock,
                CallToAction,
                Banner,
                Code,
                MediaBlock,
                Hero,
                Contact,
                Faq,
                Testimonial,
                Feature,
                Stats,
                RelatedPosts,
              ],
              admin: {
                condition: (data) => data?.template === 'master',
              },
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'template',
      type: 'select',
      defaultValue: 'default',
      required: true,
      options: [
        { label: 'Default Page', value: 'default' },
        { label: 'Home Page', value: 'home' },
        { label: 'Master (Page Builder)', value: 'master' },
        // Company
        { label: 'About Us', value: 'about-us' },
        { label: 'FAQ', value: 'faq' },
        { label: 'Blogs & Topics', value: 'blogs-and-topics' },
        { label: 'Terms & Conditions', value: 'terms-and-conditions' },
        { label: 'Privacy Policy', value: 'privacy-policy' },
        { label: 'Our Team', value: 'our-team' },
        { label: 'Our Clients', value: 'our-clients' },
        { label: 'Client Reviews', value: 'client-reviews' },
        { label: 'Case Studies', value: 'case-studies' },
        // ROI
        { label: 'ROI Calculator UK', value: 'roi-calculator-uk' },
        { label: 'Enter Airbnb Market', value: 'enter-airbnb-market' },
        { label: 'Airbnb Consultancy & Training', value: 'airbnb-consultancy-and-training' },
        { label: 'Boost Airbnb', value: 'boost-airbnb' },
        { label: 'Airbnb Performance Optimization', value: 'airbnb-performance-optimization' },
        // Services
        { label: 'Services', value: 'services' },
        { label: 'Airbnb VA', value: 'airbnb-va' },
        { label: 'Direct Booking Engine', value: 'direct-booking-engine' },
        { label: 'Lead Generation', value: 'lead-generation' },
        { label: 'Social Media Mgt & Str', value: 'social-media-mgt-and-str' },
        { label: 'Systems Building', value: 'systems-building' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Choose the code template that will render this page on the frontend.',
      },
    },
    {
      name: 'fullTitle',
      type: 'ui',
      label: 'Hierarchy',
      admin: {
        components: {
          Cell: '@/components/ui/FullTitleCell',
        },
      },
    },
    {
      name: 'fullPath',
      type: 'ui',
      label: 'Path',
      admin: {
        components: {
          Cell: '@/components/ui/FullPathCell',
        },
      },
    },
    slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
