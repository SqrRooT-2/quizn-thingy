let angle = 0, scale = 0;
function rotateSite() {
  angle += 0.03;
  let temp = angle*Math.PI/180
  scale = Math.abs(1/Math.cos(temp)/Math.sqrt(1+Math.pow(Math.tan(temp)/0.3164,2)))-0.15*Math.cos(temp*2);
  document.body.style.transform = `rotate(${angle}deg) skew(0deg, 0deg) scale(${scale})`;



  requestAnimationFrame(rotateSite);
}

rotateSite();