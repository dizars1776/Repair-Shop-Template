import React from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import Services from './components/Services'
import Procedure from './components/Procedure'
import CallToAction from './components/CallToAction'
import SocialMedia from './components/SocialMedia'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import themeData from './themeData'
import './App.css'

function App() {
  return (
    <div id="App">
      <Header themeData={themeData} />
      <Slider themeData={themeData} />
      <Services themeData={themeData} />
      <Procedure themeData={themeData} />
      <CallToAction />
      <SocialMedia />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
