import { getPayload } from 'payload'
import config from './payload.config'

async function run() {
  const payload = await getPayload({ config })

  const servicesData = [
    {
      title: 'Airbnb VA',
      sub: [
        'Multi Platform Listing',
        'Listing Creation and Optimization',
        'Professional Photography',
        'Pricing optimization',
        'Direct booking Conversions',
        'Guest Communication',
        'Guest vetting',
        'Guest Check-In Check-Out Support',
        'Calendar Management',
        'Cleaning Coordination',
        'Linen & Toiletries',
        'Property Maintenance',
        'Monthly Finance reporting',
        'Graphical Content Creation',
      ],
    },
    {
      title: 'Direct Booking Engine',
      sub: [
        'Booking Web Dev',
        'Booking engine Integration',
        'Payment Setup',
        'SEO & Organic growth',
        'Google Ads',
      ],
    },
    {
      title: 'Lead Generation',
      sub: ['Landlord Leads', 'Guest Leads'],
    },
    {
      title: 'Social Media MGT',
      sub: [
        'Content Creation',
        'Posting',
        'Engagement',
        'Brand growth',
        { title: 'Dual targeting', subSub: ['Landlords', 'Guests'] },
      ],
    },
    {
      title: 'STR Systems Building',
      sub: ['Business setup', 'Automation', 'SOP Creation', 'Team Structuring'],
    },
  ]

  async function getOrCreatePage(title: string) {
    const slug = title
      .toLowerCase()
      .replace(/ & /g, '-')
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '')
    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: slug } },
    })
    if (existing.docs.length > 0) return existing.docs[0]
    return await payload.create({
      collection: 'pages',
      data: { title, slug, _status: 'published' } as any,
      context: { disableRevalidate: true },
    })
  }

  const results: Record<string, any> = {}
  results['Services'] = await getOrCreatePage('Services')
  for (const s of servicesData) {
    results[s.title] = await getOrCreatePage(s.title)
    for (const sub of s.sub) {
      if (typeof sub === 'string') {
        results[sub] = await getOrCreatePage(sub)
      } else {
        results[sub.title] = await getOrCreatePage(sub.title)
        for (const ss of sub.subSub) {
          results[ss] = await getOrCreatePage(ss)
        }
      }
    }
  }

  const header = await payload.findGlobal({ slug: 'header' })

  // Remove existing 'Services' item if it exists to avoid duplication
  header.navItems = (header.navItems || []).filter((item) => item.link.label !== 'Services')

  const servicesNav: any = {
    link: {
      type: 'reference',
      reference: { relationTo: 'pages', value: results['Services'].id },
      label: 'Services',
    },
    subLinks: servicesData.map((s) => ({
      link: {
        type: 'reference',
        reference: { relationTo: 'pages', value: results[s.title].id },
        label: s.title,
      },
      subSubLinks: s.sub.map((sub) => {
        if (typeof sub === 'string') {
          return {
            link: {
              type: 'reference',
              reference: { relationTo: 'pages', value: results[sub].id },
              label: sub,
            },
          }
        } else {
          return {
            link: {
              type: 'reference',
              reference: { relationTo: 'pages', value: results[sub.title].id },
              label: sub.title,
            },
            subSubLinks: sub.subSub.map((ss) => ({
              link: {
                type: 'reference',
                reference: { relationTo: 'pages', value: results[ss].id },
                label: ss,
              },
            })),
          }
        }
      }),
    })),
  }

  header.navItems.push(servicesNav)
  await payload.updateGlobal({
    slug: 'header',
    data: header,
    context: { disableRevalidate: true },
  })
  console.log('Update Complete')
  process.exit(0)
}

run()
