/**
 * CENNIK BORS - jedno źródło prawdy dla kalkulatora.
 * Wszystkie stawki NETTO, Łódź 2026. Zmieniasz TU, bez dotykania logiki (src/lib/estimate.ts).
 *
 * Każda pozycja z komentarzem // DO WERYFIKACJI Z KLIENTEM.
 * Potwierdzona przez klienta: tylko stawka za punkt wod-kan (1000 zł).
 */

export type TileFormat = 'standard' | 'duzy' | 'mozaika';
export type MaterialStandard = 'podstawowy' | 'sredni' | 'wysoki';

export const pricing = {
  /** Stawki robocizny za jednostkę (zł netto). */
  labor: {
    wodKanPoint: 1000, // zł/punkt - POTWIERDZONE PRZEZ KLIENTA
    coNewPoint: 1000, // zł/punkt // DO WERYFIKACJI Z KLIENTEM
    radiator: 600, // zł/szt. (wymiana/montaż grzejnika) // DO WERYFIKACJI Z KLIENTEM
    tileDemolition: 40, // zł/m² (demontaż starych płytek) // DO WERYFIKACJI Z KLIENTEM
    rubbleRemoval: 600, // zł ryczałt (wywóz gruzu) // DO WERYFIKACJI Z KLIENTEM
    wallPrep: 50, // zł/m² (wyrównanie/przygotowanie ścian) // DO WERYFIKACJI Z KLIENTEM
    waterproofing: 50, // zł/m² (hydroizolacja podłogi) // DO WERYFIKACJI Z KLIENTEM
  },

  /** Układanie płytek wg formatu (zł/m²). */
  tiling: {
    standard: 150, // do 60x60 // DO WERYFIKACJI Z KLIENTEM
    duzy: 220, // > 60x60 // DO WERYFIKACJI Z KLIENTEM
    mozaika: 250, // mozaika // DO WERYFIKACJI Z KLIENTEM
  } satisfies Record<TileFormat, number>,

  /** Dodatki o stałej cenie (zł/szt.). */
  addonsFixed: {
    stelazWc: 700, // stelaż WC podwieszany + miska // DO WERYFIKACJI Z KLIENTEM
    odplywLiniowy: 900, // odpływ liniowy // DO WERYFIKACJI Z KLIENTEM
    kabinaBrodzik: 600, // kabina / brodzik // DO WERYFIKACJI Z KLIENTEM
    wannaZabudowa: 900, // wanna z zabudową // DO WERYFIKACJI Z KLIENTEM
    umywalkaSzafka: 450, // umywalka z szafką i baterią // DO WERYFIKACJI Z KLIENTEM
    grzejnikLazienkowy: 450, // grzejnik łazienkowy (drabinkowy) // DO WERYFIKACJI Z KLIENTEM
  },

  /** Dodatki liczone za m² (odnoszone do powierzchni podłogi). */
  addonsPerM2: {
    sufitGk: 150, // sufit podwieszany GK // DO WERYFIKACJI Z KLIENTEM
    ogrzewaniePodlogowe: 180, // ogrzewanie podłogowe wodne // DO WERYFIKACJI Z KLIENTEM
  },

  /** Materiały (płytki + chemia budowlana) za m² powierzchni płytek. */
  materialsPerM2: {
    podstawowy: 120, // DO WERYFIKACJI Z KLIENTEM
    sredni: 220, // DO WERYFIKACJI Z KLIENTEM
    wysoki: 400, // DO WERYFIKACJI Z KLIENTEM
  } satisfies Record<MaterialStandard, number>,

  /** Parametry ogólne. */
  config: {
    laborPerDay: 1500, // ok. 1 dzień roboczy na każde 1500 zł robocizny // DO WERYFIKACJI
    minDays: 2, // minimalny czas realizacji // DO WERYFIKACJI
    spread: 0.15, // widełki wyniku ±15%
    vatDefault: 8, // % - domyślnie 8% dla remontów lokali mieszkalnych // DO WERYFIKACJI
    vatAlt: 23, // % - stawka alternatywna // DO WERYFIKACJI
  },
} as const;

export type Pricing = typeof pricing;
