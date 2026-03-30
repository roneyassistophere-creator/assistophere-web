import { getPayload } from 'payload'
import config from './payload.config'

async function run() {
  const payload = await getPayload({ config: await config })

  const header = await payload.findGlobal({ slug: 'header', depth: 2 })
  const servicesMenu = header.navItems?.find((item) => item.link.label === 'Services')

  console.log('---VERIFICATION---')
  console.log('Services in Menu:', !!servicesMenu)
  if (servicesMenu) {
    console.log('Sub-links count:', servicesMenu.subLinks?.length)
    if (servicesMenu.subLinks && servicesMenu.subLinks.length > 0) {
      console.log('First sub-link:', servicesMenu.subLinks[0].link.label)
      console.log(
        'Has Nested items?:',
        servicesMenu.subLinks[0].subSubLinks && servicesMenu.subLinks[0].subSubLinks.length > 0,
      )
    }
  } else {
    console.log('Available items:', header.navItems?.map((n) => n.link.label).join(', '))
  }
  process.exit(0)
}

run().catch(console.error)
