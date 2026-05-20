(() => {
  const STORAGE_KEY = 'yp-lang';

  function setLang(lang: 'es' | 'en') {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore (storage may be disabled)
    }
    document.querySelectorAll<HTMLButtonElement>('[data-set-lang]').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.setLang === lang);
    });
  }

  const stored = (() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      return v === 'en' || v === 'es' ? v : 'es';
    } catch {
      return 'es';
    }
  })();

  setLang(stored);

  document.querySelectorAll<HTMLButtonElement>('[data-set-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.setLang;
      if (target === 'es' || target === 'en') setLang(target);
    });
  });
})();
