import React from 'react'
import { motion } from 'motion/react'

const BlogHeader = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.5}}
    className="p-6 text-center text-accent-green shadow-md">
        <h1 className="text-4xl font-bold">PONPES NURUL HIKMAH ASSALAFY</h1>
        <p className="mt-2">Berita dan Informasi Terkini Seputar Pondok Pesantren</p>
    </motion.div>
  )
}

export default BlogHeader