
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ['Trends', 'Categories', 'About'];

  return (
    <header className="py-5 sticky top-0 z-50 bg-dark-navy/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-black text-white">
          <span className="text-neon-pink">Trendy</span>
          <span className="text-electric-blue">Kid</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a key={link} href="#" className="text-slate hover:text-neon-pink transition-colors duration-300">{link}</a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="hidden md:inline-block px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-electric-blue to-neon-pink rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
          >
            Download App
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-2/3 bg-dark-navy/95 backdrop-blur-lg shadow-xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map(link => (
            <a key={link} href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl text-slate hover:text-neon-pink transition-colors duration-300">{link}</a>
          ))}
          <a
            href="#"
            className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-electric-blue to-neon-pink rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
          >
            Download App
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
