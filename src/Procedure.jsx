import React from 'react'
import {
  CameraIcon,
  ChevronRightIcon,
  TrophyIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid'
class Procedure extends React.Component {
  render() {
    const themeData = this.props.themeData.procedure
    return (
      <section id="procedure">
        <div className="container mx-auto grid auto-rows-min grid-cols-9 gap-4 gap-y-20">
          {/* ICONS ASIDE */}
          <aside className="order-2 col-span-9 flex flex-col items-center sm:order-first sm:col-span-3 sm:items-start">
            <p className="flex flex-col gap-y-8 text-center text-sm font-semibold uppercase md:font-extrabold">
              <div className="flex flex-col items-center gap-y-4">
                <CameraIcon className="h-16 w-16 text-heading-light-blue" />
                {themeData.iconList[0].text}
                <hr class="h-px w-3/4 border-0 bg-gray-200 dark:bg-gray-700" />
              </div>
              <div className="flex flex-col items-center gap-y-4">
                <TrophyIcon className="h-16 w-16 text-heading-light-blue" />
                {themeData.iconList[1].text}
                <hr class="h-px w-3/4 border-0 bg-gray-200 dark:bg-gray-700" />
              </div>
              <div className="flex flex-col items-center gap-y-4">
                <UserGroupIcon className="h-16 w-16 text-heading-light-blue" />
                {themeData.iconList[2].text}
                <hr class="h-px w-3/4 border-0 bg-gray-200 dark:bg-gray-700" />
              </div>
            </p>
          </aside>
          {/* REPAIR INSTRUCTIONS */}
          <article className="col-span-9 flex flex-col overflow-hidden sm:pl-6 sm:col-span-6">
            {themeData ? (
              <>
                <h2 className="text-6xl font-semibold md:text-7xl">
                  {themeData.title}
                </h2>
                <div>
                  <ul
                    aria-label={themeData.ariaLabel}
                    className="flex flex-col before:mb-8 before:font-heading before:text-3xl before:leading-5 before:tracking-wide before:text-base-light-green before:content-[attr(aria-label)]"
                  >
                    {themeData.liItems.map((li, index) => (
                      <li
                        key={index}
                        className="inline-block items-center justify-evenly pl-4 font-sans md:text-xl"
                      >
                        <ChevronRightIcon className="mr-1 inline-block h-4 w-4 text-base-light-green md:h-6 md:w-6" />
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-7xl font-semibold">Procedure title</h2>
                <ul>
                  <li>list's title</li>
                  <li>list's title</li>
                  <li>list's title</li>
                </ul>
              </>
            )}
          </article>
        </div>
      </section>
    )
  }
}

export default Procedure
