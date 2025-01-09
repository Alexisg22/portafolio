import React from 'react'
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    const contacts = [
        {
          icon: <FaEnvelope className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white group-hover:scale-110 transition-transform" />,
          title: 'Gmail',
          description: 'garciaciroalexis@gmail.com',
          bgColor: 'bg-gradient-to-br from-red-500 to-red-600',
          hoverEffect: 'hover:from-red-600 hover:to-red-700',
          onClick: () => window.location.href = 'mailto:garciaciroalexis@gmail.com'
        },
        {
          icon: <FaWhatsapp className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white group-hover:scale-110 transition-transform" />,
          title: 'WhatsApp',
          description: '+57 310 742 49 47',
          bgColor: 'bg-gradient-to-br from-green-500 to-green-600',
          hoverEffect: 'hover:from-green-600 hover:to-green-700',
          onClick: () => window.open('https://wa.me/573107424947', '_blank')
        },
        {
          icon: <FaLinkedin className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white group-hover:scale-110 transition-transform" />,
          title: 'LinkedIn',
          description: 'Alexis García',
          bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600',
          hoverEffect: 'hover:from-blue-600 hover:to-blue-700',
          onClick: () => window.open('https://linkedin.com/in/alexis-garcia-26b473254', '_blank')
        },
        {
          icon: <FaGithub className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white group-hover:scale-110 transition-transform" />,
          title: 'GitHub',
          description: 'Alexisg22',
          bgColor: 'bg-gradient-to-br from-gray-700 to-gray-800',
          hoverEffect: 'hover:from-gray-800 hover:to-gray-900',
          onClick: () => window.open('https://github.com/Alexisg22', '_blank')
        }
      ];
    
  return (
    <div className='w-full h-full flex flex-col justify-center items-center  border-solid border-l-4 border-sky-400 p-4'>
         <div className="grid grid-c gap-4 max-md:w-[90%] ">
          {contacts.map((contact, index) => (
            <div
              key={index}
              onClick={contact.onClick}
              className={`group cursor-pointer rounded-xl shadow-lg max-h-32 
                p-4 sm:p-6 transition-all duration-300 hover:shadow-xl  
                transform hover:-translate-y-1 max-md:w-[85%] max-sm:w-full ${contact.bgColor} ${contact.hoverEffect}`}
            >
              <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                <div className="rounded-full p-2 sm:p-3 lg:p-4 bg-white/10 backdrop-blur-sm transition-colors duration-300">
                  {contact.icon}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-0.5 sm:mb-1">
                    {contact.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/90 truncate">
                    {contact.description}
                  </p>
                </div>
                
                <button className="hidden sm:block px-3 py-2 lg:px-4 lg:py-2 
                  bg-white/10 hover:bg-white/20 rounded-lg transition-all 
                  duration-300 text-white hover:scale-105 
                  text-sm whitespace-nowrap backdrop-blur-sm">
                  Contactar
                </button>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Contact