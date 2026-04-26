import fs from 'fs';
import path from 'path';

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
let count = 0;

for (const file of files) {
  if (file.includes('HomeView.tsx')) continue;

  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Add CSS animations to the <style> block if not there
  if (content.includes('dangerouslySetInnerHTML')) {
    if (!content.includes('.perspective-tilt {')) {
      content = content.replace(
        /(<\/style>`|`)/,
        `
        @keyframes floatIso {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .float-anim { animation: floatIso 6s ease-in-out infinite; }
        .perspective-tilt { 
          transform: perspective(1200px) rotateX(10deg) rotateY(-12deg) rotateZ(3deg) scale(0.85); 
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1), box-shadow 0.6s ease;
          transform-style: preserve-3d;
        }
        .perspective-container:hover .perspective-tilt {
          transform: perspective(1200px) rotateX(4deg) rotateY(-6deg) rotateZ(1deg) scale(0.9);
          box-shadow: 0 40px 80px -15px rgba(0,0,0,0.3);
        }
      $1`
      );
    }
  }

  // 2. Replace the visual wrappers.
  content = content.replace(
    /<div className="fade-up-5 float-anim relative">\s*<div className="rounded-\[2\.5rem\] overflow-hidden border border-base-300 shadow-2xl shadow-primary\/10 bg-base-200\/90 backdrop-blur-2xl p-1">/g,
    `<div className="fade-up-5 relative w-[85%] sm:w-[75%] lg:w-[90%] max-w-lg mx-auto float-anim perspective-container z-10 lg:ml-auto mt-12 lg:mt-0">
              <div className="absolute inset-0 bg-linear-to-br from-primary/30 to-secondary/30 rounded-[2.5rem] blur-3xl opacity-0 transition-opacity duration-700 perspective-container-hover:opacity-40 -z-10" />
              <div className="perspective-tilt relative rounded-4xl overflow-hidden border border-white/10 dark:border-black/10 shadow-2xl shadow-black/40 bg-zinc-950 dark:bg-white text-zinc-100 dark:text-zinc-900 p-2 backdrop-blur-3xl ring-1 ring-white/5 dark:ring-black/5">`
  );

  content = content.replace(
    /(<div className="[^"]*(fade-[0-9]|relative)[^"]*">\s*)<div className="relative rounded-(3xl|\[2\.5rem\]|2xl) overflow-hidden bg-base-(100|200)(\/90)? border border-base-300 shadow-(2xl|xl) shadow-(black|primary)\/(40|10|20|30)(\s+p-[0-9]+)?">/g,
    (match, outerDiv, radius, baseNum, hasAlpha, shadowSize, shadowColor, shadowOpacity, padding) => {
      let newOuterDiv = outerDiv.replace(/className="([^"]+)"/, 'className="$1 w-[85%] sm:w-[75%] lg:w-[90%] max-w-lg mx-auto float-anim perspective-container z-10 mt-10 lg:mt-0"');
      return `${newOuterDiv}
              <div className="absolute inset-0 bg-linear-to-br from-primary/30 to-secondary/30 rounded-[2.5rem] blur-3xl opacity-0 transition-opacity duration-700 perspective-container-hover:opacity-40 -z-10" />
              <div className="perspective-tilt relative rounded-4xl overflow-hidden border border-white/10 dark:border-black/10 shadow-2xl shadow-black/40 bg-zinc-950 dark:bg-white text-zinc-100 dark:text-zinc-900 ${padding ? padding.trim() : 'p-4'} backdrop-blur-3xl ring-1 ring-white/5 dark:ring-black/5">`;
    }
  );

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${file}`);
    count++;
  }
}

console.log(`Total files updated: ${count}`);
