// Destaca no menu a seção visível e mantém --topbar-h igual à altura real
// da barra fixa, para que os links âncora não escondam o título da seção.
(function () {
  var root = document.documentElement;
  var bar = document.querySelector('.topbar');
  var nav = document.querySelector('.topnav');
  var links = Array.prototype.slice.call(document.querySelectorAll('.topnav a[href^="#"]'));
  var targets = links.map(function (a) { return document.getElementById(a.hash.slice(1)); });

  function barHeight() { return bar ? bar.offsetHeight : 0; }

  function syncBar() { root.style.setProperty('--topbar-h', barHeight() + 'px'); }

  var current = -1;

  // No celular o menu rola na horizontal: traz o link ativo para dentro da tela.
  function revealInNav(a) {
    if (!nav || nav.scrollWidth <= nav.clientWidth) return;
    var left = a.offsetLeft - nav.offsetLeft;
    if (left < nav.scrollLeft || left + a.offsetWidth > nav.scrollLeft + nav.clientWidth) {
      nav.scrollLeft = left - (nav.clientWidth - a.offsetWidth) / 2;
    }
  }

  function setActive(index) {
    if (index === current) return;
    current = index;
    links.forEach(function (a, i) {
      var on = i === index;
      a.classList.toggle('on', on);
      if (on) { a.setAttribute('aria-current', 'location'); revealInNav(a); }
      else a.removeAttribute('aria-current');
    });
  }

  function update() {
    var line = barHeight() + window.innerHeight * 0.3;
    var atBottom = window.innerHeight + window.scrollY >= root.scrollHeight - 2;
    var active = -1;
    targets.forEach(function (el, i) {
      if (el && el.getBoundingClientRect().top <= line) active = i;
    });
    if (atBottom) active = targets.length - 1;
    setActive(active);
  }

  var queued = false;
  function onScroll() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () { queued = false; update(); });
  }

  syncBar();
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { syncBar(); onScroll(); });
  if (window.ResizeObserver && bar) new ResizeObserver(syncBar).observe(bar);
})();
