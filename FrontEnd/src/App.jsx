import Navbar from './components/layout/Navbar'
import imageBeranda from './assets/images/fotoSesi2.jpg'
import artikel1 from './assets/images/fotoSesi11.jpg'
import artikel2 from './assets/images/fotoSesi8.jpg'
import artikel3 from './assets/images/fotoSesi12.jpg'
import artikel4 from './assets/images/fotoSesi10.jpg'
import { useState } from 'react'
import {BsChevronCompactLeft} from 'react-icons/bs'
import {BsChevronCompactRight} from 'react-icons/bs'
import Footer from './components/layout/Footer'
import { motion } from 'motion/react'

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
          <motion.section 
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
          
    </motion.section>
    </>
  )
}

const App = () => {
  // will be change:
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
    <>
    <div className='max-w-screen min-h-screen relative overflow-x-hidden'>
      <Navbar />
      <main className='mt-[1rem] mb-[20rem]'>
        <motion.section 
        className='px-[2rem] md:px-[4rem]'
        initial={{opacity: 0}}
        whileInView={{opacity: 1, transition: {duration: 0.5,ease: ["easeInOut"]}}}
        >
          <div className='overflow-hidden rounded-md shadow-md shadow-slate-500 w-full md:h-[25rem] h-[20rem]'>
            {/* image only for example */}
            <div style={{backgroundImage: `url(${imageBeranda})`}} className='bg-cover bg-center w-full h-full'>
            </div>
          </div>
        </motion.section>
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
        <section className='mt-[8rem]'>
           <Commentar />
        </section>
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
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App