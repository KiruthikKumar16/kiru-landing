const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const root = 'src';
const pattern = /https:\/\/images\.unsplash\.com\/[^"'\s)]+/g;
const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (/\.(tsx|ts|jsx|js|md|html|json)$/.test(entry.name)) {
      files.push(full);
    }
  }
}

walk(root);
const urls = [...new Set(files.flatMap((file) => [...fs.readFileSync(file, 'utf8').matchAll(pattern)].map((m) => m[0])))];
console.log('count', urls.length);

(async () => {
  for (const url of urls) {
    const result = await new Promise((resolve) => {
      const client = url.startsWith('https') ? https : http;
      const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        res.resume();
        resolve({ code: res.statusCode, url });
      });
      req.on('error', (err) => resolve({ code: 0, url, err: err.message }));
      req.setTimeout(20000, () => {
        req.destroy();
        resolve({ code: 0, url, err: 'timeout' });
      });
    });

    if (result.code >= 200 && result.code < 400) continue;
    console.log(JSON.stringify(result));
  }
})();
