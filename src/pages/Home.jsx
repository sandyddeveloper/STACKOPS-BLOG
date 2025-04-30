import React from 'react'
import NavbarSection from '../components/home/NavbarSection'
import HeroSection from '../components/home/HeroSection'
import About from '../components/home/AboutSection'
import NewsLetter from '../components/home/NewsLetterSection'
import FooterSection from '../components/home/FooterSection'

const Home = () => {
  return (
    <div>
        <NavbarSection />
        <HeroSection />
        <About />
        <NewsLetter />
        <FooterSection />
    </div>
  )
}

export default Home