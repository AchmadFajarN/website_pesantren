import React from 'react'
import Underline from './Underline'
import OfflinePendaftaran from './OfflinePendaftaran'

const PendaftaranSection = () => {
  return (
    <section className='w-full min-h-screen pt-40'>
        <h1 className='font-bold text-xl text-green-700'>Pendaftaran</h1>
        <Underline />
        <OfflinePendaftaran />
    </section>
  )
}

export default PendaftaranSection