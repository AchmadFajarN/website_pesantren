import React from 'react'
import { motion } from 'motion/react'
import { animateFunc } from '../../utils'
import Underline from './Underline'
import CardKurikulum from './CardKurikulum'
import { kelasDanKurikulum } from '../../utils'

const KurikulumPendaftaran = () => {
  return (
    <section className='w-full min-h-screen pt-[10rem]'>
        <motion.h1
        initial={animateFunc().initial}
        whileInView={animateFunc().animate}
        transition={animateFunc(0.5).transition}
        className="font-bold text-xl text-green-700"
      >
        Kitab Yang diaji
      </motion.h1>
      <Underline />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8'>
        {
          kelasDanKurikulum.map((data) => {
            return <CardKurikulum data={data} />
          })
        }
      </div>
    </section>
  )
}

export default KurikulumPendaftaran