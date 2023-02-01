import React from 'react'
import Header from './Header'
import Slider from './Slider'
import FwSection from './FwSection'
import Services from './Services'
import NwSection from './NwSection'
import CallToAction from './CallToAction'
import SocialMedia from './SocialMedia'
import ContactUs from './ContactUs'
import Footer from './Footer'
import './App.css'

function App() {
  return (
    <div id="App">
      <Header />
      <Slider />
      <FwSection />
      <Services />
      <NwSection />
      <CallToAction />
      <SocialMedia />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
