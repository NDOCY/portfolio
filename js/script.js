// Mobile menu toggle
const menu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menu.classList.toggle('open');
});

// Smooth scroll (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
      navLinks.classList.remove('active');
    }
  });
});
