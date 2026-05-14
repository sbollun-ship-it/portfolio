'use client';

import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-md z-50 border-b border-secondary">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-accent">Portfolio</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <button onClick={() => scrollToSection('about')} className="hover:text-accent transition">
            About
          </button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-accent transition">
            Projects
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-accent transition">
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary border-t border-secondary">
          <div className="flex flex-col gap-4 p-6">
            <button onClick={() => scrollToSection('about')} className="hover:text-accent transition">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-accent transition">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-accent transition">
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
