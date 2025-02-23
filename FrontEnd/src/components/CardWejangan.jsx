import React from 'react'
import { motion } from 'motion/react'

const CardWejangan = () => {
  return (
    <motion.section 
        className='px-[2rem] mt-[4rem] md:px-[4rem]'
        initial={{opacity: 0}}
        whileInView={{opacity: 1, transition: {duration: 1, delay: 0.8 ,ease: ["easeInOut"]}}}
        >
          <div className='w-full my-[7rem] lg:px-10 px-5 min-h-[25rem]'>
            <div className='text-center mb-[10rem] p-16 rounded-md shadow-xl bg-slate-200 border'>
              <h1 className='text-lg'>وَمَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ</h1>
              <p className='mt-4 text-sm'><i>Artinya: “Barang siapa yang menempuh jalan untuk mencari ilmu, maka Allah akan mudahkan baginya jalan menuju surga.”.</i></p>
              <p className='mt-4'>(H.R Muslim)</p>
            </div>
          </div>
    </motion.section>
  )
}

export default CardWejangan