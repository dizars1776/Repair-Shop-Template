import { useTranslation } from 'react-i18next'
import SettingsBtn from './buttons/SettingsBtn'

function DesktopNav({ themeData }) {
  const [t, i18n] = useTranslation()
  return (
    <div className="hidden whitespace-nowrap text-lg uppercase tracking-wider sm:flex sm:gap-x-4">
      <ul id="menu" className="flex gap-x-4">
        {themeData.menuItems &&
          themeData.menuItems.map(([title, url]) => {
            return (
              <li key={title}>
                <a
                  href={url}
                  className="text-base hover:text-rose-800 md:text-lg"
                >
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
