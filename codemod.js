const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

walk('src', (filePath) => {
  if (!filePath.endsWith('.ts')) return;
  let code = fs.readFileSync(filePath, 'utf8');
  
  // replace const X = require('Y');
  code = code.replace(/const\s+([A-Za-z0-9_]+)\s*=\s*require\(['"]([^'"]+)['"]\);/g, "import $1 from '$2';");
  // replace const { X, Y } = require('Z');
  code = code.replace(/const\s+\{([^}]+)\}\s*=\s*require\(['"]([^'"]+)['"]\);/g, "import { $1 } from '$2';");
  
  // replace module.exports = { X };
  code = code.replace(/module\.exports\s*=\s*\{([^}]+)\};/g, "export { $1 };");
  
  // remove .js extensions in local imports (optional for ESM but tsx handles it)
  // we are keeping TS node module resolution which handles .ts without extensions in imports if configured or we can add .js
  // Let's strip .js if it exists in imports because tsc handles it
  code = code.replace(/from\s+['"](\.[^'"]+)\.js['"]/g, "from '$1'");
  
  fs.writeFileSync(filePath, code, 'utf8');
});
console.log('Codemod finished.');
