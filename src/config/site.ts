/**
 * Centralne dane firmy i strony.
 * TU zmieniasz dane kontaktowe, adres, domenę. Placeholdery [...] = DO UZUPEŁNIENIA.
 */

export const site = {
  // --- Domena (PLACEHOLDER do zmiany po zakupie; patrz też astro.config.mjs i public/CNAME) ---
  url: 'https://bors-lodz.pl',

  // --- Nazwa / marka ---
  brand: 'BORS',
  legalName:
    'Przedsiębiorstwo Produkcyjno Budowlano Usługowo Handlowe „BORS”',
  tagline: 'Instalacje i remonty - Łódź i okolice',

  // --- Dane rejestrowe (potwierdzone) ---
  nip: '7271157616',
  regon: '471395172',

  // --- Data założenia (potwierdzona: 1 września 1996) ---
  founded: '1996-09-01',
  foundedYear: 1996,

  // --- Adres (potwierdzony) ---
  address: {
    street: 'ul. Drużynowa 11 lok. 1',
    postalCode: '94-226',
    city: 'Łódź',
    district: 'Polesie',
    region: 'łódzkie',
    country: 'PL',
    // Współrzędne przybliżone dla okolicy ul. Drużynowej - DO WERYFIKACJI (użyj dokładnych z Google Maps)
    geo: { lat: 51.7503, lng: 19.4155 }, // DO WERYFIKACJI
  },

  // --- Kontakt ---
  phone: '+48 603 378 228',
  phoneHref: '+48603378228', // wersja do tel: (bez spacji)
  email: '[EMAIL]', // nieujawniany na stronie - kontakt telefoniczny lub przez formularz
  hours: 'pon.-pt. 9:00-17:00',

  // --- Obszar działania ---
  areaServed: ['Łódź', 'Pabianice', 'Zgierz', 'Aleksandrów Łódzki', 'Konstantynów Łódzki'],

  // --- Formularz ---
  web3formsKey: import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '[WEB3FORMS_KEY]',

  // --- Wykonawca strony (stopka, dofollow) ---
  author: { name: 'Skyweb', url: 'https://sky-web.pl' },

  // --- Link do map (bez osadzonego iframe) ---
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=ul.+Dru%C5%BCynowa+11+94-226+%C5%81%C3%B3d%C5%BA',
} as const;

/** Nawigacja główna. */
export const nav = [
  { label: 'Usługi', href: '/#uslugi' },
  { label: 'Kalkulator', href: '/kalkulator' },
  { label: 'Realizacje', href: '/realizacje' },
  { label: 'Kontakt', href: '/kontakt' },
] as const;

/** Czy mamy prawdziwy numer telefonu (steruje pokazywaniem CTA „zadzwoń”). */
export const hasPhone = !site.phone.startsWith('[');
export const hasEmail = !site.email.startsWith('[');
