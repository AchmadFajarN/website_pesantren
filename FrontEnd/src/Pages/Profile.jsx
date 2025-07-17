import React from 'react'
import EducationSistem from '../Components/EducationSistem'
import VisiDanMisi from '../Components/VisiDanMisi'

const Profile = () => {
  return (
    <div className='w-full min-h-screen px-6 md:px-8 pt-[10rem]'>
      <EducationSistem />
      <VisiDanMisi />
    </div>
  )
}

export default Profile