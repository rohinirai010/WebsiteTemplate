import React from 'react'
import Header from '../partials/Header'
import "../commonStyles.css"
import homePageBgSpot from "../images/homePageBgSpot.svg"

// import ButtonsComponent from '../components/ButtonsComponent'
import HeroSection from '../partials/HeroSection'
import MiddleSection from '../partials/MiddleSection'
import Footer from '../partials/Footer'
import RewardsSection from '../partials/RewardsSection'
import MiddleStirp from '../partials/middleStrip'
import ReviewSection from '../partials/ReviewSection'
import GetStarted from '../partials/GetStarted'
import LatestNews from '../partials/LatestNews'
import DownloadApp from '../partials/DownloadApp'

const Home = () => {
  return (
    <div className='relative w-full h-full'>
      {/* Background image positioned absolutely behind everything */}
      <img 
        src={homePageBgSpot} 
        alt="" 
        className='absolute top-0 left-0  -z-10' 
      />
        <img 
        src={homePageBgSpot} 
        alt="" 
        className='absolute top-0 left-0  -z-10' 
      />
      
      <Header />
      <HeroSection />
      {/* <ButtonsComponent /> */}
     
      <MiddleSection />
      <RewardsSection />
      <MiddleStirp />
      <ReviewSection />
      <GetStarted />
      <LatestNews />
      <DownloadApp />
      <Footer /> 
    </div>
  )
}

export default Home
