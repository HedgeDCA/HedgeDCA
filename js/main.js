// v0.4 site-bones

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile toggle
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

toggle.addEventListener('click', () => {
  isOpen = !isOpen;
  setMenu(isOpen);
});

window.addEventListener('resize', () => {
  if (window.matchMedia('(max-width: 600px)').matches === false) {
    isOpen = false;
    setMenu(false);
  }
});
