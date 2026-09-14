function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function toggleMenu() {
    var x = document.getElementById("myLinks");
    var h = document.getElementById("MyHamburger");
    // Als het menu flex is (of block), maken we het 'none' (onzichtbaar), anders tonen we het weer
    if (x.style.display === "flex" || x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
        h.style.display = "none";
    }
}