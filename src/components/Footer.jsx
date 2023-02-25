import React from 'react'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends React.Component {
  render() {
    return (
      <footer className="py-10">
        <div className="container mx-auto flex items-center justify-evenly">
          <div className="flex flex-col gap-x-1">
            <p className="font-semibold text-sky-800">
              Camera Service Shop © 2023
              <span className="pl-1 text-sm font-semibold text-sky-800/80">
                <a
                  target="_blank"
                  href="https://georgiounikos.gr"
                  className="text-sky-800 hover:text-rose-800 hover:underline"
                >
                  by GN
                </a>
              </span>
            </p>

            <p className="flex items-center gap-x-1 text-sm font-semibold text-base-light/80">
              <a
                href="privacy-policy.html"
                className="text-base-light/80 hover:text-rose-800"
              >
                Privacy policy
              </a>
              -
              <a
                href="privacy-policy.html"
                className="text-base-light/80 hover:text-rose-800"
              >
                Cookie policy
              </a>
            </p>
          </div>
          <div>
            <a
              href="#header"
              className="text-3xl text-sky-800/80 hover:text-rose-800"
            >
              <FontAwesomeIcon icon={faChevronUp} />
            </a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
