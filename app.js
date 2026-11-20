/* ============================================================
   EDIT ME — all your content lives in CONFIG.
   Add a project = add an object to CONFIG.projects.
   ============================================================ */
const CONFIG = {
  name: 'Giulio Comellini',
  tagline: 'Data & Research & Analytics · Product · AI · Founder (and Torino FC sufferer)',
  email: 'comellinigiulio@gmail.com',
  links: { LinkedIn: 'https://www.linkedin.com/in/giulio-comellini/' },
  avatar: 'photo',            // 'photo' = assets/avatar.png

  about: [
    "Hey, I'm Giulio. Born in Italy, journalism degree in Barcelona, and somehow I ended up running data teams in New York and building AI products in Amsterdam. Turns out asking good questions and checking your sources is a pretty transferable skill.",
    "I spent years in infrastructure, energy, and private markets data (ION Group / Infralogic, then GRESB), where my job was basically to translate data into something people can trust and make decisions with.",
    "These days I co-founded Control F, which uses AI to extract data from boring documents so you don't have to, and I build games on the side. Mostly football-related, because priorities.",
  ],
  background: [
    ['Mar 2026', 'Co-founded Control F (Amsterdam), the first automated, evidence-based metric extraction tool for private market funds data.'],
    ['2025 – 2026', 'Product Director, Infrastructure at GRESB (Amsterdam). Some cool projects in the real assets sustainability space, and a few panels and stages.'],
    ['2024 – 2026', 'Executive MBA (specialized in Entrepreneurship), Amsterdam Business School.'],
    ['2019 – 2025', 'ION Group (New York). Started as an intern, left as Head of Data Strategy for Infrastructure & Energy, leading a 17-person global team at Infralogic.'],
    ['2019', 'Study abroad at Manhattan University, New York.'],
    ['2015 – 2019', 'B.A. in Journalism, Universidad Abat Oliba (Barcelona).'],
    ['2008 – 2014', 'Spent a few years reporting on the lovely Italian amateur sports journalism underground for 4 different publications. Started as a junior (because I was 16) and ended up as Editorial Head for one.'],
  ],
  skills: ['Product management', 'Data strategy', 'Private markets', 'Infrastructure finance', 'Real assets', 'AI / data products', 'Go-to-market', 'Team leadership', 'Lobbying to bring back Windows XP'],
  languages: 'Italian (native) · English · Spanish · Catalan (a bit - una mica)',

  visited: ['Italy', 'Spain', 'United States of America', 'Netherlands', 'Mexico', 'Costa Rica', 'Cuba', 'Brazil', 'South Africa', 'Morocco', 'Egypt', 'Tunisia', 'Greece', 'France', 'Portugal', 'United Kingdom', 'Germany', 'Switzerland', 'Austria', 'Croatia', 'Czechia', 'Hungary', 'Denmark', 'Sweden', 'Mongolia', 'Belgium'],

  faqs: [
    { q: 'What did I want to be when I grew up?',
      a: [
        "A journalist. For real.",
        "At 13, in high school, I made a (very funny, I'm told) newspaper. At 16 I got my first real job at a local sports newspaper: 50 euros a month, thank you Italian boomer bosses. I spent my weekends watching insanely low-level football, taking photos and reporting on it.",
        "Then I studied Journalism in Barcelona. During college I spent three months in Mongolia working for the UB Post, the leading English-language Mongolian newspaper (not sure why they ever said \"leading\", the competition is not that fierce).",
        "Unfortunately I never became a journalist per se, meaning I never paid rent with journalism money, but I'm still quite passionate about it.",
      ] },
    { q: 'Why is Torino FC the greatest team in sports history?',
      a: [
        "A serious answer to a serious question. Evidence follows.",
        "<b>1. Peak performance.</b> The Grande Torino won five league titles in a row between 1943 and 1949 (the war took a season off, and even football respected that). In May 1947, ten of the eleven players in Italy's starting lineup were Torino players. No club has ever matched that concentration of a nation's talent.",
        "<b>2. Resilience.</b> Superga, 4 May 1949. A club is measured by what it does when everything is taken from it, and Torino fans still climb that hill every year.",
        "<b>3. Titles are a vanity metric.</b> Some clubs in the same city have collected a lot of them. This proves my point.",
        "<b>4. Investment thesis.</b> Supporting Torino is a long-duration, high-conviction, illiquid position: the last scudetto was 1975–76. As someone who works in private markets, I recognise patient capital when I see it.",
        "<b>Conclusion:</b> the greatest team in sports history. QED. Forza Toro.",
      ] },
    { q: 'How Italian do I feel?',
      a: [
        "Football, coffee and fashion, but not one of those who cries on TikTok while spaghetti gets broken.",
        "And if you like pineapple on pizza, go ahead: add your pineapple on your pizza. <i>*dies inside*</i>",
      ] },
  ],

  projects: [
    { id: 'controlf', name: 'Control F', icon: 'controlf', logo: 'assets/controlf-logo.jpg', year: '2026', status: 'Live · Co-founder',
      tags: ['AI', 'Private markets', 'Data extraction'],
      blurb: "Control F turns thousands of sources into trusted, database-ready data. You describe what you want to track in plain English; it monitors the sites, filings and document portals, catches new documents, extracts the fields you care about (commitments, IRR, NAV, deadlines, prices) and maps them to your own naming. Every number links back to the page and passage it came from, and nothing goes downstream until a human approves it.",
      bullets: [
        'Natural-language tracker setup, alerts by email, Slack or Teams',
        'Domain-tuned extraction: every data point is source-linked, no black boxes',
        'Taxonomy mapping + entity matching that remembers across runs',
        'Built for private markets: LP reports, GP decks, fund documents',
      ],
      video: 'assets/controlf-demo.mp4',
      url: 'https://www.ControlF.ai', btn: 'Visit ControlF.ai' },
    { id: 'faceoff', group: 'games', name: 'FaceOff', icon: 'faceoff', logo: 'assets/faceoff-logo.png', year: '2026', status: 'Playable',
      tags: ['Football', 'Basketball', 'Celebrities', 'Multiplayer'],
      blurb: "Name the face. A live 1v1 quiz against your friends: you both see the same face, pick the right name out of four, and have 7 seconds per face for 10 faces. Right answers score points and faster ones score more, so hesitation costs you. Climb the rankings and keep your head-to-head record.",
      bullets: [
        'Three arenas: Football (Premier League, Serie A, LaLiga, Bundesliga, Ligue 1), Basketball (NBA, EuroLeague, Liga ACB, Lega Basket) and Celebrities (actors, singers, TV & web stars)',
        'Create a match, pick category, difficulty and leagues, then share the invite link with a friend',
        'Available in English, Italian and Spanish',
      ],
      url: 'https://playwhoiswho.com', btn: 'Play at playwhoiswho.com' },
    { id: 'voicetrivia', group: 'games', name: 'VoiceTrivia', icon: 'voice', year: '2026', status: 'Playable',
      tags: ['Voice', 'AI', 'Party game'],
      blurb: "A trivia game you play entirely by talking. An AI host reads out the questions, listens to your answers and judges them, even if you say it in a slightly creative way. You choose difficulty, category, number of players and number of questions just by speaking. No screen-tapping, great with friends and a drink.",
      bullets: [],
      url: 'https://voicetrivia.co', btn: 'Play at voicetrivia.co' },
    { id: 'realm', group: 'games', name: 'The Realm', icon: 'realm', logo: 'assets/realm-logo.png', year: '2026', status: 'Private, by invitation',
      tags: ['Strategy', 'Multiplayer', 'Browser + mobile'],
      blurb: "A kingdom that grows over time. The Realm (Il Regno in Italian) is played in the browser and on your phone, together with a group of friends. Time keeps running even when you're away: harvests ripen, buildings get finished, wars get resolved. No shortcuts, everything takes real time.",
      bullets: [
        'Build: claim land next to yours, cut or plant forests, raise houses, sawmills, chapels and markets. Well-fed, happy citizens produce more.',
        'Trade and diplomacy: offers and counter-offers, caravans, treaties, alliances, gifts and ships from the port. Diplomacy costs Orders, which regenerate slowly.',
        'Fight: declare war with 24 hours notice, march your troops, defend your borders. Vassalage, broken oaths and shields make every choice heavy.',
        'Found colonies: far-away settlements send goods home every six hours, but they need defending, a colony without soldiers is defenceless.',
        'How you win: a game "year" lasts weeks. At the end, the highest score wins. Prestige x average happiness: being big is not enough, you have to govern well. Happiness depends on taxes, chapels, gardens, squares and taverns, and multiplies all production.',
        'Hard on purpose: patience and alliances matter more than speed. Private game, by invitation only.',
      ],
      url: 'https://jointherealm.co', btn: 'Visit jointherealm.co' },
  ],
};

