import { useTranslation } from 'react-i18next'
import LanguageSwitch from '../../switches/languageSwitch/LanguageSwitch'
import ThemeSwitch from '../../switches/themeSwitch/ThemeSwitch'

const DropdownMenu = () => {
  const [t, i18n] = useTranslation()
  const prefix = 'navbar.settings.'

  return (
    <div className="absolute right-0 z-50 w-56 translate-y-3 translate-x-0 rounded-2xl border border-t-4 border-sky-800 bg-white py-1 md:w-64">
      <div className="inner-menu-btn flex flex-col gap-y-4 p-4">
        <LanguageSwitch />
        <ThemeSwitch />
      </div>
    </div>
  )
}

export default DropdownMenu
