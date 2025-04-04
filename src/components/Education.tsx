
import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section-container">
      <h2 className="section-title">Education</h2>
      <div className="space-y-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-portfolio-200 transition-all hover:shadow-lg animate-fade-in">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-portfolio-800">WorldQuant University</h3>
                <p className="text-gray-600">Applied Data Science Lab</p>
              </div>
              <span className="text-sm text-gray-500">Nov 2024 – Ongoing</span>
            </div>
            <p className="text-gray-700">
              Focused on Data Visualization, Predictive Models, and Machine Learning Ethics.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-portfolio-200 transition-all hover:shadow-lg animate-fade-in" style={{ animationDelay: '150ms' }}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-portfolio-800">Amazon Web Services (AWS)</h3>
                <p className="text-gray-600">Cloud Computing & Data Science</p>
              </div>
              <span className="text-sm text-gray-500">Oct 2024 – Ongoing</span>
            </div>
            <p className="text-gray-700">
              Learning Data Warehousing, Technical Essentials, and Practical Data Science with Amazon SageMaker.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-portfolio-200 transition-all hover:shadow-lg animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-portfolio-800">Power Learn Project</h3>
                <p className="text-gray-600">Software Development & Data Analysis</p>
              </div>
              <span className="text-sm text-gray-500">Feb 2024 – Aug 2024</span>
            </div>
            <p className="text-gray-700">
              Studied Python Programming, Machine Learning, SQL, and Advanced Excel.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-portfolio-200 transition-all hover:shadow-lg animate-fade-in" style={{ animationDelay: '450ms' }}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-portfolio-800">Moi University</h3>
                <p className="text-gray-600">Bachelor of Arts in Economics</p>
              </div>
              <span className="text-sm text-gray-500">Sep 2016 – Sep 2020</span>
            </div>
            <p className="text-gray-700">
              Focused on Financial Planning, Taxation, and Statistical Analysis.
            </p>
          </div>
        </div>

        <div className="pt-6">
          <h3 className="text-2xl font-display font-semibold text-portfolio-700 mb-6">
            Certifications
          </h3>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-portfolio-accent mr-2">•</span>
                <span>Customer Experience Certification (in progress)</span>
              </li>
              <li className="flex items-start">
                <span className="text-portfolio-accent mr-2">•</span>
                <span>Quality Assurance Certification (in progress)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
