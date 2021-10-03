// SHOW ACTIVE NAV TAB
function activeNav() {
  const paths = window.location.pathname.split("/");
  const currentFileName = paths[paths.length - 1]; // 'index.html'

  const setActive = (selector) => {
    const nodes = document.querySelectorAll(selector);
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].classList.add("active");
    }
  };

  switch (currentFileName) {
    case "index.html":
      setActive(".nav-home");
      break;
    case "about.html":
      setActive(".nav-about");
      break;
    case "portfolio.html":
      setActive(".nav-portfolio");
      break;
    case "contact.html":
      setActive(".nav-contact");
      break;
    default:
      setActive(".nav-home");
      break;
  }
}

activeNav();

// TYPEWRITING ADVERT
function typing() {
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
      console.log(
        "#typing element for typing typing not found - but that's ok if this isn't the index.html page"
      );
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

typing();

// Double Cannon of Confetti

function surprise() {
  var colors = ["#a33100", "#c5591b", "#f5af00", "#76704c", "#3f4634"];

  function frame() {
    let count = 0;
    const fire = window.confetti;
    const hasLoaded = typeof fire === "function";

    if (!hasLoaded) {
      console.log("confetti not loaded");
      return;
    }

    const fireLeft = {
      particleCount: 7,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors,
    };

    const fireRight = {
      particleCount: 7,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors,
    };

    function drawConfetti() {
      fire(fireLeft);
      fire(fireRight);

      if (count < 60) {
        count++;
        requestAnimationFrame(drawConfetti);
      }
    }

    drawConfetti();
  }

  const avatar = document.getElementById("avatar");

  if (avatar) {
    avatar.addEventListener("click", frame);
  }
}

surprise();
