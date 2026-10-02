// Vorlagen im Design von @stillen_leonberg (Format 1080 × 1350 px)

const HANDLE = '@stillen_leonberg';

const squiggle = `<svg class="squiggle" viewBox="0 0 220 110" fill="none">
  <path d="M10 100 C 30 40, 80 -10, 100 40 S 140 120, 205 10" stroke="#2B1E1B" stroke-width="4" stroke-linecap="round"/></svg>`;

const heart = `<svg class="ico" viewBox="0 0 24 24"><path fill="#C9A79A" d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.2 5.3 3.1 1.7-1.9 3.2-3.1 5.3-3.1 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z"/></svg>`;

const bookmark = `<svg class="ico" viewBox="0 0 24 24"><path fill="#C9A79A" d="M6 2.5h12a1 1 0 0 1 1 1v18l-7-4.5-7 4.5v-18a1 1 0 0 1 1-1z"/></svg>`;

const icons = { heart, bookmark };

const css = `
@import url('fonts/fonts.css');
:root{--bg:#F4ECE6;--rose:#C9A79A;--chip:#E8D8CF;--dark:#2B1E1B;--brown:#5B4A43;}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1080px;height:1350px}
body{background:var(--bg);color:var(--dark);font-family:'Montserrat',sans-serif;position:relative;overflow:hidden}
.squiggle{position:absolute;top:70px;right:90px;width:210px}
.page{position:absolute;inset:0;padding:0 100px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
.kicker{font-weight:500;font-size:30px;letter-spacing:.32em;color:var(--brown);text-transform:uppercase;margin-bottom:36px}
.title{background:var(--rose);border-radius:44px;padding:52px 56px;width:100%}
.title h1{font-family:'Playfair Display',serif;font-style:italic;font-weight:700;font-size:86px;line-height:1.12;color:var(--dark)}
.title.sm h1{font-size:72px}
.chip{background:var(--chip);border-radius:18px;padding:16px 30px;margin-top:28px;font-weight:500;font-size:30px;letter-spacing:.08em;text-transform:uppercase}
.pill{background:var(--dark);color:#F4ECE6;border-radius:70px;padding:34px 60px;font-weight:600;font-size:40px;display:inline-flex;align-items:center;gap:18px}
.ico{width:40px;height:40px}
.handle{position:absolute;bottom:56px;left:0;right:0;text-align:center;font-size:30px;letter-spacing:.04em;color:var(--brown)}
.counter{position:absolute;top:84px;left:100px;font-size:28px;letter-spacing:.2em;color:var(--brown);font-weight:500}
.num{width:150px;height:150px;border-radius:50%;background:var(--rose);display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-style:italic;font-weight:700;font-size:84px;margin-bottom:44px}
.content h2{font-family:'Playfair Display',serif;font-style:italic;font-weight:700;font-size:66px;line-height:1.15;margin-bottom:40px}
.content p{font-size:36px;line-height:1.55;color:var(--brown);max-width:860px}
.content p + p{margin-top:26px}
.content strong{color:var(--dark);font-weight:600}
.box{background:var(--chip);border-radius:32px;padding:40px 50px;margin-top:44px;font-size:34px;line-height:1.5;color:var(--dark);max-width:880px}
.mf{width:100%;border-radius:40px;padding:48px 56px;text-align:center}
.mf .label{display:inline-block;font-weight:600;font-size:28px;letter-spacing:.3em;padding:12px 26px;border-radius:14px;margin-bottom:26px}
.mf.myth{background:var(--chip)}
.mf.myth .label{background:var(--bg);color:var(--brown)}
.mf.myth .q{font-family:'Playfair Display',serif;font-style:italic;font-weight:600;font-size:52px;line-height:1.25;color:var(--brown);text-decoration:line-through;text-decoration-thickness:3px;text-decoration-color:var(--rose)}
.mf.fact{background:var(--rose);margin-top:34px}
.mf.fact .label{background:var(--dark);color:#F4ECE6}
.mf.fact p{font-family:'Playfair Display',serif;font-style:italic;font-weight:700;font-size:62px;line-height:1.2}
`;

const shell = (body, extra = '') => `<!doctype html><html lang="de"><head><meta charset="utf-8">
<style>${css}</style></head><body>${squiggle}${extra}${body}<div class="handle">${HANDLE}</div></body></html>`;

const counter = (i, n) => (n ? `<div class="counter">${i} / ${n}</div>` : '');

// Titel-Slide: Kicker, Überschrift im Rosé-Kasten, Chip, Button unten
function cover(s) {
  return shell(`<div class="page">
    <div class="kicker">${s.kicker}</div>
    <div class="title ${s.small ? 'sm' : ''}"><h1>${s.title}</h1></div>
    ${s.chip ? `<div class="chip">${s.chip}</div>` : ''}
    ${s.pill ? `<div style="margin-top:110px"><span class="pill">${s.pill} ${icons[s.icon || 'bookmark']}</span></div>` : ''}
  </div>`);
}

// Inhalts-Slide: Nummer, Überschrift, Text, optionaler Kasten
function content(s, i, n) {
  return shell(`<div class="page content">
    ${s.num ? `<div class="num">${s.num}</div>` : ''}
    <h2>${s.heading}</h2>
    ${s.text.map((t) => `<p>${t}</p>`).join('')}
    ${s.box ? `<div class="box">${s.box}</div>` : ''}
  </div>`, counter(i, n));
}

// Abschluss-Slide mit Handlungsaufforderung
function cta(s, i, n) {
  return shell(`<div class="page">
    <div class="kicker">${s.kicker}</div>
    <div class="title sm"><h1>${s.title}</h1></div>
    <div class="chip">${s.chip}</div>
    <div style="margin-top:100px"><span class="pill">${s.pill} ${icons[s.icon || 'heart']}</span></div>
  </div>`, counter(i, n));
}

// Mythos/Fakt-Grafik
function mythFact(s) {
  return shell(`<div class="page">
    <div class="kicker">${s.kicker}</div>
    <div class="mf myth"><div class="label">MYTHOS</div><br><span class="q">${s.myth}</span></div>
    <div class="mf fact"><div class="label">FAKT</div><p>${s.fact}</p></div>
  </div>`);
}

module.exports = { cover, content, cta, mythFact };
