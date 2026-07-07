// ── NAV SCROLL ──
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 60);
});

// ── MOBILE MENU ──
const burger = document.querySelector('.nav__burger');
const mobileNav = document.querySelector('.nav__mobile');
const closeBtn = document.querySelector('.nav__mobile-close');

burger?.addEventListener('click', () => mobileNav?.classList.add('open'));
closeBtn?.addEventListener('click', () => mobileNav?.classList.remove('open'));
mobileNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileNav.classList.remove('open'));
});

// ── FADE IN ON SCROLL ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── FORM ──
const form = document.querySelector('.form');
form?.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Mensaje enviado ✓';
  btn.disabled = true;
  setTimeout(() => { btn.textContent = 'Enviar mensaje'; btn.disabled = false; }, 4000);
});
