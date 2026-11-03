/**
 * CENNIK BORS - jedno źródło prawdy dla kalkulatora.
 * Wszystkie stawki NETTO, Łódź 2026. Zmieniasz TU, bez dotykania logiki (src/lib/estimate.ts).
 *
 * Stawki ustawione na poziomie RYNKOWYM 2026 (research cenników: kb.pl, muratordom.pl,
 * cenauslug.pl, serwisy hydroizolacji/odpływów) - do ostatecznego potwierdzenia z klientem.
 * Każda pozycja z komentarzem // DO WERYFIKACJI Z KLIENTEM.
 */

export type TileFormat = 'standard' | 'duzy' | 'mozaika';
export type MaterialStandard = 'podstawowy' | 'sredni' | 'wysoki';

export const pricing = {
  /** Stawki robocizny za jednostkę (zł netto). */
  labor: {
    wodKanPoint: 800, // zł/punkt (rynek ~770 zł śr.) // DO WERYFIKACJI Z KLIENTEM
    coNewPoint: 500, // zł/punkt c.o. (rynek ~240-260 zł) // DO WERYFIKACJI Z KLIENTEM
    radiator: 450, // zł/szt. montaż/wymiana grzejnika (rynek 300-450) // DO WERYFIKACJI Z KLIENTEM
    tileDemolition: 70, // zł/m² demontaż płytek (rynek 55-100) // DO WERYFIKACJI Z KLIENTEM
    rubbleRemoval: 600, // zł ryczałt wywóz gruzu // DO WERYFIKACJI Z KLIENTEM
    wallPrep: 55, // zł/m² przygotowanie/wyrównanie ścian (rynek 40-60) // DO WERYFIKACJI Z KLIENTEM
    waterproofing: 80, // zł/m² hydroizolacja (rynek 45-120) // DO WERYFIKACJI Z KLIENTEM
  },

  /** Układanie płytek wg formatu (zł/m² robocizny). */
  tiling: {
    standard: 160, // do 60x60 (rynek 110-200) // DO WERYFIKACJI Z KLIENTEM
    duzy: 220, // > 60x60 (niewidoczne w kalkulatorze - zostawione w modelu) // DO WERYFIKACJI Z KLIENTEM
    mozaika: 280, // mozaika (rynek 240-400) // DO WERYFIKACJI Z KLIENTEM
  } satisfies Record<TileFormat, number>,

  /** Dodatki o stałej cenie (zł/szt. robocizny). */
  addonsFixed: {
    stelazWc: 550, // stelaż WC podwieszany + miska (rynek 330-650) // DO WERYFIKACJI Z KLIENTEM
    odplywLiniowy: 700, // odpływ liniowy (rynek 500-1200) // DO WERYFIKACJI Z KLIENTEM
    kabinaBrodzik: 600, // kabina / brodzik (rynek 470-600) // DO WERYFIKACJI Z KLIENTEM
    wannaZabudowa: 750, // wanna z zabudową (rynek 600-800) // DO WERYFIKACJI Z KLIENTEM
    umywalkaSzafka: 450, // umywalka z szafką i baterią // DO WERYFIKACJI Z KLIENTEM
    grzejnikLazienkowy: 450, // grzejnik łazienkowy (drabinkowy) // DO WERYFIKACJI Z KLIENTEM
  },

  /** Dodatki liczone za m² (odnoszone do powierzchni podłogi). */
  addonsPerM2: {
    sufitGk: 150, // sufit podwieszany GK (niewidoczne w kalkulatorze - w modelu) // DO WERYFIKACJI Z KLIENTEM
    ogrzewaniePodlogowe: 120, // ogrzewanie podłogowe wodne (rynek 80-150) // DO WERYFIKACJI Z KLIENTEM
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
