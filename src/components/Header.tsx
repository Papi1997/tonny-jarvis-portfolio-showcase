
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-display font-bold text-portfolio-800">
          Tonny Onwonga
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <button 
          className="md:hidden text-gray-700 hover:text-portfolio-800 focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="nav-link" onClick={toggleMenu}>About</a>
              <a href="#experience" className="nav-link" onClick={toggleMenu}>Experience</a>
              <a href="#education" className="nav-link" onClick={toggleMenu}>Education</a>
              <a href="#skills" className="nav-link" onClick={toggleMenu}>Skills</a>
              <a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
