import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const fallbackLng = ['en']
const availableLanguages = ['en', 'el']

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    load: 'languageOnly',
    fallbackLng,
    detection: {
      checkWhiteList: true,
    },
    debug: false,
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
