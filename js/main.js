/* ===== NAVBAR SCROLL EFFECT ===== */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

/* ===== MOBILE MENU ===== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', function () {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function (e) {
  if (!navbar.contains(e.target) && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  }
});

/* ===== SCROLL REVEAL ===== */
var observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry, index) {
    if (entry.isIntersecting) {
      setTimeout(function () {
        entry.target.classList.add('visible');
      }, index * 80);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(function (el) {
  observer.observe(el);
});

/* ===== SMOOTH SCROLL FOR ANCHOR LINKS ===== */
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    var href = this.getAttribute('href');
    if (href === '#') return; // Skip placeholder links
    e.preventDefault();
    var target = document.querySelector(href);
    if (target) {
      var navHeight = navbar.offsetHeight;
      var targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  });
});
