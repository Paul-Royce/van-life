import React from 'react'
import {motion} from "framer-motion"
import HeroButton from '../UI/HeroButton'


const HomeHero = () => {
  return (
    <div 
      className=' flex flex-col justify-center md:justify-start gap-16 bg-no-repeat bg-cover text-center bg-black mix-blend-multiply text-white p-4 bg-[url("./assets/image-54.jpg")] md:bg-left h-screen'
    >
        <motion.h1 
          className='pt-[0%] md:pt-36 md:text-4xl text-2xl font-bold text-left'
          initial={{x: -300, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 1, delay: .2}}
        >
          You got the travel plans, we got the travel vans.
        </motion.h1>
        <motion.p 
          className='text-left md:text-lg '
          initial={{opacity: 0}}
          animate={{ opacity: 1}}
          transition={{duration: 1, delay: 1.4}}
        >                                              {/* These styles for br are to prevent the text to go on another line in mobile version  */}
            Add adventure to your life by joining the #vanlife movement. <br className='hidden md:block' /> 
            Rent the perfect van ot make your perfect road trip.
        </motion.p>
        <HeroButton addClasses={"md:w-[50%]"} color={"rgba(255, 140, 56, 1)"} path="/vans" delay={2.3} initOp={0} animateOp={1}>Find your van</HeroButton>
    </div>
  )
}

export default HomeHero