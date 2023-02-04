import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import { EffectFade, Autoplay } from 'swiper'

class Slider extends React.Component {
  render() {
    return (
      <Swiper
        centeredSlides={true}
        loop={true}
        effect={'fade'}
        speed={500}
        allowTouchMove={true}
        autoHeight={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="headSwiper"
      >
        <SwiperSlide>
          <picture>
            <source
              media="(min-width: 640px)"
              srcSet="./images/slider/slide01.jpg"
              alt="slide1"
            />
            <img
              className="w-full"
              src="./images/slider/slide01mobile.jpg"
              alt="slide1 mobile"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source
              media="(min-width: 640px)"
              srcSet="./images/slider/slide02.jpg"
              alt="slide2"
            />
            <img
              className="w-full"
              src="./images/slider/slide02mobile.jpg"
              alt="slide2 mobile"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source
              media="(min-width: 640px)"
              srcSet="./images/slider/slide03.jpg"
              alt="slide3"
            />
            <img
              className="w-full"
              src="./images/slider/slide03mobile.jpg"
              alt="slide3 mobile"
            />
          </picture>
        </SwiperSlide>
      </Swiper>
    )
  }
}

export default Slider
