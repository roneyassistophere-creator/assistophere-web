import { getPayload } from 'payload'
import config from '../src/payload.config'

async function main() {
  const payload = await getPayload({ config })

  // Get live header nav
  const header = (await payload.findGlobal({ slug: 'header', depth: 3 })) as any
  console.log('\n=== LIVE HEADER NAV ===')
  for (const item of header.navItems || []) {
    const label = item.link?.label || item.link?.url || '(no label)'
    const ref = item.link?.reference?.value
    const url =
      ref?.breadcrumbs?.[ref.breadcrumbs.length - 1]?.url || ref?.slug || item.link?.url || ''
    console.log(`  [TOP] ${label} → ${url}`)
    for (const sub of item.subLinks || []) {
      const slabel = sub.link?.label || '(no label)'
      const sref = sub.link?.reference?.value
      const surl =
        sref?.breadcrumbs?.[sref.breadcrumbs.length - 1]?.url || sref?.slug || sub.link?.url || ''
      console.log(`    [SUB] ${slabel} → ${surl}`)
      for (const ss of sub.subSubLinks || []) {
        const sslabel = ss.link?.label || '(no label)'
        const ssref = ss.link?.reference?.value
        const ssurl =
          ssref?.breadcrumbs?.[ssref.breadcrumbs.length - 1]?.url ||
          ssref?.slug ||
          ss.link?.url ||
          ''
        console.log(`      [SUBSUB] ${sslabel} → ${ssurl}`)
      }
    }
  }

  // Get ALL pages from DB
  const pages = (await payload.find({ collection: 'pages', limit: 500, depth: 1 })) as any
  console.log('\n=== ALL PAGES IN DB ===')
  const sorted = pages.docs.sort((a: any, b: any) => {
    const au = a.breadcrumbs?.[a.breadcrumbs.length - 1]?.url || a.slug || ''
    const bu = b.breadcrumbs?.[b.breadcrumbs.length - 1]?.url || b.slug || ''
    return au.localeCompare(bu)
  })
  for (const p of sorted) {
    const url = p.breadcrumbs?.[p.breadcrumbs.length - 1]?.url || `/${p.slug}`
    console.log(
      `  ${p._status?.padEnd(9)} | ${url.padEnd(60)} | template: ${p.template || 'none'} | id: ${p.id}`,
    )
  }

  process.exit(0)
}

main().catch((e) => {
  console.error(e.message)
  process.exit(1)
})
