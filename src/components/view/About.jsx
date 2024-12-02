import React from 'react'
import MapCard from '../about/MapCard'
import Slick from '../about/Slick'
import Hero from '../../common/Hero'
import Counter from '../about/Counter'
import Footer from '../../common/Footer'


const About = () => {
  return (
    <div>
     <Hero/>
      <MapCard />
      <Slick />
      <Counter/>
      <Footer/>
    </div>
  )
}

export default About
