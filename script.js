// Debug Log
console.log('Script loaded');

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    const offset = 60;
    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    console.log('Nav clicked:', targetId);
  });
});

// Form Submission
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  formMessage.textContent = 'Sending...';
  formMessage.style.color = 'cyan';

  setTimeout(() => {
    formMessage.textContent = 'Message sent successfully!';
    formMessage.style.color = '#00ff00';
    form.reset();
    setTimeout(() => {
      formMessage.textContent = '';
    }, 2000);
  }, 1000);
  console.log('Form submitted');
});

// Card Hover Effects
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'rotate(6deg) scale(1.1) translateY(-10px)';
    card.style.boxShadow = '0 0 25px rgba(0, 255, 255, 0.7)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotate(0deg) scale(1) translateY(0)';
    card.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.5)';
  });
});

// Debug Projects Section
console.log('Projects section:', document.getElementById('projects'));
console.log('Cards:', document.querySelectorAll('.card').length);
