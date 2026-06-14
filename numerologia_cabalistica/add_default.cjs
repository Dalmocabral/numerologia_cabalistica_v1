const fs = require('fs');
let content = fs.readFileSync('src/utils/TabelaNumerologia.ts', 'utf8');

// The arcanos object is exported as "export const arcanos = {"
// We can parse it by matching the structure or using regex.
// Each arcano looks like:
//   X: {
//     titulo: "...",
//     descricao: "..."
//   },
// or
//   X: {
//     image: "...",
//     titulo: "...",
//     descricao: "..."
//   },

const arcanosRegex = /(\d+:\s*\{[^}]*?\})/g;

content = content.replace(arcanosRegex, (match) => {
  if (match.includes('image:')) {
    return match; // Already has an image
  }
  // Doesn't have an image, add the default image
  return match.replace(/\}$/, '  image: "./tarot/default.jpg",\n  }');
});

fs.writeFileSync('src/utils/TabelaNumerologia.ts', content);
console.log('Default images added successfully!');
