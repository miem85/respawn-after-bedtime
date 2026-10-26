/* ========================================
   POPULÄRA SPEL I COMMUNITYT
======================================== */
"use strict";

// De fyra spelen som visas i mockupen
const popularGames = [
  {
    name: "Helldivers 2",
    image: "images/games/helldivers_2.webp",
    genres: ["Action", "Co-op"],
  },
  {
    name: "Baldur's Gate 3",
    image: "images/games/baldurs_gate_3.jpg",
    genres: ["RPG", "Äventyr"],
  },
  {
    name: "Sea of Thieves",
    image: "images/games/sea_of_thieves.jpg",
    genres: ["Äventyr", "Multiplayer"],
  },
  {
    name: "Diablo IV",
    image: "images/games/diablo_4.webp",
    genres: ["Action", "RPG"],
  },
];

// Hämtar behållaren där spelkorten ska visas
const gamesContainer = document.querySelector("#popular-games-list");

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
