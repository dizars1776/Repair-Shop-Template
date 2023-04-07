import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'
import SettingsDropdown from '../Dropdown'
import LanguageSwitch from '../../switches/languageSwitch/LanguageSwitch'
import ThemeSwitch from '../../switches/themeSwitch/ThemeSwitch'

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const settingsRef = useRef()

  useEffect(() => {
    const closeSettingsDropdown = (e) => {
      !settingsRef.current.contains(e.target) && setIsOpen(false)
    }

    document.body.addEventListener('click', closeSettingsDropdown)
    return () =>
      document.body.removeEventListener('click', closeSettingsDropdown)
  }, [])

  return (
    <div ref={settingsRef} className="relative">
      <button type="button" className="ml-3" onClick={handleClick}>
        <FontAwesomeIcon
          icon={faGear}
          className={
            isOpen
              ? `animate-spin-slow text-rose-800`
              : `text-sky-800/90 transition-colors ease-in-out hover:text-rose-800`
          }
        ></FontAwesomeIcon>
      </button>
      {isOpen && (
        <SettingsDropdown>
          <LanguageSwitch />
          <ThemeSwitch />
        </SettingsDropdown>
      )}
    </div>
  )
}

export default Settings
