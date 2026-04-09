import payload from 'payload'
import config from '../src/payload.config'

async function main() {
  await payload.init({ config })

  const result = await payload.update({
    collection: 'pages',
    id: '69ba9d184b33600510effa28',
    overrideAccess: true,
    context: { disableRevalidate: true },
    data: {
      title: 'Airbnb Monthly Finance Reporting UK',
      template: 'monthly-finance-reporting',
      _status: 'published',
    } as never,
  })

  const doc = result as unknown as Record<string, unknown>
  console.log('✅ Updated:', doc['id'], '| template:', doc['template'], '| status:', doc['_status'])

  process.exit(0)
}

main().catch((err) => {
  console.error('❌ Error:', err)
  process.exit(1)
})
