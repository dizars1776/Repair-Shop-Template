import { useTranslation } from 'react-i18next'
import Dropdown from './Dropdown'

const MobileNav = ({ themeData, isMenuOpen }) => {
  const [t, i18n] = useTranslation()

  return (
    <div
      className={
        isMenuOpen ? 'absolute right-0 bottom-10 flex md:hidden' : 'hidden'
      }
    >
      <Dropdown hasSettings={true}>
        <ul id="menu" className="ml-4 mr-4 flex flex-col gap-y-8 capitalize">
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
      </Dropdown>
    </div>
  )
}

export default MobileNav
