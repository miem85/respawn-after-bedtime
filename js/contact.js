"use strict";

/* ========================================
   KONTAKTFORMULÄR – VALIDERING
======================================== */

// Hämtar formuläret och elementet för återkoppling
const contactForm = document.querySelector("#contact-form");
const formFeedback = document.querySelector("#form-feedback");

// Hämtar alla obligatoriska formulärfält
const formFields = contactForm.querySelectorAll(
  "input[required], textarea[required]",
);

// Kontrollerar om ett fält innehåller ett giltigt värde
function isValidField(field) {
  const value = field.value.trim();

  // Fältet får inte vara tomt
  if (!value) {
    return false;
  }

  // Kontrollerar e-postadressens format
  if (field.type === "email") {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  }

  return true;
}

// Markerar ett fält som giltigt eller ogiltigt
function validateField(field) {
  const isValid = isValidField(field);

  field.classList.toggle("input-error", !isValid);

  if (isValid) {
    field.removeAttribute("aria-invalid");
  } else {
    field.setAttribute("aria-invalid", "true");
  }

  return isValid;
}

// Uppdaterar felmarkeringen när användaren ändrar ett fält
formFields.forEach((field) => {
  field.addEventListener("input", () => {
    if (field.classList.contains("input-error")) {
      validateField(field);
    }

    // Tar bort tidigare återkoppling när formuläret ändras
    formFeedback.textContent = "";
  });
});

// Lyssnar efter att användaren försöker skicka formuläret
contactForm.addEventListener("submit", (event) => {
  // Förhindrar att sidan laddas om
  event.preventDefault();

  let firstInvalidField = null;
  let hasEmptyField = false;

  // Kontrollerar samtliga obligatoriska fält
  formFields.forEach((field) => {
    if (!validateField(field)) {
      // Sparar det första felaktiga fältet
      if (!firstInvalidField) {
        firstInvalidField = field;
      }

      if (!field.value.trim()) {
        hasEmptyField = true;
      }
    }
  });

  // Visar felmeddelande och flyttar fokus vid fel
  if (firstInvalidField) {
    formFeedback.setAttribute("role", "alert");
    formFeedback.textContent = hasEmptyField
      ? "Du måste fylla i alla fält."
      : "Ange en giltig e-postadress.";

    formFeedback.style.color = "#ff6b6b";
    firstInvalidField.focus();
    return;
  }

  // Formuläret är korrekt ifyllt, men skickas inte till någon server
  formFeedback.setAttribute("role", "status");
  formFeedback.textContent =
    "Alla uppgifter är korrekt ifyllda! Formuläret är en demonstration och skickar inga meddelanden.";

  formFeedback.style.color = "#00d9f4";
});
