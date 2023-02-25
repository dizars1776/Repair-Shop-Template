import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

class CallToAction extends React.Component {
  render() {
    return (
      <section
        id="call-to-action"
        className="scroll-mt-60 bg-slate-900 bg-cta-texture py-10 sm:py-16 md:scroll-mt-80"
      >
        <div className="container mx-auto flex flex-col items-center justify-center gap-y-5 sm:flex-row sm:justify-between">
          <p className="text-center font-semibold uppercase text-white sm:text-left">
            Message us for a<span className="text-rose-600"> free </span>
            repair estimate
            <br />
            <em className="inline-flex gap-x-2 lowercase">
              or call us on:
              <a href="tel:2220001119" className="text-rose-600">
                <span className="inline-flex items-center gap-x-2 text-rose-600">
                  <FontAwesomeIcon icon={faPhoneVolume} />
                  22200 01119
                </span>
              </a>
            </em>
          </p>
          <a href="#contact-us" className="themePillBtn px-4">
            FREE ESTIMATE
          </a>
        </div>
      </section>
    )
  }
}

export default CallToAction
