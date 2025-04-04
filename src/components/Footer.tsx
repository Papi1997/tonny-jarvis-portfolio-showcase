
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-display font-bold mb-4">Tonny Onwonga</h2>
          <p className="text-portfolio-200 mb-6">Customer Experience & Operations Specialist</p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
            <a href="#education" className="text-gray-300 hover:text-white transition-colors">Education</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400">
              &copy; {currentYear} Tonny Onwonga. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
