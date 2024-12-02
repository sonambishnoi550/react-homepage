import React from 'react'
import Swiper from '../home/Swiper'
import Hero from '../../common/Hero'
import PowerFull from '../home/Powerfull'
import Footer from '../../common/Footer'


const Home = () => {
  return (
    <div>
      <Hero />
      <Swiper />
      <PowerFull/>
      <Footer/>
    </div>
  )
}

export default Home
