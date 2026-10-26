# Respawn After Bedtime

## Projektbeskrivning

Respawn After Bedtime är en fiktiv gamingcommunity för vuxna 30+ som vill hitta spelkompisar, diskutera spel och umgås med andra gamers.

Webbplatsen har utvecklats som en del av kursen **Introduktion till webbutveckling med HTML, CSS och JavaScript, 15 hp** vid Mittuniversitetet.

Webbplatsen är publicerad via GitHub Pages och består av fem sammanlänkade sidor.

## Tekniker

- HTML5 för webbplatsens struktur och innehåll.
- CSS3 för design och responsiv layout med Flexbox, Grid och media queries.
- JavaScript för interaktiva funktioner, formulärvalidering och dynamiskt innehåll.
- JSON för lagring av spelinformation.
- RAWG API för hämtning av spelinformation.
- Node.js för att köra ett separat skript som uppdaterar den lokala JSON-filen.
- Git och GitHub för versionshantering.
- GitHub Pages för publicering av webbplatsen.

## Funktioner

- Responsiv design med Mobile First.
- Navigation anpassad för mobil och desktop, inklusive hamburgermeny.
- Fem sammanlänkade HTML-sidor.
- Spelkort som skapas dynamiskt med JavaScript.
- Spelinformation som hämtas från en lokal JSON-fil med `fetch()`.
- Betyg och releasedatum från RAWG API.
- Klickbara spelkort med länkar till spelens officiella webbplatser.
- Kontaktformulär med JavaScript-validering av obligatoriska fält och e-postadress.
- Felmeddelanden och visuell återkoppling vid formulärvalidering.
- Discord-länkar för att gå med i communityt.
- Semantisk HTML och stöd för tangentbordsnavigation.

Kontaktformuläret är en demonstration och skickar inga riktiga meddelanden. Kontaktadressen på webbplatsen är fiktiv.

## Projektstruktur

- `index.html` – startsida.
- `games.html` – spelsida.
- `community.html` – communitysida.
- `join.html` – sida med information om hur man går med.
- `contact.html` – kontaktsida.
- `css/` – CSS-filer.
- `js/` – JavaScript-filer.
- `data/` – lokal JSON-data.
- `images/` – bilder och ikoner.
- `scripts/` – skript för uppdatering av spelinformation.
- `design/` – designskisser och mockups.
- `report/` – projektrapport.

## Köra projektet lokalt

1. Klona projektet från GitHub.
2. Öppna projektmappen i Visual Studio Code.
3. Starta `index.html` med tillägget Live Server.

Spelinformationen finns redan sparad i `data/games.json`. Ingen API-nyckel behövs för att visa webbplatsen.

För att uppdatera spelinformationen krävs Node.js och en egen API-nyckel från RAWG, som anges i en lokal `.env`-fil. API-nyckeln ingår inte i Git-repositoriet.

Uppdateringsskriptet körs med:

```bash
node --env-file=.env scripts/update_games.js
```

## Testning och kvalitetssäkring

- HTML har validerats med W3C:s HTML-validator utan fel.
- CSS har validerats med W3C:s CSS-validator utan fel. Varningar för vissa CSS-egenskaper och webbläsarspecifika prefix kvarstår.
- Samtliga fem sidor har uppnått 100 poäng i kategorin Accessibility vid testning med Lighthouse i mobilläge.
- Responsiviteten har kontrollerats på olika skärmstorlekar, inklusive 320 px bredd.
- Tangentbordsnavigation och mobilmeny har testats.
- Kontaktformulärets validering har testats.
- Spelkort och externa länkar har testats.
- Webbplatsens dynamiska spelkort har kontrollerats efter publicering på GitHub Pages.

## Att göra

- [x] Färdigställa startsidans återstående sektioner.
- [x] Färdigställa webbplatsens undersidor.
- [x] Implementera och testa formulärvalidering.
- [x] Kontrollera alt-texter och övrig tillgänglighet.
- [x] Testa responsiviteten på olika skärmstorlekar.
- [x] Validera HTML och CSS med W3C:s verktyg.
- [x] Publicera webbplatsen via GitHub Pages.
- [x] Lägga till länk till den publicerade webbplatsen.
- [ ] Färdigställa projektrapporten.

## Publicerad webbplats

[Respawn After Bedtime – GitHub Pages](https://miem85.github.io/respawn-after-bedtime/)

## Författare

Mikael Emanuelsson, student vid Mittuniversitetets webbutvecklarprogram.
