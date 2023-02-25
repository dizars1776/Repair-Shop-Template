import React from 'react'
import { DesktopNav, MobileNav } from './menu/Nav'

class Header extends React.Component {
  render() {
    const themeData = this.props.themeData.header
    return (
      <header id="header">
        <nav className="container mx-auto py-6 sm:flex sm:flex-row sm:items-center sm:justify-between sm:py-12">
          {/* Company's name or logo */}
          <h1 className="m-0 text-center text-3xl uppercase tracking-wider">
            <a href="/">
              {themeData.title ? themeData.title : 'title'}
              <br />
              {themeData.subTitle ? themeData.subTitle : 'subtitle'}
            </a>
          </h1>
          {/* Menu */}
          <MobileNav themeData={themeData} />
          <DesktopNav themeData={themeData} />
        </nav>
      </header>
    )
  }
}

export default Header
