import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  labels: {
    singular: 'Team Member',
    plural: 'Team Members',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'department', 'order', 'active'],
    description: 'Team members displayed on the Our Team page.',
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
      label: 'Full Name',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      label: 'Job Title / Role',
      required: true,
      admin: { placeholder: 'e.g. Operations Lead' },
    },
    {
      name: 'department',
      type: 'select',
      label: 'Department',
      options: [
        { label: 'Leadership', value: 'leadership' },
        { label: 'Operations', value: 'operations' },
        { label: 'Guest Communications', value: 'guest-comms' },
        { label: 'Systems & Automation', value: 'systems' },
        { label: 'Content & Marketing', value: 'marketing' },
        { label: 'Finance & Admin', value: 'admin' },
        { label: 'Virtual Assistance', value: 'va' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      label: 'Profile Photo',
    },
    {
      name: 'bio',
      type: 'textarea',
      label: 'Short Bio',
      admin: {
        description: '2–3 sentences describing their background and what they do at Assistophere.',
      },
    },
    {
      name: 'active',
      type: 'checkbox',
      label: 'Active (show on website)',
      defaultValue: true,
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 99,
      admin: {
        description: 'Lower number = shown first. Use 1 for the CEO, etc.',
      },
    },
    {
      name: 'linkedIn',
      type: 'text',
      label: 'LinkedIn URL (optional)',
    },
    {
      name: 'highlights',
      type: 'array',
      label: 'Key Highlights (optional)',
      admin: {
        description: 'Up to 3 short bullet points — e.g. "5 years in STR industry"',
        initCollapsed: true,
      },
      maxRows: 3,
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Highlight',
          required: true,
        },
      ],
    },
  ],
}
