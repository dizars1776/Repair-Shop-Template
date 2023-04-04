import React from 'react'
import { useTranslation } from 'react-i18next'

const HeaderServices = () => {
  const [t, i18n] = useTranslation()
  const prefix = 'services.main_text.'

  return (
    <div id="header-services">
      <div className="container mx-auto">
        <h2 className="text-6xl font-semibold sm:text-7xl">
          {t(prefix + 'header')}
        </h2>
        <h3>{t(prefix + 'sub_header')}</h3>
        <p>{t(prefix + 'first_paragraph')}</p>
        <br />
        <p>{t(prefix + 'second_paragraph')}</p>
      </div>
    </div>
  )
}

export default HeaderServices
