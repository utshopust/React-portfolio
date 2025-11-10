import React, { useEffect, useState } from "react";

const Projects = () => {
  const projects = [
    {
      title: "Student Attendance Management System",
      description:
        "A PHP-based web app for managing student attendance with role-based access control for admin, teacher, and student.",
      github:
        "https://github.com/utshopust/student-attendance-management-system",
      live: "",
      date: "Nov 2023",
    },
    {
      title: "Online Bookshop with Laravel",
      description:
        "A web application for browsing, buying, and reviewing books. Built using Laravel 5.8, Bootstrap 4, MySQL, Stripe payment integration, and user authentication.",
      github: "https://github.com/utshopust/online-book-shop",
      live: "",
      date: "Jun 2022",
    },
    {
      title: "Motor Vehicle Engineering",
      description:
        "A React SPA built with JavaScript and Tailwind CSS. Functions as a professional agency landing page, featuring Services, Portfolio, client Reviews, and Contact system.",
      github: "https://github.com/utshopust",
      live: "https://nonchalant-pipe.surge.sh/",
      date: "Present",
    },
  ];

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="projects"
      className="bg-[#1e1e2f] py-20 px-6 lg:px-20 text-gray-100"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={`text-4xl font-bold text-orange-400 mb-12 opacity-0 ${
            visible ? "animate-fade-in" : ""
          }`}
        >
          Projects
        </h2>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 ${
            visible ? "animate-fade-in delay-200" : ""
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-[#2a2a3f] rounded-2xl shadow-md hover:shadow-2xl transform transition duration-500 hover:-translate-y-2 hover:scale-105 border-t-4 border-orange-400 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-orange-400 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-500">{project.date}</span>
                <div className="space-x-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="btn btn-sm btn-outline border-orange-400 text-orange-400 hover:bg-orange-500 hover:text-gray-100 transition"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="btn btn-sm btn-primary bg-orange-500 text-gray-100 hover:bg-orange-400 transition"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
