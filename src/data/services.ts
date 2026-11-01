/**
 * Treści usług - jedno źródło dla: kafli na stronie głównej, podstron /uslugi/*,
 * nawigacji i danych strukturalnych FAQ (JSON-LD).
 * Pełny zakres prac i FAQ dla każdej usługi uzupełniany jest na etapie podstron.
 */

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  /** kategoria przekazywana do kalkulatora w parametrze ?prace= */
  calcCategory: string;
  icon: 'bath' | 'pipe' | 'radiator' | 'tiles' | 'trowel';
  navTitle: string;
  cardTitle: string;
  cardDesc: string;
  featuredOnHome: boolean;
  // --- pola pełnej treści podstrony (uzupełniane na etapie 5) ---
  title?: string;
  description?: string;
  lead?: string;
  scope?: string[];
  faq?: Faq[];
};

export const services: Service[] = [
  {
    slug: 'remonty-lazienek',
    calcCategory: 'lazienka',
    icon: 'bath',
    navTitle: 'Remonty łazienek',
    cardTitle: 'Kompleksowe remonty łazienek',
    cardDesc:
      'Od demontażu po gotową łazienkę „pod klucz”: instalacje, hydroizolacja, glazura, biały montaż.',
    featuredOnHome: true,
  },
  {
    slug: 'instalacje-wodno-kanalizacyjne',
    calcCategory: 'wod-kan',
    icon: 'pipe',
    navTitle: 'Instalacje wod-kan',
    cardTitle: 'Instalacje wodno-kanalizacyjne',
    cardDesc:
      'Nowe przyłącza i punkty, wymiana rur, przeróbki instalacji wody i kanalizacji.',
    featuredOnHome: true,
  },
  {
    slug: 'instalacje-grzewcze',
    calcCategory: 'co',
    icon: 'radiator',
    navTitle: 'Instalacje c.o.',
    cardTitle: 'Instalacje grzewcze (c.o.)',
    cardDesc:
      'Montaż i wymiana grzejników, nowe punkty c.o., ogrzewanie podłogowe wodne.',
    featuredOnHome: true,
  },
  {
    slug: 'glazura-terakota',
    calcCategory: 'glazura',
    icon: 'tiles',
    navTitle: 'Glazura i terakota',
    cardTitle: 'Glazura i terakota',
    cardDesc:
      'Układanie płytek: standard, duży format i mozaika. Precyzyjnie i równo.',
    featuredOnHome: true,
  },
  {
    slug: 'remonty-wykonczenia',
    calcCategory: 'inne',
    icon: 'trowel',
    navTitle: 'Remonty i wykończenia',
    cardTitle: 'Remonty i wykończenia',
    cardDesc:
      'Sufity GK, gładzie, malowanie, zabudowy - kompleksowe wykończenia mieszkań.',
    featuredOnHome: false,
  },
];

export const servicesByHome = services.filter((s) => s.featuredOnHome);
export const getService = (slug: string) => services.find((s) => s.slug === slug);
