'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "Full Stack Developer";
  const typingSpeed = 50;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen pt-24 px-6 flex items-center justify-center bg-gradient-to-b from-primary to-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="text-accent">Your Name</span>
        </h1>
        
        <div className="text-2xl md:text-3xl text-gray-400 mb-8 h-12">
          {text}
          <span className="animate-pulse">|</span>
        </div>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          I create beautiful and functional web experiences. Let's build something amazing together.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#contact" className="px-8 py-3 bg-accent text-primary rounded-lg font-semibold hover:bg-blue-600 transition">
            Get In Touch
          </a>
          <a href="#projects" className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-primary transition">
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
