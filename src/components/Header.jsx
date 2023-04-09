import React, { useEffect, useState } from 'react'
import Menu from './menu/Menu'
import { useTranslation } from 'react-i18next'
import useScrollDirection from './hooks/useScrollDirection'

const Header = ({ themeData }) => {
  const header = themeData.header
  const [t, i18n] = useTranslation()
  const prefix = 'navbar.'
  const scrollDirection = useScrollDirection()

  return (
    <header
      id="header"
      className="flex h-[136px] w-full items-center sm:h-[168px]"
    >
      <div
        className={`fixed ${
          scrollDirection === 'top'
            ? 'top-5 sm:top-9'
            : scrollDirection === 'down'
            ? '-top-[136px] sm:-top-[168px]'
            : 'top-0 shadow-rose-800 drop-shadow-2xl'
        } z-20 flex h-24 w-full bg-white transition-[top] duration-500`}
      >
        <nav className="flex w-full flex-row items-center justify-between pl-4 pr-4 xl:container xl:mx-auto">
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
      </div>
    </header>
  )
}

export default Header
