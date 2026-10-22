const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

menuToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const sections = [...document.querySelectorAll('main section[id]')];
const navItems = [...document.querySelectorAll('.nav-links a')];
const syncNav = () => {
  const y = window.scrollY + 160;
  let current = sections[0]?.id;
  sections.forEach(section => {
    if (y >= section.offsetTop) current = section.id;
  });
  navItems.forEach(item => item.classList.toggle('active', item.getAttribute('href') === `#${current}`));
};
window.addEventListener('scroll', syncNav, { passive: true });
syncNav();
