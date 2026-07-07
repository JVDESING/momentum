// Inyecta el header en todas las páginas
function renderHeader(activePage = '') {
  const pages = [
    { href: '../pages/rrhh.html', label: 'RRHH' },
    { href: '../pages/coaching.html', label: 'Coaching' },
    { href: '../pages/wine.html', label: 'Wine' },
    { href: '../pages/nosotros.html', label: 'Nosotros' },
    { href: '../pages/blog.html', label: 'Blog' },
    { href: '../pages/contacto.html', label: 'Contacto' },
  ];

  const isHome = activePage === 'home';
  const prefix = isHome ? 'pages/' : '';
  const logoHref = isHome ? '#' : '../index.html';

  document.body.insertAdjacentHTML('afterbegin', `
    <header class="header">
      <div class="container">
        <nav class="nav">
          <a href="${logoHref}" class="nav__logo">M<span>.</span>omentum</a>
          <ul class="nav__links">
            ${pages.map(p => {
              const href = isHome ? p.href : p.href.replace('../', '');
              return `<li><a href="${isHome ? p.href : p.href}">${p.label}</a></li>`;
            }).join('')}
          </ul>
          <div class="nav__cta">
            <a href="${isHome ? 'pages/contacto.html' : '../pages/contacto.html'}" class="btn btn--primary" style="font-size:.75rem;padding:.65rem 1.5rem;">Hablemos</a>
          </div>
          <button class="nav__burger" aria-label="Menú">
            <span></span><span></span><span></span>
          </button>
        </nav>
      </div>
    </header>
    <nav class="nav__mobile">
      <button class="nav__mobile-close" aria-label="Cerrar">×</button>
      ${pages.map(p => `<a href="${p.href}">${p.label}</a>`).join('')}
      <a href="${isHome ? 'pages/contacto.html' : '../pages/contacto.html'}" class="btn btn--primary">Hablemos</a>
    </nav>
  `);
}

function renderFooter(isHome = false) {
  const base = isHome ? 'pages/' : '';
  document.body.insertAdjacentHTML('beforeend', `
    <footer class="footer">
      <div class="container">
        <div class="footer__grid">
          <div class="footer__brand">
            <div class="nav__logo" style="font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:300;letter-spacing:.08em;">M<span style="color:#C4922A">.</span>omentum</div>
            <p>Impulso que transforma. Desarrollo profesional y humano para líderes, equipos y organizaciones.</p>
          </div>
          <div class="footer__col">
            <h5>Unidades</h5>
            <ul>
              <li><a href="${base}pages/rrhh.html">Momentum RRHH</a></li>
              <li><a href="${base}pages/coaching.html">Momentum Coaching</a></li>
              <li><a href="${base}pages/wine.html">Momentum Wine</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h5>Empresa</h5>
            <ul>
              <li><a href="${base}pages/nosotros.html">Nosotros</a></li>
              <li><a href="${base}pages/blog.html">Blog</a></li>
              <li><a href="${base}pages/contacto.html">Contacto</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h5>Contacto</h5>
            <ul>
              <li><a href="https://instagram.com/momentum" target="_blank">Instagram</a></li>
              <li><a href="https://linkedin.com/company/momentum" target="_blank">LinkedIn</a></li>
              <li><a href="mailto:hola@momentum.com.ar">hola@momentum.com.ar</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__bottom">
          <p>© 2025 Momentum. Córdoba, Argentina.</p>
          <div class="footer__social">
            <a href="https://instagram.com/momentum" target="_blank">Instagram</a>
            <a href="https://linkedin.com/company/momentum" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
    <a href="https://wa.me/5493510000000" target="_blank" class="wa-float" aria-label="WhatsApp">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  `);
}
