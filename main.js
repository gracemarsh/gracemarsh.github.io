// Need Multiple JavaScript interactions.

// MINIMISE HOME PAGE HEADER

function headerMinimise() {
  if (window.pageYOffset > 1000) {
    document.querySelector("header").classList.add("scrolled");
  }
}

window.addEventListener("scroll", headerMinimise);

// SHOW ACTIVE NAV TAB

let navLink = document.querySelectorAll(".nav-link");

function activeNabTab() {}

window.addEventListener("click", activeNabTab);

// TYPEWRITING ADVERT

const texts = [
  "so slow?",
  "not getting new leads?",
  "outdated?",
  "always breaking?",
  "mobile incompatible?",
  "confusing visitors?",
  "lacking SEO?",
  "lacking accessibility?",
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 150);
  }
})();
