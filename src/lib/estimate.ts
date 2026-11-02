/**
 * Czysta logika wyceny - BEZ UI. Stawki pochodzą wyłącznie z src/config/pricing.ts.
 * Testy: src/lib/estimate.test.ts
 */
import { pricing, type TileFormat, type MaterialStandard } from '../config/pricing';

export type WorkCategory = 'lazienka' | 'wod-kan' | 'co' | 'glazura' | 'inne';

export interface EstimateInput {
  works: WorkCategory[];
  floorArea: number; // m²
  wallTileArea: number; // m²
  plumbingPoints: number; // liczba punktów wod-kan (suma wybranych przyborów)
  coNewPoints: number; // nowe punkty c.o.
  coRadiators: number; // grzejniki do wymiany/montażu
  demolishTiles: boolean;
  rubbleRemoval: boolean;
  tileFormat: TileFormat;
  addons: {
    stelazWc: boolean;
    odplywLiniowy: boolean;
    kabinaBrodzik: boolean;
    wannaZabudowa: boolean;
    umywalkaSzafka: boolean;
    grzejnikLazienkowy: boolean;
    sufitGk: boolean;
    ogrzewaniePodlogowe: boolean;
  };
  scope: 'robocizna' | 'robocizna_materialy';
  materialStandard: MaterialStandard;
  vat: number; // 8 lub 23
}

export interface LineItem {
  label: string;
  qty: number;
  unit: string;
  unitPrice: number;
  total: number;
}

export interface EstimateResult {
  items: LineItem[]; // pozycje robocizny
  materials: LineItem | null; // pozycja materiałów (jeśli w zakresie)
  laborNet: number;
  materialsNet: number;
  net: number;
  vatRate: number;
  vatAmount: number;
  gross: number;
  low: number; // brutto -spread
  high: number; // brutto +spread
  days: number;
}

const zl = (n: number) => Math.round(n);
const addonLabels: Record<keyof EstimateInput['addons'], string> = {
  stelazWc: 'Stelaż WC podwieszany + miska',
  odplywLiniowy: 'Odpływ liniowy',
  kabinaBrodzik: 'Kabina / brodzik',
  wannaZabudowa: 'Wanna z zabudową',
  umywalkaSzafka: 'Umywalka z szafką i baterią',
  grzejnikLazienkowy: 'Grzejnik łazienkowy',
  sufitGk: 'Sufit podwieszany GK',
  ogrzewaniePodlogowe: 'Ogrzewanie podłogowe wodne',
};

const tileLabel: Record<TileFormat, string> = {
  standard: 'Układanie płytek (standard)',
  duzy: 'Układanie płytek (duży format)',
  mozaika: 'Układanie płytek (mozaika)',
};

const num = (n: unknown) => (typeof n === 'number' && isFinite(n) && n > 0 ? n : 0);

