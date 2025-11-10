import React, { useEffect, useState } from "react";

const Resume = () => {
  const education = [
    {
      degree: "BSc in Computer Science & Engineering",
      institution: "Pabna University of Science & Technology",
      period: "Mar 2018 - Feb 2024",
      details:
        "CGPA: 3.25 | Focused on software engineering, database systems, and problem-solving.",
    },
  ];

  const experience = [
    {
      role: "Full Stack Developer",
      company: "Institute of Engineering and Technology (IET) | Dhaka",
      period: "May 2025 - Present",
      details: [
        "Develop and maintain responsive web applications using HTML, CSS, JavaScript, and React.",
        "Collaborate with teams to enhance UI/UX and ensure cross-platform compatibility.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Nion Enterprise | Kushtia, Bangladesh",
      period: "Jul 2020 - Jan 2021",
      details: [
        "Worked with the manager to analyze requirements and design websites.",
        "Developed front-end and back-end systems, managed database and deployment processes.",
      ],
    },
  ];

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="resume"
      className="bg-[#1e1e2f] py-20 px-6 lg:px-20 text-gray-100"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={`text-4xl font-bold text-orange-400 mb-12 opacity-0 ${
            visible ? "animate-fade-in" : ""
          }`}
        >
          Resume
        </h2>

        {/* Education */}
        <div className="mb-16 text-left">
          <h3 className="text-2xl font-semibold text-gray-200 mb-6">
            Education
          </h3>
          {education.map((edu, index) => (
            <div
              key={index}
              className="mb-6 p-6 rounded-2xl shadow-md hover:shadow-2xl transform transition duration-500 hover:-translate-y-2 bg-[#2a2a3f] border-t-4 border-orange-400 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h4 className="text-xl font-bold text-orange-400">
                {edu.degree}
              </h4>
              <p className="text-gray-400 mt-1">{edu.institution}</p>
              <p className="text-gray-500 mt-1">{edu.period}</p>
              <p className="text-gray-300 mt-2">{edu.details}</p>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="text-left">
          <h3 className="text-2xl font-semibold text-gray-200 mb-6">
            Experience
          </h3>
          {experience.map((exp, index) => (
            <div
              key={index}
              className="mb-6 p-6 rounded-2xl shadow-md hover:shadow-2xl transform transition duration-500 hover:-translate-y-2 bg-[#2a2a3f] border-t-4 border-orange-400 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h4 className="text-xl font-bold text-orange-400">{exp.role}</h4>
              <p className="text-gray-400 mt-1">{exp.company}</p>
              <p className="text-gray-500 mt-1">{exp.period}</p>
              <ul className="mt-2 list-disc list-inside text-gray-300">
                {exp.details.map((item, idx) => (
                  <li key={idx} className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
