const fs = require('fs');
let c = fs.readFileSync('src/utils/TabelaNumerologia.ts', 'utf8');

c = c.replace(/([^\,\s])(\s*[\r\n]+\s*)image:\s*"\.\/tarot\/default\.png"/g, '$1,$2image: "./tarot/default.png"');

fs.writeFileSync('src/utils/TabelaNumerologia.ts', c);
console.log('Fixed ALL commas');
