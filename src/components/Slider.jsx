import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import { EffectFade, Autoplay } from 'swiper'
import useScrollDirection from './hooks/useScrollDirection'

const Slider = ({ themeData }) => {
  const slider = themeData.slider

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
      {slider &&
        slider.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <picture>
                <source
                  media="(min-width: 640px)"
                  srcSet={slide.desktop}
                  alt={slide.altText}
                />
                <img
                  className="w-full"
                  src={slide.mobile}
                  alt={slide.altText}
                />
              </picture>
            </SwiperSlide>
          )
        })}
    </Swiper>
  )
}

export default Slider
