
// ===============================
// 🌍 HERO TEXT + PAGE FADE SYSTEM
// ===============================

// Select elements safely
const heroText = document.querySelector('.hero .content');
const fadeSections = document.querySelectorAll('.fade-section');

// Main scroll handler (single optimized system)
function handleScroll() {

  let scrollY = window.scrollY;

  // ===============================
  // 🎬 HERO TEXT FADE + ZOOM
  // ===============================
  if (heroText) {

    // Fade out
    let opacity = 1 - scrollY / 400;
    if (opacity < 0) opacity = 0;

    // Scale down
    let scale = 1 - scrollY / 1000;
    if (scale < 0.8) scale = 0.8;

    heroText.style.opacity = opacity;
    heroText.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }


  // ===============================
  // ✨ PAGE 2 FADE-IN EFFECT
  // ===============================
  fadeSections.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
      section.classList.add('show');
    }
  });

}


// ===============================
// 🚀 EVENT LISTENERS
// ===============================
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);


// ==========================================
// 🌌 (OPTIONAL READY FOR NEXT LEVEL)
// ==========================================


