/* Cartoon avatar options (hand-drawn SVG).
   The site uses CONFIG.avatar to pick one. 'pixel' is a PNG rendered from 'sunny'. */
(function () {
  const face = (o) => {
    const st = o.stroke ? 'stroke="#241810" stroke-width="3.4" stroke-linejoin="round" stroke-linecap="round"' : '';
    return `<g ${st}>
      <!-- button shirt -->
      <path d="M10 204c0-40 40-56 90-56s90 16 90 56z" fill="#a9dcd0"/>
      <!-- neck -->
      <path d="M83 108h34v34q-17 9-34 0z" fill="#dca67f"/>
      <path d="M84 120L116 120 100 186z" fill="#e6b490"/>
      <path d="M84 122L60 148 90 182 99 172z" fill="#e4f6f1" stroke="#5fa898" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M116 122L140 148 110 182 101 172z" fill="#e4f6f1" stroke="#5fa898" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M100 186v20" stroke="#6fb3a3" stroke-width="2.6" fill="none"/>
      <circle cx="100" cy="196" r="2.8" fill="#fff" stroke="#6fb3a3" stroke-width="1.2"/>
      <!-- ears -->
      <circle cx="58" cy="88" r="8.5" fill="#e6b490"/><circle cx="142" cy="88" r="8.5" fill="#e6b490"/>
      <!-- head -->
      <path d="M58 76C58 46 76 30 100 30s42 16 42 46v22c0 28-18 46-42 46s-42-18-42-46z" fill="#f0c4a0"/>
      <!-- light stubble -->
      <path d="M58 92c0 30 18 48 42 48s42-18 42-48c-4 14-14 20-42 20S62 106 58 92z" fill="#7d5c44" opacity=".34" stroke="none"/>
      <!-- mouth -->
      <path d="M83 118q17 16 34 0q-17 5-34 0z" fill="#fff" stroke="#7a3b2b" stroke-width="2"/>
      <!-- nose -->
      <path d="M100 82c-5 12-6 18 0 18 4 0 6-2 5-4" fill="none" stroke="#c28860" stroke-width="2.8"/>
      <!-- eyes -->
      <ellipse cx="83" cy="80" rx="7.5" ry="5.2" fill="#fff"/><ellipse cx="117" cy="80" rx="7.5" ry="5.2" fill="#fff"/>
      <circle cx="84" cy="80.5" r="4.2" fill="#4a8fd9" stroke="none"/><circle cx="118" cy="80.5" r="4.2" fill="#4a8fd9" stroke="none"/>
      <circle cx="84" cy="80.5" r="1.9" fill="#0b1a2e" stroke="none"/><circle cx="118" cy="80.5" r="1.9" fill="#0b1a2e" stroke="none"/><circle cx="85.4" cy="79.2" r="1" fill="#fff" stroke="none"/><circle cx="119.4" cy="79.2" r="1" fill="#fff" stroke="none"/>
      <path d="M72 70q11-6 22-1M106 69q11-5 22 1" fill="none" stroke="#6b4f34" stroke-width="4.2"/>
      <!-- hair: tousled, brushed forward -->
      <path d="M56 80C48 40 72 20 102 22c32 0 52 20 44 58-2-14-8-24-18-28-6 8-18 8-28 6-10 4-24 8-30 12-6 4-10 10-14 10z" fill="#8a6a45"/>
      <path d="M68 44C82 26 120 24 134 44c-16-8-34-8-48-4-8 2-14 5-18 4z" fill="#aa8862" stroke="none"/>
      <path d="M78 52q8-8 20-8M104 46q12 0 22 8" fill="none" stroke="#6b4f34" stroke-width="2.4"/>
    </g>`;
  };

  const sunnyBG = `
    <defs>
      <linearGradient id="skyY" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4aa8f0"/><stop offset="1" stop-color="#cfeeff"/></linearGradient>
      <radialGradient id="sunG"><stop offset="0" stop-color="#fff6b0"/><stop offset=".45" stop-color="#ffe45c"/><stop offset="1" stop-color="#ffe45c" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="200" height="200" fill="url(#skyY)"/>
    <circle cx="160" cy="36" r="50" fill="url(#sunG)"/><circle cx="160" cy="36" r="17" fill="#ffd93a"/>
    <g fill="#fff" opacity=".95"><ellipse cx="40" cy="42" rx="26" ry="8"/><ellipse cx="56" cy="36" rx="16" ry="8"/><ellipse cx="100" cy="64" rx="22" ry="6"/><ellipse cx="170" cy="92" rx="20" ry="6"/></g>
    <path d="M-10 140c40-24 90-18 130-6s60 4 90-8V210H-10z" fill="#8fd14f"/>
    <path d="M-10 164c60-14 120-8 220 6V210H-10z" fill="#6bbd3a"/>`;

  const blissBG = `
    <defs><linearGradient id="skyB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2f6fd6"/><stop offset="1" stop-color="#bfe0fa"/></linearGradient></defs>
    <rect width="200" height="200" fill="url(#skyB)"/>
    <ellipse cx="50" cy="44" rx="34" ry="10" fill="#fff" opacity=".9"/><ellipse cx="150" cy="62" rx="30" ry="8" fill="#fff" opacity=".85"/>
    <path d="M-10 150C40 110 120 112 210 140V210H-10z" fill="#5aa91f"/>`;

  const wrap = (bg, f) => `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">${bg}${f}</svg>`;
  const sunny = wrap(sunnyBG, face({}));
  const bliss = wrap(blissBG, face({}));
  const comic = wrap(blissBG.replace('opacity=".9"', 'opacity="1"'), face({ stroke: true }));
  const sticker = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#ece9d8"/><circle cx="100" cy="104" r="92" fill="#f5a623" stroke="#241810" stroke-width="4"/><g transform="translate(0 6)">${face({ stroke: true })}</g></svg>`;
  const xp = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#3a78d8"/><rect x="8" y="8" width="184" height="184" rx="10" fill="#e8f1ff" stroke="#fff" stroke-width="4"/>${face({})}</svg>`;
  const pixel = `<img src="assets/avatar-pixel.png" alt="" style="width:100%;height:100%;display:block;image-rendering:pixelated">`;

  const photo = `<img src="assets/avatar.png" alt="" style="width:100%;height:100%;display:block;object-fit:cover">`;
  window.AVATARS = { photo, sunny, bliss, comic, sticker, xp, pixel };
})();
