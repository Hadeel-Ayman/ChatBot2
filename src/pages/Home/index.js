import React from 'react'
import Main from './Main'
import Services from './Services'
import SocialSection from './SocialSection'
import GetStarted from './GetStarted'
import GetStartedtwo from './GetStartedtwo'
import Features from './features'
import Subscription from './subscription'
import IqService from './iQService'
import Contact from './contactUs'

const Home = () => {
  return (
    <div>
      <Main />
      <SocialSection />
      <Services />
      <GetStarted />
      <Features />
      <Subscription />
      <GetStartedtwo />
      <IqService />
      <Contact />
    </div>
  )
}

export default Home
