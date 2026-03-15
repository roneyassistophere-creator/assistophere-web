const fs = require('fs')
let content = fs.readFileSync('src/app/(frontend)/[...slug]/page.tsx', 'utf8')

content = content.replace(
  "import type { Metadata } from 'next'",
  "import type { Metadata } from 'next';\nimport type { Page as PageType } from '@/payload-types';",
)
content = content.replace('let page: Page | null', 'let page: PageType | null')
content = content.replace('as unknown as Page', 'as unknown as PageType')

fs.writeFileSync('src/app/(frontend)/[...slug]/page.tsx', content)
