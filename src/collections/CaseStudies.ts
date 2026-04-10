import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  labels: {
    singular: 'Case Study',
    plural: 'Case Studies',
  },
  admin: {
    useAsTitle: 'clientName',
    defaultColumns: ['clientName', 'serviceType', 'location', 'publishedDate', 'featured'],
    description: 'Real-world case studies showcasing client results.',
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
      name: 'slug',
      type: 'text',
      label: 'Slug',
      unique: true,
      index: true,
      admin: {
        description: 'URL-friendly identifier, e.g. "manchester-airbnb-scale"',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured (shown first)',
      defaultValue: false,
    },
    {
      name: 'serviceType',
      type: 'select',
      label: 'Service Type',
      required: true,
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
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'location',
      type: 'text',
      label: 'Location (City / Region)',
    },
    {
      name: 'publishedDate',
      type: 'date',
      label: 'Published Date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'd MMM yyyy',
        },
      },
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Cover Image',
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline (short summary shown on cards)',
      admin: {
        description: 'One sentence — e.g. "Scaled from 1 to 6 properties in 4 months"',
      },
    },
    {
      name: 'challenge',
      type: 'textarea',
      label: 'The Challenge',
      admin: {
        description: 'What problem was the client facing before working with Assistophere?',
      },
    },
    {
      name: 'solution',
      type: 'textarea',
      label: 'The Solution',
      admin: {
        description: 'What did Assistophere do to address the challenge?',
      },
    },
    {
      name: 'outcome',
      type: 'textarea',
      label: 'The Outcome',
      admin: {
        description: 'What measurable results did the client achieve?',
      },
    },
    {
      name: 'metrics',
      type: 'array',
      label: 'Key Metrics (optional)',
      admin: {
        description: 'Add up to 4 headline numbers — e.g. "+45% occupancy", "6 properties"',
        initCollapsed: true,
      },
      maxRows: 4,
      fields: [
        {
          name: 'value',
          type: 'text',
          label: 'Value',
          required: true,
          admin: { placeholder: 'e.g. +45%' },
        },
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          required: true,
          admin: { placeholder: 'e.g. Occupancy increase' },
        },
      ],
    },
    {
      name: 'clientQuote',
      type: 'textarea',
      label: 'Client Quote (optional)',
    },
    {
      name: 'clientTitle',
      type: 'text',
      label: "Client's Title / Role",
      admin: { placeholder: 'e.g. Property Investor · Manchester' },
    },
  ],
}