/* ---------------- icons (32x32 pixel-ish SVG) ---------------- */
const S = (b) => `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">${b}</svg>`;
const ICONS = {
  computer: S('<rect x="4" y="4" width="24" height="17" fill="#c0c0c0" stroke="#000"/><rect x="7" y="7" width="18" height="11" fill="#008080" stroke="#000"/><rect x="11" y="23" width="10" height="3" fill="#c0c0c0" stroke="#000"/><rect x="6" y="26" width="20" height="3" fill="#c0c0c0" stroke="#000"/>'),
  folder: S('<path d="M2 8h10l3 3h15v17H2z" fill="#f5d36b" stroke="#000"/><path d="M3 14h26v13H3z" fill="#ffe98f"/><path d="M2 8h10l3 3h15v17H2z" fill="none" stroke="#000"/>'),
  help: S('<circle cx="16" cy="16" r="13" fill="#2a56c6" stroke="#fff" stroke-width="2"/><text x="16" y="22" font-family="Arial" font-weight="700" font-size="18" text-anchor="middle" fill="#fff">?</text>'),
  notepad: S('<rect x="6" y="3" width="20" height="26" fill="#fff" stroke="#000"/><rect x="6" y="3" width="20" height="5" fill="#00a" stroke="#000"/><path d="M10 13h12M10 17h12M10 21h8" stroke="#000"/>'),
  user: S('<circle cx="16" cy="11" r="6" fill="#f5c9a0" stroke="#000"/><path d="M5 29c0-8 5-11 11-11s11 3 11 11z" fill="#3a6fd8" stroke="#000"/>'),
  mail: S('<rect x="3" y="7" width="26" height="18" fill="#fff" stroke="#000"/><path d="M3 7l13 11L29 7" fill="none" stroke="#000"/>'),
  terminal: S('<rect x="3" y="5" width="26" height="22" fill="#000" stroke="#888"/><path d="M7 11l5 4-5 4" stroke="#0f0" fill="none"/><path d="M14 20h8" stroke="#0f0"/>'),
  bin: S('<path d="M8 8h16l-2 20H10z" fill="#9db" stroke="#000"/><rect x="6" y="5" width="20" height="3" fill="#c0c0c0" stroke="#000"/><path d="M13 11v14M16 11v14M19 11v14" stroke="#456"/>'),
  doc: S('<path d="M7 3h13l6 6v20H7z" fill="#fff" stroke="#000"/><path d="M20 3v6h6" fill="#ddd" stroke="#000"/><path d="M11 14h11M11 18h11M11 22h8" stroke="#000"/>'),
  globe: S('<circle cx="16" cy="16" r="12" fill="#3a8fd8" stroke="#000"/><path d="M8 11c4-3 6 1 8 0s4 3 2 6-5 1-5 5-5-1-6-4 0-5 1-7z" fill="#3c3"/>'),
  controlf: S('<image href="assets/controlf-logo.jpg" width="32" height="32"/>'),
  faceoff: S('<image href="assets/faceoff-logo.png" width="32" height="32"/>'),
  voice: S('<rect x="12" y="3" width="8" height="15" rx="4" fill="#ccc" stroke="#000"/><path d="M8 14c0 6 3 9 8 9s8-3 8-9M16 23v5M11 28h10" fill="none" stroke="#000"/>'),
  realm: S('<image href="assets/realm-logo.png" width="32" height="32"/>'),
  moon: S('<circle cx="16" cy="16" r="13" fill="#2a56c6" stroke="#fff" stroke-width="1.5"/><path d="M19 8a8 8 0 100 16 9 9 0 01-5-15 8 8 0 015-1z" fill="#ffe27a"/>'),
  shutdown: S('<circle cx="16" cy="17" r="10" fill="none" stroke="#c00" stroke-width="3"/><path d="M16 4v12" stroke="#c00" stroke-width="3"/>'),
};

