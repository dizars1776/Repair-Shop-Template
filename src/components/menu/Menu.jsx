import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'
import { useState } from 'react'

const Menu = ({ themeData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleClick = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <DesktopNav
        themeData={themeData}
        hasMenuHandler={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      <MobileNav themeData={themeData} isMenuOpen={isMenuOpen} />
    </>
  )
}

export default Menu
