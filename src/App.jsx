import React from 'react'
import Nav from './Home/Nav'
import Body from './Home/Body'
import PartnerSection from './Home/PartnerSection'
import Footer from './Home/Footer'
import KeyProjects from './Projects/KeyProjects'
import Card from './Projects/Card'
import WhyChooseContent from './Projects/WhyChooseContent'
import ReadyToStart from './Home/ReadyTo Start'
import ImageScroll from './Home/ImageScroll'


const App = () => {
  return <>
    <Nav />
    <Body />
    <PartnerSection>
      <ImageScroll />
    </PartnerSection>
    <WhyChooseContent />
    <KeyProjects />
    <Card />
   
    <ReadyToStart />
    
    <Footer />
  
  </>
}

export default App