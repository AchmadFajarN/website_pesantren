import React from 'react'
import { motion } from 'motion/react'
import { animateFunc } from '../../utils'


const CardArtikel = ({data, transitionAnimate}) => {
  return (
    <motion.div initial={animateFunc().initial} whileInView={animateFunc().animate} transition={animateFunc(transitionAnimate).transition} className='flex gap-4 max-h-[10rem] p-4 rounded-md shadow-md bg-slate-100'>
        <div className='flex-1/2 rounded-md overflow-hidden'>
            <img src={ data.imageUrl } alt="" className='w-full h-full object-cover' />
        </div>
        <div className='flex-1/2'>
            { data.tag.map((data) => <span className='text-xs font-bold mr-2 text-yellow-600'>{data}</span>) }
            <h3 className='font-bold text-lg text-green-700 line-clamp-2 leading-5'>{ data.title }</h3>
            <p className='text-xs font-bold my-2 text-green-700'>{ data.createdAt }</p>
            <p className='line-clamp-2 leading-5 text-green-700 font-semibold'>{data.body}</p>
        </div>
    </motion.div>
  )
}

export default CardArtikel