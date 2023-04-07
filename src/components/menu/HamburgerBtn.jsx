import { useState } from 'react'

const HamburegerBtn = ({ isMenuOpen, hasMenuHandler }) => {
  return (
    <button
      className="group relative md:hidden"
      onClick={() => hasMenuHandler(!isMenuOpen)}
    >
      <div
        className={`flex h-8 origin-center transform flex-col justify-between overflow-hidden transition-all duration-300`}
      >
        <div
          className={`h-1 origin-right transform rounded bg-sky-800/90 transition-all duration-300 ${
            isMenuOpen
              ? 'w-8 translate-y-[3px] -rotate-[43deg] '
              : 'w-10 translate-x-0 translate-y-0 -rotate-0'
          }`}
        ></div>
        <div
          className={`h-1 w-10 transform rounded bg-sky-800/90 transition-all delay-75 duration-200 ${
            isMenuOpen ? '-translate-x-10' : 'translate-x-0'
          }`}
        ></div>
        <div
          className={`h-1 origin-right transform rounded bg-sky-800/90 transition-all duration-300 ${
            isMenuOpen
              ? 'w-8 -translate-y-[3px] rotate-[43deg] '
              : 'w-10 translate-x-0 translate-y-0 rotate-0'
          }`}
        ></div>
      </div>
    </button>
  )
}

export default HamburegerBtn
