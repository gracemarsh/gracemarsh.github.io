// Need Multiple JavaScript interactions.

// SHOW ACTIVE NAV TAB

// let navLinks = document.querySelectorAll(".nav-link");
// console.log(navLinks);

// let activeNavTab = function (navLink) {
//   // navLink.classList.add("active");
//   .navLink.setAttribute("id", "active");

// };

// const paths = ["index", "about", "portfolio", "contact"];
// const currentPathUrl = window.location.pathname.split("/").slice(-1); // 'index.html'
// const isPageActive = paths.map((path) =>
//   currentPathUrl.some((x) => x.includes(path))
// );
// const activeIndex = isPageActive.indexOf(true);
// navLinks[activeIndex].classList.add("active");

// window.location.pathname
//   .split("/")
//   .slice(-1)
//   .some((x) => x.includes("portfolio"));

// for (let i = 0; i < navLinks.length; i++) {
//   navLinks[i].addEventListener("click", activeNavTab);
// }

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
