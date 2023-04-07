import LanguageSwitch from '../switches/languageSwitch/LanguageSwitch'
import ThemeSwitch from '../switches/themeSwitch/ThemeSwitch'

const Dropdown = ({ hasSettings, children }) => {
  console.log(hasSettings)
  return (
    <div className="absolute right-0 z-50 min-w-max translate-y-3 translate-x-0 overflow-hidden rounded-2xl border border-t-4 border-sky-800 bg-white py-1 md:w-64">
      <div className="flex flex-col gap-y-4 p-4">
        {children}
        {hasSettings && (
          <>
            <hr className="-ml-4 mt-2 w-[124%] border"></hr>
            <LanguageSwitch />
            <ThemeSwitch />
          </>
        )}
      </div>
    </div>
  )
}

export default Dropdown
