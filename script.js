const menuButton = document.querySelector('#menu-button');
const nav = document.querySelector('#main-nav');

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '×' : '☰';
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));

const form = document.querySelector('#estimate-form');
const fields = document.querySelector('#form-fields');
const success = document.querySelector('#success-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  fields.hidden = true;
  success.hidden = false;
});

document.querySelector('#reset-form').addEventListener('click', () => {
  form.reset();
  fields.hidden = false;
  success.hidden = true;
});
