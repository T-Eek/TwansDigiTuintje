function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("myNav").style.transition = "5s";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("myNav").style.transition = "2.5s";
}

// Functie om de overlay te verbergen wanneer de gebruiker akkoord gaat
  function acceptConsent() {
    document.getElementById("consentOverlay").style.display = "none";
  }