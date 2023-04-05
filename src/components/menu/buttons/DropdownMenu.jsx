import { useTranslation } from 'react-i18next'
import LanguageSwitch from '../../switches/languageSwitch/LanguageSwitch'

const DropdownMenu = () => {
  const [t, i18n] = useTranslation()
  const prefix = 'navbar.settings.'

  return (
    <div className="absolute right-0 z-50 w-60 translate-y-3 translate-x-0 rounded-2xl border border-t-4 border-sky-800 bg-white py-1">
      <div className="inner-menu-btn flex flex-col p-4 gap-y-4">
        <div className="flex justify-between capitalize">
          <span>{t(prefix + 'language')}</span>
          <LanguageSwitch />
        </div>
        <div className="flex justify-between capitalize">
          <span>{t(prefix + 'theme')}</span>
          <button type="button">Light</button>
        </div>
      </div>
    </div>
  )
}

export default DropdownMenu
