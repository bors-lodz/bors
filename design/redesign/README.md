# Redesign strony głównej BORS - wersja „połączenie”

`strona-glowna.html` - statyczna makieta (otwórz w przeglądarce lub VS Code Live Preview).
Źródło: canvas Design w Claude (opcje A/B/C + wersja połączona).

## Kierunek
- Baza: „Rzemiosło / editorial” (opcja A) + schemat instalacji w hero (B) + elementy konwersji (C).
- Fonty: Fraunces (display), Instrument Sans (tekst), JetBrains Mono (etykiety).
- Paleta: papier #f3ede3, piasek #e9dfcf, fuga #d6c9b4, grafit #17262a, petrol #0e4650, miedź #a8521f, jasna miedź #e8a27a (na ciemnym).

## Wdrożenie do Astro (do zrobienia)
- Tokeny kolorów/fontów → `src/styles/global.css` (`@theme`), fonty przez @fontsource (fraunces, instrument-sans, jetbrains-mono) zamiast Google Fonts.
- Sekcje → `src/pages/index.astro`; Header/Footer → `src/components/`.
- Usługi z `src/data/services.ts` (linki `/uslugi/<slug>`), dane z `src/config/site.ts`.
- Mini-kalkulator: pola są makietą (suwak nie aktualizuje wartości) - podpiąć pod `src/lib/estimate.ts` lub linkować do `/kalkulator`.
- Formularz → istniejący `ContactForm.astro` (Web3Forms).
- Placeholdery `[DO UZUPEŁNIENIA]`: opinie, zdjęcia realizacji, kwoty poza potwierdzonym 1000 zł netto/punkt wod-kan.
