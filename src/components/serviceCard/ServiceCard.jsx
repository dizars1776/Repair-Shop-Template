import { useTranslation } from 'react-i18next'

const ServiceCard = ({ index, img, imgAlt, title, mainText }) => {
  const [t, i18n] = useTranslation()
  const prefix = `services.cards.${index}.`

  return (
    <div className="flex h-full max-w-[280px] flex-col place-content-center gap-8 text-center text-white sm:text-left">
      <div>
        <img
          src={img}
          alt={imgAlt}
          width="280px"
          height="160px"
          className="rounded-xl transition-shadow hover:shadow-xl hover:shadow-[#1c6a92]"
        />
      </div>
      <h3 className="mb-0 self-center text-base font-bold uppercase sm:self-start md:text-lg lg:text-xl xl:text-2xl">
        {t(prefix + title)}
      </h3>
      <p className="text-sm xl:text-base">{t(prefix + mainText)}</p>
    </div>
  )
}

export default ServiceCard
