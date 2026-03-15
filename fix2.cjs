const fs = require('fs')
let content = fs.readFileSync('src/app/(frontend)/page.tsx', 'utf8')

if (!content.includes('PageType')) {
  // If not using it, maybe it's fine, but let's be sure
} else if (!content.includes('import type { Page as PageType }')) {
  content = content.replace(
    "import type { Metadata } from 'next'",
    "import type { Metadata } from 'next';\nimport type { Page as PageType } from '@/payload-types';",
  )
}

fs.writeFileSync('src/app/(frontend)/page.tsx', content)
