import React from 'react'
import foto from '../assets/images/fotoSesi2.jpg'
import BlogArticle from './BlogArticle'
import { motion } from 'motion/react'

const MainArticle = () => {
  return (
    <motion.div 
    initial={{opacity: 0, translateY: 100}}
    whileInView={{opacity: 1, translateY: 0}}
    transition={{duration: 0.5}}
    className="text-accent-green font-sans mb-20 px-[1rem] lg:px-[4rem]">
        <section className="container bg-slate-100 mb-14 mx-auto px-4 grid md:grid-cols-2 gap-8 items-center p-6 rounded-lg shadow-lg mt-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-dark-green">Santri Pesantren Raih Juara Nasional MTQ</h2>
                    <p className="text-accent-green mb-4">
                        Prestasi membanggakan diraih oleh santri pesantren dalam ajang MTQ tingkat nasional. Keberhasilan ini menjadi dorongan bagi seluruh santri untuk terus berkarya.
                    </p>
                    <p className="text-sm font-medium text-gray-600">Dipublikasikan pada 19 Februari 2025</p>
                </div>
                <img src={foto} alt="Highlight Image" className="rounded-lg shadow-md" />
        </section>
        <BlogArticle />
    </motion.div>
  )
}

export default MainArticle