import React, { useEffect, useRef, useState } from "react";
import profilePic from "../assets/profile.jpg";
import { FaDownload, FaPhone } from "react-icons/fa";

const Banner = () => {
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (bannerRef.current) observer.observe(bannerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={bannerRef}
      id="banner"
      className="bg-[#1e1e2f] flex flex-col-reverse lg:flex-row items-center justify-between py-20 px-6 lg:px-20 text-gray-100"
    >
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-4">
        <h4
          className={`text-2xl font-semibold text-gray-300 opacity-0 ${
            visible ? "animate-fade-in-down delay-200" : ""
          }`}
        >
          Hi, I am
        </h4>
        <h1
          className={`text-5xl lg:text-6xl font-bold text-orange-400 opacity-0 ${
            visible ? "animate-fade-in-up delay-400" : ""
          }`}
        >
          UTSHO
        </h1>
        <p
          className={`text-gray-300 mb-6 max-w-md mx-auto lg:mx-0 opacity-0 ${
            visible ? "animate-fade-in delay-600" : ""
          }`}
        >
          Passionate Web Developer creating modern, responsive, and impactful
          websites.
        </p>

        <div
          className={`flex flex-col sm:flex-row justify-center lg:justify-start gap-4 opacity-0 ${
            visible ? "animate-fade-in delay-800" : ""
          }`}
        >
          {/* CV Download Link */}
          <a
            href="/Hasan_Ul_Kabir_Utsho.pdf"
            download
            className="btn btn-primary bg-orange-500 text-gray-100 hover:bg-orange-400 flex items-center gap-2 transition-transform transform hover:scale-105"
          >
            <FaDownload /> Download CV
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="btn btn-outline border-orange-400 text-orange-400 hover:bg-orange-500 hover:text-gray-100 flex items-center gap-2 transition-transform transform hover:scale-105"
          >
            <FaPhone /> Contact
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div
        className={`lg:w-1/2 flex justify-center mb-10 lg:mb-0 opacity-0 ${
          visible ? "animate-fade-in delay-600" : ""
        }`}
      >
        <div className="relative w-72 lg:w-80">
          {/* Gradient background circle */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500 to-pink-500 blur-3xl opacity-30"></div>

          {/* Profile image */}
          <img
            src={profilePic}
            alt="UTSHO Profile"
            className="relative w-full rounded-full shadow-2xl border-4 border-orange-400 transition-transform transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
