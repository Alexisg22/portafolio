"use client"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi"
import i18n from "../../public/locales/i18n/i18nConfig"

export const HeaderComponent = () => {
  return (
    <div className="flex w-full justify-between">
          <div className="w-1/6 flex justify-center items-center gap-2">
            <button onClick={() => i18n.changeLanguage("es")} className="w-2/6 border border-sky-400 rounded">ES</button>
            <button onClick={() => i18n.changeLanguage("en")} className="w-2/6 border border-sky-400 rounded">EN</button>
          </div>
          <div className="flex justify-end gap-4 p-4 max-sm:absolute max-sm:top-full max-sm:justify-start">
            <a href="mailto:garciaciroalexis@gmail.com" className="text-white hover:transition-all hover:scale-110 hover:text-sky-400">
              <BiLogoGmail size={30} />
            </a>
            <a href="https://github.com/Alexisg22" className="text-white hover:transition-all hover:scale-110 hover:text-sky-400">
              <FaGithub size={30} />
            </a>
            <a href="https://linkedin.com/in/alexis-garcia-26b473254" className="text-white hover:transition-all hover:scale-110 hover:text-sky-400">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
  )
}

export default HeaderComponent