import React from 'react'
import HeroHomepage from '../Components/HeroHomepage'
import PosterHomepage from '../Components/PosterHomepage'
import ArtikelHomepage from '../Components/ArtikelHomepage'
import SectionHomepage from '../Components/SectionHomepage'

const HomePage = () => {
  return (
    <div className='px-4 md:px-8'>
        <HeroHomepage />
        <SectionHomepage />
        <PosterHomepage />
        <ArtikelHomepage />
    </div>
  )
}

export default HomePage