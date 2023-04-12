import React from 'react'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const [t, i18n] = useTranslation()
  const prefix = 'footer.'

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
              {t(prefix + 'privacy_policy')}
            </a>
            -
            <a
              href="privacy-policy.html"
              className="text-base-light/80 hover:text-rose-800"
            >
              {t(prefix + 'cookie_policy')}
            </a>
          </p>
        </div>
        <div>
          <button
            type="button"
            className="text-3xl text-sky-800/80 hover:text-rose-800"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
