import React from 'react'

const menuItems = [
  ['Services', '#services'],
  ['Cost Estimate', '#call-to-action'],
  ['Contact us', '#contact-us'],
]

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <div className="container mx-auto py-6 sm:flex sm:flex-row sm:items-center sm:justify-between sm:py-12">
          {/* Company's name or logo */}
          <h1 className="m-0 text-center text-3xl uppercase tracking-wider">
            <a href="/">
              Camera
              <br />
              Service Store
            </a>
          </h1>
          {/* Mobile menu */}
          <div
            id="mobilemenu"
            className="fixed inset-x-1 bottom-0 z-10 block rounded-t-[2.5rem] bg-mobile-nav-texture sm:hidden"
          >
            <ul
              id="mobilenav"
              className="flex w-full items-center justify-evenly py-6"
            >
              {menuItems.map(([title, url]) => (
                <li key={title} className="whitespace-nowrap">
                  <a href={url} className="text-sm uppercase text-white">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Menu  */}
          <div className="hidden uppercase tracking-wider sm:block">
            <ul id="menu" className="flex gap-x-4">
              {menuItems.map(([title, url]) => (
                <li key={title}>
                  <a href={url}>{title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
