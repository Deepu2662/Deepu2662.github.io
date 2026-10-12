(() => {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  const toast = document.querySelector('#toast');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Toggle navigation');
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Toggle navigation');
    }));
  }
  document.querySelector('#year').textContent = new Date().getFullYear();
  let timer;
  document.querySelectorAll('.placeholder-link').forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    toast.textContent = link.dataset.placeholder || 'Add the final public link before publishing.';
    toast.classList.add('show');
    clearTimeout(timer);
    timer = setTimeout(() => toast.classList.remove('show'), 4500);
  }));
})();
