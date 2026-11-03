/**
 * Galeria realizacji. DO UZUPEŁNIENIA: prawdziwe zdjęcia prac BORS.
 *
 * Jak dodać zdjęcia:
 *  1. Wrzuć pliki do katalogu  public/realizacje/  (np. lazienka-polesie-1.jpg)
 *  2. Dopisz wpisy do tablicy `realizacje` poniżej.
 *  3. Zalecane: zdjęcia ~1600px dłuższego boku, format JPG/WEBP.
 *
 * NIE używamy zdjęć stockowych udających nasze realizacje - tu trafiają wyłącznie
 * autentyczne zdjęcia wykonanych prac.
 */

export type Realizacja = {
  src: string; // ścieżka względem /public, np. '/realizacje/lazienka-1.jpg'
  alt: string; // opis dla dostępności i SEO
  category: 'Łazienki' | 'Instalacje' | 'Glazura' | 'Wykończenia';
  thumb?: string; // opcjonalna miniatura; domyślnie = src
};

export const realizacje: Realizacja[] = [
  {
    src: '/realizacje/schody-zewnetrzne-gres-drewnopodobny.jpg',
    alt: 'Schody zewnętrzne wyłożone gresem drewnopodobnym - realizacja BORS, Łódź',
    category: 'Glazura',
  },
  {
    src: '/realizacje/balkon-gres-drewnopodobny.jpg',
    alt: 'Balkon wyłożony gresem drewnopodobnym - realizacja BORS, Łódź',
    category: 'Glazura',
  },
];

export const kategorieRealizacji = [...new Set(realizacje.map((r) => r.category))];
