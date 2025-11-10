// // src/components/Resume.jsx
// import React from "react";

// const Resume = () => {
//   const education = [
//     {
//       degree: "BSc in Computer Science & Engineering",
//       institution: "Pabna University of Science & Technology",
//       period: "Mar 2018 - Feb 2024",
//       details:
//         "CGPA: 3.25 | Focused on software engineering, database systems, and problem-solving.",
//     },
//   ];

//   const experience = [
//     {
//       role: "Full Stack Developer",
//       company: "Institute of Engineering and Technology (IET) | Dhaka",
//       period: "May 2025 - Present",
//       details:
//         "Develop and maintain responsive web applications using HTML, CSS, JavaScript, and React. Collaborate with teams to enhance UI/UX and ensure cross-platform compatibility.",
//     },
//     {
//       role: "Full Stack Developer",
//       company: "Nion Enterprise | Kushtia, Bangladesh",
//       period: "Jul 2020 - Jan 2021",
//       details:
//         "Worked with the manager to analyze requirements, designed websites, developed front-end and back-end systems, and managed database and deployment processes.",
//     },
//   ];

//   return (
//     <section id="resume" className="bg-white py-20 px-6 lg:px-20">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-gray-900 mb-12">Resume</h2>

//         {/* Education */}
//         <div className="mb-16 text-left">
//           <h3 className="text-2xl font-semibold text-gray-800 mb-6">
//             Education
//           </h3>
//           {education.map((edu, index) => (
//             <div
//               key={index}
//               className="mb-6 p-6 border rounded-lg shadow hover:shadow-lg transition duration-300"
//             >
//               <h4 className="text-xl font-semibold text-gray-800">
//                 {edu.degree}
//               </h4>
//               <p className="text-gray-500">
//                 {edu.institution} | {edu.period}
//               </p>
//               <p className="text-gray-600 mt-2">{edu.details}</p>
//             </div>
//           ))}
//         </div>

//         {/* Experience */}
//         <div className="text-left">
//           <h3 className="text-2xl font-semibold text-gray-800 mb-6">
//             Experience
//           </h3>
//           {experience.map((exp, index) => (
//             <div
//               key={index}
//               className="mb-6 p-6 border rounded-lg shadow hover:shadow-lg transition duration-300"
//             >
//               <h4 className="text-xl font-semibold text-gray-800">
//                 {exp.role}
//               </h4>
//               <p className="text-gray-500">
//                 {exp.company} | {exp.period}
//               </p>
//               <p className="text-gray-600 mt-2">{exp.details}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Resume;


// src/components/Resume.jsx
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
      details:
        "Develop and maintain responsive web applications using HTML, CSS, JavaScript, and React. Collaborate with teams to enhance UI/UX and ensure cross-platform compatibility.",
    },
    {
      role: "Full Stack Developer",
      company: "Nion Enterprise | Kushtia, Bangladesh",
      period: "Jul 2020 - Jan 2021",
      details:
        "Worked with the manager to analyze requirements, designed websites, developed front-end and back-end systems, and managed database and deployment processes.",
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
      className="bg-gradient-to-r from-gray-50 via-white to-gray-50 py-20 px-6 lg:px-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={`text-4xl font-bold text-purple-800 mb-12 opacity-0 ${
            visible ? "animate-fade-in" : ""
          }`}
        >
          Resume
        </h2>

        {/* Education */}
        <div className="mb-16 text-left">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Education</h3>
          {education.map((edu, index) => (
            <div
              key={index}
              className="mb-6 p-6 rounded-2xl shadow-md hover:shadow-2xl transform transition duration-500 hover:-translate-y-2 bg-gradient-to-tr from-indigo-50 to-purple-50 border-t-4 border-purple-400 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h4 className="text-xl font-bold text-purple-700">{edu.degree}</h4>
              <p className="text-gray-500 mt-1">
                {edu.institution} | {edu.period}
              </p>
              <p className="text-gray-600 mt-2">{edu.details}</p>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="text-left">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Experience</h3>
          {experience.map((exp, index) => (
            <div
              key={index}
              className="mb-6 p-6 rounded-2xl shadow-md hover:shadow-2xl transform transition duration-500 hover:-translate-y-2 bg-gradient-to-tr from-pink-50 to-red-50 border-t-4 border-red-400 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h4 className="text-xl font-bold text-red-700">{exp.role}</h4>
              <p className="text-gray-500 mt-1">
                {exp.company} | {exp.period}
              </p>
              <p className="text-gray-600 mt-2">{exp.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
