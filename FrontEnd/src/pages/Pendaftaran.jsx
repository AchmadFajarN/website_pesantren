import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import RegisInfo from '../components/RegistrationMain'
import Form from '../components/Form'

const Pendaftaran = () => {
  return (
    <div className='w-screen overflow-x-hidden'>
      <Navbar />
      <main className='h-full min-h-screen md:px-[4rem] px-4 mb-10'>
        <RegisInfo />
        <Form />
      </main>
      <Footer />
    </div>
  )
}

export default Pendaftaran