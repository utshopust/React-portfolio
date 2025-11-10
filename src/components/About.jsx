import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLanguage,
} from "react-icons/fa";

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about"
      className="bg-[#1e1e2f] py-20 px-6 lg:px-20 text-gray-100"
    >
      <div className="max-w-5xl mx-auto text-center lg:text-left space-y-6">
        {/* Heading */}
        <h2
          className={`text-4xl font-bold mb-6 opacity-0 ${
            visible ? "animate-fade-in" : ""
          }`}
        >
          About Me
        </h2>
        <p
          className={`text-gray-300 text-lg mb-8 max-w-2xl mx-auto lg:mx-0 opacity-0 ${
            visible ? "animate-fade-in delay-200" : ""
          }`}
        >
          I am Hasan Ul Kabir Utsho, a dedicated and hardworking Full Stack
          Developer passionate about tackling challenges and learning new
          technologies. I am strong in problem-solving, full-stack development,
          and self-improvement, with enthusiasm for creating efficient,
          user-focused web applications.
        </p>

        {/* Info Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 opacity-0 ${
            visible ? "animate-fade-in delay-400" : ""
          }`}
        >
          <div className="flex items-center gap-3 p-4 bg-[#2a2a3f] rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <FaEnvelope className="text-orange-400 text-xl" />
            <div>
              <p className="font-semibold text-gray-200">Email</p>
              <p className="text-gray-300">mcutsho96@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-[#2a2a3f] rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <FaPhoneAlt className="text-orange-400 text-xl" />
            <div>
              <p className="font-semibold text-gray-200">Phone</p>
              <p className="text-gray-300">+8801721751591</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-[#2a2a3f] rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <FaMapMarkerAlt className="text-orange-400 text-xl" />
            <div>
              <p className="font-semibold text-gray-200">Address</p>
              <p className="text-gray-300">Dhaka - 1216, Bangladesh</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-[#2a2a3f] rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <FaLanguage className="text-orange-400 text-xl" />
            <div>
              <p className="font-semibold text-gray-200">Languages</p>
              <p className="text-gray-300">
                Bangla (Native), English (Proficient)
              </p>
            </div>
          </div>
        </div>

        {/* Social Buttons */}
        <div
          className={`flex flex-col sm:flex-row justify-center lg:justify-start gap-4 opacity-0 ${
            visible ? "animate-fade-in delay-600" : ""
          }`}
        >
          {[
            {
              icon: <FaGithub />,
              label: "GitHub",
              link: "https://github.com/utshopust",
            },
            {
              icon: <FaGlobe />,
              label: "Website",
              link: "https://utsho.zya.me/",
            },
            {
              icon: <FaLinkedin />,
              label: "LinkedIn",
              link: "https://linkedin.com/in/hasan-ul-kabir-utsho/",
            },
          ].map((btn, idx) => (
            <a
              key={idx}
              href={btn.link}
              target="_blank"
              className="relative inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg overflow-hidden group transition-transform transform hover:scale-105"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full group-hover:h-full top-0 left-0 rounded-lg"></span>
              <span className="relative z-10 group-hover:text-white flex items-center gap-2 text-gray-100">
                {btn.icon} {btn.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
