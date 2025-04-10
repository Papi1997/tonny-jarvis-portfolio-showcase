
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Classes from '@/components/Classes';

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Classes />
      <Contact />
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <a 
          href="/resume.html" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-portfolio-800 text-white rounded-md hover:bg-portfolio-700 transition-colors"
        >
          View Detailed Resume
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
