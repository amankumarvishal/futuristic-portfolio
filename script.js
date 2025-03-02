// Particles.js Initialization
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#00ffff' },
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: false },
    move: { enable: true, speed: 1, direction: 'none', random: true }
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
    modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
  },
  retina_detect: true
});

// Smooth Scrolling for Nav Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Card Animation on Scroll
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.3 });

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(50px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(card);
});

// Form Submission Handling (Mock)
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Simulate form submission (replace with real backend later)
  formMessage.textContent = 'Sending...';
  formMessage.style.color = 'cyan';

  setTimeout(() => {
    formMessage.textContent = 'Message sent successfully!';
    formMessage.style.color = '#00ff00';
    form.reset();
  }, 1000);

  setTimeout(() => {
    formMessage.textContent = '';
  }, 3000);
});

// Cube Hover Animation Enhancement
const cube = document.querySelector('.cube');
cube.addEventListener('mouseenter', () => {
  cube.style.animation = 'rotateCube 2s infinite linear';
});
cube.addEventListener('mouseleave', () => {
  cube.style.animation = 'rotateCube 8s infinite linear';
});
