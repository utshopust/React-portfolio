import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      name: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "Bootstrap", "React", "Next.js"],
    },
    { name: "Backend", items: ["PHP", "Laravel", "Express.js", "MySQL"] },
    { name: "Programming Languages", items: ["C", "C++", "Python"] },
    {
      name: "Tools & Others",
      items: ["Git", "GitHub", "Tailwind CSS", "DaisyUI"],
    },
  ];

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="skills"
      className="bg-[#1e1e2f] py-20 px-6 lg:px-20 text-gray-100"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={`text-4xl font-bold mb-12 opacity-0 ${
            visible ? "animate-fade-in" : ""
          }`}
        >
          My Skills
        </h2>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 opacity-0 ${
            visible ? "animate-fade-in delay-200" : ""
          }`}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-[#2a2a3f] rounded-xl shadow-xl hover:shadow-2xl transform transition duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-gradient-to-r hover:from-orange-400 hover:to-pink-500 text-center"
            >
              <h3 className="text-xl font-bold text-orange-400 mb-4">
                {skill.name}
              </h3>
              <ul className="space-y-3">
                {skill.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-center items-center text-gray-200 font-medium"
                  >
                    <FaCheckCircle className="text-orange-400 mr-2" />
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

export default Skills;
