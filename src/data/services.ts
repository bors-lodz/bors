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
    title: 'Remont łazienki Łódź - kompleksowo „pod klucz” | BORS',
    description:
      'Kompleksowe remonty łazienek w Łodzi: instalacje wod-kan, hydroizolacja, glazura i terakota, biały montaż. Bezpłatne oględziny i wycena. Policz koszt w kalkulatorze.',
    lead: 'Remontujemy łazienki kompleksowo - od demontażu starej zabudowy, przez instalacje i hydroizolację, po układanie płytek i montaż armatury. Pracujemy jedną ekipą od początku do końca, dzięki czemu nie musisz koordynować kilku fachowców.',
    scope: [
      'Demontaż starej glazury, armatury i zabudowy',
      'Przeróbki i nowe instalacje wodno-kanalizacyjne',
      'Montaż stelaży podtynkowych WC',
      'Wyrównanie i przygotowanie ścian oraz podłóg',
      'Hydroizolacja pomieszczeń mokrych',
      'Układanie glazury i terakoty (również duży format)',
      'Montaż odpływów liniowych, brodzików i kabin',
      'Biały montaż: WC, umywalki, baterie, grzejnik łazienkowy',
      'Opcjonalnie: sufit podwieszany GK, malowanie, ogrzewanie podłogowe',
    ],
    faq: [
      {
        q: 'Ile trwa remont łazienki?',
        a: 'Standardowa łazienka to zwykle od kilku do kilkunastu dni roboczych, zależnie od metrażu i zakresu prac. Orientacyjny czas wyliczy nasz kalkulator, a dokładny termin ustalamy po oględzinach.',
      },
      {
        q: 'Czy zajmujecie się wszystkim, czy tylko wybranymi pracami?',
        a: 'Możemy wykonać pełen remont „pod klucz” albo tylko wybrany zakres (np. same instalacje lub samo układanie płytek). To Ty decydujesz, co bierzemy na siebie.',
      },
      {
        q: 'Czy kupujecie materiały?',
        a: 'Możemy pracować w wariancie „tylko robocizna” lub „robocizna + materiały”. W kalkulatorze wybierzesz standard materiałów (podstawowy, średni, wysoki), żeby zobaczyć orientacyjny koszt.',
      },
      {
        q: 'Czy wywozicie gruz po demontażu?',
        a: 'Tak, wywóz gruzu możemy wziąć na siebie - wystarczy zaznaczyć tę opcję w kalkulatorze lub wspomnieć o niej przy wycenie.',
      },
      {
        q: 'Jak wygląda wycena?',
        a: 'Oględziny i wycena są bezpłatne i do niczego nie zobowiązują. Online policzysz orientacyjne widełki, a ostateczną cenę potwierdzamy po obejrzeniu pomieszczenia.',
      },
    ],
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
    title: 'Instalacje wod-kan Łódź - hydraulik | BORS',
    description:
      'Instalacje wodno-kanalizacyjne w Łodzi: nowe punkty, wymiana rur, przeróbki wody i kanalizacji. Hydraulik z bezpłatną wyceną. Policz koszt online.',
    lead: 'Wykonujemy i przerabiamy instalacje wodno-kanalizacyjne - od pojedynczego punktu po kompletne rozprowadzenie w remontowanym mieszkaniu. Rozliczamy się od punktu przyłączeniowego, więc koszt jest przejrzysty.',
    scope: [
      'Nowe punkty wod-kan (woda zimna, ciepła, odpływ)',
      'Wymiana starych rur stalowych i żeliwnych',
      'Przeróbki i przesunięcia istniejących punktów',
      'Podejścia pod pralkę, zmywarkę, umywalkę, WC',
      'Montaż stelaży podtynkowych i odpływów liniowych',
      'Próby szczelności instalacji',
    ],
    faq: [
      {
        q: 'Ile kosztuje jeden punkt wod-kan?',
        a: 'Stawka za punkt liczona od miejsca przyłączenia to 1000 zł netto. Ostateczny koszt zależy od liczby punktów i zakresu przeróbek - policzysz to w kalkulatorze.',
      },
      {
        q: 'Co to jest „punkt” wod-kan?',
        a: 'Punkt to pojedyncze podejście instalacyjne do urządzenia, np. do umywalki, WC, prysznica, pralki czy zmywarki. Łazienka to zwykle kilka punktów.',
      },
      {
        q: 'Czy wymieniacie stare rury?',
        a: 'Tak, wymieniamy wyeksploatowane instalacje na nowe (np. z tworzywa lub miedzi) i wykonujemy próby szczelności.',
      },
      {
        q: 'Czy robicie instalacje przy okazji remontu łazienki?',
        a: 'Tak - najczęściej instalacje wod-kan wykonujemy w ramach kompleksowego remontu łazienki, ale podejmujemy się też samych prac instalacyjnych.',
      },
    ],
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
    title: 'Instalacje c.o. Łódź - grzejniki, ogrzewanie podłogowe | BORS',
    description:
      'Instalacje grzewcze (c.o.) w Łodzi: wymiana i montaż grzejników, nowe punkty c.o., wodne ogrzewanie podłogowe. Bezpłatna wycena. Policz koszt online.',
    lead: 'Montujemy i wymieniamy grzejniki, prowadzimy nowe punkty centralnego ogrzewania i wykonujemy wodne ogrzewanie podłogowe. Zajmiemy się zarówno pojedynczą wymianą grzejnika, jak i instalacją w całym mieszkaniu.',
    scope: [
      'Wymiana i montaż grzejników',
      'Nowe punkty centralnego ogrzewania',
      'Przeróbki istniejącej instalacji c.o.',
      'Wodne ogrzewanie podłogowe',
      'Montaż grzejników łazienkowych (drabinkowych)',
      'Odpowietrzenie i napełnienie instalacji',
    ],
    faq: [
      {
        q: 'Ile kosztuje wymiana grzejnika?',
        a: 'Orientacyjna stawka montażu lub wymiany grzejnika to 600 zł netto za sztukę. Dokładny koszt zależy od liczby grzejników i ewentualnych przeróbek instalacji - sprawdź w kalkulatorze.',
      },
      {
        q: 'Czy robicie ogrzewanie podłogowe?',
        a: 'Tak, wykonujemy wodne ogrzewanie podłogowe, najczęściej przy okazji remontu łazienki lub mieszkania.',
      },
      {
        q: 'Czy wymienicie pojedynczy grzejnik?',
        a: 'Tak, podejmujemy się też drobnych prac, takich jak wymiana jednego czy dwóch grzejników.',
      },
      {
        q: 'Czy montujecie grzejniki łazienkowe?',
        a: 'Tak, montujemy grzejniki drabinkowe. To częsty element remontu łazienki - możesz go dodać w kalkulatorze.',
      },
    ],
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
    title: 'Glazurnik Łódź Polesie - glazura i terakota | BORS',
    description:
      'Układanie glazury i terakoty w Łodzi: płytki standardowe, duży format i mozaika. Precyzyjnie i równo. Bezpłatna wycena. Policz koszt w kalkulatorze.',
    lead: 'Układamy glazurę i terakotę - od klasycznych płytek, przez duży format, po mozaikę. Dbamy o równe fugi, dopasowanie wzoru i staranne wykończenie detali.',
    scope: [
      'Przygotowanie i wyrównanie podłoży',
      'Układanie płytek standardowych (do 60×60)',
      'Układanie płytek wielkoformatowych (>60×60)',
      'Układanie mozaiki',
      'Fugowanie i silikonowanie',
      'Wykończenie narożników i detali',
    ],
    faq: [
      {
        q: 'Ile kosztuje ułożenie płytek za m²?',
        a: 'Orientacyjnie: płytki standardowe od 150 zł/m², duży format od 220 zł/m², mozaika od 250 zł/m² (robocizna, netto). Dokładny koszt zależy od formatu i powierzchni - policzysz go w kalkulatorze.',
      },
      {
        q: 'Czy układacie duży format i mozaikę?',
        a: 'Tak. Płytki wielkoformatowe i mozaika wymagają większej precyzji i dłuższego czasu, dlatego ich stawka jest wyższa niż płytek standardowych.',
      },
      {
        q: 'Czy przygotowujecie ściany przed układaniem?',
        a: 'Tak, w razie potrzeby wyrównujemy i przygotowujemy podłoże - to warunek równego i trwałego ułożenia płytek.',
      },
      {
        q: 'Czy pomożecie policzyć, ile płytek potrzeba?',
        a: 'Jeśli nie znasz powierzchni ścian, w kalkulatorze podasz obwód pomieszczenia i wysokość płytek, a my policzymy metraż. Dokładny obmiar wykonujemy podczas oględzin.',
      },
    ],
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
    title: 'Remonty i wykończenia mieszkań Łódź | BORS',
    description:
      'Remonty i wykończenia mieszkań w Łodzi: sufity GK, gładzie, malowanie, zabudowy. Kompleksowo, jedną ekipą. Bezpłatna wycena. Policz koszt online.',
    lead: 'Zajmujemy się remontami i wykończeniami wnętrz - od zabudów z płyt gipsowo-kartonowych i gładzi, przez malowanie, po kompleksowe wykończenie mieszkania. Łączymy prace wykończeniowe z instalacjami, więc całość prowadzi jedna ekipa.',
    scope: [
      'Sufity podwieszane z płyt GK',
      'Zabudowy i ścianki działowe GK',
      'Gładzie gipsowe i przygotowanie ścian',
      'Malowanie ścian i sufitów',
      'Montaż listew i detali wykończeniowych',
      'Koordynacja z pracami instalacyjnymi i glazurniczymi',
    ],
    faq: [
      {
        q: 'Czy wykańczacie całe mieszkania?',
        a: 'Tak, możemy przeprowadzić kompleksowy remont i wykończenie mieszkania, łącząc prace instalacyjne, glazurnicze i wykończeniowe.',
      },
      {
        q: 'Czy robicie sufity podwieszane i zabudowy GK?',
        a: 'Tak, wykonujemy sufity podwieszane, ścianki i zabudowy z płyt gipsowo-kartonowych.',
      },
      {
        q: 'Czy malujecie po remoncie?',
        a: 'Tak, malowanie ścian i sufitów możemy wykonać jako element wykończenia - zaznaczysz tę opcję w kalkulatorze.',
      },
      {
        q: 'Jak otrzymać wycenę takiego remontu?',
        a: 'Najlepiej umówić bezpłatne oględziny - przy pracach wykończeniowych zakres bywa indywidualny. Orientacyjny koszt niektórych prac policzysz też w kalkulatorze.',
      },
    ],
  },
];

export const servicesByHome = services.filter((s) => s.featuredOnHome);
export const getService = (slug: string) => services.find((s) => s.slug === slug);
