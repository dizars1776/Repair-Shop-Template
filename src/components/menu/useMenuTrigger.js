import { useEffect, useState } from 'react'

function useMenuTrigger(initState = false) {
  const [menuBtnVisibility, setMenuBtnVisibility] = useState(initState)
  const [isMenuOpen, setIsMenuOpen] = useState(initState)

  const menuTrigger = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  // give it time to navigate to the section and then hide
  const hide = () => {
    setTimeout(() => {
      setIsMenuOpen(false)
    }, 500)
  }
  const show = () => setIsMenuOpen(true)

  // make mobile menu button visible when scrolling below 250
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 250) {
        setMenuBtnVisibility(true)
      } else {
        setMenuBtnVisibility(false)
        setIsMenuOpen(false)
      }
    })
  }, [])

  return {
    btnVisibility: menuBtnVisibility,
    trigger: menuTrigger,
    isOpen: isMenuOpen,
    hide: hide,
    show: show,
  }
}

export default useMenuTrigger
