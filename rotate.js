let angle = 0;
function rotateSite() {
  angle += 0.03;
  document.body.style.transform = `rotate(${angle}deg)`;
  requestAnimationFrame(rotateSite);
}

rotateSite();