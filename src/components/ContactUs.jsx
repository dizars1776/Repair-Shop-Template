import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import MyMap from './map/MyMap'

const ContactUs = ({ themeData }) => {
  const contactUs = themeData.contactUs
  const [t, i18n] = useTranslation()
  const prefix = `contact_us.`

  return (
    <section
      id="contact-us"
      className="w-full max-w-full -scroll-mt-[345px] text-white sm:-scroll-mt-8"
    >
      <div className="grid w-full grid-cols-12 grid-rows-[minmax(300px,auto)] md:grid-rows-[minmax(0,835px)]">
        {/* <!-- map canvas, openstreetmap --> */}
        <div className="col-span-12 h-full w-full md:col-span-4">
          {contactUs && <MyMap themeData={contactUs} />}
        </div>
        {/* <!-- contact us information --> */}
        <div className="col-span-12 h-full w-full bg-contactus-texture bg-cover bg-center bg-no-repeat md:col-span-8">
          <div className="container mx-auto h-full md:mx-0 md:px-20">
            <div className="flex h-full w-full flex-col gap-y-8 pt-20 pb-20 md:pb-0">
              <h2 className="m-0 text-6xl text-rose-600">
                {t(prefix + 'title')}
              </h2>
              {/* Contact info */}
              <div className="flex flex-col gap-y-4">
                {/* address */}
                <div>
                  <h3 className="m-0 font-bold uppercase">
                    {t(prefix + 'store_address')}
                  </h3>
                  <p>
                    {t(prefix + 'address')}
                    <br />
                    {t(prefix + 'zip')} {contactUs.myZipNumber},{' '}
                    {t(prefix + 'state')}
                  </p>
                </div>
                {/* phone */}
                <div>
                  <h4 className="font-bold uppercase">{t(prefix + 'phone')}</h4>
                  <p>
                    <a
                      href="tel:2220001119"
                      className="inline-flex items-center gap-x-2 text-rose-600"
                    >
                      <FontAwesomeIcon icon={faPhoneVolume} />
                      <span>{contactUs.myPhoneNumber}</span>
                    </a>
                  </p>
                </div>
              </div>
              {/* contact form */}
              <form
                method="post"
                className="flex flex-col gap-y-6 text-black lg:max-w-[770px] xl:max-w-[820px]"
              >
                <label htmlFor="fname" className="hidden">
                  {t(prefix + 'name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t(prefix + 'get_name')}
                  className="rounded-lg p-3 lg:w-11/12"
                />

                <label htmlFor="mail" className="hidden">
                  {t(prefix + 'mail')}
                </label>
                <input
                  type="text"
                  id="mail"
                  name="mail"
                  placeholder={t(prefix + 'get_mail')}
                  className="rounded-lg p-3 lg:w-11/12"
                />

                <label htmlFor="subject" className="hidden">
                  {t(prefix + 'subject')}
                </label>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder={t(prefix + 'get_subject')}
                  cols={30}
                  rows={7}
                  className="mb-2 resize-none rounded-lg p-3 lg:w-11/12"
                ></textarea>

                <button
                  name="submit"
                  type="submit"
                  className="themePillBtn px-12 sm:px-14 md:px-20"
                >
                  {t(prefix + 'submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
