import { describe, it, expect } from 'vitest';
import { estimate, formatSummary, type EstimateInput } from './estimate';

/** Bazowy, "pusty" input - w testach nadpisujemy tylko istotne pola. */
const base: EstimateInput = {
  works: [],
  floorArea: 0,
  wallTileArea: 0,
  plumbingPoints: 0,
  coNewPoints: 0,
  coRadiators: 0,
  demolishTiles: false,
  rubbleRemoval: false,
  tileFormat: 'standard',
  addons: {
    stelazWc: false,
    odplywLiniowy: false,
    kabinaBrodzik: false,
    wannaZabudowa: false,
    umywalkaSzafka: false,
    grzejnikLazienkowy: false,
    sufitGk: false,
    ogrzewaniePodlogowe: false,
  },
  scope: 'robocizna',
  materialStandard: 'podstawowy',
  vat: 8,
};

describe('estimate()', () => {
  it('mała łazienka 4 m² (robocizna + materiały, standard średni)', () => {
    const r = estimate({
      ...base,
      works: ['lazienka'],
      floorArea: 4,
      wallTileArea: 14,
      plumbingPoints: 4,
      demolishTiles: true,
      rubbleRemoval: true,
      tileFormat: 'standard',
      addons: { ...base.addons, stelazWc: true, kabinaBrodzik: true, umywalkaSzafka: true, grzejnikLazienkowy: true },
      scope: 'robocizna_materialy',
      materialStandard: 'sredni',
    });
    expect(r.laborNet).toBe(11080);
    expect(r.materialsNet).toBe(3960);
    expect(r.net).toBe(15040);
    expect(r.vatRate).toBe(8);
    expect(r.vatAmount).toBe(1203);
    expect(r.gross).toBe(16243);
    expect(r.low).toBe(13807);
    expect(r.high).toBe(18679);
    expect(r.days).toBe(8);
    // hydroizolacja obecna tylko dla łazienki
    expect(r.items.some((i) => i.label === 'Hydroizolacja' && i.total === 320)).toBe(true);
    expect(r.materials?.total).toBe(3960);
  });

  it('duża łazienka 8 m² z odpływem liniowym (duży format, standard wysoki)', () => {
    const r = estimate({
      ...base,
      works: ['lazienka'],
      floorArea: 8,
      wallTileArea: 24,
      plumbingPoints: 5,
      demolishTiles: true,
      rubbleRemoval: true,
      tileFormat: 'duzy',
      addons: { ...base.addons, stelazWc: true, odplywLiniowy: true, wannaZabudowa: true, umywalkaSzafka: true, grzejnikLazienkowy: true },
      scope: 'robocizna_materialy',
      materialStandard: 'wysoki',
    });
    expect(r.laborNet).toBe(18740);
    expect(r.materialsNet).toBe(12800);
    expect(r.net).toBe(31540);
    expect(r.vatAmount).toBe(2523);
    expect(r.gross).toBe(34063);
    expect(r.low).toBe(28954);
    expect(r.high).toBe(39172);
    expect(r.days).toBe(13);
    expect(r.items.some((i) => i.label === 'Odpływ liniowy' && i.total === 700)).toBe(true);
    expect(r.items.some((i) => i.label === 'Układanie płytek (duży format)')).toBe(true);
  });

  it('sama wymiana 3 grzejników (tylko robocizna)', () => {
    const r = estimate({
      ...base,
      works: ['co'],
      coRadiators: 3,
      scope: 'robocizna',
    });
    expect(r.items).toHaveLength(1);
    expect(r.laborNet).toBe(1350);
    expect(r.materialsNet).toBe(0);
    expect(r.materials).toBeNull();
    expect(r.net).toBe(1350);
    expect(r.vatAmount).toBe(108);
    expect(r.gross).toBe(1458);
    expect(r.low).toBe(1239);
    expect(r.high).toBe(1677);
    expect(r.days).toBe(2); // minimum 2 dni
  });

  it('stawka VAT 23% jest respektowana', () => {
    const r = estimate({ ...base, works: ['co'], coRadiators: 1, vat: 23 });
    expect(r.vatRate).toBe(23);
    expect(r.vatAmount).toBe(104); // 450 * 23%
    expect(r.gross).toBe(554);
  });

  it('pusty input daje zerowy wynik i 0 dni', () => {
    const r = estimate(base);
    expect(r.net).toBe(0);
    expect(r.gross).toBe(0);
    expect(r.days).toBe(0);
    expect(r.items).toHaveLength(0);
  });

  it('formatSummary zawiera kluczowe informacje', () => {
    const r = estimate({ ...base, works: ['co'], coRadiators: 3 });
    const s = formatSummary({ ...base, works: ['co'], coRadiators: 3 }, r);
    expect(s).toContain('ZAPYTANIE Z KALKULATORA BORS');
    expect(s).toContain('Razem BRUTTO');
    expect(s).toContain('oględzinach');
  });
});
