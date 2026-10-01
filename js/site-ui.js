/* Badlands Radon: shared UI for the modern layer (2026-10-01).
   Inner pages ship three header variants; main.js only wires the home one (.nav__toggle).
   This wires the rest: a toggle without its own onclick opens .main-nav (or the bare <nav>). */
(function () {
  var header = document.querySelector('.site-header');
  if (header) {
    var toggle = header.querySelector('.nav-toggle');
    var nav = header.querySelector('.main-nav') || header.querySelector('nav');
    if (toggle && nav && !toggle.hasAttribute('onclick')) {
      toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }
    if (toggle && nav) {
      nav.addEventListener('click', function (e) {
        if (e.target.closest('a')) { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
      });
    }
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }
})();
