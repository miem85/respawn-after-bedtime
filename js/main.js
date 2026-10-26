"use strict";

/* ========================================
   MOBILMENY
======================================== */

// Hämtar hamburgermenyknappen och navigationen från DOM
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

// Lyssnar efter klick på hamburgermenyknappen
menuToggle.addEventListener("click", () => {
  // Lägger till eller tar bort klassen "open"
  mainNav.classList.toggle("open");

  // Kontrollerar om navigationen är öppen
  const isOpen = mainNav.classList.contains("open");

  // Uppdaterar knappens tillgänglighetsattribut
  menuToggle.setAttribute("aria-expanded", isOpen);

  // Ändrar knappens beskrivning beroende på menyens tillstånd
  menuToggle.setAttribute("aria-label", isOpen ? "Stäng menyn" : "Öppna menyn");
});
