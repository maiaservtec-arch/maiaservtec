
(() => {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded','false');
    }));
  }

  document.querySelectorAll('[data-expand-target]').forEach(button => {
    const targetId = button.getAttribute('data-expand-target');
    const target = document.getElementById(targetId);
    if (!target) return;
    button.addEventListener('click', () => {
      const isOpen = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!isOpen));
      target.hidden = isOpen;
      button.textContent = isOpen ? 'Mostrar mais equipamentos' : 'Mostrar menos equipamentos';
    });
  });
})();