/* ---------------- app registry ---------------- */
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const apps = {};

function folder(id, title, icon, items, opts = {}) {
  apps[id] = { id, title, icon, w: opts.w || 460, h: opts.h || 320, type: 'folder', items,
    status: `${items.length} object(s)` };
}
function page(id, title, icon, html, opts = {}) {
  apps[id] = { id, title, icon, w: opts.w || 560, h: opts.h || 420, type: 'page', html, menu: opts.menu,
    status: opts.status };
}

const linkBtns = Object.entries(CONFIG.links).map(([k, v]) => `<a class="btn" href="${esc(v)}" target="_blank" rel="noopener">${esc(k)}</a>`).join('');
const avatarSVG = () => (window.AVATARS && AVATARS[CONFIG.avatar]) || esc(CONFIG.name[0]);
const timeline = () => `<table class="props">${CONFIG.background.map(([d, t]) => `<tr><td>${esc(d)}</td><td>${esc(t)}</td></tr>`).join('')}</table>`;

page('about', 'About Me - Notepad', 'notepad', `
  <div class="doc">
    <div class="hero"><div class="avatar">${avatarSVG()}</div>
      <div><h1>${esc(CONFIG.name)}</h1><div>${esc(CONFIG.tagline)}</div></div></div>
    ${CONFIG.about.map((p) => `<p>${esc(p)}</p>`).join('')}
    <h2>The short timeline</h2>${timeline()}
    <h2>Things I'm good at</h2><div class="tags">${CONFIG.skills.map((s) => `<span class="tag">${esc(s)}</span>`).join('')}</div>
    <h2>Languages</h2><p>${esc(CONFIG.languages)}</p>
  </div>`, { w: 640, h: 500, menu: ['File', 'Edit', 'Search', 'Help'], status: 'Ln 1, Col 1' });

