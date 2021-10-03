// Need Multiple JavaScript interactions.

// SHOW ACTIVE NAV TAB

// let navLinks = document.querySelectorAll(".nav-link");
const currentFileName = window.location.pathname.split("/").at(-1); // 'index.html'
var navLinkName;

switch (currentFileName) {
  case "index.html":
    navLinkName = document.querySelectorAll(".nav-home");
    navLinkName.classList.add("active");
    Array.from(navLinkName);
    break;
  case "about.html":
    navLinkName = document
      .querySelectorAll(".nav-about")
      .classList.add("active");
    Array.from(navLinkName);
    break;
  case "portfolio.html":
    navLinkName = document
      .querySelectorAll(".nav-portfolio")
      .classList.add("active");
    Array.from(navLinkName);
    break;
  case "contact.html":
    navLinkName = document
      .querySelectorAll(".nav-contact")
      .classList.add("active");
    Array.from(navLinkName);
    break;
  default:
    console.error("no active link found");
    break;
}

// const activeIndex = isPageActive.indexOf(true);
// navLinks[activeIndex].classList.add("active");

// TYPEWRITING ADVERT
function typingAdvert() {
  const phrases = [
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

  function type() {
    if (!document.querySelector("#typing")) {
      console.error("#typing element for typing advert not found");
      return;
    }
    if (count === phrases.length) {
      count = 0;
    }

    currentText = phrases[count];
    letter = currentText.slice(0, ++index);

    document.querySelector("#typing").textContent = letter;

    const isPhraseComplete = letter.length === currentText.length;

    const typeNextLetter = () => setTimeout(type, 150);

    const typeNextWord = () => {
      count++;
      index = 0;
      setTimeout(type, 1500);
    };

    if (isPhraseComplete) {
      typeNextWord();
    } else {
      typeNextLetter();
    }
  }

  type();
}

typingAdvert();
