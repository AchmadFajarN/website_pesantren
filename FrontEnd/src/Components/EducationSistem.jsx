import React from 'react'
import Underline from './Underline'
import img from '../assets/image/fotoSesi3.jpg'

const EducationSistem = () => {
  return (
    <section className='flex flex-col gap-8 md:flex-row'>
        <div className='flex-1'>
            <h1 className='font-bold text-lg text-green-700'>Sistem Pendidikan</h1>
            <Underline  />
            <p className='mt-4 font-semibold text-green-700'>Seiring dengan perkembangan zaman yang terus berubah dengan progresif secara linear, mengikuti kebutuhan masyarakat yang kian majemuk, sistem pendidikan dan pola pengajaran yang diterapkan di Pondok Pesantren Nurul Hikmah Assalafy mengacu pada sistem pendidikan dan pengajaran klasik (salafy), yang mengintgrasikan antara kurikulum Departement Agama dan kurikulum Departement pendidikan Nasional</p>
        </div>
        <div className='bg-slate-200 w-full min-h-80 md:flex-1 overflow-hidden rounded-md'>
            <img src={img} alt="" className='w-full h-[20rem] md:h-full object-center object-cover' />
        </div>
    </section>
  )
}

export default EducationSistem