import fs from 'fs';
import glob from 'glob';

const files = glob.sync('src/views/Pages/**/*.tsx');

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Add the 3D perspective style if not already present
  if (!content.includes('transform: perspective(1200px)') && content.includes('<style dangerouslySetInnerHTML={{')) {
    content = content.replace(/(__html:\s*)`/, "$1`\n        @keyframes floatIso {\n          0%, 100% { transform: translateY(0px) rotateX(10deg) rotateY(-12deg) rotateZ(3deg) scale(0.85); }\n          50% { transform: translateY(-15px) rotateX(10deg) rotateY(-12deg) rotateZ(3deg) scale(0.85); }\n        }\n        .perspective-tilt { transform: perspective(1200px) rotateX(10deg) rotateY(-12deg) rotateZ(3deg) scale(0.85); transform-style: preserve-3d; }");
    changed = true;
  }

  // Update classes
  if (content.includes('bg-base-200') || content.includes('shadow-black/')) {
    // Just a basic global fix specifically targeting the dashboard
    content = content.replace(/className="([^"]*?)bg-base-200([^"]*?)"/g, 'className="$1bg-zinc-950/20 dark:bg-white/5 backdrop-blur-3xl ring-1 ring-white/10 shadow-2xl$2"');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
  }
}
console.log('Fixed globally!');
