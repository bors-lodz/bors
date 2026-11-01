/**
 * Generuje obraz Open Graph public/og.png (1200x630) z SVG.
 * Uruchom: node scripts/make-og.mjs  (automatycznie w `npm run build` przez prebuild)
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#10505C"/>
  <g opacity="0.06">
    ${Array.from({ length: 20 }, (_, r) =>
      Array.from({ length: 38 }, (_, c) =>
        `<rect x="${c * 64}" y="${r * 64}" width="60" height="60" rx="6" fill="#ffffff"/>`
      ).join('')
    ).join('')}
  </g>
  <g transform="translate(90,90)">
    <rect width="150" height="150" rx="30" fill="#F5F3EF"/>
    <rect x="30" y="30" width="38" height="38" rx="7" fill="#10505C"/>
    <rect x="82" y="30" width="38" height="38" rx="7" fill="#10505C"/>
    <rect x="30" y="82" width="38" height="38" rx="7" fill="#10505C"/>
    <rect x="82" y="82" width="38" height="38" rx="7" fill="#C26B35"/>
  </g>
  <text x="90" y="360" font-family="Archivo, Arial, sans-serif" font-size="120" font-weight="800" fill="#F5F3EF" letter-spacing="2">BORS</text>
  <text x="94" y="430" font-family="Archivo, Arial, sans-serif" font-size="34" font-weight="700" fill="#D98A4F" letter-spacing="6">INSTALACJE · REMONTY · ŁÓDŹ</text>
  <text x="94" y="520" font-family="Arial, sans-serif" font-size="34" fill="#F5F3EF" opacity="0.9">Wod-kan · c.o. · łazienki · glazura i terakota</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(join(root, 'public', 'og.png'));
console.log('public/og.png wygenerowany (1200x630)');
