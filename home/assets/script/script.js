/* ======================__ADD REVEAL TO STATIC ELEMENTS__=========================== */
function addRevealClasses() {
  const targets = [
    '.section__header',
    '.timeline__item',
    '.edu-card',
    '.project-card',
    '.contact__card',
    '.contact__form',
    '.soft-tag',
  ];
  targets.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = (i * 0.07) + 's';
    });
  });
}

/* ===========================__INIT__=========================== */
document.addEventListener('DOMContentLoaded', () => {
  addRevealClasses();
  // Reveal runs after adding classes
});
