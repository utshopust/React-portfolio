// // // src/components/Banner.jsx
// // import React from 'react'
// // import profilePic from '../assets/profile.jpg' // tumar image asset path
// // import CV from '../assets/Hasan Ul Kabir Utsho.pdf' // tumar CV asset path

// // const Banner = () => {
// //   return (
// //     <section
// //       id="banner"
// //       className="bg-white flex flex-col-reverse lg:flex-row items-center justify-between py-20 px-6 lg:px-20"
// //     >
// //       {/* Left Content */}
// //       <div className="lg:w-1/2">
// //         <h4 className="text-2xl font-semibold text-gray-700">Hi, I am</h4>
// //         <h1 className="text-5xl font-bold text-gray-900 my-2">UTSHO</h1>
// //         <p className="text-gray-600 mb-6">
// //           Passionate Web Developer creating modern, responsive, and impactful websites.
// //         </p>

// //         <div className="flex space-x-4">
// //           <a
// //             href={CV}
// //             download
// //             className="btn btn-primary"
// //           >
// //             <i className="fa-solid fa-download mr-2"></i> Download CV
// //           </a>
// //           <a
// //             href="#contact"
// //             className="btn btn-outline btn-primary"
// //           >
// //             <i className="fa-solid fa-phone mr-2"></i> Contact
// //           </a>
// //         </div>
// //       </div>

// //       {/* Right Image */}
// //       <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0">
// //         <img
// //           src={profilePic}
// //           alt="UTSHO Profile"
// //           className="w-80 rounded-full shadow-lg"
// //         />
// //       </div>
// //     </section>
// //   )
// // }

// // export default Banner

// // src/components/Banner.jsx
// import React from 'react'
// import profilePic from '../assets/profile.jpg' // tumar image asset path
// import CV from '../assets/Hasan Ul Kabir Utsho.pdf' // tumar CV asset path
// import { FaDownload, FaPhone } from 'react-icons/fa'

// const Banner = () => {
//   return (
//     <section
//       id="banner"
//       className="bg-gradient-to-r from-orange-50 to-white flex flex-col-reverse lg:flex-row items-center justify-between py-20 px-6 lg:px-20"
//     >
//       {/* Left Content */}
//       <div className="lg:w-1/2 text-center lg:text-left space-y-4">
//         <h4 className="text-2xl font-semibold text-gray-700 animate-fade-in-down">Hi, I am</h4>
//         <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 animate-fade-in-up">UTSHO</h1>
//         <p className="text-gray-600 mb-6 max-w-md mx-auto lg:mx-0 animate-fade-in">
//           Passionate Web Developer creating modern, responsive, and impactful websites.
//         </p>

//         <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
//           <a
//             href={CV}
//             download
//             className="btn btn-primary flex items-center gap-2 transition-transform transform hover:scale-105"
//           >
//             <FaDownload /> Download CV
//           </a>
//           <a
//             href="#contact"
//             className="btn btn-outline btn-primary flex items-center gap-2 transition-transform transform hover:scale-105"
//           >
//             <FaPhone /> Contact
//           </a>
//         </div>
//       </div>

//       {/* Right Image */}
//       <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0">
//         <img
//           src={profilePic}
//           alt="UTSHO Profile"
//           className="w-72 lg:w-80 rounded-full shadow-2xl border-4 border-orange-200 transition-transform transform hover:scale-105 animate-fade-in"
//         />
//       </div>
//     </section>
//   )
// }

// export default Banner

// src/components/Banner.jsx
// src/components/Banner.jsx
import React, { useEffect, useRef, useState } from 'react'
import profilePic from '../assets/profile.jpg'
import { FaDownload, FaPhone } from 'react-icons/fa'

const Banner = () => {
  const [visible, setVisible] = useState(false)
  const bannerRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )
    if (bannerRef.current) observer.observe(bannerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={bannerRef}
      id="banner"
      className="bg-gradient-to-r from-orange-50 to-white flex flex-col-reverse lg:flex-row items-center justify-between py-20 px-6 lg:px-20"
    >
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-4">
        <h4
          className={`text-2xl font-semibold text-gray-700 opacity-0 ${visible ? 'animate-fade-in-down delay-200' : ''}`}
        >
          Hi, I am
        </h4>
        <h1
          className={`text-5xl lg:text-6xl font-bold text-gray-900 opacity-0 ${visible ? 'animate-fade-in-up delay-400' : ''}`}
        >
          UTSHO
        </h1>
        <p
          className={`text-gray-600 mb-6 max-w-md mx-auto lg:mx-0 opacity-0 ${visible ? 'animate-fade-in delay-600' : ''}`}
        >
          Passionate Web Developer creating modern, responsive, and impactful websites.
        </p>

        <div className={`flex flex-col sm:flex-row justify-center lg:justify-start gap-4 opacity-0 ${visible ? 'animate-fade-in delay-800' : ''}`}>
          {/* CV Download Link */}
          <a
            href="/Hasan_Ul_Kabir_Utsho.pdf"
            download
            className="btn btn-primary flex items-center gap-2 transition-transform transform hover:scale-105"
          >
            <FaDownload /> Download CV
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="btn btn-outline btn-primary flex items-center gap-2 transition-transform transform hover:scale-105"
          >
            <FaPhone /> Contact
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className={`lg:w-1/2 flex justify-center mb-10 lg:mb-0 opacity-0 ${visible ? 'animate-fade-in delay-600' : ''}`}>
        <img
          src={profilePic}
          alt="UTSHO Profile"
          className="w-72 lg:w-80 rounded-full shadow-2xl border-4 border-orange-200 transition-transform transform hover:scale-105"
        />
      </div>
    </section>
  )
}

export default Banner


