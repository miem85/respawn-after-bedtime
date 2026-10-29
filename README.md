# Respawn After Bedtime

Respawn After Bedtime är en responsiv webbplats för ett gamingcommunity riktat till vuxna över 30 år. Syftet är att skapa en mötesplats där spelintresserade kan upptäcka spel, hitta spelkompisar och bli en del av en gemenskap via Discord.

Webbplatsen har utvecklats som ett projekt i kursen **Introduktion till webbutveckling med HTML, CSS och JavaScript, 15 hp** vid Mittuniversitetet.

## Tekniker

Projektet är byggt med:

- **HTML5** – struktur och semantiskt innehåll.
- **CSS3** – responsiv design med Mobile First, Flexbox och Grid.
- **JavaScript** – interaktiv navigation, formulärvalidering och dynamiska spelkort.
- **JSON och RAWG API** – spelinformation som hämtas och lagras lokalt.
- **Node.js** – separat skript för uppdatering av spelinformation.
- **Git och GitHub Pages** – versionshantering och publicering.

## Funktioner

Webbplatsen består av fem sammanlänkade sidor och innehåller bland annat:

- Responsiv layout för mobil, surfplatta och dator.
- Mobilanpassad navigationsmeny.
- Dynamiskt genererade spelkort med information från en lokal JSON-fil.
- Kontaktformulär med JavaScript-validering.
- Länkar till communityts Discord-server.
- Tillgänglighetsanpassning med semantisk HTML och tangentbordsnavigation.

Kontaktformuläret är en demonstration och skickar inga riktiga meddelanden.

## Köra projektet lokalt

Klona repositoriet och öppna `index.html` med exempelvis **Live Server** i Visual Studio Code.

Spelinformationen finns redan i `data/games.json`, så ingen API-nyckel behövs för att använda webbplatsen.

För att uppdatera spelinformationen krävs Node.js och en egen RAWG API-nyckel i en lokal `.env`-fil. Uppdateringen körs med:

```bash
node --env-file=.env scripts/update_games.js
```

## Testning

Webbplatsen har validerats med W3C:s HTML- och CSS-validatorer, testats på olika skärmstorlekar och kontrollerats med Lighthouse. Samtliga fem sidor uppnådde **100/100 i Accessibility** vid testning i mobilläge.

## Publicerad webbplats

[Besök Respawn After Bedtime](https://miem85.github.io/respawn-after-bedtime/)

## Författare

Mikael Emanuelsson  
Webbutvecklarprogrammet, Mittuniversitetet.
