"use client";

import ParticlesComponent from "./particles";
export default function HeroSection() {
  return (
    <section data-header="" className="min-h-screen flex flex-col bg-blue-500 p-8 items-center justify-center text-center relative">
      <ParticlesComponent id="particles" />
      <h1 className="text-4xl tracking-[0.12em] font-bold tracking-wider fade-in-right" style={{ fontSize: '48px' }}>
        Hello, I'm <span className="text-blue-500">Evan</span>.
      </h1>
      <h2 className="text-2xl tracking-[0.12em] font-bold tracking-wider fade-in-left" style={{ fontSize: '40px', marginTop: '24px' }}>
        I am a <span className="text-blue-500">Software Engineer</span>.
      </h2>
    </section>
  );
}
