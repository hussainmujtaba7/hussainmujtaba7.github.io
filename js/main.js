/* =========================================================
   MAIN.JS — Mirza Mujtaba Hussain Academic Website
   ========================================================= */

(function () {
  'use strict';

  /* ── Active nav link ─────────────────────────────────── */
  (function setActiveNav() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === page || (page === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  })();

  /* ── Mobile hamburger ────────────────────────────────── */
  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    /* Close nav when a link is clicked (mobile) */
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Scroll-to-top button ─────────────────────────────── */
  const scrollBtn = document.getElementById('scroll-top');
  if (scrollBtn) {
    window.addEventListener('scroll', function () {
      scrollBtn.classList.toggle('visible', window.scrollY > 300);
    }, { passive: true });

    scrollBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Blog "Read More" expand ──────────────────────────── */
  document.querySelectorAll('.read-more-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const card = btn.closest('.blog-card');
      const full = card && card.querySelector('.blog-full');
      if (!full) return;
      const isOpen = full.classList.toggle('open');
      btn.textContent = isOpen ? 'Read Less' : 'Read More';
      btn.setAttribute('aria-expanded', String(isOpen));
      full.setAttribute('aria-hidden', String(!isOpen));
    });
  });

})();
