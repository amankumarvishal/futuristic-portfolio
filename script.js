// Debug Log
console.log('Script loaded');

// Particles.js Initialization
try {
  particlesJS('particles-js', {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: '#00ffff' },
      shape: { type: 'triangle', stroke: { width: 1, color: '#00ffff' } },
      opacity: { value: 0.7, random: true, anim: { enable: true, speed: 1 } },
      size: { value: 4, random: true, anim: { enable: true, speed: 2 } },
      line_linked: { enable: true, distance: 150, color: '#00ffff', opacity: 0.4 },
      move: { enable: true, speed: 2, direction: 'none', random: true, out_mode: 'bounce' }
    },
    interactivity: {
      detect_on: 'canvas',
      events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' } },
      modes: { grab: { distance: 200, line_linked: { opacity: 1 } }, push: { particles_nb: 5 } }
    },
    retina_detect: true
  });
  console.log('Particles initialized');
} catch (e) {
  console.error('Particles.js error:', e);
}

// Three.js 3D Cube
try {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas'), alpha: true });
  renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.5);
  camera.position.z = 5;

  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  function animateCube() {
    requestAnimationFrame(animateCube);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animateCube();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.5);
  });
  console.log('Three.js initialized');
} catch (e) {
  console.error('Three.js error:', e);
}

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
