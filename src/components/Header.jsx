import React from 'react'
import { DesktopNav, MobileNav } from './menu/Nav'
import { useTranslation } from 'react-i18next'

const Header = ({ themeData }) => {
  const header = themeData.header
  const [t, i18n] = useTranslation()
  const prefix = 'navbar.'

  return (
    <header id="header">
      <nav className="container mx-auto py-6 sm:flex sm:flex-row sm:items-center sm:justify-between sm:py-12">
        {/* Company's name or logo */}
        <h1 className="m-0 text-center text-3xl uppercase tracking-wider">
          <a href="/">
            {t(prefix + 'title')}
            <br />
            {t(prefix + 'sub_title')}
          </a>
        </h1>
        {/* Menu */}
        <MobileNav themeData={header} />
        <DesktopNav themeData={header} />
      </nav>
    </header>
  )
}

export default Header
