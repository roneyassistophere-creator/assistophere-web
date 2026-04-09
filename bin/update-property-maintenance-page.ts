import payload from 'payload'
import config from '../src/payload.config'

async function main() {
  await payload.init({ config })

  const result = await payload.update({
    collection: 'pages',
    id: '69ba9d114b33600510effa0b',
    overrideAccess: true,
    context: { disableRevalidate: true },
    data: {
      title: 'Airbnb Property Maintenance UK',
      template: 'property-maintenance',
      _status: 'published',
    } as never,
  })

  const doc = result as unknown as Record<string, unknown>
  console.log('Updated:', doc['id'], '| template:', doc['template'])
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
