const fs = require('fs');
const path = require('path');
const walkSync = (dir, ext) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walkSync(fullPath, ext));
    } else if (fullPath.endsWith(ext)) { 
      results.push(fullPath);
    }
  });
  return results;
};

const viewsDir = path.join(process.cwd(), 'src/views/Pages');
const files = walkSync(viewsDir, '.tsx');

files.forEach(file => {
  let code = fs.readFileSync(file, 'utf8');
  if (code.includes('{/* Add your content here */}')) {
    if (!code.includes('import RichText')) {
      code = code.replace(
        "import type { Page } from '@/payload-types'",
        "import type { Page } from '@/payload-types';\nimport RichText from '@/components/RichText';"
      );
    }
    
    code = code.replace(
      '{/* Add your content here */}',
      `{page.content ? (
        <div className="prose max-w-none text-foreground/80 dark:prose-invert">
          <RichText data={page.content} enableGutter={false} />
        </div>
      ) : (
        <p className="text-muted-foreground">This template is currently empty. Add some content in the CMS to get started.</p>
      )}`
    );
    
    fs.writeFileSync(file, code);
    console.log('Updated', file);
  }
});
