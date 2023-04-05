import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'
import DropdownMenu from './DropdownMenu'

const SettingsBtn = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const settingsRef = useRef()

  useEffect(() => {
    const closeDropdownMenu = (e) => {
      !settingsRef.current.contains(e.target) && setIsOpen(false) 
    }

    document.body.addEventListener('click', closeDropdownMenu)
    return () => document.body.removeEventListener('click', closeDropdownMenu)
  },[])

  return (
    <div ref={settingsRef} className='relative'>
      <button type="button" className="ml-3" onClick={handleClick}>
        <FontAwesomeIcon
          icon={faGear}
          className=" text-sky-800/90 hover:animate-spin  hover:text-rose-800"
        ></FontAwesomeIcon>
      </button>
      {isOpen && <DropdownMenu />}
    </div>
  )
}

export default SettingsBtn
