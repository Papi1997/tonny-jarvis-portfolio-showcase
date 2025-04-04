
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1 animate-fade-in">
          <h3 className="text-2xl font-display font-semibold text-portfolio-700 mb-4">
            Career Objectives
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-portfolio-accent mr-2">•</span>
              <span>To utilize my strong communication, analytical, and organizational skills to ensure timely and effective resolution of customer complaints.</span>
            </li>
            <li className="flex items-start">
              <span className="text-portfolio-accent mr-2">•</span>
              <span>To foster excellent customer experiences by adhering to industry standards, ensuring compliance, and enhancing processes for continuous improvement.</span>
            </li>
            <li className="flex items-start">
              <span className="text-portfolio-accent mr-2">•</span>
              <span>To contribute to the organization's customer service delivery goals through ethical and efficient handling of customer concerns.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-display font-semibold text-portfolio-700 mt-8 mb-4">
            Key Competencies
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-portfolio-accent mr-2">•</span>
              <span><strong>Customer Relationship Management:</strong> Extensive experience resolving customer issues promptly and enhancing satisfaction.</span>
            </li>
            <li className="flex items-start">
              <span className="text-portfolio-accent mr-2">•</span>
              <span><strong>Analytical & Problem-Solving Skills:</strong> Adept at analyzing complaints data to identify root causes and develop effective resolutions.</span>
            </li>
            <li className="flex items-start">
              <span className="text-portfolio-accent mr-2">•</span>
              <span><strong>Compliance & Standards:</strong> Skilled in ensuring adherence to regulatory guidelines and internal complaint handling procedures.</span>
            </li>
            <li className="flex items-start">
              <span className="text-portfolio-accent mr-2">•</span>
              <span><strong>Communication Excellence:</strong> Strong verbal and written communication abilities for clear, empathetic, and professional interactions.</span>
            </li>
            <li className="flex items-start">
              <span className="text-portfolio-accent mr-2">•</span>
              <span><strong>Stakeholder Management:</strong> Proficient in collaborating with cross-functional teams to address and resolve customer concerns.</span>
            </li>
          </ul>
        </div>
        <div className="order-1 md:order-2 animate-fade-in">
          <div className="bg-portfolio-50 p-8 rounded-lg border border-portfolio-100 shadow-md">
            <h3 className="text-2xl font-display font-semibold text-portfolio-700 mb-6">
              Languages
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">Swahili</span>
                  <span className="text-gray-600">Native</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full">
                  <div className="h-full bg-portfolio-accent rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">English</span>
                  <span className="text-gray-600">Fluent</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full">
                  <div className="h-full bg-portfolio-accent rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">German</span>
                  <span className="text-gray-600">Basic</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full">
                  <div className="h-full bg-portfolio-accent rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-display font-semibold text-portfolio-700 mt-10 mb-6">
              Achievements
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-portfolio-accent mr-2">•</span>
                <span>Strengthened customer satisfaction metrics by resolving service requests within agreed timelines.</span>
              </li>
              <li className="flex items-start">
                <span className="text-portfolio-accent mr-2">•</span>
                <span>Enhanced customer issue resolution processes, ensuring timely communication and compliance with risk and audit standards.</span>
              </li>
              <li className="flex items-start">
                <span className="text-portfolio-accent mr-2">•</span>
                <span>Successfully managed escalations, achieving resolution while maintaining high ethical standards.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
