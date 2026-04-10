import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const ClientReviews: CollectionConfig = {
  slug: 'client-reviews',
  labels: {
    singular: 'Client Review',
    plural: 'Client Reviews',
  },
  admin: {
    useAsTitle: 'clientName',
    defaultColumns: ['clientName', 'rating', 'serviceType', 'location', 'featured'],
    description: 'Client testimonials and reviews displayed on the Client Reviews page.',
    group: 'About Us',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'clientName',
      type: 'text',
      label: 'Client Name',
      required: true,
    },
    {
      name: 'clientTitle',
      type: 'text',
      label: 'Client Title / Role',
      admin: { placeholder: 'e.g. STR Investor · Birmingham' },
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
      label: 'Avatar / Photo (optional)',
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured (shown first / highlighted)',
      defaultValue: false,
    },
    {
      name: 'rating',
      type: 'select',
      label: 'Star Rating',
      required: true,
      defaultValue: '5',
      options: [
        { label: '⭐⭐⭐⭐⭐  5 Stars', value: '5' },
        { label: '⭐⭐⭐⭐  4 Stars', value: '4' },
        { label: '⭐⭐⭐  3 Stars', value: '3' },
      ],
    },
    {
      name: 'reviewText',
      type: 'textarea',
      label: 'Review Text',
      required: true,
    },
    {
      name: 'serviceType',
      type: 'select',
      label: 'Service Reviewed',
      options: [
        { label: 'STR Business Setup', value: 'str-business-setup' },
        { label: 'STR Automation', value: 'str-automation' },
        { label: 'SOP Creation', value: 'sop-creation' },
        { label: 'Team Structuring', value: 'team-structuring' },
        { label: 'Systems Building', value: 'systems-building' },
        { label: 'Performance Optimisation', value: 'performance-optimisation' },
        { label: 'ROI Consultancy', value: 'roi-consultancy' },
        { label: 'Graphical Content Creation', value: 'graphical-content' },
        { label: 'Lead Generation', value: 'lead-generation' },
        { label: 'Virtual Assistant', value: 'virtual-assistant' },
        { label: 'General / Multiple', value: 'general' },
      ],
    },
    {
      name: 'location',
      type: 'text',
      label: 'Location (City / Region)',
    },
    {
      name: 'platform',
      type: 'select',
      label: 'Review Platform',
      defaultValue: 'direct',
      options: [
        { label: 'Direct (written for us)', value: 'direct' },
        { label: 'Google', value: 'google' },
        { label: 'Trustpilot', value: 'trustpilot' },
        { label: 'LinkedIn', value: 'linkedin' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'reviewDate',
      type: 'date',
      label: 'Review Date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'd MMM yyyy',
        },
      },
    },
  ],
}
