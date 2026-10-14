// Menu toggle.
document.querySelector('.menu-btn')?.addEventListener('click', (e) => {
  const nav = document.querySelector('.nav'); const open = nav.classList.toggle('open');
  e.currentTarget.setAttribute('aria-expanded', String(open));
});
