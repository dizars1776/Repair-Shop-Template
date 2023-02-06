import React from 'react'

class Header extends React.Component {
  render() {
    const themeData = this.props.themeData.header
    return (
      <div id="header">
        <nav className="container mx-auto py-6 sm:flex sm:flex-row sm:items-center sm:justify-between sm:py-12">
          {/* Company's name or logo */}
          <h1 className="m-0 text-center text-3xl uppercase tracking-wider">
            <a href="/">
              {themeData.title ? themeData.title : 'title'}
              <br />
              {themeData.subTitle ? themeData.subTitle : 'subtitle'}
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
              {themeData.menuItems
                ? themeData.menuItems.map(([title, url]) => (
                    <li key={title} className="whitespace-nowrap">
                      <a href={url} className="text-sm uppercase text-white">
                        {title}
                      </a>
                    </li>
                  ))
                : [1, 2, 3].map((e) => (
                    <li key={e} className="whitespace-nowrap">
                      <a href="#" className="text-sm uppercase text-white">
                        item {e}
                      </a>
                    </li>
                  ))}
            </ul>
          </div>
          {/* Menu  */}
          <div className="hidden uppercase tracking-wider sm:block">
            <ul id="menu" className="flex gap-x-4">
              {themeData.menuItems
                ? themeData.menuItems.map(([title, url]) => (
                    <li key={title}>
                      <a href={url}>{title}</a>
                    </li>
                  ))
                : [1, 2, 3].map((e) => (
                    <li key={e}>
                      <a href="#">item {e}</a>
                    </li>
                  ))}
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
