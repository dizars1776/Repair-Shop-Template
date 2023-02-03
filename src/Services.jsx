import React from 'react'
import HeaderServices from './HeaderServices'

class Services extends React.Component {
  render() {
    return (
      <section id="services">
        <HeaderServices />
        <div className="container mx-auto">
          <h1 className="py-9">Services</h1>
        </div>
      </section>
    )
  }
}

export default Services
