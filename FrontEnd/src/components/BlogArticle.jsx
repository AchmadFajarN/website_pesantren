import React from 'react'
import { motion } from 'motion/react'

const BlogArticle = () => {
  const data = [
    {
        title: 'Kegiatan Maulid di Pesantren',
        deskripsi: 'Santri bersama masyarakat sekitar memperingati Maulid Nabi dengan pembacaan shalawat dan kajian hikmah.',
        date: '17 Februari 2025'
    },
    {
        title: 'Santri Borong Juara Kaligrafi',
        deskripsi: 'Para santri menunjukkan keterampilan seni mereka dalam lomba kaligrafi dengan prestasi luar biasa.',
        date: '15 Februari 2025'
    }, 
    {
        title: 'Pelatihan Tata Boga untuk Santri',
        deskripsi: 'Santri mengikuti pelatihan tata boga untuk membekali mereka keterampilan kewirausahaan yang kreatif.',
        date: '10 Februari 2025'
    }
  ]
  return (
    <section className="container mx-auto px-4 grid md:grid-cols-2 gap-8 mt-6">
        {
            data.map((data) => {
                return(
                    <motion.div 
                    initial={{opacity: 0, translateY: 100}}
                    whileInView={{opacity: 1, translateY: 0}}
                    className="bg-slate-100 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <img src="https://via.placeholder.com/600x400" alt="Card Image" className="w-full h-40 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-dark-green">{ data.title }</h3>
                            <p className="text-accent-green mb-4">{ data.deskripsi }</p>
                            <p className="text-sm text-gray-600">{ data.date }</p>
                        </div>
                    </motion.div>
                )
            })
        }
    </section>

  )
}

export default BlogArticle