/** Główna funkcja wyceny. */
export function estimate(input: EstimateInput): EstimateResult {
  const { labor, tiling, addonsFixed, addonsPerM2, materialsPerM2, config } = pricing;
  const floor = num(input.floorArea);
  const walls = num(input.wallTileArea);
  const tileArea = floor + walls;
  const items: LineItem[] = [];

  const push = (label: string, qty: number, unit: string, unitPrice: number) => {
    if (qty > 0 && unitPrice > 0) items.push({ label, qty, unit, unitPrice, total: zl(qty * unitPrice) });
  };

  // instalacje
  push('Punkty wodno-kanalizacyjne', num(input.plumbingPoints), 'pkt', labor.wodKanPoint);
  push('Nowe punkty c.o.', num(input.coNewPoints), 'pkt', labor.coNewPoint);
  push('Montaż / wymiana grzejników', num(input.coRadiators), 'szt.', labor.radiator);

  // demontaże
  if (input.demolishTiles && tileArea > 0) push('Demontaż starych płytek', tileArea, 'm²', labor.tileDemolition);
  if (input.rubbleRemoval) push('Wywóz gruzu (ryczałt)', 1, 'ryczałt', labor.rubbleRemoval);

  // przygotowanie + płytki
  push('Przygotowanie / wyrównanie ścian', walls, 'm²', labor.wallPrep);
  if (input.works.includes('lazienka')) push('Hydroizolacja', floor, 'm²', labor.waterproofing);
  if (tileArea > 0) push(tileLabel[input.tileFormat], tileArea, 'm²', tiling[input.tileFormat]);

  // dodatki stałe
  (Object.keys(addonsFixed) as (keyof typeof addonsFixed)[]).forEach((k) => {
    if (input.addons[k]) push(addonLabels[k], 1, 'szt.', addonsFixed[k]);
  });
  // dodatki za m² (powierzchnia podłogi)
  (Object.keys(addonsPerM2) as (keyof typeof addonsPerM2)[]).forEach((k) => {
    if (input.addons[k]) push(addonLabels[k], floor, 'm²', addonsPerM2[k]);
  });

  const laborNet = items.reduce((s, i) => s + i.total, 0);

  // materiały
  let materials: LineItem | null = null;
  let materialsNet = 0;
  if (input.scope === 'robocizna_materialy' && tileArea > 0) {
    const rate = materialsPerM2[input.materialStandard];
    materialsNet = zl(tileArea * rate);
    materials = { label: `Materiały (płytki + chemia, standard: ${input.materialStandard})`, qty: tileArea, unit: 'm²', unitPrice: rate, total: materialsNet };
  }

  const net = laborNet + materialsNet;
  const vatRate = input.vat === config.vatAlt ? config.vatAlt : config.vatDefault;
  const vatAmount = zl((net * vatRate) / 100);
  const gross = net + vatAmount;
  const low = zl(gross * (1 - config.spread));
  const high = zl(gross * (1 + config.spread));
  const days = laborNet > 0 ? Math.max(config.minDays, Math.ceil(laborNet / config.laborPerDay)) : 0;

  return { items, materials, laborNet, materialsNet, net, vatRate, vatAmount, gross, low, high, days };
}

const money = (n: number) => `${n.toLocaleString('pl-PL')} zł`;

/** Czytelne podsumowanie tekstowe (do formularza / schowka). */
export function formatSummary(input: EstimateInput, r: EstimateResult): string {
  const lines: string[] = [];
  lines.push('ZAPYTANIE Z KALKULATORA BORS');
  lines.push('');
  lines.push(`Zakres prac: ${input.works.join(', ') || '-'}`);
  if (num(input.floorArea)) lines.push(`Powierzchnia podłogi: ${input.floorArea} m²`);
  if (num(input.wallTileArea)) lines.push(`Powierzchnia ścian do płytek: ${input.wallTileArea} m²`);
  lines.push('');
  lines.push('Pozycje (netto):');
  [...r.items, ...(r.materials ? [r.materials] : [])].forEach((i) => {
    lines.push(`- ${i.label}: ${i.qty} ${i.unit} x ${money(i.unitPrice)} = ${money(i.total)}`);
  });
  lines.push('');
  lines.push(`Robocizna netto: ${money(r.laborNet)}`);
  if (r.materialsNet) lines.push(`Materiały netto: ${money(r.materialsNet)}`);
  lines.push(`Razem netto: ${money(r.net)}`);
  lines.push(`VAT ${r.vatRate}%: ${money(r.vatAmount)}`);
  lines.push(`Razem BRUTTO: ${money(r.gross)}`);
  lines.push(`Widełki orientacyjne: ${money(r.low)} - ${money(r.high)} brutto`);
  lines.push(`Szacowany czas: ok. ${r.days} dni roboczych`);
  lines.push('');
  lines.push('Wycena orientacyjna. Ostateczna cena po bezpłatnych oględzinach.');
  return lines.join('\n');
}
