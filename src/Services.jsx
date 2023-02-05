import React from 'react'
import HeaderServices from './HeaderServices'
import ServiceCard from './components/ServiceCard/ServiceCard'
import cards from './components/ServiceCard/data'

class Services extends React.Component {
  render() {
    return (
      <section id="services">
        <div className="py-20">
          <HeaderServices />
        </div>
        <div className="bg-services-texture bg-cover bg-top bg-no-repeat">
          <div className="container mx-auto flex flex-wrap content-between justify-evenly gap-x-10 gap-y-16 py-10 sm:justify-between md:py-20 xl:py-28">
            {cards.map((card) => {
              return (
                <ServiceCard
                  key={card.id}
                  title={card.title}
                  mainText={card.mainText}
                  img={card.img}
                  imgAlt={card.imgAlt}
                />
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default Services
