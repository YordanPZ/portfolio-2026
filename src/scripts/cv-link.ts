(() => {
  const url = window.CV_URL ?? '/assets/Yordan-Jimenez-CV.pdf';
  const isLocal =
    url.startsWith('/') || url.startsWith('./') || url.startsWith('assets/');

  document.querySelectorAll<HTMLAnchorElement>('[data-cv-link]').forEach((a) => {
    a.href = url;
    if (isLocal) a.setAttribute('download', '');
    else a.removeAttribute('download');
  });
})();
