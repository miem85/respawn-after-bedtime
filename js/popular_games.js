/* ========================================
   POPULÄRA SPEL I COMMUNITYT
======================================== */

"use strict";

// Hämtar behållaren där spelkorten ska visas
const gamesContainer = document.querySelector("#popular-games-list");

// Hämtar spelinformationen från vår lokala JSON-fil
async function loadPopularGames() {
  try {
    const response = await fetch("data/games.json");

    // Kontrollerar att JSON-filen kunde hämtas
    if (!response.ok) {
      throw new Error("Kunde inte hämta spelinformationen.");
    }

    // Omvandlar JSON-informationen till en JavaScript-array
    const popularGames = await response.json();

    // Skapar ett spelkort för varje spel
    popularGames.forEach((game) => {
      const card = document.createElement("article");
      card.classList.add("game-card");

      // Skapar spelbilden
      const image = document.createElement("img");
      image.classList.add("game-card-image");
      image.src = game.image;
      image.alt = game.name;
      image.loading = "lazy";

      const content = document.createElement("div");
      content.classList.add("game-card-content");

      const title = document.createElement("h3");
      title.textContent = game.name;

      const genres = document.createElement("div");
      genres.classList.add("game-card-genres");

      // Skapar genreetiketterna
      game.genres.forEach((genre) => {
        const button = document.createElement("button");
        button.type = "button";
        button.classList.add("genre-button");
        button.textContent = genre;
        genres.appendChild(button);
      });

      content.appendChild(title);
      content.appendChild(genres);

      card.appendChild(image);
      card.appendChild(content);

      gamesContainer.appendChild(card);
    });
  } catch (error) {
    // Visar ett felmeddelande om spelinformationen inte kan hämtas
    console.error("Fel vid hämtning av spel:", error);
    gamesContainer.textContent = "Spelen kunde inte laddas just nu.";
  }
}

// Startar hämtningen av spelinformationen
loadPopularGames();
