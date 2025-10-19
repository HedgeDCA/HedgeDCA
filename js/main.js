// v1.3 HedgeDCA — hamburger toggle fix + year

// auto-fill current year
document.getElementById('year').textContent = new Date().getFullYear();

// mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const panel  = document.getElementById('mobile-menu');
let isOpen = false;

function setMenu(open) {
  if (open) {
    panel.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
  } else {
    panel.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }
}

if (toggle && panel) {
  toggle.addEventListener('click', () => {
    isOpen = !isOpen;
    setMenu(isOpen);
  });

  // reset when window is resized wider than mobile breakpoint
  window.addEventListener('resize', () => {
    if (window.matchMedia('(max-width: 600px)').matches === false) {
      isOpen = false;
      setMenu(false);
    }
  });
}
