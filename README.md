# Strona BORS

Statyczna strona firmy **BORS** (instalacje wod-kan, c.o., remonty, glazura - Łódź).
Zbudowana w Astro + Tailwind CSS, hostowana na GitHub Pages.

---

## 1. Uruchomienie lokalne

Wymagany [Node.js](https://nodejs.org) (wersja 20+).

```bash
npm install     # jednorazowo - instalacja zależności
npm run dev     # podgląd na żywo: http://localhost:4321
```

Inne komendy:

```bash
npm run build   # build produkcyjny do folderu dist/
npm run preview # podgląd zbudowanej wersji
npm run test    # testy kalkulatora
```

---

## 2. Jak zmienić stawki (cennik kalkulatora)

Wszystkie ceny są w jednym pliku:

```
src/config/pricing.ts
```

Każda pozycja ma komentarz `// DO WERYFIKACJI Z KLIENTEM`. Zmieniasz tylko liczby -
logika przeliczeń jest osobno (`src/lib/estimate.ts`) i nie trzeba jej ruszać.

Stawki są ustawione na poziomie **rynkowym 2026** (na podstawie researchu cenników) i oznaczone
`// DO WERYFIKACJI Z KLIENTEM` - przed finalnym uruchomieniem potwierdź je z wykonawcą.

Najważniejsze grupy w `pricing.ts`:
- `labor` - stawki robocizny (punkt wod-kan, punkt c.o., grzejnik, demontaż, hydroizolacja...),
- `tiling` - układanie płytek wg formatu (w kalkulatorze widoczne: standard i mozaika),
- `addonsFixed` - dodatki o stałej cenie (stelaż, odpływ liniowy, kabina...),
- `addonsPerM2` - dodatki za m² (ogrzewanie podłogowe; `sufitGk` jest w modelu, ale ukryty w kalkulatorze),
- `materialsPerM2` - materiały (standard podstawowy/średni/wysoki),
- `config` - VAT (domyślnie 8%), czas realizacji, widełki ±15%.

Po zmianie stawek **uruchom `npm run test`** - testy porównują liczby, więc zaktualizuj w nich
oczekiwane wartości (test pokaże, jaka wyszła nowa kwota).

---

## 3. Jak zmienić dane firmy i kontakt

Plik:

```
src/config/site.ts
```

Tu ustawiasz telefon, godziny pracy, obszar działania i datę założenia.
Telefon (`+48 603 378 228`) i godziny (`9:00-17:00`) są już uzupełnione.

**Uwaga:** adres firmy jest w configu, ale **świadomie NIE jest pokazywany** na stronie (to jednoosobowa
działalność prowadzona z domu). E-mail również nie jest publikowany - kontakt idzie przez telefon
i formularz (Web3Forms wysyła zgłoszenia na Twoją skrzynkę, patrz §4).

---

## 4. Klucz formularza kontaktowego (Web3Forms)

Formularz używa darmowej usługi [Web3Forms](https://web3forms.com) (bez cookies, bez reCAPTCHA).

1. Wejdź na https://web3forms.com, podaj swój e-mail i odbierz **Access Key**.
2. **Lokalnie:** skopiuj `.env.example` do `.env` i wpisz klucz:
   ```
   PUBLIC_WEB3FORMS_KEY=twoj-klucz-z-web3forms
   ```
3. **Na GitHub (produkcja):** w repozytorium wejdź w
   `Settings → Secrets and variables → Actions → New repository secret`
   i dodaj sekret o nazwie `PUBLIC_WEB3FORMS_KEY` z Twoim kluczem.

Dopóki klucz nie jest ustawiony, formularz pokazuje komunikat, że nie jest skonfigurowany
(dane kontaktowe telefon/e-mail działają niezależnie).

---

## 5. Podłączenie domeny (GitHub Pages)

Strona wdraża się automatycznie przy każdym `push` na gałąź `main`
(konfiguracja: `.github/workflows/deploy.yml`).

**Krok 1. Włącz Pages:** w repo `Settings → Pages → Build and deployment → Source: GitHub Actions`.

**Krok 2. Ustaw domenę w kodzie** (3 miejsca, wpisz docelową domenę zamiast `bors-lodz.pl`):
- `astro.config.mjs` → pole `site`
- `public/CNAME` → sama domena (np. `bors-lodz.pl`)
- `public/robots.txt` → adres w linii `Sitemap:`

**Krok 3. Ustaw domenę w GitHub:** `Settings → Pages → Custom domain` → wpisz domenę i zapisz.

**Krok 4. Rekordy DNS** u rejestratora domeny:

- Dla domeny z „www" (subdomena) - rekord **CNAME**:
  ```
  CNAME   www   <twoj-login>.github.io
  ```
- Dla domeny głównej (apex, np. `bors-lodz.pl`) - rekordy **A** (IPv4):
  ```
  A   @   185.199.108.153
  A   @   185.199.109.153
  A   @   185.199.110.153
  A   @   185.199.111.153
  ```
  oraz opcjonalnie **AAAA** (IPv6):
  ```
  AAAA   @   2606:50c0:8000::153
  AAAA   @   2606:50c0:8001::153
  AAAA   @   2606:50c0:8002::153
  AAAA   @   2606:50c0:8003::153
  ```

Po propagacji DNS zaznacz w GitHub `Enforce HTTPS`.
(Adresy IP GitHub Pages warto potwierdzić w [dokumentacji GitHub](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).)

---

## 6. Zdjęcia realizacji

1. Wrzuć pliki do `public/realizacje/`.
2. Dopisz wpisy w `src/data/realizacje.ts` (ścieżka, opis `alt`, kategoria).
3. Galeria z powiększaniem (lightbox) pojawi się automatycznie na `/realizacje`.

Używaj wyłącznie autentycznych zdjęć wykonanych prac - bez zdjęć stockowych.

---

## 7. Lista placeholderów DO UZUPEŁNIENIA

Przed publikacją uzupełnij:

| Placeholder / pozycja | Gdzie | Status / co zrobić |
|---|---|---|
| telefon, godziny | `src/config/site.ts` | ✅ uzupełnione (`+48 603 378 228`, `9:00-17:00`) |
| domena `bors-lodz.pl` | `astro.config.mjs`, `public/CNAME`, `public/robots.txt` | ✅ ustawiona |
| `[WEB3FORMS_KEY]` | `.env` / sekret GitHub | klucz z web3forms.com (patrz §4) |
| stawki `// DO WERYFIKACJI Z KLIENTEM` | `src/config/pricing.ts` | rynkowe 2026 - **potwierdzić z wykonawcą** (po zmianie: `npm run test`) |
| `[DO UZUPEŁNIENIA]` | `src/data/realizacje.ts`, galeria | podpisy/zdjęcia realizacji (dopiero gdy będą prawdziwe) |
| zdjęcia realizacji | `public/realizacje/` + `src/data/realizacje.ts` | autentyczne zdjęcia prac |
| `email` | `src/config/site.ts` | nieujawniany na stronie; ustaw, jeśli kiedyś ma być pokazywany |
| polityka prywatności | `src/pages/polityka-prywatnosci.astro` | realna, minimalna wersja - ewentualnie sprawdzić prawnie |
| bramka pre-launch | `src/components/SiteGate.astro` | przed startem **usuń** `<SiteGate />` z `BaseLayout.astro` (patrz §8) |

---

## 8. Bramka pre-launch (login/hasło)

Na czas przed startem cała strona jest zasłonięta prostą bramką logowania
(`src/components/SiteGate.astro`, wpięta w `BaseLayout.astro`).

- **Dane logowania:** login `bors`, hasło `podglad2026`.
- W kodzie trzymany jest tylko skrót SHA-256 z `login:hasło` (stała `EXPECTED`).
- **Zmiana loginu/hasła:** policz nowy skrót i wklej do `EXPECTED`:
  ```bash
  printf '%s' 'nowylogin:noweHaslo' | shasum -a 256
  ```
- **Wyłączenie bramki na starcie:** usuń linię `<SiteGate />` z `src/layouts/BaseLayout.astro` i zrób commit.

> To ochrona „miękka" (treść jest w statycznym HTML i w publicznym repo) - wystarcza, by przypadkowy
> gość nie klikał po niegotowej stronie, ale nie chroni przed kimś zdeterminowanym.

---

Realizacja: [Skyweb](https://sky-web.pl)
