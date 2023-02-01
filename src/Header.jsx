import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <div className="container mx-auto flex flex-row items-center justify-between py-16">
          {/* Company's name or logo */}
          <h1 className="text-center text-3xl uppercase">
            <a href="index.html">
              Camera
              <br />
              Service Store
            </a>
          </h1>
          {/* Menu  */}
          <div className="hidden text-sm uppercase md:block">
            <ul id="menu" className="flex gap-x-4">
              <li>
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#call-to-action">Cost Estimate</a>
              </li>
              <li>
                <a href="#contact-us">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
