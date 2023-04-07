import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useLanguageSwitch from './useLanguageSwitch'

const LanguageSwitch = () => {
  const { lang, handleClick } = useLanguageSwitch()

  return (
    <div className="flex items-center justify-between text-base md:text-lg">
      <FontAwesomeIcon
        icon={faLanguage}
        size="xl"
        className="pr-2 text-sky-800/90"
      />
      <button
        type="button"
        onClick={handleClick}
        className="flex flex-row items-center justify-between gap-x-2 font-semibold"
      >
        <span className={lang === 'en' ? 'text-sky-800/90' : undefined}>
          en
        </span>
        <hr className="h-3 w-[1px] bg-base-light"></hr>
        <span className={lang === 'el' ? 'text-sky-800/90' : undefined}>
          ελ
        </span>
      </button>
    </div>
  )
}

export default LanguageSwitch