page('faq', 'FAQ - Help and Support', 'help', `
  <div class="doc">
    <h1>Frequently Asked Questions</h1><p>(Nobody asked. I answered anyway.)</p>
    ${CONFIG.faqs.map((f, i) => `<details class="faq" ${i === 0 ? 'open' : ''}><summary>${esc(f.q)}</summary>${f.a.map((p) => `<p>${p}</p>`).join('')}</details>`).join('')}
  </div>`, { w: 620, h: 480, menu: ['File', 'Edit', 'View', 'Help'] });

page('contact', 'Contact', 'mail', `
  <div class="doc"><h1>Say hi</h1>
    <p>Want to collaborate, talk data, startups, games, or argue about Torino? Write me.</p>
    <table class="props"><tr><td>Email</td><td><a href="mailto:${esc(CONFIG.email)}">${esc(CONFIG.email)}</a></td></tr></table>
    <div class="btnrow">${linkBtns}</div></div>`, { w: 440, h: 290 });

page('resume', 'Resume.doc - WordPad', 'doc', `
  <div class="doc"><h1>${esc(CONFIG.name)}</h1><div>${esc(CONFIG.tagline)}</div>
    <div class="btnrow" style="margin:10px 0"><a class="btn" href="assets/Giulio-Comellini-Resume.pdf" download>Download PDF</a></div>
    <h2>Experience &amp; education</h2>${timeline()}
    <h2>Skills</h2><p>${CONFIG.skills.map(esc).join(' · ')}</p>
    <h2>Languages</h2><p>${esc(CONFIG.languages)}</p></div>`, { w: 620, h: 500, menu: ['File', 'Edit', 'View', 'Insert', 'Format', 'Help'] });

const JUVE = `<svg viewBox="0 0 48 56" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h40v28c0 12-10 18-20 22C14 50 4 44 4 32z" fill="#fff" stroke="#000" stroke-width="2.5"/><path d="M12 4h6v46l-4-2zM24 4h6v50h-6zM36 4h6v28c0 6-2 10-6 14z" fill="#000"/></svg>`;
page('bin', 'Recycle Bin', 'bin', `<div class="folder-body" style="padding:14px;align-items:flex-start;gap:14px">
  <div style="width:96px;text-align:center"><div style="width:64px;height:72px;margin:0 auto 4px">${JUVE}</div><div>Juventus.png</div><small style="color:#777">deleted, as it should be</small></div>
  </div>`, { w: 400, h: 240, status: '1 object(s)' });

CONFIG.projects.forEach((p) => {
  page(p.id, `${p.name} - Properties`, p.icon, `
    <div class="doc">
      <div class="hero"><div style="width:56px;height:56px;flex:none;border-radius:6px;overflow:hidden">${ICONS[p.icon] || ICONS.globe}</div><div><h1>${esc(p.name)}</h1></div></div>
      <p>${esc(p.blurb)}</p>
      ${p.bullets && p.bullets.length ? `<ul>${p.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>` : ''}
      ${(p.shots || []).map((u) => `<img class="shot-img" src="${esc(u)}" alt="${esc(p.name)} screenshot">`).join('')}
      ${p.video ? `<video class="vid" controls preload="metadata" src="${esc(p.video)}"></video>` : ''}
      <table class="props"><tr><td>Year</td><td>${esc(p.year)}</td></tr><tr><td>Status</td><td>${esc(p.status)}</td></tr></table>
      <div class="tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
      <div class="btnrow">${p.url ? `<a class="btn" href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.btn || 'Open')}</a>` : `<span class="btn dis">${esc(p.btn || 'Coming soon')}</span>`}</div></div>`, { w: 600, h: 520 });
});

const topLevel = CONFIG.projects.filter((p) => !p.group).map((p) => p.id);
const games = CONFIG.projects.filter((p) => p.group === 'games').map((p) => p.id);
folder('games', 'Games', 'folder', games, { w: 420, h: 260 });
folder('projects', 'My Projects', 'folder', [...topLevel, 'games'], { w: 460, h: 280 });

