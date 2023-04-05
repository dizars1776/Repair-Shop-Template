import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'

const ThemeSwitch = () => {
  const [t, i18n] = useTranslation()
  const prefix = 'navbar.settings.'

  return (
    <div className="flex items-center justify-between text-base md:text-lg">
      <FontAwesomeIcon
        icon={faCircleHalfStroke}
        size="xl"
        rotation={180}
        className="text-sky-800/90"
      />
      <button
        type="button"
        className="flex flex-row items-center justify-between gap-x-2 font-semibold"
      >
        <span className="text-sky-800/90">{t(prefix + 'theme-light')}</span>
        <hr className="h-3 w-[1px] bg-base-light"></hr>
        <span className="">{t(prefix + 'theme-dark')}</span>
      </button>
    </div>
  )
}

export default ThemeSwitch
