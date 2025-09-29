const elements = document.body.querySelectorAll("div");

document.body.style.margin = "40px";
document.body.style.fontFamily = "sans-serif";
elements.forEach((el) => {
  el.style.margin = "20px";
  el.style.padding = "20px";
  el.style.border = "1px solid #ccc";
  el.style.display = "inline-block";
  el.style.fontSize = "2rem";
  el.style.transition = "transform 0.05s linear";
});

function animate(time) {

  const bigAngle = Math.sin(time / 2000) * 5; 
  const bigSkew = Math.cos(time / 2500) * 2;   
  const bigScale = 1 + Math.sin(time / 3000) * 0.01; 
  document.body.style.transform =
    `rotate(${bigAngle}deg) skew(${bigSkew}deg, ${-bigSkew}deg) scale(${bigScale})`;

  elements.forEach((el, i) => {
    const phase = i * 800;
    const angle = Math.sin((time + phase) / 500) * 20; 
    const scale = 1 + Math.sin((time + phase) / 700) * 0.02; 
    const skewX = Math.cos((time + phase) / 900) * 5;
    const skewY = Math.sin((time + phase) / 1100) * 5;
    el.style.transform =
      `rotate(${angle}deg) scale(${scale}) skew(${skewX}deg, ${skewY}deg)`;
  });

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

