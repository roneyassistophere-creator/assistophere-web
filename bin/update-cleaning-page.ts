import payload from 'payload'
import config from '../src/payload.config'

async function main() {
  await payload.init({ config })

  const result = await payload.update({
    collection: 'pages',
    id: '69ba9d034b33600510eff9d1',
    overrideAccess: true,
    context: { disableRevalidate: true },
    data: {
      title: 'Airbnb Cleaning Coordination | UK',
      template: 'cleaning-coordination',
      _status: 'published',
    } as never,
  })

  console.log('Updated:', result.id, '| template:', (result as any).template)
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
