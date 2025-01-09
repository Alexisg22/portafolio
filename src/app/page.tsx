  import { FaGithub, FaLinkedin } from "react-icons/fa";
  import { BiLogoGmail } from "react-icons/bi";
  import Content from "@/components/Content";

  export default function Home() {
    return (
    <div className="w-full min-h-screen flex justify-center items-center">
        <div className="w-[90%] h-screen max-sm:w-full">
          <header className="w-full flex justify-end gap-4 p-4 max-sm:absolute max-sm:top-full max-sm:justify-start">
            <a href="mailto:garciaciroalexis@gmail.com" className="text-white hover:transition-all hover:scale-110 hover:text-sky-400">
              <BiLogoGmail size={30} />
            </a>
            <a href="https://github.com/Alexisg22" className="text-white hover:transition-all hover:scale-110 hover:text-sky-400">
              <FaGithub size={30} />
            </a>
            <a href="https://linkedin.com/in/alexis-garcia-26b473254" className="text-white hover:transition-all hover:scale-110 hover:text-sky-400">
              <FaLinkedin size={30} />
            </a>
          </header>
          
          <Content />

          <span className="w-full flex justify-end p-3">
              <p className="text-sm border-solid border-b border-sky-400 text-zinc-300">2025 | Alexis García | Fullstack Developer</p>
          </span>
        </div>
    </div>
    );
  }
