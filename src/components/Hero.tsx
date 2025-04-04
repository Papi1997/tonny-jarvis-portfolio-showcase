
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg pt-16">
      <div className="container mx-auto px-4 py-16 md:py-24 text-center md:text-left">
        <div className="md:max-w-3xl mx-auto md:mx-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-portfolio-800">
            Tonny Onwonga
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8">
            Customer Experience & Operations Specialist
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto md:mx-0 mb-10">
            Dedicated professional with expertise in customer relationship management, 
            complaint resolution, and operational excellence in the financial sector.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-portfolio-800 hover:bg-portfolio-700 text-white rounded-md transition-colors shadow-md"
            >
              Contact Me
            </a>
            <a 
              href="#experience" 
              className="px-6 py-3 bg-white hover:bg-gray-100 text-portfolio-800 rounded-md border border-portfolio-200 transition-colors shadow-md"
            >
              View Experience
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" className="text-portfolio-800 hover:text-portfolio-accent transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
