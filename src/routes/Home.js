import React from 'react'
import HeroImg from '../components/HeroImg'
import Navbar from '../components/Navbar'
import SectionSlide from '../components/SectionSlide'
import IntroImj from "../assets/diego.jpg"


const Home = () => {
  return (
    <div>

      <Navbar />
      <HeroImg  heading="Variety Of Collections" text="2022 New Stocks" trc={IntroImj}  link1="Products" link2="Contact" link1a="/project" link2a="contact" />
    <SectionSlide />

    </div>
  )
}

export default Home
