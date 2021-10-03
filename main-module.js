// Double Cannon of Confetti
var colors = ["#a33100", "#c5591b", "#f5af00", "#76704c", "#3f4634"];

document.getElementById("avatar").addEventListener("click", frame);

function frame() {
  console.log("Hi there this is module speaking");
  let count = 0;

  function drawConfetti() {
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (count < 60) {
      count++;
      requestAnimationFrame(drawConfetti); // 60fps || 30fps
    }
  }

  drawConfetti();
}
