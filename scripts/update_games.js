/* ========================================
   RAWG API - UPPDATERA SPELINFORMATION
======================================== */

"use strict";

const fs = require("node:fs/promises");
const path = require("node:path");

// Hämtar API-nyckeln från miljövariablerna
const apiKey = process.env.RAWG_API_KEY;

// Våra fyra utvalda spel och deras lokala bilder
const selectedGames = [
  {
    id: 976564,
    name: "Helldivers 2",
    image: "images/games/helldivers_2.webp",
    genres: ["Action", "Co-op"],
    website: "https://www.playstation.com/games/helldivers-2/",
  },
  {
    id: 324997,
    name: "Baldur's Gate 3",
    image: "images/games/baldurs_gate_3.jpg",
    genres: ["RPG", "Äventyr"],
    website: "https://baldursgate3.game/",
  },
  {
    id: 50781,
    name: "Sea of Thieves",
    image: "images/games/sea_of_thieves.jpg",
    genres: ["Äventyr", "Multiplayer"],
    website: "https://www.seaofthieves.com/",
  },
  {
    id: 388309,
    name: "Diablo IV",
    image: "images/games/diablo_4.webp",
    genres: ["Action", "RPG"],
    website: "https://diablo4.blizzard.com/",
  },
];

// Hämtar spelinformation från RAWG
async function updateGames() {
  if (!apiKey) {
    throw new Error("RAWG_API_KEY saknas i miljövariablerna.");
  }

  const games = [];

  for (const game of selectedGames) {
    // Hämtar information om spelet med hjälp av dess RAWG-ID
    const url = `https://api.rawg.io/api/games/${game.id}?key=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Kunde inte hämta ${game.name}: HTTP ${response.status}`);
    }

    // Omvandlar svaret till ett JavaScript-objekt
    const data = await response.json();

    // Lägger till spelet med våra egna bilder och genrer
    games.push({
      name: game.name,
      image: game.image,
      genres: game.genres,
      rating: data.rating,
      released: data.released,
      rawg_id: data.id,
      website: game.website,
    });

    console.log(`Hämtade ${game.name}`);
  }

  // Sparar spelinformationen i vår lokala JSON-fil
  const filePath = path.join(__dirname, "..", "data", "games.json");
  await fs.writeFile(filePath, JSON.stringify(games, null, 2), "utf8");

  console.log("data/games.json har uppdaterats!");
}

// Kör skriptet och visar eventuella fel
updateGames().catch((error) => {
  console.error("Fel vid uppdatering:", error.message);
  process.exitCode = 1;
});
