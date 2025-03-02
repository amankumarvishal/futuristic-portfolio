import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import gsap from 'gsap';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import './App.css';

function Cube() {
  const meshRef = useRef();
  useEffect(() => {
    gsap.to(meshRef.current.rotation, {
      x: Math.PI * 2,
      y: Math.PI * 2,
      duration: 10,
      repeat: -1,
      ease: 'none',
    });
  }, []);
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="cyan" wireframe />
    </mesh>
  );
}

function App() {
  const titleRef = useRef();
  const cardRefs = useRef([]);

  // Particles setup
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // GSAP animations
  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -100,
      duration: 2,
      ease: 'bounce.out',
    });
    cardRefs.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: index * 0.3,
        ease: 'power2.out',
      });
    });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 80 },
            size: { value: 3 },
            move: { speed: 1 },
            color: { value: '#00ffff' },
          },
          interactivity: {
            events: { onhover: { enable: true, mode: 'repulse' } },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Header */}
      <header className="p-4 flex justify-between relative z-10">
        <h1 className="text-2xl font-bold text-cyan-400 glow">Portfolio</h1>
        <nav>
          <a href="#about" className="mx-2 hover:text-cyan-400 transition-colors">About</a>
          <a href="#projects" className="mx-2 hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#contact" className="mx-2 hover:text-cyan-400 transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative z-10">
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-extrabold text-cyan-300 glow">
          [Your Name]
        </h1>
        <p className="mt-4 text-xl">Math Tutor & Creative Coder</p>
        <Canvas className="w-full h-1/2">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Cube />
          <Stars />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/80 relative z-10">
        <h2 className="text-4xl text-center text-cyan-400 glow">About Me</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          I’m a passionate math tutor and developer, blending logic with creativity. With 500+
          students taught, I craft engaging lessons and innovative tools like AI tutors and Bible apps.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <h2 className="text-4xl text-center text-cyan-400 glow">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          {[
            { title: 'Bible Website', desc: 'Animated scripture reader with search.' },
            { title: 'Math Tutor App', desc: 'Interactive lessons with AI support.' },
            { title: 'Portfolio Site', desc: 'This animated masterpiece!' },
          ].map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="card bg-gray-800 p-4 rounded-lg transform hover:rotate-6 hover:scale-110 transition-all duration-500"
            >
              <h3 className="text-xl text-cyan-300 glow">{project.title}</h3>
              <p className="mt-2">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/80 relative z-10">
        <h2 className="text-4xl text-center text-cyan-400 glow">Contact Me</h2>
        <form className="max-w-md mx-auto mt-8">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 mb-4 bg-gray-800 text-white rounded transform hover:scale-105 transition-transform"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 bg-gray-800 text-white rounded transform hover:scale-105 transition-transform"
          />
          <textarea
            placeholder="Message"
            className="w-full p-2 bg-gray-800 text-white rounded transform hover:scale-105 transition-transform"
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-cyan-500 p-2 w-full rounded hover:bg-cyan-600 transition-colors"
          >
            Send
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
