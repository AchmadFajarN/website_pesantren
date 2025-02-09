import React from 'react'
import { MdArrowDropDown } from "react-icons/md";
import { useState } from 'react';
import { motion } from 'motion/react';

const RegisInfo = () => {
    const [dropdownOnlineActive, setDropdownOnlineActive] = useState(false)
    const [dropdownOfflineActive, setDropdownOfflineActive] = useState(false)
    const handleDropdownOnline = () => {
        setDropdownOnlineActive(!dropdownOnlineActive)
    }
    const handleDropdownOffline = () => {
        setDropdownOfflineActive(!dropdownOfflineActive)
    }
  return (
    <>
    <h1 className='text-2xl font-bold text-dark-green mt-4'>Langkah-langkah Pendaftaran:</h1>
    <div className='mb-[10rem] mt-8'>
            <div className="w-full flex flex-col md:flex-row md:gap-14 gap-8 justify-center md:items-start">
                <div className='md:flex-1 rounded-md shadow-xl bg-slate-200 px-4 py-4 md:px-8 flex flex-col justify-center items-center md:items-start'>
                    <div className='mb-4 bg-slate-300 rounded-sm shadow-md w-full px-2 py-2'>
                        <h2 className='text-xl font-bold text-dark-green'>Pendaftaran Online</h2>
                        <p onClick={handleDropdownOffline} className='text-sm mt-2 text-yellow-700 inline-flex items-center cursor-pointer'>Lihat Selengkapnya <MdArrowDropDown /></p>
                    </div>
                    {dropdownOfflineActive? <motion.div initial={{opacity: 0}} animate={{opacity: 1,transition: {duration: 0.5}}} className='w-full px-2 py-2 bg-slate-300 rounded-sm shadow-md'>
                        <ul className='text-dark-green font-semibold text-sm'>
                            <li>1. Isi form data dengan klik link ini <a  className='text-blue-500' href="#form">form pendaftaran</a></li>
                            <li>2. Setelah itu anda akan dihubungi pihak pesantren</li>
                            <li>3. Persiapkan dokumen yang diperlukan</li>
                            <li>4. Pengumuman hasil - Anda akan diberitahu oleh pihak pesantren</li>
                        </ul>
                    </motion.div> : ''}
                </div>
                <div className='md:flex-1 rounded-md shadow-xl bg-slate-200 px-4 py-4 md:px-8'>
                    <div className='mb-4 bg-slate-300 rounded-sm shadow-md w-full px-2 py-2'>
                        <h2 className='text-xl font-bold text-dark-green'>Pendaftaran Offline</h2>
                        <p onClick={handleDropdownOnline} className='text-sm mt-2 text-yellow-700 inline-flex items-center cursor-pointer'>Lihat Selengkapnya <MdArrowDropDown /></p>
                    </div>
                    {dropdownOnlineActive? <motion.div initial={{opacity: 0}} animate={{opacity: 1,transition: {duration: 0.5}}} className='px-2 py-2 bg-slate-300 rounded-sm shadow-md'>
                        <ul className='text-dark-green font-semibold text-sm'>
                            <li>1. Persiapan Dokumen – Siapkan dokumen seperti KK, Akta Kelahiran, KTP orang tua, ijazah, pas foto, dan dokumen lain yang diminta.</li>
                            <li>2. Datang ke Sekolah – Kunjungi sekolah sesuai jadwal.</li>
                            <li>3. Mengisi Formulir – Isi formulir pendaftaran dengan data yang benar dan lengkap.</li>
                            <li>4. Penyerahan Dokumen – Serahkan formulir dan dokumen ke panitia pendaftaran.</li>
                            <li>5. Pengumuman Hasil – Anda akan di beritahu oleh pihak pesantren</li>

                        </ul>
                    </motion.div> : ''}
                </div>
            </div>
    </div>
    </>
  )
}

export default RegisInfo