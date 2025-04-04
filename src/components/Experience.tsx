
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="section-container bg-gray-50">
      <h2 className="section-title">Professional Experience</h2>
      <div className="space-y-8 pl-0 ml-0">
        <div className="timeline-item animate-slide-in">
          <div className="mb-2">
            <h3 className="text-xl font-semibold text-portfolio-800">Card and ATM Operations Specialist</h3>
            <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-3">
              <span className="font-medium text-portfolio-700">NCBA Group</span>
              <span className="hidden sm:inline mx-2">|</span>
              <span>Oct 2022 – Present</span>
            </div>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-portfolio-accent mr-2">•</span>
              <span>Resolved customer service requests, including card issuance and PIN migrations, ensuring satisfaction and compliance with SLAs.</span>
            </li>
            <li className="flex items-start">
              <span className="text-portfolio-accent mr-2">•</span>
              <span>Communicated effectively with customers on resolutions and escalated complex issues to appropriate teams.</span>
            </li>
            <li className="flex items-start">
              <span className="text-portfolio-accent mr-2">•</span>
              <span>Analyzed operational gaps and implemented improvements to enhance customer experiences.</span>
            </li>
            <li className="flex items-start">
              <span className="text-portfolio-accent mr-2">•</span>
              <span>Ensured compliance with audit standards and enterprise risk frameworks in all customer interactions.</span>
            </li>
          </ul>
        </div>

        <div className="timeline-item animate-slide-in" style={{ animationDelay: '150ms' }}>
          <div className="mb-2">
            <h3 className="text-xl font-semibold text-portfolio-800">Contact Centre Customer Experience Associate</h3>
            <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-3">
              <span className="font-medium text-portfolio-700">NCBA Group</span>
              <span className="hidden sm:inline mx-2">|</span>
              <span>Jul 2022 – Sep 2022</span>
            </div>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-portfolio-accent mr-2">•</span>
              <span>Handled customer inquiries, complaints, and escalations with a focus on resolving issues at first contact.</span>
            </li>
            <li className="flex items-start">
              <span className="text-portfolio-accent mr-2">•</span>
              <span>Conducted surveys to gather customer feedback, analyzed trends, and recommended service improvements.</span>
            </li>
            <li className="flex items-start">
              <span className="text-portfolio-accent mr-2">•</span>
              <span>Collaborated with teams to address fraud prevention and compliance with regulatory frameworks.</span>
            </li>
          </ul>
        </div>

        <div className="timeline-item animate-slide-in" style={{ animationDelay: '300ms' }}>
          <div className="mb-2">
            <h3 className="text-xl font-semibold text-portfolio-800">Economist Intern</h3>
            <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-3">
              <span className="font-medium text-portfolio-700">Ministry of Sports, Culture, and Heritage</span>
              <span className="hidden sm:inline mx-2">|</span>
              <span>May 2019 – Sep 2019</span>
            </div>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-portfolio-accent mr-2">•</span>
              <span>Assisted in analyzing feedback and resolving stakeholder concerns related to budget allocations and project impacts.</span>
            </li>
            <li className="flex items-start">
              <span className="text-portfolio-accent mr-2">•</span>
              <span>Developed reports highlighting improvement areas for program efficiency.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
