import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/hasanulkabir.utsho", icon: <FaFacebookF /> },
    { name: "GitHub", url: "https://github.com/utshopust", icon: <FaGithub /> },
    { name: "LinkedIn", url: "https://linkedin.com/in/hasan-ul-kabir-utsho/", icon: <FaLinkedinIn /> },
  ];

  return (
    <footer className="bg-[#1e1e2f] py-6 text-gray-400 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        {socialLinks.map((social, idx) => (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-400 transition-colors duration-300"
            title={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
      <p className="text-sm">
        © 2025 Hasan Ul Kabir Utsho. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
