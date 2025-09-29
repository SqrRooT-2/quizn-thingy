
const elements = document.body.querySelectorAll("div");

document.body.style.margin = "40px";
document.body.style.fontFamily = "sans-serif";

function animate(time) {

  const bigAngle = Math.sin(time / 2000) * 1; 
  const bigSkew = Math.cos(time / 2500) * 1;   
  const bigScale = 1 + Math.sin(time / 3000) * 0.01; 
  document.body.style.transform =
    `rotate(${bigAngle}deg) skew(${bigSkew}deg, ${-bigSkew}deg) scale(${bigScale})`;

  elements.forEach((el, i) => {
    const phase = i * 800;
    const angle = Math.sin((time + phase) / 500) * 2; 
    const scale = 1 + Math.sin((time + phase) / 700) * 0.01; 
    const skewX = Math.cos((time + phase) / 900) * 2;
    const skewY = Math.sin((time + phase) / 1100) * 2;
    el.style.transform =
      `rotate(${angle}deg) scale(${scale}) skew(${skewX}deg, ${skewY}deg)`;
  });

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
