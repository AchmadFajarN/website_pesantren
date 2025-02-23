import React from 'react'
import { motion } from 'motion/react'
import artikel1 from '../assets/images/fotoSesi11.jpg'
import artikel2 from '../assets/images/fotoSesi8.jpg'
import artikel3 from '../assets/images/fotoSesi12.jpg'
import artikel4 from '../assets/images/fotoSesi10.jpg'

const Article = () => {
  const artikel = [
      {
        title: 'Fundamental Nahwu & Shorof',
        date: '10-02-2024',
        image: artikel1
      }, 
      {
        title: 'Hukum Cinta Negara',
        date: '20-11-2020',
        image: artikel2
      },
      {
        title: 'Peran Pesantren Pada Lingkungan',
        date: '02-07-2021',
        image: artikel3
      },
      {
        title: 'Peran Santri Dalam Kemerdekaan',
        date: '03-06-2019',
        image: artikel4
      }
  
    ]

  return (
    <section className='mt-[8rem] px-[2rem] md:px-[4rem]'>
          <h1 className='text-2xl font-semibold text-slate-800'>Artikel Pilihan:</h1>
          <div className='mt-8 md:grid md:grid-cols-2 md:grid-rows-2 gap-10'>
            {
              artikel.map((a) => {
                return(
                  <motion.div initial={{y:10, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration: 1}} key={a.date} className=' border-slate-400 shadow-md shadow-slate-400 h-[25rem] rounded-xl overflow-hidden mb-10'>
                  <div className='w-full h-[50%] bg-cover bg-center' style={{backgroundImage: `url(${a.image})`}}></div>
                  <div className='w-full px-4 py-8'>
                    <p className='text-slate-800 font-semibold text-xl'>{ a.title }</p>
                    <p className='mb-10 text-sm text-slate-800'>{ a.date }</p>
                    <a href="#" className='hover:text-blue-500'>Baca Selengkapnya...</a>
                  </div>
              </motion.div>
                )
              })
            }
          </div>
        </section>
  )
}

export default Article