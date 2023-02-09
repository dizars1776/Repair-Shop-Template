import React from 'react'

class CallToAction extends React.Component {
  render() {
    return (
      <section
        id="call-to-action"
        className="scroll-mt-48 bg-slate-900 bg-cta-texture py-10 sm:py-16 md:scroll-mt-80"
      >
        <div className="container mx-auto flex flex-col items-center justify-center gap-y-5 sm:flex-row sm:justify-between">
          <p className="text-center font-semibold uppercase text-white sm:text-left">
            Message us for a<span className="text-rose-600"> free </span>
            repair estimate
            <br />
            <em className="lowercase">
              or call us on::
              <a className="telephone" href="tel:2220001119">
                <span className="inline-flex items-baseline gap-x-2 pl-2 text-rose-600">
                  {/* <i className="h-4 w-4 self-center" /> */}
                  22200 01119
                </span>
              </a>
            </em>
          </p>
          <a
            href="#contact-us"
            className="my-auto w-fit rounded-full border-2 border-white px-4 py-2 font-semibold text-rose-600 hover:bg-rose-800 hover:text-white"
          >
            FREE ESTIMATE
          </a>
        </div>
      </section>
    )
  }
}

export default CallToAction
