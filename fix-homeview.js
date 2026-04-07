const fs = require('fs');
const file = 'src/views/Pages/HomeView.tsx';
let content = fs.readFileSync(file, 'utf8');

// Fix imports
content = content.replace(/ArrowUpRight,\n  ArrowDownRight,\n  Check,\n  Users,\n  Home,\n  Briefcase,\n  HelpCircle,\n  Sparkles,/g, `Check,\n  Users,\n  Home,\n  Briefcase,\n  Sparkles,\n  MessageCircle,`);

// Fix unescaped quotes
content = content.replace(/>\\n                  "\{item\.t\}"\\n                <\/p>/g, '>\\n                  &quot;{item.t}&quot;\\n                </p>');

fs.writeFileSync(file, content, 'utf8');
