const fs = require('fs');
let c = fs.readFileSync('src/utils/TabelaNumerologia.ts', 'utf8');

// The error is because some lines ending with quotes don't have a comma before "image:"
// For example:
// areas: "..."
// image: "./tarot/default.png"
//
// We want to replace `" \n  image:` with `", \n  image:`

c = c.replace(/"(\s*[\r\n]+\s*)image:\s*"\.\/tarot\/default\.png"/g, '",$1image: "./tarot/default.png"');

fs.writeFileSync('src/utils/TabelaNumerologia.ts', c);
console.log('Fixed missing commas');
