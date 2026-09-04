
import fs from 'fs';
import path from 'path';
import https from 'https';

const file = 'numerologia_cabalistica/src/utils/TabelaNumerologia.ts';
let content = fs.readFileSync(file, 'utf-8');

const regex = /image:\s*\"(https:\/\/i\.ibb\.co\/[^\"]+)\"/g;
let match;
const downloadQueue = [];

while ((match = regex.exec(content)) !== null) {
  const url = match[1];
  const filename = url.split('/').pop().replace(/%20/g, '_').replace(/[^a-zA-Z0-9.-]/g, '');
  downloadQueue.push({ url, filename });
}

const dir = 'numerologia_cabalistica/public/tarot';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const download = (url, dest) => new Promise((resolve, reject) => {
  const file = fs.createWriteStream(dest);
  https.get(url, response => {
    if(response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, res2 => {
            res2.pipe(file);
            file.on('finish', () => file.close(resolve));
        });
    } else {
        response.pipe(file);
        file.on('finish', () => file.close(resolve));
    }
  }).on('error', err => {
    fs.unlink(dest, () => {});
    reject(err);
  });
});

async function run() {
  console.log('Downloading ' + downloadQueue.length + ' images...');
  for (const item of downloadQueue) {
    const dest = path.join(dir, item.filename);
    if (!fs.existsSync(dest)) {
      console.log('Downloading ' + item.filename);
      await download(item.url, dest);
    }
    content = content.replace(item.url, './tarot/' + item.filename);
  }
  
  fs.writeFileSync(file, content, 'utf-8');
  console.log('Done replacing URLs!');
}

run();

