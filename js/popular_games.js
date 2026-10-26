"use strict";

/* ========================================
   POPULÄRA SPEL I COMMUNITYT
======================================== */

// Hitta spelbehållaren på startsidan eller spelsidan
const gamesContainer = document.querySelector(
  "#popular-games-list, #games-list",
);

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

      // Skapar en länk till spelets officiella webbplats
      const gameLink = document.createElement("a");
      gameLink.classList.add("game-card-link");
      gameLink.href = game.website;
      gameLink.target = "_blank";
      gameLink.rel = "noopener noreferrer";
      gameLink.setAttribute(
        "aria-label",
        `${game.name} – besök spelets officiella webbplats (öppnas i ny flik)`,
      );

      // Skapar spelbilden
      const image = document.createElement("img");
      image.classList.add("game-card-image");
      image.src = game.image;
      image.alt = game.name;
      image.loading = "lazy";

      const content = document.createElement("div");
      content.classList.add("game-card-content");

      const title = document.createElement("2");
      title.textContent = game.name;

      // Skapar en behållare för spelets betyg och releasedatum
      const gameInfo = document.createElement("div");
      gameInfo.classList.add("game-card-info");

      // Skapar texten för spelets RAWG-betyg
      const rating = document.createElement("span");
      rating.classList.add("game-card-rating");
      rating.textContent = `★ ${game.rating.toFixed(2)} / 5`;

      // Skapar texten för spelets releasedatum
      const releaseDate = document.createElement("span");
      releaseDate.classList.add("game-card-release");

      const formattedDate = new Date(`${game.released}T00:00:00`);
      releaseDate.textContent = `Släppt: ${formattedDate.toLocaleDateString("sv-SE")}`;

      // Lägger in betyg och releasedatum i behållaren
      gameInfo.appendChild(rating);
      gameInfo.appendChild(releaseDate);
      const genres = document.createElement("div");
      genres.classList.add("game-card-genres");

      // Skapar genreetiketterna
      game.genres.forEach((genre) => {
        const genreLabel = document.createElement("span");
        genreLabel.classList.add("genre-button");
        genreLabel.textContent = genre;
        genres.appendChild(genreLabel);
      });

      content.appendChild(title);
      content.appendChild(genres);
      content.appendChild(gameInfo);

      // Lägger bilden och innehållet inuti länken
      gameLink.appendChild(image);
      gameLink.appendChild(content);

      // Lägger länken inuti spelkortet
      card.appendChild(gameLink);

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
