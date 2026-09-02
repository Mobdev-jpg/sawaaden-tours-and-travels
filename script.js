const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

const setMenuState = (open) => {
  nav?.classList.toggle('open', open);
  menuButton?.setAttribute('aria-expanded', String(open));
  if (menuButton) menuButton.textContent = open ? '×' : '☰';
};

menuButton?.addEventListener('click', () => {
  setMenuState(!(nav?.classList.contains('open')));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => setMenuState(false));
});

document.addEventListener('click', (event) => {
  if (!nav?.classList.contains('open')) return;
  const target = event.target;
  if (!(target instanceof Node)) return;
  if (!nav.contains(target) && !menuButton?.contains(target)) setMenuState(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuState(false);
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 850) setMenuState(false);
});

document.getElementById('year').textContent = new Date().getFullYear();