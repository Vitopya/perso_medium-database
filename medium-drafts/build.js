const fs = require('fs');
const path = require('path');
const RAW = 'https://raw.githubusercontent.com/Vitopya/perso_medium-database/main/';
const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

const files = {
  'ep1.html': 'wobblox-01-se-contredire-tout-seul.md',
  'ep2.html': 'wobblox-02-trente-deux-joueurs.md',
  'ep3.html': 'wobblox-03-sortir-un-jeu-que-personne-nattend.md',
};

const STYLE = `html{color-scheme:light}body{background:#fff;max-width:700px;margin:40px auto;padding:0 20px;font:20px/1.6 Georgia,serif;color:#242424}
h1{font:700 42px/1.2 Georgia,serif;margin:0 0 12px}
h2{font:400 24px/1.35 Georgia,serif;color:#6B6B6B;margin:0 0 28px}
h2.section{font:700 30px/1.3 Georgia,serif;color:#242424;margin:44px 0 12px}
figure{margin:36px 0}img{width:100%;height:auto;display:block}
figcaption{font:15px/1.4 -apple-system,sans-serif;color:#6B6B6B;text-align:center;margin-top:10px}
hr{border:0;text-align:center;margin:36px 0}hr:after{content:'* * *';letter-spacing:.6em;color:#6B6B6B}`;

for (const [out, src] of Object.entries(files)) {
  const md = fs.readFileSync(path.join(__dirname, '..', src), 'utf8');
  const blocks = md.split(/\n\s*\n/).map(b => b.trim()).filter(Boolean);
  const html = [];
  let sub = false;
  for (const b of blocks) {
    let m;
    if (b.startsWith('# ')) { html.push(`<h1>${esc(b.slice(2))}</h1>`); continue; }
    if (!sub && /^\*[^*].*\*$/s.test(b)) { html.push(`<h2>${esc(b.slice(1,-1))}</h2>`); sub = true; continue; }
    if (b === '---') { html.push('<hr>'); continue; }
    if (b.startsWith('## ')) { html.push(`<h2 class="section">${esc(b.slice(3))}</h2>`); continue; }
    if ((m = b.match(/^!\[([^\]]*)\]\(([^)]+)\)$/))) {
      html.push(`<figure><img src="${RAW}${m[2]}" alt="${esc(m[1])}"><figcaption>${esc(m[1])}</figcaption></figure>`);
      continue;
    }
    html.push(`<p>${esc(b.replace(/\n/g, ' '))}</p>`);
  }
  const page = `<!DOCTYPE html>\n<html lang="fr"><head><meta charset="utf-8">\n<title>${out}</title>\n<style>${STYLE}</style>\n</head><body>\n${html.join('\n')}\n</body></html>\n`;
  fs.writeFileSync(path.join(__dirname, out), page, 'utf8');
  const imgs = (page.match(/<img /g) || []).length;
  console.log(`${out}: ${blocks.length} blocs, ${imgs} images, ${page.length} octets`);
}
