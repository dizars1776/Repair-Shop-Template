import { useEffect, useState } from 'react'
import i18next from 'i18next'

const useLanguageSwitch = () => {
  // get the language from the local storage if it exists else get it from the html's tag attribute
  const lng = window.localStorage.getItem('i18nextLng')
    ? window.localStorage.getItem('i18nextLng')
    : document.documentElement.getAttribute('lang')
  const [lang, setLang] = useState(lng)

  const handleClick = () => {
    lang === 'en' ? setLang('el') : setLang('en')
  }

  useEffect(() => {
    i18next.changeLanguage(lang)
    window.localStorage.setItem('i18nextLng', lang)
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  return { handleClick, lang }
}

export default useLanguageSwitch
