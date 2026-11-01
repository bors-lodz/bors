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
    malowanie: false,
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
    expect(r.laborNet).toBe(11120);
    expect(r.materialsNet).toBe(3960);
    expect(r.net).toBe(15080);
    expect(r.vatRate).toBe(8);
    expect(r.vatAmount).toBe(1206);
    expect(r.gross).toBe(16286);
    expect(r.low).toBe(13843);
    expect(r.high).toBe(18729);
    expect(r.days).toBe(8);
    // hydroizolacja obecna tylko dla łazienki
    expect(r.items.some((i) => i.label === 'Hydroizolacja' && i.total === 200)).toBe(true);
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
    expect(r.laborNet).toBe(18920);
    expect(r.materialsNet).toBe(12800);
    expect(r.net).toBe(31720);
    expect(r.vatAmount).toBe(2538);
    expect(r.gross).toBe(34258);
    expect(r.low).toBe(29119);
    expect(r.high).toBe(39397);
    expect(r.days).toBe(13);
    expect(r.items.some((i) => i.label === 'Odpływ liniowy' && i.total === 900)).toBe(true);
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
    expect(r.laborNet).toBe(1800);
    expect(r.materialsNet).toBe(0);
    expect(r.materials).toBeNull();
    expect(r.net).toBe(1800);
    expect(r.vatAmount).toBe(144);
    expect(r.gross).toBe(1944);
    expect(r.low).toBe(1652);
    expect(r.high).toBe(2236);
    expect(r.days).toBe(2); // minimum 2 dni
  });

  it('stawka VAT 23% jest respektowana', () => {
    const r = estimate({ ...base, works: ['co'], coRadiators: 1, vat: 23 });
    expect(r.vatRate).toBe(23);
    expect(r.vatAmount).toBe(138); // 600 * 23%
    expect(r.gross).toBe(738);
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
