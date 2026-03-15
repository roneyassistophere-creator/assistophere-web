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
    defaultColumns: ['title', 'slug', 'parent', 'template', 'updatedAt'],
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
        { label: 'Services Hub', value: 'services' },
        { label: 'Contact', value: 'contact' },
        { label: 'Pricing & Packages', value: 'pricing' },
        { label: 'OTA Management', value: 'ota-management' },
        { label: 'OTA Virtual Assistant', value: 'ota-virtual-assistant' },
        { label: 'Multi Platform Listing', value: 'multi-platform-listing' },
        { label: 'STR Growth Consultancy', value: 'str-growth-consultancy' },
        { label: 'Direct Booking Website SEO', value: 'direct-booking-seo' },
        { label: '24/7 Guest Communication', value: 'guest-communication' },
        { label: 'Airbnb Training', value: 'airbnb-training' },
        { label: 'STR Growth Systems', value: 'str-growth-systems' },
        { label: 'Airbnb Management', value: 'airbnb-management' },
        { label: 'Vrbo Management', value: 'vrbo-management' },
        { label: 'Booking.com Management', value: 'booking-com-management' },
        { label: 'Airbnb VA', value: 'airbnb-va' },
        { label: 'Vrbo VA', value: 'vrbo-va' },
        { label: 'Booking.com VA', value: 'booking-com-va' },
        { label: 'Locations', value: 'locations' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Choose the code template that will render this page on the frontend.',
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
