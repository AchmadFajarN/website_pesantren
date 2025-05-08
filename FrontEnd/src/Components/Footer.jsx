import React from 'react'
import  { Facebook, Mail } from 'lucide-react'


const Footer = () => {
  return (
    <footer className='mt-[10rem] bg-green-700 p-8'>
        <div className='flex flex-col gap-2 md:flex-row items-start md:items-center md:justify-between'>
            <h2 className='font-bold text-white'>Ponpes Nurul Hikmah assallafy</h2>
            <div>
                <a href="" className='mr-2 inline-block text-white'><Facebook /></a>
                <a href="" className='inline-block text-white'><Mail /></a>
            </div>
        </div>
        <div className='inline-block bg-white h-[2px] my-8 w-full'></div>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
            <p className='text-sm font-bold text-white'>© 2025. All rights reserved.</p>
            <div>
                <a className='text-sm font-bold text-yellow-500 mr-4' href="#">Privacy Policy</a>
                <a className='text-sm font-bold text-yellow-500' href="#">Terms of Service</a>
            </div>
        </div>
    </footer>
  )
}   

export default Footer