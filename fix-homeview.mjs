import fs from 'fs'

const file = 'src/views/Pages/HomeView.tsx'
let content = fs.readFileSync(file, 'utf8')

// Fix imports
content = content.replace('ArrowUpRight,\n  ArrowDownRight,\n  Check,\n  Users,\n  Home,\n  Briefcase,\n  HelpCircle,\n  Sparkles,', `Check,\n  Users,\n  Home,\n  Briefcase,\n  Sparkles,\n  MessageCircle,`)

// Fix unescaped quotes
content = content.replace('"{item.t}"', '&quot;{item.t}&quot;')
content = content.replace('"{item.t}"', '&quot;{item.t}&quot;') // just in case it takes 2 

fs.writeFileSync(file, content, 'utf8')