apps.terminal = { id: 'terminal', title: 'MS-DOS Prompt', icon: 'terminal', w: 560, h: 340, type: 'terminal' };
apps.map = { id: 'map', title: "World Map - Places I've Been", icon: 'globe', w: 760, h: 470, type: 'map', status: 'Loading map…' };


const DESKTOP = ['projects', 'about', 'faq', 'map', 'resume', 'contact', 'terminal', 'bin'];
const START_ITEMS = ['projects', 'about', 'resume', 'contact', 'terminal', '-', 'shutdown'];

/* ---------------- desktop icons ---------------- */
const mobile = () => matchMedia('(max-width:700px), (pointer:coarse)').matches;
const labelOf = (a) => (a.id === 'about' ? 'About Me' : a.id === 'resume' ? 'Resume.doc' : a.id === 'terminal' ? 'MS-DOS' : a.id === 'faq' ? 'FAQ' : a.id === 'map' ? 'World Map' : a.title.replace(/ - .*/, ''));

function iconEl(id, container) {
  const a = apps[id];
  const el = document.createElement('button');
  el.className = 'icon';
  el.innerHTML = `${ICONS[a.icon]}<span>${esc(labelOf(a))}</span>`;
  el.addEventListener('click', (e) => {
    e.stopPropagation();
    document.querySelectorAll('.icon.sel').forEach((i) => i.classList.remove('sel'));
    el.classList.add('sel');
    if (mobile()) openApp(id);
  });
  el.addEventListener('dblclick', () => openApp(id));
  el.addEventListener('keydown', (e) => { if (e.key === 'Enter') openApp(id); });
  container.appendChild(el);
}
const desktop = document.getElementById('desktop');
DESKTOP.forEach((id) => iconEl(id, desktop));
document.addEventListener('click', () => {
  document.querySelectorAll('.icon.sel').forEach((i) => i.classList.remove('sel'));
  closeStart();
});

/* ---------------- window manager ---------------- */
const winRoot = document.getElementById('windows');
const tasks = document.getElementById('tb-tasks');
const open = {}; // id -> {el, task}
let z = 10, cascade = 0;

function openApp(id) {
  closeStart();
  if (id === 'shutdown') return shutdown();
  const a = apps[id];
  if (!a) return;
  if (open[id]) { restore(id); return; }

  const el = document.createElement('div');
  el.className = 'win';
  const W = Math.min(a.w, innerWidth - 20), H = Math.min(a.h, innerHeight - 50);
  const off = (cascade++ % 7) * 26;
  el.style.width = W + 'px'; el.style.height = H + 'px';
  el.style.left = Math.max(0, Math.min(110 + off, innerWidth - W)) + 'px';
  el.style.top = Math.max(0, Math.min(30 + off, innerHeight - 30 - H)) + 'px';

  el.innerHTML = `
    <div class="titlebar"><span class="ti">${ICONS[a.icon]}</span><span class="tt">${esc(a.title)}</span>
      <button class="tbtn mn" title="Minimize">_</button><button class="tbtn mx" title="Maximize">&#9633;</button><button class="tbtn x" title="Close">&#10005;</button></div>
    ${a.menu ? `<div class="menubar">${a.menu.map((m) => `<span>${m}</span>`).join('')}</div>` : ''}
    <div class="body ${a.type === 'folder' ? 'folder-body' : ''} ${a.type === 'terminal' ? 'plain' : ''}"></div>
    ${a.type === 'folder' || a.status ? `<div class="statusbar"><div>${esc(a.status || '')}</div></div>` : ''}`;
  const body = el.querySelector('.body');

  if (a.type === 'folder') a.items.forEach((i) => iconEl(i, body));
  else if (a.type === 'page') body.innerHTML = a.html;
  else if (a.type === 'map') { body.style.padding = '0'; mountMap(body, (t) => { const d = el.querySelector('.statusbar div'); if (d) d.textContent = t; }); }
  else if (a.type === 'terminal') { body.classList.remove('plain'); body.style.padding = '0'; mountTerminal(body); }

  const task = document.createElement('button');
  task.className = 'tb-task';
  task.innerHTML = `${ICONS[a.icon]}<span>${esc(a.title.replace(/ - .*/, ''))}</span>`;
  task.onclick = () => (el.classList.contains('active') && !el.classList.contains('min') ? minimize(id) : restore(id));
  tasks.appendChild(task);

  winRoot.appendChild(el);
  open[id] = { el, task };

  el.addEventListener('pointerdown', () => focus(id));
  el.querySelector('.mn').onclick = () => minimize(id);
  el.querySelector('.mx').onclick = () => el.classList.toggle('max');
  el.querySelector('.x').onclick = () => closeApp(id);
  const tb = el.querySelector('.titlebar');
  tb.addEventListener('dblclick', (e) => { if (!e.target.closest('.tbtn')) el.classList.toggle('max'); });
  drag(el, tb);
  focus(id);
}

