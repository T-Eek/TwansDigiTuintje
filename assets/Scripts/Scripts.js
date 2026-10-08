function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("myNav").style.transition = "5s";

}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("myNav").style.transition = "2.5s";
}

function toggleMenu() {
    var x = document.getElementById("myLinks");
    var h = document.getElementById("MyHamburger");
    if (x.style.display === "flex" || x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
        h.style.display = "none";
    }
}

// Functie om de overlay te verbergen wanneer de gebruiker akkoord gaat
  function acceptConsent() {
    document.getElementById("consentOverlay").style.display = "none";
  }