
import React, { useEffect, useState } from 'react'

const Skills = () => {
  const skills = [
    { name: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'Next.js'] },
    { name: 'Backend', items: ['PHP', 'Laravel', 'Express.js', 'MySQL'] },
    { name: 'Programming Languages', items: ['C', 'C++', 'Python'] },
    { name: 'Tools & Others', items: ['Git', 'GitHub', 'Tailwind CSS', 'DaisyUI'] },
  ]

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-orange-50 to-orange-100 py-20 px-6 lg:px-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className={`text-4xl font-bold mb-12 text-gray-900 opacity-0 ${visible ? 'animate-fade-in' : ''}`}>
          My Skills
        </h2>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 opacity-0 ${visible ? 'animate-fade-in delay-200' : ''}`}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transform transition duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-gradient-to-r hover:from-orange-400 hover:to-pink-500"
            >
              <h3 className="text-xl font-bold text-orange-500 mb-4">{skill.name}</h3>
              <ul className="space-y-3">
                {skill.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="relative pl-6 text-gray-700 font-medium before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:rounded-full before:bg-gradient-to-r before:from-pink-500 before:to-orange-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

