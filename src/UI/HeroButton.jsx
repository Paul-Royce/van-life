import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"

const HeroButton = props => {
  return (
    <motion.button 
        className={`w-full md:w-fit rounded-sm ${props.addClasses}`}
        style={{backgroundColor: props.color}}
        initial={{opacity: props.initOp}}
        animate={{ opacity: props.animateOp}}
        transition={{duration: props.duration, delay: props.delay}}
    >
        <Link className='block w-full p-2' to={props.path} >{props.children}</Link>
    </motion.button>
  )
}

export default HeroButton