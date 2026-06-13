const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('open');
  });
});

const contactForm = document.querySelector('.contact-form');
contactForm?.addEventListener('submit', event => {
  event.preventDefault();
  alert('Thanks! Your request is sent. We will get back to you shortly.');
});
