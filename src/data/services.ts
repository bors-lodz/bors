/**
 * Treści usług - jedno źródło dla: podstron /uslugi/*, nawigacji i danych FAQ (JSON-LD).
 * Firmę prowadzi jedna osoba - teksty w pierwszej osobie liczby pojedynczej.
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
      'Od demontażu po gotową łazienkę: instalacje, hydroizolacja, glazura, biały montaż.',
    featuredOnHome: true,
    title: 'Remont łazienki Łódź - kompleksowo | BORS',
    description:
      'Kompleksowe remonty łazienek w Łodzi: instalacje wod-kan, hydroizolacja, glazura i terakota, biały montaż. Bezpłatne oględziny i wycena. Policz koszt w kalkulatorze.',
    lead: 'Remontuję łazienki kompleksowo - od demontażu starej zabudowy, przez instalacje i hydroizolację, po układanie płytek i montaż armatury. Całość prowadzę sam, od początku do końca, dzięki czemu nie musisz koordynować kilku fachowców.',
    scope: [
      'Demontaż starej glazury, armatury i zabudowy',
      'Przeróbki i nowe instalacje wodno-kanalizacyjne',
      'Montaż stelaży podtynkowych WC',
      'Wyrównanie i przygotowanie ścian oraz podłóg',
      'Hydroizolacja pomieszczeń mokrych',
      'Układanie glazury i terakoty',
      'Montaż odpływów liniowych, brodzików i kabin',
      'Biały montaż: WC, umywalki, baterie, grzejnik łazienkowy',
      'Opcjonalnie: ogrzewanie podłogowe wodne',
    ],
    faq: [
      {
        q: 'Ile trwa remont łazienki?',
        a: 'Standardowa łazienka to zwykle od kilku do kilkunastu dni roboczych, zależnie od metrażu i zakresu prac. Orientacyjny czas wyliczy kalkulator, a dokładny termin ustalam po oględzinach.',
      },
      {
        q: 'Czy robisz wszystko, czy tylko wybrane prace?',
        a: 'Mogę wykonać pełen, kompleksowy remont albo tylko wybrany zakres (np. same instalacje lub samo układanie płytek). To Ty decydujesz, co biorę na siebie.',
      },
      {
        q: 'Czy kupujesz materiały?',
        a: 'Mogę pracować w wariancie „tylko robocizna” lub „robocizna + materiały”. W kalkulatorze wybierzesz standard materiałów (podstawowy, średni, wysoki), żeby zobaczyć orientacyjny koszt.',
      },
      {
        q: 'Czy wywozisz gruz po demontażu?',
        a: 'Tak, wywóz gruzu mogę wziąć na siebie - wystarczy zaznaczyć tę opcję w kalkulatorze lub wspomnieć o niej przy wycenie.',
      },
      {
        q: 'Jak wygląda wycena?',
        a: 'Oględziny i wycena są bezpłatne i do niczego nie zobowiązują. Online policzysz orientacyjne widełki, a ostateczną cenę potwierdzam po obejrzeniu pomieszczenia.',
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
      'Instalacje wodno-kanalizacyjne w Łodzi: nowe punkty, wymiana rur, przeróbki wody i kanalizacji w łazience i kuchni. Hydraulik z bezpłatną wyceną. Policz koszt online.',
    lead: 'Wykonuję i przerabiam instalacje wodno-kanalizacyjne - od pojedynczego punktu po kompletne rozprowadzenie w remontowanej łazience czy kuchni. Rozliczam się od punktu przyłączeniowego, więc koszt jest przejrzysty.',
    scope: [
      'Nowe punkty wod-kan (woda zimna, ciepła, odpływ)',
      'Wymiana starych rur stalowych i żeliwnych',
      'Przeróbki i przesunięcia istniejących punktów',
      'Podejścia pod pralkę, zmywarkę, umywalkę, WC',
      'Podłączenia w łazience i kuchni',
      'Montaż stelaży podtynkowych i odpływów liniowych',
      'Próby szczelności instalacji',
    ],
    faq: [
      {
        q: 'Ile kosztuje jeden punkt wod-kan?',
        a: 'Orientacyjnie od 800 zł netto za punkt, liczony od miejsca przyłączenia. Ostateczny koszt zależy od liczby punktów i zakresu przeróbek - policzysz to w kalkulatorze.',
      },
      {
        q: 'Co to jest „punkt” wod-kan?',
        a: 'Punkt to pojedyncze podejście instalacyjne do urządzenia, np. do umywalki, WC, prysznica, pralki czy zmywarki. Łazienka to zwykle kilka punktów.',
      },
      {
        q: 'Czy wymieniasz stare rury?',
        a: 'Tak, wymieniam wyeksploatowane instalacje na nowe (np. z tworzywa lub miedzi) i wykonuję próby szczelności.',
      },
      {
        q: 'Czy robisz instalacje przy okazji remontu łazienki lub kuchni?',
        a: 'Tak - najczęściej instalacje wod-kan wykonuję w ramach remontu łazienki lub podłączeń w kuchni, ale podejmuję się też samych prac instalacyjnych.',
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
    lead: 'Montuję i wymieniam grzejniki, prowadzę nowe punkty centralnego ogrzewania i wykonuję wodne ogrzewanie podłogowe. Zajmę się zarówno pojedynczą wymianą grzejnika, jak i instalacją w całym mieszkaniu.',
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
        a: 'Orientacyjna stawka montażu lub wymiany grzejnika to od 450 zł netto za sztukę. Dokładny koszt zależy od liczby grzejników i ewentualnych przeróbek instalacji - sprawdź w kalkulatorze.',
      },
      {
        q: 'Czy robisz ogrzewanie podłogowe?',
        a: 'Tak, wykonuję wodne ogrzewanie podłogowe, najczęściej przy okazji remontu łazienki lub mieszkania.',
      },
      {
        q: 'Czy wymienisz pojedynczy grzejnik?',
        a: 'Tak, podejmuję się też drobnych prac, takich jak wymiana jednego czy dwóch grzejników.',
      },
      {
        q: 'Czy montujesz grzejniki łazienkowe?',
        a: 'Tak, montuję grzejniki drabinkowe. To częsty element remontu łazienki - możesz go dodać w kalkulatorze.',
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
      'Układanie płytek w łazience i kuchni: standard i mozaika. Precyzyjnie i równo.',
    featuredOnHome: true,
    title: 'Glazurnik Łódź - glazura i terakota | BORS',
    description:
      'Układanie glazury i terakoty w Łodzi: płytki w łazience i kuchni, standard i mozaika. Precyzyjnie i równo. Bezpłatna wycena. Policz koszt w kalkulatorze.',
    lead: 'Układam glazurę i terakotę w łazienkach i kuchniach - od klasycznych płytek po mozaikę. Dbam o równe fugi, dopasowanie wzoru i staranne wykończenie detali.',
    scope: [
      'Przygotowanie i wyrównanie podłoży',
      'Układanie płytek ściennych i podłogowych',
      'Układanie płytek w łazience i kuchni',
      'Układanie mozaiki',
      'Fugowanie i silikonowanie',
      'Wykończenie narożników i detali',
    ],
    faq: [
      {
        q: 'Ile kosztuje ułożenie płytek za m²?',
        a: 'Orientacyjnie: płytki standardowe od 160 zł/m², mozaika od 280 zł/m² (robocizna, netto). Dokładny koszt zależy od formatu i powierzchni - policzysz go w kalkulatorze.',
      },
      {
        q: 'Czy układasz płytki w kuchni?',
        a: 'Tak - oprócz łazienek układam glazurę i terakotę również w kuchniach (podłogi, ściany, fartuch nad blatem).',
      },
      {
        q: 'Czy przygotowujesz ściany przed układaniem?',
        a: 'Tak, w razie potrzeby wyrównuję i przygotowuję podłoże - to warunek równego i trwałego ułożenia płytek.',
      },
      {
        q: 'Czy pomożesz policzyć, ile płytek potrzeba?',
        a: 'Jeśli nie znasz powierzchni ścian, w kalkulatorze podasz obwód pomieszczenia i wysokość płytek, a pole policzy się samo. Dokładny obmiar wykonuję podczas oględzin.',
      },
    ],
  },
];

export const servicesByHome = services.filter((s) => s.featuredOnHome);
export const getService = (slug: string) => services.find((s) => s.slug === slug);
