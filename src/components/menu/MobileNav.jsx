import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGripVertical,
  faArrowUpLong,
} from '@fortawesome/free-solid-svg-icons'
import useMenuTrigger from './useMenuTrigger'

const MobileNav = ({ themeData }) => {
  const { btnVisibility, isOpen, trigger, hide, show } = useMenuTrigger(false)
  const [t, i18n] = useTranslation()
  const prefix = 'navbar.'

  return (
    <nav className="sm:hidden">
      {/* Mobile Menu Container */}
      {isOpen && (
        <div
          className="backdrop-sepia-100 fixed left-1/2 bottom-24 z-10 
      w-11/12 -translate-x-2/4 rounded-full border-4  border-double border-black/20 bg-slate-700 
      bg-opacity-20 bg-clip-padding shadow-md backdrop-blur-xl backdrop-filter"
        >
          <div className="px-4 py-6">
            <ul className="flex items-center justify-evenly">
              {themeData.menuItems &&
                themeData.menuItems.map(([title, url]) => (
                  <li key={title} className="whitespace-nowrap">
                    <a
                      href={url}
                      onClick={trigger}
                      className="text-sm font-semibold uppercase text-rose-800 drop-shadow-2xl"
                    >
                      {t(prefix + title)}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
      {/* Mobile Menu Trigger */}
      {btnVisibility && (
        <div className="fixed right-2 top-2/4 z-10">
          <button onFocus={show} onBlur={hide} className="group relative ">
            <div
              className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-slate-700 bg-opacity-20  bg-clip-padding 
            shadow-md ring-0 backdrop-blur-xl backdrop-filter transition-colors delay-300 duration-500 group-focus:ring-2 group-focus:ring-rose-800"
            >
              <div className="flex h-7 w-7 origin-center transform flex-col justify-between transition-all duration-300 ">
                <FontAwesomeIcon
                  icon={faGripVertical}
                  className="h-7 origin-left transform text-rose-800 transition-all duration-300 group-focus:-translate-y-10"
                />
                <div className="translate-y-3 translate-x-[0.0rem] transform transition-all duration-500 group-focus:-translate-y-[1.65rem]">
                  <FontAwesomeIcon
                    icon={faArrowUpLong}
                    className="h-6 rotate-0 transform text-rose-800 transition-all delay-300 duration-500 group-focus:rotate-[225deg] "
                  />
                </div>
              </div>
            </div>
          </button>
        </div>
      )}
    </nav>
  )
}

export default MobileNav
