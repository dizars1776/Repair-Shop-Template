import { useTranslation } from 'react-i18next'
import Settings from './settings/Settings'
import HamburgerBtn from './HamburgerBtn'

function DesktopNav({ themeData, hasMenuHandler, isMenuOpen }) {
  const [t, i18n] = useTranslation()

  return (
    <>
      <div className="hidden text-lg uppercase tracking-wider sm:gap-x-4 md:flex">
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
        <Settings />
      </div>
      <HamburgerBtn hasMenuHandler={hasMenuHandler} isMenuOpen={isMenuOpen} />
    </>
  )
}

export default DesktopNav
