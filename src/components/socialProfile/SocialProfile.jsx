import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faAt, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const SocialProfile = ({ themeData }) => {
  const [t, i18n] = useTranslation()

  return (
    <ul className="flex w-full flex-col items-center gap-16 sm:flex-row sm:justify-start">
      {themeData &&
        themeData.socialProfiles.map((profile, index) => {
          const prefix = `social_networking.social_profiles.${index}.`

          return (
            <li key={index}>
              <div className="relative flex flex-col">
                <div>
                  <img
                    src={profile.img}
                    alt={profile.imgAlt}
                    className="rounded-lg"
                  />
                </div>
                <div className="absolute -bottom-5 -left-2 flex flex-row gap-x-1 text-xl">
                  {profile.haveFb && (
                    <a
                      href={profile.haveFb}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-700/90 text-white hover:bg-rose-900"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  )}
                  {profile.haveMail && (
                    <a
                      href={profile.haveMail}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-700/90 text-white hover:bg-rose-900"
                    >
                      <FontAwesomeIcon icon={faAt} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="mb-0 mt-8 text-sm font-semibold uppercase sm:text-lg md:text-xl">
                {t(prefix + 'name')}
              </h3>
              <ul className="mt-1 capitalize italic">
                <li className="flex flex-nowrap items-center justify-start gap-x-1">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="h-4 w-4 text-sky-800/90"
                  />
                  {t(prefix + 'type')}
                </li>
              </ul>
            </li>
          )
        })}
    </ul>
  )
}

export default SocialProfile
