/**
 * Generuje obraz Open Graph public/og.png (1200x630) z SVG.
 * Uruchom: node scripts/make-og.mjs  (automatycznie w `npm run build` przez prebuild)
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0e4650"/>
  <g opacity="0.06">
    ${Array.from({ length: 20 }, (_, r) =>
      Array.from({ length: 38 }, (_, c) =>
        `<rect x="${c * 64}" y="${r * 64}" width="60" height="60" fill="#f3ede3"/>`
      ).join('')
    ).join('')}
  </g>
  <g transform="translate(90,90)">
    <rect width="150" height="150" fill="#f3ede3"/>
    <rect x="22" y="22" width="48" height="48" fill="#0e4650"/>
    <rect x="80" y="22" width="48" height="48" fill="#a8521f"/>
    <rect x="22" y="80" width="48" height="48" fill="#0e4650"/>
    <rect x="80" y="80" width="48" height="48" fill="#0e4650"/>
  </g>
  <text x="90" y="360" font-family="Georgia, 'Times New Roman', serif" font-size="128" font-weight="700" fill="#f3ede3" letter-spacing="2">BORS</text>
  <text x="94" y="430" font-family="Arial, sans-serif" font-size="34" font-weight="700" fill="#e8a27a" letter-spacing="6">INSTALACJE · REMONTY · ŁÓDŹ</text>
  <text x="94" y="520" font-family="Arial, sans-serif" font-size="34" fill="#f3ede3" opacity="0.92">Wod-kan · c.o. · łazienki · glazura - na rynku od 1996</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(join(root, 'public', 'og.png'));
console.log('public/og.png wygenerowany (1200x630)');
