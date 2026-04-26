import fs from 'fs';

function getFiles(dir, files = []) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const name = dir + '/' + file;
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else if (name.endsWith('.tsx')) {
      files.push(name);
    }
  }
  return files;
}

const files = getFiles('src/views/Pages');

for (const file of files) {
  if (file.includes('HomeView.tsx')) continue;
  let content = fs.readFileSync(file, 'utf8');

  if (content.includes('perspective-tilt')) {
    // Replace inner card background colors
    content = content.replace(/bg-base-200(?![\/\-])/g, 'bg-white/5 dark:bg-zinc-50');
    content = content.replace(/bg-base-100\/60/g, 'bg-white/5 dark:bg-zinc-50');
    
    // Replace borders
    content = content.replace(/border-base-300(?![\/\-])/g, 'border-white/5 dark:border-zinc-200/60');
    content = content.replace(/border-base-300\/60/g, 'border-white/5 dark:border-zinc-200/60');
    
    // Fix text colors inside the dashboard wrapper
    // Because replacing text globally is risky, we will only do it if the file was modified by the perspective script.
    // Actually, doing it globally in these 10 files might alter stuff outside the dashboard.
  }
  fs.writeFileSync(file, content, 'utf8');
}
