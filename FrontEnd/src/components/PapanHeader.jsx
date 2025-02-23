import React from 'react'
import { motion } from 'motion/react'
import imageBeranda from '../assets/images/fotoSesi2.jpg'

const PapanHeader = () => {
  return (
        <motion.section 
        className='px-[2rem] md:px-[4rem]'
        initial={{opacity: 0}}
        whileInView={{opacity: 1, transition: {duration: 0.5,ease: ["easeInOut"]}}}
        >
          <div className='overflow-hidden rounded-md shadow-md shadow-slate-500 w-full md:h-[25rem] h-[20rem]'>
            {/* image only for example */}
            <div style={{backgroundImage: `url(${imageBeranda})`}} className='bg-cover bg-center w-full h-full'>
            </div>
          </div>
        </motion.section>
  )
}

export default PapanHeader