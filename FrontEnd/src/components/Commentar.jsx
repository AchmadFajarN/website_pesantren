import React from "react"
import { motion } from 'motion/react'
import {BsChevronCompactLeft} from 'react-icons/bs'
import {BsChevronCompactRight} from 'react-icons/bs'
import { useState } from "react"

const Commentar = () => {
  
    const [slide, setSlide] = useState(0)
    const prevSLide = () => {
      const isFirtsSlide = slide === 0
      const newIndex = isFirtsSlide ? dataComentar.length -1 : slide -1
      setSlide(newIndex)
    }
    const nextSlide = () => {
      const isLastSlide = slide === dataComentar.length -1
      const newIndex = isLastSlide ? 0 : slide + 1
      setSlide(newIndex)
    }
  
    const dataComentar = [
      {"name":"John Doe",
        "commentar":"Pesantren nya bagus, lingkunganya sangat asri",
        "date":"04-02-2023"
      },
      {"name":"Steve Jobs",
        "commentar":"Recomended Banget buat anak mondok disini",
        "date":"02-06-2023"
      },
      {"name":"Elon Musk",
        "commentar":"pengajaran sangat inovatif, worth banget",
        "date":"04-11-2024"
      },
    ]
    return(
      <>
        <section className="mt-[8rem]">
            <motion.div 
                className='my-[10rem] px-6 py-8 w-full bg-slate-300 relative lg:flex flex-col justify-center items-center'
                initial={{opacity: 0}}
                whileInView={{opacity: 1, transition: {duration: 0.8, ease: ["easeInOut"]}}}
                >
                <h2 className='mb-8 text-center md:text-xl font-semibold'>Ini Kata Mereka:</h2>
                <div className='lg:w-[40%] w-full bg-slate-200 min-h-[20rem] rounded-xl shadow-xl px-10 py-4 flex flex-col justify-around'>
                    <p className='text-sm font-semibold text-slate-800'>{dataComentar[slide].name}</p>
                    <p className='md:text-lg font-semibold italic text-slate-800'>&quot;{dataComentar[slide].commentar}&quot;</p>
                    <p className='text-xs md:text-sm'>{dataComentar[slide].date}</p>
                    <div className='absolute w-full h-full left-0 flex justify-between items-center'>
                    <div onClick={prevSLide} className='cursor-pointer p-4 bg-black/20 active:bg-black/70 transition-colors duration-200 ease-in-out text-white rounded-xl'>
                        <BsChevronCompactLeft size={20} />
                    </div>
                    <div onClick={nextSlide} className='cursor-pointer p-4 bg-black/20 active:bg-black/70 transition-colors duration-200 ease-in-out text-white rounded-xl'>
                        <BsChevronCompactRight size={20} />
                    </div>
                    </div>
                </div>
                
            </motion.div>
        </section>
      </>
    )
  }

export default Commentar
  