function focus(id) {
  Object.entries(open).forEach(([k, w]) => { const on = k === id; w.el.classList.toggle('active', on); w.task.classList.toggle('on', on); });
  open[id].el.style.zIndex = ++z;
}
function minimize(id) {
  const w = open[id]; w.el.classList.add('min'); w.el.classList.remove('active'); w.task.classList.remove('on');
}
function restore(id) { open[id].el.classList.remove('min'); focus(id); }
function closeApp(id) {
  const w = open[id]; w.el.remove(); w.task.remove(); delete open[id];
  const top = Object.entries(open).filter(([, x]) => !x.el.classList.contains('min')).sort((a, b) => a[1].el.style.zIndex - b[1].el.style.zIndex).pop();
  if (top) focus(top[0]);
}

function drag(el, handle) {
  handle.addEventListener('pointerdown', (e) => {
    if (e.target.closest('.tbtn') || el.classList.contains('max') || matchMedia('(max-width:700px)').matches) return;
    const sx = e.clientX, sy = e.clientY, ox = el.offsetLeft, oy = el.offsetTop;
    handle.setPointerCapture(e.pointerId);
    const move = (m) => {
      el.style.left = Math.min(Math.max(ox + m.clientX - sx, -el.offsetWidth + 80), innerWidth - 80) + 'px';
      el.style.top = Math.min(Math.max(oy + m.clientY - sy, 0), innerHeight - 30 - 20) + 'px';
    };
    const up = () => { handle.removeEventListener('pointermove', move); handle.removeEventListener('pointerup', up); };
    handle.addEventListener('pointermove', move); handle.addEventListener('pointerup', up);
  });
}

/* ---------------- start menu ---------------- */
const sm = document.getElementById('startmenu'), startBtn = document.getElementById('start-btn');
document.getElementById('sm-name').textContent = CONFIG.name;
document.getElementById('sm-av').innerHTML = avatarSVG();
const fillMenu = (ul, ids) => ids.forEach((id) => {
  if (id === '-') { ul.appendChild(document.createElement('hr')); return; }
  const li = document.createElement('li');
  li.innerHTML = `${ICONS[apps[id].icon]}<span>${esc(labelOf(apps[id]))}</span>`;
  li.onclick = (e) => { e.stopPropagation(); openApp(id); };
  ul.appendChild(li);
});
fillMenu(document.getElementById('sm-list'), [...CONFIG.projects.map((p) => p.id), '-', 'terminal']);
fillMenu(document.getElementById('sm-right'), ['about', 'faq', 'map', 'resume', 'contact', '-', 'bin']);
const sleepBtn = document.getElementById('sm-sleep'), offBtn = document.getElementById('sm-off');
sleepBtn.innerHTML = `${ICONS.moon}<span>Go to Sleep</span>`;
offBtn.innerHTML = `${ICONS.shutdown}<span>Turn Off</span>`;
sleepBtn.onclick = (e) => { e.stopPropagation(); closeStart(); startPipes(); };
offBtn.onclick = (e) => { e.stopPropagation(); closeStart(); shutdown(); };
sm.addEventListener('click', (e) => e.stopPropagation());
function closeStart() { sm.hidden = true; startBtn.classList.remove('on'); }
startBtn.addEventListener('click', (e) => { e.stopPropagation(); sm.hidden = !sm.hidden; startBtn.classList.toggle('on', !sm.hidden); });

/* ---------------- clock ---------------- */
const clock = document.getElementById('clock');
const tick = () => { clock.textContent = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }); };
tick(); setInterval(tick, 15000);

