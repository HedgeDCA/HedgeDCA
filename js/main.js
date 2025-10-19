// v1.8 HedgeDCA — JS hamburger on GitHub Pages

// Fill year
var yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu toggle (no dependencies)
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var panel  = document.getElementById('mobile-menu');
  if (!toggle || !panel) return;

  var isOpen = false;

  function setMenu(open) {
    isOpen = !!open;
    if (open) {
      panel.removeAttribute('hidden');    // show
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
    } else {
      panel.setAttribute('hidden', '');   // hide
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    }
  }

  toggle.addEventListener('click', function () {
    setMenu(!isOpen);
  });

  // Close the panel if resized wider than mobile breakpoint
  window.addEventListener('resize', function () {
    if (window.matchMedia('(max-width: 600px)').matches === false) {
      setMenu(false);
    }
  });
})();
