import React from 'react'
import Menu from './menu/Menu'
import { useTranslation } from 'react-i18next'

const Header = ({ themeData }) => {
  const header = themeData.header
  const [t, i18n] = useTranslation()
  const prefix = 'navbar.'

  return (
    <header id="header" className="ml-4 mr-4 xl:container xl:mx-auto">
      <nav className="relative flex w-full flex-row items-center justify-between py-8 sm:py-12">
        {/* Company's name or logo */}
        <h1 className="m-0 text-center text-3xl uppercase tracking-wider">
          <a href="/">
            {t(prefix + 'title')}
            <br />
            {t(prefix + 'sub_title')}
          </a>
        </h1>
        {/* Menu */}
        <Menu themeData={header} />
      </nav>
    </header>
  )
}

export default Header
