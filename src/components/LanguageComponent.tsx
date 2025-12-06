"use client"
import { useEffect, useState } from "react"
import i18n from "../../public/locales/i18n/i18nConfig"

export const LanguageComponent = () => {
    const [lang, setLang] = useState(i18n.language || "es")
    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setLang(e.target.value)
        i18n.changeLanguage(e.target.value)
    }
    useEffect(() => {
        const listener = () => setLang(i18n.language)
        i18n.on("languageChanged", listener)
        return () => i18n.off("languageChanged", listener)
    }, [])
    return (
        <div className="w-1/6 flex justify-center items-center">
            <select name="language"id="language"className="bg-zinc-800 rounded border border-sky-400 max-sm:size-5" value={lang} onChange={handleChange}>
                <option className="max-sm:size-5" value="es">ES</option>
                <option className="max-sm:size-5" value="en">EN</option>
            </select>
        </div>
    )
}
