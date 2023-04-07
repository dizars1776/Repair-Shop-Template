import React from 'react'
import SocialProfile from './socialProfile/SocialProfile'
import { useTranslation } from 'react-i18next'

const SocialNetworking = ({ themeData }) => {
  const socialNetworking = themeData.socialNetworking
  const [t, i18n] = useTranslation()
  const prefix = `social_networking.`

  return (
    <section id="social-media" className=" pt-20">
      <div className="container mx-auto flex flex-col items-center gap-y-12 overflow-visible">
        <h2 className="self-start text-6xl sm:text-7xl">
          {t(prefix + 'title')}
        </h2>
        {socialNetworking && <SocialProfile themeData={socialNetworking} />}
      </div>
    </section>
  )
}

export default SocialNetworking
