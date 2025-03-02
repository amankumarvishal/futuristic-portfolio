import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import gsap from 'gsap';
import './App.css';

function Scene() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="cyan" wireframe />
    </mesh>
  );
}

function App() {
  useEffect(() => {
    gsap.fromTo(
      '.title',
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 2, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-4 flex justify-between">
        <h1 className="text-2xl font-bold text-cyan-400">Portfolio</h1>
        <nav>
          <a href="#about" className="mx-2 hover:text-cyan-400">About</a>
          <a href="#projects" className="mx-2 hover:text-cyan-400">Projects</a>
          <a href="#contact" className="mx-2 hover:text-cyan-400">Contact</a>
        </nav>
      </header>
      <section className="h-screen flex flex-col items-center justify-center">
        <h1 className="title text-5xl md:text-7xl font-extrabold text-cyan-300 glow">
          [Your Name]
        </h1>
        <p className="mt-4 text-xl">Math Tutor & AI Visionary</p>
        <Canvas className="w-full h-1/2">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Scene />
          <OrbitControls />
        </Canvas>
      </section>
    </div>
  );
}

export default App;
