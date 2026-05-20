(() => {
  const STORAGE_KEY = 'yp-theme';
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');

  if (btn) {
    btn.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore
      }
    });
  }

  try {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', (e) => {
      let hasStored = false;
      try {
        hasStored = !!localStorage.getItem(STORAGE_KEY);
      } catch {
        // ignore
      }
      if (!hasStored) {
        root.dataset.theme = e.matches ? 'dark' : 'light';
      }
    });
  } catch {
    // ignore
  }
})();
