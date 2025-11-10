
// import React, { useState, useEffect } from 'react'
// import { FiMenu, FiX } from 'react-icons/fi'

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [shadow, setShadow] = useState(false)

//   const toggleMenu = () => setIsOpen(!isOpen)

//   // Add shadow on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) setShadow(true)
//       else setShadow(false)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <header className={`fixed w-full z-50 bg-white transition-shadow duration-300 ${shadow ? 'shadow-xl' : 'shadow-md'}`}>
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">
//         {/* Logo */}
//         <h3 className="text-3xl font-bold text-orange-500">
//           Uts<span className="text-black">h</span>o
//         </h3>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center space-x-8">
//           {['about', 'skills', 'projects', 'resume', 'contact'].map((section) => (
//             <a
//               key={section}
//               href={`#${section}`}
//               className="hover:text-orange-500 transition-colors duration-300 font-semibold capitalize"
//             >
//               {section}
//             </a>
//           ))}
//           <a href="#contact" className="btn btn-primary ml-4">
//             Hire Me
//           </a>
//         </nav>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-2xl text-gray-700 focus:outline-none">
//             {isOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-lg w-full absolute top-full left-0 animate-slide-down">
//           <ul className="flex flex-col items-center space-y-4 py-6 text-gray-700 font-semibold">
//             {['about', 'skills', 'projects', 'resume', 'contact'].map((section) => (
//               <li key={section}>
//                 <a
//                   href={`#${section}`}
//                   onClick={toggleMenu}
//                   className="hover:text-orange-500 transition-colors duration-300 capitalize"
//                 >
//                   {section}
//                 </a>
//               </li>
//             ))}
//             {/* Mobile Hire Me Button */}
//             <li className="mt-4">
//               <a href="#contact" onClick={toggleMenu} className="btn btn-primary w-40 text-center">
//                 Hire Me
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </header>
//   )
// }

// export default Header


// src/components/Header.jsx
import React, { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [shadow, setShadow] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setShadow(true)
      else setShadow(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 bg-white transition-shadow duration-300 ${shadow ? 'shadow-xl' : 'shadow-md'}`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href="#banner" className="text-3xl font-bold text-orange-500 hover:text-orange-600 transition-colors duration-300">
          Uts<span className="text-black">h</span>o
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {['about', 'skills', 'projects', 'resume', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="hover:text-orange-500 transition-colors duration-300 font-semibold capitalize"
            >
              {section}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary ml-4">
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-700 focus:outline-none">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg w-full absolute top-full left-0 animate-slide-down">
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-700 font-semibold">
            {['about', 'skills', 'projects', 'resume', 'contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={toggleMenu}
                  className="hover:text-orange-500 transition-colors duration-300 capitalize"
                >
                  {section}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a href="#contact" onClick={toggleMenu} className="btn btn-primary w-40 text-center">
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
