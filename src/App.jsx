import React, { Suspense } from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import Services from './components/Services'
import Procedure from './components/Procedure'
import CallToAction from './components/CallToAction'
import SocialNetworking from './components/SocialNetworking'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import themeData from './themeData'
import './App.css'
import './i18n'

const App = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Header themeData={themeData} />
        <Slider themeData={themeData} />
        <Services themeData={themeData} />
        <Procedure themeData={themeData.procedure} />
        <CallToAction themeData={themeData} />
        <SocialNetworking themeData={themeData} />
        <ContactUs themeData={themeData} />
        <Footer />
      </Suspense>
    </>
  )
}

export default App
