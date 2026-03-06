// script.js
// Smooth continuous vertical marquee + Join button redirect

document.addEventListener('DOMContentLoaded', () => {

  /* =======================
     JOIN BUTTON REDIRECT
     ======================= */
  const joinBtn = document.getElementById("joinBtn");

  if (joinBtn) {
    joinBtn.addEventListener("click", () => {
      window.location.href = "login page.html"; // exact file name
    });
  }

  /* =======================
     SCROLLING POSTERS LOGIC
     ======================= */
  const scrollers = document.querySelectorAll('.scrolling');

  scrollers.forEach(scroller => {
    const children = Array.from(scroller.children);
    if (children.length === 0) return;

    // Duplicate images for seamless scroll
    children.forEach(child => scroller.appendChild(child.cloneNode(true)));

    let start = null;
    const speedAttr = parseFloat(scroller.dataset.speed) || 22;
    const originalHeight = scroller.scrollHeight / 2;

    function step(timestamp) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      const duration = Math.max(6000, speedAttr * 300);
      const progress = (elapsed % duration) / duration;
      const translateY = -progress * originalHeight;

      scroller.style.transform = `translateY(${translateY}px)`;
      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);

    scroller.querySelectorAll('img').forEach(img => {
      img.addEventListener('error', () => {
        console.warn(`Image failed to load: ${img.src}`);
        img.style.opacity = '0.25';
      });
    });
  });

});
