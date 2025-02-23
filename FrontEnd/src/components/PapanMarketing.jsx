import React from 'react'
import { motion } from 'motion/react'

const PapanMarketing = () => {
  return (
    <section className='w-full'>
          <motion.div
          initial={{translateX: '-20rem'}}
          whileInView={{translateX: '0', transition: {duration: 0.5, ease: ["easeInOut"]}}}
          >
            <div className='w-[70%] md:w-[40%] bg-[#44852f] px-4 py-3 rounded-r-md shadow-md shadow-slate-400'>
              <p className='text-krem font-semibold text-lg leading-5'>Pendidikan berbasis tradisional dan praktek</p>
            </div>
            <div className='w-[65%] md:w-[38%] bg-[#345f25] px-4 py-8 rounded-br-md shadow-md shadow-slate-400'>
              <p className='leading-5 text-krem font-semibold'>Membentuk Generasi Islam yang kultural dan modern:</p>
              <p className='mt-4 text-krem'>1. Pendidikan Agama yang mendalam</p>
              <p className='leading-5 mt-2 text-krem'>2. Keterampilan hidup dan keahlian modern</p>
              <p className='mt-2 text-krem'>3. Berbasis sallafy</p>
              <p className='mt-2 text-krem'>4. Kegiatan berdialog dan berpikir</p>
            </div>
          </motion.div>
          <motion.div 
          className='mt-[4rem] flex flex-col items-end'
          initial={{translateX: '20rem'}}
          whileInView={{translateX: '0', transition: {duration: 0.5, ease: ["easeInOut"]}}}
          >
              <div className='w-[70%] text-center bg-[#ffe47a] px-4 py-3 rounded-l-md shadow-md shadow-slate-400'>
                <p className='text-lg text-dark-green font-semibold'>Kenapa Memilih Kami?</p>
              </div>
              <div className='w-[65%] bg-krem px-8 rounded-bl-md py-8 shadow-md shadow-slate-400'>
                <p className='text-[#396f27] leading-5'>1. Bermacam-macam kegiatan ekstrakulikuler</p>
                <p className='mt-2 text-[#396f27] leading-5'>2. Diajari Oleh Ustadz/Ustadzah Yang Berpengalaman</p>
                <p className='mt-2 text-[#396f27] leading-5'>3. Pelajaran Al-Quran dan Kitab Kuning Yang Mendalam</p>
                <p className='mt-2 text-[#396f27] leading-5'>4. Fasilitas nyaman dan asri</p>
              </div>
          </motion.div>
        </section>
  )
}

export default PapanMarketing