
import React from 'react';
import ClassDesignDemo from './ClassDesignDemo';
import PolymorphismDemo from './PolymorphismDemo';

const Classes = () => {
  return (
    <section id="classes" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-display font-bold text-center mb-12 text-portfolio-800">
          Object-Oriented Programming Demos
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <ClassDesignDemo />
          <PolymorphismDemo />
        </div>
      </div>
    </section>
  );
};

export default Classes;