/* ---------------- terminal ---------------- */
function mountTerminal(host) {
  const t = document.createElement('div'); t.className = 'term'; host.appendChild(t);
  const print = (s) => { const d = document.createElement('div'); d.textContent = s; t.insertBefore(d, line); };
  const line = document.createElement('div'); line.className = 'in';
  line.innerHTML = '<span>C:\\&gt;</span><input spellcheck="false" autocomplete="off" autocapitalize="off">';
  t.appendChild(line);
  const input = line.querySelector('input');
  const cmds = {
    help: () => 'Commands: help, about, projects, open <project>, contact, date, cls, exit',
    about: () => CONFIG.about.join('\n'),
    projects: () => CONFIG.projects.map((p) => `  ${p.id.padEnd(12)} ${p.name}`).join('\n'),
    contact: () => `Email: ${CONFIG.email}`,
    date: () => new Date().toString(),
    dir: () => cmds.projects(),
    ver: () => 'MyOS XP [Version 5.1.2600]',
    cls: () => { [...t.querySelectorAll('div:not(.in)')].forEach((d) => d.remove()); return ''; },
    exit: () => { closeApp('terminal'); return ''; },
    open: (arg) => (apps[arg] ? (openApp(arg), `Starting ${arg}...`) : `Unknown program: ${arg || '(none)'}`),
  };
  print('MyOS XP [Version 5.1.2600]\n(C) Copyright You 2026.\nType "help" for commands.\n');
  t.addEventListener('click', () => input.focus());
  input.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    const raw = input.value.trim(); input.value = '';
    print('C:\\>' + raw);
    const [c, ...rest] = raw.toLowerCase().split(/\s+/);
    if (!c) return;
    const out = cmds[c] ? cmds[c](rest.join(' ')) : `Bad command or file name: ${c}`;
    if (out) print(out);
    t.scrollTop = t.scrollHeight;
  });
  setTimeout(() => input.focus(), 50);
}


/* ---------------- world map ---------------- */
function mountMap(body, setStatus) {
  const load = (src) => new Promise((res, rej) => {
    if (document.querySelector(`script[src="${src}"]`)) return res();
    const sc = document.createElement('script'); sc.src = src; sc.onload = res; sc.onerror = rej; document.head.appendChild(sc);
  });
  const editMode = /[?&]edit/.test(location.search);
  const visited = new Set(CONFIG.visited);
  body.innerHTML = '<div class="map-wrap">Loading map…</div>';
  const wrap = body.firstChild;
  (async () => {
    try {
      await Promise.all([load('https://cdn.jsdelivr.net/npm/d3@7.9.0/dist/d3.min.js'), load('https://cdn.jsdelivr.net/npm/topojson-client@3.1.0/dist/topojson-client.min.js')]);
      const topo = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json').then((r) => r.json());
      const feats = topojson.feature(topo, topo.objects.countries).features.filter((f) => f.properties.name !== 'Antarctica');
      const w = 960, h = 480;
      const proj = d3.geoNaturalEarth1().fitSize([w, h], { type: 'Sphere' });
      const path = d3.geoPath(proj);
      wrap.innerHTML = `<svg viewBox="0 0 ${w} ${h}" class="map"><path d="${path({ type: 'Sphere' })}" class="ocean"/>${
        feats.map((f) => `<path d="${path(f)}" data-n="${esc(f.properties.name)}" class="land"><title>${esc(f.properties.name)}</title></path>`).join('')}</svg>
        ${editMode ? '<pre class="mapout"></pre>' : ''}`;
      const paint = () => {
        wrap.querySelectorAll('.land').forEach((p) => p.classList.toggle('v', visited.has(p.dataset.n)));
        setStatus(`${visited.size} countries visited${editMode ? ' (edit mode: click countries to toggle)' : ''}`);
        const out = wrap.querySelector('.mapout'); if (out) out.textContent = JSON.stringify([...visited].sort());
      };
      if (editMode) wrap.addEventListener('click', (e) => { const n = e.target.dataset && e.target.dataset.n; if (!n) return; visited.has(n) ? visited.delete(n) : visited.add(n); paint(); });
      paint();
    } catch (err) { wrap.textContent = "Couldn't load the map (are you offline?)."; setStatus('Map unavailable'); }
  })();
}

