import React from 'react'
import { motion } from 'framer-motion'
import Header from '../partials/Header'
import "../commonStyles.css"
import homePageBgSpot from "../images/homePageBgSpot.svg"

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
  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 60 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const fadeInLeft = {
    hidden: { 
      opacity: 0, 
      x: -60 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const fadeInRight = {
    hidden: { 
      opacity: 0, 
      x: 60 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const scaleIn = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  return (
    <div className='relative w-full h-full'>
      {/* Background image positioned absolutely behind everything */}
      <img 
        src={homePageBgSpot} 
        alt="" 
        className='absolute top-0 left-0 -z-10' 
      />
      <img 
        src={homePageBgSpot} 
        alt="" 
        className='absolute top-0 left-0 -z-10' 
      />
      
      <Header />
      
      {/* Animated Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <HeroSection />
      </motion.div>
     
      {/* Animated Middle Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInLeft}
      >
        <MiddleSection />
      </motion.div>

      {/* Animated Rewards Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={scaleIn}
      >
        <RewardsSection />
      </motion.div>

      {/* Animated Middle Strip */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInRight}
      >
        <MiddleStirp />
      </motion.div>

      {/* Animated Review Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <ReviewSection />
      </motion.div>

      {/* Animated Get Started Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInLeft}
      >
        <GetStarted />
      </motion.div>

      {/* Animated Latest News Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <LatestNews />
      </motion.div>

      {/* Animated Download App Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={scaleIn}
      >
        <DownloadApp />
      </motion.div>

      <Footer /> 
    </div>
  )
}

export default Home