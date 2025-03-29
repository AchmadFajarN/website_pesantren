import React from 'react'
import { useState } from 'react';
import { motion } from 'motion/react';

const RegisInfo = () => {
    const [step, setStep] = useState(true)

    const stepHandler = () => setStep(!step)

    const dataOffline = [
        {
            no: 2,
            data: 'Datang ke tempat – Kunjungi pesantren sesuai jadwal.'
        },
        {
            no: 3,
            data: 'Mengisi Formulir – Isi formulir pendaftaran dengan data yang benar dan lengkap.'
        },
        {
            no: 4,
            data: 'Penyerahan Dokumen – Serahkan formulir dan dokumen ke pihak terkait.'
        },
        {
            no: 5,
            data: 'Pengumuman Hasil – Anda akan di beritahu oleh pihak pesantren'
        }
    ] 
    const dataOnline = [
        {
            no: 2,
            data: 'Setelah itu anda akan dihubungi pihak pesantren'
        },
        {
            no: 3,
            data: 'Persiapkan dokumen yang diperlukan'
        },
        {
            no: 4,
            data: 'Pengumuman hasil - Anda akan diberitahu oleh pihak pesantren'
        }
    ]
  return (
    <>
    <h1 className='text-2xl font-bold text-dark-green mt-4'>Langkah-langkah Pendaftaran:</h1>
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1}}} className='my-8 flex'>
        <button onClick={stepHandler} className={`px-2 py-3 ${step? 'border-4 border-dark-green': ''} rounded-l-xl bg-slate-200 shadow-xl text-sm text-dark-green`}>Offline</button>
        <button onClick={stepHandler} className={`px-2 py-3 ${step? '': 'border-4 border-krem'} rounded-r-xl bg-slate-200 shadow-xl text-sm text-dark-green`}>Online</button>
    </motion.div>
    <h2 className='text-xl my-8 font-semibold text-dark-green mb-8'>Pendaftaran {step? 'Offline' : 'Online'}</h2>
    <div className='mb-[10rem] mt-8 py-6'>
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.5, ease: ['easeInOut']}}} className='flex justify-evenly items-center pt-6 relative'>
            <div className='size-28 bg-slate-200 rounded-full flex justify-center items-center shadow-xl p-1 '>
                <div className='border w-full h-full bg-slate-300 rounded-full flex justify-center items-center'>
                    <p className='text-2xl text-dark-green'>1</p>
                </div>
            </div>
            <motion.div initial={{opacity: 0, translateX: 40}} whileInView={{opacity: 1, translateX: 0, animationDelay: 1, transition: {duration: 1}}} className='flex-1 px-4'>
                <p className='font-semibold text-dark-green'>{step? 'Persiapan Dokumen – Siapkan dokumen seperti KK, Akta Kelahiran, KTP orang tua, ijazah, pas foto, dan dokumen lain yang diminta.': <>Isi form data dengan klik link ini <a className='text-blue-500' href="#form">Form pendaftaran</a></>}</p>
            </motion.div>
        </motion.div>
        {step?
            dataOffline.map((step, no) => {
                return(
            <motion.div initial={{opacity: 0, translateY: 40}} whileInView={{opacity: 0.8, translateY: 0, transition: {duration: 0.5, ease: ['easeInOut']}}} className='flex justify-evenly items-center pt-24 md:pt-[8rem] step-box relative'>
                <motion.div className='flex-2 size-28 bg-slate-200 rounded-full flex justify-center items-center shadow-xl p-1 '>
                    <div className='border w-full h-full bg-slate-300 rounded-full flex justify-center items-center'>
                        <p className='text-2xl text-dark-green'>{step.no}</p>
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0, translateX: 40}} whileInView={{opacity: 1, translateX: 0, animationDelay: 1, transition: {duration: 1}}} className='flex-1 px-4'>
                    <p className='font-semibold text-dark-green'>{ step.data }</p>
                </motion.div>
            </motion.div>
                )
            })
            :
            dataOnline.map((step, no) => {
                return(
                <motion.div initial={{opacity: 0, translateY: 40}} whileInView={{opacity: 0.8, translateY: 0, transition: {duration: 0.5, ease: ['easeInOut']}}} className='flex justify-evenly items-center pt-24 md:pt-[8rem] step-box relative'>
                    <motion.div className='flex-2 size-28 bg-slate-200 rounded-full flex justify-center items-center shadow-xl p-1 '>
                        <div className='border w-full h-full bg-slate-300 rounded-full flex justify-center items-center'>
                            <p className='text-2xl text-dark-green'>{step.no}</p>
                        </div>
                </motion.div>
                <motion.div initial={{opacity: 0, translateX: 40}} whileInView={{opacity: 1, translateX: 0, animationDelay: 1, transition: {duration: 1}}} className='flex-1 px-4'>
                    <p className='font-semibold text-dark-green'>{ step.data }</p>
                </motion.div>
                </motion.div>  
                )
            })
        }
    </div>
    </>
  )
}

export default RegisInfo