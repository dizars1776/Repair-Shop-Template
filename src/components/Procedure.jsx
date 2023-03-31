import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCameraRetro,
  faTrophy,
  faUsers,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons'

const Procedure = ({ themeData }) => {
  const [t, i18n] = useTranslation()
  const prefix = `procedure.`

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
              {t(`${prefix}iconList.0`)}
            </p>
            <hr className="h-px w-3/4 border-0 bg-gray-200 dark:bg-gray-700" />
            <p className="flex flex-col items-center gap-y-4">
              <FontAwesomeIcon
                icon={faTrophy}
                className="h-16 w-16 text-sky-800/90"
              />
              {t(`${prefix}iconList.1`)}
            </p>
            <hr className="h-px w-3/4 border-0 bg-gray-200 dark:bg-gray-700" />
            <p className="flex flex-col items-center gap-y-4">
              <FontAwesomeIcon
                icon={faUsers}
                className="h-16 w-16 text-sky-800/90"
              />
              {t(`${prefix}iconList.2`)}
            </p>
          </div>
        </aside>
        {/* REPAIR INSTRUCTIONS */}
        <article className="col-span-9 flex flex-col gap-y-2 overflow-hidden sm:col-span-6 sm:gap-0 sm:pl-6">
          <>
            <h2 className="text-6xl font-semibold md:text-7xl">
              {t(prefix + themeData.title)}
            </h2>
            <div>
              <ul
                aria-label={themeData.ariaLabel}
                className="flex flex-col before:mb-8 before:font-heading before:text-3xl before:leading-5 before:tracking-wide before:text-sky-800/80 before:content-[attr(aria-label)]"
              >
                {themeData.steps.map((step, index) => (
                  <li
                    key={index}
                    className="inline-block items-center justify-evenly pl-4 font-sans md:text-xl"
                  >
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="mr-1 inline-block h-4 w-4 text-sky-800/80 md:h-6 md:w-6"
                    />
                    {t(prefix + step)}
                  </li>
                ))}
              </ul>
            </div>
          </>
        </article>
      </div>
    </section>
  )
}

export default Procedure
