import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical, faXmark } from '@fortawesome/free-solid-svg-icons'

function MobileNav({ themeData }) {
  const handleClick = () => {
    console.log('menu click')
  }

  return (
    <nav className="sm:hidden">
      {/* Mobile Menu Container */}
      <div
        className="backdrop-sepia-100 fixed left-1/2 bottom-24 z-10 block w-11/12 
      -translate-x-2/4 rounded-full border-4 border-double  border-black/20 bg-slate-700 bg-opacity-20 
      bg-clip-padding shadow-md backdrop-blur-xl backdrop-filter"
      >
        <div className="px-4 py-6">
          <ul className="flex items-center justify-evenly">
            {themeData.menuItems
              ? themeData.menuItems.map(([title, url]) => (
                  <li key={title} className="whitespace-nowrap">
                    <a
                      href={url}
                      className="text-sm font-semibold uppercase text-rose-800"
                    >
                      {title}
                    </a>
                  </li>
                ))
              : [1, 2, 3].map((e) => (
                  <li key={e} className="whitespace-nowrap">
                    <a href="#" className="text-sm uppercase text-rose-800">
                      item {e}
                    </a>
                  </li>
                ))}
          </ul>
        </div>
      </div>
      {/* Mobile Menu Trigger */}
      <div className="fixed right-2 top-2/4 z-10">
        <button onClick={handleClick} className="group relative ">
          <div
            className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-slate-700 bg-opacity-20  bg-clip-padding 
            shadow-md backdrop-blur-xl backdrop-filter transition-colors delay-300 duration-500 group-focus:bg-rose-800"
          >
            <div className="flex h-7 w-7 origin-center transform flex-col justify-between transition-all duration-300 ">
              <FontAwesomeIcon
                icon={faGripVertical}
                className="h-7 origin-left transform text-rose-800 transition-all duration-300 group-focus:-translate-y-10"
              />
              <div className="translate-y-2 transform transition-all duration-500 group-focus:-translate-y-7">
                <FontAwesomeIcon
                  icon={faXmark}
                  className="h-7 rotate-0 transform text-rose-800 transition-all delay-300 duration-500 group-focus:rotate-90 group-focus:text-white"
                />
              </div>
            </div>
          </div>
        </button>
      </div>
    </nav>
  )
}

export default MobileNav
