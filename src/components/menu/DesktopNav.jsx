import { useTranslation } from 'react-i18next'
import LanguageSwitch from '../switches/languageSwitch/LanguageSwitch'

function DesktopNav({ themeData }) {
  const [t, i18n] = useTranslation()
  return (
    <div className="hidden uppercase tracking-wider sm:block">
      <ul id="menu" className="flex gap-x-4">
        {themeData.menuItems &&
          themeData.menuItems.map(([title, url]) => {
            return (
              <li key={title}>
                <a href={url} className="hover:text-rose-800">
                  {t(`navbar.${title}`)}
                </a>
              </li>
            )
          })}
        <li>
          <LanguageSwitch />
        </li>
      </ul>
    </div>
  )
}

export default DesktopNav