/* ---------------- 3D Pipes screensaver ---------------- */
let pipes = null;
function startPipes() {
  if (pipes) return;
  const cv = document.createElement('canvas');
  cv.id = 'pipes';
  const dpr = Math.min(devicePixelRatio || 1, 2);
  cv.width = innerWidth * dpr; cv.height = innerHeight * dpr;
  document.body.appendChild(cv);
  const g = cv.getContext('2d'); g.scale(dpr, dpr);
  const W = innerWidth, H = innerHeight;
  const N = 12, DIRS = [[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];
  const yaw = 0.55, pitch = 0.45, cy_ = Math.cos(yaw), sy_ = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
  const dist = N * 1.7, focal = Math.min(W, H) * 1.05;
  const project = (p) => {
    let x = p[0] - N / 2, y = p[1] - N / 2, z = p[2] - N / 2;
    let x1 = x * cy_ + z * sy_, z1 = -x * sy_ + z * cy_;
    let y1 = y * cp - z1 * sp, z2 = y * sp + z1 * cp + dist;
    const s = focal / z2;
    return { x: W / 2 + x1 * s, y: H / 2 + y1 * s, s };
  };
  let used = new Set(), list = [], timer = 0, raf = 0, last = 0;
  const key = (p) => p.join(',');
  const spawn = () => {
    for (let t = 0; t < 40; t++) {
      const p = [0, 1, 2].map(() => Math.floor(Math.random() * N));
      if (!used.has(key(p))) {
        used.add(key(p));
        return { p, d: Math.floor(Math.random() * 6), c: Math.random() * 360, life: 20 + Math.random() * 60 };
      }
    }
    return null;
  };
  const ball = (q, r, c) => {
    const grad = g.createRadialGradient(q.x - r * .35, q.y - r * .35, r * .1, q.x, q.y, r);
    grad.addColorStop(0, `hsl(${c} 90% 85%)`); grad.addColorStop(.5, `hsl(${c} 85% 50%)`); grad.addColorStop(1, `hsl(${c} 90% 20%)`);
    g.fillStyle = grad; g.beginPath(); g.arc(q.x, q.y, r, 0, 7); g.fill();
  };
  const seg = (a, b, c) => {
    const A = project(a), B = project(b), r = 0.27 * (A.s + B.s) / 2;
    g.lineCap = 'butt';
    g.strokeStyle = `hsl(${c} 85% 28%)`; g.lineWidth = r * 2; g.beginPath(); g.moveTo(A.x, A.y); g.lineTo(B.x, B.y); g.stroke();
    g.strokeStyle = `hsl(${c} 85% 48%)`; g.lineWidth = r * 1.4; g.stroke();
    g.strokeStyle = `hsl(${c} 90% 80%)`; g.lineWidth = r * .45;
    g.beginPath(); g.moveTo(A.x - r * .3, A.y - r * .3); g.lineTo(B.x - r * .3, B.y - r * .3); g.stroke();
  };
  const reset = () => { g.fillStyle = '#000'; g.fillRect(0, 0, W, H); used = new Set(); list = []; for (let i = 0; i < 3; i++) { const s = spawn(); if (s) list.push(s); } };
  reset();

  const step = () => {
    list.forEach((pp, i) => {
      if (Math.random() < 0.22) pp.d = Math.floor(Math.random() * 6);
      let moved = false;
      const order = [pp.d, ...[0, 1, 2, 3, 4, 5].sort(() => Math.random() - .5)];
      for (const d of order) {
        const v = DIRS[d], n = pp.p.map((c, k) => c + v[k]);
        if (n.some((c) => c < 0 || c >= N) || used.has(key(n))) continue;
        const turned = d !== pp.d;
        seg(pp.p, n, pp.c);
        if (turned) ball(project(pp.p), 0.34 * project(pp.p).s, pp.c);
        used.add(key(n)); pp.p = n; pp.d = d; pp.life--; moved = true; break;
      }
      if (!moved || pp.life <= 0) { ball(project(pp.p), 0.34 * project(pp.p).s, pp.c); const s = spawn(); if (s) list[i] = s; }
    });
    if (used.size > N * N * N * 0.33) reset();
  };
  const loop = (t) => { raf = requestAnimationFrame(loop); if (t - last > 28) { last = t; step(); } };
  raf = requestAnimationFrame(loop);

  const born = performance.now();
  const wake = (e) => {
    if (e.type === 'mousemove' && (performance.now() - born < 800 || (Math.abs(e.movementX) + Math.abs(e.movementY)) < 3)) return;
    cancelAnimationFrame(raf); cv.remove(); pipes = null;
    ['mousedown', 'mousemove', 'keydown', 'touchstart', 'wheel'].forEach((ev) => removeEventListener(ev, wake, true));
    bumpIdle();
  };
  ['mousedown', 'mousemove', 'keydown', 'touchstart', 'wheel'].forEach((ev) => addEventListener(ev, wake, true));
  pipes = cv;
}
// also start after 2 minutes idle, like the real thing
let idleT;
function bumpIdle() { clearTimeout(idleT); idleT = setTimeout(startPipes, 120000); }
['mousemove', 'mousedown', 'keydown', 'touchstart'].forEach((ev) => addEventListener(ev, () => { if (!pipes) bumpIdle(); }));
bumpIdle();

/* ---------------- boot / shutdown ---------------- */
const boot = document.getElementById('boot');
const finishBoot = () => { boot.classList.add('done'); if (!open.about) openApp('about'); };
boot.addEventListener('click', finishBoot);
setTimeout(finishBoot, 1900);

const sd = document.getElementById('shutdown');
function shutdown() { sd.hidden = false; }
sd.addEventListener('click', () => { sd.hidden = true; Object.keys(open).forEach(closeApp); boot.classList.remove('done'); boot.querySelector('i').style.animation = 'none'; void boot.offsetWidth; boot.querySelector('i').style.animation = ''; setTimeout(finishBoot, 1900); });
