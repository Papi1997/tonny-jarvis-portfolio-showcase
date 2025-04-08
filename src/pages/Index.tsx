
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
      <Footer />
    </div>
  );
};

export default Index;
