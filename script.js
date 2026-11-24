// Mark JS available (enables the mobile menu), set copyright year, mobile nav toggle.
document.documentElement.classList.add('js');
document.querySelectorAll('.js-year').forEach(el => { el.textContent = new Date().getFullYear(); });

const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (toggle && nav) {
  const close = () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); };
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', e => { if (e.target.closest('a')) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}
