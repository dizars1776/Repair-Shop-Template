import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCameraRetro,
  faTrophy,
  faUsers,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons'

class Procedure extends React.Component {
  render() {
    const themeData = this.props.themeData.procedure
      ? this.props.themeData.procedure
      : this.props
    return (
      <section id="procedure">
        <div className="container mx-auto grid auto-rows-min grid-cols-9 gap-4 gap-y-20">
          {/* ICONS ASIDE */}
          <aside className="order-2 col-span-9 flex flex-col items-center sm:order-first sm:col-span-3 sm:items-start">
            <div className="flex flex-col items-center gap-y-8 text-center text-sm font-semibold uppercase md:font-extrabold">
              <p className="flex flex-col items-center gap-y-4">
                <FontAwesomeIcon
                  icon={faCameraRetro}
                  className="h-14 w-14 text-sky-800/90"
                />
                {themeData.iconList[0].text}
              </p>
              <hr className="h-px w-3/4 border-0 bg-gray-200 dark:bg-gray-700" />
              <p className="flex flex-col items-center gap-y-4">
                <FontAwesomeIcon
                  icon={faTrophy}
                  className="h-16 w-16 text-sky-800/90"
                />
                {themeData.iconList[1].text}
              </p>
              <hr className="h-px w-3/4 border-0 bg-gray-200 dark:bg-gray-700" />
              <p className="flex flex-col items-center gap-y-4">
                <FontAwesomeIcon
                  icon={faUsers}
                  className="h-16 w-16 text-sky-800/90"
                />
                {themeData.iconList[2].text}
              </p>
            </div>
          </aside>
          {/* REPAIR INSTRUCTIONS */}
          <article className="col-span-9 flex flex-col gap-y-2 overflow-hidden sm:col-span-6 sm:gap-0 sm:pl-6">
            {themeData && (
              <>
                <h2 className="text-6xl font-semibold md:text-7xl">
                  {themeData.title}
                </h2>
                <div>
                  <ul
                    aria-label={themeData.ariaLabel}
                    className="flex flex-col before:mb-8 before:font-heading before:text-3xl before:leading-5 before:tracking-wide before:text-sky-800/80 before:content-[attr(aria-label)]"
                  >
                    {themeData.liItems.map((li, index) => (
                      <li
                        key={index}
                        className="inline-block items-center justify-evenly pl-4 font-sans md:text-xl"
                      >
                        <FontAwesomeIcon
                          icon={faAngleRight}
                          className="mr-1 inline-block h-4 w-4 text-sky-800/80 md:h-6 md:w-6"
                        />
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </article>
        </div>
      </section>
    )
  }
}

Procedure.defaultProps = {
  title: 'Procedure title',
  ariaLabel: 'Subtitle',
  liItems: ['li item 1', 'li item 2', 'etc...'],
  iconList: [
    {
      text: 'Aside text 1',
    },
    {
      text: 'Aside text 2',
    },
    {
      text: 'Aside text 3',
    },
  ],
}

export default Procedure
