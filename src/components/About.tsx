"use client"
import { useTranslation } from "react-i18next"
const About = () => {
const { t } = useTranslation()
  return (
    <>
        <section className="w-full h-full flex flex-col justify-center items-center  border-solid border-l-4 border-sky-400 ">
              <h1 className="w-full text-7xl pl-14 font-thin">{t('about-me')}</h1>
              <p className="w-[80%] my-4 border-solid border-l-4 p-3 border-sky-400">{t('about-me-description')}</p>
          </section>
    </>
  )
}

export default About