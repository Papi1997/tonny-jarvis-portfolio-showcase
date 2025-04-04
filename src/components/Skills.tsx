
import React from 'react';

const Skills = () => {
  const technicalSkills = [
    "Data Analysis (SQL)",
    "Python Programming",
    "Advanced Excel",
    "Report Writing & Documentation",
    "Complaint Tracking & Resolution Tools",
    "Statistical Analysis",
    "Data Visualization",
    "Financial Planning"
  ];

  const softSkills = [
    "Customer Service Excellence",
    "Problem Solving",
    "Communication",
    "Stakeholder Management",
    "Compliance & Standards",
    "Analytical Thinking",
    "Team Collaboration",
    "Process Improvement"
  ];

  return (
    <section id="skills" className="section-container bg-gray-50">
      <h2 className="section-title">Skills</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
          <h3 className="text-xl font-semibold text-portfolio-800 mb-4 pb-2 border-b border-gray-200">
            Technical Skills
          </h3>
          <div className="mt-4">
            {technicalSkills.map((skill, index) => (
              <span 
                key={index} 
                className="skill-tag"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in" style={{ animationDelay: '150ms' }}>
          <h3 className="text-xl font-semibold text-portfolio-800 mb-4 pb-2 border-b border-gray-200">
            Soft Skills
          </h3>
          <div className="mt-4">
            {softSkills.map((skill, index) => (
              <span 
                key={index} 
                className="skill-tag"
                style={{ animationDelay: `${(index + technicalSkills.length) * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
