import { useTranslation } from 'react-i18next'
import SettingsBtn from './buttons/SettingsBtn'

function DesktopNav({ themeData }) {
  const [t, i18n] = useTranslation()
  return (
    <div className="hidden uppercase tracking-wider sm:flex sm:gap-x-4 text-lg">
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
      </ul>
      <SettingsBtn />
    </div>
  )
}

export default DesktopNav
