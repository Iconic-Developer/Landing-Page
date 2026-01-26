import React from 'react'
import Nav from './Home/Nav'
import Body from './Home/Body'
import PartnerSection from './Home/PartnerSection'
import Footer from './Home/Footer'
import WhyChooseContent from './Projects/WhyChooseContent'
import ReadyToStart from './Home/ReadyTo Start'

import OurServiceHeading from './services/OurServiceHeading'
import NeedWorkforce from './services/NeedWorkforce'
import Brand from './services/Brand'
import ServiceTemplate from './services/ServiceTemplate'


const App = () => {
  return <>
    <Nav />
    <Body />
    <OurServiceHeading />
    <ServiceTemplate />
    <NeedWorkforce />
    <PartnerSection>
      <Brand />
    </PartnerSection>
    <WhyChooseContent />
    
    <ReadyToStart />
    
    <Footer />
  
  </>
}

export default App