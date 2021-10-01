// Double Cannon of Confetti
var colors = ["#a33100", "#c5591b", "#f5af00", "#76704c", "#3f4634"];
var end = Date.now() + 2 * 1000;

document.getElementById("avatar").onclick = function frame() {
  confetti({
    particleCount: 5,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors,
  });
  confetti({
    particleCount: 5,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors,
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
};
