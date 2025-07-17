import React from 'react'
import Underline from './Underline'
import img from '../assets/image/fotoSesi3.jpg'
import { motion } from 'motion/react'
import { animateFunc } from '../../utils/'

const EducationSistem = () => {
  return (
    <section className='flex flex-col gap-8 md:flex-row'>
        <div className='flex-1'>
            <motion.h1 
            initial={animateFunc().initial}
            whileInView={animateFunc().animate}
            transition={animateFunc(0.5).transition}
            className='font-bold text-lg text-green-700'>Sistem Pendidikan</motion.h1>
            <Underline  />
            <motion.p 
            initial={animateFunc().initial}
            whileInView={animateFunc().animate}
            transition={animateFunc(0.6).transition}
            className='mt-4 font-semibold text-green-700'>Seiring dengan perkembangan zaman yang terus berubah dengan progresif secara linear, mengikuti kebutuhan masyarakat yang kian majemuk, sistem pendidikan dan pola pengajaran yang diterapkan di Pondok Pesantren Nurul Hikmah Assalafy mengacu pada sistem pendidikan dan pengajaran klasik (salafy), yang mengintgrasikan antara kurikulum Departement Agama dan kurikulum Departement pendidikan Nasional</motion.p>
        </div>
        <motion.div
        initial={animateFunc().initial}
        whileInView={animateFunc().animate}
        transition={animateFunc(0.8).transition}
        className='bg-slate-200 w-full min-h-80 md:flex-1 overflow-hidden rounded-md'>
            <img src={img} alt="" className='w-full h-[20rem] md:h-full object-center object-cover' />
        </motion.div>
    </section>
  )
}

export default EducationSistem