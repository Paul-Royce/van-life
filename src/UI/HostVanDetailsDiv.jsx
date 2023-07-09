import React from 'react'
import {motion, AnimatePresence} from "framer-motion"


const HostVanDetailsDiv = props => {
  return (
    <AnimatePresence >
        <motion.div
            key={props.id} 
            initial={{x: -200, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            exit={{x: 200, opacity: 0}}
            transition={{duration: 1, delay: .1, type: "spring"}}
            className='flex flex-col gap-3 mt-4 '>
              {props.children}
        </motion.div>
    </AnimatePresence>
  )
}

export default HostVanDetailsDiv