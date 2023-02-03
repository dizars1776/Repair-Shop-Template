import React from 'react'

const menuItems = [
  ['Home', '#header'],
  ['Services', '#services'],
  ['Cost Estimate', '#call-to-action'],
  ['Contact us', '#contact-us'],
]

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <div className="container mx-auto py-6 sm:flex sm:flex-row sm:items-center sm:justify-between sm:py-16">
          {/* Company's name or logo */}
          <h1 className="p-0 text-center text-3xl uppercase">
            <a href="index.html">
              Camera
              <br />
              Service Store
            </a>
          </h1>
          {/* Mobile menu */}
          <div
            id="mobilemenu"
            className="fixed inset-x-2 bottom-0 z-10 block rounded-t-[2.5rem] bg-mobile-nav-texture px-4 sm:hidden"
          >
            <ul
              id="mobilenav"
              className="flex w-full items-center justify-evenly gap-x-4 py-8"
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
          <div className="hidden text-sm uppercase sm:block">
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
