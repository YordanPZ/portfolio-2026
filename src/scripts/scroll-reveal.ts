(() => {
  if (!('IntersectionObserver' in window)) return;

  const reduced =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced) return;

  const selectors = [
    '.section-head',
    '.timeline .tl-row',
    '.built-list .built-row',
    '.brief-grid .cell',
    '.stack-grid .cell',
    '.contact-cols .ckv',
    '.about .lede',
    '.about-side .kv',
  ];

  const targets: Element[] = [];
  selectors.forEach((sel) => {
    document.querySelectorAll<HTMLElement>(sel).forEach((el, i) => {
      el.setAttribute('data-reveal', '');
      el.style.transitionDelay = (i % 4) * 70 + 'ms';
      targets.push(el);
    });
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.06 },
  );

  targets.forEach((el) => io.observe(el));
})();
