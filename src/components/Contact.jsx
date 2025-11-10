import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Contact = () => {
  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/hasanulkabir.utsho', icon: <FaFacebookF size={28} /> },
    { name: 'GitHub', url: 'https://github.com/utshopust', icon: <FaGithub size={28} /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/hasan-ul-kabir-utsho/', icon: <FaLinkedinIn size={28} /> },
  ]

  return (
    <section id="contact" className="bg-gray-50 py-20 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in">Contact Me</h2>
        <p className="text-gray-700 mb-10 animate-fade-in delay-200">
          Fill out the form below to get in touch with me, or connect via social media.
        </p>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Form */}
          <form className="flex-1 bg-white p-8 rounded-lg shadow-lg space-y-4 transform hover:scale-[1.02] transition-all duration-300">
            <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full" required />
            <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full" required />
            <textarea name="message" placeholder="Message" className="textarea textarea-bordered w-full h-32" required />
            <button type="submit" className="btn btn-primary w-full hover:scale-105 transition-transform">
              Submit
            </button>
          </form>

          {/* Social & Contact Info */}
          <div className="flex-1 flex flex-col justify-center items-center space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Connect with me</h3>
            
            <div className="flex space-x-6">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-transform transform hover:scale-125 hover:text-orange-500 duration-300 text-gray-800"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Modern Email & Phone Cards */}
            <div className="mt-8 flex flex-col space-y-4 w-full max-w-sm mx-auto">
              <a href="mailto:mcutsho96@gmail.com" className="flex items-center gap-4 p-4 bg-white shadow-lg rounded-lg hover:bg-orange-50 hover:shadow-xl transition-all duration-300">
                <FaEnvelope className="text-orange-500" size={24} />
                <span className="font-semibold text-gray-700 text-lg">mcutsho96@gmail.com</span>
              </a>
              <a href="tel:+8801721751591" className="flex items-center gap-4 p-4 bg-white shadow-lg rounded-lg hover:bg-orange-50 hover:shadow-xl transition-all duration-300">
                <FaPhoneAlt className="text-orange-500" size={24} />
                <span className="font-semibold text-gray-700 text-lg">+8801721751591</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
