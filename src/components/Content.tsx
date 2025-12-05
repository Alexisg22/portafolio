"use client"
import React, { useState } from "react"
import Image from "next/image"
import About from "./About"
import Projects from "./Projects"
import Skills from "./Skills"
import Contact from "./Contact"

const Content = () => {
  type Section = "about" | "projects" | "skills" | "contact"
  const [selectedSection, setSelectedSection] = useState<Section>("about")
  const sectionComponents: Record<Section, React.JSX.Element> = {
    about: <About />,
    projects: <Projects />,
    skills: <Skills />,
    contact: <Contact />,
  }
  const sectionTitles: Record<Section, string> = {
    about: "Sobre mí",
    projects: "Proyectos",
    skills: "Habilidades",
    contact: "Contacto",
  }
  return (
    <div className="w-full flex h-5/6 max-sm:h-full">
      <div className="w-2/3 max-sm:w-full max-sm:mt-24">
        {sectionComponents[selectedSection]}
      </div>
      <section className="w-1/3 h-full flex flex-col items-center max-sm:absolute max-sm:top-0 max-sm:left-0 max-sm:w-full max-sm:justify-center max-sm:h-24 max-sm:flex-row ">
        <div className="w-full pl-16 pt-14 h-2/6 max-sm:hidden">
          <div className="w-32 h-32 bg-white rounded-full overflow-hidden ">
            <Image
              src="/images/foto.jpeg"
              alt="Foto de Alexis"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
        </div>
        <h1 className="w-[70%] pb-1 mt-4 text-4xl font-thin border-solid border-b-4 max-sm:hidden border-sky-400">
          {sectionTitles[selectedSection]}
        </h1>
        <ul className="w-[80%] flex flex-col pl-10 gap-4 text-xl font-thin text-center mt-4 cursor-pointer max-sm:flex-row max-sm:pl-0 max-sm:sticky max-sm:top-0">
          {(["about", "projects", "skills", "contact"] as Section[]).map(
            (section) => (
              <li
                key={section}
                className={`w-24 text-white border-b-2 max-sm:text-sm border-transparent hover:border-sky-400 transition-all duration-200 hover:scale-105 ${
                  selectedSection === section ? "border-white" : ""
                }`}
                onClick={() => setSelectedSection(section)}
              >
                {sectionTitles[section]}
              </li>
            )
          )}
        </ul>
      </section>
    </div>
  )
}
export default Content
