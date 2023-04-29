const aboutLink = document.querySelector('nav ul li:nth-child(2) a');
const contactLink = document.querySelector('nav ul li:nth-child(4) a');

aboutLink.addEventListener('click', () => {
  window.location.href = '#about';
});

contactLink.addEventListener('click', () => {
  window.location.href = '#contact';
});
