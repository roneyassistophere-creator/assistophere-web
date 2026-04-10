import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const OurClients: CollectionConfig = {
  slug: 'our-clients',
  labels: {
    singular: 'Client',
    plural: 'Our Clients',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'type', 'location', 'featured', 'active'],
    description: 'Clients displayed on the Our Clients page.',
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
      name: 'name',
      type: 'text',
      label: 'Client Name',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      label: 'Client Type',
      required: true,
      options: [
        { label: 'Individual Host', value: 'individual-host' },
        { label: 'Property Investor', value: 'property-investor' },
        { label: 'SA Operator', value: 'sa-operator' },
        { label: 'Letting Agent', value: 'letting-agent' },
        { label: 'Property Management Company', value: 'property-management' },
        { label: 'Developer', value: 'developer' },
        { label: 'Other Business', value: 'other' },
      ],
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo (optional)',
    },
    {
      name: 'location',
      type: 'text',
      label: 'Location (City / Region)',
      admin: { placeholder: 'e.g. Manchester, UK' },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Short Description',
      admin: {
        description: 'One or two sentences about this client and what they achieved.',
      },
    },
    {
      name: 'servicesUsed',
      type: 'select',
      label: 'Services Used',
      hasMany: true,
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
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured (shown prominently)',
      defaultValue: false,
    },
    {
      name: 'active',
      type: 'checkbox',
      label: 'Active (show on website)',
      defaultValue: true,
    },
    {
      name: 'websiteUrl',
      type: 'text',
      label: 'Website URL (optional)',
    },
    {
      name: 'caseStudy',
      type: 'relationship',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      relationTo: 'case-studies' as any,
      label: 'Linked Case Study (optional)',
      admin: {
        description: 'Link to a case study for this client if one exists.',
      },
    },
  ],
}
