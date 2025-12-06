import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import resourcesToBackend from "i18next-resources-to-backend"

const fallbackLng = "es"
const supportedLngs = ["es", "en"]
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(resourcesToBackend((lng, ns) => import(`../${lng}/${ns}.json`)))
  .init({
    fallbackLng,
    lng: "es",
    supportedLngs,
    ns: ["common"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["cookie", "localStorage", "navigator"]
    }
  })

export default i18n
