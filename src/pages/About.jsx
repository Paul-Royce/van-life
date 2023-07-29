import React, {useEffect} from 'react'
import imageAbout from "../assets/image-about.jpg"
import HeroButton from '../UI/HeroButton'
import {motion} from "framer-motion"

const About = () => {

  useEffect(()=> {
    document.title = "#Vanslife | About"
  }, [])
  
  return (
    <motion.div 
      className='h-screen bg-vanPalette'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
    >
        <motion.img 
          initial={{x: -200, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{transition: 2.5, delay: .4}}  
          className='w-full md:w-fit md:ml-6 md:rounded-lg ' 
          src={imageAbout} alt='A person sitting on the roof of a van'
        />
        <div className='p-6 space-y-8'>
          <motion.h1
            initial={{x: -200, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{transition: 2.5, delay: .8}}
            className='text-2xl font-bold '>
            Don’t squeeze in a sedan when you could relax in a van.
          </motion.h1>
          {/* section */}
          <motion.div
            initial={{x: -200, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{transition: 2.5, delay: 1.3}} 
            className='space-y-2 '>
            <p>
              Our mission is to enliven your road trip with the perfect travel van rental. <br />
              Our vans are recertified before each trip to ensure  
              your travel plans can go off without a hitch. 
              (Hitch costs extra 😉)
            </p>
            <p>
              Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </p>
          </motion.div>
          
          {/* section */}
          <motion.div 
            initial={{scale: 1.4, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{transition: 2.5, delay: 1.5}} 
            className='flex flex-col gap-5 p-5 md:w-[500px] rounded bg-cusrOrange'>
            <h2 className='text-xl font-bold'>Your destination is waiting.Your van is ready.</h2>
            <HeroButton path="/vans" addClasses="text-white bg-black w-fit rounded-lg px-2" >Explore our vans</HeroButton>
          </motion.div>

        </div>
    </motion.div>
  )
}

export default About