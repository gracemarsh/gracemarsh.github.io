// Need Multiple JavaScript interactions.

// SHOW ACTIVE NAV TAB

let navLinks = document.querySelectorAll(".nav-link");

let activeNavTab = function (navLink) {
  navLink.classList.add("active");
};

const paths = ["index", "about", "portfolio", "contact"];
const currentPathUrl = window.location.pathname.split("/").slice(-1); // 'index.html'
const isPageActive = paths.map((path) =>
  currentPathUrl.some((x) => x.includes(path))
);
const activeIndex = isPageActive.indexOf(true);
navLinks[activeIndex].classList.add("active");

window.location.pathname
  .split("/")
  .slice(-1)
  .some((x) => x.includes("portfolio"));

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", activeNavTab);
}

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
  if (document.querySelector(".typing")) {
    return;
  }
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

// MINIMISE HOME PAGE HEADER

// function headerMinimise() {
//   if (window.pageYOffset > 1000) {
//     document.querySelector("header").classList.add("scrolled");
//   }
// }

// window.addEventListener("scroll", headerMinimise);
