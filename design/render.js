// Erzeugt PNG-Grafiken (1080 × 1350) aus design/posts/*.js nach beitraege/
// Aufruf: node design/render.js [posts/datei.js ...]
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const templates = require('./templates');

const root = path.join(__dirname, '..');
const files = process.argv.slice(2).length
  ? process.argv.slice(2).map((f) => path.resolve(f))
  : fs.readdirSync(path.join(__dirname, 'posts')).map((f) => path.join(__dirname, 'posts', f));

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  const tmp = path.join(__dirname, '_render.html');
  for (const file of files) {
    for (const post of require(file)) {
      const outDir = path.join(root, 'beitraege', post.out);
      fs.mkdirSync(outDir, { recursive: true });
      const n = post.slides.length > 1 ? post.slides.length : 0;
      for (const [idx, s] of post.slides.entries()) {
        fs.writeFileSync(tmp, templates[s.type](s, idx + 1, n));
        await page.goto('file://' + tmp);
        await page.evaluate(() => document.fonts.ready);
        const out = path.join(outDir, `${String(idx + 1).padStart(2, '0')}.png`);
        await page.screenshot({ path: out });
        console.log(path.relative(root, out));
      }
    }
  }
  fs.rmSync(tmp, { force: true });
  await browser.close();
})();
