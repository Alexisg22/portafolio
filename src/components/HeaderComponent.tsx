import { FaGithub, FaLinkedin } from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi"
import { LanguageComponent } from "./LanguageComponent"

export const HeaderComponent = () => {
  return (
    <div className="flex w-full justify-between">
          <div className="flex justify-end gap-4 p-4 max-sm:absolute max-sm:top-full">
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
          <div className="max-sm:hidden flex justify-center items-center">
            <LanguageComponent />
          </div>
        </div>
  )
}

export default HeaderComponent